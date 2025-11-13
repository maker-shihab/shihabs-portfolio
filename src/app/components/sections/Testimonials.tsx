"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Réza Ganjavi",
    feedback: "Maker Shihab is a very competent...",
    img: "/img/clients/reza-ganjavi.png",
  },
  {
    name: "Faizan Yasin",
    feedback: "Had done wonderful job delivered...",
    img: "/img/clients/faizan-yasin.jpeg",
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="...">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <Card className="bg-white-color dark:bg-primary-color-light p-6">
              <CardContent>
                <Image
                  src={item.img}
                  alt={item.name}
                  className="max-w-120px..."
                  width={100}
                  height={100}
                />
                <p className="... mb-30px">{item.feedback}</p>
                <h4 className="text-lg mb-2">{item.name}</h4>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
