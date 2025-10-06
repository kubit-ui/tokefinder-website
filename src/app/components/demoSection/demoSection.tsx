import React from "react";
import Image from "next/image";
import styles from "./demoSection.module.css";

/**
 * Demo section component showing the Tokefinder plugin in action
 */
export default function DemoSection() {
  return (
    <section className={styles.demoSection}>
      {/* Top section with color selector preview */}
      <div className={styles.demoSection__highlight}>
        <Image
          src="/color_selector_image.png"
          alt="Color selector interface showing Figma variables"
          width={800}
          height={400}
          className={styles.demoSection__colorSelectorImage}
        />
      </div>

      {/* Middle section with title and CTA */}
      <div className={styles.demoSection__content}>
        <div className={styles.demoSection__article}>
          <div className={styles.demoSection__text}>
            <h2 className={styles.demoSection__title}>
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
          >
            <span className={styles.demoSection__buttonText}>Try it</span>
            <Image
              src="/icon_link-external.svg"
              alt="External link"
              width={16}
              height={16}
              className={styles.demoSection__buttonIcon}
            />
          </a>
        </div>
      </div>

      {/* Bottom section with plugin preview */}
      <div className={styles.demoSection__preview}>
        <Image
          src="/tokefinder_menu.png"
          alt="Tokefinder plugin interface preview"
          width={600}
          height={400}
          className={styles.demoSection__pluginImage}
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
