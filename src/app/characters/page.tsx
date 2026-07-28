import type { Metadata } from "next";
import Link from "next/link";
import characters from "@/data/characters";
import AnimalAvatar from "@/components/AnimalAvatar";

export const metadata: Metadata = {
  title: "Meet the Characters",
  description:
    "Meet the lovable characters of Sunny Sprouts Adventures — Benny Bear, Rosie Rabbit, Penny Panda, Ollie Owl, Daisy Duck, and Toby Turtle!",
  openGraph: {
    title: "Meet the Sunny Sprouts Characters",
    description:
      "Get to know Benny Bear, Rosie Rabbit, Penny Panda, Ollie Owl, Daisy Duck, and Toby Turtle — the stars of Sunny Sprouts Adventures!",
  },
};

function getAnimalType(id: string): "bear" | "rabbit" | "panda" | "owl" | "duck" | "turtle" {
  const map: Record<string, "bear" | "rabbit" | "panda" | "owl" | "duck" | "turtle"> = {
    "benny-bear": "bear",
    "rosie-rabbit": "rabbit",
    "penny-panda": "panda",
    "ollie-owl": "owl",
    "daisy-duck": "duck",
    "toby-turtle": "turtle",
  };
  return map[id] ?? "bear";
}

export default function CharactersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sunny-yellow/20 via-white to-white">
        <div className="section-padding max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-800 mb-4">
            Meet the Sunny Sprouts!
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Each Sunny Sprout brings their own special personality to our adventures.
            Get to know them all — every one has a song to sing and a lesson to share!
          </p>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" />
      </section>

      {/* Character grid */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => {
            const animalType = getAnimalType(character.id);
            return (
              <article
                key={character.id}
                className="group relative bg-white rounded-3xl p-6 sm:p-8
                           border-2 border-gray-100
                           transition-all duration-300 ease-out
                           hover:shadow-xl hover:-translate-y-1 hover:border-transparent
                           flex flex-col items-center text-center"
                style={{ borderTopColor: character.color, borderTopWidth: "4px" }}
                aria-label={`${character.name} character card`}
              >
                {/* Avatar */}
                <div className="mb-5 transition-transform duration-300 group-hover:scale-105">
                  <AnimalAvatar animal={animalType} color={character.color} size="lg" />
                </div>

                {/* Name */}
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-800 mb-1">
                  {character.name}
                </h2>

                {/* Personality tagline */}
                <p className="text-sm sm:text-base font-body font-semibold text-gray-500 mb-2">
                  {character.personality}
                </p>

                {/* Lesson */}
                <p className="text-xs sm:text-sm font-body text-gray-400 italic mb-4 max-w-xs">
                  &ldquo;{character.lesson}&rdquo;
                </p>

                {/* Favorite activity */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={character.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" fill={character.color} stroke="none" />
                  </svg>
                  <span className="font-medium">{character.favoriteActivity}</span>
                </div>

                {/* CTA button */}
                <Link
                  href={`/characters/${character.id}`}
                  className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-2xl
                             font-display font-semibold text-base
                             transition-all duration-200 shadow-sm
                             hover:shadow-md hover:scale-105
                             focus:outline-none focus:ring-4
                             active:scale-95"
                  style={{
                    backgroundColor: character.color,
                    color: ["#FFD93D", "#FFB5C5"].includes(character.color) ? "#4a4a4a" : "#fff",
                  } as React.CSSProperties}
                  aria-label={`Meet ${character.name}`}
                >
                  Meet {character.name.split(" ")[0]}
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
