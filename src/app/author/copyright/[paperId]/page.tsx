"use client";

import React, {useState, useEffect, use} from "react";
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
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";
import {
    Loader2,
    AlertCircle,
    CheckCircle2,
    FileSignature,
    ScrollText,
    Lock,
} from "lucide-react";
import {toast} from "sonner";
import {motion} from "motion/react";

// Types
interface Author {
    id: string;
    firstName: string;
    lastName: string | null;
}

interface PaperDetails {
    id: string;
    name: string;
    submissionId: string;
    authors: Author[];
    // Added Copyright interface to match API response
    Copyright?: {
        copyrightStatus: "PENDING" | "SIGNED";
    } | null;
}

export default function SignCopyrightPage({
                                              params,
                                          }: {
    params: Promise<{ paperId: string }>;
}) {
    const paperId = use(params).paperId;

    const [paper, setPaper] = useState<PaperDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Signing State
    const [signatureName, setSignatureName] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [isSigning, setIsSigning] = useState(false);
    const [signSuccess, setSignSuccess] = useState(false);

    // Fetch Paper Details
    useEffect(() => {
        const fetchPaperDetails = async () => {
            if (!paperId) return;
            setIsLoading(true);
            try {
                // Reuse existing status API
                const response = await fetch(`/api/author/status?paperId=${paperId}`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Failed to fetch paper details.");
                }

                if (Array.isArray(data) && data.length > 0) {
                    const paperData = data[0].paper as PaperDetails;
                    setPaper(paperData);

                    // Check if copyright is already signed and show success immediately
                    if (paperData.Copyright?.copyrightStatus === "SIGNED") {
                        setSignSuccess(true);
                    }
                } else {
                    throw new Error("Paper details not found.");
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
        if (!paper) return;

        setIsSigning(true);
        setError(null);

        try {
            const response = await fetch(`/api/author/${paper.id}/sign-copyright`, {
                method: "POST",
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to sign copyright.");
            }

            setSignSuccess(true);
            toast.success("Copyright Agreement Signed Successfully!");
        } catch (err: any) {
            setError(err.message);
            toast.error("Signing failed. Please try again.");
        } finally {
            setIsSigning(false);
        }
    };

    // Loading State
    if (isLoading) {
        return (
            <div className="flex h-[60vh] w-full items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-12 w-12 animate-spin text-primary"/>
                    <p className="text-muted-foreground animate-pulse">Loading Agreement...</p>
                </div>
            </div>
        );
    }

    // Error State
    if (error && !paper) {
        return (
            <div className="container mx-auto max-w-xl py-16 px-4">
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4"/>
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            </div>
        );
    }

    // Success State (Used for both "Just Signed" and "Already Signed")
    if (signSuccess) {
        return (
            <div className="container mx-auto max-w-xl py-20 px-4">
                <motion.div
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    className="flex flex-col items-center text-center space-y-6"
                >
                    <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="h-12 w-12 text-green-600"/>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">Agreement Signed</h2>
                    <p className="text-muted-foreground max-w-md">
                        The copyright transfer form has been successfully generated, signed, and stored securely. You
                        can now proceed with the publication process.
                    </p>
                    <Button variant="outline" onClick={() => window.location.href = '/author/dashboard'}>
                        Return to Dashboard
                    </Button>
                </motion.div>
            </div>
        );
    }

    // Determine valid signer name for validation
    const isValidSignature = paper?.authors?.some(
        (a) =>
            `${a.firstName} ${a.lastName || ""}`.trim().toLowerCase() ===
            signatureName.trim().toLowerCase()
    );

    const today = new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="min-h-screen bg-muted/30 py-12 px-4">
            <div className="container mx-auto max-w-3xl">

                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
                        <FileSignature className="h-8 w-8 text-primary"/>
                        Copyright Transfer Agreement
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Please review the document below and digitally sign to proceed.
                    </p>
                </div>

                <div className="grid gap-8">
                    {/* Document Preview Section */}
                    <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                        <CardHeader className="bg-muted/50 border-b pb-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <ScrollText className="h-5 w-5 text-primary"/>
                                    <CardTitle className="text-lg">Document Preview</CardTitle>
                                </div>
                                <span
                                    className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border">
                  ID: {paper?.submissionId}
                </span>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div
                                className="max-h-[500px] overflow-y-auto p-8 bg-white text-black font-serif text-sm leading-relaxed">
                                {/* Simulated Paper Document View */}
                                <div className="max-w-xl mx-auto space-y-6">
                                    <div className="text-center border-b-2 border-black pb-4 mb-8">
                                        <h2 className="text-xl font-bold uppercase tracking-wider">JCT Journal</h2>
                                        <p className="text-xs font-sans text-gray-600 mt-1">Journal of Computing
                                            Technologies</p>
                                    </div>

                                    <div className="text-center mb-8">
                                        <h3 className="text-lg font-bold uppercase underline decoration-1 underline-offset-4">Copyright
                                            and Consent Form</h3>
                                    </div>

                                    <div className="space-y-2">
                                        <p><strong>Paper Title:</strong> {paper?.name}</p>
                                        <p><strong>Submission ID:</strong> {paper?.submissionId}</p>
                                        <p>
                                            <strong>Author(s):</strong> {paper?.authors.map(a => `${a.firstName} ${a.lastName || ''}`).join(', ')}
                                        </p>
                                    </div>

                                    <div className="space-y-4 mt-6">
                                        <h4 className="font-bold border-b border-gray-300 pb-1">1. Copyright
                                            Transfer</h4>
                                        <p className="text-justify">
                                            The undersigned author(s) hereby assigns to <strong>JCT Journal</strong> all
                                            rights under copyright that may exist in and to the above Work, and any
                                            revised or expanded derivative works submitted to the Journal by the
                                            undersigned based on the Work.
                                        </p>
                                        <p className="text-justify">
                                            The undersigned guarantees that the Work is original, does not infringe upon
                                            any existing copyright or third-party rights, and has not been previously
                                            published.
                                        </p>
                                    </div>

                                    <div className="space-y-4 mt-6">
                                        <h4 className="font-bold border-b border-gray-300 pb-1">2. General Terms</h4>
                                        <p className="text-justify">
                                            The author(s) retain the right to use the Work for their own non-commercial
                                            teaching and research purposes. The Journal grants the author(s) the right
                                            to post the accepted manuscript on their personal websites or institutional
                                            repositories.
                                        </p>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-black flex justify-between items-end">
                                        <div>
                                            <p className="font-bold font-sans text-gray-400 uppercase text-xs mb-1">Digital
                                                Signature</p>
                                            <p className="font-handwriting text-2xl text-blue-800 font-bold italic">
                                                {signatureName ||
                                                    <span className="text-gray-200">Waiting for signature...</span>}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold font-sans text-gray-400 uppercase text-xs mb-1">Date</p>
                                            <p>{today}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Signing Action Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Digital Signature</CardTitle>
                            <CardDescription>
                                To sign this document, please type your full name exactly as it appears in your profile.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">

                            <div className="space-y-2">
                                <Label htmlFor="signature">Type Full Name</Label>
                                <div className="relative">
                                    <Input
                                        id="signature"
                                        placeholder="e.g. Aryan Kumar"
                                        value={signatureName}
                                        onChange={(e) => setSignatureName(e.target.value)}
                                        className={isValidSignature ? "border-green-500 focus-visible:ring-green-500" : ""}
                                    />
                                    {isValidSignature && (
                                        <CheckCircle2
                                            className="absolute right-3 top-2.5 h-5 w-5 text-green-500 animate-in fade-in zoom-in"/>
                                    )}
                                </div>
                                {!isValidSignature && signatureName.length > 2 && (
                                    <p className="text-xs text-destructive">
                                        Name does not match our records for this paper's authors.
                                    </p>
                                )}
                            </div>

                            <div className="flex items-start space-x-2 rounded-md border p-4 bg-muted/20">
                                <Checkbox
                                    id="terms"
                                    checked={agreed}
                                    onCheckedChange={(c) => setAgreed(c as boolean)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I agree to the terms and conditions
                                    </label>
                                    <p className="text-sm text-muted-foreground">
                                        By checking this box, I confirm that I am authorized to sign this agreement on
                                        behalf of all authors.
                                    </p>
                                </div>
                            </div>

                            {error && (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4"/>
                                    <AlertTitle>Submission Failed</AlertTitle>
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}

                        </CardContent>
                        <CardFooter>
                            <Button
                                className="w-full"
                                size="lg"
                                onClick={handleSignCopyright}
                                disabled={!isValidSignature || !agreed || isSigning}
                            >
                                {isSigning ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                                        Generating & Signing...
                                    </>
                                ) : (
                                    <>
                                        <Lock className="mr-2 h-4 w-4"/>
                                        Sign & Submit Agreement
                                    </>
                                )}
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}