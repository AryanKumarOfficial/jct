import React from 'react';
import {Award, BookOpen, FileText, ArrowRight, CheckCircle2} from "lucide-react";
import {motion} from "motion/react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Variants} from "motion";

const Hero = () => {
    // Animation variants for staggering children
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: "easeOut"}}
    };

    return (
        <section
            className="relative overflow-hidden bg-gradient-to-b from-primary-light/20 via-background to-background pt-24 pb-20 md:pt-32 md:pb-28">
            {/* Abstract Tech Background Pattern */}
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
                            <span
                                className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase border border-primary/20">
                                Inspire • Aware • Explore
                            </span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.div variants={itemVariants}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
                                Journal of <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">Computing</span> Technologies
                            </h1>
                        </motion.div>

                        {/* Metadata Pills (ISSN & Impact Factor) */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap justify-center gap-4 mb-8"
                        >
                            <div
                                className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full shadow-sm">
                                <BookOpen className="h-4 w-4 text-primary"/>
                                <span className="text-sm font-medium text-muted-foreground">
                                    ISSN (Online): <span className="text-foreground font-semibold">2278-3814</span>
                                </span>
                            </div>
                            <div
                                className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full shadow-sm">
                                <Award className="h-4 w-4 text-chart-5"/>
                                <span className="text-sm font-medium text-muted-foreground">
                                    SJIF Impact Factor: <span className="text-foreground font-semibold">7.26</span>
                                </span>
                            </div>
                        </motion.div>

                        {/* Quote */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto italic leading-relaxed"
                        >
                            "The Technology never bounds Ideas, Ideas Explore the Technology."
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <Link href="/submit" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto text-base h-12 px-8 shadow-md shadow-primary/20 group cursor-pointer"
                                >
                                    <FileText className="mr-2 h-5 w-5"/>
                                    Submit Research
                                    <ArrowRight
                                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                </Button>
                            </Link>

                            <Link href="/track" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto text-base h-12 px-8 border-2 hover:bg-secondary/50 hover:text-foreground cursor-pointer"
                                >
                                    <CheckCircle2 className="mr-2 h-5 w-5 text-muted-foreground"/>
                                    Track Paper
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Secondary Links */}
                        <motion.div variants={itemVariants} className="mt-8">
                            <Link href="/about"
                                  className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors">
                                Learn more about our guidelines →
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div
                className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"/>
            <div
                className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"/>
        </section>
    );
}

export default Hero;