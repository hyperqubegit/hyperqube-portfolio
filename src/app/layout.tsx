import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "HyperQube — Software • Data • Intelligence",
  description: "HyperQube builds modern software, intelligent systems, data solutions and digital products for businesses, startups and growing teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-primary text-[var(--color-brand-text)] bg-[var(--color-brand-bg)]">{children}</body>
    </html>
  );
}
