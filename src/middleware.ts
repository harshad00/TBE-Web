import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { isAdmin } from './utils';

// const courseEnrollPathExp = /^\/api\/v1\/courses\/[^/]+\/enroll$/;
const adminRoutes: {
  path: RegExp;
  method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE';
}[] = [
  {
    path: /^\/api\/v1\/courses$/,
    method: 'GET',
  },
  {
    path: /^\/api\/v1\/course\/[^/]+$/,
    method: 'PATCH',
  },
  {
    path: /^\/api\/v1\/course\/[^/]+$/,
    method: 'DELETE',
  },
  {
    path: /^\/api\/v1\/courses\/[^/]+\/sections$/,
    method: 'POST',
  },
  {
    path: /^\/api\/v1\/courses\/[^/]+\/sections\/[^/]+$/,
    method: 'POST',
  },
  {
    path: /^\/api\/v1\/courses\/[^/]+\/sections\/[^/]+$/,
    method: 'DELETE',
  },
  {
    path: /^\/api\/v1\/courses\/[^/]+\/sections\/[^/]+$/,
    method: 'PATCH',
  },
];
const publicRoutes: {
  path: RegExp;
  method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE';
}[] = [
  {
    path: /^\/api\/v1\/course\/[^/]+$/,
    method: 'GET',
  },
];

const middleware = async (req: NextRequest) => {
  console.log('path matched : ', req.url);
  const response = await fetch(
    `${process.env.BASE_API_URL}/users/isauthenticated`,
    {
      credentials: 'include',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Cookie: req.headers.get('cookie') || '', // Forward the request cookies
      },
    }
  );
  // if the response is ok that means user is authenticated otherwise unauthenticated
  const currentUrl = req.nextUrl.pathname;
  const { method } = req;

  // handling public routes
  for (const route of publicRoutes) {
    if (route.path.test(currentUrl) && method === route.method)
      return NextResponse.next();
  }

  const { data }: { status: boolean; data: { email: string; _id: string } } =
    await response.json();

  if (!response.ok) {
    if (currentUrl === '/register') return NextResponse.next();
    else return NextResponse.redirect(new URL('/register', req.url));
  }

  if (currentUrl === '/register')
    return NextResponse.redirect(new URL('/', req.url));

  const { email } = data;

  for (const route of adminRoutes) {
    if (
      route.path.test(currentUrl) &&
      route.method === method &&
      !isAdmin(email)
    ) {
      return NextResponse.redirect(new URL('/register', req.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/register',
    '/api/v1/courses',
    '/api/v1/courses/:courseId',
    '/api/v1/courses/:courseId/enroll',
    '/api/v1/courses/:courseId/sections',
    '/api/v1/courses/:courseId/sections/:sectionId',
  ],
};

export { middleware };
