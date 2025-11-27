import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

export default function UnauthorizedPage() {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4 bg-muted/20">
            <ShieldAlert className="h-16 w-16 text-destructive" />
            <h1 className="text-3xl font-bold">Access Denied</h1>
            <p className="text-muted-foreground">
                You do not have permission to view this page.
            </p>
            <Button asChild variant="outline">
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    );
}