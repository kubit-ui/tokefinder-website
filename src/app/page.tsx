"use client";

import React, { useRef } from "react";
import ContentSection from "./components/contentSection/contentSection";
import DemoSection from "./components/demoSection/demoSection";
import FeaturesSection from "./components/featuresSection/featuresSection";
import Footer from "./components/footer/footer";
import HeroSection from "./components/heroSection/heroSection";
import BackToTopButton from "./components/ui/backToTopButton/backToTopButton";
import styles from "./page.module.css";

/**
 * Main home page component that displays all sections of the TokeFinder website
 * Includes hero, features, demo, content sections, footer, and a back-to-top button
 * 
 * @returns React component for the home page
 */
export default function Home(): React.ReactElement {
  const footerRef = useRef<HTMLDivElement>(null);
  const backToTopButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.page}>
      <main className={styles.main} role="main">
        {/* Hero section with main branding */}
        <HeroSection />
        
        {/* Product features showcase */}
        <FeaturesSection />
        
        {/* Interactive demo section */}
        <DemoSection />
        
        {/* Additional content and information */}
        <ContentSection />
      </main>
      
      {/* Back to top navigation button */}
      <BackToTopButton
        ref={backToTopButtonRef}
        bottomPosition={32}
        visibilityScrollOffset={800}
        stopElement={footerRef}
        ariaLabel="Scroll back to top of page"
      />
      
      {/* Site footer with links and information */}
      <Footer ref={footerRef} />
    </div>
  );
}
