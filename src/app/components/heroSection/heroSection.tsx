import Image from "next/image";
import React from "react";
import AnimateOnScroll from "../ui/animateOnScroll/animateOnScroll";
import styles from "./heroSection.module.css";

/**
 * Hero section component that displays the main title, logo, and subtitle
 * with scroll-triggered animations
 * 
 * @returns React component The hero section component
 */
function HeroSection(): React.ReactElement {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      {/* Main hero content */}
      <div className={styles.heroSection__content}>
        {/* Logo section with animation */}
        <AnimateOnScroll
          animationType="appearing-animation"
          direction="from-bottom"
          delay="delay-first"
          className={styles.heroSection__logo}
          wallEffect={false}
        >
          <div className={styles.heroSection__logo__container}>
            <Image
              src="/tokefinder_logo.svg"
              alt="Tokefinder Figma Plugin Logo - A powerful tool for searching and filtering design variables"
              width={170}
              height={170}
              className={styles.heroSection__logo__icon}
              loading="eager"
              fetchPriority="high"
              priority
            />
          </div>
          <h1 id="hero-title" className={styles.heroSection__title}>
            Tokefinder
          </h1>
        </AnimateOnScroll>

        {/* Subtitle with animation */}
        <AnimateOnScroll
          animationType="appearing-animation"
          direction="from-bottom"
          delay="delay-second"
          className={styles.heroSection__subtitle}
          wallEffect={true}
        >
          <span aria-label="Created by Kubit">by Kubit</span>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

export default HeroSection;
