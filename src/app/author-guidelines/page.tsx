import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ClipboardCheck, Users, Percent } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Author Guidelines",
    description: "Guidelines for manuscript preparation and submission to JCT Journals.",
};

const AuthorGuidelinesPage = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-primary-light/20 border-b border-border/50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Author Guidelines
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Please review these guidelines carefully before submitting your
                        manuscript to ensure a smooth review process.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 py-16 md:py-24 space-y-12">
                {/* Manuscript Preparation */}
                <Card className="shadow-lg">
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <FileText className="h-8 w-8 text-primary" />
                            <CardTitle className="text-2xl">Manuscript Preparation</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>
                            Your manuscript should be prepared in English and formatted
                            according to the JCT template.
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>
                                <strong>Title Page:</strong> Must include the paper title, all
                                author names, affiliations, and the corresponding author's
                                contact details.
                            </li>
                            <li>
                                <strong>Abstract:</strong> A concise summary of 150-250 words,
                                outlining the purpose, methods, results, and conclusion.
                            </li>
                            <li>
                                <strong>Keywords:</strong> Provide 4-6 keywords for indexing
                                purposes.
                            </li>
                            <li>
                                <strong>Main Body:</strong> Should be structured with sections like
                                Introduction, Methods, Results, Discussion, and Conclusion.
                            </li>
                            <li>
                                <strong>References:</strong> Must be formatted in IEEE style. All
                                citations in the text must have a corresponding entry in the
                                reference list.
                            </li>
                            <li>
                                <strong>File Format:</strong> Submissions must be in Microsoft
                                Word (.doc, .docx) or PDF format.
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Submission Process */}
                <Card className="shadow-lg">
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <ClipboardCheck className="h-8 w-8 text-primary" />
                            <CardTitle className="text-2xl">Submission Process</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>
                            All manuscripts must be submitted through our online submission
                            system.
                        </p>
                        <ol className="list-decimal list-inside space-y-2 pl-4">
                            <li>
                                Navigate to the{" "}
                                <Link href="/submit" className="text-primary hover:underline">
                                    Submit Manuscript
                                </Link>{" "}
                                page.
                            </li>
                            <li>
                                Fill in all required fields, including paper details, author
                                information, and keywords.
                            </li>
                            <li>
                                Upload your manuscript file and any supplementary materials.
                            </li>
                            <li>
                                Agree to the terms and conditions, including the copyright
                                policy.
                            </li>
                            <li>
                                After submission, the corresponding author will receive a
                                confirmation email with a Submission ID for tracking.
                            </li>
                        </ol>
                    </CardContent>
                </Card>

                {/* Review Policy & Ethics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <Users className="h-8 w-8 text-primary" />
                                <CardTitle className="text-2xl">Peer Review Policy</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            <p>
                                JCT Journals employ a double-blind peer review process. All
                                submissions are first assessed by an editor for suitability.
                                Suitable papers are then sent to at least two independent expert
                                reviewers.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <Percent className="h-8 w-8 text-primary" />
                                <CardTitle className="text-2xl">Publication Ethics</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            <p>
                                We take publication ethics seriously. Plagiarism, data
                                fabrication, and duplicate submissions are strictly prohibited.
                                All authors must disclose any potential conflicts of interest.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default AuthorGuidelinesPage;