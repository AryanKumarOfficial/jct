import React from "react";
import {Metadata} from "next";
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
    title: "Privacy Policy",
    description: "Read about how JCT Journals collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
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
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Privacy Policy
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
                        <strong>JCT Journal Publishing Platform</strong> ("JCT", "we", "our", "us")
                        operates the website <strong>https://jctjournals.com</strong>. This Privacy Policy
                        describes how we collect, use, and protect your personal data.
                    </p>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">1. Information We Collect</h2>
                        <p>We collect the following information:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Full name, email address, phone number</li>
                            <li>Institutional and academic details</li>
                            <li>Billing and payment information (processed securely via Razorpay)</li>
                            <li>IP address, browser type, device data</li>
                            <li>Manuscripts, documents, and research content submitted by users</li>
                        </ul>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">2. How We Use Your
                            Information</h2>
                        <p>We use your data to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Process manuscript submissions and publications</li>
                            <li>Process payments and refunds</li>
                            <li>Communicate with authors, reviewers, and editors</li>
                            <li>Maintain platform security and prevent fraud</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">3. Payment Security</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            All payment transactions are handled by <strong>Razorpay</strong>. We
                            do <strong>not</strong> store any card, UPI, or bank details on our servers.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">4. Data Protection</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We implement industry-standard security measures to protect your personal data against
                            unauthorized access, alteration, or disclosure.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">5. Cookies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We use cookies to improve user experience and analyze website traffic.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">6. Third-Party Disclosure</h2>
                        <p>We do not sell or trade your personal data. We may share data only with:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Payment gateways (Razorpay)</li>
                            <li>Government or legal authorities if required by law</li>
                        </ul>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">7. User Rights</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You may request access, correction, or deletion of your personal data by emailing us.
                        </p>
                    </section>

                    <section className="space-y-4 mb-10">
                        <h2 className="text-2xl font-bold text-primary border-b pb-2">8. Policy Updates</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may update this policy from time to time. Changes will be posted on this page.
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