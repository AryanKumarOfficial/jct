// src/app/terms-and-conditions/page.tsx
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
    title: "Terms & Conditions",
    description: "Read the Terms & Conditions for using the JCT Journal Publishing Platform.",
};

export default function TermsConditionsPage() {
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
                                <BreadcrumbPage>Terms & Conditions</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Terms & Conditions
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
                        By accessing or using <strong>JCT Journal Publishing Platform</strong> ("JCT"), you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access the service.
                    </p>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">1. Use of Platform</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You agree to use JCT only for lawful academic and research purposes. You must not use this site for any fraudulent or harmful activity that could disrupt the service or compromise the security of the platform.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">2. Manuscript Responsibility</h2>
                        <p>Authors are solely responsible for:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Originality of content</li>
                            <li>Avoiding plagiarism in any form</li>
                            <li>Ensuring copyright compliance for all materials used</li>
                            <li>Adhering to ethical research standards</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">
                            JCT is not liable for any legal dispute arising from user-submitted content.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">3. Payments</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            All payments are processed securely via <strong>Razorpay</strong>. JCT does not store your credit card, debit card, or banking credentials on our servers.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">4. Editorial Decision</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            All editorial decisions, including acceptance or rejection of manuscripts, are final and based on peer-review outcomes. These decisions are not subject to legal dispute.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">5. Account Suspension</h2>
                        <p>JCT reserves the right to suspend accounts involved in:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Fraudulent activity or identity theft</li>
                            <li>Submission of fake or fabricated research</li>
                            <li>Payment misuse or chargebacks</li>
                            <li>Violation of these Terms & Conditions</li>
                        </ul>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">6. Limitation of Liability</h2>
                        <p>JCT shall not be liable for:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Any loss of data due to technical failures</li>
                            <li>Publication delays caused by the peer-review process</li>
                            <li>Server downtime or maintenance periods</li>
                            <li>Failures of the payment gateway (Razorpay) beyond our control</li>
                        </ul>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">7. Governing Law</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            These Terms shall be governed and construed in accordance with the laws of <strong>India</strong>, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">8. Modifications</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            JCT may update these Terms at any time without prior notice. Continued use of the platform after any changes constitutes acceptance of the new Terms.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10 bg-muted/50 p-6 rounded-lg border border-border">
                        <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Us</h2>
                        <div className="space-y-2 text-muted-foreground">
                            <p className="flex items-center gap-2">
                                <span className="font-semibold">Email:</span>
                                <a href="mailto:support@jctjournals.com" className="text-primary hover:underline">
                                    support@jctjournals.com
                                </a>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="font-semibold">Website:</span>
                                <Link href="https://jctjournals.com" className="text-primary hover:underline">
                                    https://jctjournals.com
                                </Link>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}