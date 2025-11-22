"use client";

import React from "react";
import { motion } from "motion/react";
import { Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AimsScope = () => {
    return (
        <section id="aims" className="py-20 md:py-24 bg-background relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Icon and title */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                            <Target className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Aims & Scope
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                        {/* TODO: Replace with approved copy from content team */}
                        The Journal of Computing Technologies (JCT) is a peer-reviewed, open-access international 
                        journal dedicated to advancing research in computer science, information technology, 
                        engineering, and related interdisciplinary fields. We welcome original research articles, 
                        review papers, and technical reports that push the boundaries of computational innovation.
                    </p>

                    {/* CTA */}
                    <Link href="/aims-scope">
                        <Button 
                            variant="outline" 
                            size="lg"
                            className="group border-2 hover:border-primary hover:bg-primary/5 transition-all"
                        >
                            Read Full Aims & Scope
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AimsScope;
