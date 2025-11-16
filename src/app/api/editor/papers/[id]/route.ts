// /api/editor/papers/[id]/route.ts
import {NextRequest, NextResponse} from "next/server";
import {authorize} from "@/utils/authorize";
import {prisma} from "@/lib/prisma";
import {getTokenData} from "@/utils/token";

/**
 * GET /api/editor/papers/:id
 * Returns a single paper object (includes archive). Only the assigned editor may fetch it.
 */
export const GET = async (
    req: NextRequest,
    {params}: { params: Promise<{ id: string }> }
) => {
    try {
        // authorize will return a NextResponse on failure, or void on success
        const authResp = await authorize(req, "EDITOR");
        if (authResp) return authResp;

        // get token payload (should include user id)
        const token = await getTokenData(req);
        if (!token?.success) {
            return NextResponse.json({error: token?.error ?? "Invalid token"}, {status: 401});
        }

        const {id} = await params;
        if (!id) {
            return NextResponse.json({error: "Submission ID is required"}, {status: 400});
        }

        // Find paper by submissionId
        const paper = await prisma.paper.findFirst({
            where: {submissionId: id},
            include: {archive: true},
        });

        if (!paper) {
            return NextResponse.json({error: "Paper not found"}, {status: 404});
        }

        // ownership check: ensure the requesting editor is assigned to this paper
        if (paper.editorId !== token.data.id) {
            return NextResponse.json({error: "You are not the assigned editor for this paper"}, {status: 403});
        }

        // Return the paper object (client handles history separately or via other endpoint)
        return NextResponse.json(paper, {status: 200});
    } catch (err) {
        console.error("GET /api/editor/papers/[id] error:", err);
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
};
