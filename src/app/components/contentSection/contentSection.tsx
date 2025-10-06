import React from "react";
import Image from "next/image";
import styles from "./contentSection.module.css";

function ContentSection() {
  return (
    <section className={styles["contentSection"]}>
      <div className={styles["contentSection__text"]}>
        <p>
          Say goodbye to manual searches and elevate your Figma workflow with
          Tokefinder
        </p>
        <h2 className={styles["contentSection__text--header"]}>
          Welcome to the Tokefinder community!
        </h2>
      </div>
      <a
        className={styles["contentSection__button"]}
        href="https://www.figma.com/community/plugin/1555496697023365174/tokefinder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles["contentSection__buttonText"]}>
          Discover Tokefinder
        </span>
        <Image
          src="/icon_link-external.svg"
          alt="External link"
          width={16}
          height={16}
          className={styles["contentSection__buttonIcon"]}
        />
      </a>
    </section>
  );
}

export default ContentSection;
