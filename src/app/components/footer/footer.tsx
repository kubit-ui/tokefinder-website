import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

/**
 * Footer component props interface
 */
interface FooterProps {
  /** Additional CSS class names */
  className?: string;
}

/**
 * Social media link configuration
 */
interface SocialLink {
  href: string;
  label: string;
  ariaLabel: string;
}

/**
 * Social media links configuration
 */
const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://x.com/kubit_ui",
    label: "X | Twitter",
    ariaLabel: "Follow Kubit on X (formerly Twitter)"
  },
  {
    href: "https://discord.gg/QPtZktE9sV",
    label: "Discord",
    ariaLabel: "Join Kubit Discord community"
  },
  {
    href: "https://github.com/kubit-ui",
    label: "GitHub",
    ariaLabel: "View Kubit repositories on GitHub"
  }
];

/**
 * Footer component with company information, support links, and social media
 * 
 * @param props - Component props
 * @param ref - Forwarded reference to the footer element
 * @returns React component
 */
const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ className = "" }, ref) => {
    // Get current year dynamically
    const currentYear = new Date().getFullYear();

    return (
      <footer 
        ref={ref} 
        className={`${styles.footer} ${className}`.trim()}
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className={styles.footer__content}>
          <div className={styles["footer__content--top"]}>
            {/* Company Logo */}
            <Image
              src="/kubit_logo.svg"
              alt="Kubit - Digital Design System and Figma Plugin Development"
              height={30}
              width={70}
              className={styles.footer__logo}
            />
            
            {/* Support Section */}
            <div className={styles["footer__content--top__support"]}>
              <a
                href="mailto:kubit.lab.dev@gmail.com?subject=Kubit%20Support%20Request&body=Hello%20Kubit%20team,%0A%0AI%20need%20assistance%20with..."
                rel="noopener noreferrer"
                aria-label="Contact Kubit support via email"
                className={styles.footer__supportLink}
              >
                Support
              </a>
              <Image
                src="/icon_contact.svg"
                alt=""
                height={20}
                width={20}
                aria-hidden="true"
                className={styles.footer__contactIcon}
              />
            </div>
          </div>
          
          <div className={styles["footer__content--bottom"]}>
            {/* Copyright */}
            <span className={styles.footer__copyright}>
              © {currentYear} Open Digital Services S.L.
            </span>
            
            {/* Social Media Links */}
            <nav 
              className={styles["footer__content--bottom__social"]}
              aria-label="Social media links"
            >
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className={styles.footer__socialLink}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export default Footer;
