import React, {useState, memo} from "react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Input} from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
    MoreHorizontal,
    UserPlus,
    CheckCircle2,
    UploadCloud,
    AlertTriangle,
    Loader2,
    Calendar,
    Lock
} from "lucide-react";
import {toast} from "sonner";
import {PaperStatus} from "@/types/enums";
import {Paper, Editor} from "../types";
import PaperDetailsSheet from "./PaperDetailsSheet";

// ... (usePaperActions hook remains same) ...
const usePaperActions = (paper: Paper, onRefresh: () => void) => {
    const [isActionLoading, setIsActionLoading] = useState(false);

    const performAction = async (fn: () => Promise<any>, successMsg: string) => {
        setIsActionLoading(true);
        try {
            await fn();
            toast.success(successMsg);
            onRefresh();
        } catch (err: any) {
            toast.error(err.message || "Operation failed");
        } finally {
            setIsActionLoading(false);
        }
    };

    const assignEditor = (editorId: string) => performAction(async () => {
        const res = await fetch("/api/admin/paper/assign", {
            method: "POST",
            body: JSON.stringify({paperId: paper.id, employeeId: editorId}),
        });
        if (!res.ok) throw new Error("Assignment failed");
    }, "Editor assigned");

    const approveStatus = (statusId: string) => performAction(async () => {
        const res = await fetch("/api/admin/paper/status", {
            method: "PATCH",
            body: JSON.stringify({statusRecordId: statusId}),
        });
        if (!res.ok) throw new Error("Approval failed");
    }, "Status approved");

    const overrideStatus = (status: string) => performAction(async () => {
        const formData = new FormData();
        formData.append("status", status);
        formData.append("paperId", paper.submissionId);
        formData.append("comments", JSON.stringify(["Status Updated by Admin"]));
        const res = await fetch("/api/admin/paper/status", {method: "POST", body: formData});
        if (!res.ok) throw new Error("Status update failed");
    }, `Status set to ${status}`);

    const publishPaper = (file: File) => performAction(async () => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("status", "PUBLISHED");
        formData.append("paperId", paper.submissionId);
        formData.append("comments", JSON.stringify(["Published by Admin"]));
        const res = await fetch("/api/admin/paper/status", {method: "POST", body: formData});
        if (!res.ok) throw new Error(await res.text().then(t => {
            try {
                return JSON.parse(t).error
            } catch {
                return "Publish failed"
            }
        }));
    }, "Paper published");

    return {isActionLoading, assignEditor, approveStatus, overrideStatus, publishPaper};
};

export const PaperRow = memo(function PaperRow({paper, editors, onRefresh}: {
    paper: Paper;
    editors: Editor[],
    onRefresh: () => void
}) {
    const {
        isActionLoading,
        assignEditor,
        approveStatus,
        overrideStatus,
        publishPaper
    } = usePaperActions(paper, onRefresh);
    const [publishFile, setPublishFile] = useState<File | null>(null);

    const latestStatus = paper.paperStatuses[0];
    const statusEnum = latestStatus?.status || "SUBMITTED";
    const isPending = latestStatus && !latestStatus.isApproved;

    // Check payment status from props
    const isPaid = paper.transactions && paper.transactions.some(t => t.status === "SUCCESS");

    const getStatusBadge = () => {
        const styles: Record<string, string> = {
            SUBMITTED: "bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200",
            UNDER_REVIEW: "bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200",
            ACCEPTED: "bg-green-50 text-green-700 hover:bg-green-100 border-green-200",
            REJECTED: "bg-red-50 text-red-700 hover:bg-red-100 border-red-200",
            PUBLISHED: "bg-teal-50 text-teal-700 hover:bg-teal-100 border-teal-200",
        };
        const style = styles[statusEnum] || "bg-gray-100 text-gray-700 border-gray-200";

        return (
            <Badge variant="outline" className={`${style} px-2 py-0.5 text-xs font-medium transition-colors`}>
                {isActionLoading && <Loader2 className="mr-1 h-3 w-3 animate-spin"/>}
                {statusEnum.replace("_", " ")}
                {isPending && " (Pending)"}
            </Badge>
        );
    };

    return (
        <tr className="group border-b transition-colors hover:bg-muted/30">
            <td className="p-4 align-middle">
                <div className="flex flex-col gap-1">
                    <span className="font-semibold text-foreground line-clamp-1 max-w-[300px]" title={paper.name}>
                        {paper.name}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span
                            className="font-mono bg-muted px-1.5 py-0.5 rounded text-[10px]">{paper.submissionId}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3"/>
                            {new Date(paper.createdAt).toLocaleDateString()}
                        </span>
                        {/* Status Icon specific to payment */}
                        {statusEnum === "ACCEPTED" && (
                            isPaid ?
                                <Badge variant="secondary"
                                       className="h-5 bg-green-100 text-green-700 border-green-200 text-[10px] px-1.5 ml-1">Paid</Badge> :
                                <Badge variant="secondary"
                                       className="h-5 bg-yellow-100 text-yellow-700 border-yellow-200 text-[10px] px-1.5 ml-1">Unpaid</Badge>
                        )}
                    </div>
                </div>
            </td>

            <td className="p-4 align-middle">
                {getStatusBadge()}
            </td>

            <td className="p-4 align-middle">
                {paper.editor ? (
                    <div className="flex items-center gap-2 text-sm">
                        <div
                            className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                            {paper.editor.firstName.charAt(0)}
                        </div>
                        <span className="text-muted-foreground">{paper.editor.firstName}</span>
                    </div>
                ) : (
                    <span className="text-xs italic text-muted-foreground/50">Unassigned</span>
                )}
            </td>

            <td className="p-4 align-middle text-right">
                <div
                    className="flex items-center justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <PaperDetailsSheet paper={paper}/>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator/>

                            {/* Approve Status */}
                            {isPending && (
                                <DropdownMenuItem onClick={() => approveStatus(latestStatus.id)}
                                                  className="text-green-600 focus:text-green-700">
                                    <CheckCircle2 className="mr-2 h-4 w-4"/> Approve Status
                                </DropdownMenuItem>
                            )}

                            {/* Assign Editor Submenu */}
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <UserPlus className="mr-2 h-4 w-4"/> Assign Editor
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent className="max-h-[200px] overflow-y-auto">
                                    {editors.map(e => (
                                        <DropdownMenuItem key={e.id} onClick={() => assignEditor(e.id)}>
                                            {e.firstName} {e.lastName}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>

                            {/* Override Status Submenu */}
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <AlertTriangle className="mr-2 h-4 w-4"/> Force Status
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent>
                                    {Object.values(PaperStatus).map(s => (
                                        <DropdownMenuItem key={s} onClick={() => overrideStatus(s)}>
                                            {s}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>

                            {/* Publish Option - Restricted by Payment */}
                            {statusEnum === "ACCEPTED" && !isPending && (
                                <div className="p-2 border-t mt-1">
                                    <p className="mb-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider flex justify-between">
                                        Publish Paper
                                        {!isPaid && <Lock className="h-3 w-3 text-red-500"/>}
                                    </p>

                                    {!isPaid ? (
                                        <div
                                            className="text-[10px] text-red-500 bg-red-50 p-2 rounded border border-red-100 text-center">
                                            Payment pending. Cannot publish.
                                        </div>
                                    ) : (
                                        <div className="flex gap-2">
                                            <Input
                                                type="file"
                                                accept=".pdf"
                                                className="h-7 text-[10px] px-2 py-1"
                                                onChange={(e) => setPublishFile(e.target.files?.[0] || null)}
                                            />
                                            <Button
                                                size="icon"
                                                className="h-7 w-7 shrink-0 bg-green-600 hover:bg-green-700"
                                                disabled={!publishFile}
                                                onClick={() => publishFile && publishPaper(publishFile)}
                                                title="Upload Final PDF & Publish"
                                            >
                                                <UploadCloud className="h-3 w-3"/>
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </td>
        </tr>
    );
});