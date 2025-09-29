import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {decodeJwtToken} from "@/utils/token";

export const POST = async (req: NextRequest) => {

    try {
        const token = req.headers.get('authorization')?.split(" ")[0];
        if (!token) {
            return NextResponse.json({error: `Authorization token is missing`}, {status: 401});
        }

        const decodedToken = decodeJwtToken({token});
        const payload = decodedToken?.payload;
        if (payload && payload?.role !== "ADMIN") {
            return NextResponse.json({error: `Only an Admin can perform this action`}, {status: 403});
        }
        const {volume, issue, month, year} = await req.json();
        if (!volume || !issue || !month || !year) {
            return NextResponse.json({error: "Data Provided"}, {status: 400});
        }

        const newArchive = await prisma.archive.create({
            data: {
                volume,
                issue,
                month,
                year,
            },
        });

        return NextResponse.json(newArchive, {status: 201});
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500},
        );
    }
};
