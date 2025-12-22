export default function LoadingSkeleton({ location }: { location?: string }) {
    return (
        <div className="w-full">
            {/* Loading Message */}
            <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="pulse-dot w-3 h-3 rounded-full bg-indigo-500"></div>
                    <div className="pulse-dot w-3 h-3 rounded-full bg-indigo-400" style={{ animationDelay: "0.2s" }}></div>
                    <div className="pulse-dot w-3 h-3 rounded-full bg-indigo-300" style={{ animationDelay: "0.4s" }}></div>
                </div>
                <p className="text-xl text-gray-300 font-medium">
                    Analyzing your request...
                </p>
                <p className="text-gray-500 mt-2">
                    {location && location !== "Not Specified"
                        ? `Scouting the web for opportunities in ${location}...`
                        : "Searching across job boards and company pages..."}
                </p>
            </div>

            {/* Skeleton Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className="job-card rounded-2xl p-6"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                                <div className="skeleton h-6 w-3/4 rounded-lg mb-2"></div>
                                <div className="skeleton h-4 w-1/2 rounded-lg"></div>
                            </div>
                            <div className="skeleton h-8 w-24 rounded-lg"></div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2 mb-5">
                            <div className="skeleton h-4 w-full rounded-lg"></div>
                            <div className="skeleton h-4 w-5/6 rounded-lg"></div>
                            <div className="skeleton h-4 w-4/6 rounded-lg"></div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <div className="skeleton h-4 w-28 rounded-lg"></div>
                            <div className="skeleton h-10 w-28 rounded-xl"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
