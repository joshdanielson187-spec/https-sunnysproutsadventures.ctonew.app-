export interface Character {
  id: string;
  name: string;
  personality: string;
  favoriteActivity: string;
  biography: string;
  favoriteSong: string;
  favoriteColor: string;
  lesson: string;
  color: string;
  relatedEpisodeIds: string[];
}

const characters: Character[] = [
  {
    id: "benny-bear",
    name: "Benny Bear",
    personality: "Gentle, curious, and encouraging",
    favoriteActivity: "Counting everything he sees",
    biography:
      "Benny Bear is a warm-hearted brown bear who loves numbers, honey, and helping his forest friends. With his cozy scarf and gentle smile, Benny makes learning to count feel like a warm hug. He lives in a cozy cave filled with numbered honey pots and counting books.",
    favoriteSong: "Count With Benny Bear",
    favoriteColor: "Sky Blue",
    lesson: "Every number is a new friend waiting to be discovered.",
    color: "#6EC6FF",
    relatedEpisodeIds: ["count-with-benny-bear"],
  },
  {
    id: "rosie-rabbit",
    name: "Rosie Rabbit",
    personality: "Energetic, bubbly, and optimistic",
    favoriteActivity: "Morning exercise and healthy cooking",
    biography:
      "Rosie Rabbit bounces into every day with endless energy and a bright smile. She loves carrots, jumping rope, and teaching her friends about healthy habits. Rosie lives in a sunny burrow with a vegetable garden and always carries a little pink hair bow.",
    favoriteSong: "Good Morning Sunshine",
    favoriteColor: "Soft Orange",
    lesson: "A healthy body and happy heart start with good habits every morning.",
    color: "#FF9A76",
    relatedEpisodeIds: ["good-morning-sunshine", "brush-brush-brush"],
  },
  {
    id: "penny-panda",
    name: "Penny Panda",
    personality: "Creative, thoughtful, and imaginative",
    favoriteActivity: "Painting rainbows and mixing colors",
    biography:
      "Penny Panda sees the world in every color of the rainbow. With her paintbrush always in paw, she loves teaching colors through art, nature, and imagination. She lives in a bamboo studio filled with paintings, craft supplies, and colorful lanterns.",
    favoriteSong: "Rainbow Train",
    favoriteColor: "Purple Accent",
    lesson: "Every color is beautiful, just like every friend is special in their own way.",
    color: "#B39DDB",
    relatedEpisodeIds: ["rainbow-train"],
  },
  {
    id: "ollie-owl",
    name: "Ollie Owl",
    personality: "Wise, playful, and adventurous",
    favoriteActivity: "Exploring nature and learning animal facts",
    biography:
      "Ollie Owl is the wise big sibling of the group who knows amazing facts about animals, dinosaurs, and the natural world. But don't let the glasses fool you — Ollie loves to dance, stomp, and roar just as much as teach. Ollie lives in a treehouse library.",
    favoriteSong: "Dinosaur Dance",
    favoriteColor: "Grass Green",
    lesson: "Learning is an adventure — be curious, ask questions, and don't be afraid to dance!",
    color: "#7BC67E",
    relatedEpisodeIds: ["dinosaur-dance"],
  },
  {
    id: "daisy-duck",
    name: "Daisy Duck",
    personality: "Kind, gentle, and nurturing",
    favoriteActivity: "Singing songs about feelings and friendship",
    biography:
      "Daisy Duck has the sweetest singing voice in the pond. She helps her friends understand their feelings — whether they're happy, sad, excited, or scared — and reminds everyone that all feelings are okay. Daisy loves giving hugs and wearing her little flower crown.",
    favoriteSong: "The Feelings Song",
    favoriteColor: "Light Pink",
    lesson: "All feelings are welcome — sharing how you feel is the bravest thing you can do.",
    color: "#FFB5C5",
    relatedEpisodeIds: [],
  },
  {
    id: "toby-turtle",
    name: "Toby Turtle",
    personality: "Calm, patient, and dependable",
    favoriteActivity: "Star-gazing and telling bedtime stories",
    biography:
      "Toby Turtle may be slow, but he has the biggest heart. He's the friend everyone turns to when it's time to wind down. With his soft, gentle voice and his collection of glow-in-the-dark stars, Toby helps little ones feel safe, cozy, and ready for sweet dreams.",
    favoriteSong: "Goodnight Sunshine",
    favoriteColor: "Sunny Yellow",
    lesson: "Slowing down is a superpower — rest, dream, and start each new day refreshed.",
    color: "#FFD93D",
    relatedEpisodeIds: ["goodnight-sunshine"],
  },
];

export default characters;
