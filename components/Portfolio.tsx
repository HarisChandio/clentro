"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Dialog, DialogClose, DialogContent, DialogOverlay } from "./ui/dialog";
import { X } from "lucide-react";

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
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: "AI SaaS PLATFORM",
    title: "Visme AI - Generate complete designs",
    subtitle: "AI-powered design platform",
    description:
      "Shipped a production-ready AI SaaS platform enabling users to generate presentations, graphics, and documents from text prompts. Leveraged Next.js and Tailwind CSS to build a blazing-fast, pixel-perfect UI with smooth animations and optimized performance. Utilized AI-accelerated development workflows to deliver reusable components and clean architecture in record time.",
    role: "Frontend Developer",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "AI Integration",
      "SaaS Architecture",
      "Performance Optimization",
    ],
    image: "/assets/portfolio/visme_co.jpg",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    category: "SaaS WEB DEVELOPMENT",
    title: "Alokai AI - Composable commerce made simple",
    subtitle: "Modern e-commerce platform",
    description:
      "Built a headless commerce platform for modern retailers using high-velocity development practices. Architected scalable frontend with React and Next.js, integrated multiple backend services via GraphQL APIs, and deployed with CI/CD pipelines for continuous iteration. Delivered MVP to market in 4 weeks.",
    role: "Lead Frontend Developer",
    skills: ["React", "Next.js", "GraphQL", "Headless Architecture", "CI/CD"],
    image: "/assets/portfolio/alokai_saas.jpg",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: 3,
    category: "E-COMMERCE WEBSITE",
    title: "Ashley Furniture - Stylish home furnishings",
    subtitle: "Premium furniture e-commerce",
    description:
      "Engineered a high-performance e-commerce platform with responsive product catalogs, dynamic filtering, and seamless Stripe checkout. Built on Next.js with server-side rendering for blazing-fast page loads and SEO optimization. Integrated Shopify backend for real-time inventory sync.",
    role: "Full-Stack Developer",
    skills: ["Next.js", "Shopify", "Stripe Integration", "SSR", "E-commerce"],
    image: "/assets/portfolio/ecommerce_website.jpg",
    gradient: "from-orange-400 to-amber-500",
  },
  {
    id: 4,
    category: "E-COMMERCE PLATFORM",
    title: "Modern Shopping Experience",
    subtitle: "Next-gen retail platform",
    description:
      "Developed a modern e-commerce platform with AI-powered recommendations, advanced search filtering, and frictionless checkout. Leveraged TypeScript and React for type-safe, maintainable code. Optimized performance with code-splitting and lazy loading to achieve sub-2s page loads.",
    role: "Frontend Developer",
    skills: [
      "React",
      "TypeScript",
      "AI Recommendations",
      "Stripe",
      "Web Performance",
    ],
    image: "/assets/portfolio/shopping_site.jpg",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    category: "TRAVEL & TOURISM",
    title: "Tourism Discovery Platform",
    subtitle: "Travel booking and exploration",
    description:
      "Built an immersive tourism platform with interactive maps, real-time booking systems, and rich media galleries. Integrated Google Maps API, payment gateways, and AWS infrastructure for auto-scaling. Deployed with MongoDB for flexible data modeling and rapid iteration.",
    role: "Full-Stack Developer",
    skills: [
      "Next.js",
      "Google Maps API",
      "AWS",
      "MongoDB",
      "Real-time Systems",
    ],
    image: "/assets/portfolio/tourism_site.jpg",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 6,
    category: "CORPORATE PORTFOLIO",
    title: "Company Portfolio Website",
    subtitle: "Professional corporate presence",
    description:
      "Delivered a sophisticated portfolio website with buttery-smooth animations, responsive design, and SEO optimization. Built with Next.js and Framer Motion for fluid interactions. Integrated headless CMS for easy content updates and deployed on Vercel for edge performance.",
    role: "Lead Developer",
    skills: ["Next.js", "Framer Motion", "SEO", "Headless CMS", "Vercel"],
    image: "/assets/portfolio/company_portfolio.jpg",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: 7,
    category: "E-COMMERCE SOLUTION",
    title: "Multi-vendor E-commerce Platform",
    subtitle: "Marketplace solution",
    description:
      "Architected a scalable multi-vendor marketplace with vendor dashboards, real-time inventory management, and automated order processing. Built microservices architecture with Node.js, PostgreSQL, and Redis for high-performance caching. Shipped production-ready in 8 weeks.",
    role: "Full-Stack Developer",
    skills: ["React", "Node.js", "PostgreSQL", "Redis", "Microservices"],
    image: "/assets/portfolio/ecommerce_web.jpg",
    gradient: "from-rose-500 to-red-600",
  },
  {
    id: 8,
    category: "AI PLATFORM",
    title: "Sonnet AI Platform",
    subtitle: "Next-generation AI solutions",
    description:
      "Engineered an AI platform leveraging Claude and GPT-4 for intelligent content generation and workflow automation. Built intuitive React frontend with Python FastAPI backend. Integrated vector databases for semantic search and deployed on cloud infrastructure with auto-scaling.",
    role: "Full-Stack Developer",
    skills: ["React", "Python", "Claude API", "FastAPI", "Vector Databases"],
    image: "/assets/portfolio/SONNET-01.jpg",
    gradient: "from-violet-500 to-indigo-600",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="bg-gray-50 py-10 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl md:text-6xl text-center font-black text-gray-900 mb-12">
          MVPs built at{" "}
          <span style={{ color: BRAND_COLOR }}>lightning speed</span>
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          speed={1500}
          spaceBetween={24}
          autoplay={{ delay: 800, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile: 1 card
            640: { slidesPerView: 1 }, // Small tablets: 1 card
            768: { slidesPerView: 2 }, // Tablets: 2 cards
            1024: { slidesPerView: 3 }, // Desktop: 3 cards
            1280: { slidesPerView: 4 }, // Large Desktop: 4 cards
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                className="cursor-pointer hover:scale-105 transition-transform duration-300 my-2"
                onClick={() => setSelectedProject(project)}
              >
                {/* Category */}
                {/* <div className="text-center mb-4">
                  <span className="text-xs font-bold tracking-wider" style={{ color: BRAND_COLOR }}>
                    {project.category}
                  </span>
                </div> */}

                {/* Project Image */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Title */}
                <h3
                  className="text-sm text-center font-semibold leading-tight"
                  style={{ color: BRAND_COLOR }}
                >
                  {project.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Project Modal */}
      {/* {selectedProject && ( */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogOverlay className="bg-white/70 backdrop-blur-sm" />

        {selectedProject && (
          <DialogContent className="min-w-[85vw] max-h-[90vh] w-full p-0 rounded-2xl overflow-y-auto">
            {/* Close Button */}
            <DialogClose className="absolute right-4 top-4 z-20 rounded-full p-2 hover:bg-black/5 transition">
              {/* <X className="h-5 w-5 text-black" /> */}
            </DialogClose>

            <div className="grid md:grid-cols-2">
              {/* Left – Content */}
              <div className="p-6 md:p-10 space-y-6 order-2 md:order-1">
                <div className="space-y-2">
                  <h2
                    className="text-2xl md:text-4xl font-bold"
                    style={{ color: BRAND_COLOR }}
                  >
                    {selectedProject.title}
                  </h2>

                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: BRAND_COLOR }}
                  >
                    {selectedProject.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3
                    className="text-xs font-bold tracking-widest"
                    style={{ color: BRAND_COLOR }}
                  >
                    PROJECT DESCRIPTION
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3
                    className="text-xs font-bold tracking-widest"
                    style={{ color: BRAND_COLOR }}
                  >
                    SKILLS & DELIVERABLES
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-xs font-semibold rounded-full text-white"
                        style={{ backgroundColor: BRAND_COLOR }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right – Image */}
              <div className="order-1 md:order-2 p-6 ">
                <div className="relative h-64 md:h-full  rounded-xl overflow-hidden border border-black/10">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain lg:object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
