import { type NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// 1. Define Route Roles
const PROTECTED_ROUTES = [
    {
        path: "/admin",
        roles: ["ADMIN"],
        loginUrl: "/admin/login",
    },
    {
        path: "/editor",
        roles: ["EDITOR", "ADMIN"], // Admins can usually access editor routes
        loginUrl: "/admin/login",
    },
    {
        path: "/author",
        roles: ["AUTHOR"],
        loginUrl: "/author/login",
    },
];

// 2. Define Public Exceptions (Routes that start with protected paths but must be public)
const PUBLIC_EXCEPTIONS = [
    "/admin/login",
    "/author/login",
    "/author/signup", // Assuming you might have this
    "/api/author/auth", // Allow auth API calls
    "/api/admin/auth",
];

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

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
        // Optional: Add ?next= for redirecting back after login
        loginUrl.searchParams.set("next", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // 5. Verify Token & Check Role
    try {
        const secret = process.env.JWT_SECRET_KEY || "";
        const decoded = jwt.verify(token, secret) as { role: string };

        if (!routeRule.roles.includes(decoded.role)) {
            // User is logged in but doesn't have the right role
            // Return 403 Forbidden or Redirect to a generic "Unauthorized" page
            return NextResponse.rewrite(new URL("/unauthorized", request.url));
        }

        // Role is valid, proceed
        // We can also inject headers here if we want to pass user data to the layout
        const response = NextResponse.next();
        response.headers.set("x-user-role", decoded.role);
        return response;

    } catch (error) {
        // Token is invalid or expired
        console.error("Proxy Auth Error:", error);
        const loginUrl = new URL(routeRule.loginUrl, request.url);
        const response = NextResponse.redirect(loginUrl);

        // Clear the invalid cookie
        response.cookies.delete("authToken");
        return response;
    }
}

// Configure paths this proxy applies to (optional optimization)
// By default, it runs on all routes, but we can filter here.
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        "/((?!_next/static|_next/image|favicon.ico|images/).*)",
    ],
};