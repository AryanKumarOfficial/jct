import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FileText, Download, BookOpen} from "lucide-react";
import Link from "next/link";
import {notFound} from "next/navigation";

// Define Archive/Paper types based on your API response
interface Paper {
    id: string;
    name: string;
    publishUrl: string | null;
    authors: { firstName: string, lastName: string | null }[]; // Assuming authors are included
}

interface Archive {
    id: string;
    volume: number;
    issue: number;
    month: string;
    year: number;
    papers: Paper[];
}

// Fetch archives from your API
async function getArchives(): Promise<Archive[]> {
    try {
        // URL should be absolute for server-side fetching
        const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/archive`, {
            cache: "no-store", // Or use revalidation
        });
        if (!res.ok) return [];
        return await res.json();
    } catch (error) {
        console.error("Failed to fetch archives:", error);
        return [];
    }
}

export default async function JournalPage({params}: { params: Promise<{ journalId: string }> }) {
    const {journalId} = await params;

    // You can customize this logic.
    // For now, we just check if the journalId is one of the two expected.
    const journalName =
        journalId === "jct"
            ? "Journal of Computing Technologies (JCT)"
            : journalId === "jert"
                ? "Journal of Education & Research (JERT)"
                : null;

    if (!journalName) {
        notFound();
    }

    // Fetch all archives
    const archives = await getArchives();

    // TODO: You might want to filter archives based on `journalId` if your
    // API/database schema supports it. Currently, we display all archives.

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <section className="py-20 md:py-24 bg-primary-light/20 border-b border-border/50 rounded-lg">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {journalName}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Browse published articles by volume and issue.
                    </p>
                </div>
            </section>

            {/* Archives List */}
            <section className="mt-16 space-y-12">
                {archives.length > 0 ? (
                    archives.map((archive) => (
                        <Card key={archive.id} className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    Volume {archive.volume}, Issue {archive.issue}
                                </CardTitle>
                                <CardDescription>
                                    {archive.month} {archive.year}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {archive.papers.length > 0 ? (
                                    <div className="space-y-4">
                                        {archive.papers.map((paper) => (
                                            <div key={paper.id}
                                                 className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-md bg-muted/30">
                                                <div>
                                                    <h4 className="font-semibold text-foreground">
                                                        {paper.name}
                                                    </h4>
                                                    {/* <p className="text-sm text-muted-foreground">
                            {paper.authors.map(a => `${a.firstName} ${a.lastName || ''}`).join(', ')}
                          </p> */}
                                                </div>
                                                {paper.publishUrl ? (
                                                    <Button asChild variant="outline" className="mt-2 sm:mt-0">
                                                        <Link href={paper.publishUrl} target="_blank">
                                                            <Download className="mr-2 h-4 w-4"/>
                                                            View PDF
                                                        </Link>
                                                    </Button>
                                                ) : (
                                                    <Button variant="outline" disabled className="mt-2 sm:mt-0">
                                                        (Not Published)
                                                    </Button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-muted-foreground italic">
                                        No papers published in this issue yet.
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="text-center py-12">
                        <BookOpen className="h-12 w-12 mx-auto text-muted-foreground"/>
                        <h3 className="mt-4 text-xl font-semibold">No Archives Found</h3>
                        <p className="text-muted-foreground">
                            Published archives will appear here.
                        </p>
                    </div>
                )}
            </section>
        </div>
    );
}