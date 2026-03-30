"use client";
import { motion, Variants } from "framer-motion";
import { Search, Palette, Code2, Rocket } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useCallback, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BRAND_COLOR = "#FF5F00";

export default function ShipFastMethodology() {
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

  const phases = [
    {
      number: "01",
      icon: Search,
      title: "Discovery Sprint",
      description:
        "Deep-dive workshops to map business, user flows, and technical architecture. Laser focus on scope, timeline, and success metrics. All in 48 hours.",
      deliverables: [
        "Technical specification document",
        "User story mapping",
        "Architecture diagrams",
        "Sprint planning roadmap",
      ],
    },
    {
      number: "02",
      icon: Palette,
      title: "Rapid Prototyping",
      description:
        "Interactive prototypes and design systems built in parallel with backend scaffolding. Validate UX and gather feedback before full development.",
      deliverables: [
        "High-fidelity Figma prototypes",
        "Design system & component library",
        "API endpoint",
        "JWT + OAuth",
        "Database schema design",
      ],
    },
    {
      number: "03",
      icon: Code2,
      title: "Agile Development",
      description:
        "2-week sprints with continuous integration and deployment. Daily standups, weekly demos, and transparent progress tracking via Jira or Linear.",
      deliverables: [
        "Production-ready code",
        "Automated test suites",
        "CI/CD pipeline setup",
        "Weekly demo deployments",
      ],
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Scale",
      description:
        "Staged rollout with monitoring, analytics, and performance optimization. Post-launch support and iterative improvements based on real user data.",
      deliverables: [
        "Production deployment",
        "Monitoring & alerting setup",
        "Documentation & handoff",
        "30-day post-launch support",
      ],
    },
  ];

  const metrics = [
    {
      value: "2-4",
      label: "Week Sprints",
      description: "Rapid iteration cycles with continuous feedback",
    },
    {
      value: "24/7",
      label: "Communication",
      description: "Slack integration and real-time project updates",
    },
    {
      value: "100%",
      label: "Transparency",
      description: "Full access to code repos and project boards",
    },
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      {/* Phases */}
      <div className="mb-12 sm:mb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center lg:text-left mb-8 sm:mb-6 lg:mb-0 sm:col-span-2"
          >
            <span
              className="text-xs font-bold tracking-wider px-4 py-2 rounded-full inline-block mb-4 sm:mb-6"
              style={{ backgroundColor: BRAND_COLOR, color: "white" }}
            >
              HOW WE WORK
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-wrap text-gray-900 mb-2 sm:mb-3">
              Ship Fast <span style={{ color: BRAND_COLOR }}>Methodology</span>
            </h2>

            <p className="mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
              Our battle-tested process eliminates bottlenecks and accelerates
              time-to-market without compromising quality.
            </p>
          </motion.div>

          {/* <div className="flex gap-4 justify-center md:hidden mb-6">
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

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="hidden md:block bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-gray-300 transition-all relative overflow-hidden"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl shrink-0"
                  style={{
                    backgroundColor: `${BRAND_COLOR}18`,
                    color: BRAND_COLOR,
                  }}
                >
                  <phase.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
                <h3
                  className="absolute top-0 right-2 sm:right-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black select-none pointer-events-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: `2px ${BRAND_COLOR}`,
                    opacity: 0.6,
                  }}
                >
                  {phase.number}
                </h3>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 pr-16 sm:pr-20">
                {phase.title}
              </h4>

              <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {phase.description}
              </p>

              <div>
                <span
                  className="text-xs font-bold tracking-wider mb-2 sm:mb-3 block"
                  style={{ color: BRAND_COLOR }}
                >
                  DELIVERABLES
                </span>
                <ul className="space-y-1.5 sm:space-y-2">
                  {phase.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-gray-700 flex items-start"
                    >
                      <span className="mr-2 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <div className="block md:hidden w-full col-span-2 relative pb-10">
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".shipfast-pagination",
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
              }}
            >
              {phases.map((phase, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-gray-300 transition-all relative overflow-hidden"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <span
                        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl shrink-0"
                        style={{
                          backgroundColor: `${BRAND_COLOR}18`,
                          color: BRAND_COLOR,
                        }}
                      >
                        <phase.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </span>
                      <h3
                        className="absolute top-0 right-2 sm:right-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black select-none pointer-events-none"
                        style={{
                          color: "transparent",
                          WebkitTextStroke: `2px ${BRAND_COLOR}`,
                          opacity: 0.6,
                        }}
                      >
                        {phase.number}
                      </h3>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 pr-16 sm:pr-20">
                      {phase.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {phase.description}
                    </p>

                    <div>
                      <span
                        className="text-xs font-bold tracking-wider mb-2 sm:mb-3 block"
                        style={{ color: BRAND_COLOR }}
                      >
                        DELIVERABLES
                      </span>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {phase.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-gray-700 flex items-start"
                          >
                            <span className="mr-2 shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swiper will render pagination bullets into this element */}
            <div className="shipfast-pagination w-full flex justify-center items-center pt-10" />
          </div>
        </motion.div>
      </div>

      {/* Desktop Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        {metrics.map((metric, index) => (
          <motion.div key={index} variants={fadeUp} className="text-center">
            <div
              className="text-6xl font-black mb-2"
              style={{ color: BRAND_COLOR }}
            >
              {metric.value}
            </div>
            <div className="text-xl font-bold text-gray-900 mb-2">
              {metric.label}
            </div>
            <p className="text-sm text-gray-600">{metric.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
