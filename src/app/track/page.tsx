"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Search, Loader2, AlertCircle, CheckCircle2, FileClock, History } from "lucide-react";

// Define the structure of a status update based on your API response
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

export default function TrackSubmissionPage() {
    const [paperId, setPaperId] = useState("");
    const [statusHistory, setStatusHistory] = useState<Status[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searched, setSearched] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSearched(true);
        setStatusHistory([]);

        try {
            const response = await fetch(`/api/author/status?paperId=${paperId}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Could not find paper status.");
            }

            setStatusHistory(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
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
                        <AlertDescription>No status history was found for that ID. Please check the ID and try again.</AlertDescription>
                    </Alert>
                )}
            </div>
        </div>
    );
}