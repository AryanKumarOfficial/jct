import {getObjectUrl} from "@/utils/cloudflare";

export const dynamic = "force-dynamic";

import {DeleteObjectCommand, PutObjectCommand} from "@aws-sdk/client-s3";
import {bucketName, r2} from "@/lib/r2";
import {NextRequest, NextResponse} from "next/server";


export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const key = searchParams.get("key");
        if (!key) {
            return NextResponse.json({error: "Key is required"}, {status: 400})
        }

        const url = await getObjectUrl(key);
        return NextResponse.json({key, url}, {status: 500})

    } catch (err) {
        return NextResponse.json({error: "Error fetching URL"}, {status: 500})
    }
}

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        console.log("form data", formData);
        const file = formData.get("file") as File;
        const fileName = file.name;
        const contentType = req.headers.get("Content-Type");

        console.log("data: ", file, fileName, contentType);

        if (!file || !fileName) {
            return NextResponse.json({error: "Missing file or fileName"}, {status: 400});
        }

        const objectKey = `${Date.now()}-${fileName}`;
        const fileBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(fileBuffer);

        await r2.send(
            new PutObjectCommand({
                Bucket: bucketName,
                Key: objectKey,
                Body: buffer,
                ContentType: contentType || "application/octet-stream",
            })
        );


        const fileUrl = await getObjectUrl(objectKey);

        return NextResponse.json({url: fileUrl, key: objectKey}, {status: 200});
    } catch (err) {
        console.error("Upload error:", err);
        return NextResponse.json({error: "Failed to cloudflare"}, {status: 500});
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const {key} = await req.json();

        if (!key) {
            return NextResponse.json({error: "Missing object key"}, {status: 400});
        }

        const result = await r2.send(
            new DeleteObjectCommand({
                Bucket: bucketName,
                Key: key,
            })
        );
        console.log(result);

        return NextResponse.json({success: true}, {status: 200});
    } catch (err) {
        console.error("Delete error:", err);
        return NextResponse.json({error: "Failed to delete"}, {status: 500});
    }
}
