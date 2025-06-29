import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;

  const isAuth = Boolean(token);
  const { pathname } = request.nextUrl;

  // Protected paths
  const isProtectedPath = pathname.startsWith("/dashboard");

  // If trying to access a protected route without a token
  if (isProtectedPath && !isAuth) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname); // optional: keep track of where user was
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
