import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Strategic Discovery Session | Contact Aegis",
  description:
    "Schedule an architectural consultation with Aegis AI engineers. Discuss your operational bottlenecks, custom AI agent roadmaps, and automation feasibility.",
  keywords: [
    "Contact Aegis",
    "book AI discovery call",
    "hire AI automation company",
    "enterprise AI consultation",
    "AI agent developer contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book a Strategic Discovery Session | Contact Aegis",
    description:
      "Schedule a 1-on-1 architecture review with our AI engineering team. Direct access to builders, clear scoping, zero spam.",
    url: "/contact",
    siteName: "Aegis",
    images: [
      {
        url: "/assets/hero-contact.webp",
        width: 1200,
        height: 630,
        alt: "Contact Aegis AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Aegis | AI Consultation",
    description:
      "Schedule a 1-on-1 architectural discovery session with our core AI engineering team.",
    images: ["/assets/hero-contact.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Aegis",
    description: "Connect with the Aegis enterprise AI engineering team.",
    mainEntity: {
      "@type": "Organization",
      name: "Aegis",
      url: "https://aegis-alpha-sepia.vercel.app",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "technical sales and consulting",
        email: "contact@aegis-agency.com",
        availableLanguage: ["English"],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
