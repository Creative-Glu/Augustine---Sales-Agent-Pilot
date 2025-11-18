import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const pathname = request.nextUrl.pathname;

  if (!token && pathname.startsWith('/')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/products/:path*',
    '/campaigns/:path*',
    '/icp/:path*',
    '/kpi-dashboard/:path*',
    '/product-offers/:path*',
  ],
};
