"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ActionButtons = () => {
    const { setTheme } = useTheme();

    return (
        <div className="flex items-center gap-2 md:gap-3">
            {/* Theme Toggle */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-xl">
                    <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Submit CTA with Shimmer Effect */}
            <div className="hidden sm:block">
                <Link href="/submit">
                    <Button
                        size="sm"
                        className="relative overflow-hidden h-10 px-6 bg-primary text-primary-foreground hover:bg-primary-hover font-semibold rounded-full shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Submit Paper
                            <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};