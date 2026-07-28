"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import episodes from "@/data/episodes";
import categories from "@/data/categories";

// Helper to map category id to category details
function getCategoryDetails(categoryId: string) {
  return categories.find((c) => c.id === categoryId);
}

function WatchContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredEpisodes = useMemo(() => {
    if (activeCategory === "all") return episodes;
    return episodes.filter((ep) => ep.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-blue/20 via-white to-white">
        <div className="section-padding max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-800 mb-4">
            Watch &amp; Learn
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Sing, dance, and learn with our original preschool songs!
          </p>
        </div>
      </section>

      {/* Category filter bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="relative">
          {/* Scrollable pill container */}
          <div
            className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide
                        -mx-4 px-4 sm:mx-0 sm:px-0"
            role="tablist"
            aria-label="Filter videos by category"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* All Videos pill */}
            <button
              role="tab"
              aria-selected={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full font-display font-semibold text-sm
                         transition-all duration-200 whitespace-nowrap
                         focus:outline-none focus:ring-4 focus:ring-sunny-yellow/50
                         ${
                           activeCategory === "all"
                             ? "bg-sunny-yellow text-gray-800 shadow-md"
                             : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300 hover:text-gray-800"
                         }`}
            >
              🎬 All Videos
            </button>

            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full font-display font-semibold text-sm
                             transition-all duration-200 whitespace-nowrap
                             focus:outline-none focus:ring-4 focus:ring-opacity-50
                             ${
                               isActive
                                 ? "shadow-md text-white"
                                 : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300 hover:text-gray-800"
                             }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: cat.color,
                          // @ts-ignore CSS custom property for focus ring
                          "--tw-ring-color": cat.color,
                        } as React.CSSProperties
                      : { "--tw-ring-color": cat.color } as React.CSSProperties
                  }
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Gradient fade on right edge (visual hint for scrollability) */}
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-12
                       bg-gradient-to-l from-white to-transparent sm:hidden"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Video grid */}
      <section className="section-padding max-w-7xl mx-auto pt-4">
        {filteredEpisodes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEpisodes.map((ep) => {
              const cat = getCategoryDetails(ep.category);
              const hasVideo = ep.youtubeUrl && ep.youtubeUrl.length > 0;
              return (
                <article
                  key={ep.id}
                  className="group bg-white rounded-3xl overflow-hidden
                             border-2 border-gray-100
                             transition-all duration-300 ease-out
                             hover:shadow-xl hover:-translate-y-1 hover:border-gray-200"
                  aria-label={`${ep.title} — ${ep.learningTopic}, Ages ${ep.ageRange}`}
                >
                  {/* Thumbnail */}
                  {hasVideo ? (
                    <a
                      href={ep.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch ${ep.title} on YouTube (opens in new tab)`}
                      className="block"
                    >
                      <div
                        className="relative aspect-video flex items-center justify-center cursor-pointer"
                        style={{ backgroundColor: ep.thumbnailColor }}
                        aria-hidden="true"
                      >
                        {/* Decorative pattern overlay */}
                        <div className="absolute inset-0 opacity-10">
                          <svg width="100%" height="100%" aria-hidden="true">
                            <defs>
                              <pattern id={`dots-${ep.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="10" cy="10" r="2" fill="white" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill={`url(#dots-${ep.id})`} />
                          </svg>
                        </div>

                        {/* Play button */}
                        <div
                          className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full
                                     bg-white/90 flex items-center justify-center
                                     shadow-lg transition-transform duration-200
                                     group-hover:scale-110"
                        >
                          <svg
                            className="w-7 h-7 sm:w-9 sm:h-9 translate-x-0.5"
                            viewBox="0 0 24 24"
                            fill={ep.thumbnailColor}
                            aria-hidden="true"
                          >
                            <polygon points="8,5 19,12 8,19" />
                          </svg>
                        </div>

                        {/* Watch Now badge */}
                        <div className="absolute top-3 right-3 z-10">
                          <span className="px-3 py-1 rounded-full text-xs font-display font-bold
                                          bg-green-500 text-white shadow-sm">
                            Watch Now
                          </span>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="relative aspect-video flex items-center justify-center"
                      style={{ backgroundColor: ep.thumbnailColor }}
                      aria-hidden="true"
                    >
                      {/* Decorative pattern overlay */}
                      <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%" aria-hidden="true">
                          <defs>
                            <pattern id={`dots-${ep.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                              <circle cx="10" cy="10" r="2" fill="white" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#dots-${ep.id})`} />
                        </svg>
                      </div>

                      {/* Play button */}
                      <div
                        className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full
                                   bg-white/90 flex items-center justify-center
                                   shadow-lg transition-transform duration-200
                                   group-hover:scale-110"
                      >
                        <svg
                          className="w-7 h-7 sm:w-9 sm:h-9 translate-x-0.5"
                          viewBox="0 0 24 24"
                          fill={ep.thumbnailColor}
                          aria-hidden="true"
                        >
                          <polygon points="8,5 19,12 8,19" />
                        </svg>
                      </div>

                      {/* New Episode Soon! badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-3 py-1 rounded-full text-xs font-display font-bold
                                        bg-white/90 text-gray-600 shadow-sm">
                          New Episode Soon!
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card body */}
                  <div className="p-5">
                    <h3 className="font-display font-bold text-gray-800 text-lg mb-2">
                      {ep.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {/* Age range */}
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full
                                      text-xs font-body font-semibold bg-gray-100 text-gray-600">
                        Ages {ep.ageRange}
                      </span>

                      {/* Learning topic */}
                      {cat && (
                        <span
                          className="inline-flex items-center px-2.5 py-1 rounded-full
                                    text-xs font-body font-semibold"
                          style={{
                            backgroundColor: `${cat.color}18`,
                            color: cat.color,
                          }}
                        >
                          {ep.learningTopic}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 font-body leading-relaxed">
                      {ep.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16">
            <div className="text-5xl mb-4" aria-hidden="true">
              🎵
            </div>
            <h3 className="text-xl font-display font-bold text-gray-700 mb-2">
              No videos in this category yet
            </h3>
            <p className="text-gray-500 font-body">
              Check back soon — new episodes are on the way!
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-6 btn-primary"
            >
              View All Videos
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

// Fallback for Suspense
function WatchFallback() {
  return (
    <div className="min-h-screen">
      <section className="section-padding max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-800 mb-4">
          Watch &amp; Learn
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-balance">
          Sing, dance, and learn with our original preschool songs!
        </p>
      </section>
      <section className="section-padding max-w-7xl mx-auto text-center">
        <div className="animate-pulse">
          <div className="flex gap-3 justify-center mb-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-24 h-10 rounded-full bg-gray-200"
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-3xl bg-gray-100 h-64" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function WatchPage() {
  return (
    <Suspense fallback={<WatchFallback />}>
      <WatchContent />
    </Suspense>
  );
}
