export default function LoadingSkeleton({ location }: { location?: string }) {
    return (
        <div className="w-full">
            {/* Loading Message */}
            <div className="text-center mb-12">
                {/* Animated Brain Icon */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    {/* Orbiting Dots */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50" />
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                    </div>
                </div>

                <p className="text-xl text-gray-200 font-medium mb-2">
                    Analyzing your request<span className="inline-flex"><span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span><span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span><span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span></span>
                </p>
                <p className="text-gray-500">
                    {location && location !== "Not Specified"
                        ? <>Scouting the web for opportunities in <span className="text-indigo-400">{location}</span>...</>
                        : "Searching across job boards and company career pages..."}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 max-w-md mx-auto">
                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full animate-pulse"
                            style={{ width: '60%', animation: 'progressPulse 2s ease-in-out infinite' }} />
                    </div>
                </div>

                {/* Search Steps */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {['Parsing intent', 'Searching LinkedIn', 'Scanning Indeed', 'Curating results'].map((step, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                            <div className={`w-4 h-4 rounded-full border-2 ${i <= 1 ? 'border-indigo-400 bg-indigo-400/20' : 'border-gray-600'} flex items-center justify-center`}>
                                {i <= 1 && (
                                    <svg className="w-2 h-2 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                )}
                            </div>
                            <span className={i <= 1 ? 'text-gray-300' : 'text-gray-600'}>{step}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skeleton Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className="job-card rounded-2xl p-6"
                        style={{ animationDelay: `${i * 0.15}s` }}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                                <div className="skeleton h-6 w-4/5 rounded-lg mb-3"></div>
                                <div className="flex items-center gap-2">
                                    <div className="skeleton w-8 h-8 rounded-lg"></div>
                                    <div className="skeleton h-4 w-1/3 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="skeleton h-10 w-20 rounded-xl"></div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2 mb-6">
                            <div className="skeleton h-4 w-full rounded-lg"></div>
                            <div className="skeleton h-4 w-5/6 rounded-lg"></div>
                            <div className="skeleton h-4 w-3/5 rounded-lg"></div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <div className="skeleton h-4 w-24 rounded-lg"></div>
                            <div className="skeleton h-10 w-28 rounded-xl"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
