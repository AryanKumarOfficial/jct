"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "./header-data";
import { usePathname } from "next/navigation";

export const DesktopNav = () => {
    const pathname = usePathname();
    return (
        <nav className="hidden lg:flex items-center gap-1 bg-card/70 border border-border/60 px-2 py-1.5 rounded-full backdrop-blur supports-[backdrop-filter]:backdrop-blur-lg shadow-sm">
            {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                return (
                    <Link key={link.href} href={link.href} aria-current={isActive ? "page" : undefined}>
                        <Button
                            variant="ghost"
                            className={`h-9 px-4 rounded-full text-sm font-medium transition-all relative group focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-0
                            ${isActive ? "text-foreground bg-primary/15" : "text-muted-foreground hover:text-foreground hover:bg-primary/10"}`}
                        >
                            {link.label}
                            <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all
                                ${isActive ? "w-3/4" : "w-0 group-hover:w-3/4"}`}></span>
                        </Button>
                    </Link>
                );
            })}
        </nav>
    );
};