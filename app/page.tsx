import About from "@/components/About";
import BlogSection from "@/components/Blog";
import Capabilities from "@/components/Capabilities";
import ContactSection from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import RecentProjects from "@/components/RecentProjects";
import ShipFastMethodology from "@/components/ShipFastMethodology";
import Testimonials from "@/components/Reviews";

const BRAND_COLOR = "#FF5F00";
export const metadata = {
  title: "Clentro - Build. Ship. Fast.",
  description: "High-velocity engineering for SaaS and AI startups.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <div id="work">
        {/* <Portfolio /> */}
        <RecentProjects/>
      </div>

      <Testimonials />

      <div id="process">
        <ShipFastMethodology />
      </div>

      <div id="capabilities">
        <Capabilities />
      </div>
      <div id="blogs">
        <BlogSection />
      </div>
      <About />

      <div id="contact">
        <ContactSection />
        
      </div>
      {/* Floating Email Button */}
      <a
        href="mailto:contact@clentro.io"
        className="fixed bottom-8 right-8 z-50 group"
        title="Email us"
      >
        <div className="relative">
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            <svg
              className="w-7 h-7 md:w-9 md:h-9 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
              contact@clentro.io
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
