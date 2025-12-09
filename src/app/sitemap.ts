import {MetadataRoute} from "next";
import {prisma} from "@/lib/prisma";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://jctjournals.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // HOMEPAGE

    const homeroute = {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 1.0,
    }

    // 1. Static Routes
    const routes = [
        "/about",
        "/contact",
        "/editorial-board",
        "/author-guidelines",
        "/journals/jct",
        "/submit",
        "/track",
        "/privacy-policy",
        "/terms-and-conditions",
        "/feed.xml",
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
        changeFrequency: "monthly" as const,
        priority: 0.9,
    }));

    return [homeroute,...routes, ...paperRoutes];
}