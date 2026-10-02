import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Aegis — Mission, Vision & Engineering Principles",
  description:
    "Learn about Aegis: our mission to eliminate operational bottlenecks with autonomous intelligence, our architectural principles, and the team powering enterprise AI transformations.",
  keywords: [
    "About Aegis",
    "enterprise AI team",
    "AI automation philosophy",
    "machine intelligence engineering",
    "autonomous software systems",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Aegis — Mission, Vision & Engineering Principles",
    description:
      "Ideas Today. A Smarter Tomorrow. Learn how Aegis engineers intelligent systems that unlock massive operational velocity for modern businesses.",
    url: "/about",
    siteName: "Aegis",
    images: [
      {
        url: "/assets/hero-about.webp",
        width: 1200,
        height: 630,
        alt: "About Aegis",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aegis — Mission & Vision",
    description:
      "Engineering the next generation of autonomous enterprise intelligence and cognitive workflow automation.",
    images: ["/assets/hero-about.webp"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Aegis",
    description:
      "Aegis is an enterprise AI company engineering autonomous agents, voice intelligence, and cognitive workflow automations.",
    publisher: {
      "@type": "Organization",
      name: "Aegis",
      url: "https://aegis-alpha-sepia.vercel.app",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
