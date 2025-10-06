import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { bucketName, r2 } from "@/lib/r2";

/**
 * Generates a pre-signed URL for accessing an object in a storage bucket.
 *
 * @param {string} key - The key of the object in the storage bucket.
 * @return {Promise<string>} A promise that resolves to the pre-signed URL for the specified object.
 */
export async function getObjectUrl(key: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: key,
  });

  return await getSignedUrl(r2, command, {
    expiresIn: 900,
  });
}
