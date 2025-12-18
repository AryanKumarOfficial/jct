import EmailStatusBadge from "@/app/admin/dashboard/components/EmailStatusBadge";

export default function EmailStatusModal({
                              submissionId,
                              logs,
                              loading,
                              onClose,
                          }: {
    submissionId: string;
    logs: any[];
    loading: boolean;
    onClose: () => void;
}) {
    const hasFailures = logs.some(l => l.status === "FAILED");

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl p-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold">
                        Email Status – {submissionId}
                    </h2>

                    <div className="flex items-center gap-2">
                        {/* ✅ Retry button goes HERE */}
                        {hasFailures && (
                            <button
                                onClick={async () => {
                                    await fetch(
                                        `/api/admin/jobs/${submissionId}/retry-emails`,
                                        { method: "POST" }
                                    );
                                    alert("Retry triggered");
                                    onClose();
                                }}
                                className="px-3 py-1 text-sm bg-red-600 text-white rounded"
                            >
                                Retry Failed Emails
                            </button>
                        )}

                        <button
                            onClick={onClose}
                            className="text-gray-500 text-lg"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Body */}
                {loading ? (
                    <p>Loading email logs...</p>
                ) : logs.length === 0 ? (
                    <p>No email logs found.</p>
                ) : (
                    <table className="w-full text-sm border">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2">Email</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Attempts</th>
                            <th className="p-2">Last Attempt</th>
                            <th className="p-2">Error</th>
                        </tr>
                        </thead>
                        <tbody>
                        {logs.map((log) => (
                            <tr key={log.id} className="border-t">
                                <td className="p-2">{log.email}</td>
                                <td className="p-2">
                                    <EmailStatusBadge status={log.status} />
                                </td>
                                <td className="p-2">{log.attemptCount}</td>
                                <td className="p-2">
                                    {log.lastAttempt
                                        ? new Date(log.lastAttempt).toLocaleString()
                                        : "—"}
                                </td>
                                <td className="p-2 text-red-600 text-xs">
                                    {log.error ?? "—"}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}

            </div>
        </div>
    );
}
