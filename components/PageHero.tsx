import FadeIn from "./FadeIn";

interface PageHeroProps {
  overline: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ overline, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-40 pb-16 md:pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <FadeIn>
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-4">
          {overline}
        </p>
        <h1 className="font-(family-name:--font-cormorant) text-[clamp(3rem,7vw,6rem)] font-light text-charcoal leading-[0.95] tracking-[-0.01em] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="font-(family-name:--font-cormorant) text-[clamp(1.1rem,2.5vw,1.6rem)] font-light italic text-muted mb-8">
            {subtitle}
          </p>
        )}
        <div className="w-16 h-px bg-gold" />
      </FadeIn>
    </section>
  );
}
