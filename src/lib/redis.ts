// src/lib/redis.ts
import IORedis from "ioredis";

const getRedisConnection = () => {
    const useTls = process.env.REDIS_USE_TLS === "true";

    return new IORedis({
        host: process.env.REDIS_HOST || "localhost",
        port: Number(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD || undefined,
        ...(useTls ? { tls: {} } : {}),
        maxRetriesPerRequest: null, // Required by BullMQ
    });
};

export const redisConnection = getRedisConnection();