/*
 * File: src/app/admin/dashboard/ManagePapersTab.tsx
 * Description: Component for the "Manage Papers" tab in the admin dashboard.
 */

"use client";

import React, { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
    Loader2,
    AlertCircle,
    Check,
    Send,
    FileText,
    ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

// --- Mock Data Structures (based on schema) ---
interface Paper {
    id: string;
    submissionId: string;
    name: string;
    editorId: string | null;
    // A paper has many statuses; we'd typically fetch the *latest* one.
    latestStatus: Status | null;
}

interface Status {
    id: string;
    status: string; // e.g., "SUBMITTED", "REVIEWED"
    isApproved: boolean;
    paperId: string;
}

interface Editor {
    id: string;
    firstName: string;
    lastName: string | null;
}
// --- End Mock Data Structures ---

// A single paper row
function PaperRow({ paper, editors }: { paper: Paper; editors: Editor[] }) {
    const [selectedEditor, setSelectedEditor] = useState("");
    const [isAssigning, setIsAssigning] = useState(false);
    const [isApproving, setIsApproving] = useState(false);
    const [isPublishing, setIsPublishing] = useState(false);
    const [file, setFile] = useState<File | null>(null);

    const handleAssignEditor = async () => {
        if (!selectedEditor) {
            toast.error("Please select an editor.");
            return;
        }
        setIsAssigning(true);
        try {
            const res = await fetch("/api/admin/paper/assign", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ paperId: paper.id, employeeId: selectedEditor }),
            });
            if (!res.ok) throw new Error("Failed to assign editor.");
            toast.success("Editor assigned successfully.");
            // TODO: Refetch data
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setIsAssigning(false);
        }
    };

    const handleApproveStatus = async (statusId: string) => {
        setIsApproving(true);
        try {
            const res = await fetch("/api/admin/paper/status", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ statusRecordId: statusId }),
            });
            if (!res.ok) throw new Error("Failed to approve status.");
            toast.success("Status approved.");
            // TODO: Refetch data
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setIsApproving(false);
        }
    };

    const handlePublish = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            toast.error("Please select a final PDF to publish.");
            return;
        }
        setIsPublishing(true);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("status", "PUBLISHED");
        formData.append("paperId", paper.submissionId); // API uses submissionId
        formData.append("comments", JSON.stringify(["Paper published by admin."]));

        try {
            const res = await fetch("/api/admin/paper/status", {
                method: "POST",
                body: formData, // No content-type, browser sets it for FormData
            });
            if (!res.ok) throw new Error("Failed to publish paper.");
            toast.success("Paper published successfully!");
            // TODO: Refetch data
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setIsPublishing(false);
        }
    };

    const status = paper.latestStatus;
    let actionUI = null;

    if (!paper.editorId) {
        // --- Action: Assign Editor ---
        actionUI = (
            <div className="flex gap-2">
                <Select value={selectedEditor} onValueChange={setSelectedEditor}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Editor..." />
                    </SelectTrigger>
                    <SelectContent>
                        {editors.map((e) => (
                            <SelectItem key={e.id} value={e.id}>
                                {e.firstName} {e.lastName}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button onClick={handleAssignEditor} disabled={isAssigning} size="sm">
                    {isAssigning && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Assign
                </Button>
            </div>
        );
    } else if (status && !status.isApproved) {
        // --- Action: Approve Status ---
        actionUI = (
            <Button
                onClick={() => handleApproveStatus(status.id)}
                disabled={isApproving}
                size="sm"
                variant="outline"
            >
                {isApproving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Approve Status: {status.status}
            </Button>
        );
    } else if (status && status.status === "REVIEWED" && status.isApproved) {
        // --- Action: Publish Paper ---
        actionUI = (
            <form onSubmit={handlePublish} className="flex gap-2">
                <Input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                <Button type="submit" disabled={isPublishing} size="sm">
                    {isPublishing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Publish
                </Button>
            </form>
        );
    }

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 border rounded-lg">
            <div className="flex-1">
                <h4 className="font-semibold">{paper.name}</h4>
                <p className="text-sm text-muted-foreground">{paper.submissionId}</p>
                <div className="text-xs font-medium mt-1">
                    {status ? (
                        <span
                            className={status.isApproved ? "text-green-600" : "text-yellow-600"}
                        >
              Status: {status.status} (
                            {status.isApproved ? "Approved" : "Pending"})
            </span>
                    ) : (
                        <span className="text-gray-500">No status.</span>
                    )}
                </div>
            </div>
            <div className="w-full md:w-auto">{actionUI}</div>
        </div>
    );
}

// Main Tab Component
export default function ManagePapersTab() {
    const [papers, setPapers] = useState<Paper[]>([]);
    const [editors, setEditors] = useState<Editor[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Mock data fetching, as GET APIs are not provided
        const fetchAllData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // --- MOCK DATA ---
                // In a real app, you'd fetch:
                // const papersRes = await fetch("/api/admin/papers"); // (Assumed API)
                // const editorsRes = await fetch("/api/admin/users?role=EDITOR"); // (Assumed API)
                const mockEditors: Editor[] = [
                    { id: "editor-1", firstName: "Dr.", lastName: "Smith" },
                    { id: "editor-2", firstName: "Prof.", lastName: "Jones" },
                ];
                const mockPapers: Paper[] = [
                    {
                        id: "paper-1",
                        submissionId: "JCT-25-001",
                        name: "A Novel Approach to AI",
                        editorId: null,
                        latestStatus: {
                            id: "status-1",
                            status: "SUBMITTED",
                            isApproved: true,
                            paperId: "paper-1",
                        },
                    },
                    {
                        id: "paper-2",
                        submissionId: "JCT-25-002",
                        name: "Machine Learning in Healthcare",
                        editorId: "editor-1",
                        latestStatus: {
                            id: "status-2",
                            status: "REVIEWED",
                            isApproved: false, // Needs admin approval
                            paperId: "paper-2",
                        },
                    },
                    {
                        id: "paper-3",
                        submissionId: "JCT-25-003",
                        name: "Quantum Computing Explained",
                        editorId: "editor-1",
                        latestStatus: {
                            id: "status-3",
                            status: "REVIEWED",
                            isApproved: true, // Approved, ready for payment/publish
                            paperId: "paper-3",
                        },
                    },
                ];
                // --- END MOCK DATA ---
                setPapers(mockPapers);
                setEditors(mockEditors);
            } catch (err: any) {
                setError("Failed to load dashboard data.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchAllData();
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Manage Paper Submissions</CardTitle>
                <CardDescription>
                    Assign editors, approve status changes, and publish final papers.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {isLoading && (
                    <div className="flex justify-center p-8">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                )}
                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                {!isLoading &&
                    !error &&
                    (papers.length > 0 ? (
                        papers.map((paper) => (
                            <PaperRow key={paper.id} paper={paper} editors={editors} />
                        ))
                    ) : (
                        <p className="text-muted-foreground italic">No papers found.</p>
                    ))}
            </CardContent>
        </Card>
    );
}