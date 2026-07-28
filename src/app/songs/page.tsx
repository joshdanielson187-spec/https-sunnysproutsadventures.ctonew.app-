import type { Metadata } from "next";
import episodes from "@/data/episodes";

export const metadata: Metadata = {
  title: "Our Songs",
  description:
    "Sing along with Sunny Sprouts Adventures! Browse all our original nursery rhymes and educational songs for ages 2–6.",
  openGraph: {
    title: "Our Songs — Sunny Sprouts Adventures",
    description:
      "Sing along with the Sunny Sprouts! Original nursery rhymes, counting songs, lullabies, and action songs for preschoolers.",
  },
};

// Music type teasers — future content previews, not from episodes
const songTypeTeasers = [
  {
    id: "nursery-rhymes",
    title: "Nursery Rhymes",
    description: "Classic rhymes reimagined with our Sunny Sprouts characters.",
    iconColor: "#FFD93D",
    bgColor: "#FFF9E0",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="#FFD93D" opacity="0.2" />
        <text x="32" y="42" textAnchor="middle" fontSize="32" fill="#D4A800">
          📜
        </text>
      </svg>
    ),
  },
  {
    id: "counting-songs",
    title: "Counting Songs",
    description: "Learn numbers through catchy music and playful rhythms.",
    iconColor: "#6EC6FF",
    bgColor: "#E8F6FF",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="#6EC6FF" opacity="0.2" />
        <text x="32" y="42" textAnchor="middle" fontSize="32" fill="#3A9ED4">
          🔢
        </text>
      </svg>
    ),
  },
  {
    id: "lullabies",
    title: "Lullabies",
    description: "Gentle bedtime songs to help little ones wind down peacefully.",
    iconColor: "#B39DDB",
    bgColor: "#F3EFFB",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="#B39DDB" opacity="0.2" />
        <text x="32" y="42" textAnchor="middle" fontSize="32" fill="#7B5EA7">
          🌙
        </text>
      </svg>
    ),
  },
  {
    id: "action-songs",
    title: "Action Songs",
    description: "Get up and move! Energetic songs that get preschoolers dancing.",
    iconColor: "#FF9A76",
    bgColor: "#FFF2EC",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
        <circle cx="32" cy="32" r="28" fill="#FF9A76" opacity="0.2" />
        <text x="32" y="42" textAnchor="middle" fontSize="32" fill="#D4744E">
          💃
        </text>
      </svg>
    ),
  },
];

export default function SongsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-accent/20 via-white to-white">
        <div className="section-padding max-w-7xl mx-auto text-center">
          {/* Decorative music notes background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <svg className="absolute top-10 left-10 w-16 h-16 text-purple-accent/15" viewBox="0 0 64 64" fill="currentColor">
              <circle cx="16" cy="48" r="6" />
              <circle cx="44" cy="40" r="6" />
              <line x1="22" y1="48" x2="22" y2="12" stroke="currentColor" strokeWidth="3" />
              <line x1="50" y1="40" x2="50" y2="8" stroke="currentColor" strokeWidth="3" />
            </svg>
            <svg className="absolute top-20 right-16 w-12 h-12 text-sky-blue/15" viewBox="0 0 64 64" fill="currentColor">
              <circle cx="18" cy="44" r="5" />
              <circle cx="44" cy="36" r="5" />
              <line x1="23" y1="44" x2="23" y2="16" stroke="currentColor" strokeWidth="2.5" />
              <line x1="49" y1="36" x2="49" y2="10" stroke="currentColor" strokeWidth="2.5" />
            </svg>
            <svg className="absolute bottom-10 left-1/4 w-10 h-10 text-soft-orange/15" viewBox="0 0 64 64" fill="currentColor">
              <circle cx="20" cy="46" r="5" />
              <circle cx="42" cy="38" r="5" />
              <line x1="25" y1="46" x2="25" y2="14" stroke="currentColor" strokeWidth="2.5" />
              <line x1="47" y1="38" x2="47" y2="12" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </div>

          <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-800 mb-4">
            Our Songs
          </h1>
          <p className="relative text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Sing along with the Sunny Sprouts!
          </p>
        </div>
      </section>

      {/* Episodes as song cards */}
      <section className="section-padding max-w-7xl mx-auto pt-8">
        <h2 className="sr-only">All Songs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {episodes.map((ep) => {
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
                    {/* Dot pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%" aria-hidden="true">
                        <defs>
                          <pattern id={`song-dots-${ep.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="2" fill="white" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#song-dots-${ep.id})`} />
                      </svg>
                    </div>

                    {/* Music note icon */}
                    <div
                      className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full
                                 bg-white/90 flex items-center justify-center
                                 shadow-lg transition-transform duration-200
                                 group-hover:scale-110"
                    >
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10"
                        viewBox="0 0 48 48"
                        fill={ep.thumbnailColor}
                        aria-hidden="true"
                      >
                        <circle cx="14" cy="34" r="5" fill={ep.thumbnailColor} />
                        <circle cx="34" cy="30" r="5" fill={ep.thumbnailColor} />
                        <line x1="19" y1="34" x2="19" y2="8" stroke={ep.thumbnailColor} strokeWidth="3" strokeLinecap="round" />
                        <line x1="39" y1="30" x2="39" y2="6" stroke={ep.thumbnailColor} strokeWidth="3" strokeLinecap="round" />
                        <line x1="17" y1="12" x2="38" y2="10" stroke={ep.thumbnailColor} strokeWidth="2.5" strokeLinecap="round" />
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
                  {/* Dot pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" aria-hidden="true">
                      <defs>
                        <pattern id={`song-dots-${ep.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="2" fill="white" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#song-dots-${ep.id})`} />
                    </svg>
                  </div>

                  {/* Music note icon */}
                  <div
                    className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full
                               bg-white/90 flex items-center justify-center
                               shadow-lg transition-transform duration-200
                               group-hover:scale-110"
                  >
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      viewBox="0 0 48 48"
                      fill={ep.thumbnailColor}
                      aria-hidden="true"
                    >
                      <circle cx="14" cy="34" r="5" fill={ep.thumbnailColor} />
                      <circle cx="34" cy="30" r="5" fill={ep.thumbnailColor} />
                      <line x1="19" y1="34" x2="19" y2="8" stroke={ep.thumbnailColor} strokeWidth="3" strokeLinecap="round" />
                      <line x1="39" y1="30" x2="39" y2="6" stroke={ep.thumbnailColor} strokeWidth="3" strokeLinecap="round" />
                      <line x1="17" y1="12" x2="38" y2="10" stroke={ep.thumbnailColor} strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Coming Soon badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-display font-bold
                                    bg-white/90 text-gray-600 shadow-sm">
                      Coming Soon!
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
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full
                                  text-xs font-body font-semibold bg-gray-100 text-gray-600">
                    Ages {ep.ageRange}
                  </span>
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full
                               text-xs font-body font-semibold"
                    style={{
                      backgroundColor: `${ep.thumbnailColor}18`,
                      color: ep.thumbnailColor,
                    }}
                  >
                    {ep.learningTopic}
                  </span>
                </div>

                <p className="text-sm text-gray-500 font-body leading-relaxed">
                  {ep.description}
                </p>
              </div>
            </article>
          ); })}
        </div>
      </section>

      {/* More Songs Coming Soon section */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-800 mb-3">
            More Songs Coming Soon!
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto text-balance">
            We&apos;re busy creating even more musical adventures for your little ones.
            Here&apos;s a sneak peek at what&apos;s on the way!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {songTypeTeasers.map((teaser) => (
            <article
              key={teaser.id}
              className="group relative rounded-3xl p-6 border-2 border-gray-100
                         transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:border-gray-200
                         flex flex-col items-center text-center"
              style={{ backgroundColor: teaser.bgColor }}
              aria-label={`${teaser.title} — coming soon`}
            >
              <div className="mb-4">
                {teaser.icon}
              </div>
              <h3 className="font-display font-bold text-gray-800 text-lg mb-2">
                {teaser.title}
              </h3>
              <p className="text-sm text-gray-500 font-body leading-relaxed mb-4 flex-1">
                {teaser.description}
              </p>
              <span
                className="px-3 py-1 rounded-full text-xs font-display font-bold
                           shadow-sm"
                style={{ backgroundColor: `${teaser.iconColor}30`, color: teaser.iconColor }}
              >
                Coming Soon!
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
