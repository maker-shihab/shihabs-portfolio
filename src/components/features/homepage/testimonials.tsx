"use client";

import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data";
import { fadeIn } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Quote,
  Star,
  Terminal,
  Verified,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Testimonials() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (swiper) {
      const handleSlideChange = () => {
        // Handle loop mode - get real index
        const realIndex = swiper.realIndex ?? swiper.activeIndex;
        setActiveIndex(realIndex);
      };

      swiper.on("slideChange", handleSlideChange);

      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, [swiper]);

  return (
    <section
      id="testimonials"
      className="pt-16 lg:pt-20 bg-background relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[32px_32px] opacity-50" />

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
            <span>Client Reviews</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me and the results we achieved
            together.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Custom Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.button
              ref={prevButtonRef}
              onClick={() => swiper?.slidePrev()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm border-2 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Slide Indicator */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">
                <span className="text-primary">{activeIndex + 1}</span> /{" "}
                {testimonials.length}
              </span>
            </div>

            <motion.button
              ref={nextButtonRef}
              onClick={() => swiper?.slideNext()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm border-2 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          <Swiper
            onSwiper={setSwiper}
            onInit={(swiper) => {
              if (prevButtonRef.current && nextButtonRef.current) {
                swiper.navigation.prevEl = prevButtonRef.current;
                swiper.navigation.nextEl = nextButtonRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            modules={[Autoplay, Navigation, Pagination]}
            grabCursor={true}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
            }}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="testimonials-swiper !pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full border-2 border-border/50 bg-card shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden w-full">
                    {/* Subtle Gradient Border Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-red-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 rounded-lg -z-10" />

                    <CardContent className="p-6 relative z-10">
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                          >
                            <Star
                              className={`w-4 h-4 ${
                                i < testimonial.rating
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-gray-300 dark:text-gray-700"
                              }`}
                            />
                          </motion.div>
                        ))}
                        {testimonial.verified && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="ml-2 flex items-center gap-1"
                          >
                            <Verified className="w-4 h-4 text-green-500" />
                            <span className="text-xs text-green-500 font-mono">
                              verified
                            </span>
                          </motion.div>
                        )}
                      </div>

                      {/* Content */}
                      <blockquote className="text-muted-foreground mb-6 leading-relaxed relative">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10" />
                        <p className="relative z-10 pl-6 italic">
                          &quot;{testimonial.content}&quot;
                        </p>
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg flex-shrink-0"
                        >
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-purple-500/20 to-blue-500/20" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-foreground">
                              {testimonial.name}
                            </span>
                            {testimonial.verified && (
                              <Verified className="w-4 h-4 text-green-500 flex-shrink-0" />
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground font-mono">
                            <span className="text-primary">const</span>{" "}
                            <span className="text-foreground">position</span> ={" "}
                            &quot;{testimonial.position}&quot;
                          </div>
                          <div className="text-xs text-muted-foreground font-mono mt-1">
                            @ {testimonial.company}
                          </div>
                          {testimonial.project && (
                            <div className="text-xs text-primary font-mono mt-1">
                              project: &quot;{testimonial.project}&quot;
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Date Badge */}
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10">
                          <Code className="w-3 h-3 text-primary" />
                          <span className="text-xs font-mono text-muted-foreground">
                            date: &quot;{testimonial.date}&quot;
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
