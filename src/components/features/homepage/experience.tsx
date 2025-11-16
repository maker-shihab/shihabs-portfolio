"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data";
import { fadeIn } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Calendar,
  Code2,
  ExternalLink,
  MapPin,
  Rocket,
  Terminal,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Calculate total experience
  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const years = Math.floor(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365)
    );
    const months = Math.floor(
      ((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30)) % 12
    );
    if (years > 0) {
      return `${years}+ year${years > 1 ? "s" : ""}`;
    }
    return `${months}+ month${months > 1 ? "s" : ""}`;
  };

  return (
    <section
      id="experience"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-red-500/5 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            <Briefcase className="w-4 h-4" />
            <span>Professional Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            My professional journey in frontend development, building scalable
            applications and delivering exceptional digital experiences for
            clients worldwide.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line - Fixed Position, Aligned with Dots */}
            <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 hidden lg:block" />

            <div className="space-y-12 lg:space-y-16">
              {experiences.map((exp, index) => {
                const duration = calculateDuration(exp.startDate, exp.endDate);
                const isHovered = hoveredIndex === index;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative flex gap-6 lg:gap-8 group"
                  >
                    {/* Timeline Dot - Perfectly Aligned */}
                    <div className="flex flex-col items-center flex-shrink-0 relative z-10 w-12 lg:w-14">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.2 + 0.3,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="relative w-4 h-4"
                      >
                        {/* Outer Glow */}
                        <motion.div
                          className="absolute inset-0 bg-primary rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"
                          animate={
                            isHovered
                              ? {
                                  scale: [1, 1.5, 1],
                                  opacity: [0.3, 0.6, 0.3],
                                }
                              : {}
                          }
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        {/* Dot - Centered */}
                        <div className="relative w-4 h-4 bg-background border-4 border-primary rounded-full shadow-lg" />
                      </motion.div>
                      {/* Connecting Line - Only between items on mobile */}
                      {index !== experiences.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-2 lg:hidden" />
                      )}
                    </div>

                    {/* Experience Card - More Catchy */}
                    <motion.div
                      className="flex-1"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="h-full border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 group-hover:scale-[1.01] overflow-hidden relative">
                        {/* Gradient Glow on Hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-purple-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                          animate={
                            isHovered
                              ? {
                                  background: [
                                    "linear-gradient(135deg, rgba(239, 68, 68, 0) 0%, rgba(168, 85, 247, 0) 50%, rgba(59, 130, 246, 0) 100%)",
                                    "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)",
                                    "linear-gradient(135deg, rgba(239, 68, 68, 0) 0%, rgba(168, 85, 247, 0) 50%, rgba(59, 130, 246, 0) 100%)",
                                  ],
                                }
                              : {}
                          }
                          transition={{ duration: 2, repeat: Infinity }}
                        />

                        {/* Terminal Header */}
                        <div className="px-6 pt-5 pb-4 border-b border-border/50 bg-gradient-to-r from-muted/30 to-muted/10 flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs font-mono text-muted-foreground">
                            {exp.id}.ts
                          </span>
                          {exp.current && (
                            <Badge
                              variant="default"
                              className="ml-auto text-xs bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg"
                            >
                              <Rocket className="w-3 h-3 mr-1" />
                              Current
                            </Badge>
                          )}
                        </div>

                        <CardContent className="p-6">
                          {/* Header Section */}
                          <div className="mb-6">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                              <div className="flex-1">
                                <motion.h3
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.2 + 0.1 }}
                                  className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
                                >
                                  {exp.position}
                                </motion.h3>
                                <div className="flex flex-wrap items-center gap-3 text-muted-foreground mb-3">
                                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/30 border border-border/30">
                                    <Briefcase className="w-4 h-4 text-primary" />
                                    <span className="font-semibold text-foreground">
                                      {exp.company}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/30 border border-border/30">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span>{exp.location}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Date & Type */}
                              <div className="flex flex-col items-start lg:items-end gap-2">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground px-3 py-1.5 rounded-lg bg-muted/30 border border-border/30">
                                  <Calendar className="w-4 h-4 text-primary" />
                                  <span className="font-mono">
                                    {new Date(exp.startDate).toLocaleDateString(
                                      "en-US",
                                      {
                                        year: "numeric",
                                        month: "short",
                                      }
                                    )}{" "}
                                    -{" "}
                                    {exp.current
                                      ? "Present"
                                      : new Date(
                                          exp.endDate!
                                        ).toLocaleDateString("en-US", {
                                          year: "numeric",
                                          month: "short",
                                        })}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant="secondary"
                                    className="text-xs font-mono capitalize bg-gradient-to-r from-primary/10 to-secondary/10"
                                  >
                                    {exp.type}
                                  </Badge>
                                  <Badge
                                    variant="outline"
                                    className="text-xs font-mono border-primary/30"
                                  >
                                    {duration}
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            {/* Description */}
                            <motion.p
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.2 }}
                              className="text-muted-foreground leading-relaxed mb-6"
                            >
                              {exp.description}
                            </motion.p>
                          </div>

                          {/* Achievements */}
                          <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-muted/30 to-muted/10 border border-border/30">
                            <div className="flex items-center gap-2 mb-3">
                              <Award className="w-4 h-4 text-primary" />
                              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-semibold">
                                Key Achievements
                              </span>
                            </div>
                            <ul className="space-y-2.5">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay: index * 0.2 + 0.3 + i * 0.1,
                                  }}
                                  className="flex items-start gap-3 text-sm"
                                >
                                  <motion.span
                                    className="text-primary mt-1 font-mono flex-shrink-0 text-lg"
                                    animate={
                                      isHovered
                                        ? { rotate: [0, 10, -10, 0] }
                                        : {}
                                    }
                                    transition={{ duration: 0.5 }}
                                  >
                                    →
                                  </motion.span>
                                  <span className="text-muted-foreground leading-relaxed">
                                    {achievement}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies Stack */}
                          <div className="pt-4 border-t border-border/50">
                            <div className="flex items-center gap-2 mb-3">
                              <Code2 className="w-4 h-4 text-primary" />
                              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-semibold">
                                Technologies Used
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <motion.div
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay: index * 0.2 + 0.4 + i * 0.05,
                                  }}
                                  whileHover={{ scale: 1.1, y: -2 }}
                                >
                                  <Badge
                                    variant="outline"
                                    className="text-xs font-mono bg-background border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Link (if available) */}
                          {exp.link && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.5 }}
                              className="mt-4 pt-4 border-t border-border/50"
                            >
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link"
                              >
                                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                <span className="font-mono">View Profile</span>
                              </a>
                            </motion.div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {experiences.length}+
              </span>
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              Active Positions
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {experiences.reduce(
                  (acc, exp) => acc + (exp.achievements?.length || 0),
                  0
                )}
                +
              </span>
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              Key Achievements
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {new Set(experiences.flatMap((exp) => exp.technologies)).size}+
              </span>
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              Technologies
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
