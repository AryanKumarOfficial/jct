import React from "react";
import Link from "next/link";
import {Metadata} from "next";
import {prisma} from "@/lib/prisma"; // Direct DB access
// UI Components
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ArrowRight, Award, BookOpen, Calendar, Download, FileText, Filter, Quote, Search, Users, X} from "lucide-react";

// --- Constants ---
const JOURNAL_NAME = "Journal of Computing Technologies";
const JOURNAL_ACRONYM = "JCT";
const ISSN = "2278-3814";
const IMPACT_FACTOR = "7.26";

// --- ISR Configuration ---
// Revalidate this page every 1 hour (3600 seconds)
export const revalidate = 3600;

// --- Types ---
type SearchParams = {
    q?: string;
    vol?: string;
    topic?: string;
};

// --- Data Fetching (Direct DB) ---
async function getJournalData(params: SearchParams) {
    const {q, vol, topic} = params;

    // 1. Build Dynamic Filters
    const paperWhere: any = {
        paperStatuses: {
            some: {
                status: "PUBLISHED",
                isApproved: true
            }
        }
    };

    if (q) {
        paperWhere.OR = [
            {name: {contains: q, mode: 'insensitive'}},
            // Note: Basic keyword match. For advanced array filtering, raw query is often better,
            // but 'has' works for exact tag matches if q matches a tag exactly.
            // For partial keyword matches, we rely on title search or exact 'topic' filter.
            {keywords: {has: q}}
        ];
    }

    if (topic) {
        paperWhere.keywords = {has: topic};
    }

    const archiveWhere: any = {};
    if (vol) {
        const volumeNum = parseInt(vol);
        if (!isNaN(volumeNum)) {
            archiveWhere.volume = volumeNum;
        }
    }

    try {
        // 2. Fetch Filtered Archives & Papers
        const archives = await prisma.archive.findMany({
            where: {
                ...archiveWhere,
                papers: {
                    some: paperWhere // Only fetch archives that contain matching papers
                }
            },
            orderBy: [
                {year: "desc"},
                {volume: "desc"},
                {issue: "desc"},
            ],
            include: {
                papers: {
                    where: paperWhere, // Filter papers within the archive
                    include: {
                        authors: true
                    }
                }
            }
        });

        // 3. Fetch All Volumes (For Sidebar Navigation - independent of filters)
        // We group by volume/year to show unique entries
        const allVolumesRaw = await prisma.archive.findMany({
            select: {volume: true, year: true},
            orderBy: [{year: 'desc'}, {volume: 'desc'}],
        });

        // Deduplicate volumes (e.g. Vol 12 Issue 1, Vol 12 Issue 2 -> Vol 12)
        const uniqueVolumeMap = new Map();
        allVolumesRaw.forEach(a => {
            const key = `Volume ${a.volume} (${a.year})`;
            if (!uniqueVolumeMap.has(key)) {
                uniqueVolumeMap.set(key, {label: key, volume: a.volume});
            }
        });
        const allVolumes = Array.from(uniqueVolumeMap.values());

        return {archives, allVolumes};
    } catch (error) {
        console.error("Failed to fetch journal data:", error);
        return {archives: [], allVolumes: []};
    }
}

// --- SEO: Dynamic Metadata ---
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `${JOURNAL_NAME} (${JOURNAL_ACRONYM}) | Archives & Research`,
        description: `Access peer-reviewed research in Computer Science and IT. Open Access. ISSN: ${ISSN}.`,
        openGraph: {
            title: JOURNAL_NAME,
            description: "International open-access journal publishing high-quality research in computing technologies.",
            type: "website",
            siteName: "JCT Journals",
        },
        keywords: ["Computer Science Journal", "JCT", "Research Paper", "Open Access", "ISSN " + ISSN],
    };
}

// --- Main Page Component ---
export default async function JournalPage({
                                              searchParams
                                          }: {
    searchParams: Promise<SearchParams>
}) {
    const params = await searchParams;
    const {archives, allVolumes} = await getJournalData(params);

    const isFiltered = !!(params.q || params.vol || params.topic);

    // SEO: JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Periodical",
        "name": JOURNAL_NAME,
        "issn": ISSN,
        "publisher": {
            "@type": "Organization",
            "name": "JCT Journals"
        },
        "hasPart": archives.map(archive => ({
            "@type": "PublicationIssue",
            "issueNumber": `${archive.issue}`,
            "volumeNumber": `${archive.volume}`,
            "datePublished": `${archive.year}`,
            "articles": archive.papers.map(paper => ({
                "@type": "ScholarlyArticle",
                "headline": paper.name,
                "author": paper.authors.map(a => ({
                    "@type": "Person",
                    "name": `${a.firstName} ${a.lastName || ''}`.trim()
                })),
                "url": paper.publishUrl
            }))
        }))
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Inject JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />

            {/* --- Hero Section --- */}
            <section className="relative bg-muted/30 border-b border-border/50 pt-14 pb-16 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-3">
                                    <Badge variant="outline"
                                           className="bg-background/50 backdrop-blur text-muted-foreground border-primary/20">
                                        ISSN: {ISSN}
                                    </Badge>
                                    <Badge variant="secondary"
                                           className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                                        <Award className="w-3 h-3 mr-1"/>
                                        SJIF Impact Factor: {IMPACT_FACTOR}
                                    </Badge>
                                    <Badge variant="outline"
                                           className="text-green-600 border-green-600/20 bg-green-500/5">
                                        Open Access
                                    </Badge>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                                    Journal of <span className="text-primary">Computing</span> Technologies
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                    A premier peer-reviewed journal dedicated to the advancement of computer science,
                                    information technology, and software engineering research.
                                </p>
                            </div>

                            {/* Search Bar */}
                            <form className="flex gap-2 max-w-xl pt-4" action="/journals/jct" method="GET">
                                <div className="relative flex-1">
                                    <Search
                                        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                                    <Input
                                        name="q"
                                        defaultValue={params.q}
                                        placeholder="Search articles by title or keyword..."
                                        className="pl-10 h-12 bg-background shadow-sm border-border/60 focus-visible:ring-primary/30"
                                    />
                                </div>
                                <Button type="submit" size="lg"
                                        className="h-12 px-6 bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:bg-primary-hover">
                                    Search
                                </Button>
                            </form>
                        </div>

                        {/* Desktop Quick Actions */}
                        <div className="hidden lg:block">
                            <Card className="bg-card/50 backdrop-blur border-primary/20 shadow-xl shadow-primary/5">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-primary"/>
                                        For Authors
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Link href="/submit" className="block">
                                        <Button className="w-full justify-between group" variant="default">
                                            Submit Manuscript
                                            <ArrowRight
                                                className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                        </Button>
                                    </Link>
                                    <Link href="/author-guidelines" className="block">
                                        <Button variant="outline" className="w-full justify-between hover:bg-accent/50">
                                            Author Guidelines
                                            <BookOpen className="h-4 w-4 text-muted-foreground"/>
                                        </Button>
                                    </Link>
                                    <div className="pt-2 text-xs text-muted-foreground text-center">
                                        Average Review Time: <span
                                        className="font-medium text-foreground">4-6 Weeks</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Main Content Layout --- */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-12 gap-8">

                    {/* Left Sidebar: Filters */}
                    <aside className="lg:col-span-3 space-y-8">
                        <div className="sticky top-24 space-y-8">
                            <div className="flex items-center justify-between lg:hidden mb-4">
                                <h3 className="font-semibold">Filters</h3>
                                <Button variant="ghost" size="sm"><Filter className="h-4 w-4"/></Button>
                            </div>

                            {/* Active Filters Display */}
                            {isFiltered && (
                                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-sm font-bold uppercase text-primary">Active Filters</h3>
                                        <Link href="/journals/jct"
                                              className="text-xs text-muted-foreground hover:text-foreground flex items-center">
                                            <X className="h-3 w-3 mr-1"/> Clear
                                        </Link>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {params.vol &&
                                            <Badge variant="secondary" className="text-xs">Vol {params.vol}</Badge>}
                                        {params.topic && <Badge variant="secondary"
                                                                className="text-xs">Topic: {params.topic}</Badge>}
                                        {params.q &&
                                            <Badge variant="secondary" className="text-xs">Search: {params.q}</Badge>}
                                    </div>
                                </div>
                            )}

                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                    <Calendar className="h-4 w-4"/> Browse Issues
                                </h3>
                                <div className="space-y-1 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                                    {allVolumes.length > 0 ? allVolumes.map((vol, i) => {
                                        const isActive = params.vol === String(vol.volume);
                                        return (
                                            <Link key={i} href={`/journals/jct?vol=${vol.volume}`}>
                                                <Button
                                                    variant="ghost"
                                                    className={`w-full justify-start text-sm font-normal h-9 truncate ${isActive ? "bg-primary/10 text-primary font-medium" : "hover:text-primary hover:bg-primary/5"}`}
                                                >
                                                    {vol.label}
                                                </Button>
                                            </Link>
                                        );
                                    }) : (
                                        <span className="text-sm text-muted-foreground pl-2">No volumes yet</span>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-4 pt-6 border-t border-border/50">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Topics</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["AI & ML", "Cloud Computing", "Cyber Security", "IoT", "Data Science", "Blockchain", "Software Engineering"].map((tag) => {
                                        const isActive = params.topic === tag;
                                        return (
                                            <Link key={tag} href={`/journals/jct?topic=${encodeURIComponent(tag)}`}>
                                                <Badge
                                                    variant={isActive ? "default" : "secondary"}
                                                    className={`cursor-pointer transition-colors font-normal ${isActive ? "" : "hover:bg-primary/20"}`}
                                                >
                                                    {tag}
                                                </Badge>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Center Column: Content Stream */}
                    <main className="lg:col-span-6 space-y-10">
                        {archives.length > 0 ? (
                            archives.map((archive) => (
                                <div key={archive.id} className="space-y-6">
                                    <div
                                        className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-border">
                                        <div>
                                            <h2 className="text-2xl font-bold text-foreground">
                                                Volume {archive.volume}, Issue {archive.issue}
                                            </h2>
                                            <p className="text-muted-foreground">
                                                {archive.month} {archive.year}
                                            </p>
                                        </div>
                                        <Badge variant="outline" className="w-fit">
                                            {archive.papers.length} Articles
                                        </Badge>
                                    </div>

                                    <div className="space-y-4">
                                        {archive.papers.length > 0 ? (
                                            archive.papers.map((paper) => (
                                                <Card key={paper.id}
                                                      className="group hover:border-primary/50 transition-colors duration-300">
                                                    <CardContent className="p-5">
                                                        <div className="flex flex-col gap-4">
                                                            <div className="space-y-2">
                                                                <Link href={`/paper/${paper.submissionId}`}>
                                                                    <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                                                                        {paper.name}
                                                                    </h3>
                                                                </Link>
                                                                <div
                                                                    className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                                                                    <span className="flex items-center gap-1">
                                                                        <Users className="h-3.5 w-3.5"/>
                                                                        {paper.authors.map(a => `${a.firstName} ${a.lastName || ''}`).join(', ')}
                                                                    </span>
                                                                    <span className="hidden sm:inline">•</span>
                                                                    <span className="flex items-center gap-1">
                                                                        <FileText className="h-3.5 w-3.5"/>
                                                                        Original Research
                                                                    </span>
                                                                </div>
                                                                {/* Keywords Display */}
                                                                {paper.keywords.length > 0 && (
                                                                    <div className="flex flex-wrap gap-1.5 mt-1">
                                                                        {paper.keywords.slice(0, 4).map(kw => (
                                                                            <span key={kw}
                                                                                  className="text-[10px] px-1.5 py-0.5 bg-muted rounded text-muted-foreground">
                                                                                {kw}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div className="flex items-center justify-between pt-2">
                                                                <div className="flex gap-2">
                                                                    <Button size="sm" variant="outline"
                                                                            className="h-8 text-xs">
                                                                        Abstract
                                                                    </Button>
                                                                    <Button size="sm" variant="outline"
                                                                            className="h-8 text-xs">
                                                                        <Quote className="h-3 w-3 mr-1"/> Cite
                                                                    </Button>
                                                                </div>

                                                                {paper.publishUrl ? (
                                                                    <Button asChild size="sm"
                                                                            className="h-8 text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground shadow-none hover:shadow-md transition-all">
                                                                        <Link href={paper.publishUrl} target="_blank">
                                                                            <Download
                                                                                className="mr-1.5 h-3.5 w-3.5"/> PDF
                                                                        </Link>
                                                                    </Button>
                                                                ) : (
                                                                    <Badge variant="secondary" className="opacity-50">In
                                                                        Press</Badge>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))
                                        ) : (
                                            <div
                                                className="bg-muted/10 rounded-lg p-6 text-center border border-dashed border-border">
                                                <p className="text-muted-foreground italic">No papers found matching
                                                    your criteria in this issue.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <Card className="border-dashed border-2 border-border bg-muted/5 py-16 text-center">
                                <CardContent className="flex flex-col items-center justify-center space-y-6">
                                    <div
                                        className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                                        <Search className="h-10 w-10 text-primary/60"/>
                                    </div>
                                    <div className="space-y-2 max-w-md mx-auto">
                                        <h3 className="text-xl font-semibold text-foreground">No Results Found</h3>
                                        <p className="text-muted-foreground text-base">
                                            We couldn't find any papers matching your search filters. Try adjusting your
                                            keywords or browsing all issues.
                                        </p>
                                    </div>
                                    <Link href="/journals/jct">
                                        <Button size="lg" variant="outline">
                                            Clear All Filters
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        )}
                    </main>

                    {/* Right Sidebar: Info */}
                    <aside className="lg:col-span-3 space-y-6">
                        <Card className="bg-card/50 backdrop-blur">
                            <CardHeader>
                                <CardTitle className="text-base">About {JOURNAL_ACRONYM}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground leading-relaxed">
                                {JOURNAL_ACRONYM} is an international open-access journal publishing high-quality
                                research in all areas of computing and technology. We are indexed in Google Scholar,
                                Copernicus, and more.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Editorial Board</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                        <Users className="h-5 w-5 text-muted-foreground"/>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold">Dr. Evelyn Reed</div>
                                        <div className="text-xs text-muted-foreground">Editor-in-Chief</div>
                                    </div>
                                </div>
                                <Link href="/editorial-board">
                                    <Button variant="link" className="h-auto p-0 text-primary">View Full
                                        Board &rarr;</Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <div className="lg:hidden pt-4">
                            <Link href="/submit" className="block">
                                <Button className="w-full shadow-lg">Submit Manuscript</Button>
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}