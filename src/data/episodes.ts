export interface Episode {
  id: string;
  title: string;
  ageRange: string;
  learningTopic: string;
  category: string;
  youtubeUrl: string;
  thumbnailColor: string;
  description: string;
}

const episodes: Episode[] = [
  {
    id: "good-morning-sunshine",
    title: "Good Morning Sunshine",
    ageRange: "2–4",
    learningTopic: "Morning Routines",
    category: "healthy-habits",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailColor: "#FFD93D",
    description:
      "Wake up with Sunny and friends! A cheerful morning song about stretching, brushing teeth, getting dressed, and starting the day with a smile.",
  },
  {
    id: "count-with-benny-bear",
    title: "Count With Benny Bear",
    ageRange: "3–5",
    learningTopic: "Counting 1–10",
    category: "numbers-counting",
    youtubeUrl: "",
    thumbnailColor: "#6EC6FF",
    description:
      "Benny Bear loves to count! Join him as he counts honey pots, flowers, and friendly forest animals from 1 to 10.",
  },
  {
    id: "brush-brush-brush",
    title: "Brush, Brush, Brush",
    ageRange: "2–4",
    learningTopic: "Dental Hygiene",
    category: "healthy-habits",
    youtubeUrl: "",
    thumbnailColor: "#FF9A76",
    description:
      "Brusha-brusha-brush! A fun, bouncy song that makes tooth brushing exciting. Rosie Rabbit shows how to keep those pearly whites sparkling clean.",
  },
  {
    id: "rainbow-train",
    title: "Rainbow Train",
    ageRange: "2–5",
    learningTopic: "Colors",
    category: "colors-shapes",
    youtubeUrl: "",
    thumbnailColor: "#B39DDB",
    description:
      "All aboard the Rainbow Train! Each car is a different color, and Penny Panda is the conductor. Learn red, orange, yellow, green, blue, and purple as the train chugs along.",
  },
  {
    id: "dinosaur-dance",
    title: "Dinosaur Dance",
    ageRange: "3–6",
    learningTopic: "Movement & Dinosaurs",
    category: "animals-nature",
    youtubeUrl: "",
    thumbnailColor: "#7BC67E",
    description:
      "Stomp, roar, and wiggle like a dinosaur! Ollie Owl guides young adventurers through prehistoric moves while learning fun dinosaur facts.",
  },
  {
    id: "goodnight-sunshine",
    title: "Goodnight Sunshine",
    ageRange: "2–4",
    learningTopic: "Bedtime Routines",
    category: "bedtime-songs",
    youtubeUrl: "",
    thumbnailColor: "#FFB5C5",
    description:
      "A gentle, soothing lullaby to end the day. Toby Turtle leads a calming bedtime routine with soft music, twinkling stars, and sweet dreams.",
  },
];

export default episodes;
