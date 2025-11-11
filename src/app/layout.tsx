import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        default: "JCT Journals - Home",
        template: "%s | JCT Journals",
    },
    description: "Peer-reviewed research in technology and education.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${inter.className} antialiased`}
        >
        <Providers>
            <main className={"min-h-screen"}>
                {children}
            </main>
        </Providers>
        </body>
        </html>
    );
}
