import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from 'next/font/google'
import SkipToMainLink from "@/components/SkipToMainLink/SkipToMainLink";
import Header from "@/components/Header/Header";
import { Analytics } from "@vercel/analytics/react";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Nikki Bright | UX Developer",
  description: "Nikki Bright is an accessibility-focused front-end web developer working remotely out of the U.S.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} text-body bg-background`}>
        <SkipToMainLink />
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
