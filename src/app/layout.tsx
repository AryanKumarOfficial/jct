import React, {JSX} from "react";
import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Header from "@/components/layout/header/index";
import Footer from "@/components/layout/footer/index";
import {AnnouncementBar} from "@/components/layout/announcement-bar";
import {cn} from "@/lib/utils";
import Script from "next/script";

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});

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

const DEFAULT_OG = "/images/logo.jpg";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        template: `%s | ${APP_NAME}`,
        default: APP_NAME,
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
        "Artificial Intelligence",
        "Machine Learning",
        "Cloud Computing",
        "Software Engineering",
        "Data Science",
        "Network Security",
        "IoT Research",
    ],
    authors: [{name: "JCT Journals Editorial Board"}],
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
    verification: {
        // google: "google-site-verification=YOUR_VERIFICATION_CODE", // Get this from Google Search Console
        // yandex: "yandex-verification-code",
    },
};

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
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
            telephone: "+91 92435 55355",
            contactType: "customer service",
            areaServed: ["Global"],
            availableLanguage: "English",
        },
    };

    return (
        <html lang="en" className="scroll-smooth font-sans" suppressHydrationWarning style={{scrollBehavior: 'smooth'}}>
        <body
            className={cn(
                inter.className,
                "antialiased min-h-screen flex flex-col gap-10 bg-background text-foreground"
            )}
        >
        {/* Structured data for SEO */}
        <script
            key="ld-json"
            type="application/ld+json"
            // JSON-LD is intentionally small — stringify once for safety
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        <Script
            src={"https://checkout.razorpay.com/v1/checkout.js"}
            strategy={"lazyOnload"}
        />
        <Providers>
            <div
                id="top-shell"
                className="fixed top-0 left-0 right-0 z-50 bg-transparent"
                style={{
                    paddingTop: "var(--safe-top)",
                }}
            >
                <AnnouncementBar/>
                <Header/>
            </div>

            <main className="flex-1 w-full mx-auto h-full my-10">
                {children}
            </main>
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}
