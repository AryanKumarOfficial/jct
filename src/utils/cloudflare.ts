import {GetObjectCommand} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
import {bucketName, r2} from "@/lib/r2";

export async function getObjectUrl(key: string): Promise<string> {
    const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: key,
    })

    return await getSignedUrl(r2, command, {
        expiresIn: 900
    })
}