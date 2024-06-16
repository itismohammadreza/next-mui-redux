import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
// const token = request.cookies.get('token')?.value;
// const {user} = globalStateService.get();
// if (dataService.hasToken()) {
//   if (dataService.hasPermission(user.permissions!)) {
//     return true
//   } else {
//     return NextResponse.redirect('/404');
//   }
// } else {
//   dataService.logout();
//   const target = new URL('/auth/login', request.nextUrl.origin);
//   target.searchParams.append("returnUrl", request.nextUrl.pathname);
//   return NextResponse.redirect(target);
// }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
