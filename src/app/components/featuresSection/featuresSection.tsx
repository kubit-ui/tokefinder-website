import Image from "next/image";
import React from "react";
import Accordion from "../ui/accordion/accordion";
import styles from "./featuresSection.module.css";

/**
 * Accordion item interface for features
 */
interface FeatureItem {
  id: string;
  title: string;
  content: string;
}

/**
 * Tokefinder features data - preserving original content
 */
const TOKEFINDER_FEATURES: FeatureItem[] = [
  {
    id: "find-components",
    title: "Effortlessly find components",
    content:
      "Linked to specific tokens, filter by whether they're in use, and do it all through an intuitive interface built right into Figma.",
  },
  {
    id: "save-time",
    title: "Designed to save designers time and effort",
    content:
      "Streamline your workflow with quick access to token information and component usage across your design system.",
  },
  {
    id: "customizable",
    title: "Fully customizable",
    content:
      "Adapt the plugin to your team's specific needs and design system structure for maximum efficiency.",
  },
];

/**
 * Features section component props
 */
interface FeaturesSectionProps {
  /** Additional CSS class names */
  className?: string;
}

/**
 * FeaturesSection component that showcases Tokefinder's main features
 * with an accordion interface and accompanying image
 * 
 * @param props - Component props
 * @returns React component
 */
function FeaturesSection({ className = "" }: FeaturesSectionProps = {}): React.ReactElement {
  return (
    <section 
      className={`${styles.featuresSection} ${className}`.trim()}
      aria-labelledby="features-heading"
    >
      <div className={styles.featuresSection__container}>
        {/* Plugin mockup image */}
        <div className={styles.featuresSection__image}>
          <Image
            src="/accordion_image.png"
            alt="Tokefinder plugin interface showing accordion features for token management"
            fill
            sizes="(max-width: 479px) 320px, (max-width: 599px) 400px, (max-width: 767px) 450px, (max-width: 1023px) 480px, (max-width: 1199px) 380px, (max-width: 1399px) 420px, 480px"
            className={styles.featuresSection__image__mockup}
            priority={false}
          />
        </div>

        {/* Features accordion */}
        <div className={styles.featuresSection__content}>
          <h2 
            id="features-heading"
            className={styles.featuresSection__title}
          >
            What can you achieve with Tokefinder?
          </h2>
          <Accordion 
            items={TOKEFINDER_FEATURES} 
            allowMultiple={false}
            className={styles.featuresSection__accordion}
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
