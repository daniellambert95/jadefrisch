"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const logos = [
  // item 0 — CIOL diploma
  (
    <a
      href="https://www.ciol.org.uk/translator/profile/66210/35/13287"
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-75 hover:opacity-100 transition-opacity duration-300"
      aria-label="View CIOL profile"
    >
      <Image
        src="/Associate-CREST.png"
        alt="Chartered Institute of Linguists — Associate"
        width={110}
        height={55}
        className="object-contain"
      />
    </a>
  ),
  // item 1 — MA, no logo
  null,
  // item 2 — BDÜ
  (
    <div className="flex items-center gap-3">
      <a
        href="https://bdue.de/suche-uebersetzer-dolmetscher/mitglied/15215"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-75 hover:opacity-100 transition-opacity duration-300"
        aria-label="BDÜ Mitgliedsprofil"
      >
        <Image
          src="/Mitgliedslogo_vkd_de.svg"
          alt="BDÜ Mitglied"
          width={80}
          height={40}
          className="object-contain"
        />
      </a>
      <a
        href="https://members.bdue.de/15215"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-75 hover:opacity-100 transition-opacity duration-300"
        aria-label="BDÜ member profile"
      >
        <Image
          src="/Mitgliedslogo_vkd_en.svg"
          alt="BDÜ Member"
          width={80}
          height={40}
          className="object-contain"
        />
      </a>
    </div>
  ),
  // item 3 — CIOL Associate, no logo
  null,
];

export default function QualificationsTimeline() {
  const { lang } = useLanguage();
  const tr = t[lang].qualifications;

  return (
    <section className="py-28 md:py-36 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-16 md:mb-20">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              {tr.overline}
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.5rem,5vw,4rem)] font-light text-charcoal leading-tight">
              {tr.heading}
            </h2>
          </div>
        </FadeIn>

        <div className="relative max-w-2xl">
          {/* Vertical rule */}
          <div className="absolute left-4.75 top-3 bottom-3 w-px bg-gold/30" />

          {tr.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative pl-14 pb-10 last:pb-0">
              {/* Gold dot */}
              <div className="absolute left-3.25 top-1.75 w-3 h-3 rounded-full bg-gold border-2 border-ivory" />

              {/* Card */}
              <div className="rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
                <h3 className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-medium text-charcoal mb-1">
                  {item.title}
                </h3>
                <p className="font-(family-name:--font-dm-sans) text-muted font-light text-sm mb-1">
                  {item.subtitle}
                </p>
                {"detail" in item && item.detail && (
                  <p className="font-(family-name:--font-dm-sans) text-charcoal/50 font-light text-sm leading-relaxed mt-2">
                    {item.detail}
                  </p>
                )}
                {logos[i] && (
                  <div className="mt-4">
                    {logos[i]}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
