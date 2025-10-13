import React from "react";
import Image from "next/image";
import styles from "./contentSection.module.css";

/**
 * Content section component props
 */
interface ContentSectionProps {
  /** Additional CSS class names */
  className?: string;
}

/**
 * ContentSection component that displays call-to-action content
 * with a link to the Figma plugin community page
 * 
 * @param props - Component props
 * @returns React component
 */
function ContentSection({ className = "" }: ContentSectionProps = {}): React.ReactElement {
  return (
    <section 
      className={`${styles.contentSection} ${className}`.trim()}
      aria-labelledby="content-heading"
    >
      <div className={styles.contentSection__text}>
        <p className={styles.contentSection__description}>
          Say goodbye to manual searches and elevate your Figma workflow with
          Tokefinder
        </p>
        <h2 
          id="content-heading"
          className={styles["contentSection__text--header"]}
        >
          Welcome to the Tokefinder community!
        </h2>
      </div>
      <a
        className={styles.contentSection__button}
        href="https://www.figma.com/community/plugin/1555496697023365174/tokefinder"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discover Tokefinder plugin on Figma Community (opens in new tab)"
      >
        <span className={styles.contentSection__buttonText}>
          Discover Tokefinder
        </span>
        <Image
          src="/icon_link-external.svg"
          alt=""
          width={16}
          height={16}
          className={styles.contentSection__buttonIcon}
          aria-hidden="true"
        />
      </a>
    </section>
  );
}

export default ContentSection;
