import React from 'react'
import {AnnouncementUI} from "@/components/layout/AnnouncementUI";
import {archive as Archive} from "@/generated/prisma";
import {prisma} from "@/lib/prisma";

const fetchLatestArchive = async (): Promise<Archive> => {
    const latest = await prisma.archive.findFirst({
        orderBy: {createdAt: "desc"},
    });

    if (!latest) {
        // fallback sanitized dummy
        return {
            id: "dummy",
            volume: 0,
            issue: 0,
            month: "N/A",
            year: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        } as Archive;
    }

    return latest as Archive;
};


export const AnnouncementBar = async () => {
    const latestArchive = await fetchLatestArchive();

    return (
        <AnnouncementUI archive={latestArchive}/>
    )
}
