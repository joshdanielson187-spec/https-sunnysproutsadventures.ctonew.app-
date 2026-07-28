import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import siteConfig from "@/data/site-config";

export const metadata: Metadata = {
  title: {
    default: "Sunny Sprouts Adventures | Original Nursery Rhymes and Preschool Songs",
    template: "%s | Sunny Sprouts Adventures",
  },
  description:
    "Sing, dance, and learn with Sunny Sprouts Adventures—original nursery rhymes, educational songs, lovable characters, and preschool activities for children ages 2–6.",
  openGraph: {
    title: "Sunny Sprouts Adventures | Original Nursery Rhymes and Preschool Songs",
    description:
      "Sing, dance, and learn with Sunny Sprouts Adventures—original nursery rhymes, educational songs, lovable characters, and preschool activities for children ages 2–6.",
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: "https://sunnysproutsadventures.ctonew.app/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sunny Sprouts Adventures — Sing, Learn & Grow Together!",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sunny Sprouts Adventures | Original Nursery Rhymes and Preschool Songs",
    description:
      "Sing, dance, and learn with Sunny Sprouts Adventures—original nursery rhymes, educational songs, lovable characters, and preschool activities for children ages 2–6.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head>
        {/* Force light mode — no dark mode on this children's site */}
        <meta name="color-scheme" content="light only" />
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
