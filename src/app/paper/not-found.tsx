import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, ArrowLeft, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PaperNotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-muted/30 px-4">
            <Card className="max-w-md w-full shadow-lg border-dashed border-2">
                <CardContent className="pt-10 pb-8 px-8 flex flex-col items-center text-center">

                    {/* Icon */}
                    <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center mb-6">
                        <FileQuestion className="h-10 w-10 text-muted-foreground" />
                    </div>

                    {/* Text Content */}
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                        Paper Not Found
                    </h2>
                    <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                        We couldn't locate the manuscript you're looking for. It may have been moved, retracted, or the link might be incorrect.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 w-full">
                        <Button asChild size="lg" className="w-full">
                            <Link href="/journals/jct">
                                <Search className="mr-2 h-4 w-4" /> Browse Journal Archive
                            </Link>
                        </Button>

                        <Button asChild variant="outline" className="w-full">
                            <Link href="/">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Return Home
                            </Link>
                        </Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}