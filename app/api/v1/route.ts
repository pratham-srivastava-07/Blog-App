import { NextRequest, NextResponse } from "next/server";

export function POST(req: NextRequest, res: NextResponse) {
    const email = req.body.email;
    const password =  req.body.password;
}