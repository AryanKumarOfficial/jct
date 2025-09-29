import {bucketName, r2} from "@/lib/r2";
import {DeleteObjectCommand, PutObjectCommand} from "@aws-sdk/client-s3";

interface FileUpload {
    key: string;
    buffer: Buffer;
    contentType: string;
}

export const fileUpload = async ({key, buffer, contentType}: FileUpload) => {
    await r2.send(
        new PutObjectCommand({
            Bucket: bucketName,
            Key: key,
            Body: buffer,
            ContentType: contentType,
        }),
    );
};

export const fileDelete = async ({key}: { key: string }) => {
    await r2.send(
        new DeleteObjectCommand({
            Bucket: bucketName,
            Key: key,
        }),
    )
}