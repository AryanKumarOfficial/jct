"use client";

import {useState, useEffect} from "react";
import {Logo} from "./logo";
import {DesktopNav} from "./desktop-nav";
import {ActionButtons} from "./action-buttons";
import {MobileNav} from "./mobile-nav";
import {cn} from "@/lib/utils";
import {motion, useScroll, useSpring, useMotionValueEvent} from "motion/react";
import {usePathname} from "next/navigation";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [rightPadding, setRightPadding] = useState("0px");
    const pathname = usePathname();

    // Show reading progress mainly on Paper or Journal pages
    const isReadingPage = pathname?.startsWith("/paper/") || pathname?.startsWith("/journals/");

    // 1. Motion Scroll Detection
    const {scrollY, scrollYProgress} = useScroll();

    // 2. Native Motion Event Listener (Optimized)
    // This replaces the manual window.addEventListener
    useMotionValueEvent(scrollY, "change", (latest) => {
        const isScrolled = latest > 10; // Trigger slightly earlier for responsiveness
        if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
        }
    });

    // Spring physics for the progress bar smoothing
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // 3. Layout Shift Prevention (Mutation Observer)
    // This keeps the header aligned when scrollbars appear/disappear (e.g. modals opening)
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "style") {
                    const bodyPadding = document.body.style.paddingRight;
                    setRightPadding(bodyPadding || "0px");
                }
            });
        });

        observer.observe(document.body, {attributes: true, attributeFilter: ["style"]});
        return () => observer.disconnect();
    }, []);

    return (
        <motion.header
            style={{paddingRight: rightPadding}}
            className={cn(
                // Sticky positioning
                "sticky top-0 z-50 w-full border-b transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                // Conditional styling based on the 'scrolled' state
                scrolled
                    ? "bg-background/95 backdrop-blur-md border-border/40 shadow-sm py-2" // Increased opacity to 95 for better visibility
                    : "bg-transparent border-transparent py-4"
            )}
        >
            <div className="container max-w-screen-2xl mx-auto px-6 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Left: Brand */}
                    <div className="flex-shrink-0 w-[200px] transition-all duration-300">
                        <Logo scrolled={scrolled}/>
                    </div>

                    {/* Center: Navigation */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <DesktopNav/>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center justify-end gap-4 w-[200px]">
                        <ActionButtons/>
                        <MobileNav/>
                    </div>
                </div>
            </div>

            {/* Reading Progress Indicator */}
            {isReadingPage && (
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary origin-left z-50"
                    style={{scaleX}}
                />
            )}
        </motion.header>
    );
};

export default Header;