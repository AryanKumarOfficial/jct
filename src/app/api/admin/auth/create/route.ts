import bcryptjs from "bcryptjs";
import { type NextRequest, NextResponse } from "next/server";
import { sendNewEditorMail } from "@/lib/mail/methods/sendNewEditorMail";
import { prisma } from "@/lib/prisma";
import { authorize } from "@/utils/authorize";
import { Prisma } from "@/generated/prisma"; // 1. Import Prisma types

/**
 * Handles the HTTP POST request for creating a new employee.
 */
export const POST = async (req: NextRequest): Promise<NextResponse> => {
    try {
        await authorize(req, "ADMIN");
        const { firstName, lastName, email, password, specialization, role } =
            await req.json();

        if (!firstName || !email || !password) {
            return NextResponse.json({
                error: `Email or Password is required along with First Name`,
            }, { status: 400 });
        }

        const empExists = await prisma.employee.findUnique({
            where: { email: email },
        });

        if (empExists) {
            return NextResponse.json(
                { error: `Email is already in use` },
                { status: 409 },
            );
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        // 2. Add type annotation ': Prisma.TransactionClient' to 'tx'
        const newEmployee = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
            const newEmployee = await tx.employee.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                    specialization,
                    role,
                },
            });

            // Note: If you uncomment this logging, ensure you fetch the actual admin ID using getTokenData(req)
            // await tx.activityLog.create({
            //     data: {
            //         activity: "EMPLOYEE_ADDED",
            //         details: `${newEmployee.firstName} ${newEmployee.lastName} (${newEmployee.email}) added by Admin`,
            //         // actorId: adminId,
            //     },
            // });

            return newEmployee;
        });

        await sendNewEditorMail({
            firstName: newEmployee.firstName,
            email: newEmployee.email,
            password: password,
        });

        return NextResponse.json(newEmployee);
    } catch (err) {
        console.error("Create Employee Error:", err);
        return NextResponse.json(
            { error: `Failed to create the User` },
            { status: 500 },
        );
    }
};