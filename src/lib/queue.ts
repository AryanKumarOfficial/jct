// src/lib/queue.ts
import {Queue} from "bullmq";
import {redisConnection} from "@/lib/redis";


export const submissionQueue = new Queue("submission-queue", {
    connection: redisConnection,
    defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: 100,
        attempts: 3,
        backoff: {type: "exponential", delay: 5000}
    }
});
