/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  Database,
  Figma,
  GitBranch,
  Globe,
  Smartphone,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { IconBox } from "./icon-box";

interface TechIconsProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
  variant?: "grid" | "list";
}

const technologies = [
  { name: "HTML5", icon: Globe, color: "text-orange-500" },
  { name: "CSS3", icon: Code, color: "text-blue-500" },
  { name: "JavaScript", icon: Terminal, color: "text-yellow-500" },
  { name: "React", icon: Sparkles, color: "text-cyan-400" },
  { name: "Next.js", icon: Globe, color: "text-white" },
  { name: "TypeScript", icon: Terminal, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: Sparkles, color: "text-teal-400" },
  { name: "Git", icon: GitBranch, color: "text-red-500" },
  { name: "Figma", icon: Figma, color: "text-purple-500" },
  { name: "Responsive Design", icon: Smartphone, color: "text-green-500" },
  { name: "Performance", icon: Zap, color: "text-yellow-400" },
  { name: "APIs", icon: Database, color: "text-indigo-400" },
];

export function TechIcons({
  className,
  iconSize = 24,
  showLabels = false,
  variant = "grid",
}: TechIconsProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "list":
        return "flex-col space-y-4";
      default:
        return "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4";
    }
  };

  return (
    <div className={cn(getVariantStyles(), className)}>
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className={cn(
            "flex items-center justify-center p-4 rounded-xl border bg-card",
            "transition-all duration-300 hover:scale-105 hover:shadow-md",
            variant === "list" ? "flex-row space-x-3" : "flex-col space-y-2"
          )}
        >
          <IconBox icon={tech.icon} size="md" variant="default" />
          {showLabels && (
            <span className="text-sm font-medium text-center">{tech.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}
