"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${
      searchParams.toString() ? `?${searchParams}` : ""
    }`;

    console.log("Page view:", url);

    if ("performance" in window) {
      const navigationTiming = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming;
      if (navigationTiming) {
        console.log(
          "Page load time:",
          navigationTiming.loadEventEnd - navigationTiming.fetchStart
        );
      }
    }
  }, [pathname, searchParams]);

  return null;
}
