import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Capabilities from "@/components/Capabilities";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      <Portfolio />
      <Capabilities />
    </div>
  );
}
            