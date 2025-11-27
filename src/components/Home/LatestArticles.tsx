"use client";

import {motion} from "motion/react";
import Link from "next/link";

// Updated type to match the 'select' query from page.tsx
type PaperWithArchive = {
    id: string;
    name: string;
    submissionId: string;
    keywords: string[];
    archive?: {
        volume: number;
        issue: number;
        year: number;
    } | null;
    authors: {
        firstName: string;
        lastName: string | null;
    }[];
};

interface LatestArticlesProps {
    papers: PaperWithArchive[];
}

const LatestArticles = ({papers}: LatestArticlesProps) => {
    // Helper to format the meta string: "Vol. 12, Issue 1 (2025)"
    const getMetaString = (paper: PaperWithArchive) => {
        if (!paper.archive) return "Early Access";
        return `Vol. ${paper.archive.volume}, Issue ${paper.archive.issue} (${paper.archive.year})`;
    };

    // Helper to format author names: "John Doe, Jane Smith"
    const getAuthorsString = (authors: PaperWithArchive["authors"]) => {
        if (!authors || authors.length === 0) return "Unknown Author";
        return authors
            .map((a) => `${a.firstName} ${a.lastName || ""}`.trim())
            .join(", ");
    };

    return (
        <section id="latest" className="relative pt-16 pb-12 md:pt-20 md:pb-16">
            <div className="container max-w-screen-2xl mx-auto px-4">
                <div className="flex items-end justify-between gap-4 mb-6">
                    <div>
                        <motion.h2
                            initial={{opacity: 0, y: 12}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-100px"}}
                            transition={{duration: 0.5}}
                            className="text-2xl md:text-3xl font-semibold tracking-tight"
                        >
                            Latest Articles
                        </motion.h2>
                        <p className="text-sm text-muted-foreground mt-1">
                            Recently published papers from current issues.
                        </p>
                    </div>
                    <Link
                        href="/archives"
                        className="shrink-0 inline-flex items-center px-3 py-2 rounded-full border border-border/60 bg-card/50 hover:bg-primary/10 text-xs md:text-sm transition-colors"
                    >
                        View all archives →
                    </Link>
                </div>

                {papers.length === 0 ? (
                    <div className="text-center py-10 text-muted-foreground border border-dashed rounded-xl">
                        No articles published yet.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {papers.map((paper, i) => (
                            <motion.article
                                key={paper.id}
                                initial={{opacity: 0, y: 12}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: "-80px"}}
                                transition={{duration: 0.45, delay: 0.06 * i}}
                                className="group bg-card/70 border border-border/60 rounded-2xl p-5 supports-[backdrop-filter]:backdrop-blur-lg hover:border-primary/40 transition-colors shadow-sm flex flex-col h-full"
                            >
                                {/* Meta Data */}
                                <div className="text-xs text-muted-foreground mb-2">
                                    {getMetaString(paper)}
                                </div>

                                {/* Title */}
                                <h3 className="font-semibold leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    <Link href={`/paper/${paper.id}`} className="focus:outline-none">
                                        {/* Added Link wrapper so title is clickable */}
                                        <span className="absolute inset-0" aria-hidden="true"/>
                                        {paper.name}
                                    </Link>
                                </h3>

                                {/* Author Names */}
                                <div className="text-sm text-muted-foreground mb-3 truncate"
                                     title={getAuthorsString(paper.authors)}>
                                    {getAuthorsString(paper.authors)}
                                </div>

                                {/* Keywords/Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                    {paper.keywords?.slice(0, 3).map((t) => (
                                        <span
                                            key={t}
                                            className="text-[11px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/60 uppercase"
                                        >
                      {t}
                    </span>
                                    ))}
                                    {paper.keywords?.length > 3 && (
                                        <span className="text-[10px] text-muted-foreground py-0.5">
                      +{paper.keywords.length - 3}
                    </span>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default LatestArticles;