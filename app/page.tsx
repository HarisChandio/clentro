import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Capabilities from "@/components/Capabilities";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ShipFastMethodology from "@/components/ShipFastMethodology";
import { Contact } from "lucide-react";
import ContactPage from "./contact/page";
import Footer from "@/components/Footer";

const BRAND_COLOR = "#FF5F00";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      <div id="work">
        <Portfolio />
      </div>
      
      <Testimonials />
      
      <div id="process">
        <ShipFastMethodology />
      </div>
      
      <div id="capabilities">
        <Capabilities />
      </div>
      
      <About />

      <div id="contact">
        <ContactPage />
      </div>
<Footer />
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
            <svg className="w-7 h-7 md:w-9 md:h-9 text-white" fill="currentColor" viewBox="0 0 20 20">
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
            