"use client";

import { ProjectCard } from "@/components/blocks/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";
import { fadeIn } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop: 5 projects (3 in first row, 2 in second row)
  // Mobile: 4 projects (1 per row)
  const featuredProjects = projects
    .filter((p) => p.featured)
    .slice(0, isMobile ? 4 : 5);

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <span>🚀</span>
            <span>Featured Projects</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of modern web applications, from e-commerce
            platforms to dynamic web experiences.
          </p>
        </motion.div>

        {/* Projects Grid - Desktop: 5 cards (3+2), Mobile: 4 cards (1 per row) */}
        <div
          className={`grid gap-6 ${
            isMobile
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={
                !isMobile && index === 3
                  ? "lg:col-start-1 lg:col-end-2"
                  : !isMobile && index === 4
                  ? "lg:col-start-2 lg:col-end-3"
                  : ""
              }
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 border-primary/20 hover:border-primary/50 hover:bg-gradient-to-r hover:from-red-500/20 hover:via-purple-500/20 hover:to-blue-500/20"
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
