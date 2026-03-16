"use client";

import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "I loved to work with Jade. Her ability to keep the best attitude even when the going gets tough, flexibility and great translation skills guarantee that the work will be well done.",
    author: "DuxTranslations",
  },
  {
    quote:
      "Jade has done consistently high-quality work, on-time and according to project guidelines.",
    author: "TBO IntoEnglish",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-16 md:mb-20">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              Testimonials
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.5rem,5vw,4rem)] font-light text-ivory leading-tight">
              What clients say
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative">
                {/* Decorative quotation mark */}
                <span
                  className="font-(family-name:--font-cormorant) text-[8rem] leading-none text-gold/20 absolute -top-6 -left-2 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote className="pt-10">
                  {/* Five stars */}
                  <div className="flex items-center gap-1 mb-6" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} className="w-4 h-4 fill-gold" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-light italic text-ivory/80 leading-relaxed mb-8">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-gold" />
                    <cite className="not-italic font-(family-name:--font-dm-sans) text-[11px] uppercase tracking-[0.2em] text-gold font-medium">
                      {t.author}
                    </cite>
                  </div>
                </blockquote>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
