import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import QualificationsTimeline from "@/components/QualificationsTimeline";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "About — Jade Frisch",
  description:
    "German–English translator based in Berlin since 2013. CIOL Diploma in Translation, MA in Linguistics, BDÜ member. Over ten years of specialist experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        overline="About me"
        title="A translator who lives inside the language."
        subtitle="Ten years helping businesses in the DACH region communicate in flawless English."
      />
      <About hideHeading />
      <QualificationsTimeline />
      <Testimonials />
      <Contact />
    </>
  );
}
