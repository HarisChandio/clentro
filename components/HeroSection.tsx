import { Button } from "@/components/ui/button";

const BRAND_COLOR = "#FF5F00";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background - Hidden on mobile */}
      <div className="absolute inset-0 w-full h-full hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/website_loop_animation.mp4" type="video/mp4" />
        </video>
        {/* Overlay to make content more readable */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 py-8 md:py-16 min-h-screen flex items-center">
        <div className="max-w-3xl">
          {/* Content */}
          <div className="space-y-8  md:bg-none p-8 md:p-12 rounded-2xl backdrop-blur-sm">
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
            Custom software solutions engineered for the AI era. We leverage AI-powered tools like Cursor and Claude to transform complex ideas into production-ready products at unprecedented speed.
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
        </div>
      </div>
    </section>
  );
}
