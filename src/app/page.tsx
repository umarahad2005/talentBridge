"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Floating Particle Component - using deterministic values to avoid hydration mismatch
const particlePositions = [
  { left: 5, delay: 0, duration: 15 },
  { left: 15, delay: 2, duration: 18 },
  { left: 25, delay: 4, duration: 16 },
  { left: 35, delay: 6, duration: 20 },
  { left: 45, delay: 1, duration: 17 },
  { left: 55, delay: 8, duration: 19 },
  { left: 65, delay: 3, duration: 22 },
  { left: 75, delay: 10, duration: 15 },
  { left: 85, delay: 5, duration: 21 },
  { left: 95, delay: 12, duration: 18 },
  { left: 10, delay: 7, duration: 16 },
  { left: 30, delay: 9, duration: 20 },
  { left: 50, delay: 11, duration: 17 },
  { left: 70, delay: 13, duration: 19 },
  { left: 90, delay: 14, duration: 22 },
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

// Animated Stats Component
function Stats() {
  const stats = [
    { label: "Jobs Scraped Daily", value: "10K+" },
    { label: "Companies", value: "500+" },
    { label: "Success Rate", value: "94%" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-12 mb-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="stats-badge px-6 py-3 rounded-2xl text-center"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className="text-2xl font-bold logo-gradient">{stat.value}</div>
          <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
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
      {/* Background Effects */}
      <div className="grid-pattern" />
      <Particles />

      {/* Header */}
      <header className="w-full py-6 px-6 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
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

          {/* Beta Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs text-indigo-300 font-medium">AI Powered</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-16 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating Icon */}
          <div className="float mb-10">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-cyan-400/20 glass flex items-center justify-center shadow-2xl shadow-indigo-500/10">
              <svg
                className="w-12 h-12 text-indigo-400"
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            <span className="text-white">Your skills are </span>
            <span className="logo-gradient glow-text">ready</span>
            <span className="text-white">.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-3 font-light">
            Your opportunity is <span className="text-indigo-400">missing</span>.
          </p>

          <p className="text-base md:text-lg text-gray-500 mb-14 max-w-2xl mx-auto leading-relaxed">
            Tell us what you do in plain English, and our AI will scout the entire web for job opportunities that match your skills.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto">
            <div className={`relative transition-all duration-500 ${isFocused ? 'scale-[1.02]' : ''}`}>
              {/* Glow Effect */}
              <div
                className={`absolute rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-xl transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`}
                style={{ inset: 0, zIndex: -1 }}
              />

              {/* Search Container */}
              <div style={{ position: 'relative' }}>
                {/* Search Icon */}
                <div
                  className="text-gray-400 pointer-events-none"
                  style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
                >
                  <svg
                    className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${isFocused ? 'text-indigo-400' : ''}`}
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

                {/* Input */}
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="e.g., I am a web developer looking for a job in Lahore..."
                  className="search-input w-full text-base md:text-lg rounded-2xl text-white placeholder-gray-500"
                  style={{ paddingLeft: '48px', paddingRight: '140px', paddingTop: '18px', paddingBottom: '18px' }}
                  disabled={isLoading}
                />

                {/* Button */}
                <button
                  type="submit"
                  disabled={isLoading || !query.trim()}
                  className="search-btn rounded-xl text-white font-semibold text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', padding: '10px 20px', zIndex: 10 }}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="hidden sm:inline">Searching...</span>
                    </div>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      <span>Find Jobs</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Example Queries */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-5 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Try an example query:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {exampleQueries.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="tag-hover px-5 py-2.5 text-sm bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white"
                >
                  {example.length > 40 ? example.substring(0, 40) + "..." : example}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <Stats />
        </div>
      </div>

      {/* Trusted Sources */}
      <div className="py-8 px-6 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs text-gray-600 mb-4">Aggregating from trusted sources</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            <span className="text-gray-400 font-semibold">LinkedIn</span>
            <span className="text-gray-400 font-semibold">Indeed</span>
            <span className="text-gray-400 font-semibold">Glassdoor</span>
            <span className="text-gray-400 font-semibold">Rozee.pk</span>
            <span className="text-gray-400 font-semibold">Company Sites</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>Powered by <span className="text-indigo-400">Gemini AI</span> • Built for BNU Hackathon 2024</p>
        </div>
      </footer>
    </main>
  );
}
