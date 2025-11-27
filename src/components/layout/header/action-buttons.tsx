"use client";
import Link from "next/link";
import { Send} from "lucide-react";
import {Button} from "@/components/ui/button";

export const ActionButtons = () => {

    return (
        <div className="flex items-center gap-2 md:gap-3">
            {/* Submit CTA with Shimmer Effect */}
            <div className="hidden sm:block">
                <Link href="/submit">
                    <Button
                        size="sm"
                        className="relative overflow-hidden h-10 px-6 bg-primary text-primary-foreground hover:bg-primary-hover font-semibold rounded-full shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Submit Paper
                            <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"/>
                        </span>
                        {/* Shimmer overlay */}
                        <div
                            className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0"/>
                    </Button>
                </Link>
            </div>
        </div>
    );
};