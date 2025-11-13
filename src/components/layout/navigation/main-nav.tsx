"use client";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-1">
      {siteConfig.mainNav.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group relative px-3 py-2 text-sm font-medium transition-all duration-200",
              "text-muted-foreground hover:text-foreground",
              isActive && "text-foreground"
            )}
          >
            {item.title}
            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-primary/60",
                "transition-all duration-300 origin-left",
                isActive ? "w-full" : "w-0 group-hover:w-full"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
