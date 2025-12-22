"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    // Navigate to results with query
    router.push(`/results?q=${encodeURIComponent(query)}`);
  };

  const exampleQueries = [
    "I am a web developer looking for a job in Lahore",
    "Senior Python engineer seeking remote work",
    "Graphic designer with Photoshop skills in Karachi",
    "Fresh graduate looking for data analyst position",
  ];

  const handleExampleClick = (example: string) => {
    setQuery(example);
  };

  return (
    <main className="min-h-screen flex flex-col relative z-10">
      {/* Header */}
      <header className="w-full py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
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
            <span className="text-2xl font-bold logo-gradient">TalentBridge</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating Icon */}
          <div className="float mb-8">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 glass flex items-center justify-center">
              <svg
                className="w-10 h-10 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">Your skills are </span>
            <span className="logo-gradient">ready</span>
            <span className="text-white">.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            Your opportunity is missing.
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Tell us what you do, and we&apos;ll find who needs you.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  className="w-6 h-6"
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
              </div>

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., I am a web developer looking for a job in Lahore..."
                className="search-input w-full pl-14 pr-36 py-5 text-lg rounded-2xl text-white placeholder-gray-500"
                disabled={isLoading}
              />

              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="search-btn absolute right-3 top-1/2 -translate-y-1/2 px-6 py-3 rounded-xl text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Searching...</span>
                  </div>
                ) : (
                  "Find Jobs"
                )}
              </button>
            </div>
          </form>

          {/* Example Queries */}
          <div className="mt-10">
            <p className="text-sm text-gray-500 mb-4">Try an example:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {exampleQueries.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="px-4 py-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 rounded-full text-gray-400 hover:text-white transition-all duration-300"
                >
                  {example.length > 35 ? example.substring(0, 35) + "..." : example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>Powered by AI • Aggregating opportunities from across the web</p>
        </div>
      </footer>
    </main>
  );
}
