"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, Variants } from "framer-motion";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    match: "startsWith" as const,
    children: [
      { label: "Technical Translation", href: "/services/technical" },
      { label: "Marketing Translation", href: "/services/marketing" },
    ],
  },
  { label: "About", href: "/about" },
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

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
                const active = link.match === "startsWith" ? pathname.startsWith(link.href) : pathname === link.href;

                if (link.children) {
                  return (
                    <li
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`text-[11px] uppercase tracking-[0.18em] font-(family-name:--font-dm-sans) font-medium transition-colors duration-300 ${
                          active ? "text-gold" : "text-muted hover:text-charcoal"
                        }`}
                      >
                        {link.label}
                      </Link>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            key="services-dropdown"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            className="absolute top-full left-0 pt-4"
                          >
                            <div className="bg-ivory border border-charcoal/10 shadow-sm min-w-55">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`block px-5 py-3.5 text-[10px] uppercase tracking-[0.18em] font-(family-name:--font-dm-sans) font-medium transition-colors duration-200 border-b border-charcoal/8 last:border-0 ${
                                    pathname === child.href
                                      ? "text-gold bg-charcoal/3"
                                      : "text-muted hover:text-charcoal hover:bg-charcoal/3"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

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

      {/* Fullscreen mobile menu */}
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
              <ul className="flex flex-col items-center gap-1 w-full px-8">
                {navLinks.map((link) => {
                  const active = link.match === "startsWith" ? pathname.startsWith(link.href) : pathname === link.href;
                  return (
                    <motion.li key={link.href} variants={itemVariants} className="w-full text-center">
                      <Link
                        href={link.href}
                        className={`block py-3 font-(family-name:--font-cormorant) text-3xl font-light tracking-[0.12em] transition-colors duration-300 ${
                          active ? "text-gold" : "text-charcoal-80 hover:text-gold"
                        }`}
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <div className="flex items-center justify-center gap-6 pb-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`text-[10px] uppercase tracking-[0.18em] font-(family-name:--font-dm-sans) font-medium transition-colors duration-300 ${
                                pathname === child.href ? "text-gold" : "text-muted hover:text-charcoal"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
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
