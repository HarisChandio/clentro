"use client";
import Link from "next/link";
import blog1 from "@/public/assets/blogHero.png";

export default function BlogSection() {
  const blog = {
    slug: "saas-development-services-build-ship-fast",
    title: "SaaS Development Services That Help You Build & Ship Faster",
    description: "Learn how Clentro helps startups build and scale SaaS products quickly without compromising quality.",
    image: blog1.src, 
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center sm:text-5xl font-bold text-gray-900 mb-16">
          Practical reads to help <br /> you move <span className="italic text-orange-600">faster.</span>
        </h2>

        <Link
          href={`/blog/${blog.slug}`}
          className="block bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer max-w-md mx-auto"
        >
          <div className="relative h-56 overflow-hidden bg-gray-200">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{blog.title}</h3>
            <p className="text-gray-600 text-sm">{blog.description}</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
