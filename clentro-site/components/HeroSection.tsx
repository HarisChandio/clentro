import { Button } from "@/components/ui/button";

const BRAND_COLOR = "#FF5F00";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-8 md:py-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span 
              className="text-xs font-bold tracking-wider px-4 py-2 rounded-full"
              style={{ backgroundColor: BRAND_COLOR, color: 'white' }}
            >
              HIGH-VELOCITY ENGINEERING
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-7xl md:text-8xl font-black leading-none text-gray-900">
              Build. Ship
            </h1>
            
            <h1 
              className="text-7xl md:text-8xl font-black leading-none"
              style={{ color: BRAND_COLOR }}
            >
              Fast.
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Custom software solutions engineered for the AI era. We transform complex ideas into production-ready products at unprecedented speed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="rounded-full px-8 font-semibold group"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              START YOUR PROJECT
              <svg 
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 font-semibold border-2 border-gray-900 text-gray-900 hover:bg-gray-50"
            >
              VIEW CAPABILITIES
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div 
                className="text-4xl font-bold mb-1"
                style={{ color: BRAND_COLOR }}
              >
                50+
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Projects Shipped
              </div>
            </div>
            <div>
              <div 
                className="text-4xl font-bold mb-1"
                style={{ color: BRAND_COLOR }}
              >
                30D
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Avg. Delivery
              </div>
            </div>
            <div>
              <div 
                className="text-4xl font-bold mb-1"
                style={{ color: BRAND_COLOR }}
              >
                100%
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - 3D Wireframe */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <svg 
              viewBox="0 0 400 300" 
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(255, 95, 0, 0.1))' }}
            >
              {/* Create a wireframe grid pattern */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path 
                    d="M 20 0 L 0 0 0 20" 
                    fill="none" 
                    stroke={BRAND_COLOR} 
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              
              {/* Perspective plane */}
              <g transform="translate(200, 150) rotate(-15) skewY(15)">
                <rect 
                  x="-150" 
                  y="-100" 
                  width="300" 
                  height="200" 
                  fill="url(#grid)" 
                  stroke={BRAND_COLOR} 
                  strokeWidth="2"
                />
                {/* Diagonal lines for depth */}
                <line x1="-150" y1="-100" x2="150" y2="100" stroke={BRAND_COLOR} strokeWidth="0.5" />
                <line x1="150" y1="-100" x2="-150" y2="100" stroke={BRAND_COLOR} strokeWidth="0.5" />
                {/* Additional detail lines */}
                {Array.from({ length: 15 }).map((_, i) => (
                  <line 
                    key={`h-${i}`}
                    x1="-150" 
                    y1={-100 + i * 15} 
                    x2="150" 
                    y2={-100 + i * 15} 
                    stroke={BRAND_COLOR} 
                    strokeWidth="0.5"
                  />
                ))}
                {Array.from({ length: 20 }).map((_, i) => (
                  <line 
                    key={`v-${i}`}
                    x1={-150 + i * 15} 
                    y1="-100" 
                    x2={-150 + i * 15} 
                    y2="100" 
                    stroke={BRAND_COLOR} 
                    strokeWidth="0.5"
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
