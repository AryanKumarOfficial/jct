"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, AlertCircle, Inbox, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

// Define Paper type based on your API
interface Paper {
    id: string;
    submissionId: string;
    name: string;
    keywords: string[];
    manuscriptUrl: string | null;
}

export default function EditorDashboard() {
    const [papers, setPapers] = useState<Paper[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPapers = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // TODO: Add Authorization header with token
                const response = await fetch("/api/editor/papers", {
                    headers: {
                        // "Authorization": "Bearer YOUR_TOKEN"
                    },
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Failed to fetch papers.");
                }

                // The API returns { papers: [...] }
                setPapers(data.papers || data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPapers();
    }, []);

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Editor Dashboard</h1>

            {isLoading && (
                <div className="flex justify-center p-12">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                </div>
            )}

            {error && (
                <Alert variant="destructive" className="max-w-2xl mx-auto">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {!isLoading && !error && (
                <>
                    {papers.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {papers.map((paper) => (
                                <Card key={paper.id} className="shadow-md flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{paper.name}</CardTitle>
                                        <CardDescription>{paper.submissionId}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-sm font-medium">Keywords:</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {paper.keywords.map((kw) => (
                                                <span key={kw} className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-full">
                          {kw}
                        </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild className="w-full">
                                            <Link href={`/editor/paper/${paper.submissionId}`}>
                                                Review Paper <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
                            <Inbox className="h-16 w-16 mx-auto text-muted-foreground" />
                            <h3 className="mt-4 text-xl font-semibold">Inbox Empty</h3>
                            <p className="text-muted-foreground">
                                You have no papers assigned for review at this time.
                            </p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}