import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import bcryptjs from "bcryptjs";
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
        })

        return Response.json(newEmployee);

    } catch
        (_err) {
        return NextResponse.json({error: `Failed to create the User`}, {status: 500})
    }
}