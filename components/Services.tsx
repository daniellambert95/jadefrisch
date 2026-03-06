"use client";

import FadeIn from "./FadeIn";

const services = [
  {
    num: "01",
    title: "Technical Translation",
    description:
      "Precise DE↔EN translation of manuals, specifications, data sheets, software documentation and engineering content. Specialised across IT, automotive and industrial manufacturing sectors.",
  },
  {
    num: "02",
    title: "Marketing Translation & Transcreation",
    description:
      "DE↔EN translation of marketing copy, campaigns, product descriptions and websites. More than word-for-word — tone, intent and cultural nuance are preserved for the target audience.",
  },
  {
    num: "03",
    title: "Proofreading & Editing",
    description:
      "Native-level English proofreading of any text, whether translated or originally authored. Grammar, spelling, punctuation and style refined for academic, marketing and corporate contexts.",
  },
  {
    num: "04",
    title: "Linguistic Validation & Localisation",
    description:
      "Software and app localisation — UI strings, help content and user-facing copy. Content adapted for AU, UK and US English variants, with linguistic validation against the source.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 md:mb-20">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              What I offer
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.5rem,5vw,4rem)] font-light text-charcoal leading-tight">
              Services
            </h2>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/10">
          {services.map((service, i) => (
            <FadeIn
              key={service.num}
              delay={i * 0.08}
              className="group relative bg-ivory p-10 md:p-12 hover:bg-white transition-colors duration-400 overflow-hidden"
            >
              {/* Gold left border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />

              {/* Number accent */}
              <span className="font-(family-name:--font-cormorant) text-[5rem] md:text-[7rem] leading-none font-light text-charcoal/6 absolute top-4 right-8 select-none pointer-events-none">
                {service.num}
              </span>

              {/* Gold dash */}
              <div className="w-6 h-px bg-gold mb-6" />

              <h3 className="font-(family-name:--font-cormorant) text-2xl md:text-3xl font-medium text-charcoal mb-4 tracking-wide">
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
  );
}
