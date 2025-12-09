import React from "react";
import Link from "next/link";
import {Mail, MapPin, Twitter, Linkedin, Globe} from "lucide-react";
import {Logo} from "@/components/layout/header/logo";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-muted/50 border-t border-border pt-16 pb-8 mt-auto supports-[backdrop-filter]:backdrop-blur-xl">
            <div className="container max-w-screen-2xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand & Mission */}
                    <div className="space-y-4">
                        <Logo/>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            International open-access journals dedicated to the advancement of computer science,
                            engineering, and educational research.
                        </p>
                        <div className="flex gap-2 pt-2">
                            <SocialIcon icon={Twitter} href="#"/>
                            <SocialIcon icon={Linkedin} href="#"/>
                            <SocialIcon icon={Globe} href="#"/>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/journals/jct">The Journal</FooterLink>
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/editorial-board">Editorial Board</FooterLink>
                            <FooterLink href="/contact">Contact Support</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: For Authors */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">For Authors</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <FooterLink href="/submit">Submit Manuscript</FooterLink>
                            <FooterLink href="/track">Track Your Paper</FooterLink>
                            <FooterLink href="/author-guidelines">Author Guidelines</FooterLink>
                            <FooterLink href="/author/login">Author Login</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Contact</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0"/>
                                <span>
                                  Sector C, Indrapuri,<br/>
                                  Bhopal, Madhya Pradesh, 462022
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-primary shrink-0"/>
                                <a href="mailto:editor@jctjournals.com"
                                   className="hover:text-primary transition-colors">
                                    editor@jctjournals.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {currentYear} JCT Journals. All rights reserved.</p>
                    <div className="flex gap-6">
                        {/* Placeholder links for static pages */}
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy
                            Policy</Link>
                        <Link href="/refund-policy" className="hover:text-primary transition-colors">Refund
                            Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms of
                            Service</Link>
                        <Link href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({href, children}: { href: string; children: React.ReactNode }) => (
    <li>
        <Link href={href} className="hover:text-primary hover:pl-1 transition-all duration-200 block">
            {children}
        </Link>
    </li>
);

const SocialIcon = ({icon: Icon, href}: { icon: any; href: string }) => (
    <a
        href={href}
        className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
    >
        <Icon className="h-4 w-4"/>
    </a>
);

export default Footer;