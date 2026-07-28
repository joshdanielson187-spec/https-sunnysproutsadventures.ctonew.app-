import type { Metadata } from "next";
import Link from "next/link";
import episodes from "@/data/episodes";
import categories from "@/data/categories";
import characters from "@/data/characters";

export const metadata: Metadata = {
  title: {
    absolute: "Sunny Sprouts Adventures | Original Nursery Rhymes and Preschool Songs",
  },
  description:
    "Sing, dance, and learn with Sunny Sprouts Adventures—original nursery rhymes, educational songs, lovable characters, and preschool activities for children ages 2–6.",
  openGraph: {
    title: "Sunny Sprouts Adventures | Original Nursery Rhymes and Preschool Songs",
    description:
      "Sing, dance, and learn with Sunny Sprouts Adventures—original nursery rhymes, educational songs, lovable characters, and preschool activities for children ages 2–6.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Sunny Sprouts Adventures | Original Nursery Rhymes and Preschool Songs",
    description:
      "Sing, dance, and learn with Sunny Sprouts Adventures—original nursery rhymes, educational songs, lovable characters, and preschool activities for children ages 2–6.",
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Map category id → name for display on episode cards */
function getCategoryName(catId: string): string {
  return categories.find((c) => c.id === catId)?.name ?? catId;
}

/** Simple float animation keyframes embedded via a style tag (no JS). */
const floatKeyframes = `
@keyframes float-1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
@keyframes float-2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
@keyframes float-3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
@keyframes float-4 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
@keyframes cloud-drift { 0%{transform:translateX(0)} 100%{transform:translateX(-60px)} }
`;

/* ------------------------------------------------------------------ */
/*  Section: Hero                                                      */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Inline keyframes */}
      <style dangerouslySetInnerHTML={{ __html: floatKeyframes }} />

      {/* ---------- Background SVG ---------- */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6EC6FF" />
            <stop offset="70%" stopColor="#B3E0FF" />
            <stop offset="100%" stopColor="#E8F8F5" />
          </linearGradient>
          <linearGradient id="meadowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7BC67E" />
            <stop offset="100%" stopColor="#5DAA61" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="50%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#FFD93D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFD93D" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sky */}
        <rect width="1440" height="900" fill="url(#skyGrad)" />
        {/* Sun glow */}
        <circle cx="420" cy="190" r="280" fill="url(#sunGlow)" />
        <circle cx="420" cy="190" r="60" fill="#FFD93D" opacity="0.9" />

        {/* Rainbow */}
        <path
          d="M 250 720 Q 720 50 1190 720"
          fill="none"
          stroke="#FF6B6B"
          strokeWidth="18"
          opacity="0.55"
        />
        <path
          d="M 268 720 Q 720 72 1172 720"
          fill="none"
          stroke="#FF9A76"
          strokeWidth="16"
          opacity="0.55"
        />
        <path
          d="M 286 720 Q 720 94 1154 720"
          fill="none"
          stroke="#FFD93D"
          strokeWidth="16"
          opacity="0.55"
        />
        <path
          d="M 304 720 Q 720 116 1136 720"
          fill="none"
          stroke="#7BC67E"
          strokeWidth="16"
          opacity="0.55"
        />
        <path
          d="M 322 720 Q 720 138 1118 720"
          fill="none"
          stroke="#6EC6FF"
          strokeWidth="16"
          opacity="0.55"
        />
        <path
          d="M 340 720 Q 720 160 1100 720"
          fill="none"
          stroke="#B39DDB"
          strokeWidth="14"
          opacity="0.55"
        />

        {/* Clouds */}
        <g opacity="0.7">
          <ellipse cx="200" cy="140" rx="90" ry="35" fill="white" />
          <ellipse cx="260" cy="125" rx="70" ry="40" fill="white" />
          <ellipse cx="310" cy="140" rx="60" ry="30" fill="white" />
        </g>
        <g opacity="0.5" style={{ animation: "cloud-drift 20s ease-in-out infinite alternate" }}>
          <ellipse cx="1050" cy="100" rx="80" ry="30" fill="white" />
          <ellipse cx="1100" cy="85" rx="65" ry="38" fill="white" />
          <ellipse cx="1160" cy="100" rx="55" ry="28" fill="white" />
        </g>
        <g opacity="0.4">
          <ellipse cx="700" cy="200" rx="60" ry="22" fill="white" />
          <ellipse cx="740" cy="190" rx="50" ry="28" fill="white" />
        </g>

        {/* Trees */}
        <polygon points="100,620 140,500 180,620" fill="#5DAA61" />
        <polygon points="70,640 140,480 210,640" fill="#4D9A51" />
        <rect x="130" y="620" width="16" height="20" fill="#8B5E3C" rx="3" />

        <polygon points="1200,600 1240,480 1280,600" fill="#5DAA61" />
        <polygon points="1170,620 1240,460 1310,620" fill="#4D9A51" />
        <rect x="1232" y="600" width="16" height="20" fill="#8B5E3C" rx="3" />

        <polygon points="500,610 530,510 560,610" fill="#5DAA61" />
        <polygon points="480,625 530,490 580,625" fill="#4D9A51" />
        <rect x="522" y="610" width="16" height="15" fill="#8B5E3C" rx="3" />

        {/* Meadow ground */}
        <ellipse cx="720" cy="880" rx="900" ry="200" fill="url(#meadowGrad)" />
        <rect x="0" y="720" width="1440" height="180" fill="url(#meadowGrad)" />

        {/* Simple flowers */}
        {[
          [180, 690],
          [350, 700],
          [600, 680],
          [850, 695],
          [1050, 685],
          [1300, 690],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill={["#FFB5C5", "#FFD93D", "#FF9A76", "#FFB5C5", "#FFD93D", "#B39DDB"][i]} />
            <circle cx={Number(cx) + 6} cy={Number(cy) - 4} r="5" fill={["#FFB5C5", "#FFD93D", "#FF9A76", "#FFB5C5", "#FFD93D", "#B39DDB"][i]} />
            <circle cx={Number(cx) - 5} cy={Number(cy) - 5} r="5" fill={["#FFB5C5", "#FFD93D", "#FF9A76", "#FFB5C5", "#FFD93D", "#B39DDB"][i]} />
            <circle cx={Number(cx) + 1} cy={Number(cy) - 9} r="4" fill={["#FFB5C5", "#FFD93D", "#FF9A76", "#FFB5C5", "#FFD93D", "#B39DDB"][i]} />
            <circle cx={Number(cx)} cy={Number(cy) + 2} r="3" fill="#7BC67E" />
          </g>
        ))}

        {/* Character silhouettes (mini) scattered */}
        {/* Benny Bear — warm brown */}
        <g transform="translate(320, 620)" opacity="0.8" style={{ animation: "float-1 3s ease-in-out infinite" }}>
          <ellipse cx="0" cy="15" rx="12" ry="10" fill="#8B6914" />
          <circle cx="0" cy="0" r="10" fill="#A0782C" />
          <circle cx="-4" cy="-4" r="3" fill="#8B6914" />
          <circle cx="4" cy="-4" r="3" fill="#8B6914" />
        </g>
        {/* Rosie Rabbit — soft orange */}
        <g transform="translate(620, 630)" opacity="0.8" style={{ animation: "float-2 3.5s ease-in-out infinite" }}>
          <ellipse cx="0" cy="12" rx="10" ry="9" fill="#E88760" />
          <circle cx="0" cy="-1" r="9" fill="#FF9A76" />
          <ellipse cx="-3" cy="-8" rx="2" ry="5" fill="#FF9A76" />
          <ellipse cx="3" cy="-8" rx="2" ry="5" fill="#FF9A76" />
        </g>
        {/* Penny Panda — purple */}
        <g transform="translate(880, 625)" opacity="0.8" style={{ animation: "float-3 2.8s ease-in-out infinite" }}>
          <ellipse cx="0" cy="12" rx="11" ry="10" fill="#9B8EC0" />
          <circle cx="0" cy="0" r="10" fill="#B39DDB" />
          <circle cx="-4" cy="-2" r="3" fill="#4A4458" />
          <circle cx="4" cy="-2" r="3" fill="#4A4458" />
        </g>
        {/* Daisy Duck — pink */}
        <g transform="translate(1120, 640)" opacity="0.8" style={{ animation: "float-1 3.2s ease-in-out infinite" }}>
          <ellipse cx="0" cy="10" rx="9" ry="8" fill="#E89AAA" />
          <circle cx="0" cy="0" r="8" fill="#FFB5C5" />
          <ellipse cx="0" cy="-6" rx="4" ry="2" fill="#FF9A76" />
        </g>
        {/* Ollie Owl — green */}
        <g transform="translate(160, 640)" opacity="0.8" style={{ animation: "float-2 3.8s ease-in-out infinite" }}>
          <ellipse cx="0" cy="10" rx="9" ry="9" fill="#5DAA61" />
          <circle cx="0" cy="0" r="9" fill="#7BC67E" />
          <circle cx="-3" cy="-1" r="3" fill="white" />
          <circle cx="3" cy="-1" r="3" fill="white" />
        </g>
        {/* Toby Turtle — yellow */}
        <g transform="translate(1350, 650)" opacity="0.8" style={{ animation: "float-3 3.4s ease-in-out infinite" }}>
          <ellipse cx="0" cy="8" rx="12" ry="9" fill="#D4A81A" />
          <circle cx="0" cy="-4" r="7" fill="#7BC67E" />
        </g>
      </svg>

      {/* ---------- Content overlay ---------- */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-800 leading-tight mb-4 text-balance">
          Welcome to{" "}
          <span className="text-[#C8A20E] drop-shadow-sm">
            Sunny Sprouts Adventures!
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8 text-balance">
          Sing, dance, learn, and explore with Benny Bear and all his Sunny
          Sprouts friends.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/watch"
            className="btn-primary text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
          >
            🎵 Watch Our Songs
          </Link>
          <Link
            href="/characters"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-display font-semibold text-xl text-white bg-grass-green hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-grass-green/50"
          >
            🐻 Meet the Characters
          </Link>
        </div>
      </div>

      {/* Subtle scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7BC67E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Episode Cards                                             */
/* ------------------------------------------------------------------ */

function EpisodeCard({
  episode,
}: {
  episode: (typeof episodes)[number];
}) {
  const hasVideo = episode.youtubeUrl && episode.youtubeUrl.length > 0;
  const inner = (
    <article
      className="card group cursor-pointer hover:scale-[1.03] transition-transform duration-200 overflow-hidden flex flex-col"
      aria-label={`Episode: ${episode.title}`}
    >
      {/* Thumbnail area */}
      <div
        className="relative w-full aspect-video rounded-2xl flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: episode.thumbnailColor }}
      >
        {/* Play button */}
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill={episode.thumbnailColor}
            aria-hidden="true"
          >
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>

        {/* Badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full shadow ${
            hasVideo
              ? "bg-grass-green text-white"
              : "bg-sunny-yellow text-gray-800"
          }`}
        >
          {hasVideo ? "Watch Now" : "Coming Soon!"}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 pt-4 flex flex-col gap-2">
        <h3 className="font-display font-semibold text-lg text-gray-800 leading-snug">
          {episode.title}
        </h3>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-semibold bg-sky-blue/20 text-sky-blue px-2 py-1 rounded-full">
            Ages {episode.ageRange}
          </span>
          <span className="text-xs font-semibold bg-purple-accent/20 text-purple-accent px-2 py-1 rounded-full">
            {episode.learningTopic}
          </span>
        </div>
      </div>
    </article>
  );

  if (hasVideo) {
    return (
      <a
        href={episode.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${episode.title} on YouTube (opens in new tab)`}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={`/watch`}>
      {inner}
    </Link>
  );
}

function EpisodesSection() {
  return (
    <section
      className="section-padding max-w-7xl mx-auto"
      aria-labelledby="episodes-heading"
    >
      <div className="text-center mb-10">
        <h2
          id="episodes-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-800 mb-3"
        >
          🌱 New Adventures Are Growing
        </h2>
        <p className="text-lg text-gray-500 max-w-xl mx-auto text-balance">
          Join the Sunny Sprouts for fun songs, learning, and lots of giggles!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {episodes.map((ep) => (
          <Link href={`/watch`} key={ep.id}>
            <EpisodeCard episode={ep} />
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Learning Categories                                       */
/* ------------------------------------------------------------------ */

/** Inline SVG icons for each category */
function CategoryIcon({ icon, color }: { icon: string; color: string }) {
  const shared = { width: 56, height: 56, viewBox: "0 0 56 56", fill: "none" };

  switch (icon) {
    case "abacus":
      return (
        <svg {...shared} aria-hidden="true">
          <rect x="6" y="8" width="44" height="40" rx="6" fill="white" fillOpacity="0.3" />
          <line x1="14" y1="10" x2="14" y2="46" stroke="white" strokeWidth="3" />
          <line x1="28" y1="10" x2="28" y2="46" stroke="white" strokeWidth="3" />
          <line x1="42" y1="10" x2="42" y2="46" stroke="white" strokeWidth="3" />
          <line x1="8" y1="18" x2="48" y2="18" stroke="white" strokeWidth="2" />
          <circle cx="14" cy="26" r="5" fill="white" />
          <circle cx="28" cy="26" r="5" fill="white" />
          <circle cx="42" cy="26" r="5" fill="white" />
          <circle cx="14" cy="38" r="5" fill="white" />
          <circle cx="28" cy="38" r="5" fill="white" />
        </svg>
      );
    case "hash":
      return (
        <svg {...shared} aria-hidden="true">
          <rect x="8" y="8" width="40" height="40" rx="8" fill="white" fillOpacity="0.25" />
          <text x="28" y="38" textAnchor="middle" fontSize="30" fontWeight="bold" fill="white">
            123
          </text>
        </svg>
      );
    case "palette":
      return (
        <svg {...shared} aria-hidden="true">
          <ellipse cx="24" cy="26" rx="16" ry="14" fill="white" fillOpacity="0.3" />
          <circle cx="18" cy="18" r="4" fill="#FFD93D" />
          <circle cx="30" cy="16" r="4" fill="#FF6B6B" />
          <circle cx="34" cy="28" r="4" fill="#6EC6FF" />
          <circle cx="26" cy="36" r="4" fill="#7BC67E" />
          <circle cx="14" cy="30" r="4" fill="#B39DDB" />
        </svg>
      );
    case "heart":
      return (
        <svg {...shared} aria-hidden="true">
          <path
            d="M28 42c-3-3-14-9-18-15-3-4-3-9 0-13 3-4 10-6 14-2l4 3 4-3c4-4 11-2 14 2 3 4 3 9 0 13-4 6-15 12-18 15z"
            fill="white"
            fillOpacity="0.9"
          />
        </svg>
      );
    case "leaf":
      return (
        <svg {...shared} aria-hidden="true">
          <ellipse cx="28" cy="20" rx="14" ry="10" fill="white" fillOpacity="0.3" />
          <path
            d="M28 12c-6 0-10 8-10 14 0 4 2 8 5 10l1-12 4 12c3-2 5-6 5-10 0-6-2-14-5-14z"
            fill="white"
          />
        </svg>
      );
    case "car":
      return (
        <svg {...shared} aria-hidden="true">
          <rect x="4" y="18" width="38" height="18" rx="8" fill="white" fillOpacity="0.3" />
          <rect x="10" y="14" width="20" height="14" rx="6" fill="white" fillOpacity="0.5" />
          <circle cx="14" cy="38" r="5" fill="white" />
          <circle cx="34" cy="38" r="5" fill="white" />
          <rect x="36" y="18" width="8" height="12" rx="4" fill="white" fillOpacity="0.3" />
        </svg>
      );
    case "smile":
      return (
        <svg {...shared} aria-hidden="true">
          <circle cx="28" cy="28" r="20" fill="white" fillOpacity="0.3" />
          <circle cx="20" cy="22" r="3" fill="white" />
          <circle cx="36" cy="22" r="3" fill="white" />
          <path
            d="M18 34c3 4 7 6 10 6 4 0 8-2 10-6"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "moon":
      return (
        <svg {...shared} aria-hidden="true">
          <circle cx="28" cy="28" r="20" fill="white" fillOpacity="0.2" />
          <path
            d="M36 10c-6 0-10 10-10 18 0 8 4 18 10 18 8 0 3-12 3-18 0-8 3-18-3-18z"
            fill="white"
            fillOpacity="0.9"
          />
          <circle cx="20" cy="14" r="2" fill="#FFD93D" />
          <circle cx="30" cy="22" r="1.5" fill="#FFD93D" />
          <circle cx="24" cy="38" r="2.5" fill="#FFD93D" />
        </svg>
      );
    default:
      return (
        <svg {...shared} aria-hidden="true">
          <circle cx="28" cy="28" r="18" fill="white" fillOpacity="0.3" />
        </svg>
      );
  }
}

function CategoriesSection() {
  return (
    <section
      className="section-padding max-w-7xl mx-auto"
      aria-labelledby="categories-heading"
      style={{ backgroundColor: "#F9FAFB" }}
    >
      <div className="text-center mb-10">
        <h2
          id="categories-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-800 mb-3"
        >
          🎨 Explore by Topic
        </h2>
        <p className="text-lg text-gray-500 max-w-xl mx-auto text-balance">
          Pick a topic and start the fun!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((cat) => {
          const isLight =
            cat.color === "#FFD93D" ||
            cat.color === "#FFB5C5";
          return (
            <Link
              key={cat.id}
              href={`/watch?category=${cat.id}`}
              className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 text-center"
              style={{ backgroundColor: cat.color }}
              aria-label={`Browse ${cat.name} videos`}
            >
              <CategoryIcon icon={cat.icon} color={cat.color} />
              <span
                className={`font-display font-semibold text-sm sm:text-base ${
                  isLight ? "text-gray-800" : "text-white"
                }`}
              >
                {cat.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Character Previews                                        */
/* ------------------------------------------------------------------ */

function CharacterAvatar({
  character,
}: {
  character: (typeof characters)[number];
}) {
  /* Give each character a simple animal silhouette based on id */
  const renderAvatarSVG = () => {
    const c = character.id;
    // Bear
    if (c.includes("bear")) {
      return (
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
          <circle cx="40" cy="42" r="28" fill={character.color} />
          <circle cx="28" cy="30" r="9" fill="#8B6914" />
          <circle cx="52" cy="30" r="9" fill="#8B6914" />
          <circle cx="28" cy="30" r="4" fill="#5C4A1E" />
          <circle cx="52" cy="30" r="4" fill="#5C4A1E" />
          <ellipse cx="40" cy="42" rx="10" ry="6" fill="#D4A373" />
          <circle cx="40" cy="39" r="3" fill="#5C4A1E" />
        </svg>
      );
    }
    // Rabbit
    if (c.includes("rabbit")) {
      return (
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
          <circle cx="40" cy="42" r="26" fill={character.color} />
          <ellipse cx="28" cy="20" rx="10" ry="18" fill={character.color} />
          <ellipse cx="52" cy="20" rx="10" ry="18" fill={character.color} />
          <ellipse cx="28" cy="20" rx="5" ry="14" fill="#FFB5C5" />
          <ellipse cx="52" cy="20" rx="5" ry="14" fill="#FFB5C5" />
          <circle cx="32" cy="38" r="3" fill="#5C4A1E" />
          <circle cx="48" cy="38" r="3" fill="#5C4A1E" />
          <circle cx="40" cy="42" r="3" fill="#FFB5C5" />
        </svg>
      );
    }
    // Panda
    if (c.includes("panda")) {
      return (
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
          <circle cx="40" cy="42" r="28" fill="white" />
          <circle cx="28" cy="28" r="10" fill={character.color} />
          <circle cx="52" cy="28" r="10" fill={character.color} />
          <circle cx="28" cy="28" r="4" fill="white" />
          <circle cx="52" cy="28" r="4" fill="white" />
          <ellipse cx="40" cy="44" rx="8" ry="5" fill={character.color} />
          <circle cx="40" cy="40" r="3" fill={character.color} />
        </svg>
      );
    }
    // Owl
    if (c.includes("owl")) {
      return (
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
          <circle cx="40" cy="44" r="26" fill={character.color} />
          <polygon points="20,26 40,4 60,26" fill="#5DAA61" />
          <circle cx="28" cy="34" r="8" fill="white" />
          <circle cx="52" cy="34" r="8" fill="white" />
          <circle cx="28" cy="34" r="3" fill="#5C4A1E" />
          <circle cx="52" cy="34" r="3" fill="#5C4A1E" />
          <polygon points="34,48 40,52 46,48" fill="#FFD93D" />
        </svg>
      );
    }
    // Duck
    if (c.includes("duck")) {
      return (
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
          <circle cx="40" cy="42" r="24" fill={character.color} />
          <ellipse cx="54" cy="30" rx="14" ry="9" fill="#FFD93D" />
          <circle cx="30" cy="36" r="3" fill="#5C4A1E" />
          <circle cx="44" cy="34" r="3" fill="#5C4A1E" />
          <polygon points="55,28 60,26 56,25" fill="#FF9A76" />
        </svg>
      );
    }
    // Turtle
    if (c.includes("turtle")) {
      return (
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
          <ellipse cx="40" cy="44" rx="28" ry="20" fill="#7BC67E" />
          <ellipse cx="40" cy="42" rx="18" ry="12" fill={character.color} />
          <circle cx="40" cy="28" r="12" fill="#7BC67E" />
          <circle cx="34" cy="26" r="3" fill="#5C4A1E" />
          <circle cx="46" cy="26" r="3" fill="#5C4A1E" />
          <ellipse cx="40" cy="32" rx="4" ry="2" fill="#5C4A1E" />
        </svg>
      );
    }
    // default
    return (
      <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
        <circle cx="40" cy="42" r="26" fill={character.color} />
        <text
          x="40"
          y="50"
          textAnchor="middle"
          fontSize="28"
          fontWeight="bold"
          fill="white"
        >
          {character.name.charAt(0)}
        </text>
      </svg>
    );
  };

  return (
    <article
      className="flex flex-col items-center gap-3 p-5 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 bg-white min-w-[180px] flex-shrink-0 w-[180px]"
      aria-label={`Character: ${character.name}`}
    >
      <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-inner">
        {renderAvatarSVG()}
      </div>
      <h3 className="font-display font-bold text-base text-gray-800 text-center">
        {character.name}
      </h3>
      <p className="text-xs text-gray-500 text-center leading-snug">
        {character.personality}
      </p>
      <Link
        href={`/characters/${character.id}`}
        className="mt-auto text-sm font-semibold px-4 py-2 rounded-full text-white transition-colors duration-200 hover:opacity-90"
        style={{ backgroundColor: character.color }}
      >
        Meet Me
      </Link>
    </article>
  );
}

function CharactersSection() {
  return (
    <section
      className="section-padding max-w-7xl mx-auto"
      aria-labelledby="characters-heading"
    >
      <div className="text-center mb-10">
        <h2
          id="characters-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-800 mb-3"
        >
          🐾 Meet the Sunny Sprouts!
        </h2>
        <p className="text-lg text-gray-500 max-w-xl mx-auto text-balance">
          Every friend brings something special. Get to know the gang!
        </p>
      </div>

      {/* Horizontal scroll on mobile, grid on larger screens */}
      <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:overflow-visible md:snap-none">
        {characters.map((ch) => (
          <div key={ch.id} className="snap-center">
            <CharacterAvatar character={ch} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Bottom CTA                                                */
/* ------------------------------------------------------------------ */

function BottomCTA() {
  return (
    <section
      className="section-padding max-w-7xl mx-auto text-center"
      aria-labelledby="cta-heading"
    >
      <div
        className="rounded-3xl px-6 py-12 md:py-16 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #FFD93D 0%, #FF9A76 50%, #FFB5C5 100%)",
        }}
      >
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4"
        >
          🎉 Ready for an Adventure?
        </h2>
        <p className="text-lg text-gray-800/80 max-w-lg mx-auto mb-8 text-balance">
          Sing along, learn new things, and make friends — all in one happy
          place.
        </p>
        <Link
          href="/watch"
          className="btn-primary text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform inline-block"
        >
          🎵 Watch Our Songs
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EpisodesSection />
      <CategoriesSection />
      <CharactersSection />
      <BottomCTA />
    </>
  );
}
