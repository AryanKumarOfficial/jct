import React from 'react'
import {Award, BookOpen, TrendingUp, Users} from "lucide-react";
import {motion} from "motion/react";
import {Card} from "@/components/ui/card";

const Features = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: BookOpen,
                            title: "Open Access",
                            description: "Freely accessible research publications for global readership",
                        },
                        {
                            icon: Users,
                            title: "Expert Review",
                            description: "Rigorous peer review by leading experts in the field",
                        },
                        {
                            icon: TrendingUp,
                            title: "High Impact",
                            description: "SJIF Impact Factor of 7.26 for quality research",
                        },
                        {
                            icon: Award,
                            title: "Recognition",
                            description: "Indexed in major academic databases worldwide",
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true}}
                        >
                            <Card
                                className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur">
                                <feature.icon className="h-12 w-12 text-primary mb-4"/>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    )
}
export default Features
