// src/worker/submit-worker.ts
import {Worker, Job} from "bullmq";
import { ActivityType, EmailStatus} from "@/generated/prisma";
import {sendSubmissionMail} from "@/lib/mail/methods/sendSubmissionMail";
import {redisConnection} from "@/lib/redis";
import {prisma} from "@/lib/prisma";

type SubmissionJob = {
    submissionId: string;
    paperId: string;
    authors: {
        firstName: string;
        email: string;
        password: string;
    }[];
    manuscriptKey?: string;
    manuscriptUrl?: string;
};

const globalForWorker = global as unknown as { submissionWorker: Worker<SubmissionJob> };

const CLAIM_STALE_MS = 60_000; // reclaim SENDING older than this (ms)

const worker = globalForWorker.submissionWorker ||
    new Worker<SubmissionJob>(
        "submission-queue",
        async (job: Job<SubmissionJob>) => {
            const {submissionId, paperId, authors} = job.data;
            const total = authors.length + 2; // emails + jobRun + activity
            let done = 0;

            const updateProgress = async (stepDesc: string) => {
                done += 1;
                const pct = Math.round((done / total) * 100);
                await job.updateProgress({pct, step: stepDesc, done, total});
            };

            const jobIdStr = String(job.id);

            // 1) Ensure a JobRun row exists (mark IN_PROGRESS)
            await prisma.jobRun.upsert({
                where: {jobId: jobIdStr},
                update: {
                    status: "IN_PROGRESS",
                    attempts: job.attemptsMade ?? 0,
                },
                create: {
                    jobId: jobIdStr,
                    submissionId,
                    paperId,
                    status: "IN_PROGRESS",
                    attempts: job.attemptsMade ?? 0,
                },
            });

            await updateProgress("claimed job");

            // 2) For each author, try to atomically claim a pending (or stale sending) email log
            for (const a of authors) {
                // Build reclaim cutoff
                const staleDate = new Date(Date.now() - CLAIM_STALE_MS);

                // Try to claim: either PENDING or SENDING but stale
                const claimed = await prisma.submissionEmailLog.updateMany({
                    where: {
                        submissionId,
                        email: a.email,
                        OR: [
                            {status: EmailStatus.PENDING},
                            {
                                AND: [
                                    {status: EmailStatus.SENDING},
                                    {lastAttempt: {lt: staleDate}},
                                ],
                            },
                        ],
                    },
                    data: {
                        status: EmailStatus.SENDING,
                        attemptCount: {increment: 1},
                        lastAttempt: new Date(),
                    },
                });

                if (claimed.count === 0) {
                    // Nothing to do - either already sent or another worker claimed it recently
                    continue;
                }

                // We claimed it — now actually send
                try {
                    await sendSubmissionMail({
                        firstName: a.firstName,
                        email: a.email,
                        password: a.password,
                        submissionId,
                    });

                    // mark SENT (only if status is still SENDING)
                    await prisma.submissionEmailLog.updateMany({
                        where: {submissionId, email: a.email, status: EmailStatus.SENDING},
                        data: {status: EmailStatus.SENT, sentAt: new Date()},
                    });
                } catch (err: any) {
                    const msg = String(err?.message ?? err).slice(0, 2000);
                    // mark FAILED (only if status is still SENDING)
                    await prisma.submissionEmailLog.updateMany({
                        where: {submissionId, email: a.email, status: EmailStatus.SENDING},
                        data: {
                            status: EmailStatus.FAILED,
                            lastAttempt: new Date(),
                            error: msg,
                        },
                    });

                    // Rethrow so Bull will handle attempts/backoff
                    throw err;
                }

                await updateProgress(`email sent to ${a.email}`);
            }

            // 3) Upsert JobRun to COMPLETED and create ActivityLog only once (nested create on creation)
            await prisma.jobRun.upsert({
                where: {jobId: jobIdStr},
                update: {
                    status: "COMPLETED",
                    completedAt: new Date(),
                    attempts: job.attemptsMade ?? 0,
                },
                create: {
                    jobId: jobIdStr,
                    submissionId,
                    paperId,
                    status: "COMPLETED",
                    attempts: job.attemptsMade ?? 0,
                    completedAt: new Date(),
                    activityLogs: {
                        create: {
                            paper: {connect: {id: paperId}},
                            activity: ActivityType.SUBMISSION_JOB_COMPLETED,
                            details: `Background processing of submission ${submissionId} completed.`,
                        },
                    },
                },
            });

            await updateProgress("created activity log");

            await job.updateProgress({pct: 100, step: "done", done: total, total});

            return {ok: true};
        },
        {
            connection: redisConnection,
            concurrency: 5,
            lockDuration: 60_000, // tune if needed (ms)
        }
    );

if (!globalForWorker.submissionWorker) {
    worker.on("completed", (job) => {
        console.log(`✅ Job ${job.id} completed`);
    });

    worker.on("failed", (job, err) => {
        console.error(`❌ Job ${job?.id} failed`, err);
    });

    worker.on("progress", (job, progress) => {
        console.log(`🔄 Job ${job?.id} progress:`, progress);
    });
}

if (process.env.NODE_ENV !== "production") globalForWorker.submissionWorker = worker;
