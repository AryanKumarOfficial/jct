// lib/server/author.ts
import { prisma } from "@/lib/prisma";
import type { DashboardData, PaperItem } from "@/types/dashboard";

export async function fetchAuthorDataRaw(userId: string) {
    // Select only required fields to minimize payload
    return prisma.author.findUnique({
        where: { id: userId },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            organisation: true,
            country: true,
            papers: {
                orderBy: { createdAt: "desc" },
                select: {
                    id: true,
                    submissionId: true,
                    name: true,
                    createdAt: true,
                    paperStatuses: {
                        orderBy: { createdAt: "desc" },
                        take: 1,
                        select: { status: true },
                    },
                    Copyright: {
                        select: { copyrightStatus: true },
                    },
                    transactions: {
                        orderBy: { createdAt: "desc" },
                        take: 1,
                        select: {
                            id: true,
                            status: true,
                            amount: true,
                            razorpayOrderId: true,
                        },
                    },
                },
            },
        },
    });
}

export function transformToDashboard(raw: Awaited<ReturnType<typeof fetchAuthorDataRaw>>): DashboardData {
    if (!raw) throw new Error("Author data is null");

    const profile = {
        firstName: raw.firstName,
        lastName: raw.lastName,
        email: raw.email,
        phone: raw.phone,
        organization: raw.organisation || "",
        country: raw.country || "",
    };

    const papers = (raw.papers || []).map((p): PaperItem => {
        const currentStatus = (p.paperStatuses?.[0]?.status as any) || "SUBMITTED";
        const isCopyrightSigned = p.Copyright?.copyrightStatus === "SIGNED";

        const latestTx = p.transactions?.[0] ?? null;
        const paymentStatus = latestTx?.status ?? "PENDING";
        const isPaid = paymentStatus === "SUCCESS" || paymentStatus === "COMPLETED";
        const orderId = latestTx?.razorpayOrderId ?? null;
        const amount = typeof latestTx?.amount === "number" ? latestTx!.amount : 0;

        const paperItem: PaperItem = {
            id: p.id,
            submissionId: p.submissionId,
            title: p.name,
            createdAt: p.createdAt.toISOString(),
            status: currentStatus,
            actionRequired: currentStatus === "ACCEPTED" && (!isCopyrightSigned || !isPaid),
            isCopyrightSigned,
            payment: {
                isPaid,
                status: paymentStatus,
                orderId,
                amount,
            },
        };

        return paperItem;
    });

    const stats = {
        total: papers.length,
        accepted: papers.filter((x) => x.status === "ACCEPTED").length,
        published: papers.filter((x) => x.status === "PUBLISHED").length,
    };

    return { profile, stats, papers };
}
