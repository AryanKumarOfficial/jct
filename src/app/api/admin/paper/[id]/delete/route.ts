import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authorize } from "@/utils/authorize";
import { fileDelete } from "@/utils/operations"; // You already have this util

export const DELETE = async (
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) => {
    try {
        await authorize(req, "ADMIN");
        const { id } = await params;

        // 1. Find the paper to get the publishId
        const paper = await prisma.paper.findUnique({
            where: { id },
            select: { id: true, publishId: true, manuscriptId: true } // select manuscriptId too if needed
        });

        if (!paper) {
            return NextResponse.json({ error: "Paper not found" }, { status: 404 });
        }

        // 2. Delete from R2 (Cloudflare)
        if (paper.publishId) {
            try {
                await fileDelete({ key: paper.publishId });
                console.log(`Deleted R2 object: ${paper.publishId}`);
            } catch (r2Error) {
                console.error("Failed to delete file from R2:", r2Error);
                // We continue to delete the DB record even if R2 fails, or you can throw here
            }
        }

        // 3. Delete from Database
        await prisma.paper.delete({
            where: { id }
        });

        return NextResponse.json({ success: true, message: "Paper and files deleted" });

    } catch (error) {
        console.error("Delete Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};