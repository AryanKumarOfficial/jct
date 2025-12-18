export default function EmailStatusBadge({status}: { status: string }) {
    const color =
        status === "SENT"
            ? "bg-green-100 text-green-700"
            : status === "FAILED"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700";

    return (
        <span className={`px-2 py-1 rounded text-xs ${color}`}>
      {status}
    </span>
    );
}
