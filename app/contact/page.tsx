import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Jade Frisch",
  description:
    "Get in touch to discuss your translation, proofreading or localisation project. Based in Berlin.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        overline="Get in touch"
        title="Let's work together."
        subtitle="I'm happy to discuss your project — no obligation."
      />
      <Contact hideHeading />
    </>
  );
}
