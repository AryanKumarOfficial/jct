import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
    scrolled?: boolean;
}

export const Logo = ({ scrolled = false }: LogoProps) => {
    return (
        <Link href="/" className="flex items-center gap-3 group relative z-50">
            {/* Dynamic Container Styling:
                1. Light Mode: 'bg-transparent shadow-none ring-0'
                   - This removes the box look. The 'mix-blend-multiply' on the image makes the JPG's white background transparent.
                2. Dark Mode: 'dark:bg-white dark:shadow-sm'
                   - This creates the white badge look so the green logo is visible against the dark header.
            */}
            <div
                className={cn(
                    "relative overflow-hidden rounded-xl transition-all duration-500 ease-in-out group-hover:scale-105",
                    // Light Mode: Seamless blending
                    "bg-transparent shadow-none ring-0",
                    // Dark Mode: White Badge
                    "dark:bg-white dark:shadow-sm dark:ring-1 dark:ring-white/10",
                    // Sizing
                    scrolled ? "h-9 w-9 md:h-10 md:w-10" : "h-11 w-11 md:h-14 md:w-14"
                )}
            >
                <Image
                    src="/images/logo.jpg"
                    alt="JCT Logo"
                    // mix-blend-multiply handles the white background removal in light mode
                    className="object-contain mix-blend-multiply dark:mix-blend-normal p-0.5"
                    fill
                    sizes="(max-width: 768px) 48px, 64px"
                    priority
                />
            </div>

            {/* Text Section */}
            <div className={cn(
                "hidden md:flex flex-col justify-center transition-all duration-500",
                scrolled ? "gap-0" : "gap-0.5"
            )}>
                <span className={cn(
                    "font-bold text-foreground leading-none tracking-tight group-hover:text-primary transition-all duration-500",
                    scrolled ? "text-base" : "text-lg"
                )}>
                    JCT Journals
                </span>
                <span className={cn(
                    "text-[10px] uppercase tracking-widest text-muted-foreground font-medium group-hover:text-primary/70 transition-all duration-500",
                    scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
                )}>
                   International Research Publications
                </span>
            </div>
        </Link>
    );
};