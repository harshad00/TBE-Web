import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routes } from './constant';

const courseEnrollPathExp = /^\/api\/v1\/courses\/[^/]+\/enroll$/;

const middleware = async (req: NextRequest) => {
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
  if (response.ok) {
    const { data }: { status: boolean; data: { email: string; _id: string } } =
      await response.json();
    const { _id } = data;
    if (currentUrl.startsWith(routes.register)) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    // "matcing /api/v1/courses/[dynamic]/enroll"
    else if (courseEnrollPathExp.test(req.nextUrl.pathname)) {
      const nextResponse = NextResponse.next();
      nextResponse.headers.set('x-user-id', _id);
      return nextResponse;
    }
    return NextResponse.redirect(new URL('/', req.url));
  }
};

export const config = {
  matcher: ['/register', '/api/v1/courses/:courseId/enroll'],
};

export { middleware };
