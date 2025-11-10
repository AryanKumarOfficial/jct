import {NextRequest, NextResponse} from "next/server";

interface RequestBody {
    firstName: String
    lastName?: String
    email: String
    password: String
    organisation: String
    country: String
    phone: String
}

export const POST = async (req: NextRequest) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            password,
            country,
            organisation
        }: RequestBody = await req.json();

        if (!firstName || lastName || !email || !phone || !password || !country || !organisation) {
            return NextResponse.json({
                error: `Please provide all data`
            }, {status: 400})
        }


    } catch (err) {
        console.log(`Failed to create user account`, (err as Error).message);
        return NextResponse.json({error: `Internal Server Error`}, {status: 500});
    }
}