import React from "react";
import Link from "next/link";
import { Metadata } from "next";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Search,
    FileText,
    Calendar,
    ChevronRight,
    BookOpen,
    Award,
    Users,
    ArrowRight,
    Filter,
    Download,
    Quote
} from "lucide-react";

// --- Types ---
interface Paper {
    id: string;
    name: string;
    publishUrl: string | null;
    authors: { firstName: string, lastName: string | null }[];
    abstract?: string; // Added optional abstract for SEO richness
}

interface Archive {
    id: string;
    volume: number;
    issue: number;
    month: string;
    year: number;
    papers: Paper[];
}

// --- Constants ---
const JOURNAL_NAME = "Journal of Computing Technologies";
const JOURNAL_ACRONYM = "JCT";
const ISSN = "2278-3814";
const IMPACT_FACTOR = "7.26";

// --- Data Fetching with ISR ---
async function getArchives(): Promise<Archive[]> {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const res = await fetch(`${apiUrl}/api/archive`, {
            // Next.js SEO Tip: Use ISR (revalidate) instead of no-store for better performance.
            // Journals update infrequently, so caching for 1 hour (3600s) is optimal.
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            console.warn(`API returned ${res.status}`);
            return [];
        }
        return await res.json();
    } catch (error) {
        console.error("Failed to fetch archives:", error);
        return [];
    }
}

// --- SEO: Dynamic Metadata ---
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `${JOURNAL_NAME} (${JOURNAL_ACRONYM}) | Archives & Research`,
        description: `Access peer-reviewed research in Computer Science and IT. Browse Volume 14 of ${JOURNAL_NAME}. Open Access. ISSN: ${ISSN}.`,
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
export default async function JournalPage() {
    const archives = await getArchives();

    // Helper: Get unique volumes for the filter list
    const uniqueVolumes = Array.from(new Set(archives.map(a => `Volume ${a.volume} (${a.year})`)));

    // SEO: JSON-LD Structured Data for Google Scholar / Search Engines
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* --- Hero Section --- */}
            <section className="relative bg-muted/30 border-b border-border/50 pt-24 pb-16 overflow-hidden">
                {/* Abstract Pattern Background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                     style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '32px 32px' }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span>Journals</span>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-foreground font-medium">{JOURNAL_ACRONYM}</span>
                    </nav>

                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        <div className="lg:col-span-2 space-y-6">
                            {/* Badges & Title */}
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-3">
                                    <Badge variant="outline" className="bg-background/50 backdrop-blur text-muted-foreground border-primary/20">
                                        ISSN: {ISSN}
                                    </Badge>
                                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                                        <Award className="w-3 h-3 mr-1" />
                                        SJIF Impact Factor: {IMPACT_FACTOR}
                                    </Badge>
                                    <Badge variant="outline" className="text-green-600 border-green-600/20 bg-green-500/5">
                                        Open Access
                                    </Badge>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                                    Journal of <span className="text-primary">Computing</span> Technologies
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                    A premier peer-reviewed journal dedicated to the advancement of computer science, information technology, and software engineering research.
                                </p>
                            </div>

                            {/* Search Bar */}
                            <div className="flex gap-2 max-w-xl pt-4">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search articles by title, author, or keyword..."
                                        className="pl-10 h-12 bg-background shadow-sm border-border/60 focus-visible:ring-primary/30"
                                    />
                                </div>
                                <Button size="lg" className="h-12 px-6 bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:bg-primary-hover">
                                    Search
                                </Button>
                            </div>
                        </div>

                        {/* Desktop Quick Actions */}
                        <div className="hidden lg:block">
                            <Card className="bg-card/50 backdrop-blur border-primary/20 shadow-xl shadow-primary/5">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-primary" />
                                        For Authors
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Link href="/submit" className="block">
                                        <Button className="w-full justify-between group" variant="default">
                                            Submit Manuscript
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                    <Link href="/author-guidelines" className="block">
                                        <Button variant="outline" className="w-full justify-between hover:bg-accent/50">
                                            Author Guidelines
                                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                                        </Button>
                                    </Link>
                                    <div className="pt-2 text-xs text-muted-foreground text-center">
                                        Average Review Time: <span className="font-medium text-foreground">4-6 Weeks</span>
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
                            {/* Mobile Filter Toggle (Hidden on desktop) */}
                            <div className="flex items-center justify-between lg:hidden mb-4">
                                <h3 className="font-semibold">Filters</h3>
                                <Button variant="ghost" size="sm"><Filter className="h-4 w-4" /></Button>
                            </div>

                            {/* Browse by Issue */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                    <Calendar className="h-4 w-4" /> Browse Issues
                                </h3>
                                <div className="space-y-1">
                                    {uniqueVolumes.length > 0 ? uniqueVolumes.map((vol, i) => (
                                        <Button
                                            key={i}
                                            variant="ghost"
                                            className="w-full justify-start text-sm font-normal h-9 hover:text-primary hover:bg-primary/5 truncate"
                                        >
                                            {vol}
                                        </Button>
                                    )) : (
                                        <span className="text-sm text-muted-foreground pl-2">No volumes yet</span>
                                    )}
                                </div>
                            </div>

                            {/* Topics/Tags */}
                            <div className="space-y-4 pt-6 border-t border-border/50">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Topics</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["AI & ML", "Cloud Computing", "Cyber Security", "IoT", "Data Science", "Blockchain"].map((tag) => (
                                        <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary/20 transition-colors font-normal">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Center Column: Content Stream */}
                    <main className="lg:col-span-6 space-y-10">
                        {archives.length > 0 ? (
                            archives.map((archive) => (
                                <div key={archive.id} className="space-y-6">
                                    {/* Issue Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-border">
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

                                    {/* Papers List */}
                                    <div className="space-y-4">
                                        {archive.papers.length > 0 ? (
                                            archive.papers.map((paper) => (
                                                <Card key={paper.id} className="group hover:border-primary/50 transition-colors duration-300">
                                                    <CardContent className="p-5">
                                                        <div className="flex flex-col gap-4">
                                                            <div className="space-y-2">
                                                                <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                                                                    {paper.name}
                                                                </h3>
                                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                                                                    <span className="flex items-center gap-1">
                                                                        <Users className="h-3.5 w-3.5" />
                                                                        {paper.authors.map(a => `${a.firstName} ${a.lastName || ''}`).join(', ')}
                                                                    </span>
                                                                    <span className="hidden sm:inline">•</span>
                                                                    <span className="flex items-center gap-1">
                                                                        <FileText className="h-3.5 w-3.5" />
                                                                        Original Research
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-center justify-between pt-2">
                                                                <div className="flex gap-2">
                                                                    <Button size="sm" variant="outline" className="h-8 text-xs">
                                                                        Abstract
                                                                    </Button>
                                                                    <Button size="sm" variant="outline" className="h-8 text-xs">
                                                                        <Quote className="h-3 w-3 mr-1" />
                                                                        Cite
                                                                    </Button>
                                                                </div>

                                                                {paper.publishUrl ? (
                                                                    <Button asChild size="sm" className="h-8 text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground shadow-none hover:shadow-md transition-all">
                                                                        <Link href={paper.publishUrl} target="_blank">
                                                                            <Download className="mr-1.5 h-3.5 w-3.5" />
                                                                            PDF
                                                                        </Link>
                                                                    </Button>
                                                                ) : (
                                                                    <Badge variant="secondary" className="opacity-50">In Press</Badge>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))
                                        ) : (
                                            <div className="bg-muted/10 rounded-lg p-6 text-center border border-dashed border-border">
                                                <p className="text-muted-foreground italic">No papers published in this issue yet.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            /* --- Enhanced Empty State --- */
                            <Card className="border-dashed border-2 border-border bg-muted/5 py-16 text-center">
                                <CardContent className="flex flex-col items-center justify-center space-y-6">
                                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                                        <BookOpen className="h-10 w-10 text-primary/60" />
                                    </div>
                                    <div className="space-y-2 max-w-md mx-auto">
                                        <h3 className="text-xl font-semibold text-foreground">No Archives Found</h3>
                                        <p className="text-muted-foreground text-base">
                                            The archives are currently being updated or no issues have been published yet.
                                            Be the first to publish your research in the upcoming volume.
                                        </p>
                                    </div>
                                    <Link href="/submit">
                                        <Button size="lg" className="mt-2 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold">
                                            Submit Your Paper Now
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        )}
                    </main>

                    {/* Right Sidebar: Info & Widgets */}
                    <aside className="lg:col-span-3 space-y-6">
                        <Card className="bg-card/50 backdrop-blur">
                            <CardHeader>
                                <CardTitle className="text-base">About {JOURNAL_ACRONYM}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground leading-relaxed">
                                {JOURNAL_ACRONYM} is an international open-access journal publishing high-quality research in all areas of computing and technology. We are indexed in Google Scholar, Copernicus, and more.
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Editorial Board</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                        <Users className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold">Dr. Editor Name</div>
                                        <div className="text-xs text-muted-foreground">Editor-in-Chief</div>
                                    </div>
                                </div>
                                <Link href="/editorial-board">
                                    <Button variant="link" className="h-auto p-0 text-primary">View Full Board &rarr;</Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Mobile Sticky Submission (Optional visibility) */}
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