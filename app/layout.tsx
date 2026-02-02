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
  title: "Manahil Jawed | Mobile App Developer",
  description: "Full Stack Mobile App Developer specializing in Flutter, Firebase, and cross-platform development. View my portfolio of mobile applications.",
  keywords: ["Flutter Developer", "Mobile App Developer", "Firebase", "Dart", "Cross-platform", "Manahil Jawed"],
  authors: [{ name: "Manahil Jawed" }],
  openGraph: {
    title: "Manahil Jawed | Mobile App Developer",
    description: "Full Stack Mobile App Developer specializing in Flutter, Firebase, and cross-platform development.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
