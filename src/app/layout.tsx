import type { Metadata, Viewport } from "next";
import FloatingBubbles from "./components/background/bubbles";
import JsonLd, {
  tokefinderSchema,
  faqSchema,
  organizationSchema,
  webPageSchema,
} from "./components/seo/jsonLd";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tokefinder.kubit-lab.com"),
  title:
    "Tokefinder - Ultimate Figma Token Finder Plugin | Search Figma Variables",
  description:
    "Tokefinder is the ultimate Figma plugin to streamline your workflow. Search and filter local variables across your entire project with an intuitive interface built right into Figma. Download now!",
  keywords:
    "Tokefinder, Figma plugin, Figma variables, design tokens, Figma token finder, variable search, design system, Figma tools, Kubit",
  authors: [
    {
      name: "Kubit",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Tokefinder - Ultimate Figma Token Finder Plugin",
    description:
      "Streamline your workflow with Tokefinder, the ultimate Figma plugin to search and filter local variables across your entire project with an intuitive interface.",
    url: "https://tokefinder.kubit-lab.com/",
    siteName: "Tokefinder by Kubit",
    images: [
      {
        url: "/og_image.png", // Main Open Graph image
        width: 1200,
        height: 630,
        alt: "Tokefinder - Figma Token Finder Plugin by Kubit - Search Figma Variables",
      },
      {
        url: "/tokefinder_logo.svg", // Fallback image
        width: 400,
        height: 400,
        alt: "Tokefinder Logo - Figma Plugin for Token Management",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokefinder - Ultimate Figma Token Finder Plugin",
    description:
      "Streamline your workflow with the ultimate Figma plugin to search and filter local variables across your entire project with an intuitive interface.",
    images: ["/og_image.png", "/tokefinder_logo.svg"], // Multiple image options
    creator: "@kubit_ui",
    site: "@kubit_ui",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources for better performance */}
        <link
          rel="preload"
          href="/fonts/Fredoka-VariableFont_wdth,wght.ttf"
          as="font"
          type="font/truetype"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <JsonLd data={tokefinderSchema} />
        <JsonLd data={faqSchema} />
        <JsonLd data={organizationSchema} />
        <JsonLd data={webPageSchema} />
      </head>
      <body>
        <FloatingBubbles />
        {children}
      </body>
    </html>
  );
}
