export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const categories: Category[] = [
  {
    id: "abcs-phonics",
    name: "ABCs & Phonics",
    description:
      "Learn letters, sounds, and early reading skills through catchy songs and rhymes.",
    icon: "abacus",
    color: "#FFD93D",
  },
  {
    id: "numbers-counting",
    name: "Numbers & Counting",
    description:
      "Count along with our characters as they explore numbers, patterns, and basic math.",
    icon: "hash",
    color: "#6EC6FF",
  },
  {
    id: "colors-shapes",
    name: "Colors & Shapes",
    description:
      "Discover the rainbow of colors and world of shapes through art, nature, and play.",
    icon: "palette",
    color: "#B39DDB",
  },
  {
    id: "healthy-habits",
    name: "Healthy Habits",
    description:
      "Build positive routines like brushing teeth, washing hands, eating well, and staying active.",
    icon: "heart",
    color: "#FF9A76",
  },
  {
    id: "animals-nature",
    name: "Animals & Nature",
    description:
      "Explore the animal kingdom and natural world with curiosity and wonder.",
    icon: "leaf",
    color: "#7BC67E",
  },
  {
    id: "vehicles-adventures",
    name: "Vehicles & Adventures",
    description:
      "All aboard for fun with cars, trains, planes, boats, and imaginary journeys.",
    icon: "car",
    color: "#FF6B6B",
  },
  {
    id: "feelings-kindness",
    name: "Feelings & Kindness",
    description:
      "Learn about emotions, empathy, friendship, and being kind to ourselves and others.",
    icon: "smile",
    color: "#FFB5C5",
  },
  {
    id: "bedtime-songs",
    name: "Bedtime Songs",
    description:
      "Gentle lullabies and calming routines to help little ones wind down and sleep peacefully.",
    icon: "moon",
    color: "#9B8EC0",
  },
];

export default categories;
