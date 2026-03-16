"use client";

import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function ContactPage() {
  const { lang } = useLanguage();
  const tr = t[lang].contactPage;

  return (
    <>
      <PageHero
        overline={tr.overline}
        title={tr.title}
        subtitle={tr.subtitle}
      />
      <Contact hideHeading />
    </>
  );
}
