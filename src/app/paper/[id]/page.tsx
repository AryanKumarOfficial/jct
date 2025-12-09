// src/app/paper/[id]/page.tsx
import {prisma} from "@/lib/prisma";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Download, User, Quote, BookOpen, FileText, Calendar} from "lucide-react"; // Added Icons
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Prisma} from "@/generated/prisma";

type PaperWithAuthors = Prisma.paperGetPayload<{
    include: {
        authors: true,
        archive: true
    }
}>

const getPaperDescription = (paper: PaperWithAuthors) => {
    // 1. Use the real abstract if available
    if (paper.abstract && paper.abstract.length > 10) {
        return paper.abstract;
    }
    // 2. Fallback generator
    const authorText = paper.authors.map((author: any) => author.firstName + " " + author.lastName).join(", ");
    return `Research Paper titled "${paper.name}" by ${authorText}. Published in JCT Journal Vol ${paper.archive?.volume}, Issue ${paper.archive?.issue}.`
};

export async function generateMetadata({params}: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const id = (await params).id;

    const paper = await prisma.paper.findUnique({
        where: {submissionId: id},
        include: {authors: true, archive: true}
    });

    if (!paper) return {title: "Paper Not Found"};

    const authors = paper.authors.map(a => `${a.firstName} ${a.lastName || ""}`.trim());
    const publishedDate = new Date(paper.createdAt).toISOString().split('T')[0];
    const pdfUrl = paper.publishUrl || "";
    const description = getPaperDescription(paper);

    return {
        title: paper.name,
        description,
        keywords: paper.keywords,
        authors: authors.map(name => ({name})),
        openGraph: {
            title: paper.name,
            description: description,
            type: "article",
            publishedTime: paper.createdAt.toISOString(),
            authors: authors,
            url: `${process.env.NEXT_PUBLIC_APP_URL}/paper/${paper.submissionId}`,
            images: ["/images/logo.jpg"],
        },
        other: {
            "citation_title": paper.name,
            "citation_author": authors,
            "citation_publication_date": publishedDate,
            "citation_journal_title": "Journal of Computing Technologies",
            "citation_volume": paper.archive?.volume.toString() ?? "",
            "citation_issue": paper.archive?.issue.toString() ?? "",
            "citation_pdf_url": pdfUrl,
            "citation_keywords": paper.keywords.join("; "),
            "citation_abstract": description, // <--- CRITICAL FOR GOOGLE SCHOLAR
            "citation_abstract_html_url": `${process.env.NEXT_PUBLIC_APP_URL}/paper/${paper.submissionId}`,
        }
    };
}

export default async function PaperPage({params}: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const paper = await prisma.paper.findUnique({
        where: {submissionId: id},
        include: {authors: true, archive: true}
    });

    if (!paper) notFound();

    const summary = getPaperDescription(paper);
    const hasRealAbstract = paper.abstract && paper.abstract.length > 10;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ScholarlyArticle",
        "headline": paper.name,
        "image": [`${process.env.NEXT_PUBLIC_APP_URL}/images/logo.jpg`],
        "datePublished": paper.createdAt.toISOString(),
        "abstract": summary,
        "author": paper.authors.map(a => ({
            "@type": "Person",
            "name": `${a.firstName} ${a.lastName || ""}`.trim(),
            "affiliation": {
                "@type": "Organization",
                "name": a.organisation
            }
        })),
        "publisher": {
            "@type": "Organization",
            "name": "JCT Journal",
            "logo": {
                "@type": "ImageObject",
                "url": `${process.env.NEXT_PUBLIC_APP_URL}/images/logo.jpg`
            }
        }
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />

            <div className="container max-w-5xl mx-auto px-4 py-12">
                <Breadcrumb className="mb-6">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/journals/jct">Journals</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="truncate max-w-[200px] md:max-w-[400px]">
                                {paper.submissionId}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* LEFT COLUMN: Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Title Block */}
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="border-green-600/30 text-green-700 bg-green-50">Open
                                    Access</Badge>
                                {paper.archive && (
                                    <Badge variant="secondary"
                                           className="bg-primary/10 text-primary hover:bg-primary/20">
                                        Vol {paper.archive.volume}, Issue {paper.archive.issue} ({paper.archive.year})
                                    </Badge>
                                )}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-foreground tracking-tight">
                                {paper.name}
                            </h1>
                        </div>

                        {/* Authors Block */}
                        <div className="flex flex-wrap gap-6 pt-2 pb-6 border-b border-border/60">
                            {paper.authors.map((author) => (
                                <div key={author.id} className="flex items-center gap-3 group">
                                    <div
                                        className="h-10 w-10 rounded-full bg-muted group-hover:bg-primary/10 transition-colors flex items-center justify-center border border-border">
                                        <User className="h-5 w-5 text-muted-foreground group-hover:text-primary"/>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm text-foreground">{author.firstName} {author.lastName}</p>
                                        <p className="text-xs text-muted-foreground max-w-[200px] truncate"
                                           title={author.organisation}>
                                            {author.organisation}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Abstract Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                                <BookOpen className="h-5 w-5 text-primary"/>
                                <h3>{hasRealAbstract ? "Abstract" : "About this Paper"}</h3>
                            </div>
                            <div className="bg-card/50 p-6 rounded-xl border border-border/60 shadow-sm text-justify">
                                <p className="text-muted-foreground leading-relaxed text-base">
                                    {summary}
                                </p>
                            </div>
                        </div>

                        {/* Keywords */}
                        {paper.keywords.length > 0 && (
                            <div className="space-y-3 pt-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                                    Keywords
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {paper.keywords.map(kw => (
                                        <Badge key={kw} variant="secondary"
                                               className="px-3 py-1.5 text-sm font-normal bg-secondary/50 hover:bg-secondary cursor-default">
                                            {kw}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN: Sidebar Actions */}
                    <div className="space-y-6">
                        {/* Download Card */}
                        <Card
                            className="border-primary/20 shadow-xl shadow-primary/5 bg-gradient-to-b from-card to-muted/20 sticky top-24">
                            <CardContent className="p-6 space-y-6">
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                                        <FileText className="h-4 w-4"/> Full Text
                                    </h3>
                                    {/* IMPROVED DOWNLOAD BUTTON */}
                                    <Button
                                        size="lg"
                                        className="w-full shadow-md text-base h-12"
                                        disabled={!paper.publishUrl}
                                        asChild={!!paper.publishUrl}
                                    >
                                        {paper.publishUrl ? (
                                            <a href={paper.publishUrl} target="_blank" rel="noopener noreferrer">
                                                <Download className="mr-2 h-5 w-5"/> Download PDF
                                            </a>
                                        ) : (
                                            <span>
                                                <Download className="mr-2 h-5 w-5"/> PDF Unavailable
                                            </span>
                                        )}
                                    </Button>
                                </div>

                                <div className="space-y-3 text-sm pt-2">
                                    <div className="flex justify-between py-2 border-b border-border/50">
                                        <span className="text-muted-foreground">Publication Date</span>
                                        <span className="font-medium">{new Date(paper.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-border/50">
                                        <span className="text-muted-foreground">Submission ID</span>
                                        <span className="font-mono text-xs bg-muted px-2 py-0.5 rounded">{paper.submissionId}</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="text-muted-foreground">License</span>
                                        <span className="font-medium">CC BY 4.0</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Citation Tool */}
                        <Card>
                            <CardContent className="p-5 bg-muted/30">
                                <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
                                    <Quote className="h-4 w-4 text-primary"/> Cite this paper
                                </h4>
                                <div
                                    className="bg-background p-3 rounded border border-border text-xs font-mono text-muted-foreground break-words leading-relaxed select-all cursor-text">
                                    {paper.authors[0]?.lastName} et al., "{paper.name}", <i>J. Comput. Technol.</i>,
                                    vol. {paper.archive?.volume}, no. {paper.archive?.issue}, {paper.archive?.year}.
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}