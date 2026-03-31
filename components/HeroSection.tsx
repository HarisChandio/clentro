"use client";

import { Button } from "@/components/ui/button";
import { CountUp } from "./StatsCount";

const BRAND_COLOR = "#FF5F00";

export default function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="relative py-8 h-full md:min-h-screen w-full overflow-hidden"
      aria-label="Hero section"
    >
      {/* Video Background - Hidden on mobile */}
      <div
        className="absolute inset-0 w-full h-full hidden md:block"
        aria-hidden="true"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover will-change-auto"
          aria-label="Background video showcasing fast development"
          style={{ transform: "translateZ(0)" }}
        >
          <source src="/assets/video_2.mp4" type="video/mp4" />
        </video>
        {/* Overlay to make content more readable */}
        <div className="absolute inset-0"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-0 md:px-6 py-8 md:py-16 min-h-screen flex items-center">
        <div className="max-w-3xl w-full">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 p-6 md:pl-0 md:pr-12 rounded-2xl backdrop-blur-sm text-center md:text-left">
            {/* Badge */}
            <div className="inline-block">
              <span
                className="text-[10px] md:text-xs font-bold tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-full"
                style={{ backgroundColor: BRAND_COLOR, color: "white" }}
              >
                HIGH-VELOCITY ENGINEERING
              </span>
            </div>

            {/* Main Headline */}
            <hgroup className="space-y-1 md:space-y-2">
              <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none text-gray-900">
                Build. Ship{" "}
                <span
                  className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none italic"
                  style={{ color: BRAND_COLOR }}
                >
                  FAST.
                </span>
              </h1>
            </hgroup>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Have an idea or a vibe-coded product you want live—fast? We’re
              engineers equipped with the best AI tools, turning early concepts
              into production-ready software for SaaS and AI startups.
            </p>

            {/* CTA Buttons */}
            <nav
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 md:gap-4"
              aria-label="Primary actions"
            >
              <Button
                size="lg"
                onClick={() => handleScrollToSection("contact")}
                className="rounded-lg px-4 md:px-8 text-xs md:text-base font-semibold group cursor-pointer"
                style={{ backgroundColor: BRAND_COLOR }}
                aria-label="Start your project - Contact us"
              >
                START YOUR PROJECT
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScrollToSection("capabilities")}
                className="rounded-lg px-4 md:px-8 text-xs md:text-base font-semibold border-2 border-[#FF5F00] text-black hover:bg-[#FF5F00] hover:text-white group cursor-pointer"
                aria-label="View our capabilities and services"
              >
                VIEW CAPABILITIES
              </Button>
            </nav>

            {/* Desktop Stats */}
            <div
              className="hidden md:grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 md:pt-8 text-center"
              role="region"
              aria-label="Company statistics"
            >
              {/* Stat 1 */}
              <div className="flex flex-col items-center">
                <div
                  className="text-4xl md:text-5xl font-extrabold leading-none"
                  style={{ color: BRAND_COLOR }}
                  aria-label="5 plus products delivered in less than 100 days"
                >
                  <CountUp end={5} suffix="+" />
                </div>

                <div className="mt-1 text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                  Products in &lt; 100 Days
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center">
                <div
                  className="text-4xl md:text-5xl font-extrabold leading-none"
                  style={{ color: BRAND_COLOR }}
                  aria-label="45 days average delivery time"
                >
                  <CountUp end={45} suffix="D" />
                </div>

                <div className="mt-1 text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                  Avg. Delivery
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center">
                <div
                  className="text-4xl md:text-5xl font-extrabold leading-none"
                  style={{ color: BRAND_COLOR }}
                  aria-label="100 percent client satisfaction rate"
                >
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="mt-1 text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>
            </div>

            {/* Tablet + Mobile Stats */}
            <div
              className="md:hidden flex flex-col justify-center items-center gap-6 w-full mt-10"
              role="region"
              aria-label="Company statistics"
            >
              <div className="flex flex-row justify-between items-center gap-6 w-full">
                {/* Stat 1 */}
                <div className="flex flex-col justify-center items-center w-[50%]">
                  <div
                    className="text-4xl sm:text-5xl font-extrabold leading-none"
                    style={{ color: BRAND_COLOR }}
                    aria-label="5 plus products delivered in less than 100 days"
                  >
                    <CountUp end={5} suffix="+" />
                  </div>

                  <div className="mt-1 text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                    Products in &lt; 100 Days
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center w-[50%]">
                  <div
                    className="text-4xl sm:text-5xl font-extrabold leading-none"
                    style={{ color: BRAND_COLOR }}
                    aria-label="45 days average delivery time"
                  >
                    <CountUp end={45} suffix="D" />
                  </div>

                  <div className="mt-1 text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                    Avg. Delivery
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center">
                <div
                  className="text-4xl sm:text-5xl font-extrabold leading-none"
                  style={{ color: BRAND_COLOR }}
                  aria-label="100 percent client satisfaction rate"
                >
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="mt-1 text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
