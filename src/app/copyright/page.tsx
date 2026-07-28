import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Copyright Notice",
  description:
    "Copyright information for all Sunny Sprouts Adventures content — characters, songs, artwork, stories, and more.",
};

export default function CopyrightPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-800 mb-4">
          Copyright Notice
        </h1>

        {/* Main copyright statement */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gray-100 shadow-sm mb-10">
          <p className="text-xl sm:text-2xl font-display font-bold text-gray-800 text-center">
            &copy; 2026 Sunny Sprouts Adventures. All rights reserved.
          </p>
        </div>

        {/* What's Protected */}
        <section className="mb-10" aria-labelledby="what-protected">
          <h2
            id="what-protected"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            What Is Protected
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            All original content created by Sunny Sprouts Adventures is protected
            by copyright law. This includes, but is not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 font-body leading-relaxed pl-2">
            <li>
              <strong>Original characters</strong> — Benny Bear, Rosie Rabbit,
              Penny Panda, Ollie Owl, Daisy Duck, Toby Turtle, and all related
              character designs, names, personalities, and backstories.
            </li>
            <li>
              <strong>Original songs and music</strong> — All lyrics, melodies,
              arrangements, and recordings.
            </li>
            <li>
              <strong>Original artwork and illustrations</strong> — All
              character art, background illustrations, thumbnails, logos, and
              visual designs appearing on this website and in our videos.
            </li>
            <li>
              <strong>Original stories and scripts</strong> — All written
              content, including episode scripts, storylines, and educational
              materials.
            </li>
            <li>
              <strong>Website content</strong> — All text, layout, design
              elements, and the overall look and feel of the Sunny Sprouts
              Adventures website.
            </li>
            <li>
              <strong>Printable activities</strong> — All coloring pages,
              worksheets, puzzles, and downloadable content.
            </li>
            <li>
              <strong>The brand</strong> — The name &ldquo;Sunny Sprouts
              Adventures,&rdquo; taglines, and associated branding elements.
            </li>
          </ul>
        </section>

        {/* Permitted Use */}
        <section className="mb-10" aria-labelledby="permitted-use">
          <h2
            id="permitted-use"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Permitted Use
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            You are welcome to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 font-body leading-relaxed pl-2">
            <li>
              Watch our videos with your family for personal enjoyment.
            </li>
            <li>
              Download and print our activity sheets for personal home or
              classroom use.
            </li>
            <li>
              Share links to our website and videos with other families and
              educators.
            </li>
          </ul>
          <p className="text-gray-600 font-body leading-relaxed mt-4">
            These permissions do not extend to commercial use, redistribution,
            or modification of our content.
          </p>
        </section>

        {/* Licensing */}
        <section className="mb-10" aria-labelledby="licensing">
          <h2
            id="licensing"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Licensing Inquiries
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            If you are interested in licensing our characters, songs, or content
            for commercial use — including but not limited to merchandise,
            publishing, broadcasting, educational products, or digital
            applications — we&apos;d love to hear from you.
          </p>
          <p className="text-gray-600 font-body leading-relaxed">
            Please visit our{" "}
            <Link
              href="/contact"
              className="text-sky-blue underline hover:text-blue-600 transition-colors"
            >
              Contact page
            </Link>{" "}
            and select &ldquo;Licensing&rdquo; as your reason for contacting us.
          </p>
        </section>

        {/* DMCA / Infringement */}
        <section className="mb-10" aria-labelledby="dmca">
          <h2
            id="dmca"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Copyright Infringement
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            If you believe that any content on this website infringes upon your
            copyright, please contact us with the following information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 font-body leading-relaxed pl-2 mb-4">
            <li>A description of the copyrighted work you believe has been infringed.</li>
            <li>
              A description of where the allegedly infringing material is located
              on our website.
            </li>
            <li>Your contact information (name, address, email, phone).</li>
            <li>
              A statement that you have a good faith belief that the use is not
              authorized by the copyright owner.
            </li>
            <li>
              A statement, made under penalty of perjury, that the information in
              your notice is accurate.
            </li>
          </ul>
          <p className="text-gray-600 font-body leading-relaxed">
            Please send copyright-related correspondence to:{" "}
            <span className="font-semibold text-gray-700">
              hello@sunnysproutsadventures.com
            </span>
          </p>
        </section>

        {/* Footer note */}
        <div className="border-t-2 border-gray-100 pt-6 mt-8">
          <p className="text-sm text-gray-400 font-body leading-relaxed">
            Thank you for respecting the creative work that goes into making
            Sunny Sprouts Adventures a safe, joyful place for children and
            families.
          </p>
        </div>
      </section>
    </div>
  );
}
