import React from "react";
import styles from "./featuresSection.module.css";
import Accordion from "../ui/accordion/accordion";
import Image from "next/image";

// Accordion items for Tokefinder features
const tokefinderFeatures = [
  {
    title: "Effortlessly find components",
    content:
      "Linked to specific tokens, filter by whether they're in use, and do it all through an intuitive interface built right into Figma.",
  },
  {
    title: "Designed to save designers time and effort",
    content:
      "Streamline your workflow with quick access to token information and component usage across your design system.",
  },
  {
    title: "Fully customizable",
    content:
      "Adapt the plugin to your team's specific needs and design system structure for maximum efficiency.",
  },
];

function FeaturesSection() {
  return (
    <section className={styles["featuresSection"]}>
      <div className={styles["featuresSection__container"]}>
        {/* Plugin mockup image */}
        <div className={styles["featuresSection__image"]}>
          <Image
            src="/accordion_image.png"
            alt="Accordion features interface"
            fill
            sizes="(max-width: 479px) 320px, (max-width: 599px) 400px, (max-width: 767px) 450px, (max-width: 1023px) 480px, (max-width: 1199px) 380px, (max-width: 1399px) 420px, 480px"
            className={styles["featuresSection__image__mockup"]}
          />
        </div>

        {/* Features accordion */}
        <div className={styles["featuresSection__content"]}>
          <h2 className={styles["featuresSection__title"]}>
            What can you achieve with Tokefinder?
          </h2>
          <Accordion items={tokefinderFeatures} allowMultiple={false} />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
