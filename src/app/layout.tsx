import React, {JSX} from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Header from "@/components/layout/header/index";
import Footer from "@/components/layout/footer/index";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// --- App constants ---
const APP_NAME = "JCT Journals";
const APP_DESCRIPTION =
    "International peer-reviewed open access journals for Computer Science, Engineering, and Technology research.";

const DEFAULT_SITE = "https://jctjournals.com";
const SITE_URL = (() => {
    try {
        return new URL(process.env.NEXT_PUBLIC_APP_URL ?? DEFAULT_SITE).toString();
    } catch (e) {
        return DEFAULT_SITE;
    }
})();

const DEFAULT_OG = "/og-image.png";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: APP_NAME,
        template: `%s | ${APP_NAME}`,
    },
    description: APP_DESCRIPTION,
    keywords: [
        "Computer Science Journal",
        "Research Paper",
        "Open Access",
        "Peer Reviewed",
        "JCT",
        "Engineering Research",
        "Scientific Publishing",
    ],
    authors: [{ name: "JCT Journals Editorial Board" }],
    creator: APP_NAME,
    publisher: APP_NAME,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: {
            default: APP_NAME,
            template: `%s | ${APP_NAME}`,
        },
        description: APP_DESCRIPTION,
        url: SITE_URL,
        siteName: APP_NAME,
        locale: "en_US",
        type: "website",
        images: [
            {
                url: DEFAULT_OG,
                width: 1200,
                height: 630,
                alt: APP_NAME,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: {
            default: APP_NAME,
            template: `%s | ${APP_NAME}`,
        },
        description: APP_DESCRIPTION,
        images: [DEFAULT_OG],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: SITE_URL,
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>): JSX.Element {
    // JSON-LD for Organization Schema (prevents duplication and is easy to update)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: APP_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.jpg`,
        sameAs: [
            "https://twitter.com/jctjournals",
            "https://linkedin.com/company/jctjournals",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-0000000000",
            contactType: "customer service",
            areaServed: ["Global"],
            availableLanguage: "English",
        },
    };

    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <head />
        <body
            className={cn(
                inter.className,
                "antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary"
            )}
        >
        {/* Structured data for SEO */}
        <script
            key="ld-json"
            type="application/ld+json"
            // JSON-LD is intentionally small — stringify once for safety
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Providers>
            {/* Header stays outside main so it doesn't affect layout flow */}
            <Header />

            {/* Main container: centered, responsive padding and max-width for readability */}
            <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            <Footer />

            {/* Global toasts (client component) — keep inside Providers so theme/context works */}
            <Toaster position="top-center" richColors />
        </Providers>
        </body>
        </html>
    );
}
