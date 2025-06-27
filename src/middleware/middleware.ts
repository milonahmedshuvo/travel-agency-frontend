// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value;
  console.log("TOKKKKKKKKKKKKKKKKKKKKK", token)

  // Check if user is trying to access a protected route
  const protectedPaths = ['/dashboard'];
  const isProtected = protectedPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Only run middleware on protected routes
export const config = {
  matcher: ['/dashboard/:path*'], // protect /dashboard and all subpaths
};
