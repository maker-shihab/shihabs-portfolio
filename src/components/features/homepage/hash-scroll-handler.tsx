"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Only handle hash navigation on home page
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.substring(1); // Remove "#"
      const element = document.getElementById(hash);

      if (element) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [pathname]);

  return null;
}
