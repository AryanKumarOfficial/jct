"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileSpreadsheet, FolderInput, CheckCircle2, Loader2, Download, XCircle, FileWarning } from "lucide-react";
import { parseExcel } from "@/utils/excel-parser";
import { toast } from "sonner";
import * as XLSX from "xlsx";
import {MigrationPayload} from "@/schemas/migrationSchema";

const BATCH_SIZE = 5;

interface FailedRecord extends MigrationPayload {
    failureReason: string;
}

// Add webkitdirectory to React Input props
declare module 'react' {
    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        webkitdirectory?: string | boolean;
        directory?: string | boolean;
    }
}

export default function DataMigrationTab() {
    const [excelFile, setExcelFile] = useState<File | null>(null);
    const [pdfFiles, setPdfFiles] = useState<Map<string, File>>(new Map()); // Map for fast lookup

    const [status, setStatus] = useState<"idle" | "parsing" | "uploading" | "migrating" | "done">("idle");
    const [progress, setProgress] = useState(0);
    const [currentAction, setCurrentAction] = useState("");

    const [stats, setStats] = useState({ success: 0, failed: 0 });
    const [failedRecords, setFailedRecords] = useState<FailedRecord[]>([]);

    const handleExcelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setExcelFile(e.target.files[0]);
            resetState();
        }
    };

    const handleFolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const fileMap = new Map<string, File>();
            Array.from(e.target.files).forEach(file => {
                // Store by name for easy matching: "paper1.pdf" -> File Object
                fileMap.set(file.name, file);
            });
            setPdfFiles(fileMap);
            toast.success(`Loaded ${fileMap.size} files from folder`);
        }
    };

    const resetState = () => {
        setStatus("idle");
        setProgress(0);
        setStats({ success: 0, failed: 0 });
        setFailedRecords([]);
        setCurrentAction("");
    };

    const uploadPdfToR2 = async (file: File): Promise<{ url: string, key: string }> => {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/admin/upload", {
            method: "POST",
            body: formData,
        });

        if (!res.ok) throw new Error(`Failed to upload ${file.name}`);
        return await res.json();
    };

    const handleProcess = async () => {
        if (!excelFile) return;

        resetState();
        setStatus("parsing");

        try {
            // 1. PARSE EXCEL
            setCurrentAction("Reading Excel sheet...");
            const rawRecords = await parseExcel(excelFile);
            const totalRecords = rawRecords.length;

            if (totalRecords === 0) throw new Error("No records found in Excel.");

            // 2. MATCH & UPLOAD
            const processedRecords: MigrationPayload[] = [];
            setStatus("uploading");

            for (let i = 0; i < totalRecords; i++) {
                const record = rawRecords[i];
                const filename = record.publishUrl?.trim(); // e.g., "my-paper.pdf"

                // Progress Update
                const percent = Math.round(((i) / totalRecords) * 50);
                setProgress(percent);
                setCurrentAction(`Matching file: ${filename || "None"} (${i + 1}/${totalRecords})`);

                // Check if we have this file in the uploaded folder
                if (filename && pdfFiles.has(filename)) {
                    const matchingFile = pdfFiles.get(filename)!;
                    try {
                        // Upload
                        const { url, key } = await uploadPdfToR2(matchingFile);
                        processedRecords.push({
                            ...record,
                            publishUrl: url,
                            publishId: key
                        });
                    } catch (err) {
                        console.error(err);
                        // Push with error note? For now we push without URL so migration fails or handles it
                        processedRecords.push({ ...record, publishUrl: undefined });
                        toast.error(`Upload failed for: ${filename}`);
                    }
                } else {
                    if (filename && !filename.startsWith("http")) {
                        console.warn(`File not found in folder: ${filename}`);
                    }
                    // Either it's a URL already, or missing. Push as is.
                    processedRecords.push(record);
                }
            }

            // 3. MIGRATE TO DB
            setStatus("migrating");
            let processedBatchCount = 0;

            for (let i = 0; i < totalRecords; i += BATCH_SIZE) {
                const batch = processedRecords.slice(i, i + BATCH_SIZE);

                const percent = 50 + Math.round((processedBatchCount / totalRecords) * 50);
                setProgress(percent);
                setCurrentAction(`Saving batch ${Math.ceil((i + 1) / BATCH_SIZE)}...`);

                try {
                    const res = await fetch("/api/admin/data/migrate", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(batch),
                    });

                    const data = await res.json();

                    if (data.summary) {
                        setStats(prev => ({
                            success: prev.success + data.summary.success,
                            failed: prev.failed + data.summary.failed
                        }));

                        if (data.summary.errors?.length > 0) {
                            const batchFailures = data.summary.errors.map((err: any) => {
                                const originalData = batch[err.row - 1];
                                return { ...originalData, failureReason: err.error };
                            });
                            setFailedRecords(prev => [...prev, ...batchFailures]);
                        }
                    }
                } catch (batchErr) {
                    const failures = batch.map(p => ({ ...p, failureReason: "Network/Server Error" }));
                    setFailedRecords(prev => [...prev, ...failures]);
                    setStats(prev => ({ ...prev, failed: prev.failed + batch.length }));
                }

                processedBatchCount += batch.length;
            }

            setProgress(100);
            setStatus("done");
            setCurrentAction("All Done");
            toast.success("Migration process finished!");

        } catch (err: any) {
            toast.error(err.message || "Process failed");
            setStatus("idle");
        }
    };

    const downloadErrorSheet = () => {
        if (failedRecords.length === 0) return;

        const exportData = failedRecords.map(rec => {
            const row: any = {
                "Error Reason": rec.failureReason,
                "Title": rec.title,
                "Volume": rec.volume,
                "Issue": rec.issue,
                "Month": rec.month,
                "Year": rec.year,
                "PDF Filename": rec.publishUrl,
                "Keywords": rec.keywords.join(", "),
            };

            rec.authors.forEach((auth, idx) => {
                const i = idx + 1;
                row[`Author ${i} Name`] = `${auth.firstName} ${auth.lastName || ""}`.trim();
                row[`Author ${i} Email`] = auth.email;
                row[`Author ${i} Org`] = auth.organisation;
                row[`Author ${i} Country`] = auth.country;
                row[`Author ${i} Phone`] = auth.phone;
            });

            return row;
        });

        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Failed Records");
        XLSX.writeFile(wb, "failed_migration_report.xlsx");
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Bulk Data Migration</CardTitle>
                    <CardDescription>
                        Import legacy papers. Select your Excel sheet AND the folder containing the PDFs.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* 1. EXCEL */}
                        <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 transition-colors ${excelFile ? "bg-green-50 border-green-200" : "hover:bg-muted/50"}`}>
                            <FileSpreadsheet className={`h-10 w-10 ${excelFile ? "text-green-600" : "text-muted-foreground"}`} />
                            <div>
                                <p className="font-semibold text-sm">{excelFile ? excelFile.name : "1. Select Excel Sheet"}</p>
                                <p className="text-xs text-muted-foreground">Contains titles & filenames</p>
                            </div>
                            <input type="file" accept=".xlsx, .csv" className="hidden" id="excel-upload" onChange={handleExcelChange} disabled={status !== 'idle' && status !== 'done'} />
                            <Button variant="outline" size="sm" onClick={() => document.getElementById('excel-upload')?.click()}>
                                Browse Excel
                            </Button>
                        </div>

                        {/* 2. FOLDER */}
                        <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 transition-colors ${pdfFiles.size > 0 ? "bg-blue-50 border-blue-200" : "hover:bg-muted/50"}`}>
                            <FolderInput className={`h-10 w-10 ${pdfFiles.size > 0 ? "text-blue-600" : "text-muted-foreground"}`} />
                            <div>
                                <p className="font-semibold text-sm">
                                    {pdfFiles.size > 0 ? `${pdfFiles.size} Files Loaded` : "2. Select PDF Folder"}
                                </p>
                                <p className="text-xs text-muted-foreground">Folder containing all PDFs</p>
                            </div>
                            {/* @ts-ignore - webkitdirectory is standard but not in React types by default */}
                            <input type="file" webkitdirectory="" directory="" multiple className="hidden" id="folder-upload" onChange={handleFolderChange} disabled={status !== 'idle' && status !== 'done'} />
                            <Button variant="outline" size="sm" onClick={() => document.getElementById('folder-upload')?.click()}>
                                Browse Folder
                            </Button>
                        </div>
                    </div>

                    {/* PROGRESS */}
                    {(status !== "idle" && status !== "done") && (
                        <div className="space-y-2 animate-in fade-in">
                            <div className="flex justify-between text-xs font-medium text-muted-foreground">
                                <span className="flex items-center gap-2">
                                    {status === "uploading" && <Loader2 className="h-3 w-3 animate-spin" />}
                                    {currentAction}
                                </span>
                                <span>{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                        </div>
                    )}

                    {/* STATS */}
                    {(stats.success > 0 || stats.failed > 0) && (
                        <div className="flex items-center justify-center gap-8 py-2 bg-muted/30 rounded-lg">
                            <div className="text-green-600 flex items-center gap-2 font-semibold text-sm">
                                <CheckCircle2 className="h-4 w-4" /> {stats.success} Imported
                            </div>
                            {stats.failed > 0 && (
                                <div className="text-red-600 flex items-center gap-2 font-semibold text-sm">
                                    <XCircle className="h-4 w-4" /> {stats.failed} Failed
                                </div>
                            )}
                        </div>
                    )}

                    {/* ACTIONS */}
                    <div className="flex gap-4">
                        <Button
                            size="lg"
                            className="flex-1"
                            disabled={!excelFile || pdfFiles.size === 0 || status === "parsing" || status === "uploading" || status === "migrating"}
                            onClick={handleProcess}
                        >
                            {status === "idle" || status === "done" ? "Start Bulk Import" : "Processing..."}
                        </Button>

                        {failedRecords.length > 0 && (
                            <Button variant="destructive" size="lg" className="flex-1" onClick={downloadErrorSheet}>
                                <Download className="mr-2 h-4 w-4" /> Download Error Report
                            </Button>
                        )}
                    </div>

                    {failedRecords.length > 0 && (
                        <p className="text-center text-xs text-muted-foreground">
                            Download the report to see exact failure reasons (e.g. Duplicate Title, Missing File).
                        </p>
                    )}

                </CardContent>
            </Card>
        </div>
    );
}