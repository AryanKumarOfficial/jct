// src/lib/queue.ts
import {Queue} from "bullmq";
import {redisConnection} from "@/lib/redis";

const globalForQueue = global as unknown as { submissionQueue: Queue };
export const submissionQueue = globalForQueue.submissionQueue || new Queue("submission-queue", {
    connection: redisConnection,
    defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: 100,
        attempts: 3,
        backoff: {type: "exponential", delay: 5000}
    }
});
if (process.env.NODE_ENV !== "production") globalForQueue.submissionQueue = submissionQueue;