import { Worker } from "bullmq";
import { prisma } from "@/lib/prisma";
import { sendSubmissionMail } from "@/lib/mail/methods/sendSubmissionMail";
import { ActivityType } from "@/generated/prisma";
import {redisConnection} from "@/lib/redis";


type SubmissionJob = {
    submissionId: string;
    paperId: string;
    authors: {
        firstName: string;
        email: string;
        password: string;
    }[];
};

const worker = new Worker<SubmissionJob>(
    "submission-queue",
    async (job) => {
        const { submissionId, paperId, authors } = job.data;

        // 1️⃣ Send emails
        await Promise.allSettled(
            authors.map((a) =>
                sendSubmissionMail({
                    firstName: a.firstName,
                    email: a.email,
                    password: a.password,
                    submissionId,
                })
            )
        );

        // 2️⃣ Log background completion
        await prisma.activityLog.create({
            data: {
                paperId,
                activity: ActivityType.SUBMISSION_JOB_COMPLETED,
                details: `Background processing of submission ${submissionId} completed.`,
            },
        });

        return { ok: true };
    },
    {
        connection:redisConnection,
        concurrency: 5,
    }
);

worker.on("completed", (job) => {
    console.log(`✅ Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
    console.error(`❌ Job ${job?.id} failed`, err);
});
