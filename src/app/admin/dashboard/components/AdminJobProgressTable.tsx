"use client";

import {useEffect, useState} from "react";
import EmailStatusModal from "@/app/admin/dashboard/components/EmailStatusModal";
import StatusBadge from "@/app/admin/dashboard/components/StatusBadge";
import JobProgressBar from "@/app/admin/dashboard/components/JobProgressBar";

type JobRun = {
    id: string;
    submissionId: string;
    status: string;
    attempts: number;
    completedAt?: string;
    lastError?: string;
    paper?: { name: string };
    progress: number;
};

type EmailLog = {
    id: string;
    email: string;
    status: "PENDING" | "SENDING" | "SENT" | "FAILED";
    attemptCount: number;
    lastAttempt?: string;
    error?: string;
};

export default function AdminJobProgressTable() {
    const [jobs, setJobs] = useState<JobRun[]>([]);
    const [loading, setLoading] = useState(true);

    const [selectedSubmission, setSelectedSubmission] = useState<string | null>(null);
    const [emailLogs, setEmailLogs] = useState<EmailLog[]>([]);
    const [emailLoading, setEmailLoading] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            const res = await fetch("/api/admin/jobs");
            const data = await res.json();
            setJobs(data);
            setLoading(false);
        };

        fetchJobs();
        const id = setInterval(fetchJobs, 5000);
        return () => clearInterval(id);
    }, []);

    const openEmailModal = async (submissionId: string) => {
        setSelectedSubmission(submissionId);
        setEmailLoading(true);

        const res = await fetch(`/api/admin/jobs/${submissionId}/emails`);
        const data = await res.json();

        setEmailLogs(data);
        setEmailLoading(false);
    };

    if (loading) return <p>Loading jobs...</p>;

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full border text-sm">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2">Submission</th>
                        <th className="p-2">Paper</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Attempts</th>
                        <th className="p-2">Progress</th>
                        <th className="p-2">Completed</th>
                        <th className="p-2">Error</th>
                    </tr>
                    </thead>
                    <tbody>
                    {jobs.map((job) => (
                        <tr
                            key={job.id}
                            className="border-t cursor-pointer hover:bg-gray-50"
                            onClick={() => openEmailModal(job.submissionId)}
                        >
                            <td className="p-2 font-mono">{job.submissionId}</td>
                            <td className="p-2">{job.paper?.name}</td>
                            <td className="p-2">
                                <StatusBadge status={job.status}/>
                            </td>
                            <td className="p-2">{job.attempts}</td>
                            <td className="p-2">
                                {job.completedAt
                                    ? new Date(job.completedAt).toLocaleString()
                                    : "—"}
                            </td>
                            <td className="p-2 w-48">
                                <JobProgressBar progress={job.progress}/>
                            </td>
                            <td className="p-2 text-red-600">
                                {job.lastError ?? "—"}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {selectedSubmission && (
                <EmailStatusModal
                    submissionId={selectedSubmission}
                    logs={emailLogs}
                    loading={emailLoading}
                    onClose={() => setSelectedSubmission(null)}
                />
            )}
        </>
    );
}
