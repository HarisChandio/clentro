const BRAND_COLOR = "#FF5F00";

interface CapabilityItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const capabilities: CapabilityItem[] = [
  {
    icon: "database",
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS architecture from MVP to enterprise scale. Multi-tenant systems, subscription billing, analytics dashboards, and robust API infrastructure.",
    features: [
      "Cloud-native architecture",
      "Subscription & billing integration",
      "Real-time dashboards",
      "Auto-scaling infrastructure",
    ],
  },
  {
    icon: "layers",
    title: "Full-Stack Web Engineering",
    description:
      "Modern web applications using React, Next.js, Node.js, and Python with scalable databases and APIs.",
    features: [
      "React & Next.js frontends",
      "Node.js & Python backends",
      "REST & GraphQL APIs",
      "Database optimization",
    ],
  },
  {
    icon: "cpu",
    title: "AI Development",
    description:
      "Building intelligent applications with cutting-edge AI technologies. RAG systems, AI agents, chatbots, and custom LLM integrations that deliver real business value.",
    features: [
      "RAG & knowledge systems",
      "AI agents & workflows",
      "Intelligent chatbots",
      "Custom LLM integrations",
    ],
  },
  {
    icon: "smartphone",
    title: "Mobile App Ecosystems",
    description:
      "High-quality mobile applications built with React Native, Flutter, and native iOS/Android stacks.",
    features: [
      "React Native & Flutter",
      "Native iOS & Android",
      "Push notifications",
      "Store deployment",
    ],
  },
];

const IconMap: Record<string, React.ReactElement> = {
  database: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeWidth="2" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" strokeWidth="2" />
    </svg>
  ),
  layers: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" />
      <path d="M2 12l10 5 10-5" strokeWidth="2" />
      <path d="M2 17l10 5 10-5" strokeWidth="2" />
    </svg>
  ),
  cpu: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
      <rect x="9" y="9" width="6" height="6" strokeWidth="2" />
    </svg>
  ),
  smartphone: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" />
    </svg>
  ),
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-gray-100 py-10 md:py-18">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: BRAND_COLOR, color: "#fff" }}
          >
            What We Do
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Core <span style={{ color: BRAND_COLOR }}>Capabilities</span>
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Full-spectrum engineering services to move your product faster.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 md:p-8 border border-orange-200"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg mb-5"
                style={{ backgroundColor: BRAND_COLOR, color: "#fff" }}
              >
                {IconMap[cap.icon]}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {cap.title}
              </h3>

              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                {cap.description}
              </p>

              <ul className="space-y-2">
                {cap.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-gray-700">
                    <span style={{ color: BRAND_COLOR }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
