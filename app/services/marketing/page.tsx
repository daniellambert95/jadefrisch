import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Marketing Translation & Transcreation DE–EN — Jade Frisch",
  description:
    "Marketing translation, transcreation, SEO and localisation from German into English. Reach your English-speaking audience authentically. Based in Berlin.",
};

const examples = [
  "Product pages",
  "Catalogues and flyers",
  "Newsletters and direct marketing",
  "Blogs",
  "Sales training documentation",
  "Press releases",
  "Slogans",
  "Advertising campaigns",
  "Social media campaigns",
];

const serviceTypes = [
  {
    title: "Translation",
    description:
      "Accurate rendering of the original text, ensuring the message is conveyed clearly and fluently in English.",
  },
  {
    title: "Transcreation",
    description:
      "A creative translation where the source is taken as inspiration and recreated to ensure it resonates with the target audience. The perfect choice for campaigns that need to have an emotional effect. Cultural references, rhymes, plays on words and humour require cultural understanding and a firm grasp of who the target audience is.",
  },
  {
    title: "SEO Translation",
    description:
      "Optimising translated content for search engines, ensuring your brand is discoverable by English-speaking customers.",
  },
  {
    title: "Localisation",
    description:
      "Adapting content for regional language and cultural norms — different spelling variants, vocabulary, grammar, tone, cultural references, regulatory frameworks and more. Every region is different, and localisation ensures credibility by allowing content to connect with readers in the most familiar language.",
  },
];

export default function MarketingTranslationPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-0">
        <p className="font-(family-name:--font-dm-sans) text-[10px] uppercase tracking-[0.2em] text-muted/60">
          <Link href="/services" className="hover:text-gold transition-colors duration-200">Services</Link>
          <span className="mx-2">→</span>
          Marketing Translation
        </p>
      </div>

      <PageHero
        overline="Marketing Translation"
        title="Your brand, in their language."
        subtitle="Authentic, persuasive and culturally resonant."
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="max-w-3xl space-y-5 font-(family-name:--font-dm-sans) font-light text-charcoal/70 text-base md:text-lg leading-relaxed">
              <p>
                Companies devote so much time, money and resources to marketing,
                but then translation is an afterthought. Nowadays, users want
                high-quality content that is a pleasure to read, so it is worth
                investing in professional translation services.
              </p>
              <p>
                As an experienced linguist and language lead, I recognise your
                brand's voice and adapt it into English: whether you want to
                localise your business for the US or the UK specifically, or
                offer an international version of your website in English to
                reach more customers.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why professional */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <FadeIn>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
                Why it matters
              </p>
              <h2 className="font-(family-name:--font-cormorant) text-[clamp(2rem,4vw,3.2rem)] font-light text-ivory leading-tight mb-6">
                Why professional translation?
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <div className="space-y-4 font-(family-name:--font-dm-sans) font-light text-ivory/70 text-base leading-relaxed">
                <p>
                  In marketing translations in particular, machine translation
                  can fall short. Obvious use of machine translation and AI can
                  undermine your brand's credibility, as can rushed and
                  unprofessional translations, because the quality of language
                  your company uses directly reflects the quality of the brand.
                </p>
                <p>
                  Even small errors in spelling, grammar or punctuation can make
                  content look unprofessional and damage credibility. Brand
                  terminology, slogans and style guidelines need to be applied
                  consistently across all materials, and everything should read
                  as if it were written in English by a human.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
                Working with me
              </p>
              <h2 className="font-(family-name:--font-cormorant) text-[clamp(2rem,4vw,3.2rem)] font-light text-ivory leading-tight mb-6">
                A consistent voice across all assets
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <p className="font-(family-name:--font-dm-sans) font-light text-ivory/70 text-base leading-relaxed">
                Maintain a consistent voice across all your marketing assets
                that reflects the German version while adapting to the needs and
                expectations of the target audience.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <FadeIn>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
                Examples
              </p>
              <h2 className="font-(family-name:--font-cormorant) text-[clamp(2rem,4vw,3.2rem)] font-light text-charcoal leading-tight mb-6">
                What I translate
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <ul className="space-y-3">
                {examples.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-(family-name:--font-dm-sans) font-light text-charcoal/70 text-sm md:text-base"
                  >
                    <span className="w-4 h-px bg-gold mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
                <li className="flex items-start gap-3 font-(family-name:--font-dm-sans) font-light text-muted text-sm md:text-base italic">
                  <span className="w-4 h-px bg-gold/40 mt-2.5 shrink-0" />
                  and more
                </li>
              </ul>
            </FadeIn>

            {/* Target audience */}
            <FadeIn delay={0.1}>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
                Strategy
              </p>
              <h2 className="font-(family-name:--font-cormorant) text-[clamp(2rem,4vw,3.2rem)] font-light text-charcoal leading-tight mb-6">
                Who is your target audience?
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <p className="font-(family-name:--font-dm-sans) font-light text-charcoal/70 text-base leading-relaxed">
                English is spoken across the world, so translating into English
                can open up many markets. It is important to understand who your
                English-speaking customers are: do you want an international
                version of your website, or are you targeting the UK or US
                specifically? Perhaps even Australia or New Zealand? Getting this
                right from the start ensures your content connects with readers
                in the most familiar language.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service types */}
      <section className="py-20 md:py-28 bg-ivory border-t border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              What I offer
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2rem,4vw,3.2rem)] font-light text-charcoal leading-tight mb-16">
              Services for marketing content
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/10">
            {serviceTypes.map((service, i) => (
              <FadeIn key={i} delay={i * 0.08} className="bg-ivory p-10 md:p-12">
                <div className="w-6 h-px bg-gold mb-6" />
                <h3 className="font-(family-name:--font-cormorant) text-2xl md:text-3xl font-medium text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="font-(family-name:--font-dm-sans) text-muted font-light text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </FadeIn>
            ))}
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
              <h3 className="font-(family-name:--font-cormorant) text-xl font-medium text-charcoal">Technical Translation</h3>
              <p className="font-(family-name:--font-dm-sans) font-light text-muted text-sm leading-relaxed flex-1">Manuals, datasheets and software documentation — precise and consistent.</p>
              <Link href="/services/technical" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted hover:text-charcoal font-(family-name:--font-dm-sans) font-medium group transition-colors duration-300">
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
            Ready to discuss your marketing translation project?
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
