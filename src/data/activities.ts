export interface Activity {
  id: string;
  title: string;
  description: string;
  type: string;
  ageRange: string;
  thumbnailColor: string;
  isAvailable: boolean;
  pdfUrl?: string;
}

const activities: Activity[] = [
  {
    id: "coloring-pages",
    title: "Coloring Pages",
    description:
      "Print and color your favorite Sunny Sprouts characters! Each page features a different friend ready for creative fun.",
    type: "Coloring",
    ageRange: "2–6",
    thumbnailColor: "#FFD93D",
    isAvailable: true,
    pdfUrl: "/activities/coloring-pages.pdf",
  },
  {
    id: "alphabet-tracing",
    title: "Alphabet Tracing",
    description:
      "Practice writing letters from A to Z with guided tracing sheets featuring our friendly characters.",
    type: "Tracing",
    ageRange: "3–5",
    thumbnailColor: "#6EC6FF",
    isAvailable: false,
  },
  {
    id: "number-tracing",
    title: "Number Tracing",
    description:
      "Learn to write numbers 1 through 20 with Benny Bear's counting-themed tracing activities.",
    type: "Tracing",
    ageRange: "3–5",
    thumbnailColor: "#7BC67E",
    isAvailable: false,
  },
  {
    id: "matching-game",
    title: "Matching Game",
    description:
      "Match characters to their favorite colors, foods, and activities in this fun memory-building game.",
    type: "Matching",
    ageRange: "2–4",
    thumbnailColor: "#FF9A76",
    isAvailable: false,
  },
  {
    id: "spot-the-difference",
    title: "Spot the Difference",
    description:
      "Can you find what changed? Two colorful scenes side by side with subtle differences to discover.",
    type: "Puzzle",
    ageRange: "3–6",
    thumbnailColor: "#B39DDB",
    isAvailable: false,
  },
  {
    id: "mazes",
    title: "Mazes",
    description:
      "Help our characters find their way home! Simple, kid-friendly mazes that build problem-solving skills.",
    type: "Puzzle",
    ageRange: "3–6",
    thumbnailColor: "#FFB5C5",
    isAvailable: false,
  },
];

export default activities;
