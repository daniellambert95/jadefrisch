import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About — Jade Frisch",
  description:
    "Australian-born, Berlin-based translator specialising in German–English technical and marketing translation since 2016.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        overline="About me"
        title="A translator who lives inside the language."
      />
      <About hideHeading />
      <Testimonials />
    </>
  );
}
