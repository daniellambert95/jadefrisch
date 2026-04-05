"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

function Intro() {
  const { lang } = useLanguage();
  const tr = t[lang].home.intro;

  return (
    <section className="py-24 md:py-32 bg-ivory border-t border-charcoal/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              {tr.overline}
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.2rem,4vw,3.5rem)] font-light text-charcoal leading-tight mb-6">
              {tr.heading}
            </h2>
            <div className="w-10 h-px bg-gold" />
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="space-y-5 font-(family-name:--font-dm-sans) font-light text-charcoal/70 text-base leading-relaxed">
              <p>{tr.p1}</p>
              <p>{tr.p2}</p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-charcoal border border-charcoal/30 font-(family-name:--font-dm-sans) font-medium px-7 py-3.5 hover:border-charcoal transition-colors duration-300"
                >
                  {tr.cta}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function WhyProfessional() {
  const { lang } = useLanguage();
  const tr = t[lang].home.why;

  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              {tr.overline}
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.2rem,4vw,3.5rem)] font-light text-ivory leading-tight mb-6">
              {tr.heading}
            </h2>
            <div className="w-10 h-px bg-gold" />
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="space-y-5 font-(family-name:--font-dm-sans) font-light text-ivory/70 text-base leading-relaxed">
              <p>{tr.p1}</p>
              <p>{tr.p2}</p>
              <div className="pt-2">
                <Link
                  href="/services/marketing"
                  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory border border-ivory/30 font-(family-name:--font-dm-sans) font-medium px-7 py-3.5 hover:border-ivory transition-colors duration-300"
                >
                  {tr.cta}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FAQTeaser() {
  const { lang } = useLanguage();
  const tr = t[lang].home.faqTeaser;

  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">

          {/* Left */}
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              {tr.overline}
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.2rem,4vw,3.5rem)] font-light text-ivory leading-tight mb-6">
              {tr.heading}
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="font-(family-name:--font-dm-sans) font-light text-ivory/60 text-base leading-relaxed mb-10">
              {tr.intro}
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory border border-ivory/30 font-(family-name:--font-dm-sans) font-medium px-8 py-4 hover:border-ivory transition-colors duration-300"
            >
              {tr.cta}
            </Link>
          </FadeIn>

          {/* Right — question cards */}
          <div className="space-y-px bg-ivory/10">
            {tr.items.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-charcoal p-8 md:p-10 border-l-2 border-transparent hover:border-gold transition-colors duration-300">
                  <p className="font-(family-name:--font-cormorant) text-lg md:text-xl font-medium text-ivory mb-3">
                    {item.q}
                  </p>
                  <p className="font-(family-name:--font-dm-sans) font-light text-ivory/60 text-sm md:text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <WhyProfessional />
      <About ctaHref="/about" />
      <FAQTeaser />
      <Contact />
    </>
  );
}
