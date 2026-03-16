"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang } = useLanguage();
  const faqs = t[lang].faq.items;

  return (
    <section className="py-4 pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="border-b border-charcoal/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between gap-8 py-7 text-left group"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-(family-name:--font-cormorant) text-lg md:text-xl font-medium text-charcoal leading-snug group-hover:text-gold transition-colors duration-300">
                    {faq.q}
                  </span>
                  <span
                    className={`font-(family-name:--font-cormorant) text-2xl leading-none text-gold shrink-0 mt-0.5 transition-transform duration-300 ${
                      openIndex === i ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    openIndex === i ? "max-h-64 opacity-100 pb-7" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-(family-name:--font-dm-sans) font-light text-muted text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
