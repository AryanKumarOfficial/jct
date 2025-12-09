// app/page.tsx
import {prisma} from "@/lib/prisma";
import type {archive as Archive} from "@/generated/prisma"; // Keep your custom path

// COMPONENTS
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import JournalStats from "@/components/Home/JournalStats";
import AimsScope from "@/components/Home/AimsScope";
import Indexing from "@/components/Home/Indexing";
import LatestArticles from "@/components/Home/LatestArticles";
import EditorialTeaser from "@/components/Home/EditorialTeaser";
import EthicsGuidelines from "@/components/Home/EthicsGuidelines";
import CallForPapers from "@/components/Home/CallForPapers";
import {Metadata} from "next";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    const latest = await fetchLatestArchive();

    return {
        title: `Home | Vol ${latest.volume} Issue ${latest.issue}`,
        description: `Read the latest peer-reviewed research in Volume ${latest.volume}, Issue ${latest.issue} (${latest.month} ${latest.year}). JCT Journals publishes high-quality articles in Computer Science, Engineering, and Technology.`,
        openGraph: {
            title: `JCT Journals - Vol ${latest.volume} Issue ${latest.issue}`,
            description: `International peer-reviewed open access journal. Current Issue: ${latest.month} ${latest.year}.`,
        }
    };
}

/**
 * Fetch the latest archive metadata only.
 */
const fetchLatestArchive = async (): Promise<Archive> => {
    const latest = await prisma.archive.findFirst({
        orderBy: {createdAt: "desc"},
    });

    if (latest) return latest;

    // Fallback
    const now = new Date();
    return {
        id: "fallback-archive",
        volume: 0,
        issue: 0,
        month: now.toLocaleString("default", {month: "long"}),
        year: now.getFullYear(),
        createdAt: now,
        updatedAt: now,
    } as Archive;
};

/**
 * Fetch the latest 4 published papers.
 * select specific fields to reduce bandwidth.
 */
const fetchLatestPapers = async () => {
    return prisma.paper.findMany({
        where: {
            paperStatuses: {
                some: {status: "PUBLISHED"},
            },
        },
        take: 4,
        orderBy: {createdAt: "desc"},
        select: {
            id: true,
            name: true,
            keywords: true,
            submissionId: true,
            // Only fetch necessary relation data
            archive: {
                select: {
                    volume: true,
                    issue: true,
                    year: true,
                }
            },
            authors: {
                select: {
                    firstName: true,
                    lastName: true
                }
            }
        },
    });
};

export default async function Index() {
    // Parallel data fetching
    const [latestArchive, latestPapers] = await Promise.all([
        fetchLatestArchive(),
        fetchLatestPapers(),
    ]);

    const websiteJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "JCT Journals",
        "url": "https://jctjournals.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://jctjournals.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}}
            />
            <Hero/>
            <AimsScope/>
            {latestPapers.length > 0 &&
                <LatestArticles papers={latestPapers}/>
            }
            <Indexing/>
            <JournalStats/>
            <Features/>
            <EditorialTeaser/>
            <EthicsGuidelines/>
            <CallForPapers archive={latestArchive}/>
        </>
    );
}