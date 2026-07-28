import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Sunny Sprouts Adventures — how we protect your family's information and comply with COPPA.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 font-body mb-10">
          Last updated: 2026
        </p>

        {/* Information We Collect */}
        <section className="mb-10" aria-labelledby="info-collect">
          <h2
            id="info-collect"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Information We Collect
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            When you subscribe to our email updates through the parent signup form
            on our website, we collect only the information you voluntarily provide:
            your name and email address.
          </p>
          <p className="text-gray-600 font-body leading-relaxed">
            We do not collect any other personal information through this website.
            We do not use tracking cookies, analytics services, or any other
            technology that monitors or records your browsing behavior.
          </p>
        </section>

        {/* How We Use Information */}
        <section className="mb-10" aria-labelledby="how-use">
          <h2
            id="how-use"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            How We Use Information
          </h2>
          <p className="text-gray-600 font-body leading-relaxed">
            The name and email address you provide are used solely to send you
            updates about new songs, videos, printable activities, and other
            content from Sunny Sprouts Adventures. We do not sell, rent, or share
            your information with third parties for marketing purposes.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-10" aria-labelledby="children-privacy">
          <h2
            id="children-privacy"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Children&apos;s Privacy
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            This website is intended for use by parents and guardians. We do not
            knowingly collect personal information directly from children under 13.
            If you believe your child has provided us with personal information,
            please contact us immediately so we can remove it.
          </p>
          <p className="text-gray-600 font-body leading-relaxed">
            For more information about our commitment to protecting children&apos;s
            privacy, please see our{" "}
            <Link
              href="/childrens-privacy"
              className="text-sky-blue underline hover:text-blue-600 transition-colors"
            >
              Children&apos;s Privacy page
            </Link>
            .
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-10" aria-labelledby="cookies">
          <h2
            id="cookies"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Cookies
          </h2>
          <p className="text-gray-600 font-body leading-relaxed">
            This website does not use tracking cookies or third-party analytics.
            We do not place any cookies on your device for advertising, tracking,
            or profiling purposes.
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="mb-10" aria-labelledby="third-party">
          <h2
            id="third-party"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Third-Party Services
          </h2>
          <p className="text-gray-600 font-body leading-relaxed">
            We may link to YouTube for video content. YouTube is a service provided
            by Google and has its own privacy policy that governs how it collects
            and uses information. We encourage you to review YouTube&apos;s privacy
            policy before allowing your child to watch videos on their platform.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-10" aria-labelledby="contact">
          <h2
            id="contact"
            className="text-2xl font-display font-bold text-gray-800 mb-4"
          >
            Contact Us
          </h2>
          <p className="text-gray-600 font-body leading-relaxed mb-4">
            If you have questions about this privacy policy or wish to request
            access to or deletion of any personal information we may hold, please
            contact us:
          </p>
          <p className="text-gray-700 font-body">
            Email:{" "}
            <span className="font-semibold">
              hello@sunnysproutsadventures.com
            </span>
          </p>
          <p className="text-gray-600 font-body mt-2">
            Or visit our{" "}
            <Link
              href="/contact"
              className="text-sky-blue underline hover:text-blue-600 transition-colors"
            >
              Contact page
            </Link>
            .
          </p>
        </section>

        {/* Disclaimer */}
        <div className="border-t-2 border-gray-100 pt-6 mt-8">
          <p className="text-sm text-gray-400 font-body italic leading-relaxed">
            This privacy policy is provided for informational purposes. For
            complete COPPA compliance, please consult with a qualified attorney.
          </p>
        </div>
      </section>
    </div>
  );
}
