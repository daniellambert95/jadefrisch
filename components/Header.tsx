"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, Variants } from "framer-motion";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Credentials", href: "/credentials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const menuVariants: Variants = {
  closed: {
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.4, ease },
  },
  open: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.5, ease, staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isHome = pathname === "/";
  const headerSolid = scrolled || !isHome || menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-60 transition-all duration-500 ${
          headerSolid
            ? "bg-ivory/95 backdrop-blur-md border-b border-charcoal/10 py-4"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Monogram */}
          <Link
            href="/"
            className="font-(family-name:--font-cormorant) text-xl font-semibold tracking-[0.2em] text-gold hover:text-charcoal transition-colors duration-300 relative z-60"
            aria-label="Jade Frisch — Home"
          >
            JF
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-[11px] uppercase tracking-[0.18em] font-(family-name:--font-dm-sans) font-medium transition-colors duration-300 ${
                        active ? "text-gold" : "text-muted hover:text-charcoal"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative z-60 flex flex-col justify-center items-center w-8 h-8 gap-1.25"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              className="block h-px w-6 origin-center bg-charcoal"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease }}
            />
            <motion.span
              className="block h-px w-6 origin-center bg-charcoal"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2, ease }}
            />
            <motion.span
              className="block h-px w-6 origin-center bg-charcoal"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease }}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen mobile menu — portalled to document.body */}
      {mounted && createPortal(
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden fixed inset-0 z-55 bg-ivory flex flex-col items-center justify-center"
            >
              <ul className="flex flex-col items-center gap-2 w-full px-8">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <motion.li key={link.href} variants={itemVariants} className="w-full text-center">
                      <Link
                        href={link.href}
                        className={`block py-4 font-(family-name:--font-cormorant) text-3xl font-light tracking-[0.12em] transition-colors duration-300 ${
                          active ? "text-gold" : "text-charcoal-80 hover:text-gold"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
