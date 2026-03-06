import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Credentials from "@/components/Credentials";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Credentials — Jade Frisch",
  description:
    "CIOL Diploma in Translation (Level 7), MA in Linguistics from Freie Universität Berlin, BDÜ member.",
};

export default function CredentialsPage() {
  return (
    <>
      <PageHero
        overline="Qualifications"
        title="Credentials"
        subtitle="Formally trained. Professionally certified."
      />
      <Credentials />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="border-t border-charcoal/10 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-(family-name:--font-cormorant) text-xl md:text-2xl font-light text-charcoal max-w-md">
            Have questions about my background or qualifications?
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-charcoal font-(family-name:--font-dm-sans) font-medium group"
          >
            Read the FAQ
            <span className="w-10 h-px bg-gold transition-all duration-300 group-hover:w-16" />
          </Link>
        </div>
      </div>
    </>
  );
}
