import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "./header-data";

export const DesktopNav = () => {
    return (
        <nav className="hidden lg:flex items-center gap-1 bg-background/60 shadow-sm border border-border/50 px-2 py-1.5 rounded-full backdrop-blur-md">
            {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                    <Button
                        variant="ghost"
                        className="h-9 px-4 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all relative group"
                    >
                        {link.label}
                    </Button>
                </Link>
            ))}
        </nav>
    );
};