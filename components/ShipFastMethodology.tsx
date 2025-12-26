const BRAND_COLOR = "#FF5F00";

export default function ShipFastMethodology() {
  const phases = [
    {
      number: "01",
      title: "Discovery Sprint",
      description: "Deep-dive workshops to map business, user flows, and technical architecture. Laser focus on scope, timeline, and success metrics. All in 48 hours.",
      deliverables: [
        "Technical specification document",
        "User story mapping",
        "Architecture diagrams",
        "Sprint planning roadmap"
      ]
    },
    {
      number: "02",
      title: "Rapid Prototyping",
      description: "Interactive prototypes and design systems built in parallel with backend scaffolding. Validate UX and gather feedback before full development.",
      deliverables: [
        "High-fidelity Figma prototypes",
        "Design system & component library",
        "API endpoint",
        "JWT + OAuth",
        "Database schema design"
      ]
    },
    {
      number: "03",
      title: "Agile Development",
      description: "2-week sprints with continuous integration and deployment. Daily standups, weekly demos, and transparent progress tracking via Jira or Linear.",
      deliverables: [
        "Production-ready code",
        "Automated test suites",
        "CI/CD pipeline setup",
        "Weekly demo deployments"
      ]
    },
    {
      number: "04",
      title: "Launch & Scale",
      description: "Staged rollout with monitoring, analytics, and performance optimization. Post-launch support and iterative improvements based on real user data.",
      deliverables: [
        "Production deployment",
        "Monitoring & alerting setup",
        "Documentation & handoff",
        "30-day post-launch support"
      ]
    }
  ];

  const metrics = [
    {
      value: "2-4",
      label: "Week Sprints",
      description: "Rapid iteration cycles with continuous feedback"
    },
    {
      value: "24/7",
      label: "Communication",
      description: "Slack integration and real-time project updates"
    },
    {
      value: "100%",
      label: "Transparency",
      description: "Full access to code repos and project boards"
    }
  ];

  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <span 
          className="text-xs font-bold tracking-wider px-4 py-2 rounded-full inline-block mb-6"
          style={{ backgroundColor: BRAND_COLOR, color: 'white' }}
        >
          HOW WE WORK
        </span>
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
          Ship Fast Methodology
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our battle-tested process eliminates bottlenecks and accelerates time-to-market without compromising quality.
        </p>
      </div>

      {/* Phases Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {phases.map((phase, index) => (
          <div 
            key={index}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all"
          >
            <h3 
              className="text-5xl font-black mb-4"
              style={{ color: BRAND_COLOR }}
            >
              {phase.number}
            </h3>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {phase.title}
            </h4>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {phase.description}
            </p>
            
            <div>
              <span 
                className="text-xs font-bold tracking-wider mb-3 block"
                style={{ color: BRAND_COLOR }}
              >
                DELIVERABLES
              </span>
              <ul className="space-y-2">
                {phase.deliverables.map((item, idx) => (
                  <li key={idx} className="text-xs text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div 
              className="text-6xl font-black mb-2"
              style={{ color: BRAND_COLOR }}
            >
              {metric.value}
            </div>
            <div className="text-xl font-bold text-gray-900 mb-2">
              {metric.label}
            </div>
            <p className="text-sm text-gray-600">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
