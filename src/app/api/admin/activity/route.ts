import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authorize } from "@/utils/authorize";

export const GET = async (req: NextRequest) => {
    try {
        await authorize(req, "ADMIN");

        const logs = await prisma.activityLog.findMany({
            take: 50, // Limit to last 50 events for performance
            orderBy: { createdAt: "desc" },
            include: {
                actor: {
                    select: { firstName: true, lastName: true, role: true }
                },
                author: {
                    select: { firstName: true, lastName: true }
                },
                paper: {
                    select: { name: true, submissionId: true }
                }
            }
        });

        return NextResponse.json(logs);
    } catch (err) {
        console.error("Failed to fetch activity logs", err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};