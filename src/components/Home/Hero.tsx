"use client";

import React, { useState } from 'react';
import { Award, BookOpen, FileText, ArrowRight, CheckCircle2, Search } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {Variants} from "motion";

const Hero = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Redirect to your archives page with query
            router.push(`/archives?keyword=${encodeURIComponent(searchQuery)}`);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants:Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-light/20 via-background to-background pt-24 pb-20 md:pt-32 md:pb-28">
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                 style={{
                     backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                     backgroundSize: '40px 40px'
                 }}
            />

            <div className="container relative mx-auto px-4 z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center"
                    >
                        {/* Motto */}
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase border border-primary/20">
                                Inspire • Aware • Explore
                            </span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.div variants={itemVariants}>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
                                Journal of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Computing</span> Technologies
                            </h1>
                        </motion.div>

                        {/* Metadata Pills */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap justify-center gap-4 mb-10"
                        >
                            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-4 py-1.5 rounded-full shadow-sm">
                                <BookOpen className="h-3.5 w-3.5 text-primary" />
                                <span className="text-sm font-medium text-muted-foreground">
                                    ISSN: <span className="text-foreground font-semibold">2278-3814</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-4 py-1.5 rounded-full shadow-sm">
                                <Award className="h-3.5 w-3.5 text-orange-500" />
                                <span className="text-sm font-medium text-muted-foreground">
                                    Impact Factor: <span className="text-foreground font-semibold">7.26</span>
                                </span>
                            </div>
                        </motion.div>

                        {/* SEARCH BAR (New UX Element) */}
                        <motion.div variants={itemVariants} className="w-full max-w-lg mx-auto mb-12 relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-green-400/20 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <form onSubmit={handleSearch} className="relative flex items-center">
                                <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
                                <Input
                                    placeholder="Search research papers, authors, or topics..."
                                    className="h-14 pl-12 pr-4 rounded-xl text-base bg-background/80 backdrop-blur-xl border-primary/20 focus-visible:ring-primary/30 focus-visible:border-primary shadow-xl"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="absolute right-2 h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                                >
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </form>
                            <div className="flex justify-center gap-3 mt-3 text-xs text-muted-foreground">
                                <span>Popular:</span>
                                <Link href="/archives?keyword=AI" className="hover:text-primary underline decoration-dotted">Artificial Intelligence</Link>
                                <Link href="/archives?keyword=Cloud" className="hover:text-primary underline decoration-dotted">Cloud Computing</Link>
                                <Link href="/archives?keyword=IoT" className="hover:text-primary underline decoration-dotted">IoT</Link>
                            </div>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <Link href="/submit" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto text-base h-12 px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                                >
                                    <FileText className="mr-2 h-5 w-5" />
                                    Submit Manuscript
                                </Button>
                            </Link>

                            <Link href="/track" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto text-base h-12 px-8 border-2 hover:bg-secondary/50"
                                >
                                    <CheckCircle2 className="mr-2 h-5 w-5 text-muted-foreground" />
                                    Track Paper
                                </Button>
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;