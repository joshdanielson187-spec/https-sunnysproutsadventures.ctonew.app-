import type { Metadata } from "next";
import siteConfig from "@/data/site-config";

export const metadata: Metadata = {
  title: "Watch & Learn",
  description:
    "Watch all Sunny Sprouts Adventures episodes — nursery rhymes, educational songs, and animated stories for preschoolers ages 2–6.",
  openGraph: {
    title: `${siteConfig.name} — Watch & Learn`,
    description:
      "Sing, dance, and learn! Browse our original preschool songs and animated adventures by category.",
  },
};

export default function WatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
