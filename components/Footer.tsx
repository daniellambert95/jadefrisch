"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const tr = t[lang];

  const footerLinks = [
    { label: tr.nav.services, href: "/services" },
    { label: tr.nav.about, href: "/about" },
    { label: tr.nav.faq, href: "/faq" },
    { label: tr.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-ivory border-t border-charcoal/10 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          href="/"
          className="font-(family-name:--font-cormorant) text-lg font-semibold tracking-[0.15em] text-gold hover:text-charcoal transition-colors duration-300"
        >
          JF
        </Link>

        <nav>
          <ul className="flex items-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-(family-name:--font-dm-sans) text-[10px] uppercase tracking-[0.18em] text-muted/70 hover:text-charcoal transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="mailto:info@jadefrisch.com"
          className="font-(family-name:--font-dm-sans) text-[11px] uppercase tracking-[0.15em] text-muted hover:text-gold transition-colors duration-300"
        >
          info@jadefrisch.com
        </a>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-6 pt-6 border-t border-charcoal/10 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-(family-name:--font-dm-sans) text-[10px] uppercase tracking-[0.15em] text-muted/40">
          {tr.footer.copyright}
        </p>
        <a
          href="https://www.siteandsight.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-(family-name:--font-dm-sans) text-[10px] uppercase tracking-[0.15em] text-muted/40 hover:text-gold transition-colors duration-300"
        >
          {tr.footer.webdesign}
        </a>
      </div>
    </footer>
  );
}
