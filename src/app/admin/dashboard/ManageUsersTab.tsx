/*
 * File: src/app/admin/dashboard/ManageUsersTab.tsx
 * Description: Component for the "Manage Users" tab in the admin dashboard.
 */

"use client";

import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
    Loader2,
    AlertCircle,
    UserPlus,
    CheckCircle2,
    Trash2,
    Edit3,
    Save,
    RefreshCw,
    Key,
} from "lucide-react";

enum EmployeeRole {
    EDITOR = "EDITOR",
    ADMIN = "ADMIN",
    FRESHER = "FRESHER",
}

type User = {
    id: string;
    firstName: string;
    lastName?: string;
    email: string;
    specialization?: string;
    role: EmployeeRole;
    createdAt?: string;
};

export default function ManageUsersTab() {
    // Form state for creating user
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [role, setRole] = useState<EmployeeRole>(EmployeeRole.EDITOR);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // Users list state (new)
    const [users, setUsers] = useState<User[]>([]);
    const [loadingUsers, setLoadingUsers] = useState<boolean>(true);
    const [usersError, setUsersError] = useState<string | null>(null);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editState, setEditState] = useState<Partial<User> | null>(null);
    const [savingId, setSavingId] = useState<string | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [resettingId, setResettingId] = useState<string | null>(null);
    const [refreshCounter, setRefreshCounter] = useState(0);

    // Fetch users
    const fetchUsers = async () => {
        setLoadingUsers(true);
        setUsersError(null);
        try {
            const res = await fetch("/api/admin/users");
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Failed to fetch users.");
            setUsers(data as User[]);
        } catch (err: any) {
            setUsersError(err?.message || "Failed to fetch users.");
        } finally {
            setLoadingUsers(false);
        }
    };

    useEffect(() => {
        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshCounter]);

    // Create user submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(null);

        try {
            // TODO: Add Authorization header
            const response = await fetch("/api/admin/auth/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    specialization,
                    role,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data?.error || "Failed to create user.");
            }

            setSuccess(`Successfully created user: ${data.email}`);
            // Clear form
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setSpecialization("");
            setRole(EmployeeRole.EDITOR);

            // refresh list
            setRefreshCounter((s) => s + 1);
        } catch (err: any) {
            setError(err?.message || "Failed to create user.");
        } finally {
            setIsLoading(false);
        }
    };

    // Start editing
    const startEdit = (u: User) => {
        setEditingId(u.id);
        setEditState({ ...u });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditState(null);
    };

    const saveEdit = async (id: string) => {
        if (!editState) return;
        setSavingId(id);
        setUsersError(null);
        try {
            const res = await fetch(`/api/admin/users/${encodeURIComponent(id)}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: editState.firstName,
                    lastName: editState.lastName,
                    email: editState.email,
                    specialization: editState.specialization,
                    role: editState.role,
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Failed to update user.");

            setUsers((prev) => prev.map((p) => (p.id === id ? (data as User) : p)));
            cancelEdit();
        } catch (err: any) {
            setUsersError(err?.message || "Failed to update user.");
        } finally {
            setSavingId(null);
        }
    };

    const deleteUser = async (id: string) => {
        const ok = window.confirm("Delete this user? This action cannot be undone.");
        if (!ok) return;
        setDeletingId(id);
        setUsersError(null);
        try {
            const res = await fetch(`/api/admin/users/${encodeURIComponent(id)}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Failed to delete user.");
            setUsers((prev) => prev.filter((u) => u.id !== id));
        } catch (err: any) {
            setUsersError(err?.message || "Failed to delete user.");
        } finally {
            setDeletingId(null);
        }
    };

    const resetPassword = async (id: string) => {
        const ok = window.confirm("Reset password for this user? An email will be sent (if configured).");
        if (!ok) return;
        setResettingId(id);
        setUsersError(null);
        try {
            const res = await fetch(`/api/admin/auth/reset-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: id }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Failed to reset password.");
            // optionally show a small success per-user (here we reuse success state)
            setSuccess(`Password reset requested for ${id}`);
        } catch (err: any) {
            setUsersError(err?.message || "Failed to reset password.");
        } finally {
            setResettingId(null);
        }
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Create New User</CardTitle>
                    <CardDescription>Create a new account for an Admin or Editor.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Temporary Password</Label>
                                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="role">Role</Label>
                                <Select value={role} onValueChange={(value) => setRole(value as EmployeeRole)}>
                                    <SelectTrigger id="role">
                                        <SelectValue placeholder="Select a role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={EmployeeRole.EDITOR}>Editor</SelectItem>
                                        <SelectItem value={EmployeeRole.ADMIN}>Admin</SelectItem>
                                        <SelectItem value={EmployeeRole.FRESHER}>Fresher</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="specialization">Specialization</Label>
                                <Input id="specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} placeholder="e.g., AI, Machine Learning" />
                            </div>
                        </div>

                        {success && (
                            <Alert variant="default" className="bg-green-50 border-green-200">
                                <CheckCircle2 className="h-4 w-4" />
                                <AlertTitle>Success</AlertTitle>
                                <AlertDescription>{success}</AlertDescription>
                            </Alert>
                        )}
                        {error && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <UserPlus className="mr-2 h-4 w-4" />}
                            Create User
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {/* Users list & management Card */}
            <Card>
                <CardHeader className="flex items-center justify-between gap-4">
                    <div>
                        <CardTitle>Existing Users</CardTitle>
                        <CardDescription>List of registered editors/admins. Edit role, reset password or delete accounts.</CardDescription>
                    </div>
                    <div>
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                                setRefreshCounter((s) => s + 1);
                            }}
                        >
                            <RefreshCw className="h-4 w-4 mr-2" /> Refresh
                        </Button>
                    </div>
                </CardHeader>

                <CardContent>
                    {loadingUsers ? (
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Loader2 className="animate-spin h-4 w-4" /> Loading users...
                        </div>
                    ) : usersError ? (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{usersError}</AlertDescription>
                        </Alert>
                    ) : users.length === 0 ? (
                        <p className="text-muted-foreground italic">No users found.</p>
                    ) : (
                        <div className="flex flex-col gap-3">
                            {users.map((u) => {
                                const isEditing = editingId === u.id;
                                return (
                                    <div key={u.id} className="flex items-center justify-between p-3 border rounded-md bg-background">
                                        <div className="flex-1">
                                            {isEditing && editState ? (
                                                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                                                    <Input value={String(editState.firstName ?? "")} onChange={(e) => setEditState((s) => ({ ...(s || {}), firstName: e.target.value }))} placeholder="First name" />
                                                    <Input value={String(editState.lastName ?? "")} onChange={(e) => setEditState((s) => ({ ...(s || {}), lastName: e.target.value }))} placeholder="Last name" />
                                                    <Input value={String(editState.email ?? "")} onChange={(e) => setEditState((s) => ({ ...(s || {}), email: e.target.value }))} placeholder="Email" />
                                                    <Select value={(editState.role as EmployeeRole) ?? EmployeeRole.EDITOR} onValueChange={(val) => setEditState((s) => ({ ...(s || {}), role: val as EmployeeRole }))}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Role" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value={EmployeeRole.EDITOR}>Editor</SelectItem>
                                                            <SelectItem value={EmployeeRole.ADMIN}>Admin</SelectItem>
                                                            <SelectItem value={EmployeeRole.FRESHER}>Fresher</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <Input value={String(editState.specialization ?? "")} onChange={(e) => setEditState((s) => ({ ...(s || {}), specialization: e.target.value }))} placeholder="Specialization" />
                                                </div>
                                            ) : (
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                                                    <div className="font-semibold">
                                                        {u.firstName} {u.lastName ?? ""}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">{u.email}</div>
                                                    <div className="text-sm text-muted-foreground ml-3">{u.specialization ?? "—"}</div>
                                                    <div className="text-xs text-muted-foreground ml-3">Role: {u.role}</div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-2 ml-4">
                                            {isEditing ? (
                                                <>
                                                    <Button size="sm" variant="outline" onClick={() => cancelEdit()} disabled={savingId === u.id}>
                                                        Cancel
                                                    </Button>
                                                    <Button size="sm" onClick={() => saveEdit(u.id)} disabled={savingId === u.id}>
                                                        {savingId === u.id ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="mr-2 h-4 w-4" />}
                                                        Save
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Button size="sm" variant="ghost" onClick={() => startEdit(u)}>
                                                        <Edit3 className="h-4 w-4" />
                                                    </Button>
                                                    <Button size="sm" variant="outline" onClick={() => resetPassword(u.id)} disabled={resettingId === u.id}>
                                                        {resettingId === u.id ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Key className="mr-2 h-4 w-4" />}
                                                        Reset PW
                                                    </Button>
                                                    <Button size="sm" variant="destructive" onClick={() => deleteUser(u.id)} disabled={deletingId === u.id}>
                                                        {deletingId === u.id ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Trash2 className="h-4 w-4 mr-2" />}
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
        </div>
    );
}
