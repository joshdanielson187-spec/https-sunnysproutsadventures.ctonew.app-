import type { Metadata } from "next";
import activities from "@/data/activities";

export const metadata: Metadata = {
  title: "Free Printable Activities",
  description:
    "Free printable activities for preschoolers — coloring pages, tracing sheets, matching games, mazes, and more from Sunny Sprouts Adventures.",
  openGraph: {
    title: "Free Printable Activities — Sunny Sprouts Adventures",
    description:
      "Download, print, and play! Free coloring pages, alphabet tracing, number tracing, matching games, and mazes for ages 2–6.",
  },
};

// Custom SVG icons for each activity type
function ActivityIcon({
  type,
  color,
}: {
  type: string;
  color: string;
}) {
  const iconMap: Record<string, React.ReactNode> = {
    Coloring: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
        {/* Crayon 1 */}
        <rect x="8" y="28" width="6" height="26" rx="2" fill={color} transform="rotate(-15 8 28)" />
        <rect x="7" y="20" width="8" height="10" rx="2" fill={color} transform="rotate(-15 7 20)" opacity="0.7" />
        {/* Crayon 2 */}
        <rect x="24" y="24" width="6" height="30" rx="2" fill={color} transform="rotate(5 24 24)" opacity="0.85" />
        <rect x="23" y="16" width="8" height="10" rx="2" fill={color} transform="rotate(5 23 16)" opacity="0.6" />
        {/* Crayon 3 */}
        <rect x="42" y="26" width="6" height="28" rx="2" fill={color} transform="rotate(-5 42 26)" opacity="0.75" />
        <rect x="41" y="18" width="8" height="10" rx="2" fill={color} transform="rotate(-5 41 18)" opacity="0.5" />
      </svg>
    ),
    Tracing: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
        {/* Pencil */}
        <rect x="20" y="44" width="24" height="6" rx="2" fill="#D4A574" />
        <polygon points="20,44 44,44 48,16 16,16" fill={color} />
        <polygon points="16,16 48,16 44,6 20,6" fill="#F5DEB3" />
        <rect x="30" y="2" width="4" height="8" rx="2" fill="#FFB5C5" />
        {/* Dashed line */}
        <line x1="12" y1="56" x2="52" y2="56" stroke={color} strokeWidth="2" strokeDasharray="4 3" />
      </svg>
    ),
    Matching: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
        {/* Card 1 */}
        <rect x="4" y="14" width="24" height="32" rx="4" fill={color} opacity="0.5" />
        <circle cx="16" cy="30" r="6" fill="white" opacity="0.9" />
        {/* Card 2 */}
        <rect x="36" y="18" width="24" height="32" rx="4" fill={color} />
        <circle cx="48" cy="34" r="6" fill="white" opacity="0.9" />
        {/* Dashed connection line */}
        <path d="M22 30 Q29 22 36 26" stroke={color} strokeWidth="2" strokeDasharray="4 2" fill="none" />
      </svg>
    ),
    Puzzle: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
        {/* Puzzle piece 1 */}
        <path
          d="M8 12 h16 v-4 a4 4 0 0 1 4 4 v4 h8 v10 h-4 a4 4 0 0 0 0 8 h4 v10 h-24 z"
          fill={color}
          opacity="0.5"
        />
        {/* Puzzle piece 2 */}
        <path
          d="M32 22 v16 a4 4 0 0 0 4 4 h8 v8 h-8 v4 a4 4 0 0 1 -4 -4 v-4 h-4 v-8 h4 a4 4 0 0 0 0 -8 h-4 v-8 z"
          fill={color}
          opacity="0.8"
        />
      </svg>
    ),
  };

  return <>{iconMap[type] ?? iconMap.Puzzle}</>;
}

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-grass-green/20 via-white to-white">
        <div className="section-padding max-w-7xl mx-auto text-center">
          {/* Decorative shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <svg className="absolute top-8 left-12 w-14 h-14 text-sunny-yellow/20" viewBox="0 0 48 48" fill="currentColor">
              <circle cx="24" cy="24" r="20" />
            </svg>
            <svg className="absolute top-16 right-20 w-10 h-10 text-soft-orange/20" viewBox="0 0 48 48" fill="currentColor">
              <rect x="4" y="4" width="40" height="40" rx="8" />
            </svg>
            <svg className="absolute bottom-8 left-1/3 w-12 h-12 text-purple-accent/20" viewBox="0 0 48 48" fill="currentColor">
              <polygon points="24,4 44,40 4,40" />
            </svg>
          </div>

          <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-800 mb-4">
            Free Printable Activities
          </h1>
          <p className="relative text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Download, print, and play! More activities coming soon.
          </p>
        </div>
      </section>

      {/* Activity cards grid */}
      <section className="section-padding max-w-7xl mx-auto pt-8">
        <h2 className="sr-only">Available Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {activities.map((activity) => (
            <article
              key={activity.id}
              className="group bg-white rounded-3xl overflow-hidden
                         border-2 border-gray-100
                         transition-all duration-300 ease-out
                         hover:shadow-xl hover:-translate-y-1 hover:border-gray-200
                         flex flex-col"
              aria-label={`${activity.title} — ${activity.description}`}
            >
              {/* Activity icon area */}
              <div
                className="relative py-8 flex items-center justify-center"
                style={{ backgroundColor: `${activity.thumbnailColor}18` }}
                aria-hidden="true"
              >
                <ActivityIcon type={activity.type} color={activity.thumbnailColor} />

                {/* Availability badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-display font-bold shadow-sm ${
                    activity.isAvailable
                      ? "bg-grass-green text-white"
                      : "bg-white/90 text-gray-600"
                  }`}>
                    {activity.isAvailable ? "Available!" : "Coming Soon!"}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-gray-800 text-lg mb-2">
                  {activity.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full
                                  text-xs font-body font-semibold bg-gray-100 text-gray-600">
                    Ages {activity.ageRange}
                  </span>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full
                               text-xs font-body font-semibold"
                    style={{
                      backgroundColor: `${activity.thumbnailColor}18`,
                      color: activity.thumbnailColor,
                    }}
                  >
                    {activity.type}
                  </span>
                </div>

                <p className="text-sm text-gray-500 font-body leading-relaxed mb-5 flex-1">
                  {activity.description}
                </p>

                {/* Download button */}
                <div className="relative group/btn">
                  {activity.isAvailable && activity.pdfUrl ? (
                    <a
                      href={activity.pdfUrl}
                      download
                      className="w-full py-2.5 px-5 rounded-2xl font-display font-semibold text-sm
                                 bg-grass-green text-white
                                 hover:bg-green-600 transition-colors duration-200
                                 inline-block text-center shadow-sm hover:shadow-md"
                      aria-label={`Download ${activity.title} PDF`}
                    >
                      Download PDF
                    </a>
                  ) : (
                    <>
                      <button
                        disabled
                        className="w-full py-2.5 px-5 rounded-2xl font-display font-semibold text-sm
                                   bg-gray-200 text-gray-400 cursor-not-allowed
                                   transition-colors duration-200"
                        aria-label={`Download ${activity.title} PDF — available soon`}
                      >
                        Download PDF
                      </button>
                      {/* Tooltip */}
                      <div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5
                                   bg-gray-800 text-white text-xs rounded-lg opacity-0
                                   group-hover/btn:opacity-100 transition-opacity duration-200
                                   pointer-events-none whitespace-nowrap z-20"
                        role="tooltip"
                      >
                        Available soon!
                        <div className="absolute top-full left-1/2 -translate-x-1/2
                                        border-4 border-transparent border-t-gray-800" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Parent notice */}
      <section className="section-padding max-w-3xl mx-auto text-center pt-0 pb-16">
        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-5 h-5 text-soft-orange" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="font-display font-semibold text-sm text-gray-600">
              Parent Note
            </span>
          </div>
          <p className="text-gray-500 font-body leading-relaxed">
            All activities are designed for children ages 2–6. Adult supervision
            recommended for cutting and small parts.
          </p>
        </div>
      </section>
    </div>
  );
}
