// BlogSection.tsx
import { ArrowUpRight } from 'lucide-react';

const blogs = [
  {
    title: "Leveraging Technology to Streamline Team Workflows",
    description: "Discover actionable strategies to optimize your workflow with cutting-edge tech tools, reducing bottlenecks and boosting productivity across your organization.",
    image: "/assets/tech.jpg",
    author: "Joel Keneley",
    readTime: "5 Min Read",
    category: "Strategy",
  },
  {
    title: "AI-Powered Insights for Smarter Project Management",
    description: "Learn how artificial intelligence can transform your project planning, automate repetitive tasks, and provide predictive analytics for better decision-making.",
    image: "/assets/ai.jpg",
    author: "Sarah Devis",
    readTime: "8 Min Read",
    category: "Operations",
  },
  {
    title: "Ensuring Security & Compliance in Modern Workspaces",
    description: "Understand the best practices for safeguarding data, managing risks, and maintaining compliance in today's digitally-driven business environments.",
    image: "/assets/security.jpg",
    author: "Micheal Smith",
    readTime: "10 Min Read",
    category: "Workflow",
  },
   {
    title: "Ensuring Security & Compliance in Modern Workspaces",
    description: "Understand the best practices for safeguarding data, managing risks, and maintaining compliance in today's digitally-driven business environments.",
    image: "/assets/security.jpg",
    author: "Micheal Smith",
    readTime: "10 Min Read",
    category: "Workflow",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 ">
      
          <h2 className="text-4xl text-center sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Practical reads to help <br /> you move <span className="italic text-orange-600">faster.</span>
          </h2>
          {/* <p className=" text-center text-gray-600  text-base">
            Explore our blog for in-depth articles on technology, AI, and security practices. Gain practical tips, expert insights, and strategies to elevate your project management journey.
          </p> */}
        </div>

        {/* Featured Article */}
        <div className="mb-4 bg-gray-50 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0   ">
            <div className="relative h-80 md:h-auto">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-4 py-2 rounded-full mb-4">
                  {blogs[0].category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {blogs[0].title}
                </h3>
                <p className="text-gray-600 text-base mb-6">
                  {blogs[0].description}
                </p>
              </div>
              {/* <div className="flex items-center justify-between text-gray-500 text-sm">
                <span className="font-medium">by {blogs[0].author}</span>
                <span className="font-semibold">{blogs[0].readTime}</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Grid Articles */}
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(1).map((blog, index) => (
            <article
              key={index}
              className="bg-white backdrop-blur-2xl shadow-md  rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="inline-block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    {blog.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {blog.description}
                  </p>
                </div>

                {/* Footer */}
                {/* <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">By</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {blog.author}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Read Time</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {blog.readTime}
                    </p>
                  </div>
                  <button className="ml-4 p-2 rounded-full bg-gray-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </button>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}