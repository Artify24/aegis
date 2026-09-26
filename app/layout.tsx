import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#635BFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://aegis-alpha-sepia.vercel.app"),
  verification: {
    google: "1d8be0d18e9644dd",
  },
  title: {
    default: "Aegis — Enterprise AI Company",
    template: "%s | Aegis",
  },
  description:
    "Aegis designs, builds and deploys custom AI solutions, autonomous multi-agent systems, voice receptionists and workflow automations that eliminate manual work, cut costs and scale businesses faster.",
  applicationName: "Aegis",
  authors: [{ name: "Aegis AI", url: "https://aegis-alpha-sepia.vercel.app" }],
  generator: "Next.js",
  keywords: [
    "AI Company",
    "Enterprise AI",
    "AI Automation",
    "Autonomous Agents",
    "AI Chatbots",
    "Voice AI Receptionist",
    "Process Automation",
    "RAG Knowledge Assistant",
    "Custom LLMs",
    "Workflow Automation",
    "System Integrations",
    "AI Consulting",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Aegis",
  publisher: "Aegis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aegis — Enterprise AI Company",
    description:
      "From Ideas to Intelligent Execution. Custom enterprise AI solutions, autonomous multi-agent workflows, and conversational systems.",
    url: "https://aegis.ai",
    siteName: "Aegis",
    images: [
      {
        url: "/assets/hero-home.png",
        width: 1200,
        height: 630,
        alt: "Aegis — Enterprise AI Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegis — Enterprise AI Company",
    description:
      "Custom AI solutions, automations and intelligent systems to help you save time, cut costs and scale faster.",
    images: ["/assets/hero-home.png"],
    creator: "@aegis_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aegis",
    alternateName: "Aegis AI",
    url: "https://aegis.ai",
    logo: "https://aegis.ai/assets/logo-png.png",
    description:
      "Enterprise AI company building autonomous workflows, voice receptionists, RAG knowledge systems, and custom AI agents.",
    sameAs: [
      "https://twitter.com/aegis_ai",
      "https://linkedin.com/company/aegis-ai",
      "https://github.com/aegis-ai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@aegis.ai",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aegis",
    url: "https://aegis.ai",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://aegis.ai/services?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAFD] text-[#0B0D17]">
        {children}
      </body>
    </html>
  );
}
