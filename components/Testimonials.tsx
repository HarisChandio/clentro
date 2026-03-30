"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Quote, Star, ExternalLink } from "lucide-react";

const BRAND_COLOR = "#FF5F00";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  website?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Samson Babajide",
    role: "CEO",
    company: "Bavity LLC",
    content:
      "Working with Clentro was a game-changer for our business. They delivered our MVP in just 4 weeks, and the quality exceeded our expectations. Their AI-accelerated development approach is truly revolutionary.",
    website: "https://bavity.com",
    rating: 5,
  },
  // {
  //   id: 2,
  //   name: "",
  //   role: "",
  //   company: "E-commerce Solutions",
  //   content:
  //     "Excellent to work with. Haris went above and beyond with my requests, has expertice in the field and was available for adjustments at a moments notice. Will 100% work with him again and again in the future.",
  //   rating: 5,
  // },
  // {
  //   id: 3,
  //   name: "Emily Rodriguez",
  //   role: "Founder",
  //   company: "DesignHub",
  //   content:
  //     "Clentro transformed our vision into reality faster than we thought possible. Their expertise in Next.js and modern web technologies is evident in every pixel. Outstanding work!",
  //   rating: 5,
  // },
  {
    id: 4,
    name: "Tuoyo Omare",
    role: "Founder",
    company: "RevvAuto",
    content:"Haris and his team have been excellent every step of the way. From early planning and technical scoping to day-to-day communication and final execution, the process has been smooth, organized and transparent. Haris consistently demonstrates strong ability to translate complex ideas into clear technical solutions, while keeping timelines and priorities aligned. His team is responsive, detail-oriented, and proactive in raising questions or suggesting improvements rather than simply following instructions. Haris and his team are a great choice, I would highly recommend and look forward to continuing our work together.",
      
    website: "https://revvautos.com",
    rating: 5,
  },

  {
    id: 5,
    name: "Sunny ",
    role: "Founder and CEO",
    company: "Advance Driver Safety",
    content:
     "Excellent to work with. Haris went above and beyond with my requests, has expertice in the field and was available for adjustments at a moments notice. Will 100% work with him again and again in the future.",
    website: "https://www.advancedriversafety.com/",
    rating: 5,
  },
];

const CHAR_LIMIT = 200;

export default function Testimonials() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  
  const toggleExpand = (id: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

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
          className="pb-4!"
        >
          {testimonials.map((testimonial) => {
            const isExpanded = expandedCards.has(testimonial.id);
            const isLong = testimonial.content.length > CHAR_LIMIT;
            const displayContent = isExpanded || !isLong 
              ? testimonial.content 
              : testimonial.content.substring(0, CHAR_LIMIT) + "...";

            return (
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
                  <div className="grow mb-4">
                    <p className="text-gray-700 leading-relaxed">
                      "{displayContent}"
                    </p>
                    {isLong && (
                      <button
                        onClick={() => toggleExpand(testimonial.id)}
                        className="mt-2 text-sm font-medium hover:underline transition-colors w-full text-center"
                        style={{ color: BRAND_COLOR }}
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </button>
                    )}
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {testimonial.role} at {testimonial.company}
                    </div>
                    {testimonial.website && (
                      <a
                        href={testimonial.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium hover:underline transition-colors"
                        style={{ color: BRAND_COLOR }}
                      >
                        Visit website
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
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
