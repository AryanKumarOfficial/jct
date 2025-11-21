import { FileText, Users, Info, BookOpen, Mail } from "lucide-react";

export const NAV_LINKS = [
    {
        href: "/journals/jct",
        label: "The Journal",
        icon: BookOpen,
        description: "Access the Journal of Computing Technologies"
    },
    {
        href: "/about",
        label: "About",
        icon: Info
    },
    {
        href: "/author-guidelines",
        label: "Guidelines",
        icon: FileText
    },
    {
        href: "/editorial-board",
        label: "Editors",
        icon: Users
    },
    {
        href: "/contact",
        label: "Contact",
        icon: Mail
    }
];