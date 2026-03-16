"use client";

import PageHero from "@/components/PageHero";
import About from "@/components/About";
import QualificationsTimeline from "@/components/QualificationsTimeline";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function AboutPage() {
  const { lang } = useLanguage();
  const tr = t[lang].aboutPage;

  return (
    <>
      <PageHero
        overline={tr.overline}
        title={tr.title}
        subtitle={tr.subtitle}
      />
      <About hideHeading />
      <QualificationsTimeline />
      <Testimonials />
      <Contact />
    </>
  );
}
