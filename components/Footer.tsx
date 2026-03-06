import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-charcoal/10 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="font-(family-name:--font-cormorant) text-lg font-semibold tracking-[0.15em] text-gold hover:text-charcoal transition-colors duration-300"
        >
          JF
        </Link>
        <p className="font-(family-name:--font-dm-sans) text-[11px] uppercase tracking-[0.15em] text-muted/60 text-center">
          German–English Translator <br /> Berlin
        </p>
        <a
          href="mailto:info@jadefrisch.com"
          className="font-(family-name:--font-dm-sans) text-[11px] uppercase tracking-[0.15em] text-muted hover:text-gold transition-colors duration-300"
        >
          info@jadefrisch.com
        </a>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-6 pt-6 border-t border-charcoal/10 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-(family-name:--font-dm-sans) text-[10px] uppercase tracking-[0.15em] text-muted/40">
          © 2026 Jade Frisch
        </p>
        <a
          href="https://www.siteandsight.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-(family-name:--font-dm-sans) text-[10px] uppercase tracking-[0.15em] text-muted/40 hover:text-gold transition-colors duration-300"
        >
          Webdesign by Site&amp;Sight
        </a>
      </div>
    </footer>
  );
}
