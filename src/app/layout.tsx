import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loom X | Play Boa Fabic Supplier",
  description:
    "Premium Play Boa fabrics engineered for luxury interiors and high-fashion. High-density pile and industrial durability.",
  openGraph: {
    title: "Loom X | Play Boa Fabic Supplier",
    description: "Premium Play Boa fabrics engineered for luxury interiors and high-fashion. High-density pile and industrial durability.",
    url: "https://www.loomxmill.com",
    siteName: "Loom X | Play Boa Fabic Supplier",
    images: [
      {
        url: "https://res.cloudinary.com/dxwdgozsp/image/upload/v1773119668/facc7ff3-31da-4f23-8e70-b029d60ef19b_l8pyhd.png",
        width: 1200,
        height: 630,
        alt: "Loom X | Play Boa Fabic Supplier",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loom X | Play Boa Fabic Supplier",
    description: "Premium Play Boa fabrics engineered for luxury interiors and high-fashion. High-density pile and industrial durability.",
    images: [
      "https://res.cloudinary.com/dxwdgozsp/image/upload/v1773119668/facc7ff3-31da-4f23-8e70-b029d60ef19b_l8pyhd.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased selection:bg-primary selection:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
