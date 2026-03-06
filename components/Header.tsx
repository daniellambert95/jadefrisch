"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Credentials", href: "/credentials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-ivory/90 backdrop-blur-md border-b border-charcoal/10 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram */}
        <Link
          href="/"
          className="font-(family-name:--font-cormorant) text-xl font-semibold tracking-[0.2em] text-gold hover:text-charcoal transition-colors duration-300"
          aria-label="Jade Frisch — Home"
        >
          JF
        </Link>

        {/* Nav */}
        <nav>
          <ul className="flex items-center gap-6 md:gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[11px] uppercase tracking-[0.18em] font-(family-name:--font-dm-sans) font-medium transition-colors duration-300 ${
                      active
                        ? "text-gold"
                        : "text-muted hover:text-charcoal"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
