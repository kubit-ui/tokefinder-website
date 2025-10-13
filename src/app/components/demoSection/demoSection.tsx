import Image from "next/image";
import React from "react";
import styles from "./demoSection.module.css";

/**
 * Demo section component props
 */
interface DemoSectionProps {
  /** Additional CSS class names */
  className?: string;
}

/**
 * DemoSection component showing the Tokefinder plugin in action
 * Displays multiple preview images and call-to-action content
 * 
 * @param props - Component props
 * @returns React component
 */
function DemoSection({ className = "" }: DemoSectionProps = {}): React.ReactElement {
  return (
    <section 
      className={`${styles.demoSection} ${className}`.trim()}
      aria-labelledby="demo-title"
    >
      {/* Top section with color selector preview */}
      <div className={styles.demoSection__highlight}>
        <Image
          src="/color_selector_image.png"
          alt="Tokefinder color selector interface showing Figma variables and tokens"
          width={800}
          height={400}
          className={styles.demoSection__colorSelectorImage}
          priority={false}
        />
      </div>

      {/* Middle section with title and CTA */}
      <div className={styles.demoSection__content}>
        <div className={styles.demoSection__article}>
          <div className={styles.demoSection__text}>
            <h2 
              id="demo-title"
              className={styles.demoSection__title}
            >
              The smart way to search your Figma variables
            </h2>
            <p className={styles.demoSection__subtitle}>
              Tokefinder is the ultimate Figma plugin to agilize your workflow.
              Unlike Figma&apos;s native tools
            </p>
          </div>
          <a
            className={styles.demoSection__button}
            href="https://www.figma.com/community/plugin/1555496697023365174/tokefinder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Try Tokefinder plugin on Figma Community (opens in new tab)"
          >
            <span className={styles.demoSection__buttonText}>Try it</span>
            <Image
              src="/icon_link-external.svg"
              alt=""
              width={16}
              height={16}
              className={styles.demoSection__buttonIcon}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* Bottom section with plugin preview */}
      <div className={styles.demoSection__preview}>
        <Image
          src="/tokefinder_menu.png"
          alt="Tokefinder plugin menu interface showing search and filter options"
          width={600}
          height={400}
          className={styles.demoSection__pluginImage}
          priority={false}
        />
        <div className={styles.demoSection__description}>
          <div className={styles.demoSection__descriptionText}>
            <h3 className={styles.demoSection__descriptionTitle}>
              Easy search organize and pinpoint tokens
            </h3>
            <p className={styles.demoSection__descriptionSubtitle}>
              Tokefinder allows you to search and filter local variables across
              your entire project- not just page by page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoSection;
