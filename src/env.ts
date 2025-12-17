import {z} from "zod";

const envSchema = z.object({
    // --- Database ---
    DATABASE_URL: z.url().describe("PostgreSQL Connection String"),
    DATABASE_CON_LIMIT: z.coerce.number().optional().default(10),

    // --- App Configuration ---
    NEXT_PUBLIC_APP_URL: z.url().describe("The public URL of the app (e.g. https://jctjournals.com)"),

    // --- Authentication ---
    JWT_SECRET_KEY: z.string().min(32, "JWT Secret must be at least 32 characters long for security"),

    // --- Email (Nodemailer) ---
    EMAIL_USER: z.string().min(1, "Email username is required"),
    EMAIL_PASSWORD: z.string().min(1, "Email password is required"),

    // --- Cloudflare R2 (Storage) ---
    R2_ENDPOINT: z.url(),
    R2_ACCESS_KEY_ID: z.string().min(1),
    R2_SECRET_ACCESS_KEY: z.string().min(1),
    R2_BUCKET_NAME: z.string().min(1),
    R2_PUBLIC_ACCESS_ENDPOINT: z.url().describe("Public URL to access stored files"),

    // --- Razorpay (Payments) ---
    RAZORPAY_KEY: z.string().min(1).describe("Server-side Razorpay Key ID"),
    RAZORPAY_SECRET_KEY: z.string().min(1),
    RAZORPAY_WEBHOOK_SECRET: z.string().min(1),

    // --- Public Variables (Client-side) ---
    // Note: These must also be accessed via process.env in the schema for Zod to pick them up
    NEXT_PUBLIC_RAZORPAY_KEY_ID: z.string().min(1).describe("Client-side Razorpay Key ID"),

    // REDIS (for background jobs)
    REDIS_URL: z.url().describe("Redis connection string"),
    REDIS_TLS: z.string(),
});

// Validate `process.env` against the schema
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error(
        "❌ Invalid environment variables:",
        JSON.stringify(z.treeifyError(parsedEnv.error), null, 2)
    );
    // Throwing an error here prevents the app from building/starting with a bad config
    throw new Error("Invalid environment variables. Check your .env file.");
}

export const env = parsedEnv.data;