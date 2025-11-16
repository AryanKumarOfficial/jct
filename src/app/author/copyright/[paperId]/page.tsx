/*
 * File: src/app/author/copyright/[paperId]/page.tsx
 * Description: Page for authors to sign the copyright agreement.
 */

"use client";

import {useState, useEffect, use} from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Loader2, AlertCircle, CheckCircle2, FileSignature} from "lucide-react";
import {toast} from "sonner";

// Simplified structure based on what we can get from the status route
interface PaperDetails {
    id: string;
    name: string;
    submissionId: string;
}

interface Status {
    paper: PaperDetails;
}

export default function SignCopyrightPage({
                                              params,
                                          }: {
    params: Promise<{ paperId: string }>
}) {
    const paperId = use(params).paperId;
    const [paper, setPaper] = useState<PaperDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isSigning, setIsSigning] = useState(false);
    const [signSuccess, setSignSuccess] = useState(false);

    useEffect(() => {
        // We use the status route to get paper details, as it's the
        // only existing route that returns paper info by ID.
        const fetchPaperDetails = async () => {
            if (!paperId) return;
            setIsLoading(true);
            setError(null);
            try {
                // Use the track page's API to get paper data
                const response = await fetch(`/api/author/status?paperId=${paperId}`);
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.error || "Failed to fetch paper details.");
                }
                // Assuming data is an array of statuses, all with the same paper info
                if (data.length > 0) {
                    setPaper(data[0].paper);
                } else {
                    throw new Error("No paper data found for this ID.");
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPaperDetails();
    }, [paperId]);

    const handleSignCopyright = async () => {
        setIsSigning(true);
        setError(null);
        setSignSuccess(false);
        try {
            // This API uses the *internal* paper ID, not the submissionId.
            // We'll use the one from the fetched paper object.
            const response = await fetch(`/api/author/${paper?.id}/sign-copyright`, {
                method: "POST",
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Failed to sign copyright.");
            }
            setSignSuccess(true);
            toast.success("Copyright signed successfully!");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsSigning(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex h-[50vh] items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary"/>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-2xl px-4 py-16">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        Sign Copyright Agreement
                    </CardTitle>
                    <CardDescription>
                        Please review your paper details and sign the copyright transfer
                        agreement.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {error && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4"/>
                            <AlertTitle>Error Loading Paper</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {paper && (
                        <div className="space-y-2 rounded-md border bg-muted/50 p-4">
                            <h3 className="font-semibold text-foreground">Paper Title:</h3>
                            <p className="text-lg">{paper.name}</p>
                            <h3 className="font-semibold text-foreground mt-2">
                                Submission ID:
                            </h3>
                            <p className="text-muted-foreground">{paper.submissionId}</p>
                        </div>
                    )}

                    {signSuccess && (
                        <Alert variant="default" className="bg-green-50 border-green-200">
                            <CheckCircle2 className="h-4 w-4"/>
                            <AlertTitle>Copyright Signed</AlertTitle>
                            <AlertDescription>
                                Thank you. Your copyright form has been successfully generated
                                and saved.
                            </AlertDescription>
                        </Alert>
                    )}

                    {error && !isLoading && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4"/>
                            <AlertTitle>Signing Failed</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full"
                        size="lg"
                        onClick={handleSignCopyright}
                        disabled={isSigning || signSuccess || !paper}
                    >
                        {isSigning ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                        ) : (
                            <FileSignature className="mr-2 h-4 w-4"/>
                        )}
                        {signSuccess ? "Agreement Signed" : "I Agree and Sign Copyright"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}