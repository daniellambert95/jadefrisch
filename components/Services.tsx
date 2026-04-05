"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const serviceHrefs = ["/services/technical", "/services/marketing", "/services/proofreading-localisation"];

export default function Services() {
  const { lang } = useLanguage();
  const tr = t[lang].services;

  return (
    <section id="services" className="py-28 md:py-36 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">

          {/* Left — sticky label + intro + CTA */}
          <FadeIn className="lg:sticky lg:top-32">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              {tr.overline}
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.5rem,5vw,4rem)] font-light text-charcoal leading-tight mb-6">
              {tr.heading}
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="font-(family-name:--font-dm-sans) font-light text-muted text-base leading-relaxed mb-10">
              {tr.intro}
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory bg-charcoal font-(family-name:--font-dm-sans) font-medium px-8 py-4 hover:bg-gold transition-colors duration-300"
            >
              {tr.cta}
            </Link>
          </FadeIn>

          {/* Right — 3-row stack */}
          <div className="flex flex-col gap-px bg-charcoal/10">
            {tr.items.map((service, i) => (
              <FadeIn
                key={service.num}
                delay={i * 0.07}
                className="group relative bg-ivory p-8 md:p-10 hover:bg-white transition-colors duration-300 overflow-hidden flex flex-col"
              >
                {/* Gold left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />

                {/* Number watermark */}
                <span className="font-(family-name:--font-cormorant) text-[4.5rem] leading-none font-light text-charcoal/6 absolute top-2 right-4 select-none pointer-events-none">
                  {service.num}
                </span>

                <div className="w-5 h-px bg-gold mb-5" />

                <h3 className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-medium text-charcoal mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="font-(family-name:--font-dm-sans) text-muted font-light text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={serviceHrefs[i]}
                    className="inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.2em] text-charcoal border border-charcoal/20 font-(family-name:--font-dm-sans) font-medium px-5 py-2.5 hover:border-charcoal hover:bg-charcoal hover:text-ivory transition-colors duration-300"
                  >
                    {service.linkLabel}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
