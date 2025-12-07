import {MetadataRoute} from "next";
import {prisma} from "@/lib/prisma";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://jctjournals.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // 1. Static Routes
    const routes = [
        "",
        "/about",
        "/contact",
        "/editorial-board",
        "/author-guidelines",
        "/journals/jct",
        "/submit",
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // 2. Dynamic Papers (High Priority)
    const papers = await prisma.paper.findMany({
        where: {
            paperStatuses: {
                some: {status: "PUBLISHED"}
            }
        },
        select: {id: true, updatedAt: true, submissionId: true}
    });

    const paperRoutes = papers.map((paper) => ({
        url: `${BASE_URL}/paper/${paper.submissionId}`,
        lastModified: paper.updatedAt,
        changeFrequency: "weekly" as const, // Research papers don't change often
        priority: 1.0,
    }));

    return [...routes, ...paperRoutes];
}