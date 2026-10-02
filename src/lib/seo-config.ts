/**
 * Centralized SEO configuration for HyperQube.
 * ─────────────────────────────────────────────
 * When you buy your domain (e.g. hyperqube.in),
 * just update SITE_URL here — everything else
 * (sitemap, canonical, OG tags, JSON-LD) picks it up automatically.
 */

export const SEO = {
  /** Primary domain — change this when you get your .in domain */
  siteUrl: "https://hyperqube.vercel.app",

  /** Brand */
  siteName: "HyperQube",
  tagline: "Software • Data • Intelligence",

  /** Core copy */
  title: "HyperQube — Custom Software, AI Solutions & Digital Products",
  description:
    "HyperQube is an engineering studio that builds custom software, web applications, SaaS products, AI solutions, data systems, and digital products for startups, businesses, and growing teams.",

  /** Long-tail keyword-rich description for meta */
  longDescription:
    "HyperQube is a software engineering studio specializing in custom software development, web application development, SaaS product development, AI and machine learning solutions, data analytics, automation systems, and UI/UX design. We help startups, businesses, and growing teams turn ideas into production-ready digital products.",

  /** Target keywords — used in meta keywords tag */
  keywords: [
    "HyperQube",
    "hyperqube",
    "HyperQube software",
    "HyperQube engineering",
    "HyperQube studio",
    "HyperQube engineering studio",
    "custom software development",
    "web application development",
    "SaaS product development",
    "AI solutions",
    "machine learning solutions",
    "data analytics",
    "automation systems",
    "UI/UX design",
    "digital products",
    "software development company",
    "software engineering studio",
    "build software",
    "build web app",
    "build SaaS",
    "startup software development",
    "business software solutions",
    "intelligent systems",
    "data-driven solutions",
    "custom web development",
    "Next.js development",
    "React development",
    "full stack development",
  ],

  /** Social / OG */
  ogImage: "/og-image.png",
  twitterHandle: "@Hyperqubeprvt",

  /** Contact */
  email: "hyperqube.ff@gmail.com",

  /** Social URLs */
  socials: {
    linkedin: "https://www.linkedin.com/company/hyperqubeofficial",
    twitter: "https://x.com/Hyperqubeprvt",
    instagram: "https://www.instagram.com/hyperqubeprvt",
  },

  /** Locale */
  locale: "en_US",
  language: "en",
} as const;
