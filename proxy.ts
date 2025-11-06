import { NextResponse, NextRequest } from "next/server";

import { getToken } from "next-auth/jwt";
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/:path*", "/admin", "/profile", "/"],
};
const protectedRoutes = ["/", "/profile", "/admin"];

export async function proxy(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXT_SECRET });
  const url = req.nextUrl;

  const isAuthRoute = url.pathname.startsWith("/login");
  const isProtectedRoute = protectedRoutes.some((route) =>
    url.pathname.startsWith(route)
  );

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (token?.role != "admin" && url.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
