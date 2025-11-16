import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Globe, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About JCT",
    description: "Learn about the Journal of Computing Technologies, our mission, vision, and scope.",
};

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-primary-light/20 border-b border-border/50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        About JCT Journals
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Advancing knowledge by providing a global platform for researchers
                        to share and discover cutting-edge developments in technology and
                        education.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Our Mission Card */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <Target className="h-8 w-8 text-primary" />
                                <CardTitle className="text-2xl">Our Mission</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            <p>
                                To foster a global community of scholars and practitioners by
                                disseminating high-quality, peer-reviewed research. We aim to
                                accelerate discovery and innovation in computing technologies
                                and educational research by ensuring rapid and open access to
                                scholarly work.
                            </p>
                            <p>
                                We are committed to upholding the highest standards of academic
                                integrity and providing a supportive and constructive platform
                                for authors.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Our Vision Card */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <Globe className="h-8 w-8 text-primary" />
                                <CardTitle className="text-2xl">Our Vision</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            <p>
                                To be the world's leading open-access publisher and a pivotal
                                resource for the computing and education communities. We
                                envision a future where knowledge is not just accessible but
                                also collaborative, driving solutions to global challenges.
                            </p>
                            <p>
                                We strive to bridge the gap between theoretical research and
                                practical application, making a tangible impact on society.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Scope Section */}
                <div className="mt-16">
                    <Card className="shadow-lg border-primary/20">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <BookOpen className="h-8 w-8 text-primary" />
                                <CardTitle className="text-2xl">Scope of Our Journals</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            <p>
                                JCT Journals invite high-quality submissions across a broad
                                spectrum of topics. Our two primary journals cover:
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <strong>Journal of Computing Technologies (JCT):</strong>{" "}
                                    Artificial intelligence, machine learning, data science,
                                    cybersecurity, cloud computing, IoT, software engineering,
                                    and human-computer interaction.
                                </li>
                                <li>
                                    <strong>Journal of Education & Research (JERT):</strong>{" "}
                                    E-learning technologies, pedagogical methods, curriculum
                                    development, STEM education, educational psychology, and
                                    assessment strategies.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;