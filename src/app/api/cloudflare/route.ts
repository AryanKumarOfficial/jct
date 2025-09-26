import {getObjectUrl} from "@/utils/cloudflare";
import {lookup} from "mime-types"
import {DeleteObjectCommand} from "@aws-sdk/client-s3";
import {bucketName, r2} from "@/lib/r2";
import {NextRequest, NextResponse} from "next/server";
import {fileUpload} from "@/utils/operations";

export const dynamic = "force-dynamic";


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
        const data: Record<string, any> = {};
        formData.forEach((value, key) => {
            data[key] = value;
        })
        console.log("data: ", data);

        const {file, paperName, keywords, authors, volume, issue, month, year} = data;
        const fileName = file.name;
        const contentType = lookup(fileName) || "application/octet-stream"


        if (!file || !fileName || !paperName || authors || !volume || !issue || !month || !year) {
            return NextResponse.json({error: "Missing file or fileName"}, {status: 400});
        }

        const objectKey = `${Date.now()}-${fileName}`;
        const fileBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(fileBuffer);

        await fileUpload({key: objectKey, buffer, contentType});


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
