"use client";

import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import useSWR from "swr";
import Script from "next/script";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
    Loader2,
    FileText,
    CheckCircle2,
    Clock,
    PenTool,
    CreditCard,
} from "lucide-react";
import {toast} from "sonner";

// --- Types ---
// Define these locally to ensure the component is self-contained if types/dashboard.ts is missing
interface PaymentDetails {
    isPaid: boolean;
    status: string;
    orderId: string | null;
    amount: number;
}

interface Paper {
    id: string;
    submissionId: string;
    title: string;
    createdAt: string;
    status: string;
    actionRequired: boolean;
    isCopyrightSigned: boolean;
    payment: PaymentDetails;
}

interface DashboardData {
    profile: {
        firstName: string;
        lastName: string | null;
        email: string;
        organization: string;
        country: string;
        phone: string;
    };
    stats: {
        total: number;
        accepted: number;
        published: number;
    };
    papers: Paper[];
}

const fetcher = (url: string) => fetch(url).then(async (r) => {
    if (r.status === 401) {
        throw Object.assign(new Error("Unauthorized"), {status: 401});
    }
    if (!r.ok) throw new Error("Failed to fetch");
    return r.json();
});

export default function AuthorDashboardClient() {
    const router = useRouter();
    // Using SWR for data fetching with revalidation
    const {data, error, mutate} = useSWR<DashboardData>("/api/author/dashboard", fetcher, {
        revalidateOnFocus: true,
        refreshInterval: 0 // We rely on manual mutation or page refresh usually
    });

    const [processingPaymentId, setProcessingPaymentId] = useState<string | null>(null);
    const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

    // Error handling
    if (error) {
        if ((error as any).status === 401) {
            toast.error("Session expired. Please login again.");
            router.push("/author/login");
            return null;
        }
        // Avoid toast spam on focus revalidation failures
        // toast.error("Could not load dashboard data.");
    }

    // Loading state
    if (!data) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary"/>
            </div>
        );
    }

    const handlePayment = async (paper: Paper) => {
        const {payment} = paper;
        const {profile} = data;

        if (!payment.orderId) {
            toast.error("Payment order not generated yet. Please contact support.");
            return;
        }

        if (!isRazorpayLoaded) {
            toast.error("Payment gateway is initializing. Please try again in a moment.");
            return;
        }

        setProcessingPaymentId(paper.id);

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: Math.round(payment.amount * 100), // Amount in paise
            currency: "INR",
            name: "JCT Journals",
            description: `Publication Fee for ${paper.submissionId}`,
            order_id: payment.orderId,
            prefill: {
                name: `${profile.firstName} ${profile.lastName || ""}`.trim(),
                email: profile.email,
                contact: profile.phone,
            },
            theme: {
                color: "#0f172a", // Dark blue/slate to match UI
            },
            handler: async function (response: any) {
                // Payment succeeded on Razorpay side
                toast.success("Payment successful! Verifying details...");

                try {
                    // Call backend to verify signature & update DB immediately.
                    // Even if webhooks are enabled, this gives immediate UI feedback.
                    const verifyRes = await fetch("/api/author/payment/verify", {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                            paperId: paper.id
                        }),
                    });

                    if (!verifyRes.ok) {
                        // If verify fails (e.g. network), we assume webhook will eventually handle it
                        throw new Error("Verification endpoint failed");
                    }

                    toast.success("Payment verified successfully.");
                    mutate(); // Refresh dashboard data to show "Paid" status
                } catch (err) {
                    console.error("Verification error:", err);
                    toast.info("Payment received. Your status will update shortly once confirmed by our servers.");
                    // Optimistically wait a bit and refresh, expecting webhook to have processed it
                    setTimeout(() => mutate(), 3000);
                } finally {
                    setProcessingPaymentId(null);
                }
            },
            modal: {
                ondismiss: function () {
                    setProcessingPaymentId(null);
                    toast.info("Payment cancelled");
                }
            }
        };

        // @ts-ignore - Razorpay attached to window by script
        const rzp = new window.Razorpay(options);

        rzp.on('payment.failed', function (response: any) {
            toast.error(response.error.description || "Payment failed");
            setProcessingPaymentId(null);
        });

        rzp.open();
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "ACCEPTED":
                return "bg-green-100 text-green-700 hover:bg-green-100 border-green-200";
            case "PUBLISHED":
                return "bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200";
            case "REJECTED":
                return "bg-red-100 text-red-700 hover:bg-red-100 border-red-200";
            case "UNDER_REVIEW":
                return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100 border-yellow-200";
            default:
                return "bg-gray-100 text-gray-700 hover:bg-gray-100 border-gray-200";
        }
    };

    return (
        <div className="min-h-screen bg-muted/20 p-6 md:p-10">
            {/* Load Razorpay Script */}
            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                onLoad={() => setIsRazorpayLoaded(true)}
                onError={() => toast.error("Failed to load payment gateway")}
            />

            <div className="mx-auto max-w-6xl space-y-8">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Author Dashboard</h1>
                        <p className="text-muted-foreground">
                            Welcome back, {data.profile.firstName} {data.profile.lastName}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={() => router.push("/submit")}>
                            <PenTool className="mr-2 h-4 w-4"/>
                            New Submission
                        </Button>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{data.stats.total}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Accepted</CardTitle>
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{data.stats.accepted}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-yellow-600">
                                {data.stats.total - (data.stats.accepted + data.stats.published)}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="papers" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="papers">My Papers</TabsTrigger>
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                    </TabsList>

                    <TabsContent value="papers" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Manuscripts</CardTitle>
                                <CardDescription>
                                    Manage your submissions and view their current status.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {data.papers.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center py-10 text-center">
                                        <FileText className="h-12 w-12 text-muted-foreground opacity-50 mb-4"/>
                                        <h3 className="text-lg font-semibold">No papers yet</h3>
                                        <p className="text-muted-foreground mb-4">You haven't submitted any manuscripts
                                            yet.</p>
                                        <Button onClick={() => router.push("/submit")}>Submit Your First Paper</Button>
                                    </div>
                                ) : (
                                    <div className="rounded-md border bg-background">
                                        <div className="relative w-full overflow-auto">
                                            <table className="w-full caption-bottom text-sm">
                                                <thead className="[&_tr]:border-b">
                                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
                                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Title</th>
                                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody className="[&_tr:last-child]:border-0">
                                                {data.papers.map((paper) => (
                                                    <tr key={paper.id}
                                                        className="border-b transition-colors hover:bg-muted/50">
                                                        <td className="p-4 align-middle font-mono font-medium">{paper.submissionId}</td>
                                                        <td className="p-4 align-middle font-medium">{paper.title}</td>
                                                        <td className="p-4 align-middle text-muted-foreground">
                                                            {new Date(paper.createdAt).toLocaleDateString()}
                                                        </td>
                                                        <td className="p-4 align-middle">
                                                            <Badge variant="outline"
                                                                   className={`font-normal ${getStatusColor(paper.status)}`}>
                                                                {paper.status.replace("_", " ")}
                                                            </Badge>
                                                        </td>
                                                        <td className="p-4 align-middle text-right">
                                                            <div className="flex justify-end gap-2">
                                                                {/* Action 1: Sign Copyright (If Accepted & Not Signed) */}
                                                                {paper.status === "ACCEPTED" && !paper.isCopyrightSigned && (
                                                                    <Button size="sm" variant="secondary" asChild>
                                                                        <Link
                                                                            href={`/author/copyright/${paper.submissionId}`}>Sign
                                                                            Copyright</Link>
                                                                    </Button>
                                                                )}

                                                                {/* Action 2: Pay Fee (If Accepted & Signed & Not Paid) */}
                                                                {paper.status === "ACCEPTED" && paper.isCopyrightSigned && !paper.payment.isPaid && (
                                                                    <Button
                                                                        size="sm"
                                                                        className="bg-green-600 hover:bg-green-700 text-white"
                                                                        onClick={() => handlePayment(paper)}
                                                                        disabled={processingPaymentId === paper.id || !isRazorpayLoaded}
                                                                    >
                                                                        {processingPaymentId === paper.id ? (
                                                                            <Loader2
                                                                                className="h-3 w-3 animate-spin mr-2"/>
                                                                        ) : (
                                                                            <CreditCard className="h-3 w-3 mr-2"/>
                                                                        )}
                                                                        Pay ₹{paper.payment.amount}
                                                                    </Button>
                                                                )}

                                                                {/* Action 3: Track (Always visible) */}
                                                                <Button variant="outline" size="sm" asChild>
                                                                    <Link
                                                                        href={`/track?id=${paper.submissionId}`}>Track</Link>
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="profile">
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile Details</CardTitle>
                                <CardDescription>Your personal information as it appears on published
                                    papers.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <div className="text-sm font-medium text-muted-foreground">Full Name</div>
                                        <div className="p-3 bg-muted/50 rounded-md border text-sm">
                                            {data.profile.firstName} {data.profile.lastName}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-sm font-medium text-muted-foreground">Email Address</div>
                                        <div
                                            className="p-3 bg-muted/50 rounded-md border text-sm">{data.profile.email}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-sm font-medium text-muted-foreground">Organization</div>
                                        <div
                                            className="p-3 bg-muted/50 rounded-md border text-sm">{data.profile.organization}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-sm font-medium text-muted-foreground">Country</div>
                                        <div
                                            className="p-3 bg-muted/50 rounded-md border text-sm">{data.profile.country}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}