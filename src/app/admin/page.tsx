import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default async function AdminRoot() {
    const token = (await cookies()).get("authToken");
    if (token) redirect('/admin/dashboard')
    return redirect('/admin/login?redirect=admin/dashboard');
}