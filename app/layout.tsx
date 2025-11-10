import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick adn Morty TekBees Test",
  description: "Technical test for TekBees consumint Rick and Morty API",
  keywords: ["Rick and Morty", "TekBees", "Technical test"],
  authors: [
    {
      name: "Diego Armando Tejedor Cortés",
      url: "https://github.com/dieghoatc",
    },
  ],
  publisher: "Diego Armando Tejedor Cortés",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
