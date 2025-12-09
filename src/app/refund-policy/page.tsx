// src/app/refund-policy/page.tsx
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
    title: "Refund Policy",
    description: "Details regarding refunds, cancellations, and Article Processing Charges (APC).",
};

export default function RefundPolicyPage() {
    const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header / Breadcrumbs Section */}
            <div className="bg-muted/30 border-b border-border/50">
                <div className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
                    <Breadcrumb className="mb-4">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Refund Policy</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Refund & Cancellation Policy
                    </h1>
                    <p className="mt-4 text-muted-foreground">
                        Last updated: {currentDate}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container max-w-5xl mx-auto px-4 py-12">
                <div className="prose prose-slate max-w-none dark:prose-invert">
                    <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                        <strong>JCT Journal Publishing Platform</strong> follows a transparent refund and cancellation policy to ensure clarity for all authors and contributors.
                    </p>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">1. Article Processing Charges (APC)</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            All payments made towards Article Processing Charges (APC) are generally <strong>non-refundable</strong>. This is because the fee covers the administrative costs, peer-review management, and editorial work which begins immediately upon submission/acceptance.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">2. Eligible Refund Cases</h2>
                        <p>Refunds may be considered <strong>only</strong> in the following exceptional cases:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Duplicate payment made by the author for the same manuscript.</li>
                            <li>Transaction failure where the amount was deducted from your account but not credited to JCT.</li>
                            <li>A verifiable technical error at our end during payment processing.</li>
                        </ul>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">3. Non-Refundable Cases</h2>
                        <p>No refunds will be issued if:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>The manuscript has already entered the peer-review process.</li>
                            <li>Editorial work (formatting, proofreading) has commenced.</li>
                            <li>The paper has been accepted for publication or is already published.</li>
                            <li>The paper is rejected due to plagiarism, policy violations, or failure to meet quality standards.</li>
                            <li>The author decides to withdraw the paper after peer review has started.</li>
                        </ul>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">4. Refund Processing Time</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If a refund is approved by our administration, it will be processed within <strong>7–10 working days</strong>. The amount will be credited back to the original payment method (Bank/Card/UPI) via Razorpay.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">5. Cancellation Policy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Authors may withdraw their manuscript <strong>before the peer-review process begins</strong> without penalty. Once the peer review has started, cancellation is not allowed, and the APC (if paid) is forfeited.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10 bg-muted/50 p-6 rounded-lg border border-border">
                        <h2 className="text-2xl font-bold text-primary mb-4">6. Contact for Refunds</h2>
                        <p className="text-muted-foreground mb-4">
                            All refund requests must be submitted via email including your <strong>Transaction ID</strong> and <strong>Manuscript Submission ID</strong>.
                        </p>
                        <div className="space-y-2 text-muted-foreground">
                            <p className="flex items-center gap-2">
                                <span className="font-semibold">Email:</span>
                                <a href="mailto:support@jctjournals.com" className="text-primary hover:underline">
                                    support@jctjournals.com
                                </a>
                            </p>
                            <p className="text-sm italic mt-2">
                                *JCT reserves the final authority to approve or deny refund requests based on the policy above.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}