"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { archive as Archive } from "@/generated/prisma";

const COOKIE_KEY = "jct_announcement_dismissed";

export const AnnouncementUI = ({ archive }: { archive: Archive }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const dismissed = document.cookie.includes(`${COOKIE_KEY}=1`);
        if (!dismissed) setIsVisible(true);
    }, []);

    const dismiss = () => {
        document.cookie = `${COOKIE_KEY}=1; path=/; max-age=31536000`; // 1 year
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                id="announcement-bar"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative z-50 bg-primary text-primary-foreground overflow-hidden"
            >
                <div className="container max-w-screen-2xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4 text-xs md:text-sm">
                    <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="bg-primary-foreground/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
              New
            </span>
                        <p>
                            Call for Papers: Volume {archive.volume}, Issue {archive.issue} is open.
                        </p>
                        <Link href="/submit" className="hidden md:inline-flex underline ml-2">
                            Submit Now <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                    </div>

                    <button onClick={dismiss} className="p-1 rounded hover:bg-white/20">
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
