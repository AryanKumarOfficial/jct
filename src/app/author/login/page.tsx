"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LogIn, AlertCircle, Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function AuthorLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/author/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Login failed");

            toast.success("Welcome back!");
            router.push("/author/dashboard");
            router.refresh();
        } catch (err: any) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/40 to-background px-4">
            {/* Back link */}
            <Link
                href="/"
                className="absolute left-6 top-6 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Home
            </Link>

            <Card className="w-full max-w-md border border-border/60 shadow-xl">
                <CardHeader className="space-y-2 text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <LogIn className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">
                        Author Sign In
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                        Access your submissions, reviews, and publication status.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="author@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="h-11"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="/contact"
                                    className="text-xs text-primary hover:underline underline-offset-4"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="h-11"
                            />
                        </div>

                        {error && (
                            <Alert variant="destructive" className="animate-in fade-in">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Authentication failed</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        <Button
                            type="submit"
                            className="h-11 w-full text-base font-semibold"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing in…
                                </>
                            ) : (
                                <>
                                    <LogIn className="mr-2 h-4 w-4" />
                                    Sign In
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="flex flex-col gap-3 border-t bg-muted/40 px-6 py-5 text-center">
                    <p className="text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/submit"
                            className="font-medium text-primary hover:underline underline-offset-4"
                        >
                            Submit a Paper
                        </Link>
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Just checking status?{" "}
                        <Link href="/track" className="hover:text-foreground underline">
                            Quick Track
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
