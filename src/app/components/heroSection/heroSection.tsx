import React from "react";
import Image from "next/image";
import styles from "./heroSection.module.css";
import AnimateOnScroll from "../ui/animateOnScroll/animateOnScroll";

function HeroSection() {
  return (
    <section className={styles["heroSection"]}>
      {/* Main hero content */}
      <div className={styles["heroSection__content"]}>
        {/* Logo section with animation */}
        <AnimateOnScroll
          animationType="appearing-animation"
          direction="from-bottom"
          delay="delay-first"
          className={styles["heroSection__logo"]}
          wallEffect={false}
        >
          <div className={styles["heroSection__logo__container"]}>
            <Image
              src="/tokefinder_logo.svg"
              alt="Tokefinder Figma Plugin Logo"
              width={170}
              height={170}
              className={styles["heroSection__logo__icon"]}
              loading="eager"
              fetchPriority="high"
              priority
            />
          </div>
          <h1 className={styles["heroSection__title"]}>Tokefinder</h1>
        </AnimateOnScroll>

        {/* Subtitle with animation */}
        <AnimateOnScroll
          animationType="appearing-animation"
          direction="from-bottom"
          delay="delay-second"
          className={styles["heroSection__subtitle"]}
          wallEffect={true}
        >
          by Kubit
        </AnimateOnScroll>
      </div>
    </section>
  );
}

export default HeroSection;
