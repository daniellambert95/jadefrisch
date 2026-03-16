import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Technical Translation DE–EN — Jade Frisch",
  description:
    "Precise German-to-English technical translation for automotive, IT and industrial sectors. Terminology management, glossaries and style guides. Based in Berlin.",
};

const fields = [
  "Automotive",
  "IT",
  "Industrial manufacturing",
  "Construction and plumbing",
];

const documents = [
  "User guides",
  "Help and troubleshooting documents",
  "Operating and maintenance manuals",
  "Knowledge base articles",
  "Software interfaces",
  "Product requirements specifications",
  "Technical datasheets",
  "Installation manuals",
  "Safety documentation and compliance materials",
];

export default function TechnicalTranslationPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-0">
        <p className="font-(family-name:--font-dm-sans) text-[10px] uppercase tracking-[0.2em] text-muted/60">
          <Link href="/services" className="hover:text-gold transition-colors duration-200">Services</Link>
          <span className="mx-2">→</span>
          Technical Translation
        </p>
      </div>

      <PageHero
        overline="Technical Translation"
        title="Precision in every word."
        subtitle="From manuals to software documentation, accuracy is non-negotiable."
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="max-w-3xl space-y-5 font-(family-name:--font-dm-sans) font-light text-charcoal/70 text-base md:text-lg leading-relaxed">
              <p>
                Technical translation requires the highest level of precision,
                accuracy and consistency. To achieve this, you need to work with
                an experienced and qualified professional who knows how your
                product works.
              </p>
              <p>
                From the intricacies of the smallest inner parts that make taps
                work to the intelligent software that helps you park your car: I
                understand and delight in this backstage access to the world
                around me.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Fields */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              Specialisations
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2rem,4vw,3.2rem)] font-light text-ivory leading-tight mb-12">
              Fields I work in
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ivory/10">
            {fields.map((field, i) => (
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
                Consistency
              </p>
              <h2 className="font-(family-name:--font-cormorant) text-[clamp(2rem,4vw,3.2rem)] font-light text-charcoal leading-tight mb-6">
                Terminology management
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <div className="space-y-4 font-(family-name:--font-dm-sans) font-light text-charcoal/70 text-base leading-relaxed">
                <p>
                  Good technical translations must use accurate and specific
                  terminology. Consistent use of specialised terms keeps
                  documentation clear and precise.
                </p>
                <p>
                  I work with glossaries, terminology databases and style guides
                  to make sure that key terms are translated consistently across
                  documents, updates and product versions.
                </p>
              </div>
            </FadeIn>

            {/* Documents list */}
            <FadeIn delay={0.1}>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
                What I translate
              </p>
              <h2 className="font-(family-name:--font-cormorant) text-[clamp(2rem,4vw,3.2rem)] font-light text-charcoal leading-tight mb-6">
                Documents
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <ul className="space-y-3">
                {documents.map((doc, i) => (
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
                  and more
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
              Related services
            </p>
          </FadeIn>
          <div className="flex flex-col sm:flex-row gap-px bg-charcoal/10">
            <FadeIn delay={0} className="flex-1 bg-ivory p-8 flex flex-col gap-3">
              <h3 className="font-(family-name:--font-cormorant) text-xl font-medium text-charcoal">Marketing Translation & Transcreation</h3>
              <p className="font-(family-name:--font-dm-sans) font-light text-muted text-sm leading-relaxed flex-1">Campaigns, product pages and brand copy — adapted for English-speaking audiences.</p>
              <Link href="/services/marketing" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted hover:text-charcoal font-(family-name:--font-dm-sans) font-medium group transition-colors duration-300">
                Learn more <span className="w-5 h-px bg-gold transition-all duration-300 group-hover:w-8" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.08} className="flex-1 bg-ivory p-8 flex flex-col gap-3">
              <h3 className="font-(family-name:--font-cormorant) text-xl font-medium text-charcoal">Proofreading & Editing</h3>
              <p className="font-(family-name:--font-dm-sans) font-light text-muted text-sm leading-relaxed flex-1">Native-level review of translated or originally authored English content.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted hover:text-charcoal font-(family-name:--font-dm-sans) font-medium group transition-colors duration-300">
                Get in touch <span className="w-5 h-px bg-gold transition-all duration-300 group-hover:w-8" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="border-t border-charcoal/10 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-light text-charcoal max-w-md">
            Ready to discuss your technical translation project?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory bg-charcoal font-(family-name:--font-dm-sans) font-medium px-8 py-4 hover:bg-gold transition-colors duration-300"
          >
            Get in touch
            <span className="w-4 h-px bg-current" />
          </Link>
        </div>
      </div>
    </>
  );
}
