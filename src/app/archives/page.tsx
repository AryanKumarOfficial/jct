"use client";

import * as React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Archive, Download, FileText, CalendarDays, Library, Search, X, Loader2, AlertCircle} from "lucide-react";
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

// --- Define Data Structures ---
interface Paper {
    id: string;
    name: string;
    publishUrl: string | null;
    keywords: string[];
}

interface Archive {
    id: string;
    volume: number;
    issue: number;
    month: string;
    year: number;
    papers: Paper[];
}

// --- Helper to group archives by year ---
function groupArchivesByYear(archives: Archive[]): Record<string, Archive[]> {
    return archives.reduce((acc, archive) => {
        const year = archive.year.toString();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(archive);
        return acc;
    }, {} as Record<string, Archive[]>);
}

const allMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// --- Main Page Component ---
export default function ArchivesPage() {
    // State for filters
    const [selectedYear, setSelectedYear] = React.useState("");
    const [selectedMonth, setSelectedMonth] = React.useState("");
    const [keyword, setKeyword] = React.useState("");

    // State for data
    const [allArchives, setAllArchives] = React.useState<Archive[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    // --- Data Fetching ---
    React.useEffect(() => {
        async function fetchArchives() {
            setIsLoading(true);
            try {
                const res = await fetch("/api/archive");
                if (!res.ok) {
                    throw new Error("Failed to fetch archives.");
                }
                const data = await res.json();
                setAllArchives(Array.isArray(data) ? data : []);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchArchives();
    }, []);

    // --- Filtering Logic ---
    const filteredArchives = React.useMemo(() => {
        let archives = allArchives;

        // 1. Filter by Year
        if (selectedYear) {
            archives = archives.filter(archive => archive.year.toString() === selectedYear);
        }

        // 2. Filter by Month
        if (selectedMonth) {
            archives = archives.filter(archive => archive.month.toLowerCase() === selectedMonth.toLowerCase());
        }

        // 3. Filter papers within archives by Keyword
        if (keyword) {
            const lowerCaseKeyword = keyword.toLowerCase();
            archives = archives.map(archive => {
                const filteredPapers = archive.papers.filter(paper =>
                    paper.name.toLowerCase().includes(lowerCaseKeyword) ||
                    paper.keywords.some(kw => kw.toLowerCase().includes(lowerCaseKeyword))
                );
                return {...archive, papers: filteredPapers};
            });
        }

        return archives;
    }, [allArchives, selectedYear, selectedMonth, keyword]);

    // --- Derived data for UI ---
    const groupedArchives = React.useMemo(() => groupArchivesByYear(filteredArchives), [filteredArchives]);
    const sortedYears = Object.keys(groupedArchives).sort((a, b) => Number(b) - Number(a));
    const uniqueYears = [...new Set(allArchives.map(a => a.year.toString()))].sort((a, b) => Number(b) - Number(a));

    const clearFilters = () => {
        setSelectedYear("");
        setSelectedMonth("");
        setKeyword("");
    };

    return (
        <div className="min-h-screen bg-muted/30">
            <div className="container mx-auto max-w-5xl px-4 py-16">

                {/* --- Header --- */}
                <div className="flex flex-col items-center text-center mb-12">
                    <div
                        className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <Archive className="h-8 w-8"/>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Journal Archives
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                        Browse all published articles from the Journal of Computing Technologies.
                    </p>
                </div>

                {/* --- Filter Bar --- */}
                <Card className="mb-10 shadow-sm">
                    <CardContent className="p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
                            <div className="space-y-2">
                                <Label htmlFor="year-filter">Year</Label>
                                <Select value={selectedYear} onValueChange={(value)=>setSelectedYear(value === "all" ? "" : value)}>
                                    <SelectTrigger id="year-filter">
                                        <SelectValue placeholder="All Years"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Years</SelectItem>
                                        {uniqueYears.map(year => (
                                            <SelectItem key={year} value={year}>{year}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="month-filter">Month</Label>
                                <Select value={selectedMonth} onValueChange={(value) =>setSelectedMonth(value === "all" ? "" : value)}>
                                    <SelectTrigger id="month-filter">
                                        <SelectValue placeholder="All Months"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Months</SelectItem>
                                        {allMonths.map(month => (
                                            <SelectItem key={month} value={month}>{month}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2 sm:col-span-2 md:col-span-1">
                                <Label htmlFor="keyword-filter">Keyword</Label>
                                <Input
                                    id="keyword-filter"
                                    placeholder="Search by title or keyword..."
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                            </div>

                            <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground">
                                <X className="h-4 w-4 mr-2"/>
                                Clear Filters
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* --- Loading & Error States --- */}
                {isLoading && (
                    <div className="flex justify-center py-20">
                        <Loader2 className="h-12 w-12 animate-spin text-primary"/>
                    </div>
                )}

                {error && (
                    <Alert variant="destructive" className="max-w-2xl mx-auto">
                        <AlertCircle className="h-4 w-4"/>
                        <AlertTitle>Error Loading Archives</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {/* --- Archives List --- */}
                {!isLoading && !error && (
                    <>
                        {filteredArchives.length > 0 ? (
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full space-y-4"
                                defaultValue={sortedYears[0]} // Default to open the latest year
                            >
                                {sortedYears.map((year) => (
                                    <AccordionItem key={year} value={year}
                                                   className="rounded-xl border-b-0 bg-background shadow-sm">
                                        <AccordionTrigger
                                            className="px-6 py-4 text-2xl font-semibold text-primary hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                <CalendarDays className="h-6 w-6"/>
                                                Year {year}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                                {groupedArchives[year].map((archive) => (
                                                    <Card key={archive.id} className="flex flex-col shadow-md">
                                                        <CardHeader>
                                                            <CardTitle className="text-xl">
                                                                Volume {archive.volume}, Issue {archive.issue}
                                                            </CardTitle>
                                                            <CardDescription>
                                                                {archive.month} {archive.year}
                                                            </CardDescription>
                                                        </CardHeader>
                                                        <CardContent className="flex-grow space-y-4">
                                                            {archive.papers.length > 0 ? (
                                                                archive.papers.map((paper) => (
                                                                    <div
                                                                        key={paper.id}
                                                                        className="flex items-start justify-between gap-4"
                                                                    >
                                                                        <div className="flex-shrink-0 pt-1">
                                                                            <FileText
                                                                                className="h-5 w-5 text-muted-foreground"/>
                                                                        </div>
                                                                        <div className="flex-grow">
                                                                            <h4 className="font-semibold text-foreground leading-snug">
                                                                                {paper.name}
                                                                            </h4>
                                                                            {paper.keywords?.length > 0 && (
                                                                                <p className="text-xs text-muted-foreground mt-1">
                                                                                    {paper.keywords.join(', ')}
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                        {paper.publishUrl ? (
                                                                            <Button asChild variant="ghost" size="icon"
                                                                                    className="flex-shrink-0">
                                                                                <Link href={paper.publishUrl}
                                                                                      target="_blank"
                                                                                      title="Download PDF">
                                                                                    <Download
                                                                                        className="h-5 w-5 text-primary"/>
                                                                                </Link>
                                                                            </Button>
                                                                        ) : null}
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <p className="text-sm text-muted-foreground italic">
                                                                    No matching papers found for this issue.
                                                                </p>
                                                            )}
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        ) : (
                            <div className="text-center py-20 bg-background rounded-lg shadow-sm">
                                <Search className="h-16 w-16 mx-auto text-muted-foreground"/>
                                <h3 className="mt-6 text-2xl font-semibold">No Archives Found</h3>
                                <p className="mt-2 text-muted-foreground">
                                    No archives match your current filter criteria.
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}