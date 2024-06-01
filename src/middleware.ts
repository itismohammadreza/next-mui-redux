import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // const {user} = globalStateService.get();
  // if (authService.hasToken()) {
  //   if (authService.hasPermission(user.permissions!)) {
  //     return true
  //   } else {
  //     return NextResponse.redirect('/404');
  //   }
  // } else {
  //   authService.logout();
  //   const target = new URL('/auth/login', request.nextUrl.origin);
  //   target.searchParams.append("returnUrl", request.nextUrl.pathname);
  //   return NextResponse.redirect(target);
  // }
}

export const config = {
  matcher: ["/"],
}
