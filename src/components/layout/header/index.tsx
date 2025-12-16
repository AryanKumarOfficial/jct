"use client";

import { useState } from "react";
import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { ActionButtons } from "./action-buttons";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useMotionValueEvent } from "motion/react";
import { usePathname } from "next/navigation";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const isReadingPage =
        pathname?.startsWith("/paper/") || pathname?.startsWith("/journals/");

    const { scrollY, scrollYProgress } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 10);
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.header
            className={cn(
                "relative z-40 w-full border-b transition-all duration-300 py-4",
                scrolled
                    ? "bg-background/95 backdrop-blur-md border-border/40 shadow-sm"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container max-w-screen-2xl mx-auto px-6 md:px-8">
                <div className="flex items-center justify-between">
                    <div className="w-[200px]">
                        <Logo scrolled={scrolled} />
                    </div>

                    <div className="hidden lg:flex flex-1 justify-center">
                        <DesktopNav />
                    </div>

                    <div className="flex items-center justify-end gap-4 w-[200px]">
                        <ActionButtons />
                        <MobileNav />
                    </div>
                </div>
            </div>

            {isReadingPage && (
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary origin-left"
                    style={{ scaleX }}
                />
            )}
        </motion.header>
    );
};

export default Header;
