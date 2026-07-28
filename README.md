# Sunny Sprouts Adventures — Website

A polished, mobile-friendly preschool entertainment website promoting original nursery rhyme videos, educational songs, and animated adventures for children ages 2–6. The site features lovable original characters, video episode cards, interactive character profiles, printable activities, and parent-focused information — all in a bright, welcoming style with no ads or tracking.

Built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**. Deployed as a static-friendly, server-rendered application on the Bun runtime.

## Table of Contents

- [How to Edit Content](#how-to-edit-content)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Going Live](#going-live)

---

## How to Edit Content

The site uses a **data-driven architecture** — all content lives in simple TypeScript data files under `src/data/`. You can change almost anything without touching component code.

### 1. Change the Logo

Edit `src/components/Logo.tsx` — the logo is an inline SVG component. Adjust colors, shapes, or sizes directly in the SVG markup. To use an image file instead, replace the SVG with an `<img>` tag pointing to a file in `/public/`:

```tsx
<img src="/images/logo.png" alt="Sunny Sprouts Adventures" width={180} height={66} />
```

### 2. Replace Character Images

Character avatar SVGs are rendered inline in `src/app/characters/page.tsx`, `src/app/characters/[id]/page.tsx`, and `src/app/page.tsx`. To replace with real artwork:

1. Place PNG or WebP images in `/public/images/characters/` (e.g., `benny-bear.png`)
2. Replace the inline SVG rendering with `<img>` tags:

```tsx
<img
  src={`/images/characters/${character.id}.png`}
  alt={character.name}
  width={160}
  height={160}
  className="rounded-full"
/>
```

Character data (names, biographies, colors, etc.) is in `src/data/characters.ts`.

### 3. Add YouTube Videos

Edit `src/data/episodes.ts`. Set `youtubeUrl` to the full YouTube video URL (e.g., `"https://www.youtube.com/watch?v=abc123"`). When a URL is present:

- The badge automatically changes from **"Coming Soon"** to **"Watch Now"**
- The thumbnail play button becomes clickable

Leave `youtubeUrl` as `""` (empty string) for videos not yet published.

### 4. Add Downloadable Activity PDFs

1. Place PDF files in `/public/activities/` (e.g., `coloring-pages.pdf`)
2. Edit `src/data/activities.ts` — set `isAvailable` to `true` for each activity
3. Add a `pdfUrl` property to the `Activity` interface and reference the PDF path

When `isAvailable` is `true`, the **"Download PDF"** button enables automatically.

### 5. Update Social Media Links

Edit `src/data/site-config.ts`. Update these URLs:

```ts
youtubeUrl: "https://www.youtube.com/@YourChannel",
socialMedia: {
  instagram: "https://instagram.com/yourhandle",
  facebook: "https://facebook.com/yourpage",
  pinterest: "https://pinterest.com/yourhandle",
}
```

The NavBar YouTube button and Footer social icons use these values automatically.

### 6. Connect the Email Signup Form

The form at `/parents` is currently **client-side validation only** (it shows a success message without sending data). To connect it to a real backend:

1. Open `src/app/parents/page.tsx`
2. In the `handleSubmit` function (around line 166), replace or extend the success logic to POST form data to your API:

```ts
async function handleSubmit(e: FormEvent) {
  e.preventDefault();
  const validationErrors = validateForm(formData);
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length === 0) {
    // Send to your API
    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    setSubmitted(true);
  }
}
```

Supported services: Mailchimp, ConvertKit, Resend, or any custom API endpoint.

### 7. Deploy the Website

For local development or preview, run:

```bash
bun run publish
```

This builds the site and starts the production server on **port 3000**. For production hosting, see [Going Live](#going-live) below.

---

## Project Structure

```
sunny-sprouts-adventures/
├── public/                  # Static assets
│   ├── favicon.svg          #   Site favicon (smiling sun)
│   ├── og-image.svg         #   Open Graph social share image
│   ├── robots.txt           #   SEO: crawl directives
│   └── sitemap.xml          #   SEO: all site URLs
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── globals.css      #   Global styles, Tailwind directives
│   │   ├── layout.tsx       #   Root layout (metadata, nav, footer)
│   │   ├── page.tsx         #   Homepage
│   │   ├── about/           #   About page
│   │   ├── activities/      #   Printable activities page
│   │   ├── characters/      #   Character listing + [id] detail pages
│   │   ├── childrens-privacy/ # Children's privacy policy
│   │   ├── contact/         #   Contact form page
│   │   ├── copyright/       #   Copyright notice
│   │   ├── parents/         #   For Parents page + email signup
│   │   ├── privacy/         #   Privacy policy
│   │   ├── songs/           #   Songs listing page
│   │   ├── terms/           #   Terms of use
│   │   └── watch/           #   Watch episodes page
│   ├── components/          # Reusable UI components
│   │   ├── AnimalAvatar.tsx #   Character avatar SVGs (bear, rabbit, etc.)
│   │   ├── Footer.tsx       #   Site footer with links and copyright
│   │   ├── Logo.tsx         #   Sunny Sprouts logo SVG
│   │   ├── MobileMenu.tsx   #   Slide-out mobile navigation
│   │   └── NavBar.tsx       #   Sticky top navigation bar
│   └── data/                # Content data files (edit these!)
│       ├── activities.ts    #   Printable activities data
│       ├── categories.ts    #   Video categories (colors, numbers, etc.)
│       ├── characters.ts    #   Character profiles and bios
│       ├── episodes.ts      #   Video episodes (titles, YouTube URLs)
│       ├── navigation.ts    #   Nav link definitions
│       └── site-config.ts   #   Site-wide config (name, social links)
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS theme (colors, fonts)
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

---

## Getting Started

### Prerequisites

- **Bun** (recommended) or Node.js 18+
- No database or external services required

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

Starts the Next.js dev server at `http://localhost:3000` with hot reload.

### Production Build

```bash
bun run build    # Build optimized production bundle
bun run publish  # Build + serve on port 3000
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** | React framework with App Router for file-based routing and SSR/static generation |
| **TypeScript** | Type-safe development across all components and data files |
| **Tailwind CSS** | Utility-first CSS with custom brand colors (sunny yellow, sky blue, grass green, etc.) |
| **Bun** | Fast JavaScript runtime and package manager |
| **React 18** | UI component library |

### Design Principles

- **Mobile-first responsive** — every component works at 320px, 768px, and 1024px+
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation, alt text on all images
- **No dark mode** — this is a bright, cheerful children's site; forced light mode only
- **No ads, no tracking** — no analytics, no cookies, no data collection
- **No autoplay** — videos never autoplay; parents have full control
- **Original content only** — all characters, songs, artwork, and stories are original IP

---

## Going Live

### Recommended Hosts

The site builds as a standard Next.js application and can be deployed to:

- **Vercel** — zero-config deploy, connect your GitHub repo
- **Netlify** — use `bun run build` then deploy the `.next` output
- **Any Node.js host** — run `bun run publish` (or `npm start`) to serve on port 3000

### Environment Variables

No environment variables required for basic operation. Add your own for:
- Email service API keys (when connecting the signup form)
- Custom domain configuration

### Pre-Launch Checklist

- [ ] Replace all placeholder artwork with final character designs
- [ ] Add real YouTube video URLs to `src/data/episodes.ts`
- [ ] Upload printable activity PDFs to `/public/activities/`
- [ ] Connect email signup form to your email service
- [ ] Update social media links in `src/data/site-config.ts`
- [ ] Verify all legal pages (privacy policy, terms, COPPA compliance) with a qualified attorney
- [ ] Test all pages at 320px, 768px, and 1024px+ widths
- [ ] Submit `sitemap.xml` to Google Search Console
