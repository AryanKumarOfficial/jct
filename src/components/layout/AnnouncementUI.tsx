"use client";

import {useState} from "react";
import {X, ArrowRight} from "lucide-react";
import {motion, AnimatePresence} from "motion/react";
import Link from "next/link";
import {archive as Archive} from "@/generated/prisma";

export const AnnouncementUI = ({archive}: { archive: Archive }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {(
                <motion.div
                    initial={{height: 0, opacity: 0}}
                    animate={{height: "auto", opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                    className="bg-primary text-primary-foreground relative z-10 overflow-hidden shadow-sm"
                >
                    <div
                        className="container max-w-screen-2xl mx-auto px-4 py-2.5 text-xs md:text-sm font-medium flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 mx-auto md:mx-0">
                            <span
                                className="bg-primary-foreground/20 px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider font-bold">
                                New
                            </span>
                            <p>
                                Call for Papers: Volume {archive.volume}, Issue {archive.issue} is now open for submissions.
                            </p>
                            <Link
                                href="/submit"
                                className="hidden md:inline-flex items-center underline underline-offset-4 hover:text-white/80 transition-colors ml-2"
                            >
                                Submit Now <ArrowRight className="ml-1 h-3 w-3"/>
                            </Link>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="p-1 hover:bg-white/20 rounded-full transition-colors"
                            aria-label="Dismiss announcement"
                        >
                            <X className="h-4 w-4"/>
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};