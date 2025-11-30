"use client";
import { useState, useEffect } from "react";
import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { ActionButtons } from "./action-buttons";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [rightPadding, setRightPadding] = useState("0px");

    useEffect(() => {
        const handleScroll = () => {
            // Add background/shadow only after scrolling down a bit
            setScrolled(window.scrollY > 20);
        };

        // Prevent layout shift when Radix UI locks body scroll
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "style") {
                    const bodyPadding = document.body.style.paddingRight;
                    setRightPadding(bodyPadding || "0px");
                }
            });
        });

        observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <header
            style={{ paddingRight: rightPadding }}
            className={cn(
                // 'sticky top-0' keeps it pinned to the top of the viewport
                "sticky top-0 z-50 w-full border-b transition-all duration-300 ease-in-out",
                scrolled
                    ? "bg-background/80 backdrop-blur-xl border-border/40 shadow-sm py-2" // "Floating" look when scrolled
                    : "bg-background/0 border-transparent py-4" // Clean look when at top
            )}
        >
            <div className="container max-w-screen-2xl mx-auto px-6 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Left: Brand */}
                    <div className="flex-shrink-0 w-[200px] transition-all duration-300">
                        <Logo scrolled={scrolled} />
                    </div>

                    {/* Center: Navigation */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <DesktopNav />
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center justify-end gap-4 w-[200px]">
                        <ActionButtons />
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;