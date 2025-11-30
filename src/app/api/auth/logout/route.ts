import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const response = NextResponse.json({ success: true, message: "Logged out successfully" });

    response.cookies.delete("authToken");

    return response;
};