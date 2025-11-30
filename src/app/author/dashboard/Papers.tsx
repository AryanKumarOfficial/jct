"use client";
import React, {useState} from 'react'
import {DashboardData, Paper} from "@/app/author/dashboard/page";
import {TabsContent} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {CheckCircle2, CreditCard, ExternalLink, FileText, Loader2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {KeyedMutator} from "swr";

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

const Papers = ({data, mutate}: { data: DashboardData, mutate: KeyedMutator<DashboardData> }) => {
    console.log(`data`, data.papers[0].payment.isPaid)
    const router = useRouter();
    const [processingPaymentId, setProcessingPaymentId] = useState<string | null>(null);

    const handlePayment = async (paper: Paper) => {
        const {payment} = paper;
        const {profile} = data;

        if (!payment.orderId) {
            toast.error("Payment order not generated yet. Please contact support.");
            return;
        }

        setProcessingPaymentId(paper.id);

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: Math.round(payment.amount * 100), // paise
            currency: "INR",
            name: "JCT Journals",
            description: `Publication Fee for ${paper.submissionId}`,
            order_id: payment.orderId,
            prefill: {
                name: `${profile.firstName} ${profile.lastName || ""}`.trim(),
                email: profile.email,
                contact: profile.phone,
            },
            theme: {color: "#0f172a"},
            handler: async function (response: any) {
                toast.success("Payment successful! Verifying details...");
                try {
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

                    if (!verifyRes.ok) throw new Error("Verification endpoint failed");

                    toast.success("Payment verified successfully.");
                    mutate(); // Refresh data to update UI to "Paid" state
                } catch (err) {
                    console.error("Verification error:", err);
                    toast.info("Payment received. Status will update shortly.");
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

        // @ts-ignore
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
            toast.error(response.error.description || "Payment failed");
            setProcessingPaymentId(null);
        });
        rzp.open();
    };

    return (
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
                            <p className="text-muted-foreground mb-4">You haven't submitted any manuscripts yet.</p>
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
                                        <tr key={paper.id} className="border-b transition-colors hover:bg-muted/50">
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
                                                <div className="flex justify-end gap-2 items-center">

                                                    {/* --- 1. PUBLISHED State --- */}
                                                    {paper.status === "PUBLISHED" ? (
                                                        <>
                                                            {paper.publishUrl && (
                                                                <Button size="sm" variant="outline"
                                                                        className="border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
                                                                        asChild>
                                                                    <Link href={paper.publishUrl} target="_blank">
                                                                        <ExternalLink className="mr-2 h-3 w-3"/> View
                                                                        Paper
                                                                    </Link>
                                                                </Button>
                                                            )}
                                                        </>
                                                    ) : paper.status === "ACCEPTED" ? (
                                                        /* --- 2. ACCEPTED State --- */
                                                        <>
                                                            {/* A. Copyright Actions */}
                                                            {!paper.isCopyrightSigned ? (
                                                                <Button size="sm" variant="secondary" asChild>
                                                                    <Link
                                                                        href={`/author/copyright/${paper.submissionId}`}>
                                                                        Sign Copyright
                                                                    </Link>
                                                                </Button>
                                                            ) : (
                                                                <Badge variant="outline"
                                                                       className="border-green-600 text-green-600 h-9 px-3 flex items-center gap-1 bg-green-50">
                                                                    <CheckCircle2 className="h-3 w-3"/> Signed
                                                                </Badge>
                                                            )}

                                                            {/* B. Payment Actions */}
                                                            {!paper.payment.isPaid ? (
                                                                <Button
                                                                    size="sm"
                                                                    className="bg-green-600 hover:bg-green-700 text-white"
                                                                    onClick={() => handlePayment(paper)}
                                                                    disabled={processingPaymentId === paper.id}
                                                                >
                                                                    {processingPaymentId === paper.id ? (
                                                                        <Loader2 className="h-3 w-3 animate-spin mr-2"/>
                                                                    ) : (
                                                                        <CreditCard className="h-3 w-3 mr-2"/>
                                                                    )}
                                                                    Pay ₹{paper.payment.amount}
                                                                </Button>
                                                            ) : (
                                                                <Badge variant="outline"
                                                                       className="border-blue-600 text-blue-600 h-9 px-3 flex items-center gap-1 bg-blue-50">
                                                                    <CheckCircle2 className="h-3 w-3"/> Paid
                                                                </Badge>
                                                            )}
                                                        </>
                                                    ) : null}

                                                    {paper.status !== "PUBLISHED" && (
                                                        <Button variant="outline" size="sm" asChild>
                                                            <Link href={`/track?id=${paper.submissionId}`}>Track</Link>
                                                        </Button>
                                                    )}
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
    );
};

export default Papers;