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
        <section className="py-12 border-y border-border/50 bg-muted/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1}}
                        >
                            <div
                                className="flex items-center gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors">
                                <div
                                    className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <stat.icon className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                                    <p className="text-sm font-medium text-foreground/80">{stat.label}</p>
                                    <p className="text-xs text-muted-foreground">{stat.description}</p>
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