import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Force light mode only — no dark mode on this children's site
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sunny-yellow": "#FFD93D",
        "sky-blue": "#6EC6FF",
        "grass-green": "#7BC67E",
        "soft-orange": "#FF9A76",
        "light-pink": "#FFB5C5",
        "purple-accent": "#B39DDB",
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
