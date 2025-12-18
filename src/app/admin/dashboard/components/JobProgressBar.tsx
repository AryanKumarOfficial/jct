export default function JobProgressBar({progress}: {progress?: any}) {
    const pct = progress?.pct ?? 0;

    return (
        <div className="w-full">
            <div className="h-2 bg-gray-200 rounded">
                <div
                    className="h-2 bg-blue-500 rounded transition-all"
                    style={{width: `${pct}%`}}
                />
            </div>
            <p className="text-xs text-gray-600 mt-1">
                {pct}% {progress?.step ? `– ${progress.step}` : ""}
            </p>
        </div>
    );
}
