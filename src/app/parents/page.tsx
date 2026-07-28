"use client";

import { useState, type FormEvent } from "react";

// Benefit card data
const benefits = [
  {
    id: "original-songs",
    title: "Original Preschool Songs",
    description:
      "Every song we create is original — designed from the ground up to be catchy, educational, and perfect for little listeners ages 2–6.",
    iconColor: "#FFD93D",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 flex-shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#FFD93D" opacity="0.2" />
        <circle cx="15" cy="30" r="4" fill="#FFD93D" />
        <circle cx="33" cy="26" r="4" fill="#FFD93D" />
        <line x1="19" y1="30" x2="19" y2="10" stroke="#FFD93D" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="37" y1="26" x2="37" y2="8" stroke="#FFD93D" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="17" y1="14" x2="35" y2="12" stroke="#FFD93D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "age-appropriate",
    title: "Age-Appropriate Content",
    description:
      "Everything we create is specifically tailored for children ages 2–6, with simple language, relatable themes, and just-right pacing.",
    iconColor: "#6EC6FF",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 flex-shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#6EC6FF" opacity="0.2" />
        <circle cx="18" cy="20" r="5" fill="#6EC6FF" />
        <circle cx="32" cy="20" r="5" fill="#6EC6FF" />
        <path d="M14 30 Q24 38 34 30" stroke="#6EC6FF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: "positive-lessons",
    title: "Positive Lessons",
    description:
      "Every episode reinforces positive values: kindness, sharing, curiosity, confidence, and respect for others — in ways young children understand.",
    iconColor: "#7BC67E",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 flex-shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#7BC67E" opacity="0.2" />
        <path d="M24 12 Q28 22 24 28 Q20 22 24 12" fill="#7BC67E" />
        <circle cx="24" cy="30" r="2" fill="#7BC67E" />
        <rect x="20" y="33" width="8" height="6" rx="2" fill="#7BC67E" />
      </svg>
    ),
  },
  {
    id: "safe-gentle",
    title: "Safe & Gentle",
    description:
      "No villains, no scares, no darkness. Just warm, gentle stories and songs that make children feel safe, happy, and loved.",
    iconColor: "#FFB5C5",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 flex-shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#FFB5C5" opacity="0.2" />
        <path
          d="M24 10 C18 14 10 18 10 24 C10 32 18 36 24 40 C30 36 38 32 38 24 C38 18 30 14 24 10 Z"
          fill="#FFB5C5"
        />
        <circle cx="20" cy="23" r="2" fill="white" />
        <circle cx="28" cy="23" r="2" fill="white" />
        <path d="M20 30 Q24 34 28 30" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: "screen-free",
    title: "Simple Learning Activities",
    description:
      "Beyond the screen: we offer printable coloring pages, tracing sheets, and puzzles so children can extend the learning offline.",
    iconColor: "#FF9A76",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 flex-shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#FF9A76" opacity="0.2" />
        <rect x="8" y="8" width="20" height="28" rx="2" fill="#FF9A76" opacity="0.5" />
        <rect x="24" y="14" width="16" height="22" rx="2" fill="#FF9A76" />
        <line x1="16" y1="16" x2="24" y2="16" stroke="white" strokeWidth="2" />
        <line x1="16" y1="22" x2="24" y2="22" stroke="white" strokeWidth="2" />
        <line x1="16" y1="28" x2="20" y2="28" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "ad-free",
    title: "Ad-Free Experience",
    description:
      "No advertisements, no tracking, no data collection. Sunny Sprouts Adventures is a completely clean, safe space for families.",
    iconColor: "#B39DDB",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 flex-shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#B39DDB" opacity="0.2" />
        <path d="M18 16 L30 16 L30 32 L18 32 Z" fill="#B39DDB" />
        <circle cx="24" cy="24" r="6" fill="white" />
        <path d="M30 14 L34 10 M34 14 L30 10" stroke="#B39DDB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

// Testimonial data
const testimonials = [
  {
    name: "Sarah M.",
    quote:
      "Finally, a channel I can trust! My 3-year-old loves the songs, and I love knowing there are no ads or surprises.",
  },
  {
    name: "James L.",
    quote:
      "The printable activities are a lifesaver on rainy days. My daughter colors the characters while humming the songs — it's adorable!",
  },
  {
    name: "Maria G.",
    quote:
      "As a preschool teacher, I appreciate the thought behind every episode. Age-appropriate, positive, and genuinely educational.",
  },
];

// Form state types
interface FormData {
  name: string;
  email: string;
  ageConfirmed: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  ageConfirmed?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.ageConfirmed) {
    errors.ageConfirmed = "You must confirm you are at least 18 years old.";
  }

  return errors;
}

export default function ParentsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    ageConfirmed: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange(field: keyof FormData, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field on change
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-soft-orange/15 via-white to-white">
        <div className="section-padding max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-800 mb-4">
            For Parents &amp; Guardians
          </h1>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <p className="text-lg sm:text-xl text-gray-600 text-center leading-relaxed text-balance">
          At Sunny Sprouts Adventures, we believe in creating content that parents can
          trust and children love. Every song, every character, and every activity is
          designed with care — to nurture curiosity, build confidence, and bring
          families together through music and play. We&apos;re parents too, and we
          take our responsibility to your family seriously.
        </p>
      </section>

      {/* Benefit cards */}
      <section className="section-padding max-w-7xl mx-auto pt-0">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-800 text-center mb-10">
          Why Families Love Sunny Sprouts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <article
              key={benefit.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-gray-100
                         transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5"
              style={{ borderTopColor: benefit.iconColor, borderTopWidth: "3px" }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="font-display font-bold text-gray-800 text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-500 font-body leading-relaxed">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Parental notice box */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div
          className="rounded-3xl p-5 sm:p-7 border-2 border-soft-orange/30 flex items-start gap-4"
          style={{ backgroundColor: "#FFF5EE" }}
        >
          <svg
            className="w-6 h-6 flex-shrink-0 mt-0.5 text-soft-orange"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-sm sm:text-base text-gray-700 font-body leading-relaxed font-semibold">
            Parents and guardians should supervise young children while they use the
            internet.
          </p>
        </div>
      </section>

      {/* Email Signup Form */}
      <section className="section-padding max-w-2xl mx-auto pt-0">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gray-100 shadow-sm">
          {submitted ? (
            /* Success state */
            <div className="text-center py-8" role="status">
              <div className="mb-4" aria-hidden="true">
                <svg
                  className="w-16 h-16 mx-auto text-grass-green"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <circle cx="32" cy="32" r="28" fill="#7BC67E" opacity="0.15" />
                  <path
                    d="M20 32 L28 40 L44 24"
                    stroke="#7BC67E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
                Thank you!
              </h3>
              <p className="text-gray-600 font-body leading-relaxed max-w-sm mx-auto text-balance">
                We&apos;ll let you know when new songs and activities are ready.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-800 text-center mb-2">
                Get New Songs and Activities
              </h2>
              <p className="text-gray-500 text-center mb-8 font-body text-balance">
                Be the first to know when we release new content for your little ones!
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="parent-name"
                    className="block text-sm font-display font-semibold text-gray-700 mb-1.5"
                  >
                    Parent or Guardian Name
                  </label>
                  <input
                    id="parent-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={errors.name ? "true" : undefined}
                    className={`w-full px-4 py-3 rounded-2xl font-body text-gray-800
                               border-2 transition-colors duration-200
                               focus:outline-none focus:ring-4 focus:ring-sunny-yellow/30
                               placeholder:text-gray-400
                               ${
                                 errors.name
                                   ? "border-red-400 bg-red-50"
                                   : "border-gray-200 bg-white hover:border-gray-300 focus:border-sunny-yellow"
                               }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1.5 text-sm text-red-600 font-body"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="parent-email"
                    className="block text-sm font-display font-semibold text-gray-700 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="parent-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={errors.email ? "true" : undefined}
                    className={`w-full px-4 py-3 rounded-2xl font-body text-gray-800
                               border-2 transition-colors duration-200
                               focus:outline-none focus:ring-4 focus:ring-sunny-yellow/30
                               placeholder:text-gray-400
                               ${
                                 errors.email
                                   ? "border-red-400 bg-red-50"
                                   : "border-gray-200 bg-white hover:border-gray-300 focus:border-sunny-yellow"
                               }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1.5 text-sm text-red-600 font-body"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Age confirmation checkbox */}
                <div>
                  <div className="flex items-start gap-3">
                    <input
                      id="age-confirmed"
                      type="checkbox"
                      checked={formData.ageConfirmed}
                      onChange={(e) => handleChange("ageConfirmed", e.target.checked)}
                      aria-describedby={errors.ageConfirmed ? "age-error" : undefined}
                      aria-invalid={errors.ageConfirmed ? "true" : undefined}
                      className="mt-1 w-5 h-5 rounded-md border-2 border-gray-300
                                 text-sunny-yellow focus:ring-sunny-yellow focus:ring-4
                                 cursor-pointer accent-sunny-yellow"
                    />
                    <label
                      htmlFor="age-confirmed"
                      className="text-sm text-gray-600 font-body leading-relaxed cursor-pointer select-none"
                    >
                      I confirm I am at least 18 years old
                    </label>
                  </div>
                  {errors.ageConfirmed && (
                    <p
                      id="age-error"
                      className="mt-1.5 text-sm text-red-600 font-body"
                      role="alert"
                    >
                      {errors.ageConfirmed}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl font-display font-semibold text-lg
                             bg-sunny-yellow text-gray-800
                             hover:bg-yellow-400 transition-all duration-200
                             shadow-md hover:shadow-lg
                             focus:outline-none focus:ring-4 focus:ring-sunny-yellow/50
                             active:scale-[0.98]"
                >
                  Subscribe for Updates
                </button>
              </form>

              {/* Privacy note */}
              <p className="text-xs text-gray-400 text-center mt-6 font-body leading-relaxed max-w-md mx-auto">
                We respect your privacy. We will never share your information or use
                it for anything other than Sunny Sprouts updates. We do not collect
                information directly from children.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding max-w-7xl mx-auto pt-0 pb-16">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-800 text-center mb-10">
          What Parents Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-gray-100
                         transition-all duration-300 hover:shadow-md"
            >
              <svg
                className="w-8 h-8 text-light-pink/50 mb-3"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 8 C4 8 0 14 0 20 C0 24 2 28 8 28 C6 24 6 20 8 18 C10 16 12 14 14 14 C14 10 12 8 10 8 Z" />
                <path d="M26 8 C20 8 16 14 16 20 C16 24 18 28 24 28 C22 24 22 20 24 18 C26 16 28 14 30 14 C30 10 28 8 26 8 Z" />
              </svg>
              <p className="text-gray-600 font-body leading-relaxed italic mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="text-sm font-display font-semibold text-gray-800">
                — {testimonial.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
