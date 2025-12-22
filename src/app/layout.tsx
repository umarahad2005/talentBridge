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
  title: "TalentBridge | Find Your Dream Job",
  description: "Your skills are ready. Your opportunity is missing. Tell us what you do, and we'll find who needs you.",
  keywords: ["jobs", "career", "job search", "employment", "career opportunities"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased gradient-bg min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
