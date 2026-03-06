import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Jade Frisch",
  description:
    "Technical translation, marketing transcreation, proofreading, editing and linguistic validation. German–English, Berlin.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        overline="Language services"
        title="Services"
        subtitle="Technical and marketing translations DE↔EN, and more."
      />
      <Services />
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
