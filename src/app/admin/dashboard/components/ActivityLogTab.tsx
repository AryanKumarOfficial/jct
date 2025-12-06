"use client";

import React, {useEffect, useState} from "react";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {RefreshCw, User, FileText, Activity} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ActivityLog} from "../types";

export default function ActivityLogTab() {
    const [logs, setLogs] = useState<ActivityLog[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchLogs = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/admin/activity");
            if (res.ok) {
                const data = await res.json();
                setLogs(data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchLogs();
    }, []);

    const getActivityColor = (type: string) => {
        if (type.includes("PAYMENT")) return "text-green-600 bg-green-50 border-green-200";
        if (type.includes("STATUS")) return "text-blue-600 bg-blue-50 border-blue-200";
        if (type.includes("SUBMITTED")) return "text-purple-600 bg-purple-50 border-purple-200";
        return "text-muted-foreground bg-muted border-border";
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle>System Activity</CardTitle>
                    <CardDescription>Recent events across the journal platform.</CardDescription>
                </div>
                <Button variant="ghost" size="sm" onClick={fetchLogs} disabled={isLoading}>
                    <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`}/>
                    Refresh
                </Button>
            </CardHeader>
            <CardContent>
                {logs.length === 0 && !isLoading ? (
                    <div className="text-center py-10 text-muted-foreground">
                        <Activity className="h-10 w-10 mx-auto mb-2 opacity-20"/>
                        <p>No activity logs found.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {logs.map((log) => (
                            <div key={log.id}
                                 className="flex items-start gap-4 p-3 rounded-lg border bg-card/50 hover:bg-muted/20 transition-colors">
                                <div className={`mt-1 p-1.5 rounded-full border ${getActivityColor(log.activity)}`}>
                                    <Activity className="h-4 w-4"/>
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-foreground">
                                            {log.activity.replace(/_/g, " ")}
                                        </p>
                                        <span className="text-xs text-muted-foreground">
                                            {new Date(log.createdAt).toLocaleString()}
                                        </span>
                                    </div>

                                    <p className="text-sm text-muted-foreground">{log.details}</p>

                                    <div className="flex items-center gap-3 mt-2 text-xs">
                                        {/* Actor */}
                                        <div className="flex items-center gap-1 text-muted-foreground">
                                            <User className="h-3 w-3"/>
                                            {log.actor ? (
                                                <span>{log.actor.firstName} ({log.actor.role})</span>
                                            ) : log.author ? (
                                                <span>{log.author.firstName} (Author)</span>
                                            ) : (
                                                <span>System</span>
                                            )}
                                        </div>

                                        {/* Related Paper */}
                                        {log.paper && (
                                            <div
                                                className="flex items-center gap-1 text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                                                <FileText className="h-3 w-3"/>
                                                <span className="font-mono">{log.paper.submissionId}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}