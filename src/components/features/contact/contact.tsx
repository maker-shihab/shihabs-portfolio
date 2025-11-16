"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/data/site-data";
import { fadeIn } from "@/lib/animations";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Terminal,
  Twitter,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      // Success toast
      toast.success("Message Sent Successfully!", {
        description: "I'll get back to you soon. Thanks for reaching out!",
        duration: 5000,
        icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
      });

      // Reset form
      form.reset();
    } catch (error) {
      toast.error("Failed to Send Message", {
        description:
          error instanceof Error
            ? error.message
            : "Please try again later or contact me directly.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
            <Code className="w-4 h-4" />
            <span>Let&apos;s Connect</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your project
            and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto lg:items-stretch">
          {/* Contact Form */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="border-2 border-border/50 shadow-2xl bg-card/50 backdrop-blur-sm w-full flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                {/* Terminal-style Header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Terminal className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-mono text-muted-foreground">
                      contact-form.tsx
                    </span>
                  </div>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <span className="text-primary">const</span>{" "}
                              firstName
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John"
                                className="font-mono"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <span className="text-primary">const</span>{" "}
                              lastName
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                className="font-mono"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            <span className="text-primary">const</span> email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              className="font-mono"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-primary">const</span> subject
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Project Discussion"
                              className="font-mono"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-primary" />
                            <span className="text-primary">const</span> message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project..."
                              className="min-h-[140px] font-mono resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full gap-2 group"
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info - Unified Design */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="border-2 border-border/50 shadow-2xl bg-card/50 backdrop-blur-sm w-full flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                {/* Terminal-style Header */}
                <div className="flex items-center gap-2 mb-8 pb-4 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Terminal className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-mono text-muted-foreground">
                      contact-info.ts
                    </span>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="flex-1 space-y-8">
                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-red-500/5 via-transparent to-transparent border border-red-500/10 hover:border-red-500/30 transition-all duration-300 hover:shadow-md">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 bg-gradient-to-br from-red-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                      >
                        <Mail className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-primary font-mono text-sm">
                            const
                          </span>
                          <span className="text-foreground font-bold text-lg">
                            email
                          </span>
                          <span className="text-muted-foreground">=</span>
                        </div>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm break-all block group-hover:underline"
                        >
                          &quot;{contactInfo.email}&quot;
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/5 via-transparent to-transparent border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-md">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                      >
                        <Phone className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-primary font-mono text-sm">
                            const
                          </span>
                          <span className="text-foreground font-bold text-lg">
                            phone
                          </span>
                          <span className="text-muted-foreground">=</span>
                        </div>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm block group-hover:underline"
                        >
                          &quot;{contactInfo.phone}&quot;
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-500/5 via-transparent to-transparent border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-md">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 bg-gradient-to-br from-blue-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                      >
                        <MapPin className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-primary font-mono text-sm">
                            const
                          </span>
                          <span className="text-foreground font-bold text-lg">
                            location
                          </span>
                          <span className="text-muted-foreground">=</span>
                        </div>
                        <p className="text-muted-foreground font-mono text-sm">
                          &quot;{contactInfo.location}&quot;
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="pt-4 border-t border-border/50"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-primary font-mono text-sm">
                        const
                      </span>
                      <span className="text-foreground font-bold text-lg">
                        socialLinks
                      </span>
                      <span className="text-muted-foreground">=</span>
                      <span className="text-muted-foreground">[</span>
                    </div>
                    <div className="flex items-center gap-4 pl-4">
                      {[
                        {
                          name: "GitHub",
                          href: contactInfo.social.github,
                          icon: Github,
                          color:
                            "hover:bg-gray-900 hover:text-white hover:border-gray-900",
                        },
                        {
                          name: "LinkedIn",
                          href: contactInfo.social.linkedin,
                          icon: Linkedin,
                          color:
                            "hover:bg-blue-600 hover:text-white hover:border-blue-600",
                        },
                        {
                          name: "Twitter",
                          href: contactInfo.social.twitter,
                          icon: Twitter,
                          color:
                            "hover:bg-blue-400 hover:text-white hover:border-blue-400",
                        },
                      ].map((social) => {
                        const IconComponent = social.icon;
                        return (
                          <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center justify-center w-14 h-14 rounded-xl bg-background/80 backdrop-blur-sm border-2 border-border/50 text-muted-foreground transition-all duration-300 ${social.color} shadow-sm hover:shadow-lg`}
                            aria-label={`Visit my ${social.name}`}
                          >
                            <IconComponent className="w-6 h-6" />
                          </motion.a>
                        );
                      })}
                      <span className="text-muted-foreground ml-2">]</span>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
