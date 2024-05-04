import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json()

   return new NextResponse({username: req.body,email: req.body, password: req.body})
}