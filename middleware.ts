import { NextRequest, NextResponse } from "next/server";

export default function middleWare(req: NextRequest, res: NextResponse) {
    if(req.nextUrl.pathname.startsWith("/blog")) {
        return NextResponse.redirect(new URL("/signin", req.url))
    }
    if(req.nextUrl.pathname.startsWith("/")) {
        return NextResponse.next();
    }
}

export const matcher = {
    matcher: ["/blog"]
}