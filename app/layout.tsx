import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";

import { CartDrawer } from "@/components/cart-drawer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Magic Mandalas — Handmade mandalas & mindful decor",
    template: "%s · Magic Mandalas",
  },
  description:
    "Handmade mandalas, wall hangings, and mindful decor — designed to bring balance, warmth, and quiet beauty into your everyday spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background">
        <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <CartDrawer />
        </div>
      </body>
    </html>
  );
}
