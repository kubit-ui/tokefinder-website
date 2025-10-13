"use client";

import Image from "next/image";
import React, { useState, useCallback } from "react";
import styles from "./accordion.module.css";

/**
 * Accordion item interface
 */
interface AccordionItem {
  /** Title displayed in the accordion header */
  title: string;
  /** Content displayed when accordion item is expanded */
  content: string;
  /** Unique identifier for the item */
  id?: string;
}

/**
 * Default accordion items - preserving original content
 */
const DEFAULT_ITEMS: AccordionItem[] = [
  {
    id: "streamlined-annotations",
    title: "Streamlined annotations",
    content:
      "Effortlessly create and manage annotations. Categorize your comments based on various aspects (poeditor, accessibility and analytics).",
  },
  {
    id: "enhanced-portability",
    title: "Enhanced portability",
    content:
      "Stop losing comments when relocating Figma files. Commentify ensures your annotations travel with you.",
  },
  {
    id: "instant-access",
    title: "Instant access",
    content:
      "Access team members' comments directly from the left sidebar menu. Commentify swiftly directs you to pertinent information.",
  },
  {
    id: "developer-mode",
    title: "Developer mode compatibility",
    content: "Integrate Commentify into your development workflow.",
  },
];

/**
 * Accordion component props
 */
interface AccordionProps {
  /** Array of accordion items to display */
  items?: AccordionItem[];
  /** Whether multiple items can be open simultaneously */
  allowMultiple?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Callback when an item is toggled */
  onToggle?: (index: number, isOpen: boolean) => void;
}

/**
 * Accordion component that displays collapsible content sections
 * 
 * @param props - Component configuration props
 * @returns React component
 */
const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = "",
  onToggle,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const accordionItems = items ?? DEFAULT_ITEMS;

  const toggleItem = useCallback((index: number) => {
    const isCurrentlyOpen = openIndexes.includes(index);
    
    if (allowMultiple) {
      // Multiple mode: add or remove index
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      // Exclusive mode: only one item open at a time
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
    }

    // Call onToggle callback if provided
    onToggle?.(index, !isCurrentlyOpen);
  }, [allowMultiple, openIndexes, onToggle]);

  return (
    <div 
      className={`${styles.accordion} ${className}`.trim()}
      role="region"
      aria-label="Accordion content"
    >
      {accordionItems.map((item: AccordionItem, index: number) => (
        <div
          key={item.id ?? index}
          className={`${styles.accordion__item} ${
            openIndexes.includes(index) ? styles["accordion__item--open"] : ""
          }`}
        >
          <button
            type="button"
            className={styles.accordion__header}
            onClick={() => toggleItem(index)}
            aria-expanded={openIndexes.includes(index)}
            aria-controls={`accordion-content-${item.id ?? index}`}
            id={`accordion-header-${item.id ?? index}`}
          >
            <span className={styles.accordion__title}>{item.title}</span>
            <div 
              className={styles.accordion__icon}
              aria-hidden="true"
            >
              <Image
                src={
                  openIndexes.includes(index)
                    ? "/icon_minus-circle.svg"
                    : "/icon_plus-circle.svg"
                }
                alt=""
                height={25}
                width={25}
                priority={false}
              />
            </div>
          </button>
          <div 
            className={styles.accordion__content}
            id={`accordion-content-${item.id ?? index}`}
            aria-labelledby={`accordion-header-${item.id ?? index}`}
            role="region"
          >
            <div className={styles.accordion__content__inner}>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
