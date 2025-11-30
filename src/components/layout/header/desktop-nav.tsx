"use client";
import Link from "next/link";
import { NAV_LINKS } from "./header-data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const DesktopNav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="relative group py-2"
                    >
                        <span className={cn(
                            "text-sm font-medium transition-colors duration-200",
                            isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                        )}>
                            {link.label}
                        </span>

                        {/* Animated Underline */}
                        <span className={cn(
                            "absolute bottom-0 left-0 h-[2px] bg-primary rounded-full transition-all duration-300 ease-out",
                            isActive ? "w-full" : "w-0 group-hover:w-full opacity-50"
                        )} />
                    </Link>
                );
            })}
        </nav>
    );
};