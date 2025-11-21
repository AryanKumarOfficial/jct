"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Menu, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Logo } from "./logo";
import { NAV_LINKS } from "./header-data";

export const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-accent/50">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[380px] p-0 border-l border-border/50 bg-background/95 backdrop-blur-2xl">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>

                <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="p-6 border-b border-border/50">
                        <Logo />
                    </div>

                    {/* Mobile Links */}
                    <div className="flex-1 overflow-y-auto py-6 px-4">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col gap-2"
                        >
                            {NAV_LINKS.map((link) => (
                                <motion.div key={link.href} variants={itemVariants}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-accent/50 active:bg-accent transition-colors text-muted-foreground hover:text-foreground group"
                                    >
                                        <div className="h-9 w-9 rounded-lg bg-background border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors">
                                            <link.icon className="h-4.5 w-4.5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-medium text-base">{link.label}</span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Mobile Footer */}
                    <div className="p-6 bg-muted/20 border-t border-border/50">
                        <Link href="/submit" onClick={() => setIsOpen(false)}>
                            <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary-hover font-bold shadow-lg shadow-primary/20">
                                Submit Manuscript
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <div className="mt-6 text-center text-xs text-muted-foreground">
                            © {new Date().getFullYear()} JCT Journals.
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};