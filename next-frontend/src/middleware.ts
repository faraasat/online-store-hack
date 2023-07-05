import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  afterAuth: (auth, req, evt) => {
    if (req.nextUrl.pathname.startsWith("/orders") && !auth.sessionId) {
      return NextResponse.redirect(`${req.nextUrl.origin}/sign-in`);
    } else if (
      req.nextUrl.pathname === "/orders/success" &&
      !req.nextUrl.searchParams.get("order_id")
    ) {
      if (auth.sessionId) {
        return NextResponse.redirect(`${req.nextUrl.origin}/orders`);
      } else {
        return NextResponse.redirect(`${req.nextUrl.origin}/`);
      }
    }
  },
});

export const config = {
  matcher: ["/orders", "/checkout", "/orders/:path*"],
};
