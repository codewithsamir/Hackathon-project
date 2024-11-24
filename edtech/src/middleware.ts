import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Cookies from 'js-cookie'; // You may use js-cookie or any other method to check cookies

export function middleware(request: NextRequest) {
  // Get the token from cookies (assuming it's stored in 'authToken')
  const token = request.cookies.get('authToken');

  if (token) {
    // If the token exists, redirect to Dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  } else {
    // If no token, redirect to home
    return NextResponse.redirect(new URL('/', request.url));
  }
}

// Config to match '/about/:path*' or any other paths where you want to apply this middleware
export const config = {
  matcher: '/about/:path*', // You can change this to match any routes you want
};
