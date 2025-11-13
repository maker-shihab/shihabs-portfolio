"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
}

export function IconBox({
  icon: Icon,
  size = "md",
  variant = "default",
  className,
}: IconBoxProps) {
  const sizeStyles = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  const variantStyles = {
    default: "bg-muted text-muted-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border-2 border-border text-foreground",
  };

  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg transition-all duration-300",
        sizeStyles[size],
        variantStyles[variant],
        "hover:scale-105",
        className
      )}
    >
      <Icon size={iconSizes[size]} />
    </div>
  );
}
