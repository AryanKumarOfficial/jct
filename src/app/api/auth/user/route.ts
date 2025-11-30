import { NextRequest, NextResponse } from "next/server";
import { getTokenData } from "@/utils/token";
import { prisma } from "@/lib/prisma";

export const GET = async (req: NextRequest) => {
    try {
        const tokenData = await getTokenData(req);

        if (!tokenData.success || !tokenData.data) {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        const { id, role } = tokenData.data;
        let user = null;

        if (role === "AUTHOR") {
            user = await prisma.author.findUnique({
                where: { id },
                select: { firstName: true, lastName: true, email: true }
            });
        } else {
            user = await prisma.employee.findUnique({
                where: { id },
                select: { firstName: true, lastName: true, email: true }
            });
        }

        if (!user) {
            return NextResponse.json({ user: null });
        }

        return NextResponse.json({
            user: { ...user, role }
        });
    } catch (error) {
        console.error("Auth Check Error:", error);
        return NextResponse.json({ user: null }, { status: 500 });
    }
};