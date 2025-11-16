"use client";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Briefcase, Code2, FolderKanban, Home, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Icon mapping for each nav item
const navIcons = {
  Home: Home,
  About: User,
  Projects: FolderKanban,
  Skills: Code2,
  Experience: Briefcase,
  Contact: Mail,
};

export function MainNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeHash, setActiveHash] = useState("");

  // Track active hash based on scroll position or URL hash
  useEffect(() => {
    const updateActiveHash = () => {
      if (pathname === "/") {
        const hash = window.location.hash.substring(1);
        if (hash) {
          setActiveHash(hash);
        } else {
          // Check scroll position to determine active section
          const sections = ["skills", "experience", "contact"];
          const scrollPosition = window.scrollY + 100; // Offset for header

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (
                scrollPosition >= offsetTop &&
                scrollPosition < offsetTop + offsetHeight
              ) {
                setActiveHash(section);
                break;
              }
            }
          }
        }
      } else {
        setActiveHash("");
      }
    };

    updateActiveHash();
    window.addEventListener("scroll", updateActiveHash);
    window.addEventListener("hashchange", updateActiveHash);

    return () => {
      window.removeEventListener("scroll", updateActiveHash);
      window.removeEventListener("hashchange", updateActiveHash);
    };
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Check if it's a hash link (section on home page)
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2); // Remove "/#"

      // If we're on the home page, scroll to section
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          // Account for header height (80px = h-20)
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          setActiveHash(sectionId);
        }
      } else {
        // If we're on another page, navigate to home first, then scroll
        e.preventDefault();
        router.push(href);
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
            setActiveHash(sectionId);
          }
        }, 300);
      }
    }
  };

  return (
    <nav className="flex items-center gap-1">
      {siteConfig.mainNav.map((item, index) => {
        // Check if item is active
        let isActive = false;
        if (item.href.startsWith("/#")) {
          // For hash links, check if the hash matches
          isActive = pathname === "/" && activeHash === item.href.substring(2);
        } else {
          // For regular links, check pathname
          isActive = pathname === item.href;
        }

        const Icon = navIcons[item.title as keyof typeof navIcons];

        return (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300",
                "group",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {/* Active Indicator - Simple Underline */}
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              {/* Hover Indicator - Subtle Underline */}
              {!isActive && (
                <motion.div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              )}

              {/* Icon */}
              {Icon && (
                <Icon
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  )}
                />
              )}

              {/* Text Content */}
              <span className="relative">{item.title}</span>
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}
