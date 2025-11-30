"use client";

import React, {useState, useEffect, Suspense, useCallback} from "react";
import Script from "next/script"; // [ADDED] Razorpay script
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter} from "@/components/ui/card";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Search, Loader2, AlertCircle, CheckCircle2, FileClock, History, CreditCard} from "lucide-react";
import {useSearchParams} from "next/navigation";
import {toast} from "sonner";

// [UPDATED] Interfaces to match API response
interface Transaction {
    id: string;
    status: string;
    amount: number;
    razorpayOrderId:string;
}

interface Author {
    firstName: string;
    lastName: string | null;
    email: string;
    phone: string;
}

interface PaperDetails {
    id: string;
    submissionId: string;
    name: string;
    transactions: Transaction[];
    authors: Author[];
}

interface Status {
    id: string;
    status: string;
    comments: string[];
    createdAt: string;
    changedBy: {
        firstName: string;
        lastName: string | null;
    } | null;
    paper?: PaperDetails;
}

function TrackSubmissionContent() {
    const searchParams = useSearchParams();
    const [paperId, setPaperId] = useState(searchParams.get("id") || "");
    const [statusHistory, setStatusHistory] = useState<Status[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isPaymentLoading, setIsPaymentLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searched, setSearched] = useState(false);

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

    useEffect(() => {
        const urlId = searchParams.get("id");
        if (urlId) {
            setPaperId(urlId);
            fetchStatus(urlId);
        }
    }, [searchParams, fetchStatus]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetchStatus(paperId);
    };

    // [ADDED] Derived state for payment logic
    const latestStatusObj = statusHistory[0];
    const currentStatus = latestStatusObj?.status;
    const paperDetails = latestStatusObj?.paper;
    console.log(paperDetails);
    // Check if any successful transaction exists
    const isPaid = paperDetails?.transactions && paperDetails.transactions.length > 0 && (paperDetails.transactions[0].status === "SUCCESS" || paperDetails.transactions[0].status === "COMPLETED");
    const isAccepted = currentStatus === "ACCEPTED" || currentStatus === "PUBLISHED";

    // [ADDED] Payment Handler
    const handlePayNow = async () => {
        if (!paperDetails) return;
        setIsPaymentLoading(true);

        try {
            // 2. Initialize Razorpay
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: paperDetails.transactions[0].amount * 100, // paise
                currency: "INR",
                name: "JCT Journals",
                description: `Publication Fee: ${paperDetails.submissionId}`,
                order_id: paperDetails.transactions[0].razorpayOrderId,
                prefill: {
                    name: paperDetails.authors[0]?.firstName || "Author",
                    email: paperDetails.authors[0]?.email || "",
                    contact: paperDetails.authors[0]?.phone || ""
                },
                theme: {color: "#0891b2"},
                handler: async function (response: any) {
                    toast.loading("Verifying payment...");
                    try {
                        const verifyRes = await fetch("/api/author/payment/verify", {
                            method: "POST",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify({
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature,
                                paperId: paperDetails.id
                            }),
                        });

                        if (!verifyRes.ok) throw new Error("Verification failed");

                        toast.dismiss();
                        toast.success("Payment Successful!");
                        fetchStatus(paperId); // Refresh status
                    } catch (err) {
                        console.error(err);
                        toast.dismiss();
                        toast.error("Payment verification failed. Please contact support.");
                    }
                },
                modal: {
                    ondismiss: function () {
                        setIsPaymentLoading(false);
                    }
                }
            };

            const rzp = new (window as any).Razorpay(options);
            rzp.on('payment.failed', function (response: any) {
                toast.error(response.error.description || "Payment Failed");
                setIsPaymentLoading(false);
            });
            rzp.open();

        } catch (err: any) {
            toast.error(err.message || "Payment initialization failed");
            setIsPaymentLoading(false);
        }
    };

    return (
        <div className="container mx-auto max-w-3xl px-4 py-16">
            {/* Load Razorpay Script */}
            <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload"/>

            <Card className="shadow-lg mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">Track Submission</CardTitle>
                    <CardDescription>
                        Enter your Submission ID (e.g., JCT_25...) to check status and pay fees.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex items-end gap-4">
                        <div className="flex-grow space-y-2">
                            <Label htmlFor="paperId">Submission ID</Label>
                            <Input
                                id="paperId"
                                placeholder="JCT_..."
                                value={paperId}
                                onChange={(e) => setPaperId(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" size="lg" disabled={isLoading}>
                            {isLoading ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                            ) : (
                                <Search className="mr-2 h-4 w-4"/>
                            )}
                            Track
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <div className="mt-8">
                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4"/>
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {/* Status & Payment Details */}
                {statusHistory.length > 0 && paperDetails && (
                    <div className="space-y-6">

                        {/* Payment Card - Only show if Accepted */}
                        {isAccepted && (
                            <Card
                                className={`border-l-4 shadow-md ${isPaid ? "border-l-green-500 bg-green-50/30" : "border-l-blue-500 bg-blue-50/30"}`}>
                                <CardHeader className="pb-2">
                                    <CardTitle className="flex justify-between items-center text-xl">
                                        <span>{paperDetails.name}</span>
                                    </CardTitle>
                                    <CardDescription className="font-mono">{paperDetails.submissionId}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium text-muted-foreground">Status</p>
                                            <p className="text-lg font-bold">{currentStatus?.replace("_", " ")}</p>
                                        </div>

                                        <div className="space-y-1 text-center sm:text-right">
                                            <p className="text-sm font-medium text-muted-foreground">Payment Status</p>
                                            {isPaid ? (
                                                <div className="flex items-center gap-2 text-green-700 font-bold">
                                                    <CheckCircle2 className="h-5 w-5"/> Paid
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 text-blue-700 font-bold">
                                                    <AlertCircle className="h-5 w-5"/> Pending
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>

                                {/* Pay Button */}
                                {!isPaid && (
                                    <CardFooter className="pt-2 pb-6 border-t bg-white/50">
                                        <div className="w-full flex items-center justify-between gap-4">
                                            <div>
                                                <span className="text-sm text-muted-foreground">Amount Due:</span>
                                                <span className="ml-2 text-lg font-bold">₹1500.00</span>
                                            </div>
                                            <Button
                                                onClick={handlePayNow}
                                                disabled={isPaymentLoading}
                                                className="bg-green-600 hover:bg-green-700 text-white"
                                            >
                                                {isPaymentLoading ? <Loader2 className="h-4 w-4 animate-spin"/> :
                                                    <CreditCard className="h-4 w-4 mr-2"/>}
                                                Pay Now
                                            </Button>
                                        </div>
                                    </CardFooter>
                                )}
                            </Card>
                        )}

                        {/* Timeline */}
                        <Card className="shadow-md">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <History className="h-5 w-5 text-primary"/>
                                    Status History
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative space-y-8 pl-6 border-l-2 border-dashed border-border">
                                    {statusHistory.map((status, index) => (
                                        <div key={status.id} className="relative">
                                            <div
                                                className="absolute -left-[33px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-background ring-4 ring-primary">
                                                {index === 0 ? (
                                                    <FileClock className="h-5 w-5 text-primary"/>
                                                ) : (
                                                    <CheckCircle2 className="h-5 w-5 text-green-600"/>
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
                    </div>
                )}

                {searched && !isLoading && !error && statusHistory.length === 0 && (
                    <Alert>
                        <AlertCircle className="h-4 w-4"/>
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

export default function TrackSubmissionPage() {
    return (
        <Suspense fallback={
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary"/>
            </div>
        }>
            <TrackSubmissionContent/>
        </Suspense>
    );
}