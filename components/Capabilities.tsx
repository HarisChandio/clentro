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
    description: "End-to-end SaaS architecture from MVP to enterprise scale. Multi-tenant systems, subscription billing, analytics dashboards, and robust API infrastructure.",
    features: [
      "Cloud-native architecture (AWS, GCP, Azure)",
      "Subscription & billing integration (Stripe, Paddle)",
      "Real-time analytics & user dashboards",
      "Auto-scaling infrastructure & DevOps"
    ]
  },
  {
    icon: "layers",
    title: "Full-Stack Web Engineering",
    description: "Modern web applications built with cutting-edge frameworks. React, Next.js, Node.js, Python backends with PostgreSQL, MongoDB, and Redis.",
    features: [
      "React, Next.js, Vue.js frontend development",
      "Node.js, Python, Go backend systems",
      "RESTful & GraphQL API design",
      "Database architecture & optimization"
    ]
  },
  {
    icon: "cpu",
    title: "AI/ML Tool Integration",
    description: "Integrate state-of-the-art AI capabilities into your products. GPT-4, UX Pilot, custom ML models, vector databases, and intelligent automation.",
    features: [
      "UX Pilot AI, UX Pilot AI API integration",
      "Custom ML model training & deployment",
      "Vector databases (Pinecone, Weaviate)",
      "RAG systems & semantic search"
    ]
  },
  {
    icon: "smartphone",
    title: "Mobile App Ecosystems",
    description: "Native iOS and Android applications, cross-platform solutions with React Native and Flutter. App Store optimization and continuous deployment.",
    features: [
      "React Native & Flutter development",
      "Native iOS (Swift) & Android (Kotlin)",
      "Push notifications & real-time sync",
      "App Store & Play Store deployment"
    ]
  }
];

const IconMap: { [key: string]: React.ReactElement } = {
  database: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeWidth="2" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" strokeWidth="2" />
    </svg>
  ),
  layers: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5" strokeWidth="2" strokeLinejoin="round" />
      <path d="M2 12l10 5 10-5" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  cpu: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
      <rect x="9" y="9" width="6" height="6" strokeWidth="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" strokeWidth="2" />
    </svg>
  ),
  smartphone: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: BRAND_COLOR }}
          >
            WHAT WE DO
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mt-4 mb-6">
            Core Capabilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Full-spectrum engineering services designed to accelerate your product from concept to market.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: BRAND_COLOR, color: 'white' }}
              >
                {IconMap[capability.icon]}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {capability.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {capability.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg 
                      className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                      style={{ color: BRAND_COLOR }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
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
