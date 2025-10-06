import React from "react";

import styles from "./bubbles.module.css";

/**
 * FloatingBubbles component - displays decorative colored bubbles in the background
 * Matches the Tokefinder design with bubbles positioned on left and right sides
 */
function FloatingBubbles() {
  return (
    <div className={styles.container}>
      {/* Large green bubble on the left */}
      <div
        className={`${styles.bubble} ${styles["bubble--green-large"]}`}
        aria-hidden="true"
      />

      {/* Small green bubble on the left, above other left bubbles */}
      <div
        className={`${styles.bubble} ${styles["bubble--green-small"]}`}
        aria-hidden="true"
      />

      {/* Purple bubble on the left */}
      <div
        className={`${styles.bubble} ${styles["bubble--purple"]}`}
        aria-hidden="true"
      />

      {/* Right bubble 1 - larger bubble on the right */}
      <div
        className={`${styles.bubble} ${styles["bubble--right-1"]}`}
        aria-hidden="true"
      />

      {/* Right bubble 2 - similar bubble on the right, positioned lower */}
      <div
        className={`${styles.bubble} ${styles["bubble--right-2"]}`}
        aria-hidden="true"
      />
    </div>
  );
}

export default FloatingBubbles;
