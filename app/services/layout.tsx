import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Services & Custom Automation Systems",
  description:
    "Explore Aegis AI services: Autonomous agent workflows, conversational voice receptionists, enterprise RAG knowledge bases, and custom CRM/ERP process automations.",
  keywords: [
    "AI services",
    "enterprise AI automation",
    "autonomous agents",
    "voice AI receptionist",
    "enterprise RAG",
    "custom LLM development",
    "workflow automation",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Enterprise AI Services & Custom Automation Systems | Aegis",
    description:
      "Production-ready autonomous AI agents, voice receptionists, and private knowledge bases engineered for modern enterprise scale.",
    url: "/services",
    siteName: "Aegis",
    images: [
      {
        url: "/assets/hero-services.webp",
        width: 1200,
        height: 630,
        alt: "Aegis Enterprise AI Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Services | Aegis",
    description:
      "Autonomous agents, voice intelligence, and custom workflow automations built for high-growth businesses.",
    images: ["/assets/hero-services.webp"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of businesses do you work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We collaborate with ambitious businesses across tech, finance, legal, e-commerce, healthcare, and enterprise services that want to leverage custom AI to streamline operations and scale efficiently.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can we launch an AI solution?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical implementations take between 2 to 4 weeks from discovery to production deployment, with rapid prototyping delivered in the very first week.",
        },
      },
      {
        "@type": "Question",
        name: "Will our proprietary business data be kept private and secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100%. We implement enterprise-grade security protocols, zero-data-retention foundation APIs, private VPC vector deployments, and strict SOC2/GDPR compliance standards. Your data is never used to train public foundation models.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise AI Automation & Custom Intelligence Systems",
    provider: {
      "@type": "Organization",
      name: "Aegis",
      url: "https://aegis-alpha-sepia.vercel.app",
    },
    serviceType: "Artificial Intelligence Consulting & Software Development",
    description:
      "Custom autonomous multi-agent workflows, conversational voice intelligence, private RAG knowledge engines, and end-to-end ERP/CRM integrations.",
    areaServed: "Global",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
