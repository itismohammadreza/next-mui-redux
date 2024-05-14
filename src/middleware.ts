import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const target = new URL('/auth/login', request.nextUrl.origin);
  target.searchParams.append("returnUrl", request.nextUrl.pathname);
  return NextResponse.redirect(target);
}

export const config = {
  matcher: ["/"],
}
