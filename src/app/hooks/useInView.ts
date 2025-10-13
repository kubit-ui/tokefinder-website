import { useState, useEffect, useRef, RefObject } from "react";

/**
 * Configuration options for the useInView hook
 */
interface UseInViewOptions extends IntersectionObserverInit {
  /** Whether to trigger only once when element enters viewport */
  triggerOnce?: boolean;
  /** Skip initial check and wait for intersection */
  skip?: boolean;
}

/**
 * Return type for useInView hook
 */
interface UseInViewReturn<T extends Element> {
  /** Reference to attach to the target element */
  ref: RefObject<T | null>;
  /** Boolean indicating if element is currently in viewport */
  inView: boolean;
  /** IntersectionObserver entry object with detailed intersection info */
  entry?: IntersectionObserverEntry;
}

/**
 * Custom hook to detect when an element enters the viewport using IntersectionObserver
 * 
 * @param options Configuration options for IntersectionObserver and hook behavior
 * @returns Object containing ref, inView state, and entry details
 * 
 * @example
 * const { ref, inView } = useInView<HTMLDivElement>({
 *   threshold: 0.5,
 *   triggerOnce: true
 * });
 * 
 * return <div ref={ref}>{inView && 'Element is visible!'}</div>
 */
export function useInView<T extends Element>(
  options: UseInViewOptions = {}
): UseInViewReturn<T> {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    triggerOnce = true,
    skip = false,
    ...otherOptions
  } = options;

  const [inView, setInView] = useState<boolean>(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    
    // Skip if no element, skip is true, or IntersectionObserver is not supported
    if (!element || skip || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [observerEntry] = entries;
      setEntry(observerEntry);
      
      if (observerEntry.isIntersecting) {
        setInView(true);
        
        // Disconnect observer if triggerOnce is true
        if (triggerOnce) {
          observer.disconnect();
        }
      } else if (!triggerOnce) {
        // Update inView state when element leaves viewport (only if not triggerOnce)
        setInView(false);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      root,
      rootMargin,
      ...otherOptions,
    });

    observer.observe(element);

    // Cleanup observer on component unmount or dependency change
    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, triggerOnce, skip, otherOptions]);

  return { ref, inView, entry };
}
