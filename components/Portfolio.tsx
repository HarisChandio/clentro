"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

const BRAND_COLOR = "#FF5F00";

interface Project {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  skills: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 5,
    category: "YOUR BUSINESS ANALYST",
    title: "BlackGrid",
    subtitle: "AI Business Analyst and Financial Insights for SMBs",
    description:
      "Developed a SaaS platform with AI-powered business analysis and financial insights.",
    role: "Full-Stack Developer",
    skills: ["Next.js", "AI", "Stripe", "Plaid", "Quick Book"],
    image: "/assets/portfolio/blackgrid.png",
    link: "http://getblackgrid.com/",
  },

  {
    id: 2,
    category: "AI SaaS PLATFORM",
    title: "Advance Drivers Safety ",
    subtitle: "AI to train drivers for safety and reduce road accidents",
    description:
      "Road-safety platform turning compliance into measurable risk reduction with training and incident tracking.",
    role: "Lead Frontend Developer",
    skills: ["React", "Next.js", "Vercel"],
    image: "/assets/portfolio/ads.png",
    link: "https://www.advancedriversafety.com/",
  },
  {
    id: 3,
    category: "REAL ESTATE Insights",
    title: "CRE360 AI",
    subtitle: "AI Assistance to make better real estate decisions",
    description:
      "Engineered a high-performance e-commerce platform with responsive product catalogs and dynamic filtering.",
    role: "Full-Stack Developer",
    skills: ["GenAI", "LLMs", "Stripe"],
    image: "/assets/portfolio/cre.png",
    link: "https://cre-frontend-skpsm.ondigitalocean.app/",
  },
  {
    id: 4,
    category: "FINTECH SOLUTION",
    title: "RevvAuto",
    subtitle: "Auto Savings Account for drivers",
    description:
      "Developed a modern e-commerce platform with AI-powered recommendations and advanced search.",
    role: "Frontend Developer",
    skills: ["Java", "Fintech", "Stripe"],
    image: "/assets/portfolio/revv.png",
    link: "https://revvautos.com",
  },
  {
    id: 1,
    category: "AI CONTENT PLATFORM",
    title: "Inknaija",
    subtitle: "Nigeria’s home for stories and ideas",
    description:
      "Shipped a production-ready AI SaaS platform enabling users to generate presentations, graphics, and documents from text prompts.",
    role: "Frontend Developer",
    skills: ["Next.js", "Django", "AI Integration"],
    image: "/assets/portfolio/inknaija.png",
    link: "https://inknaija.com",
  },
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Set first project as default active for mobile view or initial load aesthetics
  const activeId = hoveredId || projects[0].id;

  return (
    <section
      id="work"
      className="bg-white py-20 md:py-32 relative"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-linear-to-br from-orange-100 to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-linear-to-bl from-blue-50 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-black text-gray-900">
            MVPs built with{" "}
            <span style={{ color: BRAND_COLOR, fontStyle: "italic" }}>
              SPEED
            </span>
          </h2>
        </div>

        {/* tablet and mobile Expanding Flex Grid (Horizontal Accordion) */}
        <div className="relative flex flex-col lg:hidden gap-4 min-h-screen w-full">
          {projects.slice(0, 5).map((project, index) => (
            <div
              key={project.id}
              onClick={() =>
                window.open(project.link, "_blank", "noopener,noreferrer")
              }
              style={{ top: 80 + index * 30 }}
              className={`rounded-3xl overflow-hidden cursor-pointer bg-gray-100 transition-[flex] duration-500 ease-out h-[500px] w-full sticky z-10 border border-[#FF5F00]/20`}
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-700 scale-100`}
                />

                {/* Overlay Gradient - Stronger on non-active to dim them */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 opacity-5 hover:opacity-10`}
                />

                {/* Vertical Text for Inactive State (Desktop Only) */}
                {/* {activeId !== project.id && (
                  <div className="absolute inset-0 hidden md:flex items-center justify-center">
                    <h3 className="text-[#FF5F00] text-2xl font-bold tracking-widest uppercase -rotate-90 whitespace-nowrap opacity-100 drop-shadow-md">
                      {project.category}
                    </h3>
                  </div>
                )} */}
              </div>

              {/* Active Content Overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 md:p-8 flex flex-col justify-end  transition-opacity duration-300 opacity-100`}
              >
                <div className="transform translate-y-0 transition-transform duration-500 delay-100">
                  <h3 className="text-3xl font-bold text-[#FF5F00] mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-900 text-sm md:text-lg max-w-lg line-clamp-1 sm:line-clamp-2 mb-6">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* desktop Expanding Flex Grid (Horizontal Accordion) */}
        <div className="hidden lg:flex lg:flex-row gap-4 h-[900px] lg:h-[600px] w-full scroll-smooth">
          {projects.slice(0, 5).map((project) => (
            <motion.div
              key={project.id}
              layout
              onClick={() =>
                window.open(project.link, "_blank", "noopener,noreferrer")
              }
              onMouseEnter={() => !isMobile && setHoveredId(project.id)}
              onMouseLeave={() => !isMobile && setHoveredId(null)}
              onViewportEnter={() => isMobile && setHoveredId(project.id)}
              viewport={{ amount: 0.6, margin: "0px 0px -20% 0px" }} // Trigger mainly when central
              className={`relative rounded-3xl overflow-hidden cursor-pointer bg-gray-100 transition-[flex] duration-500 ease-out scroll-smooth ${
                activeId === project.id
                  ? "flex-[40%] lg:flex-[50%]"
                  : "flex-[15%] lg:flex-[12%]"
              }`}
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${activeId === project.id ? "scale-100" : "scale-150 grayscale-50"}`}
                />

                {/* Overlay Gradient - Stronger on non-active to dim them */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${activeId === project.id ? "opacity-0" : "opacity-5 hover:opacity-10"}`}
                />

                {/* Vertical Text for Inactive State (Desktop Only) */}
                {/* {activeId !== project.id && (
                  <div className="absolute inset-0 hidden md:flex items-center justify-center">
                    <h3 className="text-[#FF5F00] text-2xl font-bold tracking-widest uppercase -rotate-90 whitespace-nowrap opacity-100 drop-shadow-md">
                      {project.category}
                    </h3>
                  </div>
                )} */}
              </div>

              {/* Active Content Overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 md:p-8 flex flex-col justify-end  transition-opacity duration-300 ${
                  activeId === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="transform translate-y-0 transition-transform duration-500 delay-100">
                  <h3 className="lg:text-3xl xl:text-5xl font-bold text-[#FF5F00] mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-900 text-sm md:text-lg max-w-lg line-clamp-1 sm:line-clamp-2 mb-6">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
