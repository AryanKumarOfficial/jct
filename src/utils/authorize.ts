import {NextRequest, NextResponse} from "next/server";
import {decodeJwtToken} from "@/utils/token";

export const authorize = async (req: NextRequest, role: string = "AUTHOR") => {
    const token = req.headers.get('authorization')?.split("Bearer ")[0];
    if (!token) {
        return NextResponse.json({error: `Authorization token is missing`}, {status: 401});
    }

    const payload = await decodeJwtToken({token});
    if (payload && payload?.role !== role) {
        return NextResponse.json({error: `Only an Admin can perform this action`}, {status: 403});
    }
}
