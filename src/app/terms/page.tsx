import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Sunny Sprouts Adventures website and content — please read before using our site.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-800 mb-4">
          Terms of Use
        </h1>
        <p className="text-sm text-gray-400 font-body mb-10">
          Last updated: 2026
        </p>

        {/* Acceptance of Terms */}
        <section className="mb-10" aria-labelledby="acceptance">
          <h2
            id="acceptance"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Acceptance of Terms
          </h2>
          <p className="text-gray-600 font-body leading-relaxed">
            By accessing and using the Sunny Sprouts Adventures website
            (sunnysproutsadventures.com), you agree to be bound by these Terms of
            Use. If you do not agree with any part of these terms, please do not
            use our website.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-10" aria-labelledby="ip">
          <h2
            id="ip"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Intellectual Property
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            All content on this website — including but not limited to characters
            (Benny Bear, Rosie Rabbit, Penny Panda, Ollie Owl, Daisy Duck, Toby
            Turtle, and all related designs), songs, artwork, illustrations,
            stories, videos, printable activities, the &ldquo;Sunny Sprouts
            Adventures&rdquo; name and logo, and website design — is the original
            intellectual property of Sunny Sprouts Adventures and is protected by
            copyright and other intellectual property laws.
          </p>
          <p className="text-gray-600 font-body leading-relaxed">
            For more information, see our{" "}
            <Link
              href="/copyright"
              className="text-sky-blue underline hover:text-blue-600 transition-colors"
            >
              Copyright Notice
            </Link>
            .
          </p>
        </section>

        {/* Use of Content */}
        <section className="mb-10" aria-labelledby="use-content">
          <h2
            id="use-content"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Use of Content
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            The content on this website is provided for personal, non-commercial
            use. You may:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 font-body leading-relaxed mb-4 pl-2">
            <li>
              Watch our videos with your family for personal enjoyment and
              education.
            </li>
            <li>
              Download and print our activity sheets for personal home use or
              classroom use with your students.
            </li>
          </ul>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            You may not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 font-body leading-relaxed pl-2">
            <li>
              Reproduce, distribute, or sell our content without written
              permission.
            </li>
            <li>
              Use our characters, songs, or brand for any commercial purpose.
            </li>
            <li>
              Re-upload our videos or claim our content as your own.
            </li>
            <li>
              Modify, adapt, or create derivative works from our content.
            </li>
          </ul>
        </section>

        {/* External Links */}
        <section className="mb-10" aria-labelledby="external-links">
          <h2
            id="external-links"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            External Links
          </h2>
          <p className="text-gray-600 font-body leading-relaxed">
            Our website may contain links to external platforms such as YouTube
            for video content. We are not responsible for the content, privacy
            practices, or terms of any third-party websites. We encourage parents
            and guardians to review the policies of any external sites before
            allowing children to access them.
          </p>
        </section>

        {/* Parental Supervision */}
        <section className="mb-10" aria-labelledby="parental">
          <h2
            id="parental"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Parental Supervision
          </h2>
          <p className="text-gray-600 font-body leading-relaxed">
            This website is designed for parents and guardians to use with their
            young children. We strongly recommend that parents and guardians
            supervise their children&apos;s internet use at all times.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mb-10" aria-labelledby="disclaimer">
          <h2
            id="disclaimer"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Disclaimer
          </h2>
          <p className="text-gray-600 font-body leading-relaxed">
            The content on Sunny Sprouts Adventures is provided &ldquo;as-is&rdquo;
            for entertainment and educational purposes. While we strive to create
            accurate and age-appropriate content, we make no warranties about the
            completeness or suitability of the information provided. Parents and
            guardians should use their own judgment when selecting content for
            their children.
          </p>
        </section>

        {/* Contact */}
        <section aria-labelledby="terms-contact">
          <h2
            id="terms-contact"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Questions?
          </h2>
          <p className="text-gray-600 font-body leading-relaxed">
            If you have questions about these Terms of Use, please{" "}
            <Link
              href="/contact"
              className="text-sky-blue underline hover:text-blue-600 transition-colors"
            >
              contact us
            </Link>
            .
          </p>
        </section>
      </section>
    </div>
  );
}
