"use client";
import { motion } from "framer-motion";
const BRAND_COLOR = "#FF5F00";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useCallback, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface CapabilityItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const capabilities: CapabilityItem[] = [
  {
    icon: "database",
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS architecture from MVP to enterprise scale. Multi-tenant systems, subscription billing, analytics dashboards, and robust API infrastructure.",
    features: [
      "Cloud-native architecture",
      "Subscription & billing integration",
      "Real-time dashboards",
      "Auto-scaling infrastructure",
    ],
  },
  {
    icon: "layers",
    title: "Full-Stack Web Engineering",
    description:
      "Modern web applications using React, Next.js, Node.js, and Python with scalable databases and APIs.",
    features: [
      "React & Next.js frontends",
      "Node.js & Python backends",
      "REST & GraphQL APIs",
      "Database optimization",
    ],
  },
  {
    icon: "cpu",
    title: "AI Development",
    description:
      "Building intelligent applications with cutting-edge AI technologies. RAG systems, AI agents, chatbots, and custom LLM integrations that deliver real business value.",
    features: [
      "RAG & knowledge systems",
      "AI agents & workflows",
      "Intelligent chatbots",
      "Custom LLM integrations",
    ],
  },
  {
    icon: "smartphone",
    title: "Mobile App Ecosystems",
    description:
      "High-quality mobile applications built with React Native, Flutter, and native iOS/Android stacks.",
    features: [
      "React Native & Flutter",
      "Native iOS & Android",
      "Push notifications",
      "Store deployment",
    ],
  },
];

const IconMap: Record<string, React.ReactElement> = {
  database: (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeWidth="2" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" strokeWidth="2" />
    </svg>
  ),
  layers: (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" />
      <path d="M2 12l10 5 10-5" strokeWidth="2" />
      <path d="M2 17l10 5 10-5" strokeWidth="2" />
    </svg>
  ),
  cpu: (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
      <rect x="9" y="9" width="6" height="6" strokeWidth="2" />
    </svg>
  ),
  smartphone: (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" />
    </svg>
  ),
};

export default function Capabilities() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const updateNavState = useCallback((swiper: SwiperType) => {
    setIsPrevDisabled(swiper.isBeginning);
    setIsNextDisabled(swiper.isEnd);
  }, []);

  const handlePrev = useCallback(() => {
    if (swiperRef.current && !swiperRef.current.isBeginning) {
      swiperRef.current.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (swiperRef.current && !swiperRef.current.isEnd) {
      swiperRef.current.slideNext();
    }
  }, []);

  return (
    <motion.section
      id="capabilities"
      className="bg-gray-100 py-10 md:py-18"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-6 lg:mb-14"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
        >
          {/* <span
            className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: BRAND_COLOR, color: "#fff" }}
          >
            What We Do
          </span> */}

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Core <span style={{ color: BRAND_COLOR }}>Capabilities</span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Full-spectrum engineering services to move your product faster.
          </p>
        </motion.div>

        {/* <div className="flex gap-4 justify-center lg:hidden mb-6">
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
              isPrevDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                : "bg-[#FF5F00] text-white cursor-pointer hover:scale-110 hover:shadow-primary/30"
            }`}
            aria-label="Previous services"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
              isNextDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                : "bg-[#FF5F00] text-white cursor-pointer hover:scale-110 hover:shadow-primary/30"
            }`}
            aria-label="Next services"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div> */}

        {/* Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              className={`bg-white rounded-xl p-6 md:p-8 border border-orange-200 ${i === 0 || i === 3 ? "col-span-1 lg:col-span-2" : "col-span-1"}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg mb-5"
                style={{ backgroundColor: BRAND_COLOR, color: "#fff" }}
              >
                {IconMap[cap.icon]}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {cap.title}
              </h3>

              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                {cap.description}
              </p>

              <ul className="space-y-2">
                {cap.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-gray-700">
                    <span style={{ color: BRAND_COLOR }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Swiper - shown below lg */}
        <div className="lg:hidden relative pb-10">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".capabilities-pagination",
            }}
            spaceBetween={24}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavState(swiper);
            }}
            onSlideChange={(swiper) => updateNavState(swiper)}
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
            {capabilities.map((cap, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className={`bg-white rounded-xl p-6 md:p-8 border border-orange-200`}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  }}
                  whileHover={{ y: -4 }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-lg mb-5"
                    style={{ backgroundColor: BRAND_COLOR, color: "#fff" }}
                  >
                    {IconMap[cap.icon]}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    {cap.description}
                  </p>

                  <ul className="space-y-2">
                    {cap.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm text-gray-700"
                      >
                        <span style={{ color: BRAND_COLOR }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper will render pagination bullets into this element */}
          <div className="capabilities-pagination w-full flex justify-center items-center pt-10" />
        </div>
      </div>
    </motion.section>
  );
}
