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
  title: "FanThread | Real Conversations With Your Fans",
  description: "Thousands of followers. Thousands of ongoing conversations. Zero burnout. FanThread lets creators maintain real, personal connections with fans at scale.",
  keywords: ["creator", "influencer", "fans", "community", "Jabrium", "async", "voice", "YouTube", "TikTok", "podcast"],
  openGraph: {
    title: "FanThread",
    description: "Real conversations with your fans. At your pace. Maintain thousands of ongoing threads without burnout.",
    type: "website",
    url: "https://fanthread.ai",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
