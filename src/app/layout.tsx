import type { Metadata, Viewport } from "next";
import {
  Changa_One,
  EB_Garamond,
  Geist,
  Geist_Mono,
  Habibi,
} from "next/font/google";
import "./globals.css";

const fontSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = Habibi({
  variable: "--font-mono",
  weight: ["400"],
  subsets: ["latin"],
});

// custom font
const fontHero = Changa_One({
  variable: "--font-hero",
  weight: ["400"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Neza Cafe",
    default: "Neza Cafe - Premium Coffee & Beverages",
  },
  description:
    "Discover artisanal coffee and premium beverages crafted with passion. Fresh ingredients, expert craft, and sustainable practices.",
  keywords: ["coffee", "cafe", "beverages", "espresso", "matcha"],
  authors: [{ name: "Neza Cafe" }],
  creator: "Neza Cafe",
  publisher: "Neza Cafe",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://nezacafe.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} ${fontHero.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans bg-white text-gray-700 antialiased">
        {children}
      </body>
    </html>
  );
}
