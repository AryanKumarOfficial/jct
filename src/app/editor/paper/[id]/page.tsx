"use client";

import React, {use, useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Loader2, AlertCircle, History, Download, Send, CheckCircle2, Lock} from "lucide-react";
import Link from "next/link";

interface Status {
    id: string;
    status: string;
    comments: string[];
    createdAt: string;
}

interface PaperDetails {
    id: string;
    name: string;
    submissionId: string;
    keywords: string[];
    manuscriptUrl: string | null;
    Copyright?: { copyrightStatus: string; pdfUrl: string | null } | null;
    transactions?: { status: string }[];
}

export default function PaperReviewPage({params}: { params: Promise<{ id: string }> }) {
    const paperId = use(params).id; // submissionId
    const [history, setHistory] = useState<Status[]>([]);
    const [paper, setPaper] = useState<PaperDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Form state
    const [newStatus, setNewStatus] = useState("");
    const [comments, setComments] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const isPaid = paper?.transactions && paper.transactions.length > 0 &&
        (paper.transactions[0].status === "SUCCESS" || paper.transactions[0].status === "COMPLETED");
    const isCopyrightSigned = paper?.Copyright?.copyrightStatus === "SIGNED";
    // Fetch paper (and try to fetch history)
    useEffect(() => {
        const fetchPaper = async () => {
            if (!paperId) return;
            setIsLoading(true);
            setError(null);

            try {
                const res = await fetch(`/api/editor/papers/${encodeURIComponent(paperId)}`, {
                    credentials: "include",
                    cache: "no-store",
                });
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data?.error || "Failed to fetch paper details");
                }

                // If server returned an array (legacy history-array shape), handle that
                if (Array.isArray(data)) {
                    // legacy: data is StatusResponse[]
                    setHistory(data);
                    if (data.length > 0 && data[0].paper) {
                        setPaper(data[0].paper);
                    }
                } else if (data && typeof data === "object") {
                    // new: server returns a single paper object
                    setPaper(data as PaperDetails);

                    // try to fetch history from the status endpoint (may not exist)
                    try {
                        const histRes = await fetch(`/api/editor/papers/${encodeURIComponent(paperId)}/status`, {
                            credentials: "include",
                            cache: "no-store",
                        });
                        if (histRes.ok) {
                            const histData = await histRes.json();
                            // expect histData to be an array of statuses
                            if (Array.isArray(histData)) {
                                setHistory(histData as Status[]);
                            } else {
                                // if not array, set empty history
                                setHistory([]);
                            }
                        } else {
                            // status endpoint not available or returned error, fallback to empty history
                            setHistory([]);
                        }
                    } catch (err) {
                        // ignore history fetch errors, don't block page
                        console.warn("Failed to fetch status history:", err);
                        setHistory([]);
                    }
                } else {
                    // unknown response shape
                    throw new Error("Unexpected API response");
                }
            } catch (err: any) {
                setError(err?.message ?? "Failed to fetch paper details");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPaper();
    }, [paperId]);

    const handleSubmitReview = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);
        setSubmitSuccess(false);

        if (!newStatus || !comments.trim()) {
            setSubmitError("Please select a status and provide comments.");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch(`/api/editor/papers/${encodeURIComponent(paperId)}/status`, {
                method: "POST",
                credentials: "include",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    status: newStatus,
                    comments: [comments.trim()],
                }),
                cache: "no-store"
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data?.error || "Failed to submit review.");
            }

            setSubmitSuccess(true);
            setNewStatus("");
            setComments("");

            // refetch history (best-effort)
            try {
                const histRes = await fetch(`/api/editor/papers/${encodeURIComponent(paperId)}/status`, {
                    credentials: "include",
                    cache: "no-store",
                });
                if (histRes.ok) {
                    const histData = await histRes.json();
                    if (Array.isArray(histData)) setHistory(histData as Status[]);
                }
            } catch (err) {
                // ignore
            }
        } catch (err: any) {
            setSubmitError(err?.message ?? "Failed to submit review.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary"/>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto max-w-2xl py-12">
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4"/>
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            </div>
        );
    }

    if (!paper) {
        return (
            <div className="container mx-auto max-w-2xl py-12">
                <Alert>
                    <AlertCircle className="h-4 w-4"/>
                    <AlertTitle>Not Found</AlertTitle>
                    <AlertDescription>Paper details could not be loaded.</AlertDescription>
                </Alert>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-5xl px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Paper Details */}
                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle className="text-3xl">{paper.name}</CardTitle>
                            <CardDescription>{paper.submissionId}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-medium mb-2">Keywords:</p>
                            <div className="flex flex-wrap gap-2">
                                {paper.keywords?.map((kw) => (
                                    <span key={kw}
                                          className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full">
                    {kw}
                  </span>
                                ))}
                            </div>

                            {paper.manuscriptUrl && (
                                <Button asChild className="mt-6" size="lg">
                                    <Link href={paper.manuscriptUrl} target="_blank" rel="noopener noreferrer" download>
                                        <Download className="mr-2 h-4 w-4"/>
                                        Download Manuscript
                                    </Link>
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                    {/* Publication Status Card */}
                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle>Publication Prerequisites</CardTitle>
                            <CardDescription>Status of author requirements for publication.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-6">
                                <div className="flex items-center gap-2">
                                    <div className={`h-2 w-2 rounded-full ${isPaid ? "bg-green-500" : "bg-red-500"}`} />
                                    <span className="text-sm font-medium">Payment: {isPaid ? "Received" : "Pending"}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className={`h-2 w-2 rounded-full ${isCopyrightSigned ? "bg-green-500" : "bg-red-500"}`} />
                                    <span className="text-sm font-medium">Copyright: {isCopyrightSigned ? "Signed" : "Pending"}</span>
                                    {isCopyrightSigned && paper?.Copyright?.pdfUrl && (
                                        <a href={paper.Copyright.pdfUrl} target="_blank" className="text-xs text-blue-600 underline ml-1">View PDF</a>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Review Form */}
                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle>Submit Your Review</CardTitle>
                            <CardDescription>
                                Update the paper's status and provide feedback. This will be sent to the admin for
                                approval.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {isPaid?(
                                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 flex items-center gap-3">
                                    <Lock className="h-5 w-5" />
                                    <div>
                                        <p className="font-semibold">Review Locked</p>
                                        <p className="text-sm">Payment has been processed. Status cannot be reverted.</p>
                                    </div>
                                </div>
                                ):(
                            <form onSubmit={handleSubmitReview} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="status">New Status</Label>
                                        <Select value={newStatus} onValueChange={(v) => setNewStatus(v)} required>
                                            <SelectTrigger id="status">
                                                <SelectValue placeholder="Select a status..."/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ACCEPTED">Reviewed</SelectItem>
                                                <SelectItem value="UNDER_REVIEW">Needs Revision</SelectItem>
                                                <SelectItem value="REJECTED">Recommend Reject</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="comments">Comments for Author/Admin</Label>
                                    <Textarea
                                        id="comments"
                                        rows={8}
                                        placeholder="Provide constructive feedback..."
                                        value={comments}
                                        onChange={(e) => setComments(e.target.value)}
                                        required
                                    />
                                </div>

                                {submitSuccess && (
                                    <Alert variant="default" className="bg-green-50 border-green-200 text-green-800">
                                        <CheckCircle2 className="h-4 w-4"/>
                                        <AlertTitle>Review Submitted!</AlertTitle>
                                        <AlertDescription>Your review has been sent to the admin for final
                                            approval.</AlertDescription>
                                    </Alert>
                                )}

                                {submitError && (
                                    <Alert variant="destructive">
                                        <AlertCircle className="h-4 w-4"/>
                                        <AlertTitle>Submission Error</AlertTitle>
                                        <AlertDescription>{submitError}</AlertDescription>
                                    </Alert>
                                )}

                                <Button type="submit" size="lg" disabled={isSubmitting}>
                                    {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> :
                                        <Send className="mr-2 h-4 w-4"/>}
                                    Submit Review
                                </Button>
                            </form>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar - Status History */}
                <aside className="space-y-6">
                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <History className="h-5 w-5 text-primary"/>
                                Status History
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative space-y-6 pl-5 border-l-2 border-dashed border-border">
                                {history.length === 0 ? (
                                    <p className="text-sm text-muted-foreground">No history available.</p>
                                ) : (
                                    history.map((s) => (
                                        <div key={s.id} className="relative">
                                            <div
                                                className="absolute -left-[28px] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background"/>
                                            <div className="ml-2">
                                                <h4 className="font-semibold text-sm text-foreground">{s.status.replace("_", " ")}</h4>
                                                <p className="text-xs text-muted-foreground">{new Date(s.createdAt).toLocaleString()}</p>
                                                {s.comments.length > 0 && (
                                                    <p className="text-xs italic text-muted-foreground mt-1">&ldquo;{s.comments[0]}&rdquo;</p>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </div>
    );
}
