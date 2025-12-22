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

// Floating Particle Component - deterministic values
const particlePositions = [
    { left: 8, delay: 1, duration: 16 },
    { left: 22, delay: 3, duration: 19 },
    { left: 38, delay: 5, duration: 17 },
    { left: 52, delay: 7, duration: 21 },
    { left: 68, delay: 2, duration: 18 },
    { left: 82, delay: 9, duration: 20 },
    { left: 12, delay: 4, duration: 15 },
    { left: 45, delay: 6, duration: 22 },
    { left: 75, delay: 8, duration: 16 },
    { left: 92, delay: 10, duration: 19 },
];

function Particles() {
    return (
        <div className="particles">
            {particlePositions.map((p, i) => (
                <div
                    key={i}
                    className="particle"
                    style={{
                        left: `${p.left}%`,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`,
                    }}
                />
            ))}
        </div>
    );
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
            {/* Background Effects */}
            <div className="grid-pattern" />
            <Particles />

            {/* Header with Search */}
            <header className="w-full py-4 px-6 glass sticky top-0 z-50 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex items-center gap-6">
                    {/* Logo */}
                    <button
                        onClick={() => router.push("/")}
                        className="flex items-center gap-3 shrink-0 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
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
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-400 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={newQuery}
                                onChange={(e) => setNewQuery(e.target.value)}
                                className="search-input w-full pl-12 pr-12 py-3 text-base rounded-xl text-white"
                                placeholder="Describe your ideal job..."
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-indigo-400 transition-colors hover:bg-indigo-500/10 rounded-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </header>

            {/* Content */}
            <div className="flex-1 px-6 py-8 relative z-20">
                <div className="max-w-7xl mx-auto">
                    {/* Loading State */}
                    {isLoading && (
                        <LoadingSkeleton location={results?.intent?.location} />
                    )}

                    {/* Error State */}
                    {error && !isLoading && (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-red-500/20 to-orange-500/10 flex items-center justify-center">
                                <svg
                                    className="w-12 h-12 text-red-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3">Connection Error</h2>
                            <p className="text-gray-400 max-w-md mx-auto mb-8">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="search-btn px-8 py-4 rounded-xl text-white font-semibold inline-flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Try Again
                            </button>
                        </div>
                    )}

                    {/* Results */}
                    {results && !isLoading && (
                        <>
                            {/* Search Summary */}
                            <div className="mb-10">
                                <div className="flex flex-wrap items-center gap-4 mb-5">
                                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                                        Found <span className="logo-gradient">{results.total_results}</span> opportunities
                                    </h1>
                                </div>

                                {/* Intent Tags */}
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {results.intent.job_role !== "Not Specified" && (
                                        <span className="tag-hover px-4 py-2 rounded-xl text-sm bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            {results.intent.job_role}
                                        </span>
                                    )}
                                    {results.intent.location !== "Not Specified" && (
                                        <span className="tag-hover px-4 py-2 rounded-xl text-sm bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {results.intent.location}
                                        </span>
                                    )}
                                    {results.intent.experience_level !== "Not Specified" && (
                                        <span className="tag-hover px-4 py-2 rounded-xl text-sm bg-purple-500/15 text-purple-300 border border-purple-500/25 flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                            {results.intent.experience_level}
                                        </span>
                                    )}
                                </div>

                                {/* Keywords */}
                                {results.intent.keywords.length > 0 && (
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-gray-500 text-sm mr-1">Skills:</span>
                                        {results.intent.keywords.slice(0, 8).map((keyword, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-lg text-xs bg-white/5 text-gray-400 border border-white/10 hover:border-indigo-500/30 hover:text-gray-300 transition-all cursor-default"
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
                                        <div
                                            key={index}
                                            className="animate-fadeIn"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            <JobCard {...job} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-gray-500/20 to-gray-600/10 flex items-center justify-center">
                                        <svg
                                            className="w-12 h-12 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
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
            <footer className="py-6 px-6 border-t border-white/5 relative z-20">
                <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
                    <p>Results aggregated in real-time • Powered by <span className="text-indigo-400">Gemini AI</span></p>
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
