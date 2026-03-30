import SCP from "@/public/assets/portfolio/Body-1.jpg";
import SCP2 from "@/public/assets/portfolio/Body-2.jpg";
import CGS from "@/public/assets/portfolio/Body-3.jpg";
import Inknaija from "@/public/assets/portfolio/Body.jpg";

const projects = [
  {
    category: "Analytics App",
    categoryColor: "text-green-600",
    title: "Ink Naija",
    description:
      "Enterprise analytics platform with real-time data visualization, predictive ML models, and automated reporting. Built for 10K+ daily active users with seamless scalability.",
    stats: [
      { label: "Delivery Time", value: "30D" },
      { label: "Active Users", value: "100K+" },
      { label: "Uptime", value: "99.9%" },
    ],
    stacks: ["React", "Python", "TensorFlow", "AWS", "PostgreSQL"],

    bgColor: "bg-green-600/20",
    image: Inknaija.src,
  },
  {
    category: "Mobile App",
    categoryColor: "text-yellow-500",
    title: "Social Commerce Platform",
    description:
      "Cross-platform mobile marketplace with AI recommendations, native iOS/Android support, and integrated payment processing. React Native app with 4.8⭐ rating across iOS and Android.",
    stats: [
      { label: "Delivery Time", value: "45D" },
      { label: "App Rating", value: "4.8⭐" },
      { label: "Downloads", value: "50K+" },
    ],
    stacks: ["React Native", "Node js", "Firebase", "Stripe"],
    bgColor: "bg-yellow-500/20",
    image: SCP.src,
  },
  {
    category: "AI Platform",
    categoryColor: "text-blue-500",
    title: "Content Generation Suite",
    description:
      "GPT-4 powered content creation platform with brand voice training, SEO optimization, and multi-format output. Producing high-quality copy with 95% satisfaction.",
    stats: [
      { label: "Build Time", value: "21D" },
      { label: "Interactions", value: "1M+" },
      { label: "Satisfaction", value: "95%" },
    ],
    stacks: ["Next.js", "UX Pilot AI", "Pinecone", "Vercel"],

    bgColor: "bg-blue-500/20",
    image: SCP2.src,
  },
  {
    category: "AI Platform",
    categoryColor: "text-stone-700",
    title: "Social Commerce Platform",
    description:
      "GPT-4 powered content creation platform with brand voice training, SEO optimization, and multi-format output. Producing high-quality copy with 95% satisfaction.",
    stats: [
      { label: "Build Time", value: "21D" },
      { label: "Interactions", value: "1M+" },
      { label: "Satisfaction", value: "95%" },
    ],
    stacks: ["React js", "Node js", "Firebase", "Stripe"],

    bgColor: "bg-stone-500/20",
    image: CGS.src,
  },
];

const RecentProjects = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-orange-500 mb-6">PORTFOLIO</p>
          <h2 className="text-3xl md:text-6xl font-black text-gray-900">
            Recent Projects
          </h2>
          <p className="mt-2 text-gray-600">
            Real-world products built with our Ship Fast methodology. From MVP
            to enterprise scale.
          </p>
        </div>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 p-6 md:p-12">
                <span
                  className={`text-xs font-semibold uppercase rounded-full px-2 py-1 ${project.bgColor}  ${project.categoryColor}`}
                >
                  {project.category}
                </span>
                <h3 className="text-xl font-bold md:text-3xl md:font-extrabold mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="text-xs md:text-base text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stacks.map((stack, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-200 text-gray-800"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-between text-sm text-gray-700">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col  items-center">
                      <strong
                        className={`${project.categoryColor} text-xl font-extrabold`}
                      >
                        {stat.value}
                      </strong>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`order-first md:order-2 md:w-1/2 ${project.bgColor} flex items-center justify-center`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
