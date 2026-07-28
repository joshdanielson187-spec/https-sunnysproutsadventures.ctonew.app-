import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Children's Privacy",
  description:
    "Our commitment to protecting children's privacy — COPPA compliance and safe content practices at Sunny Sprouts Adventures.",
};

export default function ChildrensPrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-800 mb-4">
          Children&apos;s Privacy
        </h1>
        <p className="text-sm text-gray-400 font-body mb-10">
          Our commitment to protecting the youngest members of our community
        </p>

        {/* Our Commitment */}
        <section className="mb-10" aria-labelledby="commitment">
          <h2
            id="commitment"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Our Commitment to Children&apos;s Privacy
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            At Sunny Sprouts Adventures, protecting the privacy of children is
            one of our highest priorities. We are committed to complying with the
            Children&apos;s Online Privacy Protection Act (COPPA) and all
            applicable laws regarding the collection of information from children.
          </p>
          <p className="text-gray-600 font-body leading-relaxed">
            We believe that young children should be able to enjoy music,
            stories, and learning activities in a completely safe digital
            environment — free from data collection, advertising, and tracking
            of any kind.
          </p>
        </section>

        {/* No Collection */}
        <section className="mb-10" aria-labelledby="no-collection">
          <h2
            id="no-collection"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            We Do Not Collect Information from Children
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            We do not knowingly collect, use, or disclose personal information
            from children under the age of 13. Our website does not offer
            features that would prompt children to submit personal information —
            there are no child-facing forms, no chat features, no user accounts
            for children, and no interactive features that collect data.
          </p>
          <p className="text-gray-600 font-body leading-relaxed">
            The only form on this website that collects personal information is
            the parent email signup on our{" "}
            <Link
              href="/parents"
              className="text-sky-blue underline hover:text-blue-600 transition-colors"
            >
              Parents page
            </Link>
            , which is clearly intended for use by adults (parents and guardians)
            and includes an age verification checkbox.
          </p>
        </section>

        {/* Designed for Parents */}
        <section className="mb-10" aria-labelledby="for-parents">
          <h2
            id="for-parents"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Designed for Parents and Guardians
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            Sunny Sprouts Adventures is designed to be used by parents and
            guardians together with their young children. All content is
            presented in a way that parents can preview, select, and share with
            their children. We encourage families to enjoy our songs, videos,
            and printable activities together.
          </p>
          <p className="text-gray-600 font-body leading-relaxed">
            We recommend that parents and guardians supervise their
            children&apos;s internet use. While our site contains no ads,
            external links, or interactive child-facing features, responsible
            adult supervision helps ensure the safest possible experience.
          </p>
        </section>

        {/* Parental Rights */}
        <section className="mb-10" aria-labelledby="parental-rights">
          <h2
            id="parental-rights"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Parental Rights
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            If you are a parent or guardian and believe that your child may have
            provided us with personal information — for example, by using the
            parent email signup form — you have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 font-body leading-relaxed pl-2">
            <li>
              Request access to review any personal information we may hold.
            </li>
            <li>
              Request that we delete any personal information that may have been
              inadvertently collected.
            </li>
            <li>
              Refuse to allow any further collection or use of your child&apos;s
              information.
            </li>
          </ul>
          <p className="text-gray-600 font-body leading-relaxed mt-4">
            To exercise any of these rights, please contact us at{" "}
            <span className="font-semibold text-gray-700">
              hello@sunnysproutsadventures.com
            </span>{" "}
            or through our{" "}
            <Link
              href="/contact"
              className="text-sky-blue underline hover:text-blue-600 transition-colors"
            >
              Contact page
            </Link>
            . We will respond promptly to your request.
          </p>
        </section>

        {/* Safe Content Practices */}
        <section className="mb-10" aria-labelledby="safe-practices">
          <h2
            id="safe-practices"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Safe Content Practices
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            Beyond privacy, we are committed to creating content that is safe
            and appropriate for young children:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 font-body leading-relaxed pl-2">
            <li>
              <strong>No advertising</strong> — Our website and videos contain no
              ads, sponsored content, or product placements.
            </li>
            <li>
              <strong>No tracking</strong> — We do not use analytics,
              behavioral tracking, or cookies that monitor browsing.
            </li>
            <li>
              <strong>No autoplay</strong> — Videos do not autoplay, giving
              parents full control over what their child watches.
            </li>
            <li>
              <strong>Positive content only</strong> — No villains, no scares,
              no dark themes. Just warm, gentle, educational fun.
            </li>
          </ul>
        </section>

        {/* Reference to Main Privacy Policy */}
        <section className="mb-10" aria-labelledby="see-also">
          <h2
            id="see-also"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            More Information
          </h2>
          <p className="text-gray-600 font-body leading-relaxed">
            For complete details about how we handle information, please see our
            full{" "}
            <Link
              href="/privacy"
              className="text-sky-blue underline hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* Disclaimer */}
        <div className="border-t-2 border-gray-100 pt-6 mt-8">
          <p className="text-sm text-gray-400 font-body italic leading-relaxed">
            This information is provided to explain our practices. For complete
            guidance on COPPA compliance, please consult with a qualified
            attorney.
          </p>
        </div>
      </section>
    </div>
  );
}
