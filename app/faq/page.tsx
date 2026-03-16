"use client";

import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function FAQPage() {
  const { lang } = useLanguage();
  const tr = t[lang].faqPage;

  return (
    <>
      <PageHero
        overline={tr.overline}
        title={tr.title}
        subtitle={tr.subtitle}
      />
      <FAQ />
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-3xl border-t border-charcoal/10 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-light text-charcoal max-w-xs">
            {tr.stillQuestions}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory bg-charcoal font-(family-name:--font-dm-sans) font-medium px-8 py-4 hover:bg-gold transition-colors duration-300"
          >
            {tr.cta}
            <span className="w-4 h-px bg-current" />
          </Link>
        </div>
      </div>
    </>
  );
}
