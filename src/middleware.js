// src/middleware.js
import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./auth"; // Make sure the path is correct.

export const middleware = async (request) => {
  const session = await getServerSession(request, authOptions);

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/book/:path*"],
};
