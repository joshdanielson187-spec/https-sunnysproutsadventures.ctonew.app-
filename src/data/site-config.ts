export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  youtubeUrl: string;
  socialMedia: {
    instagram: string;
    facebook: string;
    pinterest: string;
  };
}

const siteConfig: SiteConfig = {
  name: "Sunny Sprouts Adventures",
  tagline: "Sing, Learn & Grow Together!",
  description:
    "Sunny Sprouts Adventures brings original nursery rhymes, educational songs, and animated stories to preschoolers ages 2–6. Join Benny Bear, Rosie Rabbit, and friends for fun, music, and learning — all in a safe, ad-free space.",
  youtubeUrl: "https://www.youtube.com/@SunnySproutsAdventures",
  socialMedia: {
    instagram: "https://instagram.com/sunnysproutsadventures",
    facebook: "https://facebook.com/sunnysproutsadventures",
    pinterest: "https://pinterest.com/sunnysproutsadventures",
  },
};

export default siteConfig;
