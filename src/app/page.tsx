import {toast} from "sonner";

export const dynamic = "force-dynamic";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import JournalStats from "@/components/Home/JournalStats";
import AimsScope from "@/components/Home/AimsScope";
import Indexing from "@/components/Home/Indexing";
import LatestArticles from "@/components/Home/LatestArticles";
import EditorialTeaser from "@/components/Home/EditorialTeaser";
import EthicsGuidelines from "@/components/Home/EthicsGuidelines";
import CallForPapers from "@/components/Home/CallForPapers";
import {prisma} from "@/lib/prisma";
import {archive as Archive} from "@/generated/prisma";

const fetchLatestArchive = async (): Promise<Archive> => {
    const latestArchive = await prisma.archive.findFirst({
        orderBy: {createdAt: "desc"}, // or year/volume if you prefer
    });

    if (!latestArchive) {
        const dummyArchive: Omit<Archive, "createdAt" | "updatedAt" | "id" | "month"> = {
            issue: 1,
            year: new Date().getFullYear(),
            volume: new Date().getFullYear() - 2012,

        }
        return dummyArchive as Archive;
    }

    return latestArchive as Archive;
}

const latestArchive = await fetchLatestArchive();


const Index = () => {
    return (
        <>
            <Hero/>
            <AimsScope/>
            <LatestArticles/>
            <Indexing/>
            <JournalStats/>
            <Features/>
            <EditorialTeaser/>
            <EthicsGuidelines/>
            <CallForPapers archive={latestArchive}/>
        </>
    );
};

export default Index;
