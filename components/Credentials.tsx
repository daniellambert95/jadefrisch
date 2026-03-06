"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Credentials() {
  return (
    <section id="credentials" className="py-28 md:py-36 bg-ivory">
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

        <div className="space-y-0">
          {/* CIOL */}
          <FadeIn delay={0}>
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 border-b border-charcoal/10">
              <span className="font-(family-name:--font-cormorant) text-gold text-sm tracking-widest font-light w-16 shrink-0 pt-1">
                2025
              </span>
              <div className="flex-1">
                <h3 className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-medium text-charcoal mb-1">
                  CIOL Diploma in Translation
                </h3>
                <p className="font-(family-name:--font-dm-sans) text-muted font-light text-sm mb-4">
                  Level 7 · Master's level equivalent · Chartered Institute of Linguists
                </p>
                <p className="font-(family-name:--font-dm-sans) text-charcoal/60 font-light text-sm leading-relaxed mb-2">
                  Passed the exam translating a general text, a technical text and a social sciences text from German into English.
                </p>
                <blockquote className="border-l-2 border-gold/40 pl-4 mt-4">
                  <p className="font-(family-name:--font-cormorant) italic text-muted text-base md:text-lg leading-relaxed">
                    "The CIOL Qualifications Level 7 Diploma in Translation (DipTrans) is set at Master's level and is the gold standard for anyone working as a freelance translator…"
                  </p>
                </blockquote>
              </div>
              <a
                href="https://www.ciol.org.uk/translator/profile/66210/35/13287"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 opacity-75 hover:opacity-100 transition-opacity duration-300 self-start"
                aria-label="View CIOL profile"
              >
                <Image
                  src="/Associate-CREST.png"
                  alt="Chartered Institute of Linguists — Associate"
                  width={130}
                  height={65}
                  className="object-contain"
                />
              </a>
            </div>
          </FadeIn>

          {/* MA */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 border-b border-charcoal/10">
              <span className="font-(family-name:--font-cormorant) text-gold text-sm tracking-widest font-light w-16 shrink-0 pt-1">
                2020
              </span>
              <div className="flex-1">
                <h3 className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-medium text-charcoal mb-1">
                  MA in Linguistics
                </h3>
                <p className="font-(family-name:--font-dm-sans) text-muted font-light text-sm mb-4">
                  Freie Universität Berlin
                </p>
                <p className="font-(family-name:--font-dm-sans) text-charcoal/60 font-light text-sm leading-relaxed">
                  Studied French and Spanish alongside German linguistics, and spent a semester studying translation at the Universitat de València.
                </p>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold/30 mt-2 shrink-0" />
            </div>
          </FadeIn>

          {/* BDÜ */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 border-b border-charcoal/10">
              <span className="font-(family-name:--font-cormorant) text-gold text-sm tracking-widest font-light w-16 shrink-0 pt-1">
                Active
              </span>
              <div className="flex-1">
                <h3 className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-medium text-charcoal mb-1">
                  Member, BDÜ
                </h3>
                <p className="font-(family-name:--font-dm-sans) text-muted font-light text-sm">
                  Bundesverband der Dolmetscher und Übersetzer
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0 self-start">
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
                    width={88}
                    height={45}
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
                    width={88}
                    height={45}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
