"use client";
import {useState, useEffect} from "react";
import {motion} from "motion/react";
import {Logo} from "./logo";
import {DesktopNav} from "./desktop-nav";
import {ActionButtons} from "./action-buttons";
import {MobileNav} from "./mobile-nav";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out ${
                scrolled
                    ? "bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-sm py-2"
                    : "bg-transparent border-b border-transparent py-4"
            }`}
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{type: "spring", stiffness: 100, damping: 20}}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Left: Logo */}
                    <Logo/>

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