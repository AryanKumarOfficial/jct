import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Mail, FileText, CheckCircle2, Search, CreditCard } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Editorial Board",
    description: "Meet the editorial board of JCT Journals.",
};

const boardMembers = [
    {
        name: "Dr. Mohd Nazri Ismail (MALAYSIA)",
        role: "Editor-in-Chief",
    },
    {
        name: "Dr. M V Ragahavendra (INDIA)",
        role: "Associate Editor",
    },
    {
        name: "Er. Gaurav Tejpal (INDIA)",
        role: "Associate Editor",
    },
    {
        name: "Dr. Tanu Preet Singh (INDIA)",
        role: "Associate Editor",
    },
    {
        name: "Mr. Gulshan Kumar (INDIA)",
        role: "Associate Editor",
    },
    {
        name: "Er. Lalit Kumar Saraswat (INDIA)",
        role: "Associate Editor",
    },
    {
        name: "Dr. Vuda Sreenivasarao (INDIA)",
        role: "Associate Editor",
    },
    {
        name: "Er. Saroj Hiranwal (INDIA)",
        role: "Associate Editor",
    },
    {
        name: "Er. Prof. Jagdish Dubey (USSR)",
        role: "Associate Editor",
    },
    {
        name: "DR. Subha Ganguly",
        role: "Associate Editor",
    },
    {
        name: "Er. Suyash Bhardwaj (INDIA)",
        role: "Associate Editor",
    },
    {
        name: "Er. Ajay B. Gadicha (INDIA)",
        role: "Associate Editor",
    },
    {
        name: "Dr. Dragan Peraković (CROATIAN)",
        role: "Associate Editor",
    },
    {
        name: "Dr. Anandaraj SP",
        role: "Associate Editor",
    },
    {
        name: "Mr. Girish Kumar",
        role: "Associate Editor",
    },
    {
        name: "Er. Jana Shafi",
        role: "Associate Editor",
    },
    {
        name: "Mr. Ali I.Al-Mosawi (IRAQ)",
        role: "Associate Editor",
    },
    {
        name: "Dr. A.V.Krishna Prasad",
        role: "Associate Editor",
    },
];

const EditorialBoardPage = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-12 md:py-16 bg-primary-light/20 border-b border-border/50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        Editorial Board
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto italic">
                        *Editorial board comprises of only experienced members
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8 md:py-12 space-y-10">
                {/* From Editor Section - Placed before the list */}
                <section className="max-w-5xl mx-auto">
                    <Card className="bg-muted/30 border-primary/20 shadow-sm">
                        <CardHeader className="pb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <FileText className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl md:text-2xl">From Editor</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6 text-muted-foreground">
                            <p className="text-sm md:text-base leading-relaxed">
                                All the manuscripts (Articles, Papers, Books) submitted to the online journal of
                                computing technologies are reviewed in three steps:
                            </p>

                            <div className="grid gap-4 md:grid-cols-3">
                                <div className="bg-card p-4 rounded-xl border shadow-sm hover:border-primary/30 transition-colors">
                                    <div className="flex items-center gap-2 mb-2 font-semibold text-foreground">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                        <span>Step 1</span>
                                    </div>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        All articles are tested for format and checked for grammatical and formatting
                                        mistakes. Not more than 2 mistakes per page are allowed. In that case, paper
                                        will not proceed to step 2.
                                    </p>
                                </div>

                                <div className="bg-card p-4 rounded-xl border shadow-sm hover:border-primary/30 transition-colors">
                                    <div className="flex items-center gap-2 mb-2 font-semibold text-foreground">
                                        <Search className="h-5 w-5 text-blue-600" />
                                        <span>Step 2</span>
                                    </div>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        This includes the domain justification of the paper, articles, books. After
                                        this, these articles are moved to the concerned reviewers team for evaluation.
                                    </p>
                                </div>

                                <div className="bg-card p-4 rounded-xl border shadow-sm hover:border-primary/30 transition-colors">
                                    <div className="flex items-center gap-2 mb-2 font-semibold text-foreground">
                                        <CreditCard className="h-5 w-5 text-purple-600" />
                                        <span>Step 3</span>
                                    </div>
                                    <p className="text-xs md:text-sm leading-relaxed">
                                        On basis of evaluation report, further payment and copyrights are filed for
                                        concerned submission.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Board Members Grid */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-center md:text-left px-1">Board Members</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {boardMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="shadow-sm hover:shadow-md transition-shadow border-muted"
                            >
                                <CardHeader className="p-5">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-full bg-primary/5 p-3 flex items-center justify-center flex-shrink-0 border border-primary/10">
                                            <User className="h-6 w-6 text-primary/80" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <CardTitle className="text-base font-medium text-foreground leading-tight mb-1">
                                                {member.name}
                                            </CardTitle>
                                            <p className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-accent text-accent-foreground">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Call for Members Section */}
                <section className="max-w-3xl mx-auto">
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">Interested in Joining?</h3>
                        <p className="text-muted-foreground mb-6 text-sm md:text-base">
                            We are always looking for experienced members to join our board. Kindly send your C.V. to:
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                            <a
                                href="mailto:editor@jctjournals.com"
                                className="text-primary font-medium hover:underline hover:text-primary/80 transition-colors"
                            >
                                editor@jctjournals.com
                            </a>
                            <span className="hidden sm:inline text-muted-foreground">•</span>
                            <a
                                href="mailto:editorjct.online@gmail.com"
                                className="text-primary font-medium hover:underline hover:text-primary/80 transition-colors"
                            >
                                editorjct.online@gmail.com
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EditorialBoardPage;