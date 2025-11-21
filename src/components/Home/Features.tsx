import React from 'react'
import {Award, BookOpen, TrendingUp, Users} from "lucide-react";
import {motion} from "motion/react";
import {Card} from "@/components/ui/card";

const featuresData = [
    {
        icon: BookOpen,
        title: "Open Access",
        description: "Research is freely available to the public, supporting a greater global exchange of knowledge.",
    },
    {
        icon: Users,
        title: "Expert Peer Review",
        description: "Rigorous blind peer-review process by leading international experts to ensure quality.",
    },
    {
        icon: TrendingUp,
        title: "High Impact Factor",
        description: "With an SJIF Impact Factor of 7.26, we ensure your work gets the citation metrics it deserves.",
    },
    {
        icon: Award,
        title: "Global Recognition",
        description: "Indexed in Google Scholar, Copernicus, and major academic databases worldwide.",
    }
];

const Features = () => {
    // Animation variants
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {staggerChildren: 0.1}
        }
    };

    const cardVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
    };

    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                    >
                        Why Publish With <span className="text-primary">JCT</span>?
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: 0.1}}
                        className="text-muted-foreground text-lg"
                    >
                        We prioritize speed, quality, and the global dissemination of your research.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-50px"}}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {featuresData.map((feature, index) => (
                        <motion.div key={index} variants={cardVariants} className="h-full">
                            <Card
                                className="group relative h-full p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/60 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ease-in-out">

                                {/* Icon Container */}
                                <div
                                    className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                    <feature.icon className="h-7 w-7 text-primary"/>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
export default Features