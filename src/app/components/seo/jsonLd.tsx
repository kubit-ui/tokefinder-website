import React from "react";

interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const CONTEXT = "https://schema.org";

// Schema data for Tokefinder Figma Plugin
export const tokefinderSchema = {
  "@context": CONTEXT,
  "@type": "SoftwareApplication",
  name: "Tokefinder",
  description:
    "The ultimate Figma plugin to streamline your workflow. Search and filter local variables across your entire project with an intuitive interface built right into Figma.",
  url: "https://www.figma.com/community/plugin/tokefinder",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  publisher: {
    "@type": "Organization",
    name: "Kubit",
    url: "https://kubit-ui.com",
  },
  softwareVersion: "1.0",
  applicationSubCategory: "Figma Plugin",
  downloadUrl: "https://www.figma.com/community/plugin/tokefinder",
  screenshot: "/tokefinder_logo.svg",
  featureList: [
    "Variable search",
    "Token filtering",
    "Design system optimization",
    "Workflow streamlining",
    "Figma integration",
  ],
  keywords:
    "Figma plugin, variables, design tokens, token finder, design system, workflow optimization",
};

// FAQ Schema for better search visibility
export const faqSchema = {
  "@context": CONTEXT,
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Tokefinder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tokefinder is the ultimate Figma plugin to streamline your workflow. It allows you to search and filter local variables across your entire project with an intuitive interface built right into Figma, helping design teams work more efficiently with design tokens.",
      },
    },
    {
      "@type": "Question",
      name: "Is Tokefinder free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Tokefinder is completely free to download and use. You can install it directly from the Figma Community and start searching your design tokens immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What features does Tokefinder offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tokefinder offers powerful variable search functionality, token filtering by usage, intuitive interface design, and seamless integration with Figma's design system. It helps streamline design workflows and improve design token management.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install Tokefinder in Figma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can install Tokefinder by visiting the Figma Community page, searching for 'Tokefinder', and clicking 'Install'. Once installed, you can access it from the Plugins menu in any Figma file.",
      },
    },
    {
      "@type": "Question",
      name: "Who developed Tokefinder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tokefinder is developed by Kubit, a leading design system and digital solutions company specializing in Figma plugins and design tools.",
      },
    },
  ],
};

// Organization schema for Kubit
export const organizationSchema = {
  "@context": CONTEXT,
  "@type": "Organization",
  name: "Kubit",
  url: "https://kubit-ui.com",
  logo: "https://tokefinder.kubit-lab.com/kubit_logo.svg",
  sameAs: ["https://x.com/kubit_ui", "https://github.com/kubit-ui"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "kubit.lab.dev@gmail.com",
    contactType: "customer support",
  },
};

// WebPage schema for the landing page
export const webPageSchema = {
  "@context": CONTEXT,
  "@type": "WebPage",
  name: "Tokefinder - Ultimate Figma Token Finder Plugin",
  description:
    "Streamline your workflow with Tokefinder, the ultimate Figma plugin to search and filter local variables across your entire project with an intuitive interface.",
  url: "https://tokefinder.kubit-lab.com/",
  primaryImageOfPage: "https://tokefinder.kubit-lab.com/tokefinder_logo.svg",
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString(),
  author: {
    "@type": "Organization",
    name: "Kubit",
  },
  publisher: {
    "@type": "Organization",
    name: "Kubit",
    logo: {
      "@type": "ImageObject",
      url: "https://tokefinder.kubit-lab.com/kubit_logo.svg",
    },
  },
  mainEntity: {
    "@id": "#tokefinder-software",
  },
};

export default JsonLd;
