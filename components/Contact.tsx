"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Contact({ hideHeading = false }: { hideHeading?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const { lang } = useLanguage();
  const tr = t[lang].contact;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder — wire up Resend / Formspree here
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: intro */}
          <FadeIn>
            <div>
              {!hideHeading && (
                <>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
                    {tr.overline}
                  </p>
                  <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.5rem,5vw,4rem)] font-light text-charcoal leading-tight mb-8">
                    {tr.heading.split("\n").map((line, i, arr) => (
                      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                    ))}
                  </h2>
                </>
              )}
              <div className="w-10 h-px bg-gold mb-8" />
              <p className="font-(family-name:--font-dm-sans) font-light text-muted text-base leading-relaxed mb-8">
                {tr.intro}
              </p>

              <a
                href="mailto:frisch.jade@gmail.com"
                className="group flex items-center gap-3 font-(family-name:--font-dm-sans) text-charcoal font-light text-base hover:text-gold transition-colors duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 text-gold"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                frisch.jade@gmail.com
              </a>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.15}>
            {status === "sent" ? (
              <div className="flex items-center justify-center h-full min-h-75">
                <div className="text-center">
                  <div className="w-10 h-px bg-gold mx-auto mb-6" />
                  <p className="font-(family-name:--font-cormorant) text-2xl font-light text-charcoal mb-2">
                    {tr.thankYou}
                  </p>
                  <p className="font-(family-name:--font-dm-sans) font-light text-muted text-sm">
                    {tr.inTouch}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted font-(family-name:--font-dm-sans) font-medium mb-3">
                    {tr.labelName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={tr.placeholderName}
                    className="w-full bg-transparent border-0 border-b border-charcoal/20 pb-3 text-charcoal font-(family-name:--font-dm-sans) font-light text-base placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted font-(family-name:--font-dm-sans) font-medium mb-3">
                    {tr.labelEmail}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={tr.placeholderEmail}
                    className="w-full bg-transparent border-0 border-b border-charcoal/20 pb-3 text-charcoal font-(family-name:--font-dm-sans) font-light text-base placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted font-(family-name:--font-dm-sans) font-medium mb-3">
                    {tr.labelMessage}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder={tr.placeholderMessage}
                    className="w-full bg-transparent border-0 border-b border-charcoal/20 pb-3 text-charcoal font-(family-name:--font-dm-sans) font-light text-base placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-ivory bg-charcoal font-(family-name:--font-dm-sans) font-medium px-8 py-4 hover:bg-gold transition-colors duration-400 disabled:opacity-60"
                >
                  {status === "sending" ? tr.sending : tr.submit}
                  <span className="w-4 h-px bg-current transition-all duration-300 group-hover:w-7" />
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
