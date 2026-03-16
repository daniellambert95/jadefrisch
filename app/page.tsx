import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

function Intro() {
  return (
    <section className="py-24 md:py-32 bg-ivory border-t border-charcoal/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              What I do
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.2rem,4vw,3.5rem)] font-light text-charcoal leading-tight mb-6">
              Your company's voice, from technical documentation to branding.
            </h2>
            <div className="w-10 h-px bg-gold" />
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="space-y-5 font-(family-name:--font-dm-sans) font-light text-charcoal/70 text-base leading-relaxed">
              <p>
                Investing in professional translation ensures your brand sounds
                authentic, persuasive and resonates with your target audience
                emotionally.
              </p>
              <p>
                As an expert for technical and marketing translation, I offer a
                complete solution to help your business go international. For
                over ten years, I have been helping automotive, retail and IT
                companies in the DACH region communicate in flawless, fluent
                English.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-charcoal border border-charcoal/30 font-(family-name:--font-dm-sans) font-medium px-7 py-3.5 hover:border-charcoal transition-colors duration-300"
                >
                  View services
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
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              Why it matters
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.2rem,4vw,3.5rem)] font-light text-ivory leading-tight mb-6">
              Your brand speaks through the quality of its language.
            </h2>
            <div className="w-10 h-px bg-gold" />
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="space-y-5 font-(family-name:--font-dm-sans) font-light text-ivory/70 text-base leading-relaxed">
              <p>
                Obvious use of machine translation and AI can undermine your
                brand's credibility. Even small errors in spelling, grammar or
                punctuation make content look unprofessional — and the quality
                of language your company uses directly reflects the quality of
                the brand.
              </p>
              <p>
                Brand terminology, slogans and style guidelines need to be
                applied consistently across all materials. Everything should
                read as if it were written in English by a human — because
                your audience will notice when it isn't.
              </p>
              <div className="pt-2">
                <Link
                  href="/services/marketing"
                  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory border border-ivory/30 font-(family-name:--font-dm-sans) font-medium px-7 py-3.5 hover:border-ivory transition-colors duration-300"
                >
                  Marketing translation
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
  const items = [
    {
      q: "Why should I work with you instead of using machine translation and AI?",
      a: "Technology still has its limits. If you need the highest level of accuracy, deal with complexity, or have a carefully crafted brand voice, you need a human to ensure quality. I can also check machine translations for accuracy and consistency, or take on the whole project from scratch.",
    },
    {
      q: "What language pairs do you work with?",
      a: "My primary working language pair is German into English and English into German. I am a native English speaker with near-native German proficiency.",
    },
    {
      q: "Why work with a freelance language professional?",
      a: "Working together means we can communicate directly — no overhead, no back and forth. Your documents will always be translated by me, ensuring consistent terminology, voice and style.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">

          {/* Left */}
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
              Questions & answers
            </p>
            <h2 className="font-(family-name:--font-cormorant) text-[clamp(2.2rem,4vw,3.5rem)] font-light text-ivory leading-tight mb-6">
              Common questions
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="font-(family-name:--font-dm-sans) font-light text-ivory/60 text-base leading-relaxed mb-10">
              Everything you need to know before getting in touch.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory border border-ivory/30 font-(family-name:--font-dm-sans) font-medium px-8 py-4 hover:border-ivory transition-colors duration-300"
            >
              View all questions
            </Link>
          </FadeIn>

          {/* Right — question cards */}
          <div className="space-y-px bg-ivory/10">
            {items.map((item, i) => (
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
      <Testimonials />
      <FAQTeaser />
      <Contact />
    </>
  );
}
