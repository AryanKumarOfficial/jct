import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Admin",
    description: "Admin"
}

export default async function AdminRoot() {
    const token = (await cookies()).get("authToken");
    if (token) redirect('/admin/dashboard')
    return redirect('/admin/login?redirect=admin/dashboard');
}