import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neza Cafe - Premium Coffee & Beverages",
  description:
    "Discover artisanal coffee and premium beverages crafted with passion. Fresh ingredients, expert craft, and sustainable practices.",
  keywords: "coffee, cafe, beverages, espresso, matcha, premium",
  authors: [{ name: "Neza Cafe" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nezacafe.com",
    title: "Neza Cafe - Premium Coffee & Beverages",
    description:
      "Discover artisanal coffee and premium beverages crafted with passion.",
    images: [
      {
        url: "https://nezacafe.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neza Cafe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neza Cafe - Premium Coffee & Beverages",
    description:
      "Discover artisanal coffee and premium beverages crafted with passion.",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
      </main>
      <Footer />
    </>
  );
}
