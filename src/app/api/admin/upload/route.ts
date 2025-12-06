import { NextRequest, NextResponse } from "next/server";
import { authorize } from "@/utils/authorize";
import { fileUpload } from "@/utils/operations";
import { getObjectUrl } from "@/utils/cloudflare";
import { lookup } from "mime-types";

export const POST = async (req: NextRequest) => {
    try {
        await authorize(req, "ADMIN");

        const formData = await req.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const fileName = file.name;
        // This 'objectKey' is what you need to save as publishId
        const objectKey = `migration/${Date.now()}-${fileName.replace(/\s+/g, '_')}`;

        const buffer = Buffer.from(await file.arrayBuffer());
        const contentType = lookup(fileName) || "application/octet-stream";

        await fileUpload({ key: objectKey, buffer, contentType });

        const fileUrl = await getObjectUrl(objectKey);

        // RETURN BOTH URL AND KEY
        return NextResponse.json({ url: fileUrl, key: objectKey });

    } catch (error) {
        console.error("Upload Error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
};