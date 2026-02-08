"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    id: 1,
    category: "CONTENT PLATFORM",
    title: "Inknaija",
    subtitle: "Nigeria’s home for stories and ideas",
    description: "Shipped a production-ready AI SaaS platform enabling users to generate presentations, graphics, and documents from text prompts.",
    role: "Frontend Developer",
    skills: ["Next.js", "Django", "AI Integration"],
    image: "/assets/portfolio/inknaija.png",
    link: "https://inknaija.com",
  },
  {
    id: 2,
    category: "SaaS WEB DEVELOPMENT",
    title: "Advance Drivers Safety",
    subtitle: "Safety training & insights site",
    description: "Road-safety platform turning compliance into measurable risk reduction with training and incident tracking.",
    role: "Lead Frontend Developer",
    skills: ["React", "Next.js", "Vercel"],
    image: "/assets/portfolio/ads.png",
    link: "https://www.advancedriversafety.com/",
  },
  {
    id: 3,
    category: "E-COMMERCE WEBSITE",
    title: "Cre360 AI",
    subtitle: "Real estate lead capture.",
    description: "Engineered a high-performance e-commerce platform with responsive product catalogs and dynamic filtering.",
    role: "Full-Stack Developer",
    skills: ["GenAI", "LLMs", "Stripe"],
    image: "/assets/portfolio/cre.png",
    link: "https://cre-frontend-skpsm.ondigitalocean.app/",
  },
  {
    id: 4,
    category: "E-COMMERCE PLATFORM",
    title: "RevvAuto",
    subtitle: "Auto Savings Account for drivers",
    description: "Developed a modern e-commerce platform with AI-powered recommendations and advanced search.",
    role: "Frontend Developer",
    skills: ["Java", "Fintech", "Stripe"],
    image: "/assets/portfolio/revv.png",
    link: "https://revvautos.com",
  },
  // {
  //   id: 5,
  //   category: "TRAVEL & TOURISM",
  //   title: "Tourism Discovery",
  //   subtitle: "Travel booking and exploration",
  //   description: "Built an immersive tourism platform with interactive maps and real-time booking systems.",
  //   role: "Full-Stack Developer",
  //   skills: ["Next.js", "Google Maps API", "AWS"],
  //   image: "/assets/portfolio/tourism_site.jpg",
  // },
  // {
  //   id: 6,
  //   category: "CORPORATE PORTFOLIO",
  //   title: "Company Portfolio",
  //   subtitle: "Professional corporate presence",
  //   description: "Delivered a sophisticated portfolio website with buttery-smooth animations and responsive design.",
  //   role: "Lead Developer",
  //   skills: ["Next.js", "Framer Motion", "SEO"],
  //   image: "/assets/portfolio/company_portfolio.jpg",
  // },
  // {
  //   id: 7,
  //   category: "E-COMMERCE SOLUTION",
  //   title: "Multi-vendor Platform",
  //   subtitle: "Marketplace solution",
  //   description: "Architected a scalable multi-vendor marketplace with vendor dashboards and real-time inventory.",
  //   role: "Full-Stack Developer",
  //   skills: ["React", "Node.js", "Redis"],
  //   image: "/assets/portfolio/ecommerce_web.jpg",
  // },
  // {
  //   id: 8,
  //   category: "AI PLATFORM",
  //   title: "Sonnet AI",
  //   subtitle: "Next-generation AI solutions",
  //   description: "Engineered an AI platform leveraging Claude and GPT-4 for intelligent content generation.",
  //   role: "Full-Stack Developer",
  //   skills: ["React", "Python", "Vector DB"],
  //   image: "/assets/portfolio/SONNET-01.jpg",
  // },
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
    <section id="work" className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-linear-to-br from-orange-100 to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-linear-to-bl from-blue-50 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-black text-gray-900">
            MVPs built with{" "}
            <span style={{ color: BRAND_COLOR, fontStyle: "italic" }}>SPEED</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-semibold">
            Sneak peek of some client projects (more coming soon!)
          </p>
        </div>

        {/* Expanding Flex Grid (Horizontal Accordion) */}
        <div className="flex flex-col md:flex-row gap-4 h-[900px] md:h-[600px] w-full">
          {projects.slice(0, 5).map((project) => (
            <motion.div
              key={project.id}
              layout
              onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
              onMouseEnter={() => !isMobile && setHoveredId(project.id)}
              onMouseLeave={() => !isMobile && setHoveredId(null)}
              onViewportEnter={() => isMobile && setHoveredId(project.id)}
              viewport={{ amount: 0.6, margin: "0px 0px -20% 0px" }} // Trigger mainly when central
              className={`relative rounded-3xl overflow-hidden cursor-pointer bg-gray-100 transition-[flex] duration-500 ease-out ${activeId === project.id ? "flex-[40%] md:flex-[50%]" : "flex-[15%] md:flex-[12%]"
                }`}
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${activeId === project.id ? 'scale-100' : 'scale-150 grayscale-50'}`}
                />

                {/* Overlay Gradient - Stronger on non-active to dim them */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${activeId === project.id ? 'opacity-10' : 'opacity-30 hover:opacity-10'}`} />

                {/* Vertical Text for Inactive State (Desktop Only) */}
                {activeId !== project.id && (
                  <div className="absolute inset-0 hidden md:flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold tracking-widest uppercase -rotate-90 whitespace-nowrap opacity-100 drop-shadow-md">
                      {project.category.split(" ")[0]}
                    </h3>
                  </div>
                )}
              </div>

              {/* Active Content Overlay */}
              <div
                className={`absolute inset-0 p-8 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${activeId === project.id ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className="transform translate-y-0 transition-transform duration-500 delay-100">
                  <span className="inline-block px-3 py-1 bg-[#FF5F00] text-white text-xs font-bold rounded-full mb-3 shadow-lg">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-lg max-w-lg line-clamp-2 mb-6">
                    {project.subtitle}
                  </p>

                  <button className="flex items-center gap-3 text-white font-bold group w-fit">
                    <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#FF5F00] transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                    <span>View Project</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

