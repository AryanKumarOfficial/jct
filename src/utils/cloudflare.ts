import {env} from "@/env";

/**
 * Generates a pre-signed URL for accessing an object in a storage bucket.
 *
 * @param {string} key - The key of the object in the storage bucket.
 * @return {Promise<string>} A promise that resolves to the pre-signed URL for the specified object.
 */
export async function getObjectUrl(key: string): Promise<string> {
    return `${env.R2_PUBLIC_ACCESS_ENDPOINT}/${key}`
}
