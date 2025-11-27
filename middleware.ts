import { NextResponse, NextRequest } from "next/server";

// Protected paths for regular app users
const PROTECTED_PATHS = ["/", "/home", "/candidates"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow API, static assets, auth pages and Next internals
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname === "/login" ||
    pathname === "/register"
  ) {
    return NextResponse.next();
  }

  // --- Admin routes handling (if admin auth cookie present) ---
  const isAdmin = req.cookies.get("admin_auth")?.value === "valid";
  const isAdminLoginPage = pathname === "/admin" || pathname === "/admin/";
  const isProtectedAdminRoute = pathname.startsWith("/admin") && !isAdminLoginPage;

  if (isProtectedAdminRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (isAdminLoginPage && isAdmin) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  // --- Regular user protection ---
  const isProtected = PROTECTED_PATHS.some((p) =>
    p === "/" ? pathname === "/" : pathname.startsWith(p)
  );

  if (!isProtected) return NextResponse.next();

  const userCookie = req.cookies.get("user");

  if (!userCookie) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.search = `redirect=${encodeURIComponent(req.nextUrl.pathname)}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home", "/candidates/:path*", "/admin/:path*"],
};
