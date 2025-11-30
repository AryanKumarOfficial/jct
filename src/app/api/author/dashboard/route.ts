// app/api/author/dashboard/route.ts
import {NextRequest, NextResponse} from "next/server";
import {getTokenData} from "@/utils/token";
import {authorize} from "@/utils/authorize";
import {fetchAuthorDataRaw, transformToDashboard} from "@/lib/server/author";

export const GET = async (req: NextRequest) => {
    try {
        // Authorize middleware: return early if unauthorized (your authorize util may already return a Response)
        const authResp = await authorize(req, "AUTHOR");
        if (authResp) return authResp;

        const token = await getTokenData(req);
        if (!token.success) {
            return NextResponse.json({error: "Invalid token"}, {status: 401});
        }

        const raw = await fetchAuthorDataRaw(token.data.id);
        if (!raw) {
            return NextResponse.json({error: "Author not found"}, {status: 404});
        }

        const dashboard = transformToDashboard(raw);
        return NextResponse.json(dashboard);
    } catch (err) {
        console.error("Dashboard API Error:", err);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
};
