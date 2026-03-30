"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import blog1 from "@/public/assets/saas.jpeg";
import blog2 from "@/public/assets/ai.jpeg";
import blog3 from "@/public/assets/mobile.jpeg";
import blog4 from "@/public/assets/data.jpeg";
import blog5 from "@/public/assets/aiagent.jpg";
import blog6 from "@/public/assets/intelligent-application.jpeg";
import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BRAND_COLOR = "#FF5F00";

export default function BlogSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  const blogs = [
    {
      slug: "saas-development-services-build-ship-fast",
      href: "/blog/saas-development-services-build-ship-fast",
      title: "SaaS Development Services That Help You Build & Ship Faster",
      description:
        "Learn how Clentro helps startups build and scale SaaS products quickly without compromising quality.",
      image: blog1.src,
    },
    {
      slug: "ai-development-services-intelligent-applications",
      href: "/blog/ai-development-services-intelligent-applications",
      title: "AI Development Team Building Intelligent Digital Solutions",
      description:
        "Building AI-powered dashboards, automation tools, and intelligent systems that drive smarter decisions.",
      image: blog2.src,
    },
    {
      slug: "custom-mobile-app-development",
      href: "/blog/custom-mobile-app-development",
      title: "Custom Mobile App Development",
      description:
        "Explore how AI Development Services can transform your business with intelligent applications. Learn how Clentro builds innovative AI solutions to drive growth.",
      image: blog3.src,
    },
    {
      slug: "modern-data-platform-architecture",
      href: "/blog/modern-data-platform-architecture",
      title: "Modern Data Platform Architecture",
      description:
        "Learn how a modern data platform architecture solves data quality and integrations, and adopts an API‑first cloud‑native design to deliver AI‑ready insights",
      image: blog4.src,
    },
    {
      slug: "autonomous-ai-agents",
      href: "/blog/autonomous-ai-agents",
      title: "Autonomous AI Agents",
      description:
        "Explore how AI Development Services can transform your business with intelligent applications. Learn how Clentro builds innovative AI solutions to drive growth.",
      image: blog5.src,
    },
    {
      slug: "intelligent-application-development",
      href: "/blog/intelligent-application-development",
      title:
        "Intelligent Application Development for Scalable SaaS, AI & Mobile Products | Clentro",
      description:
        "Build scalable SaaS, AI, and mobile applications with Clentro’s intelligent application development services. High-velocity engineering, autonomous AI systems, and cloud-native architecture.",
      alt: "Intelligent Application Development by Clentro for scalable SaaS platforms, AI automation, mobile app development, and cloud-native architecture.",
      image: blog6.src,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl text-center max-w-xl mb-16 mx-auto font-extrabold text-gray-900">
          Practical reads to help you move{" "}
          <span
            style={{ color: BRAND_COLOR }}
            className="italic text-orange-600"
          >
            faster.
          </span>
        </h2>
        <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link key={blog.slug} href={blog.href} className="block group">
              <motion.article
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.18)",
                }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer h-full flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <motion.img
                    src={blog.image}
                    alt={blog?.alt ? blog.alt : blog.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {blog.description}
                  </p>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        {/* Swiper - shown below lg */}
        <div className="md:hidden relative pb-10">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".blog-pagination",
            }}
            spaceBetween={24}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1.2,
              },
              880: {
                slidesPerView: 2.2,
              },
            }}
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={blog.slug}>
                <Link href={blog.href} className="block group">
                  <motion.article
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="bg-white rounded-xl overflow-hidden cursor-pointer h-full flex flex-col border border-[#FF5F00]/20"
                  >
                    <div className="relative h-56 overflow-hidden bg-gray-200">
                      <motion.img
                        src={blog.image}
                        alt={blog?.alt ? blog.alt : blog.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <div className="p-6 flex flex-col grow">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {blog.description}
                      </p>
                    </div>
                  </motion.article>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper will render pagination bullets into this element */}
          <div className="blog-pagination w-full flex justify-center items-center pt-10" />
        </div>
      </div>
    </section>
  );
}
