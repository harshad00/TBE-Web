import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routes } from './constant';

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
    if (currentUrl.startsWith(routes.register)) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.redirect(new URL('/', req.url));
  }
};

export const config = {
  matcher: '/register',
};

export { middleware };
