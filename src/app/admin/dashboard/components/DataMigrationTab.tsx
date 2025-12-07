"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
    FileSpreadsheet,
    FolderInput,
    CheckCircle2,
    Loader2,
    Download,
    HelpCircle,
    Upload,
    Terminal,
    ChevronRight,
    AlertCircle
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { parseExcel } from "@/utils/excel-parser";
import {paperImportSchema, MigrationPayload, AuthorImportPayload} from "@/schemas/migrationSchema";
import { toast } from "sonner";
import * as XLSX from "xlsx";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const BATCH_SIZE = 5;

// Add webkitdirectory to React Input props
declare module 'react' {
    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        webkitdirectory?: string | boolean;
        directory?: string | boolean;
    }
}

interface FailedRecord {
    title: string;
    failureReason: string;
    [key: string]: any;
}

export default function DataMigrationTab() {
    const [excelFile, setExcelFile] = useState<File | null>(null);
    const [pdfFiles, setPdfFiles] = useState<Map<string, File>>(new Map());

    // UI States
    const [status, setStatus] = useState<"idle" | "validating" | "uploading" | "migrating" | "done">("idle");
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    // Stats
    const [stats, setStats] = useState({ success: 0, failed: 0 });
    const [failedRecords, setFailedRecords] = useState<FailedRecord[]>([]);

    // Log Auto-scroll
    const logEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        logEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [logs]);

    const addLog = (msg: string) => setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);

    // --- TEMPLATE DOWNLOADER ---
    const downloadTemplate = () => {
        const headers = [
            {
                "Title": "Sample Paper Title",
                "Volume": 12,
                "Issue": 1,
                "Month": "January",
                "Year": 2024,
                "PDF Link": "paper_filename.pdf",
                "Keywords": "AI, ML, Cloud",
                "Author 1 Name": "John Doe",
                "Author 1 Email": "john@example.com",
                "Author 1 Org": "MIT",
                "Author 1 Country": "USA",
                "Author 1 Phone": "+1234567890",
                "Author 2 Name": "Jane Smith",
                "Author 2 Email": "jane@example.com",
                "Author 2 Org": "Stanford",
                "Author 2 Country": "USA",
                "Author 2 Phone": ""
            }
        ];
        const ws = XLSX.utils.json_to_sheet(headers);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Template");
        XLSX.writeFile(wb, "JCT_Migration_Template.xlsx");
    };

    // --- FILE HANDLERS ---
    const handleExcelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setExcelFile(e.target.files[0]);
            resetState();
            addLog("Excel file selected ready for validation.");
        }
    };

    const handleFolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const fileMap = new Map<string, File>();
            Array.from(e.target.files).forEach(file => {
                fileMap.set(file.name.toLowerCase(), file);
            });
            setPdfFiles(fileMap);
            addLog(`Loaded folder with ${fileMap.size} files.`);
            toast.success(`Loaded ${fileMap.size} files`);
        }
    };

    const resetState = () => {
        setStatus("idle");
        setProgress(0);
        setStats({ success: 0, failed: 0 });
        setFailedRecords([]);
        setLogs([]);
    };

    // --- API & PROCESS ---
    const uploadPdfToR2 = async (file: File): Promise<{ url: string, key: string }> => {
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
        if (!res.ok) throw new Error(`Failed to upload ${file.name}`);
        return await res.json();
    };

    const handleProcess = async () => {
        if (!excelFile) return;

        resetState();
        setStatus("validating");
        addLog("Starting process... Analyzing Excel file.");

        try {
            // 1. PARSE & VALIDATE
            const rawRows = await parseExcel(excelFile);
            if (rawRows.length === 0) throw new Error("No records found in Excel.");
            addLog(`Found ${rawRows.length} rows. Validating schema...`);

            const validRecords: MigrationPayload[] = [];
            const validationFailures: FailedRecord[] = [];

            rawRows.forEach((row, index) => {
                const validation = paperImportSchema.safeParse(row);
                if (!validation.success) {
                    const errorMsg = validation.error.issues.map(i => `${i.path.join('.')}: ${i.message}`).join(", ");
                    validationFailures.push({
                        ...row,
                        title: row.title || `Row ${index + 2}`,
                        failureReason: `Validation: ${errorMsg}`
                    });
                } else {
                    validRecords.push(row);
                }
            });

            if (validationFailures.length > 0) {
                setFailedRecords(prev => [...prev, ...validationFailures]);
                setStats(prev => ({ ...prev, failed: prev.failed + validationFailures.length }));
                addLog(`⚠️ ${validationFailures.length} rows failed validation.`);
            }

            if (validRecords.length === 0) {
                setStatus("done");
                addLog("No valid records to process. Stopping.");
                return;
            }

            // 2. FILE MATCHING & UPLOAD
            setStatus("uploading");
            addLog("Matching and uploading files...");

            const readyForMigration: MigrationPayload[] = [];
            const totalValid = validRecords.length;

            for (let i = 0; i < totalValid; i++) {
                const record = validRecords[i];
                const targetFilename = record.publishUrl?.trim() || "";

                const percent = Math.round((i / totalValid) * 40);
                setProgress(percent);

                if (targetFilename && !targetFilename.startsWith("http")) {
                    const normalizedTarget = targetFilename.toLowerCase();
                    if (pdfFiles.has(normalizedTarget)) {
                        const matchingFile = pdfFiles.get(normalizedTarget)!;
                        try {
                            const { url, key } = await uploadPdfToR2(matchingFile);
                            readyForMigration.push({ ...record, publishUrl: url, publishId: key });
                            // Don't log every single upload to avoid spam, maybe every 5?
                            if(i % 5 === 0) addLog(`Uploaded: ${matchingFile.name}`);
                        } catch (err) {
                            setFailedRecords(prev => [...prev, { ...record, failureReason: "PDF Upload Failed" }]);
                            setStats(prev => ({ ...prev, failed: prev.failed + 1 }));
                            addLog(`❌ Failed to upload: ${targetFilename}`);
                        }
                    } else {
                        setFailedRecords(prev => [...prev, { ...record, failureReason: `File not found: ${targetFilename}` }]);
                        setStats(prev => ({ ...prev, failed: prev.failed + 1 }));
                        addLog(`⚠️ File missing: ${targetFilename}`);
                    }
                } else {
                    readyForMigration.push(record);
                }
            }

            // 3. DB MIGRATION
            setStatus("migrating");
            addLog("Saving records to database...");
            const totalMigrate = readyForMigration.length;
            let processedCount = 0;

            for (let i = 0; i < totalMigrate; i += BATCH_SIZE) {
                const batch = readyForMigration.slice(i, i + BATCH_SIZE);
                const percent = 40 + Math.round((processedCount / totalMigrate) * 60);
                setProgress(percent);

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
                            addLog(`⚠️ Batch error: ${data.summary.errors.length} failed.`);
                        }
                    }
                } catch (err) {
                    const networkFailures = batch.map(r => ({ ...r, failureReason: "Server Error" }));
                    setFailedRecords(prev => [...prev, ...networkFailures]);
                    setStats(prev => ({ ...prev, failed: prev.failed + batch.length }));
                    addLog(`❌ Critical batch failure.`);
                }
                processedCount += batch.length;
            }

            setProgress(100);
            setStatus("done");
            addLog("Process completed successfully.");
            toast.success("Migration process finished!");

        } catch (err: any) {
            toast.error(err.message || "Process failed");
            addLog(`❌ Critical Error: ${err.message}`);
            setStatus("idle");
        }
    };

    const downloadErrorSheet = () => {
        if (failedRecords.length === 0) return;
        const exportData = failedRecords.map(rec => {
            const row: any = {
                "FAILURE REASON": rec.failureReason,
                "Title": rec.title,
                "Volume": rec.volume,
                "Issue": rec.issue,
                "Month": rec.month,
                "Year": rec.year,
                "PDF Link": rec.publishUrl || "",
                "Keywords": rec.keywords.join(", "),
            };
            rec.authors.forEach((auth:AuthorImportPayload, idx:number) => {
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
        XLSX.utils.book_append_sheet(wb, ws, "Failures");
        XLSX.writeFile(wb, "migration_failures.xlsx");
    };

    return (
        <div className="space-y-6">

            {/* Header with Guide */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold tracking-tight">Bulk Data Migration</h2>
                        <p className="text-muted-foreground text-sm">Import papers and authors from legacy records.</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={downloadTemplate} className="gap-2">
                        <FileSpreadsheet className="h-4 w-4" /> Download Template
                    </Button>
                </div>

                <Accordion type="single" collapsible className="w-full bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900 rounded-lg px-4">
                    <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger className="hover:no-underline py-3 text-sm text-blue-700 dark:text-blue-300 font-semibold cursor-pointer flex items-center gap-2">
                            <span className="flex items-center gap-2"><HelpCircle className="h-4 w-4" /> How to use this tool?</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm space-y-2 pb-4 text-muted-foreground">
                            <p>1. <strong>Download the Template</strong> and fill it with your paper data.</p>
                            <p>2. Put all your <strong>PDF files</strong> into a single folder on your computer.</p>
                            <p>3. In the Excel "PDF Link" column, just write the <strong>filename</strong> (e.g., <code>paper1.pdf</code>).</p>
                            <p>4. Select both the Excel file and the Folder below.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">

                {/* LEFT: Upload & Controls */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border-2 border-dashed border-border/60 shadow-sm bg-muted/5">
                        <CardContent className="pt-6 space-y-6">

                            {/* Upload Zones */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {/* Excel Zone */}
                                <div className={cn(
                                    "relative group cursor-pointer flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed transition-all duration-200",
                                    excelFile ? "bg-primary/5 border-primary/40" : "bg-background border-muted-foreground/20 hover:border-primary/40 hover:bg-primary/5"
                                )}>
                                    <input
                                        type="file"
                                        accept=".xlsx, .csv"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        onChange={handleExcelChange}
                                        disabled={status !== 'idle' && status !== 'done'}
                                    />
                                    <div className={cn("p-3 rounded-full mb-3 transition-colors", excelFile ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary")}>
                                        <FileSpreadsheet className="h-6 w-6" />
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold text-sm">{excelFile ? "Excel Selected" : "Select Excel"}</p>
                                        <p className="text-xs text-muted-foreground max-w-[140px] truncate">{excelFile ? excelFile.name : "Drop .xlsx file here"}</p>
                                    </div>
                                    {excelFile && <CheckCircle2 className="absolute top-3 right-3 h-4 w-4 text-primary animate-in fade-in zoom-in" />}
                                </div>

                                {/* Folder Zone */}
                                <div className={cn(
                                    "relative group cursor-pointer flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed transition-all duration-200",
                                    pdfFiles.size > 0 ? "bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800" : "bg-background border-muted-foreground/20 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/10"
                                )}>
                                    {/* @ts-ignore */}
                                    <input
                                        type="file"
                                        webkitdirectory=""
                                        directory=""
                                        multiple
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        onChange={handleFolderChange}
                                        disabled={status !== 'idle' && status !== 'done'}
                                    />
                                    <div className={cn("p-3 rounded-full mb-3 transition-colors", pdfFiles.size > 0 ? "bg-blue-100 text-blue-600" : "bg-muted text-muted-foreground group-hover:bg-blue-100 group-hover:text-blue-600")}>
                                        <FolderInput className="h-6 w-6" />
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold text-sm">{pdfFiles.size > 0 ? "Folder Selected" : "Select PDF Folder"}</p>
                                        <p className="text-xs text-muted-foreground">{pdfFiles.size > 0 ? `${pdfFiles.size} files found` : "Select folder with PDFs"}</p>
                                    </div>
                                    {pdfFiles.size > 0 && <CheckCircle2 className="absolute top-3 right-3 h-4 w-4 text-blue-600 animate-in fade-in zoom-in" />}
                                </div>
                            </div>

                            {/* Main Action Button */}
                            <AnimatePresence mode="wait">
                                {status === 'idle' || status === 'done' ? (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                                        <Button
                                            size="lg"
                                            className="w-full h-12 text-base shadow-lg shadow-primary/20"
                                            onClick={handleProcess}
                                            disabled={!excelFile}
                                        >
                                            <Upload className="mr-2 h-4 w-4" /> Start Migration Process
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                                <span className="flex items-center gap-2">
                                                    <Loader2 className="h-3 w-3 animate-spin" /> {status.toUpperCase()}
                                                </span>
                                                <span>{progress}%</span>
                                            </div>
                                            <Progress value={progress} className="h-3" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Failure Download Block */}
                            {failedRecords.length > 0 && status === 'done' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <AlertCircle className="h-8 w-8 text-red-600" />
                                        <div>
                                            <p className="font-bold text-red-700 dark:text-red-400">{failedRecords.length} Records Failed</p>
                                            <p className="text-xs text-red-600/80">Some records could not be processed.</p>
                                        </div>
                                    </div>
                                    <Button variant="destructive" size="sm" onClick={downloadErrorSheet}>
                                        <Download className="mr-2 h-4 w-4" /> Download Error Report
                                    </Button>
                                </motion.div>
                            )}

                        </CardContent>
                    </Card>
                </div>

                {/* RIGHT: Live Status & Stats */}
                <div className="space-y-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-green-50/50 dark:bg-green-900/10 border-green-100 dark:border-green-900/50">
                            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                                <span className="text-3xl font-bold text-green-600">{stats.success}</span>
                                <span className="text-xs font-medium text-green-700/70 mt-1 uppercase tracking-wide">Success</span>
                            </CardContent>
                        </Card>
                        <Card className="bg-red-50/50 dark:bg-red-900/10 border-red-100 dark:border-red-900/50">
                            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                                <span className="text-3xl font-bold text-red-600">{stats.failed}</span>
                                <span className="text-xs font-medium text-red-700/70 mt-1 uppercase tracking-wide">Failed</span>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Console Log Window */}
                    <Card className="flex flex-col h-[300px] bg-zinc-950 border-zinc-800 shadow-inner">
                        <CardHeader className="py-3 px-4 border-b border-zinc-800 bg-zinc-900/50">
                            <CardTitle className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                                <Terminal className="h-3 w-3" /> Live Activity Log
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 p-0 overflow-hidden relative">
                            <ScrollArea className="h-full w-full">
                                <div className="p-4 space-y-1.5 font-mono text-[10px] sm:text-xs">
                                    {logs.length === 0 && (
                                        <span className="text-zinc-600 italic">Waiting to start...</span>
                                    )}
                                    {logs.map((log, i) => (
                                        <div key={i} className="flex gap-2">
                                            <span className="text-zinc-600 shrink-0"><ChevronRight className="h-3 w-3 inline" /></span>
                                            <span className={cn(
                                                "break-all",
                                                log.includes("Error") || log.includes("Failed") ? "text-red-400" :
                                                    log.includes("Success") || log.includes("Completed") ? "text-green-400" :
                                                        "text-zinc-300"
                                            )}>
                                                {log}
                                            </span>
                                        </div>
                                    ))}
                                    <div ref={logEndRef} />
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}