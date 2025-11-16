"use client";

import { siteConfig } from "@/data/site-data";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  variant?: "default" | "minimal" | "branded";
}

const socialLinks = [
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
    color: "hover:text-gray-700 dark:hover:text-gray-300",
  },
  {
    name: "Twitter",
    href: siteConfig.links.twitter,
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Email",
    href: siteConfig.links.email,
    icon: Mail,
    color: "hover:text-red-500",
  },
];

export function SocialIcons({
  className,
  iconSize = 20,
  variant = "default",
}: SocialIconsProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "minimal":
        return "p-2 bg-transparent hover:bg-accent text-muted-foreground hover:text-foreground";
      case "branded":
        return "p-2 bg-secondary text-secondary-foreground hover:bg-secondary/80";
      default:
        return "p-2 bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground";
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center rounded-full transition-all duration-300",
            "transform hover:scale-110 focus:scale-110 focus:outline-none",
            getVariantStyles(),
            social.color
          )}
          aria-label={`Visit my ${social.name}`}
        >
          <social.icon size={iconSize} />
        </Link>
      ))}
    </div>
  );
}
