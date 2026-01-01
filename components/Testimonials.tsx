"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Quote, Star } from "lucide-react";

const BRAND_COLOR = "#FF5F00";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    content:
      "Working with Clentro was a game-changer for our business. They delivered our MVP in just 4 weeks, and the quality exceeded our expectations. Their AI-accelerated development approach is truly revolutionary.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "E-commerce Solutions",
    content:
      "The team's ability to ship fast without compromising quality is impressive. They built our entire e-commerce platform with seamless integrations and beautiful UI. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "DesignHub",
    content:
      "Clentro transformed our vision into reality faster than we thought possible. Their expertise in Next.js and modern web technologies is evident in every pixel. Outstanding work!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO",
    company: "FinTech Innovations",
    content:
      "Professional, fast, and reliable. They delivered a complex SaaS platform with AI integration that our users love. The attention to detail and performance optimization was top-notch.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Marketing Director",
    company: "Global Retail Co",
    content:
      "From concept to launch in record time! The Clentro team understood our needs perfectly and delivered a stunning website that's driving real business results. Couldn't be happier!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-4">
            What our <span style={{ color: BRAND_COLOR }}>clients say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from the clients who trusted
            us to bring their ideas to life
          </p>
        </div>

        {/* Testimonials Swiper */}
        <Swiper
          modules={[Autoplay]}
          speed={2000}
          spaceBetween={32}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile: 1 card
            768: { slidesPerView: 2 }, // Tablets: 2 cards
            1024: { slidesPerView: 3 }, // Desktop: 3 cards
          }}
          className="!pb-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote
                    className="w-10 h-10 opacity-20"
                    style={{ color: BRAND_COLOR }}
                  />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: BRAND_COLOR }}
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to join our satisfied clients?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
