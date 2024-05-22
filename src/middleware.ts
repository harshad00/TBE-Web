import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const response = await fetch(
    `${process.env.BASE_API_URL}/users/isauthencticed`,
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
    if (currentUrl.startsWith('/register')) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.redirect(new URL('/', req.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/register',
};
