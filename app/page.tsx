import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Capabilities from "@/components/Capabilities";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import ShipFastMethodology from "@/components/ShipFastMethodology";
import { Contact } from "lucide-react";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      <div id="work">
        <Portfolio />
      </div>
      
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
    </div>
  );
}
            