import {type NextRequest, NextResponse} from "next/server";
import jwt from "jsonwebtoken";

// 1. Define Route Roles (Strict Separation)
const PROTECTED_ROUTES = [
    {
        path: "/admin",
        roles: ["ADMIN"], // Only ADMIN can access
        loginUrl: "/admin/login",
    },
    {
        path: "/editor",
        roles: ["EDITOR"], // Only EDITOR can access (Admin cannot)
        loginUrl: "/admin/login",
    },
    {
        path: "/author",
        roles: ["AUTHOR"], // Only AUTHOR can access (Admin cannot)
        loginUrl: "/author/login",
    },
];

// 2. Define Public Exceptions
const PUBLIC_EXCEPTIONS = [
    "/admin/login",
    "/author/login",
    "/author/signup",
    "/api/author/auth",
    "/api/admin/auth",
    "/unauthorized",
    '/author-guidelines',
    "/editorial-board"
];

export async function proxy(request: NextRequest) {
    const {pathname} = request.nextUrl;

    // 1. Skip Public Exceptions
    if (PUBLIC_EXCEPTIONS.some((path) => pathname.startsWith(path))) {
        return NextResponse.next();
    }

    // 2. Match Path to Protection Rules
    const routeRule = PROTECTED_ROUTES.find((rule) =>
        pathname.startsWith(rule.path)
    );

    // If the route is not protected, proceed
    if (!routeRule) {
        return NextResponse.next();
    }

    // 3. Get Token
    const token = request.cookies.get("authToken")?.value;

    // 4. Handle Missing Token
    if (!token) {
        const loginUrl = new URL(routeRule.loginUrl, request.url);
        loginUrl.searchParams.set("next", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // 5. Verify Token & Check Role
    try {
        const secret = process.env.JWT_SECRET_KEY || "";
        const decoded = jwt.verify(token, secret) as { role: string };

        // Strict Check: User's role MUST be in the allowed list
        if (!routeRule.roles.includes(decoded.role)) {
            console.warn(`Access Denied: Role ${decoded.role} tried to access ${pathname}`);
            return NextResponse.rewrite(new URL("/unauthorized", request.url));
        }

        // Role is valid, proceed
        const response = NextResponse.next();
        response.headers.set("x-user-role", decoded.role);
        return response;

    } catch (error) {
        console.error("Proxy Auth Error:", error);
        const loginUrl = new URL(routeRule.loginUrl, request.url);
        const response = NextResponse.redirect(loginUrl);

        // Clear the invalid cookie
        response.cookies.delete("authToken");
        return response;
    }
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|images/).*)",
    ],
};