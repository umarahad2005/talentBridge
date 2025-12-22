"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import JobCard from "@/components/JobCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";

interface JobLead {
    title: string;
    company: string;
    description: string;
    url: string;
    source: string;
    confidence: number;
}

interface SearchIntent {
    job_role: string;
    location: string;
    experience_level: string;
    keywords: string[];
    search_query: string;
}

interface SearchResponse {
    intent: SearchIntent;
    leads: JobLead[];
    total_results: number;
}

function ResultsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams.get("q") || "";

    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState<SearchResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [newQuery, setNewQuery] = useState(query);

    useEffect(() => {
        if (!query) {
            router.push("/");
            return;
        }

        const fetchResults = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch("http://localhost:8000/fetch-leads", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: SearchResponse = await response.json();
                setResults(data);
            } catch (err) {
                console.error("Error fetching results:", err);
                setError("Unable to fetch results. Please make sure the backend server is running on port 8000.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchResults();
    }, [query, router]);

    const handleNewSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (newQuery.trim() && newQuery !== query) {
            router.push(`/results?q=${encodeURIComponent(newQuery)}`);
        }
    };

    return (
        <main className="min-h-screen flex flex-col relative z-10">
            {/* Header with Search */}
            <header className="w-full py-4 px-6 glass sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center gap-6">
                    {/* Logo */}
                    <button
                        onClick={() => router.push("/")}
                        className="flex items-center gap-2 shrink-0"
                    >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <span className="text-xl font-bold logo-gradient hidden sm:block">TalentBridge</span>
                    </button>

                    {/* Search Form */}
                    <form onSubmit={handleNewSearch} className="flex-1 max-w-2xl">
                        <div className="relative">
                            <input
                                type="text"
                                value={newQuery}
                                onChange={(e) => setNewQuery(e.target.value)}
                                className="search-input w-full pl-4 pr-12 py-3 text-base rounded-xl text-white"
                                placeholder="Describe your ideal job..."
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-indigo-400 transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </header>

            {/* Content */}
            <div className="flex-1 px-6 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Loading State */}
                    {isLoading && (
                        <LoadingSkeleton location={results?.intent?.location} />
                    )}

                    {/* Error State */}
                    {error && !isLoading && (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-red-500/10 flex items-center justify-center">
                                <svg
                                    className="w-10 h-10 text-red-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3">Connection Error</h2>
                            <p className="text-gray-400 max-w-md mx-auto mb-6">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="search-btn px-6 py-3 rounded-xl text-white font-semibold"
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {/* Results */}
                    {results && !isLoading && (
                        <>
                            {/* Search Summary */}
                            <div className="mb-8">
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <h1 className="text-2xl font-bold text-white">
                                        {results.total_results} opportunities found
                                    </h1>
                                    {results.intent.job_role !== "Not Specified" && (
                                        <span className="px-3 py-1 rounded-full text-sm bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                            {results.intent.job_role}
                                        </span>
                                    )}
                                    {results.intent.location !== "Not Specified" && (
                                        <span className="px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                                            📍 {results.intent.location}
                                        </span>
                                    )}
                                    {results.intent.experience_level !== "Not Specified" && (
                                        <span className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                            {results.intent.experience_level}
                                        </span>
                                    )}
                                </div>

                                {/* Keywords */}
                                {results.intent.keywords.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-gray-500 text-sm">Skills detected:</span>
                                        {results.intent.keywords.slice(0, 6).map((keyword, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-0.5 rounded text-xs bg-white/5 text-gray-400 border border-white/10"
                                            >
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Job Cards Grid */}
                            {results.leads.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {results.leads.map((job, index) => (
                                        <JobCard key={index} {...job} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-500/10 flex items-center justify-center">
                                        <svg
                                            className="w-10 h-10 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-3">No results found</h2>
                                    <p className="text-gray-400 max-w-md mx-auto">
                                        Try adjusting your search or being more specific about the role and location.
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="py-6 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
                    <p>Results aggregated in real-time from job boards across the web</p>
                </div>
            </footer>
        </main>
    );
}

export default function ResultsPage() {
    return (
        <Suspense fallback={<LoadingSkeleton />}>
            <ResultsContent />
        </Suspense>
    );
}
