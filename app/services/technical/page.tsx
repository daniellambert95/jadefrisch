"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function TechnicalTranslationPage() {
  const { lang } = useLanguage();
  const tr = t[lang].technicalPage;

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-0">
        <p className="font-(family-name:--font-dm-sans) text-[10px] uppercase tracking-[0.2em] text-muted/60">
          <Link href="/services" className="hover:text-gold transition-colors duration-200">
            {tr.breadcrumbServices}
          </Link>
          <span className="mx-2">→</span>
          {tr.breadcrumbCurrent}
        </p>
      </div>

      <PageHero
        overline={tr.overline}
        title={tr.title}
        subtitle={tr.subtitle}
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="max-w-3xl space-y-5 font-(family-name:--font-dm-sans) font-light text-charcoal/70 text-base md:text-lg leading-relaxed">
              <p>{tr.intro1}</p>
              <p>{tr.intro2}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Fields */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              {tr.fieldsOverline}
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2rem,4vw,3.2rem)] font-light text-ivory leading-tight mb-12">
              {tr.fieldsHeading}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ivory/10">
            {tr.fields.map((field, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-charcoal p-8 md:p-10">
                  <div className="w-6 h-px bg-gold mb-4" />
                  <p className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-medium text-ivory">
                    {field}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Terminology management */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <FadeIn>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
                {tr.terminologyOverline}
              </p>
              <h2 className="font-(family-name:--font-cormorant) text-[clamp(2rem,4vw,3.2rem)] font-light text-charcoal leading-tight mb-6">
                {tr.terminologyHeading}
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <div className="space-y-4 font-(family-name:--font-dm-sans) font-light text-charcoal/70 text-base leading-relaxed">
                <p>{tr.terminology1}</p>
                <p>{tr.terminology2}</p>
              </div>
            </FadeIn>

            {/* Documents list */}
            <FadeIn delay={0.1}>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
                {tr.documentsOverline}
              </p>
              <h2 className="font-(family-name:--font-cormorant) text-[clamp(2rem,4vw,3.2rem)] font-light text-charcoal leading-tight mb-6">
                {tr.documentsHeading}
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <ul className="space-y-3">
                {tr.documents.map((doc, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-(family-name:--font-dm-sans) font-light text-charcoal/70 text-sm md:text-base"
                  >
                    <span className="w-4 h-px bg-gold mt-2.5 shrink-0" />
                    {doc}
                  </li>
                ))}
                <li className="flex items-start gap-3 font-(family-name:--font-dm-sans) font-light text-muted text-sm md:text-base italic">
                  <span className="w-4 h-px bg-gold/40 mt-2.5 shrink-0" />
                  {tr.andMore}
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 md:py-20 bg-ivory border-t border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-8">
              {tr.relatedOverline}
            </p>
          </FadeIn>
          <div className="flex flex-col sm:flex-row gap-px bg-charcoal/10">
            <FadeIn delay={0} className="flex-1 bg-ivory p-8 flex flex-col gap-3">
              <h3 className="font-(family-name:--font-cormorant) text-xl font-medium text-charcoal">{tr.relatedMarketing}</h3>
              <p className="font-(family-name:--font-dm-sans) font-light text-muted text-sm leading-relaxed flex-1">{tr.relatedMarketingDesc}</p>
              <Link href="/services/marketing" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted hover:text-charcoal font-(family-name:--font-dm-sans) font-medium group transition-colors duration-300">
                {tr.learnMore} <span className="w-5 h-px bg-gold transition-all duration-300 group-hover:w-8" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.08} className="flex-1 bg-ivory p-8 flex flex-col gap-3">
              <h3 className="font-(family-name:--font-cormorant) text-xl font-medium text-charcoal">{tr.relatedProofreading}</h3>
              <p className="font-(family-name:--font-dm-sans) font-light text-muted text-sm leading-relaxed flex-1">{tr.relatedProofreadingDesc}</p>
              <Link href="/contact" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted hover:text-charcoal font-(family-name:--font-dm-sans) font-medium group transition-colors duration-300">
                {tr.getInTouch} <span className="w-5 h-px bg-gold transition-all duration-300 group-hover:w-8" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="border-t border-charcoal/10 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-light text-charcoal max-w-md">
            {tr.ctaText}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory bg-charcoal font-(family-name:--font-dm-sans) font-medium px-8 py-4 hover:bg-gold transition-colors duration-300"
          >
            {tr.getInTouch}
            <span className="w-4 h-px bg-current" />
          </Link>
        </div>
      </div>
    </>
  );
}
