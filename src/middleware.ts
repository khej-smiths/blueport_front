import { ROUTE } from "@/shared";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname === ROUTE.LOGIN) {
    return NextResponse.next();
  }
}

/** ### Middleware가 제외될 경로
 *
 *  /api - API 라우트  
 *  /_next/static/ - Next.js 정적 파일  
 *  /_next/image/ - Next.js 이미지 최적화  
 *  /favicon.ico - 파비콘 파일  
 */
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
