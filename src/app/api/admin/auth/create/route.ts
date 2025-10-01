import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import bcryptjs from "bcryptjs";
import {authorize} from "@/utils/authorize";
import {sendNewEditorMail} from "@/lib/mail/methods/sendNewEditorMail";

export const POST = async (req: NextRequest) => {
    try {

        await authorize(req, "ADMIN");
        const {firstName, lastName, email, password, specialization, role} = await req.json();
        if (!firstName || !email || !password) {
            return NextResponse.json({error: `Email or Password is required along with First Name`});
        }

        const empExists = await prisma.employee.findUnique({where: {email: email}});
        if (empExists) {
            return NextResponse.json({error: `Email is already in use`}, {status: 409});
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const newEmployee = await prisma.$transaction(async (tx) => {
            const newEmployee = await tx.employee.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                    specialization,
                    role
                }
            })
            await tx.activityLog.create({
                data: {
                    activity: "EMPLOYEE_ADDED",
                    details: `${newEmployee.firstName} ${newEmployee.lastName} ${newEmployee.email} is added by Admin`,
                    actorId: `my-name-is-aryan`
                }
            })
            return newEmployee;
        })

        await sendNewEditorMail({
            firstName: newEmployee.firstName,
            email: newEmployee.email,
            password: password
        })

        return Response.json(newEmployee);

    } catch
        (_err) {
        return NextResponse.json({error: `Failed to create the User`}, {status: 500})
    }
}