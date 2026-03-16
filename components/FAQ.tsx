"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "What language pairs do you work with?",
    a: "My primary working language pair is German into English and English into German. I am a native English speaker with near-native German proficiency, and I also hold qualifications in French and Spanish from my MA studies at Freie Universität Berlin.",
  },
  {
    q: "What subject areas do you specialise in?",
    a: "My core specialisations are technical translation and marketing translation. I have extensive experience in IT, software, industrial manufacturing, automotive, retail and mobility sectors. I also work on academic texts, corporate communications and software localisation.",
  },
  {
    q: "Why should I work with you instead of using machine translation and AI?",
    a: "Technology still has its limits, and if you need the highest level of accuracy, deal with complexity, or have a carefully crafted brand voice, you need a human to ensure accuracy and quality. I can also check machine translations for accuracy and consistency, or do the whole project from scratch. Feel free to reach out with your documents and we can take it from there.",
  },
  {
    q: "What file formats do you accept?",
    a: "I work with most common formats including Word (.docx), Excel, PowerPoint, PDF (editable and scanned), HTML, XML, XLIFF and plain text. For software localisation I can handle PO files and JSON strings. If you have a different format, feel free to ask.",
  },
  {
    q: "Do you use CAT tools or translation memory?",
    a: "Yes. I use industry-standard CAT tools including SDL Trados Studio and memoQ. Translation memories and termbases are built and maintained per client, which ensures consistency across projects and can reduce costs on large or repeat volumes.",
  },
  {
    q: "How do you handle confidential documents?",
    a: "Confidentiality is taken seriously. I am happy to sign NDAs, and all project files are stored securely and deleted from my systems on request after delivery. I do not use AI translation tools that process data on external servers without explicit client consent.",
  },
  {
    q: "What are your rates?",
    a: "Rates depend on the language pair, subject matter, urgency and volume. I charge per source word for translation and per hour for proofreading and revision. Please get in touch with your project details for a tailored quote — there is no obligation.",
  },
  {
    q: "How quickly can you turn around a project?",
    a: "Standard turnaround is typically 1,500–2,000 words per working day. Larger or more complex projects are planned with a delivery schedule agreed upfront. Rush delivery is available subject to my current workload — please enquire in advance where possible.",
  },
  {
    q: "Do you offer certified or sworn translations?",
    a: "I hold the CIOL Diploma in Translation (Level 7, Master's level equivalent), which demonstrates professional qualification. For legally certified or court-sworn translations, please enquire directly, as requirements vary by country and institution.",
  },
  {
    q: "I need translations into other languages, not just English.",
    a: "While I only offer translations from German into English, I have an extensive network of talented colleagues, so it is possible we can also provide any other language combinations you might require. Feel free to reach out with the specifics of your project and we will see what we can do.",
  },
  {
    q: "Can you translate a birth certificate for me?",
    a: "No, unfortunately I do not offer translations of official documents. Feel free to reach out and I can recommend a colleague who can provide these for you.",
  },
  {
    q: "Why work with a freelance language professional?",
    a: "Working together means that we can communicate directly, there is no overhead and back and forth. Your documents will always be translated by me, ensuring consistent terminology, voice and style. I can take care of as much of the process as you need – maybe you already have English texts you need me to check, or you want me to take over the entire process so you don't have to worry about a thing. Let me know what you need.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-4 pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="border-b border-charcoal/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between gap-8 py-7 text-left group"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-(family-name:--font-cormorant) text-lg md:text-xl font-medium text-charcoal leading-snug group-hover:text-gold transition-colors duration-300">
                    {faq.q}
                  </span>
                  <span
                    className={`font-(family-name:--font-cormorant) text-2xl leading-none text-gold shrink-0 mt-0.5 transition-transform duration-300 ${
                      openIndex === i ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    openIndex === i ? "max-h-64 opacity-100 pb-7" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-(family-name:--font-dm-sans) font-light text-muted text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
