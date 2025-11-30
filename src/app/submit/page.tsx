"use client";

import React, {useCallback, useEffect, useRef, useState} from "react";
import {useForm, Controller, useFieldArray, Resolver} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {submitSchema} from "@/schemas/submitSchema";
import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {
    UploadCloud,
    FileText,
    UserPlus,
    Trash2,
    AlertCircle,
} from "lucide-react";
import {motion, AnimatePresence} from "motion/react";
import {toast} from "sonner";

type SubmitForm = z.infer<typeof submitSchema>;
type Author = SubmitForm["authors"][number];

interface Archive {
    id: string;
    volume: number;
    issue: number;
    month: string;
    year: number;
}

/** Max allowed authors */
const MAX_AUTHORS = 4;

const SubmitPage: React.FC = () => {
    // ---------- form setup ----------
    const emptyAuthor: Author = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organisation: "",
        country: "",
    };

    const {
        register,
        control,
        handleSubmit,
        setValue,
        getValues,
        watch,
        reset,
        formState: {errors, isSubmitting},
    } = useForm<SubmitForm>({
        resolver: zodResolver(submitSchema) as Resolver<SubmitForm>,
        defaultValues: {
            paperName: "",
            archiveId: "",
            keywords: [],
            authors: [emptyAuthor],
            file: undefined,
        },
    });

    const {fields, append, remove} = useFieldArray({
        control,
        name: "authors",
    });

    // ---------- archives ----------
    const [archives, setArchives] = useState<Archive[]>([]);
    const [archivesLoading, setArchivesLoading] = useState(false);
    const [archivesError, setArchivesError] = useState<string | null>(null);

    const fetchArchives = useCallback(async () => {
        setArchivesLoading(true);
        setArchivesError(null);
        try {
            const res = await fetch("/api/archive?mode=latest");
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Failed to fetch archives");
            setArchives(Array.isArray(data) ? data : []);
        } catch (err: any) {
            console.error("fetchArchives error:", err);
            setArchivesError(err?.message ?? "Failed to fetch archives");
            toast.error("Failed to load archives");
        } finally {
            setArchivesLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchArchives();
    }, [fetchArchives]);

    // ---------- file ref ----------
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // ---------- keywords tags ----------
    const [tagInput, setTagInput] = useState("");
    const tags = watch("keywords") ?? [];

    const addTag = useCallback(
        (raw: string) => {
            const value = raw.trim();
            if (!value) return;
            const next = Array.from(new Set([...(tags || []), value]));
            setValue("keywords", next, {shouldDirty: true});
            setTagInput("");
        },
        [setValue, tags]
    );

    const removeTag = useCallback(
        (idx: number) => {
            const next = (tags || []).filter((_, i) => i !== idx);
            setValue("keywords", next);
        },
        [setValue, tags]
    );

    const onTagKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            if (tagInput.trim()) addTag(tagInput);
        } else if (e.key === "Backspace" && tagInput === "") {
            if ((tags || []).length > 0) {
                removeTag((tags || []).length - 1);
            }
        }
    };

    // ---------- authors ----------
    const handleAddAuthor = useCallback(() => {
        if (fields.length >= MAX_AUTHORS) {
            toast.error(`You can add up to ${MAX_AUTHORS} authors only.`);
            return;
        }
        append(emptyAuthor);
    }, [append, fields.length]);

    // ---------- submit ----------
    const onSubmit = async (data: SubmitForm) => {
        const fileVal = getValues("file") as unknown as File | undefined;
        if (!(fileVal instanceof File)) {
            toast.error("Please attach a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", fileVal);
        formData.append("paperName", data.paperName);
        formData.append("archiveId", data.archiveId);
        formData.append("authors", JSON.stringify(data.authors));
        formData.append("keywords", JSON.stringify(data.keywords ?? []));

        try {
            const res = await fetch("/api/author", {
                method: "POST",
                body: formData,
            });
            const result = await res.json();
            if (!res.ok) {
                throw new Error(result?.error || "Submission failed");
            }
            const successMsg = `Paper submitted successfully! Submission ID: ${result.submissionId ?? "N/A"}`;
            toast.success(successMsg);
            reset();
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (err: any) {
            console.error("submit error:", err);
            toast.error(err?.message || "Submission failed");
        }
    };

    // show first form error as toast
    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const first = Object.values(errors)[0] as any;
            const msg = first?.message ?? "Please fix errors on the form";
            toast.error(String(msg));
        }
    }, [errors]);

    return (
        <div className="min-h-screen bg-muted/30">
            <div className="container mx-auto px-4 py-12 md:py-20">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card className="max-w-4xl mx-auto shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-foreground">
                                Submit Your Manuscript
                            </CardTitle>
                            <CardDescription>
                                Fill in the details below to submit your paper to JCT Journals.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-10">
                            {/* 1. Paper Details */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-primary border-b pb-2">
                                    1. Paper Details
                                </h3>

                                <div className="space-y-2">
                                    <Label htmlFor="paperName">Paper Title<span
                                        className={"text-red-600"}>*</span></Label>
                                    <Input id="paperName" {...register("paperName")}
                                           placeholder="A Novel Approach to..."/>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="archiveId">Journal / Archive Issue<span
                                            className={"text-red-600"}>*</span></Label>
                                        <Controller
                                            control={control}
                                            name="archiveId"
                                            render={({field}) => (
                                                <Select value={field.value} onValueChange={field.onChange}>
                                                    <SelectTrigger id="archiveId">
                                                        <SelectValue
                                                            placeholder={archivesLoading ? "Loading..." : "Select an issue..."}/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {archivesLoading ? (
                                                            <SelectItem value="loading" disabled>
                                                                Loading archives...
                                                            </SelectItem>
                                                        ) : archivesError ? (
                                                            <SelectItem value="error" disabled>
                                                                Error loading archives
                                                            </SelectItem>
                                                        ) : archives.length > 0 ? (
                                                            archives.map((a) => (
                                                                <SelectItem key={a.id} value={a.id}>
                                                                    Vol. {a.volume}, Iss. {a.issue} ({a.month} {a.year})
                                                                </SelectItem>
                                                            ))
                                                        ) : (
                                                            <SelectItem value="no" disabled>
                                                                No archives available
                                                            </SelectItem>
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="keywords">Keywords</Label>
                                        <div className="border rounded-md px-3 py-2 bg-background">
                                            <div className="flex flex-wrap gap-2 items-center">
                                                {(tags || []).map((t, i) => (
                                                    <span
                                                        key={`${t}-${i}`}
                                                        className="flex items-center gap-2 px-2 py-0.5 rounded-full text-sm bg-primary/10 text-primary"
                                                    >
                            <span>{t}</span>
                            <button
                                type="button"
                                onClick={() => removeTag(i)}
                                className="opacity-70 hover:opacity-100"
                                aria-label={`Remove ${t}`}
                            >
                              ×
                            </button>
                          </span>
                                                ))}

                                                <input
                                                    value={tagInput}
                                                    onChange={(e) => setTagInput(e.target.value)}
                                                    onKeyDown={onTagKeyDown}
                                                    onBlur={() => {
                                                        if (tagInput.trim()) addTag(tagInput);
                                                    }}
                                                    placeholder={(tags || []).length === 0 ? "Type keyword and press comma / Enter" : ""}
                                                    className="flex-1 min-w-[160px] bg-transparent outline-none text-sm py-1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Authors (useFieldArray) */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-primary border-b pb-2">2. Author(s)</h3>
                                <p className="text-sm text-muted-foreground">
                                    The first author listed will be considered the corresponding author.
                                </p>

                                <AnimatePresence>
                                    {fields.map((field, index) => (
                                        <motion.div
                                            key={field.id}
                                            initial={{opacity: 0, y: -12}}
                                            animate={{opacity: 1, y: 0}}
                                            exit={{opacity: 0, height: 0}}
                                            transition={{type: "spring", stiffness: 300, damping: 30}}
                                            className="p-4 border rounded-md space-y-4 relative bg-background"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor={`authors-${index}-firstName`}>First Name <span
                                                        className="text-destructive">*</span></Label>
                                                    <Input
                                                        id={`authors-${index}-firstName`} {...register(`authors.${index}.firstName` as const)} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor={`authors-${index}-lastName`}>Last Name</Label>
                                                    <Input
                                                        id={`authors-${index}-lastName`} {...register(`authors.${index}.lastName` as const)} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor={`authors-${index}-email`}>Email <span
                                                        className="text-destructive">*</span></Label>
                                                    <Input id={`authors-${index}-email`}
                                                           type="email"  {...register(`authors.${index}.email` as const)} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor={`authors-${index}-phone`}>Phone <span
                                                        className="text-destructive">*</span></Label>
                                                    <Input id={`authors-${index}-phone`}
                                                           type="tel"  {...register(`authors.${index}.phone` as const)} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor={`authors-${index}-organisation`}>Organisation /
                                                        Affiliation <span className="text-destructive">*</span></Label>
                                                    <Input
                                                        id={`authors-${index}-organisation`}  {...register(`authors.${index}.organisation` as const)} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor={`authors-${index}-country`}>Country <span
                                                        className="text-destructive">*</span></Label>
                                                    <Input
                                                        id={`authors-${index}-country`}  {...register(`authors.${index}.country` as const)} />
                                                </div>
                                            </div>

                                            {fields.length > 1 && (
                                                <Button
                                                    type="button"
                                                    variant="destructive"
                                                    size="icon"
                                                    className="absolute top-2 right-2 h-7 w-7"
                                                    onClick={() => remove(index)}
                                                    aria-label="Remove author"
                                                >
                                                    <Trash2 className="h-4 w-4"/>
                                                </Button>
                                            )}
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                <div>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handleAddAuthor}
                                        disabled={fields.length >= MAX_AUTHORS}
                                    >
                                        <UserPlus className="h-4 w-4 mr-2"/>
                                        Add Another Author
                                    </Button>
                                    <p className="text-xs mt-2 text-muted-foreground">Max {MAX_AUTHORS} authors
                                        allowed.</p>
                                </div>
                            </div>

                            {/* 3. Upload */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-primary border-b pb-2">3. Upload
                                    Manuscript<span
                                        className={"text-red-600 ml-1"}>*</span></h3>

                                <Label
                                    htmlFor="file-upload"
                                    className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted/100 transition-colors"
                                >
                                    <Controller
                                        control={control}
                                        name="file"
                                        render={({field}) => (
                                            <>
                                                {field.value ? (
                                                    <div className="text-center text-primary">
                                                        <FileText className="h-12 w-12 mx-auto"/>
                                                        <p className="mt-2 font-semibold">{(field.value as File).name}</p>
                                                        <p className="text-xs text-muted-foreground">
                                                            {(((field.value as File).size || 0) / 1024 / 1024).toFixed(2)} MB
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div className="text-center text-muted-foreground">
                                                        <UploadCloud className="h-12 w-12 mx-auto"/>
                                                        <p className="mt-2 font-semibold">Click to upload your file</p>
                                                        <p className="text-xs">(.doc, .docx, or .pdf)</p>
                                                    </div>
                                                )}

                                                {/* hidden actual input */}
                                                <input
                                                    id="file-upload"
                                                    type="file"
                                                    ref={(e) => {
                                                        fileInputRef.current = e;
                                                    }}
                                                    className="hidden"
                                                    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,application/pdf"
                                                    onChange={(e) => {
                                                        const f = e.target.files?.[0];
                                                        setValue("file", f as any, {shouldDirty: true});
                                                    }}
                                                />
                                            </>
                                        )}
                                    />
                                </Label>
                            </div>
                        </CardContent>

                        <CardFooter className="flex flex-col items-start space-y-4">
                            <AnimatePresence>
                                {Object.keys(errors).length > 0 && (
                                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="w-full">
                                        <Alert variant="destructive">
                                            <AlertCircle className="h-4 w-4"/>
                                            <AlertTitle>Form Error</AlertTitle>
                                            <AlertDescription>
                                                {Object.values(errors).map((e: any) => e?.message || "").filter(Boolean)[0] || "Please fix the errors."}
                                            </AlertDescription>
                                        </Alert>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit Manuscript"}
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </div>
    );
};

export default SubmitPage;
