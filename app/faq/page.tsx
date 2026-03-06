import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Jade Frisch",
  description:
    "Frequently asked questions about rates, turnaround, file formats, CAT tools, confidentiality and more.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        overline="Questions & answers"
        title="FAQ"
        subtitle="Everything you might want to know before getting in touch."
      />
      <FAQ />
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-3xl border-t border-charcoal/10 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-light text-charcoal max-w-xs">
            Still have questions?
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
