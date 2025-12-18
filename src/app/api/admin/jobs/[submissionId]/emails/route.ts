// src/app/api/admin/jobs/[submissionId]/emails/route.ts
import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {authorize} from "@/utils/authorize";

export async function GET(
    req: NextRequest,
    {params}: { params: Promise<{ submissionId: string }> }
) {
    await authorize(req, "ADMIN");

    const logs = await prisma.submissionEmailLog.findMany({
        where: {submissionId: (await params).submissionId},
    });

    return NextResponse.json(logs);
}
