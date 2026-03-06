"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function About({ hideHeading = false, ctaHref }: { hideHeading?: boolean; ctaHref?: string }) {
  return (
    <section id="about" className="py-28 md:py-36 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Headshot */}
          <FadeIn delay={0.05}>
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
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
                    About
                  </p>
                  <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.2rem,4vw,3.5rem)] font-light text-ivory leading-tight mb-8">
                    A translator who lives
                    <br />
                    inside the language.
                  </h2>
                </>
              )}

              <div className="w-10 h-px bg-gold mb-8" />

              <div className="space-y-5 font-(family-name:--font-dm-sans) font-light text-ivory/70 text-base leading-relaxed">
                <p>
                  In 2013, Jade moved from Australia to Berlin to study and
                  pursue her interest in languages. In 2016, her career as a
                  translator began at a software company. Since then, she has
                  translated, edited, proofread and corrected millions of words.
                </p>
                <p>
                  Technical and marketing translations are her specialisations,
                  with clients spanning the IT, industrial manufacturing,
                  automotive, retail and mobility sectors. Additional services
                  include the proofreading and editing of academic and marketing
                  texts in English, as well as content and software localisation
                  for different English variants.
                </p>
                <p>
                  She holds a master's degree in linguistics from the Freie
                  Universität Berlin, where she studied French and Spanish, and
                  spent a semester studying translation at the Universitat de
                  València.
                </p>
              </div>

              {ctaHref && (
                <div className="mt-10">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory/60 hover:text-ivory font-(family-name:--font-dm-sans) font-medium group transition-colors duration-300"
                  >
                    Read more about me
                    <span className="w-8 h-px bg-gold transition-all duration-300 group-hover:w-12" />
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
