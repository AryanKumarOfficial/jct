"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link  from "next/link";
import { BookOpen, Award, Users, TrendingUp } from "lucide-react";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                                Journal of Computing Technologies
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                                ISSN (online): 2278-3814
                            </p>
                            <div className="flex items-center justify-center gap-2 mb-8">
                                <Award className="h-6 w-6 text-primary" />
                                <p className="text-lg md:text-xl font-semibold text-foreground">
                                    SJIF Impact Factor: 7.26
                                </p>
                            </div>
                            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                                <span className="font-semibold text-primary">INSPIRE</span> •{" "}
                                <span className="font-semibold text-primary">AWARE</span> •{" "}
                                <span className="font-semibold text-primary">EXPLORE</span>
                            </p>
                            <p className="text-base md:text-lg text-muted-foreground mb-12 italic">
                                The Technology never bound Ideas, Ideas Explore the Technology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/submit">
                                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground font-semibold shadow-lg">
                                        Submit Your Research
                                    </Button>
                                </Link>
                                <Link href="/about">
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary-light/30">
                                        Learn More
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </section>

            {/* Features Section */}
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
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur">
                                    <feature.icon className="h-12 w-12 text-primary mb-4" />
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
        </div>
    );
};

export default Index;
