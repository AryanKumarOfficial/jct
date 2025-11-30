// types/dashboard.ts
export interface PaymentDetails {
    isPaid: boolean;
    status: string;
    orderId: string | null;
    amount: number;
}

export interface PaperItem {
    id: string;
    submissionId: string;
    title: string;
    createdAt: string;
    status: "SUBMITTED" | "UNDER_REVIEW" | "ACCEPTED" | "REJECTED" | "PUBLISHED";
    actionRequired: boolean;
    isCopyrightSigned: boolean;
    payment: PaymentDetails;
}

export interface DashboardData {
    profile: {
        firstName: string;
        lastName: string | null;
        email: string;
        organization: string;
        country: string;
        phone: string;
    };
    stats: {
        total: number;
        accepted: number;
        published: number;
    };
    papers: PaperItem[];
}
