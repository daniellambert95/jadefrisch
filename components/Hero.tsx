"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const lineReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.1, ease: "easeOut", delay: 0.55 },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-20 max-w-6xl mx-auto"
    >
      {/* Decorative vertical line — desktop only */}
      <motion.div
        className="hidden md:block absolute left-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gold/40"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.3 }}
        style={{ transformOrigin: "top" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="pl-0 md:pl-10"
      >
        {/* Overline */}
        <motion.p
          variants={lineReveal}
          className="text-[11px] uppercase tracking-[0.25em] text-gold font-(family-name:--font-dm-sans) font-medium mb-6"
        >
          Berlin, Germany
        </motion.p>

        {/* Name */}
        <div className="mb-3 pt-2">
          <motion.h1
            variants={lineReveal}
            className="font-(family-name:--font-cormorant) text-[clamp(4rem,10vw,9rem)] font-light leading-none tracking-[-0.01em] text-charcoal"
          >
            Jade Frisch
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          variants={lineReveal}
          className="font-(family-name:--font-cormorant) text-[clamp(1.5rem,3.5vw,2.6rem)] font-light italic text-muted tracking-wide mb-8"
        >
          German–English Translator
        </motion.p>

        {/* Gold rule */}
        <motion.div
          variants={lineReveal}
          className="w-16 h-px bg-gold mb-10"
        />

        {/* One-liner */}
        <motion.p
          variants={fadeIn}
          className="text-muted font-(family-name:--font-dm-sans) font-light text-base md:text-lg leading-relaxed max-w-lg"
        >
          A native English speaker and linguist with over ten years of experience
          translating and localising German technical, IT and marketing content.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeIn} className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ivory bg-charcoal font-(family-name:--font-dm-sans) font-medium px-8 py-4 hover:bg-gold transition-colors duration-300"
          >
            Get in touch
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-charcoal border border-charcoal/30 font-(family-name:--font-dm-sans) font-medium px-8 py-4 hover:border-charcoal transition-colors duration-300"
          >
            View services
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted/60 font-(family-name:--font-dm-sans)">
          Scroll
        </span>
        <div className="w-px h-10 bg-linear-to-b from-muted/40 to-transparent" />
      </motion.div>
    </section>
  );
}
