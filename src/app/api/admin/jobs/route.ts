// src/app/api/admin/jobs/route.ts
import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {authorize} from "@/utils/authorize";

export async function GET(req: NextRequest) {
    await authorize(req, "ADMIN");

    const jobs = await prisma.jobRun.findMany({
        orderBy: {createdAt: "desc"},
        take: 50,
        include: {
            activityLogs: true,
            paper: {
                select: {
                    submissionId: true,
                    name: true,
                },
            },
        },
    });

    return NextResponse.json(jobs);
}
