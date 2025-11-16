"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Code2,
  ExternalLink,
  FolderKanban,
  Home,
  Mail,
  User,
} from "lucide-react";
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

interface MobileNavProps {
  onNavigate?: () => void;
}

export function MobileNav({ onNavigate }: MobileNavProps) {
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
        // Call onNavigate to close mobile menu
        onNavigate?.();
        // Small delay to ensure menu closes first
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
      } else {
        // If we're on another page, navigate to home first, then scroll
        e.preventDefault();
        // Call onNavigate to close mobile menu
        onNavigate?.();
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
        }, 500);
      }
    } else {
      // For regular links, just close the menu
      onNavigate?.();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Navigation Links */}
      <ScrollArea className="flex-1">
        <nav className="flex flex-col p-6 space-y-2">
          {siteConfig.mainNav.map((item, index) => {
            // Check if item is active
            let isActive = false;
            if (item.href.startsWith("/#")) {
              // For hash links, check if the hash matches
              isActive =
                pathname === "/" && activeHash === item.href.substring(2);
            } else {
              // For regular links, check pathname
              isActive = pathname === item.href;
            }

            const Icon = navIcons[item.title as keyof typeof navIcons];

            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "group relative flex items-center gap-3 px-4 py-3 rounded-lg",
                    "transition-all duration-300",
                    isActive
                      ? "bg-accent text-foreground border-l-4 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {/* Icon */}
                  {Icon && (
                    <Icon
                      className={cn(
                        "w-5 h-5 transition-colors flex-shrink-0",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                    />
                  )}

                  {/* Text Content */}
                  <span className="font-medium flex-1">{item.title}</span>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </ScrollArea>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 border-t border-border/50 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-blue-500/5 space-y-4"
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            asChild
            size="lg"
            className="w-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white hover:from-red-600 hover:via-purple-600 hover:to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={onNavigate}
          >
            <a
              href="https://wa.me/8801722563073"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Code className="w-4 h-4" />
              Hire Me
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-mono text-muted-foreground">
            <span className="text-primary">const</span>{" "}
            <span className="text-foreground">availableForHire</span> ={" "}
            <span className="text-primary">true</span>;
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Let&apos;s build something amazing together
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
