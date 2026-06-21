import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karuna Holistic Hospital | Buniadpur",
  description: "Compassionate, Affordable Healthcare for Buniadpur and Beyond. Open 24x7. Multi-specialty hospital located at Kaliyaganj Road, Buniadpur, Narayanpur, West Bengal.",
  openGraph: {
    title: "Karuna Holistic Hospital",
    description: "Compassionate, Affordable Healthcare for Buniadpur and Beyond.",
    url: "https://karunahospitalbuniadpur.com", // Placeholder URL
    siteName: "Karuna Holistic Hospital",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
