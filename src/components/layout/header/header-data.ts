import {FileText, Users, Info, BookOpen, Mail, Search} from "lucide-react";

export const NAV_LINKS = [
    {
        href: "/journals/jct",
        label: "The Journal",
        icon: BookOpen,
        description: "Access the Journal of Computing Technologies"
    },
    {
        href: "/track",
        label: "Track Paper",
        icon: Search,
        description: "Check the status of your submission"
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
        href: "/about",
        label: "About",
        icon: Info
    },
    {
        href: "/contact",
        label: "Contact",
        icon: Mail
    }
];

export const HOME_ANCHORS = [
    {href: "/#aims", label: "Aims & Scope"},
    {href: "/#latest", label: "Latest Articles"},
    {href: "/#indexing", label: "Indexing"},
    {href: "/#editorial", label: "Editorial Board"},
    {href: "/#guidelines", label: "Guidelines"},
    {href: "/#cfp", label: "Call for Papers"},
];