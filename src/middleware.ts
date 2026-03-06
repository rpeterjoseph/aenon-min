import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ── Set to false when you're ready to go live ──
const MAINTENANCE_MODE = true;

// Secret key to bypass maintenance and preview the real site
// Visit: https://yoursite.com?preview=aenon2024
const PREVIEW_SECRET = "aenon2024";

export function middleware(request: NextRequest) {
  if (!MAINTENANCE_MODE) return NextResponse.next();

  const { pathname, searchParams } = request.nextUrl;

  // Allow the maintenance page itself
  if (pathname === "/maintenance") return NextResponse.next();

  // Allow static assets (_next, images, fonts, etc.)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check for preview bypass via URL param or cookie
  if (searchParams.get("preview") === PREVIEW_SECRET) {
    const response = NextResponse.next();
    // Set a cookie so you don't need ?preview= on every page
    response.cookies.set("preview_bypass", "true", {
      maxAge: 60 * 5, // 5 minutes
    });
    return response;
  }

  // Check if preview cookie exists
  if (request.cookies.get("preview_bypass")?.value === "true") {
    return NextResponse.next();
  }

  // Redirect everyone else to maintenance
  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
