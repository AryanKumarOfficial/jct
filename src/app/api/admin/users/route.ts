import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {EmployeeRole} from "@/types/enums";

export const GET = async (req: NextRequest) => {
    try {
        const role = req.nextUrl.searchParams.get(`role`);
        const staffs = await prisma.employee.findMany({
            omit: {
                password: true
            },
            where: {
                role: role ? (role as EmployeeRole) : undefined
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