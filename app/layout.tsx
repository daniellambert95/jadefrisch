import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jade Frisch — German–English Translator",
  description:
    "Native English speaker with 9+ years translating technical, IT and marketing content. Based in Berlin.",
  openGraph: {
    title: "Jade Frisch — German–English Translator",
    description:
      "Native English speaker with 9+ years translating technical, IT and marketing content. Based in Berlin.",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased">
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
    </html>
  );
}
