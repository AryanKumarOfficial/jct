"use client";

import {motion} from "motion/react";
import Link from "next/link";
import {archive as Archive} from "@/generated/prisma";

const CallForPapers = ({archive}: { archive: Archive }) => {
    return (
        <section id="cfp" className="relative pt-14 pb-16">
            <div className="container max-w-screen-2xl mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 12}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-80px"}}
                    transition={{duration: 0.5}}
                    className="rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/15 via-primary/10 to-emerald-400/10 supports-[backdrop-filter]:backdrop-blur-xl p-6 md:p-8 text-center shadow-sm"
                >
                    <div
                        className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary/20 text-primary text-[11px] font-semibold uppercase tracking-widest border border-primary/30">
                        Call for Papers
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-3">
                        Now accepting submissions for Volume {archive.volume ?? 12},
                        Issue {archive.issue ?? 1} ({archive.year ?? 2025})
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-2xl mx-auto">
                        Share your latest research in AI, systems, data engineering, education technologies, and more.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
                        <Link
                            href="/submit"
                            className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/20 transition-colors"
                        >
                            Submit Manuscript
                        </Link>
                        <Link
                            href="/author-guidelines"
                            className="inline-flex items-center justify-center h-11 px-6 rounded-xl border-2 border-border hover:bg-secondary/50 transition-colors"
                        >
                            Author Guidelines
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallForPapers;
