"use client";

import React, {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {
    PlusCircle,
    Loader2,
    AlertCircle,
    CheckCircle2,
    Archive as ArchiveIcon,
    Users,
    FileText,
    Trash2,
    Edit3,
    Save,
} from "lucide-react";

type Archive = {
    id: string;
    volume: number;
    issue: number;
    month: string;
    year: number;
};

// --- Create Archive Component ---
// Now accepts onCreated optional callback so parent can refresh list
const CreateArchiveForm: React.FC<{ onCreated?: (a: Archive) => void }> = ({onCreated}) => {
    const [volume, setVolume] = useState("");
    const [issue, setIssue] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // TODO: Add Authorization header if required
            const response = await fetch("/api/admin/archive", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    volume: Number(volume),
                    issue: Number(issue),
                    month: month.trim(),
                    year: Number(year),
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data?.error || "Failed to create archive.");
            }

            // assume API returns created archive object with id
            setSuccess(true);
            setVolume("");
            setIssue("");
            setMonth("");
            setYear("");

            if (onCreated && data) {
                onCreated(data as Archive);
            }
        } catch (err: any) {
            setError(err?.message || "Failed to create archive.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle>Create New Archive</CardTitle>
                <CardDescription>Add a new volume/issue for paper submissions.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="volume">Volume</Label>
                            <Input id="volume" type="number" placeholder="12" value={volume}
                                   onChange={(e) => setVolume(e.target.value)} required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="issue">Issue</Label>
                            <Input id="issue" type="number" placeholder="4" value={issue}
                                   onChange={(e) => setIssue(e.target.value)} required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="month">Month</Label>
                            <Input id="month" placeholder="October" value={month}
                                   onChange={(e) => setMonth(e.target.value)} required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="year">Year</Label>
                            <Input id="year" type="number" placeholder="2025" value={year}
                                   onChange={(e) => setYear(e.target.value)} required/>
                        </div>
                    </div>

                    {success && (
                        <Alert variant="default" className="bg-green-50 border-green-200 text-green-800">
                            <CheckCircle2 className="h-4 w-4"/>
                            <AlertTitle>Success!</AlertTitle>
                            <AlertDescription>New archive created successfully.</AlertDescription>
                        </Alert>
                    )}
                    {error && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4"/>
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <div>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> :
                                <PlusCircle className="mr-2 h-4 w-4"/>}
                            Create Archive
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

// --- Archive List Component (fetch, edit, delete) ---
const ArchiveList: React.FC<{ refreshSignal?: number }> = ({refreshSignal}) => {
    const [archives, setArchives] = useState<Archive[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editState, setEditState] = useState<Partial<Archive> | null>(null);
    const [savingId, setSavingId] = useState<string | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const fetchArchives = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/archive");
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data?.error || "Failed to fetch archives.");
            }
            // Expecting data to be an array of archives
            setArchives(data as Archive[]);
        } catch (err: any) {
            setError(err?.message || "Failed to fetch archives.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArchives();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshSignal]);

    const startEdit = (a: Archive) => {
        setEditingId(a.id);
        setEditState({...a});
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditState(null);
    };

    const saveEdit = async (id: string) => {
        if (!editState) return;
        setSavingId(id);
        try {
            const res = await fetch(`/api/admin/archive/${encodeURIComponent(id)}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    volume: Number(editState.volume),
                    issue: Number(editState.issue),
                    month: String(editState.month).trim(),
                    year: Number(editState.year),
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Failed to update archive.");

            // update local list
            setArchives((prev) => prev.map((p) => (p.id === id ? (data as Archive) : p)));
            setEditingId(null);
            setEditState(null);
        } catch (err: any) {
            setError(err?.message || "Failed to update archive.");
        } finally {
            setSavingId(null);
        }
    };

    const deleteArchive = async (id: string) => {
        const ok = window.confirm("Are you sure you want to delete this archive? This cannot be undone.");
        if (!ok) return;
        setDeletingId(id);
        try {
            const res = await fetch(`/api/admin/archive/${encodeURIComponent(id)}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Failed to delete archive.");

            setArchives((prev) => prev.filter((a) => a.id !== id));
        } catch (err: any) {
            setError(err?.message || "Failed to delete archive.");
        } finally {
            setDeletingId(null);
        }
    };

    if (loading) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Existing Archives</CardTitle>
                    <CardDescription>Loading archives…</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Loader2 className="animate-spin h-4 w-4"/> Fetching archives...
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Existing Archives</CardTitle>
                <CardDescription>Edit or delete published volumes and issues.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4"/>
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {archives.length === 0 ? (
                    <p className="text-muted-foreground italic">No archives found.</p>
                ) : (
                    <div className="grid gap-3">
                        {archives.map((a) => {
                            const isEditing = editingId === a.id;
                            return (
                                <div key={a.id}
                                     className="flex items-center justify-between p-3 border rounded-md bg-background">
                                    <div className="flex-1">
                                        {isEditing && editState ? (
                                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                                                <Input
                                                    value={String(editState.volume ?? "")}
                                                    onChange={(e) => setEditState((s) => ({
                                                        ...(s || {}),
                                                        volume: Number(e.target.value)
                                                    }))}
                                                    placeholder="Volume"
                                                />
                                                <Input
                                                    value={String(editState.issue ?? "")}
                                                    onChange={(e) => setEditState((s) => ({
                                                        ...(s || {}),
                                                        issue: Number(e.target.value)
                                                    }))}
                                                    placeholder="Issue"
                                                />
                                                <Input
                                                    value={String(editState.month ?? "")}
                                                    onChange={(e) => setEditState((s) => ({
                                                        ...(s || {}),
                                                        month: e.target.value
                                                    }))}
                                                    placeholder="Month"
                                                />
                                                <Input
                                                    value={String(editState.year ?? "")}
                                                    onChange={(e) => setEditState((s) => ({
                                                        ...(s || {}),
                                                        year: Number(e.target.value)
                                                    }))}
                                                    placeholder="Year"
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                                                <div className="font-semibold">
                                                    Vol. {a.volume}, Iss. {a.issue}
                                                </div>
                                                <div className="text-sm text-muted-foreground">{a.month} {a.year}</div>
                                                <div className="text-xs text-muted-foreground ml-3">ID: {a.id}</div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-2 ml-4">
                                        {isEditing ? (
                                            <>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => cancelEdit()}
                                                    disabled={savingId === a.id}
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    onClick={() => saveEdit(a.id)}
                                                    disabled={savingId === a.id}
                                                >
                                                    {savingId === a.id ?
                                                        <Loader2 className="h-4 w-4 animate-spin mr-2"/> :
                                                        <Save className="mr-2 h-4 w-4"/>}
                                                    Save
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button size="sm" variant="ghost" onClick={() => startEdit(a)}>
                                                    <Edit3 className="h-4 w-4"/>
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    onClick={() => deleteArchive(a.id)}
                                                    disabled={deletingId === a.id}
                                                >
                                                    {deletingId === a.id ?
                                                        <Loader2 className="h-4 w-4 animate-spin mr-2"/> :
                                                        <Trash2 className="h-4 w-4 mr-2"/>}
                                                    Delete
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

// --- Main Dashboard Page ---
export default function AdminDashboard() {
    // used to trigger refresh of archive list after CreateArchiveForm creates one
    const [refreshCounter, setRefreshCounter] = useState(0);

    const handleCreated = (a: Archive) => {
        // bump refresh counter to re-fetch ArchiveList
        setRefreshCounter((s) => s + 1);
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

            <Tabs defaultValue="papers" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-lg">
                    <TabsTrigger value="papers">
                        <FileText className="mr-2 h-4 w-4"/>
                        Manage Papers
                    </TabsTrigger>
                    <TabsTrigger value="archives">
                        <ArchiveIcon className="mr-2 h-4 w-4"/>
                        Manage Archives
                    </TabsTrigger>
                    <TabsTrigger value="users">
                        <Users className="mr-2 h-4 w-4"/>
                        Manage Users
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="papers" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Manage Papers</CardTitle>
                            <CardDescription>
                                Assign editors to new submissions and approve/reject status changes.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* TODO: Fetch and list papers needing assignment */}
                            <p className="text-muted-foreground italic">(Paper assignment UI will go here)</p>
                            {/* TODO: Fetch and list statuses needing approval */}
                            <p className="text-muted-foreground italic mt-4">(Status approval UI will go here)</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="archives" className="mt-6 space-y-6">
                    <CreateArchiveForm onCreated={handleCreated}/>
                    {/* List existing archives for editing/deleting */}
                    <ArchiveList refreshSignal={refreshCounter}/>
                </TabsContent>

                <TabsContent value="users" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Manage Users</CardTitle>
                            <CardDescription>
                                Create new editor/admin accounts and manage existing ones.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* TODO: Add "Create User" form */}
                            <p className="text-muted-foreground italic">(User management UI will go here)</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
