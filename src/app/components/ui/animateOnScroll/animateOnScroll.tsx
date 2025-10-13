import React, { ReactNode, HTMLAttributes, ElementType } from "react";
import { useInView } from "../../../hooks/useInView";
import styles from "./animateOnScroll.module.css";

/**
 * Available animation types
 */
type AnimationType = "appearing-animation" | "sliding-animation";

/**
 * Available animation directions
 */
type AnimationDirection = "from-bottom" | "from-left" | "from-right";

/**
 * Available animation delays
 */
type AnimationDelay = "delay-first" | "delay-second" | "delay-third";

/**
 * Props for the AnimateOnScroll component
 */
interface AnimateOnScrollProps extends HTMLAttributes<HTMLElement> {
  /** Content to be animated */
  children: ReactNode;
  /** Additional CSS class names */
  className?: string;
  /** Type of animation to apply */
  animationType?: AnimationType;
  /** Direction from which element should animate */
  direction?: AnimationDirection;
  /** Animation delay timing */
  delay?: AnimationDelay;
  /** Intersection threshold (0-1) for triggering animation */
  threshold?: number;
  /** HTML element type to render as */
  as?: ElementType;
  /** Whether to apply wall effect styling */
  wallEffect?: boolean;
  /** Whether animation should trigger only once */
  triggerOnce?: boolean;
}

/**
 * Component that animates its children when they enter the viewport
 * Uses IntersectionObserver API through useInView hook to detect visibility
 * and applies CSS-based animations with configurable timing and direction
 * 
 * @param props - Component configuration props
 * @returns React component with scroll-triggered animations
 * 
 * @example
 * <AnimateOnScroll
 *   animationType="appearing-animation"
 *   direction="from-bottom"
 *   delay="delay-second"
 *   threshold={0.3}
 * >
 *   <h2>This will animate when scrolled into view</h2>
 * </AnimateOnScroll>
 */
const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = "",
  animationType = "appearing-animation",
  direction = "from-bottom",
  delay = "delay-first",
  threshold = 0.1,
  as: Component = "div",
  wallEffect = false,
  triggerOnce = true,
  ...rest
}) => {
  const { ref, inView } = useInView<HTMLDivElement>({ 
    threshold,
    triggerOnce 
  });

  // Combine CSS classes for animation
  const animationClasses = [
    className,
    styles[animationType],
    styles[direction],
    styles[delay],
    inView ? styles.visible : ""
  ].filter(Boolean).join(" ");

  return (
    <div
      ref={ref}
      className={`${className} ${wallEffect ? styles["wall-container"] : ""}`.trim()}
      {...rest}
    >
      <Component
        className={animationClasses}
        aria-hidden={!inView ? "true" : undefined}
      >
        {children}
      </Component>
    </div>
  );
};

export default AnimateOnScroll;
