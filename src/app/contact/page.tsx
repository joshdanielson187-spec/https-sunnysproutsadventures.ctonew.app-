"use client";

import { useState, type FormEvent } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
}

/* ------------------------------------------------------------------ */
/*  Validation                                                         */
/* ------------------------------------------------------------------ */

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.reason) {
    errors.reason = "Please select a reason for contacting us.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please enter a message (at least 10 characters).";
  } else if (data.message.trim().length > 1000) {
    errors.message = "Please keep your message under 1,000 characters.";
  }

  return errors;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  // Honeypot: hidden field bots fill in
  const [honeypot, setHoneypot] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot check: if filled, silently "succeed" without real submission
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange(field: keyof FormData, value: string) {
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

  const reasonOptions = [
    { value: "", label: "-- Select a reason --", disabled: true },
    { value: "general", label: "General Question" },
    { value: "feedback", label: "Parent Feedback" },
    { value: "business", label: "Business Partnership" },
    { value: "licensing", label: "Licensing" },
    { value: "technical", label: "Technical Problem" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-blue/15 via-white to-white">
        <div className="section-padding max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section className="section-padding max-w-2xl mx-auto pt-0">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gray-100 shadow-sm">
          {submitted ? (
            /* Success state */
            <div className="text-center py-10" role="status">
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
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-3">
                Thanks for reaching out!
              </h2>
              <p className="text-gray-600 font-body leading-relaxed max-w-sm mx-auto text-balance">
                We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot — hidden from real users, visible to bots */}
                <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Name field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-display font-semibold text-gray-700 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
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
                    htmlFor="contact-email"
                    className="block text-sm font-display font-semibold text-gray-700 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
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

                {/* Reason select */}
                <div>
                  <label
                    htmlFor="contact-reason"
                    className="block text-sm font-display font-semibold text-gray-700 mb-1.5"
                  >
                    Reason for Contacting
                  </label>
                  <select
                    id="contact-reason"
                    required
                    value={formData.reason}
                    onChange={(e) => handleChange("reason", e.target.value)}
                    aria-describedby={errors.reason ? "reason-error" : undefined}
                    aria-invalid={errors.reason ? "true" : undefined}
                    className={`w-full px-4 py-3 rounded-2xl font-body text-gray-800
                               border-2 transition-colors duration-200 appearance-none
                               focus:outline-none focus:ring-4 focus:ring-sunny-yellow/30
                               ${
                                 errors.reason
                                   ? "border-red-400 bg-red-50"
                                   : "border-gray-200 bg-white hover:border-gray-300 focus:border-sunny-yellow"
                               }`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239CA3AF' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      paddingRight: "2.5rem",
                    }}
                  >
                    {reasonOptions.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        disabled={opt.disabled}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.reason && (
                    <p
                      id="reason-error"
                      className="mt-1.5 text-sm text-red-600 font-body"
                      role="alert"
                    >
                      {errors.reason}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-display font-semibold text-gray-700 mb-1.5"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={errors.message ? "true" : undefined}
                    className={`w-full px-4 py-3 rounded-2xl font-body text-gray-800 resize-y
                               border-2 transition-colors duration-200
                               focus:outline-none focus:ring-4 focus:ring-sunny-yellow/30
                               placeholder:text-gray-400
                               ${
                                 errors.message
                                   ? "border-red-400 bg-red-50"
                                   : "border-gray-200 bg-white hover:border-gray-300 focus:border-sunny-yellow"
                               }`}
                    placeholder="Tell us what's on your mind..."
                    maxLength={1000}
                  />
                  <div className="flex justify-between items-center mt-1.5">
                    {errors.message ? (
                      <p
                        id="message-error"
                        className="text-sm text-red-600 font-body"
                        role="alert"
                      >
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-gray-400 font-body">
                      {formData.message.length}/1000
                    </span>
                  </div>
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
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Email alternative */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <p className="text-sm text-gray-500 font-body">
          Prefer email? Reach us at{" "}
          <span className="font-semibold text-gray-700">
            hello@sunnysproutsadventures.com
          </span>
        </p>
      </section>
    </div>
  );
}
