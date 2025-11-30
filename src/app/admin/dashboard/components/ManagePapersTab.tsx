"use client";

import React, {useState, useEffect, useCallback, useMemo} from "react";
import {
    Card,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {Loader2, Search, FilterX, FileText} from "lucide-react";
import {toast} from "sonner";
import {Paper, Editor} from "../types";
import {PaperRow} from "./PaperRow";
import {PaperStatus} from "@/types/enums";
import {Button} from "@/components/ui/button";

export default function ManagePapersTab() {
    const [papers, setPapers] = useState<Paper[]>([]);
    const [editors, setEditors] = useState<Editor[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Filter States
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("ALL");

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const [papersRes, editorsRes] = await Promise.all([
                fetch("/api/paper"),
                fetch("/api/admin/users?role=EDITOR")
            ]);

            if (papersRes.ok) setPapers(await papersRes.json());
            if (editorsRes.ok) setEditors(await editorsRes.json());
        } catch (err) {
            console.error(err);
            toast.error("Failed to load data");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Client-side filtering logic
    const filteredPapers = useMemo(() => {
        return papers.filter(paper => {
            const matchesSearch =
                paper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                paper.submissionId.toLowerCase().includes(searchQuery.toLowerCase());

            const currentStatus = paper.paperStatuses[0]?.status || "SUBMITTED";
            const matchesStatus = statusFilter === "ALL" || currentStatus === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [papers, searchQuery, statusFilter]);

    return (
        <Card className="border-none shadow-none bg-transparent">
            <div className="flex flex-col gap-6">
                {/* Header Section */}
                <div
                    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Manage Submissions</h2>
                        <p className="text-sm text-muted-foreground mt-1">
                            Review submissions, assign editors, and manage publication workflow.
                        </p>
                    </div>

                    {/* Filters Toolbar */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <div className="relative flex-1 sm:flex-initial">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                            <Input
                                placeholder="Search ID or Title..."
                                className="pl-9 w-full sm:w-[250px] bg-background"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2">
                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger className="w-full sm:w-[180px] bg-background">
                                    <SelectValue placeholder="Filter Status"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ALL">All Statuses</SelectItem>
                                    {Object.values(PaperStatus).map(s => (
                                        <SelectItem key={s} value={s}>{s.replace("_", " ")}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {(searchQuery || statusFilter !== "ALL") && (
                                <Button variant="outline" size="icon" onClick={() => {
                                    setSearchQuery("");
                                    setStatusFilter("ALL");
                                }}>
                                    <FilterX className="h-4 w-4"/>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Data Table */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors bg-muted/50 hover:bg-muted/50">
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[40%]">
                                    Paper Details
                                </th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[20%]">
                                    Status
                                </th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[20%]">
                                    Editor
                                </th>
                                <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground w-[20%]">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0 bg-background">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={4} className="h-32 text-center">
                                        <div
                                            className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                                            <Loader2 className="h-6 w-6 animate-spin text-primary"/>
                                            <span>Loading submissions...</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredPapers.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="h-40 text-center">
                                        <div
                                            className="flex flex-col items-center justify-center gap-1 text-muted-foreground">
                                            <div className="p-3 rounded-full bg-muted mb-2">
                                                <FileText className="h-6 w-6 opacity-50"/>
                                            </div>
                                            <span className="font-medium">No papers found</span>
                                            <span className="text-xs">Try adjusting your filters or search query</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                filteredPapers.map((paper) => (
                                    <PaperRow
                                        key={paper.id}
                                        paper={paper}
                                        editors={editors}
                                        onRefresh={fetchData}
                                    />
                                ))
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer Meta */}
                {!isLoading && (
                    <div className="text-xs text-muted-foreground text-center">
                        Showing {filteredPapers.length} of {papers.length} submissions
                    </div>
                )}
            </div>
        </Card>
    );
}