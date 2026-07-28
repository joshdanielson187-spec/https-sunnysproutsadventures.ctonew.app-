import type { Metadata } from "next";
import siteConfig from "@/data/site-config";

export const metadata: Metadata = {
  title: "For Parents & Guardians",
  description:
    "Information for parents about Sunny Sprouts Adventures — our educational approach, safe content promise, and ad-free experience for ages 2–6.",
  openGraph: {
    title: `${siteConfig.name} — For Parents & Guardians`,
    description:
      "Learn why families trust Sunny Sprouts Adventures: original songs, age-appropriate content, positive lessons, and a completely ad-free experience for preschoolers.",
  },
};

export default function ParentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
