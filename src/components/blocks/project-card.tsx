"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/portfolio-data";
import { fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Code2,
  Github,
  Globe,
  Terminal,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  className?: string;
  index?: number;
}

// Technology icon mapping
const techIcons: Record<string, string> = {
  React: "⚛️",
  "Next.js": "▲",
  TypeScript: "📘",
  "Tailwind CSS": "🎨",
  JavaScript: "🟨",
  HTML5: "🌐",
  CSS3: "🎨",
  "Context API": "🔗",
  "Framer Motion": "✨",
  "Swiper.js": "📱",
  GSAP: "🎭",
  Sass: "💅",
};

export function ProjectCard({
  project,
  className,
  index = 0,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate duration
  const startDate = new Date(project.startDate);
  const endDate = project.endDate ? new Date(project.endDate) : new Date();
  const duration = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn("group relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl group-hover:scale-[1.02] cursor-pointer flex flex-col p-0 gap-0">
        {/* Image Container - Full Width, No Gap, Covers Top */}
        <div className="relative w-full aspect-video overflow-hidden bg-muted rounded-t-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Status Badge */}
          <div className="absolute top-3 left-3 z-10">
            <Badge
              variant={
                project.status === "completed"
                  ? "default"
                  : project.status === "in-progress"
                  ? "secondary"
                  : "outline"
              }
              className="backdrop-blur-sm font-mono text-xs"
            >
              {project.status === "completed"
                ? "✅ completed"
                : project.status === "in-progress"
                ? "🔄 in-progress"
                : "📦 archived"}
            </Badge>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 z-10">
              <Badge
                variant="default"
                className="backdrop-blur-sm font-mono text-xs"
              >
                ⭐ featured
              </Badge>
            </div>
          )}
        </div>

        {/* Content - Developer Friendly Design */}
        <CardContent className="p-0 flex-1 flex flex-col">
          {/* Terminal-style Header */}
          <div className="px-5 pt-4 pb-3 border-b border-border/50 bg-muted/30">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-mono text-muted-foreground">
                project.ts
              </span>
            </div>
            <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Main Content */}
          <div className="px-5 py-4 flex-1 flex flex-col">
            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {project.description}
            </p>

            {/* Technology Stack Tiles */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-mono text-muted-foreground">
                  tech stack
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-background border border-border/50 font-mono px-2 py-0.5 hover:border-primary/50 transition-colors"
                  >
                    <span className="mr-1">{techIcons[tech] || "🔧"}</span>
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge
                    variant="outline"
                    className="text-xs font-mono px-2 py-0.5"
                  >
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>
            </div>

            {/* Meta Info - Developer Style */}
            <div className="mt-auto pt-4 border-t border-border/50">
              <div className="flex items-center justify-between gap-2 text-[10px]">
                <div className="flex items-center gap-1 font-mono text-muted-foreground min-w-0 flex-1">
                  <User className="w-2.5 h-2.5 flex-shrink-0" />
                  <span className="text-primary">client</span> ={" "}
                  <span className="text-foreground truncate">
                    &quot;{project.client || "Personal"}&quot;
                  </span>
                </div>
                <div className="flex items-center gap-1 font-mono text-muted-foreground flex-shrink-0">
                  <Calendar className="w-2.5 h-2.5" />
                  <span className="text-primary">year</span> ={" "}
                  <span className="text-foreground">
                    {new Date(project.startDate).getFullYear()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with Arrow */}
          <div className="px-5 py-3 border-t border-border/50 bg-muted/20 flex items-center justify-between">
            <span className="text-xs font-mono text-muted-foreground">
              view details
            </span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:scale-110" />
          </div>
        </CardContent>
      </Card>

      {/* Hover Popup - Enhanced */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-50 bg-background dark:bg-gray-950/95 border-2 border-primary/50 rounded-lg shadow-2xl p-4 sm:p-6 flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pr-1 mb-4">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50 sticky top-0 -mt-1 pt-1 z-10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
                <Terminal className="w-3.5 h-3.5 text-primary ml-3" />
                <span className="text-xs font-mono text-muted-foreground">
                  {project.id}.ts
                </span>
              </div>

              {/* Header */}
              <div className="mb-4">
                <h3 className="font-bold text-lg sm:text-xl mb-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
                <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <p className="text-xs font-mono text-muted-foreground">
                      client
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    {project.client || "Personal Project"}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <p className="text-xs font-mono text-muted-foreground">
                      duration
                    </p>
                  </div>
                  <p className="text-sm font-medium">{duration} days</p>
                </div>

                <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Code2 className="w-3.5 h-3.5 text-primary" />
                    <p className="text-xs font-mono text-muted-foreground">
                      status
                    </p>
                  </div>
                  <p className="text-sm font-medium capitalize">
                    {project.status}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <p className="text-xs font-mono text-muted-foreground">
                      year
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    {new Date(project.startDate).getFullYear()}
                  </p>
                </div>
              </div>

              {/* Technologies Stack */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-3.5 h-3.5 text-primary" />
                  <p className="text-xs font-mono text-muted-foreground">
                    technologies
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-background border border-border/50 font-mono px-2 py-0.5"
                    >
                      <span className="mr-1">{techIcons[tech] || "🔧"}</span>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions - Always Visible */}
            <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border/50 flex-shrink-0">
              {project.liveUrl && (
                <Button
                  asChild
                  size="sm"
                  variant="default"
                  className="flex-1 min-w-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white hover:from-red-600 hover:via-purple-600 hover:to-blue-600 text-xs sm:text-sm"
                >
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-1.5 sm:gap-2"
                  >
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">Live Demo</span>
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="flex-1 min-w-0 text-xs sm:text-sm"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-1.5 sm:gap-2"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">GitHub</span>
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
