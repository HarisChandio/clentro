"use client";
import Link from "next/link";
import blog1 from "@/public/assets/blogHero.png";
import blog2 from "@/public/assets/blog2.png";
import blog3 from "@/public/assets/blog3.png";
import blog4 from "@/public/assets/blog4.jpg";
import blog5 from "@/public/assets/blog5.jpg";

const BRAND_COLOR = "#FF5F00";

export default function BlogSection() {
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
      href: "/ai-development-services-intelligent-applications",
      title: "AI Development Team Building Intelligent Digital Solutions",
      description:
        "Building AI-powered dashboards, automation tools, and intelligent systems that drive smarter decisions.",
      image: blog2.src,
    },
    {
      slug: "custom-mobile-app-development",
      href: "/custom-mobile-app-development",
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
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl text-center max-w-xl mb-16 mx-auto font-extrabold text-gray-900">
          Practical reads to help you move{" "}
          <span
            style={{ color: BRAND_COLOR }}
            className="italic text-orange-600"
          >
            faster.
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={blog.href}
              className="block bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
