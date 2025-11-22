"use client";

import React from "react";
import {motion} from "motion/react";
import {Clock, Users, Globe2, CheckCircle} from "lucide-react";

const stats = [
    {
        label: "Review Speed",
        value: "4-6 Weeks",
        description: "Average time to first decision",
        icon: Clock,
    },
    {
        label: "Global Reach",
        value: "30+",
        description: "Countries represented by authors",
        icon: Globe2,
    },
    {
        label: "Acceptance Rate",
        value: "35%",
        description: "Rigorous peer-review process",
        icon: CheckCircle,
    },
    {
        label: "Community",
        value: "10k+",
        description: "Monthly readers & researchers",
        icon: Users,
    },
];

const JournalStats = () => {
    return (
        <section className="py-16 border-y border-border bg-muted/40">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1}}
                        >
                            <div
                                className="flex items-center gap-5 p-6 rounded-2xl hover:bg-card/70 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group border border-transparent hover:border-primary/20">
                                <div
                                    className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-primary/80 group-hover:scale-110 transition-all duration-300 shadow-md shadow-primary/10">
                                    <stat.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300"/>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all">{stat.value}</h3>
                                    <p className="text-sm font-semibold text-foreground/90 mt-1">{stat.label}</p>
                                    <p className="text-xs text-muted-foreground mt-0.5">{stat.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JournalStats;