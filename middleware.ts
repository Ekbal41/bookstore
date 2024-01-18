import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticatedUser } from "./app/actions";
const protectedRoutes = ["/dashboard"];

export default async function middleware(req: NextRequest) {
  const isAuthUser = await isAuthenticatedUser();
  console.log(isAuthUser);
  // if (!isAuthUser && protectedRoutes.includes(req.nextUrl.pathname)) {
  //   const absoluteURL = new URL("/", req.nextUrl.origin);
  //   return NextResponse.redirect(absoluteURL.toString());
  // }
}
