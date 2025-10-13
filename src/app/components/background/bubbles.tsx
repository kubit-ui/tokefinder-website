import React from "react";
import styles from "./bubbles.module.css";

/**
 * Props for FloatingBubbles component
 */
interface FloatingBubblesProps {
  /** Additional CSS class names */
  className?: string;
}

/**
 * FloatingBubbles component - displays decorative colored bubbles in the background
 * Matches the Tokefinder design with bubbles positioned on left and right sides
 * 
 * @param props - Component props
 * @returns React component
 */
function FloatingBubbles({ className = "" }: FloatingBubblesProps = {}): React.ReactElement {
  return (
    <div className={`${styles.container} ${className}`.trim()}>
      {/* Large green bubble on the left */}
      <div
        className={`${styles.bubble} ${styles["bubble--green-large"]}`}
        aria-hidden="true"
        role="presentation"
      />

      {/* Small green bubble on the left, above other left bubbles */}
      <div
        className={`${styles.bubble} ${styles["bubble--green-small"]}`}
        aria-hidden="true"
        role="presentation"
      />

      {/* Purple bubble on the left */}
      <div
        className={`${styles.bubble} ${styles["bubble--purple"]}`}
        aria-hidden="true"
        role="presentation"
      />

      {/* Right bubble 1 - larger bubble on the right */}
      <div
        className={`${styles.bubble} ${styles["bubble--right-1"]}`}
        aria-hidden="true"
        role="presentation"
      />

      {/* Right bubble 2 - similar bubble on the right, positioned lower */}
      <div
        className={`${styles.bubble} ${styles["bubble--right-2"]}`}
        aria-hidden="true"
        role="presentation"
      />
    </div>
  );
}

export default FloatingBubbles;
