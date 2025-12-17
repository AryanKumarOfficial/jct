// src/lib/redis.ts
import IORedis from "ioredis";
import {env} from "@/env";

const getRedisConnection = () => {
    return new IORedis(env.REDIS_URL, {
        maxRetriesPerRequest: null,
    });
};

const globalForRedis = global as unknown as { redis: IORedis };

export const redisConnection = globalForRedis.redis || getRedisConnection();
if (process.env.NODE_ENV !== "production") globalForRedis.redis = redisConnection;