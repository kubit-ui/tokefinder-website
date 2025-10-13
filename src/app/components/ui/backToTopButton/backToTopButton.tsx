"use client";

import React from "react";
import styles from "./backToTopButton.module.css";

/**
 * Props for the BackToTopButton component
 */
interface BackToTopButtonProps {
  /** Bottom position offset in pixels */
  bottomPosition?: number;
  /** Scroll offset after which button becomes visible */
  visibilityScrollOffset?: number;
  /** Reference to element that should stop the button from overlapping */
  stopElement?: React.RefObject<HTMLElement | null>;
  /** Additional CSS class names */
  className?: string;
  /** Click handler for the button */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Custom aria label for accessibility */
  ariaLabel?: string;
}

/**
 * A floating button that appears when scrolling down and smoothly scrolls back to top
 * Automatically positions itself to avoid overlapping with specified elements
 * 
 * @param props - Component configuration props
 * @param ref - Forwarded reference to the button element
 * @returns React component
 */
const BackToTopButton = React.forwardRef<HTMLButtonElement, BackToTopButtonProps>(
  (
    {
      bottomPosition = 32,
      visibilityScrollOffset = 400,
      stopElement,
      className = "",
      onClick,
      ariaLabel = "Back to top",
      ...restProps
    },
    ref
  ) => {
    const innerRef = React.useRef<HTMLButtonElement | null>(null);
    const [visible, setVisible] = React.useState<boolean>(false);

    // Forward ref to both internal and external refs
    React.useImperativeHandle(
      ref,
      () => innerRef.current as HTMLButtonElement,
      []
    );

    const handleScrollListener = React.useCallback(() => {
      const stopElementCurrent = stopElement?.current;
      const buttonElement = innerRef.current;
      
      if (!buttonElement) {
        return;
      }

      // Reset to base position
      let newBottomPosition = bottomPosition;

      // Adjust position if stop element is present to prevent overlap
      if (stopElementCurrent) {
        const buttonRect = buttonElement.getBoundingClientRect();
        const stopRect = stopElementCurrent.getBoundingClientRect();
        const overlap = buttonRect.bottom - stopRect.top;

        if (overlap > 0) {
          newBottomPosition += overlap;
        }
      }

      // Update button position
      buttonElement.style.bottom = `${newBottomPosition}px`;

      // Show/hide button based on scroll position
      const currentScrollY = window.scrollY;
      const shouldBeVisible = currentScrollY >= visibilityScrollOffset;

      if (shouldBeVisible !== visible) {
        setVisible(shouldBeVisible);
      }
    }, [stopElement, visibilityScrollOffset, bottomPosition, visible]);

    React.useEffect(() => {
      // Initial check
      handleScrollListener();
      
      // Add scroll listener with throttling for better performance
      let ticking = false;
      const throttledScrollHandler = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScrollListener();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", throttledScrollHandler, { passive: true });
      
      return () => {
        window.removeEventListener("scroll", throttledScrollHandler);
      };
    }, [handleScrollListener]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      // Scroll to top with smooth behavior
      window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
      });
      
      // Call custom onClick handler if provided
      onClick?.(event);
    };

    // Combine CSS classes
    const buttonClasses = [
      styles.backToTop,
      visible ? styles.visible : styles.hidden,
      className
    ].filter(Boolean).join(" ");

    return (
      <button
        ref={innerRef}
        type="button"
        className={buttonClasses}
        onClick={handleClick}
        aria-label={ariaLabel}
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        {...restProps}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.backToTop__icon}
          aria-hidden="true"
        >
          <path
            d="M11.0039 8.41394V17.9999H13.0039V8.41394L17.2969 12.7069L18.7109 11.2929L12.0039 4.58594L5.29688 11.2929L6.71087 12.7069L11.0039 8.41394Z"
            fill="currentColor"
          />
        </svg>
      </button>
    );
  }
);

BackToTopButton.displayName = "BackToTopButton";

export default BackToTopButton;
