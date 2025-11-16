"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Skill } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, Calendar, Code2, FolderKanban, Terminal } from "lucide-react";

interface SkillBadgeProps {
  skill: Skill;
  className?: string;
  index?: number;
  showProgress?: boolean;
  variant?: "default" | "compact" | "featured";
}

export function SkillBadge({
  skill,
  className,
  index = 0,
  showProgress = true,
}: SkillBadgeProps) {
  const getSkillLevelColor = (level: number) => {
    // Muted, less bright colors
    if (level >= 90) return "bg-green-500/40";
    if (level >= 80) return "bg-blue-500/40";
    if (level >= 70) return "bg-yellow-500/40";
    return "bg-gray-500/40";
  };

  const getExpertiseBadge = (level: number) => {
    if (level >= 95)
      return {
        text: "Master",
        variant: "default" as const,
        className:
          "bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-600 border-green-500/30",
      };
    if (level >= 90)
      return {
        text: "Expert",
        variant: "default" as const,
        className:
          "bg-gradient-to-r from-blue-500/20 to-cyan-600/20 text-blue-600 border-blue-500/30",
      };
    if (level >= 80)
      return {
        text: "Advanced",
        variant: "secondary" as const,
        className: "bg-primary/10 text-primary border-primary/20",
      };
    if (level >= 70)
      return {
        text: "Proficient",
        variant: "secondary" as const,
        className: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
      };
    return {
      text: "Learning",
      variant: "outline" as const,
      className: "bg-muted/50 text-muted-foreground border-border/50",
    };
  };

  const expertiseBadge = getExpertiseBadge(skill.level);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className={cn("group relative", className)}
    >
      <Card className="h-full overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 group-hover:scale-[1.02] cursor-pointer flex flex-col relative">
        {/* Subtle gradient glow on hover */}
        <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />

        <CardContent className="p-5 flex-1 flex flex-col relative z-10">
          {/* Terminal Header - Developer Friendly */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-mono text-muted-foreground">
              {skill.id}.ts
            </span>
            {skill.level >= 90 && (
              <Badge
                variant="outline"
                className="ml-auto text-xs font-mono border-primary/30 text-primary bg-primary/5"
              >
                <Award className="w-3 h-3 mr-1" />
                Expert
              </Badge>
            )}
          </div>

          {/* Main Header - Icon, Name, Badges */}
          <div className="flex items-start gap-3 mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-3xl flex-shrink-0 mt-0.5"
            >
              {skill.icon}
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors mb-2 font-mono">
                {skill.name}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant={expertiseBadge.variant}
                  className={cn(
                    "text-xs font-semibold font-mono",
                    expertiseBadge.className
                  )}
                >
                  {expertiseBadge.text}
                </Badge>
              </div>
            </div>
          </div>

          {/* Description - Developer Friendly */}
          <p className="text-sm text-foreground/80 leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
            {skill.description}
          </p>

          {/* Progress Bar - Less Bright, No Animation */}
          {showProgress && (
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                  const proficiency =
                </span>
                <span className="text-sm font-bold text-foreground font-mono">
                  {skill.level}%
                </span>
              </div>
              <div className="relative h-2 bg-muted/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                  className={cn(
                    "h-full rounded-full",
                    getSkillLevelColor(skill.level)
                  )}
                />
              </div>
            </div>
          )}

          {/* Stats with Badges - Developer Friendly */}
          <div className="mt-auto pt-4 border-t border-border/50">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge
                variant="outline"
                className="text-xs font-mono border-primary/30 text-primary bg-primary/5"
              >
                <Calendar className="w-3 h-3 mr-1.5" />
                {skill.yearsOfExperience}+ years
              </Badge>
              <Badge
                variant="outline"
                className="text-xs font-mono border-primary/30 text-primary bg-primary/5"
              >
                <FolderKanban className="w-3 h-3 mr-1.5" />
                {skill.projects}+ projects
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className="text-xs font-mono capitalize border-border/50 bg-muted/30"
              >
                <Code2 className="w-3 h-3 mr-1.5" />
                {skill.category}
              </Badge>
              <span className="text-xs font-mono text-muted-foreground">
                {skill.level}%
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
