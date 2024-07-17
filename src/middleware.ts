import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { isAdmin, isUserAuthenticated } from './utils';
import { routes } from './constant';

const adminRoutes: {
  path: RegExp;
  method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE';
}[] = [
  {
    path: /^\/api\/v1\/courses$/,
    method: 'POST',
  },
  {
    // /api/v1/courses/6656b735d95906c8e1abc529
    path: /^\/api\/v1\/courses\/[^/]*$/,
    method: 'PATCH',
  },
  {
    // /api/v1/courses/6656b735d95906c8e1abc529
    path: /^\/api\/v1\/courses\/[^/]*$/,
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
  {
    path: /^\/api\/v1\/courses\/[^/]+\/sections\/[^/]+\/chapters$/,
    method: 'POST',
  },
  {
    path: /^\/api\/v1\/courses\/[^/]+\/sections\/[^/]+\/chapters(?:\/[^/]+)?$/,
    method: 'DELETE',
  },
  {
    path: /^\/api\/v1\/courses\/[^/]+\/sections\/[^/]+\/chapters(?:\/[^/]+)?$/,
    method: 'PATCH',
  },
];

const publicRoutes: {
  path: RegExp;
  method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE';
}[] = [
  {
    path: /^\/api\/v1\/courses\/[^/]+$/,
    method: 'GET',
  },
  {
    path: /^\/api\/v1\/courses$/,
    method: 'GET',
  },
];

const middleware = async (req: NextRequest) => {
  console.log('path matched : ', req.url);

  const currentUrl = req.nextUrl.pathname;
  const { method } = req;

  // handling public routes
  for (const route of publicRoutes) {
    if (route.path.test(currentUrl) && method === route.method)
      return NextResponse.next();
  }

  for (const route of adminRoutes) {
    console.log(
      'HERE',
      route,
      route.path.test(currentUrl),
      route.method === method
    );
    if (
      route.path.test(currentUrl) &&
      route.method === method &&
      isAdmin(req.headers.get('x-admin-secret') || '')
    ) {
      console.log('HERE', 1);
      return NextResponse.redirect(new URL(routes.home, req.url));
    }
  }

  const isAuthenticated = await isUserAuthenticated(req);

  if (!isAuthenticated) {
    if (currentUrl === routes.register) return NextResponse.next();
    else if (currentUrl === routes.shikshaExplore) return NextResponse.next();
    else return NextResponse.redirect(new URL(routes.register, req.url));
  }

  if (currentUrl === routes.register)
    return NextResponse.redirect(new URL(routes.home, req.url));

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/register',
    '/shiksha/:courseSlug*',
    // '/api/v1/courses',
    // '/api/v1/courses/:courseId*',
    // '/api/v1/courses/:courseId/enroll',
    // '/api/v1/courses/:courseId/sections',
    // '/api/v1/courses/:courseId/sections/:sectionId',
    // '/api/v1/courses/:courseId/sections/:sectionId/chapter',
    // '/api/v1/courses/:courseId/sections/:sectionId/chapter/:chapterId*',
  ],
};

export { middleware };
