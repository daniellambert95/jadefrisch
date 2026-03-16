import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services — Jade Frisch",
  description:
    "Technical translation, marketing transcreation, proofreading, editing and linguistic validation. German–English, Berlin.",
};

const services = [
  {
    num: "01",
    title: "Technical Translation",
    description:
      "Precise DE↔EN translation of manuals, specifications, data sheets, software documentation and engineering content. Specialised across IT, automotive and industrial manufacturing sectors.",
    href: "/services/technical",
    linkLabel: "Explore",
    dark: true,
  },
  {
    num: "02",
    title: "Marketing Translation & Transcreation",
    description:
      "Translation, transcreation, SEO and localisation for campaigns, product pages, social media and more. Your brand voice, preserved and adapted for English-speaking audiences.",
    href: "/services/marketing",
    linkLabel: "Explore",
    dark: true,
  },
  {
    num: "03",
    title: "Proofreading & Editing",
    description:
      "Native-level English proofreading of any text, whether translated or originally authored. Grammar, spelling, punctuation and style refined for academic, marketing and corporate contexts.",
    href: "/contact",
    linkLabel: "Get in touch",
    dark: false,
  },
  {
    num: "04",
    title: "Linguistic Validation & Localisation",
    description:
      "Software and app localisation — UI strings, help content and user-facing copy. Content adapted for AU, UK and US English variants, with linguistic validation against the source.",
    href: "/contact",
    linkLabel: "Get in touch",
    dark: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        overline="Language services"
        title="Services"
        subtitle="Technical and marketing translations DE↔EN, and more."
      />

      {/* Services grid */}
      <section className="pb-28 md:pb-36 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/10">
            {services.map((service, i) => (
              <FadeIn
                key={service.num}
                delay={i * 0.08}
                className={`group relative p-10 md:p-14 flex flex-col overflow-hidden transition-colors duration-400 ${
                  service.dark
                    ? "bg-charcoal hover:bg-charcoal-80"
                    : "bg-ivory hover:bg-white"
                }`}
              >
                {/* Gold left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />

                {/* Number accent */}
                <span
                  className={`font-(family-name:--font-cormorant) text-[5rem] md:text-[7rem] leading-none font-light absolute top-4 right-8 select-none pointer-events-none ${
                    service.dark ? "text-ivory/6" : "text-charcoal/6"
                  }`}
                >
                  {service.num}
                </span>

                <div className="w-6 h-px bg-gold mb-6" />

                <h3
                  className={`font-(family-name:--font-cormorant) text-2xl md:text-3xl font-medium mb-4 tracking-wide ${
                    service.dark ? "text-ivory" : "text-charcoal"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`font-(family-name:--font-dm-sans) font-light text-sm md:text-base leading-relaxed flex-1 ${
                    service.dark ? "text-ivory/60" : "text-muted"
                  }`}
                >
                  {service.description}
                </p>

                <div className="mt-8">
                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-(family-name:--font-dm-sans) font-medium transition-colors duration-300 ${
                      service.dark
                        ? "text-ivory/50 hover:text-ivory"
                        : "text-muted hover:text-charcoal"
                    }`}
                  >
                    {service.linkLabel}
                    <span className="w-6 h-px bg-gold transition-all duration-300 group-hover:w-10" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="border-t border-charcoal/10 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-light text-charcoal max-w-md">
            Ready to discuss your project?
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
