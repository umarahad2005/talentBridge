"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();

    return (
        <main className="min-h-screen flex flex-col relative z-10">
            {/* Background Effects */}
            <div className="grid-pattern" />

            {/* Header */}
            <header className="w-full py-6 px-6 relative z-20">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button
                        onClick={() => router.push("/")}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
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
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 relative z-20">
                <div className="text-center max-w-2xl mx-auto">
                    {/* Profile Icon */}
                    <div className="float mb-10">
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-1 shadow-2xl shadow-indigo-500/30">
                            <div className="w-full h-full rounded-full bg-[#0a0a12] flex items-center justify-center">
                                <span className="text-5xl font-bold logo-gradient">UA</span>
                            </div>
                        </div>
                    </div>

                    {/* Made with Love */}
                    <p className="text-lg text-gray-400 mb-4 flex items-center justify-center gap-2">
                        Made with{" "}
                        <svg
                            className="w-5 h-5 text-red-500 animate-pulse"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>{" "}
                        by
                    </p>

                    {/* Name */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="logo-gradient glow-text">Umar Ahad Uddin Ahmed Usmani</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-xl text-gray-400 mb-12">
                        Full-Stack Developer • AI Enthusiast • Problem Solver
                    </p>

                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {/* Website */}
                        <a
                            href="https://umarahadusmani.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tag-hover flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all">
                                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-gray-500">Website</div>
                                <div className="font-medium">umarahadusmani.vercel.app</div>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/umarahadusmani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tag-hover flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-gray-500">LinkedIn</div>
                                <div className="font-medium">umarahadusmani</div>
                            </div>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/umarahad2005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tag-hover flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center group-hover:from-gray-500/30 group-hover:to-gray-600/30 transition-all">
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-gray-500">GitHub</div>
                                <div className="font-medium">umarahad2005</div>
                            </div>
                        </a>
                    </div>

                    {/* Project Info */}
                    <div className="glass rounded-3xl p-8 text-left">
                        <h2 className="text-2xl font-bold text-white mb-4">About TalentBridge</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            TalentBridge is a natural language job aggregator built for the <span className="text-indigo-400">BNU Hackathon 2024</span>.
                            It uses AI to understand your skills and preferences, then searches across multiple job boards
                            to find opportunities that match your profile.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 rounded-xl text-sm bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                                Next.js 15
                            </span>
                            <span className="px-4 py-2 rounded-xl text-sm bg-purple-500/15 text-purple-300 border border-purple-500/25">
                                FastAPI
                            </span>
                            <span className="px-4 py-2 rounded-xl text-sm bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
                                Gemini AI
                            </span>
                            <span className="px-4 py-2 rounded-xl text-sm bg-green-500/15 text-green-300 border border-green-500/25">
                                Tailwind CSS
                            </span>
                        </div>
                    </div>

                    {/* Back Button */}
                    <button
                        onClick={() => router.push("/")}
                        className="mt-12 search-btn px-8 py-4 rounded-xl text-white font-semibold inline-flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-6 px-6 border-t border-white/5 relative z-20">
                <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
                    <p>© 2024 Umar Ahad Uddin Ahmed Usmani. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
