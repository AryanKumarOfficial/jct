"use client";
import {useState, useEffect} from "react";
import {motion} from "motion/react";
import {Logo} from "./logo";
import {DesktopNav} from "./desktop-nav";
import {ActionButtons} from "./action-buttons";
import {MobileNav} from "./mobile-nav";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [rightPadding, setRightPadding] = useState("0px");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        // --- Layout Shift Fix (Robust) ---
        // Radix UI adds 'padding-right' to the <body> when a Sheet/Dialog opens to prevent layout shift.
        // Since our Header is 'fixed', it doesn't inherit this. We must observe the body and apply the same padding.
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "style") {
                    const bodyPadding = document.body.style.paddingRight;
                    setRightPadding(bodyPadding || "0px");
                }
            });
        });

        // Start observing the body for style changes
        observer.observe(document.body, {attributes: true, attributeFilter: ["style"]});
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
                scrolled
                    ? "bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-sm py-2"
                    : "bg-transparent border-b border-transparent py-3"
            }`}
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{type: "spring", stiffness: 100, damping: 20}}
            // Apply the dynamic padding here
            style={{paddingRight: rightPadding}}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Pass scrolled prop if you want the logo to shrink, otherwise remove it */}
                    <Logo scrolled={scrolled}/>

                    {/* Center: Desktop Nav */}
                    <DesktopNav/>

                    {/* Right: Actions & Mobile Menu */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <ActionButtons/>
                        <MobileNav/>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;