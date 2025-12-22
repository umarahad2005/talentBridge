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
        return "Explore";
    };

    return (
        <div className="job-card rounded-2xl p-6 flex flex-col h-full">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1 truncate">
                        {title}
                    </h3>
                    <p className="text-indigo-400 font-medium">{company}</p>
                </div>

                {/* Confidence Badge */}
                <div
                    className={`${getConfidenceClass(confidence)} px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap`}
                >
                    {confidence}% • {getConfidenceLabel(confidence)}
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm flex-1 line-clamp-3 mb-5">
                {description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                    </svg>
                    <span className="truncate max-w-[150px]">{source}</span>
                </div>

                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-btn px-5 py-2.5 rounded-xl text-white font-semibold text-sm inline-flex items-center gap-2"
                >
                    Apply Now
                    <svg
                        className="w-4 h-4"
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
