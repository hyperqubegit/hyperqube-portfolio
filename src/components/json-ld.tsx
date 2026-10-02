import { SEO } from "@/lib/seo-config";

/**
 * JSON-LD Structured Data Component
 * ──────────────────────────────────
 * Injects Organization, WebSite (with SearchAction),
 * and FAQPage schema. Google uses this for rich snippets,
 * knowledge panels, and sitelinks search box.
 */
export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO.siteUrl}/#organization`,
    name: SEO.siteName,
    alternateName: ["HyperQube", "Hyper Qube", "hyperqube", "HYPERQUBE"],
    url: SEO.siteUrl,
    logo: `${SEO.siteUrl}/hyperqube-logo.png`,
    image: `${SEO.siteUrl}/og-image.png`,
    description: SEO.description,
    email: SEO.email,
    sameAs: [
      SEO.socials.linkedin,
      SEO.socials.twitter,
      SEO.socials.instagram,
    ],
    knowsAbout: [
      "Custom Software Development",
      "Web Application Development",
      "SaaS Product Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analytics",
      "Automation",
      "UI/UX Design",
      "Full Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Node.js",
    ],
    slogan: "Turn your ideas into reality",
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 50,
    },
    areaServed: {
      "@type": "GeoShape",
      name: "Worldwide",
    },
    serviceType: [
      "Custom Software Development",
      "Web Application Development",
      "SaaS Product Development",
      "AI & Machine Learning Solutions",
      "Data & Analytics",
      "Process Automation",
      "UI/UX Design",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Application Development",
            description:
              "Modern, responsive and high-performance web applications built around your business needs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "Purpose-built software designed to solve specific operational and business problems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Product Development",
            description:
              "Scalable SaaS platforms with thoughtful UX, reliable architecture and production-ready foundations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Solutions",
            description:
              "Practical AI solutions, intelligent workflows and AI-powered features that create measurable value.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data & Automation",
            description:
              "Dashboards, analytics systems, and automated workflows that turn data into insights.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description:
              "Clean, modern and user-focused product interfaces designed around usability and conversion.",
          },
        },
      ],
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO.siteUrl}/#website`,
    name: SEO.siteName,
    alternateName: "HyperQube Engineering Studio",
    url: SEO.siteUrl,
    description: SEO.description,
    publisher: {
      "@id": `${SEO.siteUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://www.google.com/search?q=site:${new URL(SEO.siteUrl).hostname}+{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SEO.siteUrl}/#webpage`,
    url: SEO.siteUrl,
    name: SEO.title,
    description: SEO.longDescription,
    isPartOf: {
      "@id": `${SEO.siteUrl}/#website`,
    },
    about: {
      "@id": `${SEO.siteUrl}/#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SEO.siteUrl}/og-image.png`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of products can HyperQube build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HyperQube builds custom websites, web applications, SaaS products, internal tools, automation systems, data-driven applications, and intelligent software experiences.",
        },
      },
      {
        "@type": "Question",
        name: "Can HyperQube build from an idea that is still early?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. HyperQube can help turn an early concept into a clearer product direction, define what needs to be built first, and then move into design and development.",
        },
      },
      {
        "@type": "Question",
        name: "Does HyperQube work with existing products or only new builds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both. HyperQube can build something new from scratch or improve, rework, extend, or modernize an existing product.",
        },
      },
      {
        "@type": "Question",
        name: "Can HyperQube handle the backend and infrastructure too?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Projects can include frontend, backend, APIs, databases, authentication, integrations, deployment, and the supporting infrastructure required by the product.",
        },
      },
      {
        "@type": "Question",
        name: "Does HyperQube build AI and data-driven features?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Where it makes sense for the product, HyperQube can work with data, automation, machine learning, computer vision, and AI-powered functionality.",
        },
      },
      {
        "@type": "Question",
        name: "How do I start a project with HyperQube?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start by telling HyperQube what you're trying to build, what problem you're solving, and what you need. The team will take it from there and discuss the right way to approach the project.",
        },
      },
    ],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SEO.siteUrl}/#service`,
    name: `${SEO.siteName} — Engineering Studio`,
    url: SEO.siteUrl,
    logo: `${SEO.siteUrl}/hyperqube-logo.png`,
    image: `${SEO.siteUrl}/og-image.png`,
    description: SEO.longDescription,
    email: SEO.email,
    priceRange: "$$",
    sameAs: [
      SEO.socials.linkedin,
      SEO.socials.twitter,
      SEO.socials.instagram,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "115",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}
