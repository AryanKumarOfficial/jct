"use client";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Mail, Phone, MapPin} from "lucide-react";
import React, {useState} from "react";

// Note: This page is a client component to handle form state.
// No metadata object here; use the Head component from next/head or layout metadata.

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
        null
    );

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {id, value} = e.target;
        setFormData((prev) => ({...prev, [id]: value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        // TODO: Implement actual form submission logic here
        console.log("Form Data:", formData);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        // Simulate success
        setSubmitStatus("success");
        setIsSubmitting(false);
        setFormData({name: "", email: "", subject: "", message: ""});
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-primary-light/20 border-b border-border/50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        We're here to help. Reach out to us with your questions, feedback,
                        or inquiries.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 rounded-full bg-primary-light/30 p-3">
                                        <Mail className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            Email
                                        </h3>
                                        <p className="text-muted-foreground">
                                            For submissions and editorial queries:
                                        </p>
                                        <a
                                            href="mailto:editor@jctjournals.com"
                                            className="text-primary hover:underline"
                                        >
                                            editor@jctjournals.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 rounded-full bg-primary-light/30 p-3">
                                        <Phone className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            Phone
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Mon-Fri, 9 AM - 5 PM (IST)
                                        </p>
                                        <a
                                            href="tel:+911234567890"
                                            className="text-primary hover:underline"
                                        >
                                            +91 123 456 7890
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 rounded-full bg-primary-light/30 p-3">
                                        <MapPin className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            Office
                                        </h3>
                                        <p className="text-muted-foreground">
                                            JCT Journal System
                                            <br/>
                                            123 Research Parkway, Bhopal, MP
                                            <br/>
                                            India
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        placeholder="Regarding my submission..."
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Your message..."
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </Button>
                                </div>
                                {submitStatus === "success" && (
                                    <p className="text-green-600 text-sm text-center">
                                        Message sent successfully! We'll get back to you soon.
                                    </p>
                                )}
                                {submitStatus === "error" && (
                                    <p className="text-red-600 text-sm text-center">
                                        An error occurred. Please try again.
                                    </p>
                                )}
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;