"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const items = [
  {
    title: "Diploma in Translation",
    subtitle: "For German-English, technical and social sciences",
    detail: "Chartered Institute of Linguists (CIOL) — Level 7, Master's level equivalent",
    logo: (
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
  },
  {
    title: "Master of Arts in Linguistics",
    subtitle: "Freie Universität Berlin",
    detail: "Studied French and Spanish alongside German linguistics, with a semester in translation at the Universitat de València.",
  },
  {
    title: "BDÜ Member",
    subtitle: "Bundesverband für Dolmetschen und Übersetzen",
    logo: (
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
  },
  {
    title: "CIOL Associate",
    subtitle: "Chartered Institute of Linguists, UK",
  },
];

export default function QualificationsTimeline() {
  return (
    <section className="py-28 md:py-36 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-16 md:mb-20">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              Qualifications
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.5rem,5vw,4rem)] font-light text-charcoal leading-tight">
              Credentials
            </h2>
          </div>
        </FadeIn>

        <div className="relative max-w-2xl">
          {/* Vertical rule */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gold/30" />

          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative pl-14 pb-10 last:pb-0">
              {/* Gold dot */}
              <div className="absolute left-[13px] top-[7px] w-3 h-3 rounded-full bg-gold border-2 border-ivory" />

              {/* Card */}
              <div className="rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
                <h3 className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-medium text-charcoal mb-1">
                  {item.title}
                </h3>
                <p className="font-(family-name:--font-dm-sans) text-muted font-light text-sm mb-1">
                  {item.subtitle}
                </p>
                {item.detail && (
                  <p className="font-(family-name:--font-dm-sans) text-charcoal/50 font-light text-sm leading-relaxed mt-2">
                    {item.detail}
                  </p>
                )}
                {item.logo && (
                  <div className="mt-4">
                    {item.logo}
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
