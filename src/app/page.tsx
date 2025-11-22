"use client";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import JournalStats from "@/components/Home/JournalStats";
import AimsScope from "@/components/Home/AimsScope";
import Indexing from "@/components/Home/Indexing";
import LatestArticles from "@/components/Home/LatestArticles";
import EditorialTeaser from "@/components/Home/EditorialTeaser";
import EthicsGuidelines from "@/components/Home/EthicsGuidelines";
import CallForPapers from "@/components/Home/CallForPapers";

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
            <CallForPapers/>
        </>
    );
};

export default Index;
