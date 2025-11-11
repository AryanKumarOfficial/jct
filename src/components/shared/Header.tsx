"use client";
import {useState} from "react";
import Link from "next/link";
import {motion, AnimatePresence} from "motion/react";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Menu, ChevronDown, FileText, BookOpen, Users, Mail, Send, Sun, Moon} from "lucide-react";
import jctLogo from "@/../public/images/logo.png";
import Image from "next/image";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {theme, setTheme} = useTheme();

    const navLinks = [
        {href: "/about", label: "About JCT", icon: BookOpen},
        {href: "/author-guidelines", label: "Author Guidelines", icon: FileText},
        {href: "/editorial-board", label: "Editorial Board", icon: Users},
        {href: "/contact", label: "Contact Us", icon: Mail},
    ];

    const journalLinks = [
        {href: "/journals/jct", label: "Journal of Computing Technologies (JCT)"},
        {href: "/journals/jert", label: "Journal of Education & Research (JERT)"},
    ];

    return (
        <motion.header
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{type: "spring", stiffness: 100, damping: 20}}
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
        >
            <div className="container mx-auto px-4">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div
                            whileHover={{scale: 1.05, rotate: [0, -5, 5, 0]}}
                            transition={{duration: 0.3}}
                            className="relative"
                        >
                            <div
                                className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-colors p-2">
                                <Image
                                    src={jctLogo}
                                    alt="JCT Logo"
                                    className="object-contain"
                                    fill
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                        </motion.div>
                        <div className="hidden md:flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">
                JCT Journals
              </span>
                            <span className="text-xs text-muted-foreground">
                International Research Publications
              </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        <NavLink href="/about" label="About"/>
                        <NavLink href="/author-guidelines" label="Author Guidelines"/>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="text-sm font-medium text-foreground hover:text-primary hover:bg-primary-light/30 transition-all duration-200 gap-1"
                                >
                                    Journals
                                    <ChevronDown
                                        className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180"/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="center"
                                className="w-72 bg-popover/95 backdrop-blur-xl border-border/50"
                            >
                                {journalLinks.map((link) => (
                                    <DropdownMenuItem key={link.href} asChild>
                                        <Link
                                            href={link.href}
                                            className="cursor-pointer hover:bg-primary-light/20 focus:bg-primary-light/20 transition-colors"
                                        >
                                            <BookOpen className="mr-2 h-4 w-4 text-primary"/>
                                            {link.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <NavLink href="/editorial-board" label="Editorial Board"/>
                        <NavLink href="/contact" label="Contact"/>
                    </nav>

                    {/* CTA, Theme Toggle and Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <motion.div
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="hidden sm:block"
                        >
                            <Link href="/submit">
                                <Button
                                    size="lg"
                                    className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                                >
                                    <Send className="mr-2 h-4 w-4"/>
                                    Submit Manuscript
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Theme Toggle */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="hover:bg-primary-light/30"
                                >
                                    <Sun
                                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                                    <Moon
                                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="bg-popover/95 backdrop-blur-xl border-border/50"
                            >
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    <Sun className="mr-2 h-4 w-4"/>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    <Moon className="mr-2 h-4 w-4"/>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    <span className="mr-2 h-4 w-4">💻</span>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon" className="hover:bg-primary-light/30">
                                    <Menu className="h-6 w-6"/>
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right"
                                          className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl">
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.nav
                                            initial={{opacity: 0, x: 20}}
                                            animate={{opacity: 1, x: 0}}
                                            exit={{opacity: 0, x: 20}}
                                            transition={{duration: 0.2}}
                                            className="flex flex-col gap-4 mt-8"
                                        >
                                            <Link href="/" className="mb-4 flex items-center gap-3">
                                                <div
                                                    className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border-2 border-primary/20 p-2">
                                                    <Image
                                                        src={jctLogo}
                                                        alt="JCT Logo"
                                                        className="object-contain"
                                                        fill
                                                        sizes="100vw"
                                                        priority
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                      <span className="text-base font-bold text-foreground">
                        JCT Journals
                      </span>
                                                    <span className="text-xs text-muted-foreground">
                        Research Publications
                      </span>
                                                </div>
                                            </Link>

                                            {navLinks.map((link, index) => (
                                                <motion.div
                                                    key={link.href}
                                                    initial={{opacity: 0, x: -20}}
                                                    animate={{opacity: 1, x: 0}}
                                                    transition={{delay: index * 0.1}}
                                                >
                                                    <Link
                                                        href={link.href}
                                                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-primary-light/20 hover:text-primary transition-all duration-200"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <link.icon className="h-5 w-5"/>
                                                        {link.label}
                                                    </Link>
                                                </motion.div>
                                            ))}

                                            <div className="border-t border-border/50 pt-4 mt-2">
                                                <p className="text-xs font-semibold text-muted-foreground px-4 mb-2">
                                                    OUR JOURNALS
                                                </p>
                                                {journalLinks.map((link, index) => (
                                                    <motion.div
                                                        key={link.href}
                                                        initial={{opacity: 0, x: -20}}
                                                        animate={{opacity: 1, x: 0}}
                                                        transition={{delay: (navLinks.length + index) * 0.1}}
                                                    >
                                                        <Link
                                                            href={link.href}
                                                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-foreground hover:bg-primary-light/20 hover:text-primary transition-all duration-200"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            <BookOpen className="h-4 w-4"/>
                                                            {link.label}
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <Link href="/submit" className="mt-4">
                                                <Button
                                                    size="lg"
                                                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold shadow-lg"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <Send className="mr-2 h-4 w-4"/>
                                                    Submit Manuscript
                                                </Button>
                                            </Link>
                                        </motion.nav>
                                    )}
                                </AnimatePresence>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

// Reusable NavLink Component
const NavLink = ({href, label}: { href: string; label: string }) => {
    return (
        <Link href={href}>
            <Button
                variant="ghost"
                className="text-sm font-medium text-foreground hover:text-primary hover:bg-primary-light/30 transition-all duration-200 relative group"
            >
                {label}
                <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{width: 0}}
                    whileHover={{width: "100%"}}
                    transition={{duration: 0.2}}
                />
            </Button>
        </Link>
    );
};

export default Header;
