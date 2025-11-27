"use client";

import { useState, useEffect, Suspense, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Search, Loader2, AlertCircle, CheckCircle2, FileClock, History } from "lucide-react";
import { useSearchParams } from "next/navigation";

// Define the structure of a status update
interface Status {
    id: string;
    status: string;
    comments: string[];
    createdAt: string;
    changedBy: {
        firstName: string;
        lastName: string | null;
    } | null;
}

function TrackSubmissionContent() {
    const searchParams = useSearchParams();
    // Initialize state directly from URL if present
    const [paperId, setPaperId] = useState(searchParams.get("id") || "");
    const [statusHistory, setStatusHistory] = useState<Status[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searched, setSearched] = useState(false);

    // Reusable fetch function
    const fetchStatus = useCallback(async (id: string) => {
        if (!id.trim()) return;

        setIsLoading(true);
        setError(null);
        setSearched(true);
        setStatusHistory([]);

        try {
            const response = await fetch(`/api/author/status?paperId=${encodeURIComponent(id)}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Could not find paper status.");
            }

            setStatusHistory(data);
        } catch (err: any) {
            setError(err instanceof Error ? err.message : "An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Effect: Automatically fetch status if ID is present in URL on mount
    useEffect(() => {
        const urlId = searchParams.get("id");
        if (urlId) {
            setPaperId(urlId); // Sync input with URL
            fetchStatus(urlId);
        }
    }, [searchParams, fetchStatus]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetchStatus(paperId);
    };

    return (
        <div className="container mx-auto max-w-3xl px-4 py-16">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">Track Your Submission</CardTitle>
                    <CardDescription>
                        Enter your Submission ID (e.g., JCT-25-001) to see its current status.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex items-end gap-4">
                        <div className="flex-grow space-y-2">
                            <Label htmlFor="paperId">Submission ID</Label>
                            <Input
                                id="paperId"
                                placeholder="JCT-..."
                                value={paperId}
                                onChange={(e) => setPaperId(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" size="lg" disabled={isLoading}>
                            {isLoading ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Search className="mr-2 h-4 w-4" />
                            )}
                            Track
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <div className="mt-8">
                {isLoading && (
                    <div className="flex justify-center p-8">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                )}

                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {statusHistory.length > 0 && (
                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <History className="h-5 w-5 text-primary" />
                                Status History for {paperId}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative space-y-8 pl-6 border-l-2 border-dashed border-border">
                                {statusHistory.map((status, index) => (
                                    <div key={status.id} className="relative">
                                        <div className="absolute -left-[33px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-background ring-4 ring-primary">
                                            {index === 0 ? (
                                                <FileClock className="h-5 w-5 text-primary" />
                                            ) : (
                                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                                            )}
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-lg text-foreground">
                                                {status.status.replace("_", " ")}
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                {new Date(status.createdAt).toLocaleString()}
                                                {status.changedBy && ` by ${status.changedBy.firstName}`}
                                            </p>
                                            {status.comments.length > 0 && (
                                                <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                                                    {status.comments.map((comment, i) => (
                                                        <p key={i}>&bull; {comment}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {searched && !isLoading && !error && statusHistory.length === 0 && (
                    <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>No Results</AlertTitle>
                        <AlertDescription>
                            No status history was found for that ID. Please check the ID and try again.
                        </AlertDescription>
                    </Alert>
                )}
            </div>
        </div>
    );
}

// Suspense wrapper to handle useSearchParams safely in Next.js
export default function TrackSubmissionPage() {
    return (
        <Suspense fallback={
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        }>
            <TrackSubmissionContent />
        </Suspense>
    );
}