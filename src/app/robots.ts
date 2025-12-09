import {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
    const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://jctjournals.com";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/admin/",
                "/editor/",
                "/author/",
                "/api/",
                "/unauthorized",
                "/_next/",
                "/static/",
            ],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}