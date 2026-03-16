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
                  In 2016, my career began as the in-house English translator for
                  a German software company, where I localised the software
                  interface, training documentation, newsletters and blogs for
                  the international market. Since then, I have been a trusted
                  language expert for a range of businesses in the automotive,
                  logistics, retail and industrial engineering sectors.
                </p>
                <p>
                  I am a qualified and recognised professional, as a member of
                  the Bundesverband für Dolmetschen und Übersetzer (BDÜ,
                  Germany) and the Chartered Institute of Linguists (CIOL, UK).
                  I have passed the Diploma in Translation exam and have a
                  Master of Arts in Linguistics from Freie Universität Berlin.
                </p>
                <p>
                  Having lived in Germany since 2013, I understand the cultural
                  nuances and exactly how to localise them for wherever your
                  brand wants to be.
                </p>
              </div>

              {ctaHref && (
                <div className="mt-10">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory border border-ivory/30 font-(family-name:--font-dm-sans) font-medium px-8 py-4 hover:border-ivory transition-colors duration-300"
                  >
                    Read more about me
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
