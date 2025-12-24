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
    description: "An AI SaaS platform that enables users to create presentations, graphics, documents, and interactive content from simple text prompts. As Frontend Developer I translated that capability into an engaging user experience, built a pixel-perfect UI with Next.js, and Tailwind CSS, ensuring responsive design, smooth animations, and optimized performance. Integrated reusable components and clean code architecture to deliver a fast, scalable, and user-friendly interface aligned with modern SaaS development standards.",
    role: "Frontend Developer",
    skills: ["Tailwind CSS", "Next.js", "SaaS Development", "SaaS", "Full-Stack Development"],
    image: "/assets/portfolio/visme_co.jpg",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    category: "SaaS WEB DEVELOPMENT",
    title: "Alokai AI - Composable commerce made simple",
    subtitle: "Modern e-commerce platform",
    description: "A composable commerce platform built for modern retailers. Led the development of the frontend architecture using React and Next.js, implementing a headless commerce solution that integrates seamlessly with various backend services.",
    role: "Lead Frontend Developer",
    skills: ["React", "Next.js", "E-commerce", "Headless CMS", "API Integration"],
    image: "/assets/portfolio/alokai_saas.jpg",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    id: 3,
    category: "E-COMMERCE WEBSITE",
    title: "Ashley Furniture - Stylish home furnishings",
    subtitle: "Premium furniture e-commerce",
    description: "A comprehensive e-commerce platform for a leading furniture retailer. Developed responsive product catalogs, shopping cart functionality, and seamless checkout experience using modern web technologies.",
    role: "Full-Stack Developer",
    skills: ["Next.js", "Shopify", "React", "E-commerce", "Payment Integration"],
    image: "/assets/portfolio/ecommerce_website.jpg",
    gradient: "from-orange-400 to-amber-500"
  },
  {
    id: 4,
    category: "E-COMMERCE PLATFORM",
    title: "Modern Shopping Experience",
    subtitle: "Next-gen retail platform",
    description: "Built a modern e-commerce platform with advanced filtering, personalized recommendations, and seamless checkout flow. Focused on performance optimization and user experience.",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "Redux", "Stripe", "Performance Optimization"],
    image: "/assets/portfolio/shopping_site.jpg",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    category: "TRAVEL & TOURISM",
    title: "Tourism Discovery Platform",
    subtitle: "Travel booking and exploration",
    description: "Created an immersive tourism platform with interactive maps, booking systems, and rich media galleries. Integrated with multiple APIs for real-time availability and pricing.",
    role: "Full-Stack Developer",
    skills: ["Next.js", "Google Maps API", "Payment Gateway", "AWS", "MongoDB"],
    image: "/assets/portfolio/tourism_site.jpg",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: 6,
    category: "CORPORATE PORTFOLIO",
    title: "Company Portfolio Website",
    subtitle: "Professional corporate presence",
    description: "Designed and developed a sophisticated portfolio website showcasing company projects, team, and capabilities. Focus on clean design, smooth animations, and SEO optimization.",
    role: "Lead Developer",
    skills: ["Next.js", "Framer Motion", "SEO", "CMS Integration", "Analytics"],
    image: "/assets/portfolio/company_portfolio.jpg",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    id: 7,
    category: "E-COMMERCE SOLUTION",
    title: "Multi-vendor E-commerce Platform",
    subtitle: "Marketplace solution",
    description: "Developed a comprehensive multi-vendor marketplace with vendor dashboards, inventory management, and automated order processing. Built for scalability and performance.",
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
    description: "Built an advanced AI platform leveraging cutting-edge language models for content generation and automation. Focused on intuitive UX and powerful backend capabilities.",
    role: "Full-Stack Developer",
    skills: ["React", "Python", "OpenAI API", "FastAPI", "Docker"],
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
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="max-w-7xl w-full grid md:grid-cols-2 gap-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Side - Details */}
            <div className="text-white space-y-6 overflow-y-auto max-h-[80vh] pr-4">
              <div>
                <h2 className="text-4xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-gray-400 text-sm">My role. <span className="text-white">{selectedProject.role}</span></p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-2">Project description.</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-3">Skills and deliverables</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-800 rounded-full text-sm text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                className="rounded-full px-6 font-semibold"
                style={{ backgroundColor: BRAND_COLOR }}
              >
                Copy link
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </Button>
            </div>

            {/* Right Side - Preview */}
            <div className="bg-white rounded-2xl p-8 overflow-hidden">
              <div className="text-center mb-6">
                {/* <span 
                  className="text-lg font-bold tracking-wider"
                  style={{ color: BRAND_COLOR }}
                >
                  {selectedProject.category}
                </span> */}
              </div>
              <div className="relative rounded-xl overflow-hidden min-h-[500px]">
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
      )}
    </section>
  );
}
