import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rate Limiter configuration (Simple implementation)
// Track requests per IP address
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const LIMIT = 5; // Max 5 requests
const WINDOW_MS = 60 * 1000; // per 1 minute

export function middleware(request: NextRequest) {
  // 1. Apply rate limiting only to API routes or Server Actions
  if (
    request.nextUrl.pathname.startsWith("/api/") ||
    request.nextUrl.pathname.startsWith("/_next/data/")
  ) {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "127.0.0.1";
    const now = Date.now();
    const userLimit = rateLimit.get(ip) || { count: 0, lastReset: now };

    if (now - userLimit.lastReset > WINDOW_MS) {
      userLimit.count = 1;
      userLimit.lastReset = now;
    } else {
      userLimit.count++;
    }

    rateLimit.set(ip, userLimit);

    // 2. Block if limit exceeded
    if (userLimit.count > LIMIT) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }
  }

  // 3. Continue the request
  return NextResponse.next();
}

// 4. Configure matchers to ignore static assets
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
