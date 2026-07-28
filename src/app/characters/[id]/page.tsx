import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import characters from "@/data/characters";
import episodes from "@/data/episodes";
import AnimalAvatar from "@/components/AnimalAvatar";

interface CharacterPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return characters.map((c) => ({ id: c.id }));
}

export function generateMetadata({ params }: CharacterPageProps): Metadata {
  const character = characters.find((c) => c.id === params.id);
  if (!character) return { title: "Character Not Found" };
  return {
    title: character.name,
    description: `Meet ${character.name} — ${character.personality}. ${character.biography.slice(0, 120)}...`,
    openGraph: {
      title: `${character.name} — Sunny Sprouts Adventures`,
      description: `${character.name} is ${character.personality.toLowerCase()}. ${character.biography.slice(0, 120)}...`,
    },
  };
}

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

// Derive animal name from the character id
function getAnimalName(id: string): string {
  const parts = id.split("-");
  return parts[parts.length - 1];
}

export default function CharacterPage({ params }: CharacterPageProps) {
  const character = characters.find((c) => c.id === params.id);
  if (!character) notFound();

  const animalType = getAnimalType(character.id);
  const animalName = getAnimalName(character.id);
  const relatedEpisodes = episodes.filter((ep) =>
    character.relatedEpisodeIds.includes(ep.id)
  );

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section
        className="relative overflow-hidden section-padding"
        style={{ backgroundColor: `${character.color}15` }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/characters"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800
                       font-body font-medium text-sm mb-8 transition-colors duration-150
                       group"
            aria-label="Back to all characters"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Characters
          </Link>

          {/* Character header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
            <div className="flex-shrink-0">
              <AnimalAvatar
                animal={animalType}
                color={character.color}
                size="xl"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-800 mb-2">
                {character.name}
              </h1>
              <p
                className="text-lg sm:text-xl font-display font-semibold capitalize"
                style={{ color: character.color }}
              >
                The {character.personality.split(",")[0].toLowerCase()} {animalName}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="section-padding max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <div>
              <h2
                className="text-xl font-display font-bold text-gray-800 mb-3
                           inline-block pb-1 border-b-2"
                style={{ borderColor: character.color }}
              >
                Biography
              </h2>
              <p className="text-gray-600 font-body leading-relaxed text-base sm:text-lg">
                {character.biography}
              </p>
            </div>

            {/* Life Lesson — highlighted callout */}
            <div
              className="rounded-3xl p-6 sm:p-8 border-2"
              style={{
                backgroundColor: `${character.color}12`,
                borderColor: `${character.color}40`,
              }}
            >
              <h3 className="text-lg font-display font-bold text-gray-800 mb-2 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill={character.color}
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Life Lesson
              </h3>
              <p className="text-gray-700 font-body text-base sm:text-lg italic leading-relaxed">
                &ldquo;{character.lesson}&rdquo;
              </p>
            </div>

            {/* Related Videos */}
            <div>
              <h2
                className="text-xl font-display font-bold text-gray-800 mb-4
                           inline-block pb-1 border-b-2"
                style={{ borderColor: character.color }}
              >
                Related Videos
              </h2>
              {relatedEpisodes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedEpisodes.map((ep) => (
                    <Link
                      key={ep.id}
                      href={`/watch?category=${ep.category}`}
                      className="group flex items-center gap-4 p-4 rounded-2xl
                                 bg-white border-2 border-gray-100
                                 transition-all duration-200
                                 hover:shadow-md hover:border-gray-200"
                      aria-label={`Watch ${ep.title} — ${ep.learningTopic}`}
                    >
                      {/* Mini thumbnail */}
                      <div
                        className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center relative"
                        style={{ backgroundColor: ep.thumbnailColor }}
                        aria-hidden="true"
                      >
                        <svg
                          className="w-6 h-6 text-white/80"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <polygon points="8,5 19,12 8,19" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-display font-semibold text-gray-800 text-sm truncate">
                          {ep.title}
                        </p>
                        <p className="text-xs text-gray-500 font-body mt-0.5">
                          Ages {ep.ageRange}
                        </p>
                        <span
                          className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold font-body"
                          style={{
                            backgroundColor: `${character.color}20`,
                            color: character.color,
                          }}
                        >
                          Coming Soon!
                        </span>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-300 group-hover:text-gray-500
                                   transition-colors flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              ) : (
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{ backgroundColor: `${character.color}10` }}
                >
                  <p className="text-gray-500 font-body italic">
                    More adventures coming soon!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar — quick facts */}
          <aside className="space-y-6">
            {/* Favorite Song */}
            <div className="bg-white rounded-2xl p-5 border-2 border-gray-100">
              <h3 className="text-sm font-display font-bold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                Favorite Song
              </h3>
              <p className="text-gray-800 font-body font-semibold">
                {character.favoriteSong}
              </p>
            </div>

            {/* Favorite Color */}
            <div className="bg-white rounded-2xl p-5 border-2 border-gray-100">
              <h3 className="text-sm font-display font-bold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
                Favorite Color
              </h3>
              <div className="flex items-center gap-3">
                <span
                  className="inline-block w-8 h-8 rounded-full border-2 border-gray-200 flex-shrink-0"
                  style={{ backgroundColor: character.color }}
                  aria-label={`Color swatch for ${character.favoriteColor}`}
                />
                <span className="text-gray-800 font-body font-semibold">
                  {character.favoriteColor}
                </span>
              </div>
            </div>

            {/* Favorite Activity */}
            <div className="bg-white rounded-2xl p-5 border-2 border-gray-100">
              <h3 className="text-sm font-display font-bold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
                </svg>
                Favorite Activity
              </h3>
              <p className="text-gray-800 font-body font-semibold">
                {character.favoriteActivity}
              </p>
            </div>

            {/* Back to all link (mobile only) */}
            <Link
              href="/characters"
              className="lg:hidden flex items-center justify-center gap-2 w-full
                         px-4 py-3 rounded-2xl font-display font-semibold text-gray-600
                         border-2 border-gray-200 hover:border-gray-300 hover:text-gray-800
                         transition-colors duration-150"
            >
              ← Back to All Characters
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
