import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export const GET = async () => {
    try {
        const staffs = await prisma.employee.findMany({
            omit: {
                password: true
            }
        });
        if (!staffs) {
            return NextResponse.json({
                error: `No Staffs Found`
            }, {
                status: 404
            })
        }
        return NextResponse.json(staffs);

    } catch (err) {
        console.log(`Failed to fetch users`, err);
        return NextResponse.json({error: `Internal Server Error`}, {status: 500});
    }
}