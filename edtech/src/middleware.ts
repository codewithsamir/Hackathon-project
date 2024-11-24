import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the token from cookies (request.cookies is a Map)
  const token = request.cookies.get('authToken');

  // Check if the token exists and the user is trying to access the Dashboard
  if (request.nextUrl.pathname.startsWith('/Dashboard')) {
    // If the token exists, allow access to the dashboard
    if (token) {
      return NextResponse.next(); // Continue to the Dashboard
    } else {
      // If no token, redirect to the home page
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Check if the user is trying to access the Signup page or Home page
  if (request.nextUrl.pathname === '/signup' || request.nextUrl.pathname === '/') {
    // If the token exists, redirect to Dashboard (because they are already logged in)
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    } else {
      // Allow access to Signup and Home if no token
      return NextResponse.next();
    }
  }

  // For other pages, just continue normally
  return NextResponse.next();
}

// Config to apply middleware on specific routes
export const config = {
  matcher: ['/dashboard/:path*', '/signup', '/'], // Protect the dashboard and other routes
};
