"use client";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";

const Index = () => {
    return (
        <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
            <Hero/>
            <Features/>
        </div>
    );
};

export default Index;
