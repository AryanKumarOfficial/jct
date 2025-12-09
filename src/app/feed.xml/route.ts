import {prisma} from "@/lib/prisma";

export async function GET() {
    const papers = await prisma.paper.findMany({
        where: {paperStatuses: {some: {status: "PUBLISHED"}}},
        take: 20,
        orderBy: {createdAt: "desc"},
        include: {archive: true, authors: true}
    });

    const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://jctjournals.com";

    // 1. Get the date of the most recent paper for the feed's "lastBuildDate"
    const lastBuildDate = papers.length > 0
        ? new Date(papers[0].createdAt).toUTCString()
        : new Date().toUTCString();

    const itemsXml = papers.map((paper) => `
    <item>
      <title><![CDATA[${paper.name}]]></title>
      <link>${siteUrl}/paper/${paper.submissionId}</link>
      <guid>${siteUrl}/paper/${paper.submissionId}</guid>
      <pubDate>${new Date(paper.createdAt).toUTCString()}</pubDate>
      <description><![CDATA[Published in Vol ${paper.archive?.volume}, Issue ${paper.archive?.issue}. Authors: ${paper.authors.map(a => a.lastName).join(', ')}]]></description>
    </item>`).join('');

    // 2. Add 'xmlns:atom', 'lastBuildDate', and the 'atom:link' tag
    const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>JCT Journal - Recent Publications</title>
        <link>${siteUrl}</link>
        <description>Latest peer-reviewed research from JCT Journal.</description>
        <language>en</language>
        <lastBuildDate>${lastBuildDate}</lastBuildDate>
        <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${itemsXml}
      </channel>
    </rss>`;

    return new Response(rssXml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        },
    });
}