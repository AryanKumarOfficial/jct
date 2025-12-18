import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {authorize} from "@/utils/authorize";
import {submissionQueue} from "@/lib/queue";

export async function POST(
    req: NextRequest,
    {params}: { params: Promise<{ submissionId: string }> }
) {
    await authorize(req, "ADMIN");

    const submissionId = (await params).submissionId;

    // Reset FAILED emails back to PENDING
    const result = await prisma.submissionEmailLog.updateMany({
        where: {
            submissionId,
            status: "FAILED",
        },
        data: {
            status: "PENDING",
            error: null,
        },
    });

    if (result.count === 0) {
        return NextResponse.json({message: "No failed emails to retry"});
    }

    // Re-enqueue a job (safe due to idempotency)
    await submissionQueue.add("process-submission", {
        submissionId,
    });

    return NextResponse.json({
        message: `Retry triggered for ${result.count} email(s)`,
    });
}
