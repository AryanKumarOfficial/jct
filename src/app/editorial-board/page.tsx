import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {User, Building} from "lucide-react";
import type {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Editorial Board",
        description: `Meet the editorial board of JCT Journals.`,
    };
}

// Placeholder data for board members
const boardMembers = [
    {
        name: "Dr. Evelyn Reed",
        role: "Editor-in-Chief",
        affiliation: "Massachusetts Institute of Technology, USA",
    },
    {
        name: "Prof. Kenji Tanaka",
        role: "Associate Editor (AI & ML)",
        affiliation: "University of Tokyo, Japan",
    },
    {
        name: "Dr. Maria Garcia",
        role: "Associate Editor (Education)",
        affiliation: "University of Barcelona, Spain",
    },
    {
        name: "Prof. David Kim",
        role: "Editorial Board Member",
        affiliation: "KAIST, South Korea",
    },
    {
        name: "Dr. Chidimma Okeke",
        role: "Editorial Board Member",
        affiliation: "University of Lagos, Nigeria",
    },
    {
        name: "Prof. Arjun Singh",
        role: "Editorial Board Member",
        affiliation: "Indian Institute of Technology, India",
    },
];

const EditorialBoardPage = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-primary-light/20 border-b border-border/50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Editorial Board
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our journal is supported by a distinguished group of international
                        experts and researchers.
                    </p>
                </div>
            </section>

            {/* Board Members Grid */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {boardMembers.map((member) => (
                        <Card
                            key={member.name}
                            className="shadow-lg hover:shadow-xl transition-shadow"
                        >
                            {/* Header: avatar + name + role */}
                            <CardHeader className="py-4">
                                <div className="flex items-center gap-4">
                                    {/* Use the User icon as a visual avatar — larger and decorative */}
                                    <div className="rounded-full bg-primary/10 p-2 flex items-center justify-center">
                                        <User className="h-8 w-8"/>
                                    </div>

                                    <div className="flex-1">
                                        <CardTitle
                                            className="text-lg md:text-xl text-foreground flex items-center gap-2">
                                            <span className="font-medium">{member.name}</span>
                                        </CardTitle>

                                        {/* Role displayed as a subtle pill */}
                                        <p className="mt-1 inline-flex items-center rounded-full py-0.5 text-sm font-medium bg-accent/5 text-primary">
                                            {/* We keep icons subtle in role pill if it helps readability */}
                                            <svg
                                                className="h-3 w-3 mr-2 flex-shrink-0 text-primary"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden
                                            >
                                                <circle cx="12" cy="12" r="10" />
                                            </svg>
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <div className="flex items-start gap-2 text-muted-foreground">
                                    {/* Building icon used to visually anchor the affiliation */}
                                    <Building className="h-4 w-4 mt-1 flex-shrink-0"/>
                                    <span className="text-sm">{member.affiliation}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default EditorialBoardPage;
