import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-3 group relative z-50">
            {/* Container: Increased size for visibility */}
            <div className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:ring-primary/30">
                <Image
                    src="/images/logo.jpg"
                    alt="JCT Logo"
                    // FIX:
                    // 1. Removed 'dark:brightness-0 dark:invert' (this was causing the white block).
                    // 2. Added 'mix-blend-multiply' so the white background blends in nicely in Light Mode.
                    // 3. Added 'dark:mix-blend-normal' so in Dark Mode it acts like a normal white badge/icon.
                    className="object-contain mix-blend-multiply dark:mix-blend-normal"
                    fill
                    sizes="(max-width: 768px) 64px, 80px"
                    priority
                />
            </div>

            {/* Text Section */}
            <div className="hidden md:flex flex-col justify-center">
                <span className="text-lg font-bold text-foreground leading-none tracking-tight group-hover:text-primary transition-colors">
                    JCT Journals
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mt-1.5 group-hover:text-primary/70 transition-colors">
                   International Research Publications
                </span>
            </div>
        </Link>
    );
};