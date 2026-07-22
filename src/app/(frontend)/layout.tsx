import type { Metadata } from "next";

import { GoogleTagManager } from "@next/third-parties/google";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "./globals.css";

const ibsPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ibsPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const ibsPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.SITE_URL}`),
  title: {
    default: `${process.env.SITE_TITLE}`,
    template: `%s | ${process.env.SITE_TITLE}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${ibsPlexMono.variable} ${ibsPlexSerif.variable} ${ibsPlexSans.variable} antialiased`}>
        <Header />
        {children}
        {process.env.NEXT_PUBLIC_ENV === "production" && <GoogleTagManager gtmId="GTM-" />}
        <Footer />
      </body>
    </html>
  );
}
