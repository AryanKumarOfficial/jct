import {PaperStatus} from "@/types/enums";

export interface Author {
    id: string;
    firstName: string;
    lastName: string | null;
    email: string;
}

export interface Status {
    id: string;
    status: PaperStatus;
    isApproved: boolean;
    paperId: string;
    comments: string[];
    createdAt: string;
}

export interface Copyright {
    id: string;
    copyrightStatus: "PENDING" | "SIGNED";
    pdfUrl: string | null;
    signedAt: string;
}

export interface Transaction {
    id: string;
    status: string;
    amount: number;
}

export interface Editor {
    id: string;
    firstName: string;
    lastName: string | null;
}

export interface Paper {
    id: string;
    submissionId: string;
    name: string;
    manuscriptUrl: string | null;
    keywords: string[];
    editorId: string | null;
    editor?: Editor;
    authors: Author[];
    paperStatuses: Status[];
    createdAt: string;
    Copyright?: Copyright | null;
    transactions?: Transaction[];
}