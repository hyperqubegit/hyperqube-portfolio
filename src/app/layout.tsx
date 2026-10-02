import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import { SEO } from "@/lib/seo-config";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

/* ─────────────────────────────────────────────
 * COMPREHENSIVE METADATA
 * Next.js automatically renders <title>, <meta>,
 * Open Graph, Twitter Card, canonical, and more.
 * ───────────────────────────────────────────── */
export const metadata: Metadata = {
  /* ── Core ── */
  title: {
    default: SEO.title,
    template: `%s | ${SEO.siteName}`,
  },
  description: SEO.longDescription,
  keywords: SEO.keywords as unknown as string[],
  authors: [{ name: SEO.siteName, url: SEO.siteUrl }],
  creator: SEO.siteName,
  publisher: SEO.siteName,

  /* ── Canonical & Alternates ── */
  metadataBase: new URL(SEO.siteUrl),
  alternates: {
    canonical: "/",
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Open Graph (Facebook, LinkedIn, etc.) ── */
  openGraph: {
    type: "website",
    locale: SEO.locale,
    url: SEO.siteUrl,
    siteName: SEO.siteName,
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: `${SEO.siteName} — ${SEO.tagline}`,
        type: "image/png",
      },
    ],
  },

  /* ── Twitter Card ── */
  twitter: {
    card: "summary_large_image",
    site: SEO.twitterHandle,
    creator: SEO.twitterHandle,
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },

  /* ── Icons ── */
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },

  /* ── Verification (add your codes when you get them) ── */
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-code",
  // },

  /* ── App category hint for search engines ── */
  category: "technology",

  /* ── Other meta ── */
  other: {
    "theme-color": "#000000",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "msapplication-TileColor": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={SEO.language}
      className={`${manrope.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data — visible to Google, Bing, etc. */}
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-primary text-[var(--color-brand-text)] bg-[var(--color-brand-bg)]">{children}</body>
    </html>
  );
}
