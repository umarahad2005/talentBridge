interface JobCardProps {
    title: string;
    company: string;
    description: string;
    url: string;
    source: string;
    confidence: number;
}

export default function JobCard({
    title,
    company,
    description,
    url,
    source,
    confidence,
}: JobCardProps) {
    const getConfidenceClass = (score: number) => {
        if (score >= 70) return "confidence-high";
        if (score >= 50) return "confidence-medium";
        return "confidence-low";
    };

    const getConfidenceLabel = (score: number) => {
        if (score >= 80) return "Excellent Match";
        if (score >= 70) return "Great Match";
        if (score >= 60) return "Good Match";
        if (score >= 50) return "Possible Match";
        return "Worth Exploring";
    };

    const getConfidenceIcon = (score: number) => {
        if (score >= 70) {
            return (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            );
        }
        if (score >= 50) {
            return (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        }
        return (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        );
    };

    // Get source icon
    const getSourceIcon = () => {
        const sourceLower = source.toLowerCase();
        if (sourceLower.includes('linkedin')) {
            return (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            );
        }
        if (sourceLower.includes('indeed')) {
            return (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.566 21.561v-8.985c.568.088 1.136.132 1.705.132 3.715 0 6.729-2.482 6.729-6.198 0-.825-.22-1.694-.66-2.375-.704 3.628-3.76 5.967-7.181 5.967-.615 0-1.187-.088-1.715-.22V.132c-.572 0-1.143.044-1.715.132v21.297c.572.088 1.143.132 1.715.132.572 0 1.143-.044 1.715-.132h-.593z" />
                </svg>
            );
        }
        return (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        );
    };

    return (
        <div className="job-card rounded-2xl p-6 flex flex-col h-full group">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-indigo-300 transition-colors duration-300">
                        {title}
                    </h3>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold">
                            {company.charAt(0).toUpperCase()}
                        </div>
                        <p className="text-indigo-400 font-medium text-sm">{company}</p>
                    </div>
                </div>

                {/* Confidence Badge */}
                <div
                    className={`${getConfidenceClass(confidence)} px-3 py-2 rounded-xl text-sm font-semibold whitespace-nowrap flex items-center gap-2`}
                >
                    {getConfidenceIcon(confidence)}
                    <span>{confidence}%</span>
                </div>
            </div>

            {/* Match Label */}
            <div className="mb-3">
                <span className={`text-xs font-medium ${confidence >= 70 ? 'text-emerald-400' : confidence >= 50 ? 'text-amber-400' : 'text-gray-400'}`}>
                    {getConfidenceLabel(confidence)}
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm flex-1 line-clamp-3 mb-6 leading-relaxed">
                {description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    {getSourceIcon()}
                    <span className="truncate max-w-[120px]">{source}</span>
                </div>

                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-btn px-5 py-2.5 rounded-xl text-white font-semibold text-sm inline-flex items-center gap-2 relative z-10"
                >
                    <span>Apply Now</span>
                    <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}
