import React from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
    FileText,
    Calendar,
    User,
    Download,
    Clock,
    Copy,
    Hash,
    Eye,
    Tag,
    Briefcase,
    Mail,
    CheckCircle2,
    XCircle, FileSignature, CreditCard
} from "lucide-react";
import {toast} from "sonner";
import {Paper} from "../types";
import {PaperStatus} from "@/types/enums";

// --- Status Helpers ---
const getStatusConfig = (status: string, isApproved: boolean) => {
    if (!isApproved) return {
        variant: "outline" as const,
        label: "Pending Approval",
        icon: Clock,
        className: "text-yellow-600 border-yellow-200 bg-yellow-50"
    };

    switch (status) {
        case PaperStatus.PUBLISHED:
            return {
                variant: "default" as const,
                label: "Published",
                icon: CheckCircle2,
                className: "bg-teal-600 hover:bg-teal-700 border-transparent"
            };
        case PaperStatus.ACCEPTED:
            return {
                variant: "outline" as const,
                label: "Accepted",
                icon: CheckCircle2,
                className: "text-green-600 border-green-200 bg-green-50"
            };
        case PaperStatus.REJECTED:
            return {variant: "destructive" as const, label: "Rejected", icon: XCircle, className: ""};
        default:
            return {variant: "secondary" as const, label: status.replace("_", " "), icon: FileText, className: ""};
    }
};

export default function PaperDetailsSheet({paper}: { paper: Paper }) {
    if (!paper) return null;

    const isCopyrightSigned = paper.Copyright?.copyrightStatus === "SIGNED";
    const isPaid = paper.transactions && paper.transactions.length > 0;

    const copyId = async () => {
        await navigator.clipboard.writeText(paper.submissionId);
        toast.success("Submission ID copied");
    };

    const sortedStatuses = [...paper.paperStatuses].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const currentStatus = sortedStatuses[0];
    const statusConfig = getStatusConfig(currentStatus?.status || "SUBMITTED", currentStatus?.isApproved ?? true);
    const StatusIcon = statusConfig.icon;

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View Details</span>
                </Button>
            </SheetTrigger>

            <SheetContent className="w-full sm:w-[540px] p-0 flex flex-col h-full bg-background shadow-xl border-l">
                {/* Header */}
                <SheetHeader className="px-6 py-5 border-b flex-none bg-card/50 backdrop-blur-sm z-10">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <Badge variant={statusConfig.variant} className={`rounded-full px-3 py-0.5 flex items-center gap-1.5 ${statusConfig.className}`}>
                                <StatusIcon className="h-3.5 w-3.5" />
                                {statusConfig.label}
                            </Badge>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md border">
                                <Hash className="h-3 w-3 opacity-70" />
                                <span className="font-mono">{paper.submissionId}</span>
                                <button onClick={copyId} className="hover:text-primary transition-colors ml-1" title="Copy ID">
                                    <Copy className="h-3 w-3" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <SheetTitle className="text-xl font-bold leading-snug text-foreground">
                                {paper.name}
                            </SheetTitle>
                            <SheetDescription className="flex items-center gap-2 text-xs mt-1">
                                <Calendar className="h-3 w-3" />
                                Submitted on {new Date(paper.createdAt).toLocaleDateString(undefined, { dateStyle: 'long' })}
                            </SheetDescription>
                        </div>
                    </div>
                </SheetHeader>

                <Tabs defaultValue="overview" className="flex-1 flex flex-col min-h-0">
                    <div className="px-6 pt-2 border-b flex-none bg-background">
                        <TabsList className="w-full justify-start h-10 p-0 bg-transparent border-b-0 rounded-none">
                            <TabsTrigger value="overview" className="relative h-10 rounded-none border-b-2 border-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground transition-none">
                                Overview
                            </TabsTrigger>
                            <TabsTrigger value="history" className="relative h-10 rounded-none border-b-2 border-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground transition-none">
                                Activity Log
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        <div className="p-6 pb-10 space-y-8">
                            <TabsContent value="overview" className="mt-0 space-y-8 focus-visible:outline-none">

                                {/* [ADDED] Publication Requirements Section */}
                                <section className="space-y-3">
                                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Publication Requirements</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Copyright Status */}
                                        <div className={`p-4 rounded-xl border flex flex-col gap-3 ${isCopyrightSigned ? "bg-green-50/50 border-green-200" : "bg-muted/30 border-dashed"}`}>
                                            <div className="flex items-start justify-between">
                                                <div className={`p-2 rounded-full ${isCopyrightSigned ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                                                    <FileSignature className="h-4 w-4" />
                                                </div>
                                                {isCopyrightSigned ? (
                                                    <Badge className="bg-green-600 hover:bg-green-700">Signed</Badge>
                                                ) : (
                                                    <Badge variant="outline" className="text-muted-foreground">Pending</Badge>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">Copyright Form</p>
                                                {isCopyrightSigned && paper.Copyright?.pdfUrl ? (
                                                    <a href={paper.Copyright.pdfUrl} target="_blank" className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1">
                                                        <Download className="h-3 w-3" /> Download PDF
                                                    </a>
                                                ) : (
                                                    <p className="text-xs text-muted-foreground">Waiting for author signature</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Payment Status */}
                                        <div className={`p-4 rounded-xl border flex flex-col gap-3 ${isPaid ? "bg-blue-50/50 border-blue-200" : "bg-muted/30 border-dashed"}`}>
                                            <div className="flex items-start justify-between">
                                                <div className={`p-2 rounded-full ${isPaid ? "bg-blue-100 text-blue-700" : "bg-muted text-muted-foreground"}`}>
                                                    <CreditCard className="h-4 w-4" />
                                                </div>
                                                {isPaid ? (
                                                    <Badge className="bg-blue-600 hover:bg-blue-700">Paid</Badge>
                                                ) : (
                                                    <Badge variant="outline" className="text-muted-foreground">Unpaid</Badge>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">Publication Fee</p>
                                                <p className="text-xs text-muted-foreground">
                                                    {isPaid ? "Payment Verified" : "Waiting for payment"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Manuscript Card */}
                                <section className="space-y-3">
                                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Manuscript</h4>
                                    {paper.manuscriptUrl ? (
                                        <div className="flex items-center justify-between p-4 rounded-xl border bg-card/50 hover:bg-card hover:border-primary/30 transition-all group">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                                                    <FileText className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-sm text-foreground">Manuscript PDF</p>
                                                    <p className="text-xs text-muted-foreground">Original Submission</p>
                                                </div>
                                            </div>
                                            <Button size="sm" variant="outline" asChild className="group-hover:bg-primary group-hover:text-primary-foreground border-input transition-colors">
                                                <a href={paper.manuscriptUrl} target="_blank" rel="noopener noreferrer">
                                                    <Download className="h-4 w-4 mr-2" /> Download
                                                </a>
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="p-6 rounded-xl border border-dashed flex flex-col items-center justify-center text-center gap-2 text-muted-foreground bg-muted/20">
                                            <XCircle className="h-8 w-8 opacity-20" />
                                            <span className="text-sm">No manuscript file uploaded.</span>
                                        </div>
                                    )}
                                </section>

                                {/* ... (Authors and Editor sections remain same) ... */}
                                <section className="space-y-3">
                                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Authors</h4>
                                    <div className="grid gap-3">
                                        {paper.authors.map((author) => (
                                            <div key={author.id} className="flex items-start gap-3 p-3 rounded-lg border bg-card/50">
                                                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold border border-primary/20">
                                                    {author.firstName.charAt(0)}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-foreground truncate">
                                                        {author.firstName} {author.lastName}
                                                    </p>
                                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                                                        <Mail className="h-3 w-3 opacity-70" />
                                                        <span className="truncate">{author.email}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </TabsContent>

                            {/* History Tab remains same */}
                            <TabsContent value="history" className="mt-0 focus-visible:outline-none">
                                <div className="relative border-l-2 border-muted ml-3 pl-8 py-2 space-y-10">
                                    {sortedStatuses.map((status, index) => (
                                        <div key={status.id} className="relative">
                                            <span className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background flex items-center justify-center z-10 ${index === 0 ? "bg-primary ring-2 ring-primary/20" : "bg-muted-foreground/30"}`} />
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                                    <span className={`text-sm font-semibold ${index === 0 ? "text-foreground" : "text-muted-foreground"}`}>
                                                        {status.status.replace("_", " ")}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground font-mono">
                                                        {new Date(status.createdAt).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                </div>
                                                {!status.isApproved && (
                                                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-yellow-50 text-yellow-700 border border-yellow-200 w-fit text-xs font-medium">
                                                        <Clock className="h-3 w-3" /> Pending Review
                                                    </div>
                                                )}
                                                {status.comments && status.comments.length > 0 && (
                                                    <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded-md border italic relative">
                                                        "{status.comments.join(", ")}"
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        </div>
                    </div>

                    <SheetFooter className="p-4 border-t bg-muted/5 flex-none mt-auto">
                        <SheetClose asChild>
                            <Button variant="outline" className="w-full">Close</Button>
                        </SheetClose>
                    </SheetFooter>
                </Tabs>
            </SheetContent>
        </Sheet>
    );
}