"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function About({ hideHeading = false, ctaHref }: { hideHeading?: boolean; ctaHref?: string }) {
  const { lang } = useLanguage();
  const tr = t[lang].about;

  return (
    <section id="about" className="py-28 md:py-36 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Headshot */}
          <FadeIn delay={0.05}>
            <div className="relative">
              <div className="aspect-3/4 relative overflow-hidden">
                <Image
                  src="/jade-frisch-headshot-blue-2.jpg"
                  alt="Jade Frisch"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Decorative offset border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10" />
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={0.15}>
            <div>
              {!hideHeading && (
                <>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
                    {tr.overline}
                  </p>
                  <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.2rem,4vw,3.5rem)] font-light text-ivory leading-tight mb-8">
                    {tr.heading.split("\n").map((line, i) => (
                      <span key={i}>{line}{i < tr.heading.split("\n").length - 1 && <br />}</span>
                    ))}
                  </h2>
                </>
              )}

              <div className="w-10 h-px bg-gold mb-8" />

              <div className="space-y-5 font-(family-name:--font-dm-sans) font-light text-ivory/70 text-base leading-relaxed">
                <p>{tr.bio1}</p>
                <p>{tr.bio2}</p>
                {tr.bio3 && <p>{tr.bio3}</p>}
              </div>

              {ctaHref && (
                <div className="mt-10">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory border border-ivory/30 font-(family-name:--font-dm-sans) font-medium px-8 py-4 hover:border-ivory transition-colors duration-300"
                  >
                    {tr.cta}
                  </Link>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
