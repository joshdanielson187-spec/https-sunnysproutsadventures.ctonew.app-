import type { Metadata } from "next";
import Link from "next/link";
import characters from "@/data/characters";

export const metadata: Metadata = {
  title: "About Sunny Sprouts Adventures",
  description:
    "Learn about Sunny Sprouts Adventures — our mission, our values, and the team creating safe, joyful educational content for preschoolers ages 2–6.",
  openGraph: {
    title: "About Sunny Sprouts Adventures",
    description:
      "Original songs, lovable characters, and printable activities — all in a safe, ad-free space for young children and their families.",
    type: "website",
    locale: "en_US",
  },
};

/* ------------------------------------------------------------------ */
/*  Data: What We Create cards                                         */
/* ------------------------------------------------------------------ */

const whatWeCreate = [
  {
    title: "Original Songs",
    description:
      "Catchy, educational nursery rhymes and songs designed from the ground up for little listeners ages 2–6.",
    iconColor: "#FFD93D",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#FFD93D" opacity="0.2" />
        <circle cx="15" cy="30" r="4" fill="#FFD93D" />
        <circle cx="33" cy="26" r="4" fill="#FFD93D" />
        <line x1="19" y1="30" x2="19" y2="10" stroke="#FFD93D" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="37" y1="26" x2="37" y2="8" stroke="#FFD93D" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="17" y1="14" x2="35" y2="12" stroke="#FFD93D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Lovable Characters",
    description:
      "Meet Benny Bear, Rosie Rabbit, Penny Panda, and all their friends — each with a unique personality and lesson to share.",
    iconColor: "#6EC6FF",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#6EC6FF" opacity="0.2" />
        <circle cx="18" cy="20" r="5" fill="#6EC6FF" />
        <circle cx="32" cy="20" r="5" fill="#6EC6FF" />
        <path d="M14 30 Q24 38 34 30" stroke="#6EC6FF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Printable Activities",
    description:
      "Coloring pages, tracing sheets, puzzles, and crafts that extend the learning beyond the screen — perfect for home or classroom.",
    iconColor: "#7BC67E",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#7BC67E" opacity="0.2" />
        <rect x="10" y="8" width="18" height="26" rx="2" fill="#7BC67E" opacity="0.5" />
        <rect x="24" y="14" width="14" height="20" rx="2" fill="#7BC67E" />
        <line x1="16" y1="16" x2="22" y2="16" stroke="white" strokeWidth="2" />
        <line x1="16" y1="22" x2="22" y2="22" stroke="white" strokeWidth="2" />
        <line x1="16" y1="28" x2="19" y2="28" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Educational Videos",
    description:
      "Animated adventures that teach counting, colors, feelings, healthy habits, and more — through music and playful storytelling.",
    iconColor: "#FF9A76",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#FF9A76" opacity="0.2" />
        <rect x="10" y="12" width="28" height="20" rx="4" fill="#FF9A76" />
        <polygon points="20,16 20,28 32,22" fill="white" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Data: Our Values cards                                             */
/* ------------------------------------------------------------------ */

const ourValues = [
  {
    title: "Safe & Ad-Free",
    description:
      "No advertisements, no tracking, no data collection — ever. Sunny Sprouts is a clean, safe space where families can explore without worry.",
    iconColor: "#B39DDB",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#B39DDB" opacity="0.2" />
        <path
          d="M24 10 C18 14 10 18 10 24 C10 32 18 36 24 40 C30 36 38 32 38 24 C38 18 30 14 24 10 Z"
          fill="#B39DDB"
        />
        <circle cx="24" cy="24" r="4" fill="white" />
      </svg>
    ),
  },
  {
    title: "Made for Little Ones",
    description:
      "Every song, story, and activity is thoughtfully designed for children ages 2–6. Simple language, gentle pacing, and age-appropriate themes.",
    iconColor: "#FFB5C5",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#FFB5C5" opacity="0.2" />
        <circle cx="20" cy="16" r="8" fill="#FFB5C5" />
        <circle cx="32" cy="28" r="8" fill="#FFB5C5" />
        <path d="M16 24 Q20 20 28 32 Q24 30 18 26" fill="#FFB5C5" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Family-Friendly Fun",
    description:
      "We create content the whole family can enjoy together. No villains, no scares — just warm, joyful experiences that bring families closer.",
    iconColor: "#FFD93D",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#FFD93D" opacity="0.2" />
        <path
          d="M24 12 Q28 22 24 28 Q20 22 24 12"
          fill="#FFD93D"
        />
        <circle cx="24" cy="30" r="2" fill="#FFD93D" />
        <rect x="20" y="33" width="8" height="5" rx="2" fill="#FFD93D" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Character mini avatar helper                                       */
/* ------------------------------------------------------------------ */

function CharacterMini({ character }: { character: (typeof characters)[number] }) {
  const c = character.id;

  const renderSVG = () => {
    if (c.includes("bear")) {
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
          <circle cx="32" cy="34" r="22" fill={character.color} />
          <circle cx="22" cy="24" r="7" fill="#8B6914" />
          <circle cx="42" cy="24" r="7" fill="#8B6914" />
          <circle cx="22" cy="24" r="3" fill="#5C4A1E" />
          <circle cx="42" cy="24" r="3" fill="#5C4A1E" />
          <ellipse cx="32" cy="34" rx="8" ry="5" fill="#D4A373" />
          <circle cx="32" cy="31" r="2.5" fill="#5C4A1E" />
        </svg>
      );
    }
    if (c.includes("rabbit")) {
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
          <circle cx="32" cy="34" r="20" fill={character.color} />
          <ellipse cx="22" cy="16" rx="8" ry="14" fill={character.color} />
          <ellipse cx="42" cy="16" rx="8" ry="14" fill={character.color} />
          <ellipse cx="22" cy="16" rx="4" ry="10" fill="#FFB5C5" />
          <ellipse cx="42" cy="16" rx="4" ry="10" fill="#FFB5C5" />
          <circle cx="26" cy="30" r="2.5" fill="#5C4A1E" />
          <circle cx="38" cy="30" r="2.5" fill="#5C4A1E" />
          <circle cx="32" cy="34" r="2.5" fill="#FFB5C5" />
        </svg>
      );
    }
    if (c.includes("panda")) {
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
          <circle cx="32" cy="34" r="22" fill="white" />
          <circle cx="22" cy="22" r="8" fill={character.color} />
          <circle cx="42" cy="22" r="8" fill={character.color} />
          <circle cx="22" cy="22" r="3.5" fill="white" />
          <circle cx="42" cy="22" r="3.5" fill="white" />
          <ellipse cx="32" cy="36" rx="7" ry="4" fill={character.color} />
          <circle cx="32" cy="32" r="2.5" fill={character.color} />
        </svg>
      );
    }
    if (c.includes("owl")) {
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
          <circle cx="32" cy="36" r="20" fill={character.color} />
          <polygon points="18,22 32,6 46,22" fill="#5DAA61" />
          <circle cx="24" cy="28" r="7" fill="white" />
          <circle cx="40" cy="28" r="7" fill="white" />
          <circle cx="24" cy="28" r="3" fill="#5C4A1E" />
          <circle cx="40" cy="28" r="3" fill="#5C4A1E" />
          <polygon points="28,40 32,44 36,40" fill="#FFD93D" />
        </svg>
      );
    }
    if (c.includes("duck")) {
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
          <circle cx="32" cy="34" r="18" fill={character.color} />
          <ellipse cx="42" cy="26" rx="10" ry="7" fill="#FFD93D" />
          <circle cx="26" cy="30" r="2.5" fill="#5C4A1E" />
          <circle cx="36" cy="28" r="2.5" fill="#5C4A1E" />
          <polygon points="44,24 48,22 44,21" fill="#FF9A76" />
        </svg>
      );
    }
    if (c.includes("turtle")) {
      return (
        <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
          <ellipse cx="32" cy="36" rx="22" ry="16" fill="#7BC67E" />
          <ellipse cx="32" cy="34" rx="14" ry="10" fill={character.color} />
          <circle cx="32" cy="24" r="10" fill="#7BC67E" />
          <circle cx="28" cy="22" r="2.5" fill="#5C4A1E" />
          <circle cx="36" cy="22" r="2.5" fill="#5C4A1E" />
          <ellipse cx="32" cy="28" rx="3" ry="1.5" fill="#5C4A1E" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
        <circle cx="32" cy="34" r="20" fill={character.color} />
        <text x="32" y="40" textAnchor="middle" fontSize="22" fontWeight="bold" fill="white">
          {character.name.charAt(0)}
        </text>
      </svg>
    );
  };

  return (
    <Link
      href={`/characters/${character.id}`}
      className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border-2 border-gray-100
                 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
    >
      <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-inner">
        {renderSVG()}
      </div>
      <span className="font-display font-semibold text-sm text-gray-800 group-hover:text-gray-900">
        {character.name}
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sunny-yellow/15 via-white to-white">
        <div className="section-padding max-w-4xl mx-auto text-center">
          {/* Sun icon */}
          <div className="mb-6 flex justify-center" aria-hidden="true">
            <svg viewBox="0 0 80 80" width="72" height="72" fill="none">
              <circle cx="40" cy="40" r="22" fill="#FFD93D" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 40 + 26 * Math.cos(rad);
                const y1 = 40 + 26 * Math.sin(rad);
                const x2 = 40 + 32 * Math.cos(rad);
                const y2 = 40 + 32 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#FFD93D"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                );
              })}
              <circle cx="33" cy="35" r="2.5" fill="#8B6914" />
              <circle cx="47" cy="35" r="2.5" fill="#8B6914" />
              <path
                d="M33 45 Q40 51 47 45"
                fill="none"
                stroke="#8B6914"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-800 mb-6">
            About Sunny Sprouts Adventures
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
            Sunny Sprouts Adventures is a growing world of original songs, stories,
            characters, and learning activities created to help young children learn
            through music and play. Our mission is to make early learning cheerful,
            memorable, and fun for the whole family.
          </p>
        </div>
      </section>

      {/* What We Create */}
      <section className="section-padding max-w-7xl mx-auto pt-8" aria-labelledby="what-we-create">
        <h2
          id="what-we-create"
          className="text-3xl sm:text-4xl font-display font-bold text-gray-800 text-center mb-10"
        >
          What We Create
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeCreate.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-gray-100
                         transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5"
              style={{ borderTopColor: item.iconColor, borderTopWidth: "3px" }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-display font-bold text-gray-800 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-body leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section
        className="section-padding max-w-7xl mx-auto"
        aria-labelledby="our-values"
        style={{ backgroundColor: "#F9FAFB" }}
      >
        <h2
          id="our-values"
          className="text-3xl sm:text-4xl font-display font-bold text-gray-800 text-center mb-10"
        >
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ourValues.map((value) => (
            <article
              key={value.title}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-gray-100 text-center
                         transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="font-display font-bold text-gray-800 text-lg mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-500 font-body leading-relaxed">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-padding max-w-3xl mx-auto text-center" aria-labelledby="meet-the-team">
        <h2
          id="meet-the-team"
          className="text-3xl sm:text-4xl font-display font-bold text-gray-800 mb-6"
        >
          Meet the Team
        </h2>
        <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-sm">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-purple-accent/60"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="16" cy="18" r="8" fill="#B39DDB" opacity="0.6" />
            <circle cx="32" cy="18" r="8" fill="#FFB5C5" opacity="0.6" />
            <circle cx="24" cy="24" r="8" fill="#6EC6FF" opacity="0.6" />
            <path d="M8 40 Q24 28 40 40" stroke="#7BC67E" strokeWidth="2" fill="none" opacity="0.6" />
          </svg>
          <p className="text-lg text-gray-600 font-body leading-relaxed max-w-2xl mx-auto text-balance">
            Sunny Sprouts was created by a small team of parents, educators, and artists
            who believe that early childhood is the perfect time to fall in love with
            learning.
          </p>
        </div>
      </section>

      {/* Our Characters */}
      <section
        className="section-padding max-w-7xl mx-auto pt-0 pb-16"
        aria-labelledby="our-characters"
      >
        <h2
          id="our-characters"
          className="text-3xl sm:text-4xl font-display font-bold text-gray-800 text-center mb-2"
        >
          Our Characters
        </h2>
        <p className="text-gray-500 text-center mb-10 font-body">
          Meet the friends who make every adventure special!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {characters.map((ch) => (
            <CharacterMini key={ch.id} character={ch} />
          ))}
        </div>
      </section>
    </div>
  );
}
