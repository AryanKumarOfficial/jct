"use client";

import {useRouter} from "next/navigation";
import useSWR from "swr";
import Script from "next/script";
import {Button} from "@/components/ui/button";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
    Loader2,
    PenTool,
} from "lucide-react";
import {toast} from "sonner";
import Profile from "@/app/author/dashboard/Profile";
import Stats from "@/app/author/dashboard/Stats";
import Papers from "@/app/author/dashboard/Papers";

// --- Types ---
interface PaymentDetails {
    isPaid: boolean;
    status: string;
    orderId: string | null;
    amount: number;
}

export interface Paper {
    id: string;
    submissionId: string;
    title: string;
    createdAt: string;
    status: string;
    publishUrl: string | null; // Added this
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
    papers: Paper[];
}

const fetcher = (url: string) => fetch(url).then(async (r) => {
    if (r.status === 401) {
        throw Object.assign(new Error("Unauthorized"), {status: 401});
    }
    if (!r.ok) throw new Error("Failed to fetch");
    return r.json();
});

export default function AuthorDashboardClient() {
    const router = useRouter();
    const {data, error, mutate} = useSWR<DashboardData>("/api/author/dashboard", fetcher, {
        revalidateOnFocus: true,
        refreshInterval: 0
    });


    if (error) {
        if ((error as any).status === 401) {
            toast.error("Session expired. Please login again.");
            router.push("/author/login");
            return null;
        }
    }

    if (!data) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary"/>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-muted/20 p-6 md:p-10">

            <div className="mx-auto max-w-6xl space-y-8">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Author Dashboard</h1>
                        <p className="text-muted-foreground">
                            Welcome back, {data.profile.firstName} {data.profile.lastName}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={() => router.push("/submit")}>
                            <PenTool className="mr-2 h-4 w-4"/>
                            New Submission
                        </Button>
                    </div>
                </div>

                {/* Stats */}
                <Stats data={data}/>
                {/* Tabs */}
                <Tabs defaultValue="papers" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="papers">My Papers</TabsTrigger>
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                    </TabsList>

                    <Papers data={data} mutate={mutate}/>

                    <Profile data={data}/>
                </Tabs>
            </div>
        </div>
    );
}