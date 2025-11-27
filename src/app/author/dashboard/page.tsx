"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Loader2,
    FileText,
    CheckCircle2,
    Clock,
    AlertCircle,
    PenTool,
    User,
    LogOut
} from "lucide-react";
import { toast } from "sonner";

// Types matching the API response
interface DashboardData {
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
    papers: Array<{
        id: string;
        submissionId: string;
        title: string;
        createdAt: string;
        status: "SUBMITTED" | "UNDER_REVIEW" | "ACCEPTED" | "REJECTED" | "PUBLISHED";
        actionRequired: boolean;
        isCopyrightSigned: boolean;
    }>;
}

export default function AuthorDashboard() {
    const router = useRouter();
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const res = await fetch("/api/author/dashboard");
            if (res.status === 401) {
                toast.error("Session expired. Please login again.");
                router.push("/author/login"); // Ensure you have a login page
                return;
            }
            if (!res.ok) throw new Error("Failed to load dashboard");

            const jsonData = await res.json();
            setData(jsonData);
        } catch (error) {
            console.error(error);
            toast.error("Could not load dashboard data.");
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "ACCEPTED": return "bg-green-100 text-green-700 hover:bg-green-100";
            case "PUBLISHED": return "bg-blue-100 text-blue-700 hover:bg-blue-100";
            case "REJECTED": return "bg-red-100 text-red-700 hover:bg-red-100";
            case "UNDER_REVIEW": return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
            default: return "bg-gray-100 text-gray-700 hover:bg-gray-100";
        }
    };

    if (loading) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
        );
    }

    if (!data) return null;

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
                            <PenTool className="mr-2 h-4 w-4" />
                            New Submission
                        </Button>
                        {/* Optional Logout Button - Implement logout API logic as needed */}
                        {/* <Button variant="ghost" size="icon"><LogOut className="h-5 w-5" /></Button> */}
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{data.stats.total}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Accepted</CardTitle>
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{data.stats.accepted}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-yellow-600">
                                {data.stats.total - (data.stats.accepted + data.stats.published)}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Tabs */}
                <Tabs defaultValue="papers" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="papers">My Papers</TabsTrigger>
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                    </TabsList>

                    {/* Papers Tab */}
                    <TabsContent value="papers" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Manuscripts</CardTitle>
                                <CardDescription>
                                    Manage your submissions and view their current status.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {data.papers.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center py-10 text-center">
                                        <FileText className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                                        <h3 className="text-lg font-semibold">No papers yet</h3>
                                        <p className="text-muted-foreground mb-4">You haven't submitted any manuscripts yet.</p>
                                        <Button onClick={() => router.push("/submit")}>Submit Your First Paper</Button>
                                    </div>
                                ) : (
                                    <div className="rounded-md border">
                                        <div className="relative w-full overflow-auto">
                                            <table className="w-full caption-bottom text-sm">
                                                <thead className="[&_tr]:border-b">
                                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
                                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Title</th>
                                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody className="[&_tr:last-child]:border-0">
                                                {data.papers.map((paper) => (
                                                    <tr key={paper.id} className="border-b transition-colors hover:bg-muted/50">
                                                        <td className="p-4 align-middle font-mono font-medium">{paper.submissionId}</td>
                                                        <td className="p-4 align-middle font-medium">{paper.title}</td>
                                                        <td className="p-4 align-middle text-muted-foreground">
                                                            {new Date(paper.createdAt).toLocaleDateString()}
                                                        </td>
                                                        <td className="p-4 align-middle">
                                                            <Badge variant="secondary" className={getStatusColor(paper.status)}>
                                                                {paper.status.replace("_", " ")}
                                                            </Badge>
                                                        </td>
                                                        <td className="p-4 align-middle text-right">
                                                            <div className="flex justify-end gap-2">
                                                                {/* Logic: Show Sign Copyright if Accepted AND Not Signed */}
                                                                {paper.actionRequired && (
                                                                    <Button
                                                                        size="sm"
                                                                        className="bg-green-600 hover:bg-green-700 text-white"
                                                                        asChild
                                                                    >
                                                                        <Link href={`/author/copyright/${paper.id}`}>
                                                                            Sign Copyright
                                                                        </Link>
                                                                    </Button>
                                                                )}

                                                                {paper.isCopyrightSigned && (
                                                                    <Badge variant="outline" className="border-green-600 text-green-600 h-9 px-3 flex items-center gap-1">
                                                                        <CheckCircle2 className="h-3 w-3" /> Signed
                                                                    </Badge>
                                                                )}

                                                                <Button variant="outline" size="sm" asChild>
                                                                    <Link href={`/track?id=${paper.submissionId}`}>
                                                                        Track
                                                                    </Link>
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Profile Tab */}
                    <TabsContent value="profile">
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile Details</CardTitle>
                                <CardDescription>
                                    Your personal information as it appears on published papers.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                                        <div className="p-3 bg-muted/50 rounded-md border text-sm">
                                            {data.profile.firstName} {data.profile.lastName}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                                        <div className="p-3 bg-muted/50 rounded-md border text-sm">
                                            {data.profile.email}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">Organization</label>
                                        <div className="p-3 bg-muted/50 rounded-md border text-sm">
                                            {data.profile.organization}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">Country</label>
                                        <div className="p-3 bg-muted/50 rounded-md border text-sm">
                                            {data.profile.country}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end pt-4">
                                    <Button variant="outline" disabled>Edit Profile (Coming Soon)</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}