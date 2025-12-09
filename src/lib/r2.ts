// lib/r2.ts
import {S3Client} from "@aws-sdk/client-s3";
import {env} from "@/env";

/**
 * An instance of the S3Client class configured for interaction with Cloudflare R2.
 *
 * This client is used to perform operations on an R2 storage service, and it is
 * initialized with specific configuration parameters:
 *
 * - `region`: Set to "auto" as required by Cloudflare R2.
 * - `endpoint`: The URL for the R2 storage endpoint, provided via `R2_ENDPOINT` environment variable.
 * - `credentials`: Includes the access key ID and secret access key for authentication,
 *   provided via `R2_ACCESS_KEY_ID` and `R2_SECRET_ACCESS_KEY` environment variables.
 *
 * The S3Client from the AWS SDK is used here to manage interactions with the R2 storage.
 */
export const r2 = new S3Client({
    region: "auto", // Cloudflare R2 requires "auto"
    endpoint: env.R2_ENDPOINT, // e.g. https://<accountid>.r2.cloudflarestorage.com
    credentials: {
        accessKeyId: env.R2_ACCESS_KEY_ID,
        secretAccessKey: env.R2_SECRET_ACCESS_KEY,
    },
});

/**
 * The name of the bucket used for storage, retrieved from the environment variable `R2_BUCKET_NAME`.
 * This value is required and expected to be defined in the environment configuration.
 */
export const bucketName = env.R2_BUCKET_NAME;
