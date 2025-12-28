"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
    description: "Shipped a production-ready AI SaaS platform enabling users to generate presentations, graphics, and documents from text prompts. Leveraged Next.js and Tailwind CSS to build a blazing-fast, pixel-perfect UI with smooth animations and optimized performance. Utilized AI-accelerated development workflows to deliver reusable components and clean architecture in record time.",
    role: "Frontend Developer",
    skills: ["Next.js", "Tailwind CSS", "AI Integration", "SaaS Architecture", "Performance Optimization"],
    image: "/assets/portfolio/visme_co.jpg",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    category: "SaaS WEB DEVELOPMENT",
    title: "Alokai AI - Composable commerce made simple",
    subtitle: "Modern e-commerce platform",
    description: "Built a headless commerce platform for modern retailers using high-velocity development practices. Architected scalable frontend with React and Next.js, integrated multiple backend services via GraphQL APIs, and deployed with CI/CD pipelines for continuous iteration. Delivered MVP to market in 4 weeks.",
    role: "Lead Frontend Developer",
    skills: ["React", "Next.js", "GraphQL", "Headless Architecture", "CI/CD"],
    image: "/assets/portfolio/alokai_saas.jpg",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    id: 3,
    category: "E-COMMERCE WEBSITE",
    title: "Ashley Furniture - Stylish home furnishings",
    subtitle: "Premium furniture e-commerce",
    description: "Engineered a high-performance e-commerce platform with responsive product catalogs, dynamic filtering, and seamless Stripe checkout. Built on Next.js with server-side rendering for blazing-fast page loads and SEO optimization. Integrated Shopify backend for real-time inventory sync.",
    role: "Full-Stack Developer",
    skills: ["Next.js", "Shopify", "Stripe Integration", "SSR", "E-commerce"],
    image: "/assets/portfolio/ecommerce_website.jpg",
    gradient: "from-orange-400 to-amber-500"
  },
  {
    id: 4,
    category: "E-COMMERCE PLATFORM",
    title: "Modern Shopping Experience",
    subtitle: "Next-gen retail platform",
    description: "Developed a modern e-commerce platform with AI-powered recommendations, advanced search filtering, and frictionless checkout. Leveraged TypeScript and React for type-safe, maintainable code. Optimized performance with code-splitting and lazy loading to achieve sub-2s page loads.",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "AI Recommendations", "Stripe", "Web Performance"],
    image: "/assets/portfolio/shopping_site.jpg",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    category: "TRAVEL & TOURISM",
    title: "Tourism Discovery Platform",
    subtitle: "Travel booking and exploration",
    description: "Built an immersive tourism platform with interactive maps, real-time booking systems, and rich media galleries. Integrated Google Maps API, payment gateways, and AWS infrastructure for auto-scaling. Deployed with MongoDB for flexible data modeling and rapid iteration.",
    role: "Full-Stack Developer",
    skills: ["Next.js", "Google Maps API", "AWS", "MongoDB", "Real-time Systems"],
    image: "/assets/portfolio/tourism_site.jpg",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: 6,
    category: "CORPORATE PORTFOLIO",
    title: "Company Portfolio Website",
    subtitle: "Professional corporate presence",
    description: "Delivered a sophisticated portfolio website with buttery-smooth animations, responsive design, and SEO optimization. Built with Next.js and Framer Motion for fluid interactions. Integrated headless CMS for easy content updates and deployed on Vercel for edge performance.",
    role: "Lead Developer",
    skills: ["Next.js", "Framer Motion", "SEO", "Headless CMS", "Vercel"],
    image: "/assets/portfolio/company_portfolio.jpg",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    id: 7,
    category: "E-COMMERCE SOLUTION",
    title: "Multi-vendor E-commerce Platform",
    subtitle: "Marketplace solution",
    description: "Architected a scalable multi-vendor marketplace with vendor dashboards, real-time inventory management, and automated order processing. Built microservices architecture with Node.js, PostgreSQL, and Redis for high-performance caching. Shipped production-ready in 8 weeks.",
    role: "Full-Stack Developer",
    skills: ["React", "Node.js", "PostgreSQL", "Redis", "Microservices"],
    image: "/assets/portfolio/ecommerce_web.jpg",
    gradient: "from-rose-500 to-red-600"
  },
  {
    id: 8,
    category: "AI PLATFORM",
    title: "Sonnet AI Platform",
    subtitle: "Next-generation AI solutions",
    description: "Engineered an AI platform leveraging Claude and GPT-4 for intelligent content generation and workflow automation. Built intuitive React frontend with Python FastAPI backend. Integrated vector databases for semantic search and deployed on cloud infrastructure with auto-scaling.",
    role: "Full-Stack Developer",
    skills: ["React", "Python", "Claude API", "FastAPI", "Vector Databases"],
    image: "/assets/portfolio/SONNET-01.jpg",
    gradient: "from-violet-500 to-indigo-600"
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const cardWidth = 380 + 24; // card width + gap

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we've scrolled through all projects
      if (scrollPosition >= cardWidth * projects.length) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(autoScroll, 30); // Update every 30ms for smooth animation

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="work" className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            MVPs build at lightning speed
          </h2>
          
        </div>

        {/* Horizontal Scrolling Portfolio */}
        <div ref={scrollContainerRef} className="overflow-x-auto pb-8 scrollbar-hide">
          <div className="flex gap-6 w-max">
            {[...projects, ...projects].map((project, index) => (
              <div 
                key={`${project.id}-${index}`} 
                className="w-[380px] cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Category Tag */}
                  <div className="text-center mb-4">
                    <span 
                      className="text-xs font-bold tracking-wider"
                      style={{ color: BRAND_COLOR }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Project Preview */}
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
                    className="text-lg font-bold leading-tight"
                    style={{ color: BRAND_COLOR }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-white/75   z-50 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div className="min-h-screen flex items-center justify-center p-4 md:p-6">
            <div 
              className="max-w-7xl w-full bg-white rounded-2xl overflow-hidden relative my-8"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-1 right-1 md:-top-2 md:-right-1 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-gray-900 z-20 hover:opacity-80 transition-opacity"
             
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Details */}
              <div className="text-white p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8 order-2 md:order-1">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 pr-8" style={{ color: BRAND_COLOR }}>
                    {selectedProject.title}
                  </h2>
                  <span 
                    className="text-xs font-bold tracking-wider px-3 py-1.5 rounded-full inline-block"
                    style={{ backgroundColor: BRAND_COLOR, color: 'white' }}
                  >
                    {selectedProject.category}
                  </span>
                </div>

                <div>
                  <h3 
                    className="text-xs md:text-sm font-bold tracking-wider mb-3"
                    style={{ color: BRAND_COLOR }}
                  >
                    PROJECT DESCRIPTION
                  </h3>
                  <p className="text-black text-base md:text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h3 
                    className="text-xs md:text-sm font-bold tracking-wider mb-3"
                    style={{ color: BRAND_COLOR }}
                  >
                    SKILLS & DELIVERABLES
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold text-white"
                        style={{ backgroundColor: BRAND_COLOR }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* <Button
                  className="w-full md:w-auto rounded-full px-6 md:px-8 py-2.5 md:py-3 font-bold text-sm md:text-base hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: BRAND_COLOR }}
                >
                  Copy link
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                </Button> */}
              </div>

              {/* Right Side - Preview */}
              <div className="p-8 order-1 md:order-2">
                <div className="relative rounded-xl overflow-hidden h-64 md:h-full md:min-h-[500px] border-2 md:border-4 border-gray-900" >
                  <Image 
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
