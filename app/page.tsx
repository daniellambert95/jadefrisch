import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

function SectionCTA({ href, label }: { href: string; label: string }) {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 pb-8">
      <FadeIn>
        <Link
          href={href}
          className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted hover:text-charcoal font-(family-name:--font-dm-sans) font-medium group transition-colors duration-300"
        >
          {label}
          <span className="w-8 h-px bg-gold transition-all duration-300 group-hover:w-12" />
        </Link>
      </FadeIn>
    </div>
  );
}

function FAQTeaser() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-12">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              Questions & answers
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.5rem,5vw,4rem)] font-light text-charcoal leading-tight mb-10">
              Common questions
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-3xl space-y-0">
          {[
            {
              q: "What language pairs do you work with?",
              a: "My primary working language pair is German into English and English into German. I am a native English speaker with near-native German proficiency.",
            },
            {
              q: "Do you use CAT tools or translation memory?",
              a: "Yes. I use SDL Trados Studio and memoQ. Translation memories are maintained per client, ensuring consistency and potential cost savings on repeat volumes.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="py-7 border-b border-charcoal/10">
                <p className="font-(family-name:--font-cormorant) text-lg md:text-xl font-medium text-charcoal mb-3">
                  {item.q}
                </p>
                <p className="font-(family-name:--font-dm-sans) font-light text-muted text-base leading-relaxed">
                  {item.a}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-charcoal font-(family-name:--font-dm-sans) font-medium group"
            >
              View all questions
              <span className="w-10 h-px bg-gold transition-all duration-300 group-hover:w-16" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SectionCTA href="/services" label="View all services" />
      <About ctaHref="/about" />
      <Credentials />
      <SectionCTA href="/credentials" label="View full credentials" />
      <Testimonials />
      <FAQTeaser />
      <Contact />
    </>
  );
}
