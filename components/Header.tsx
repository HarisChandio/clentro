"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const BRAND_COLOR = "#FF5F00";

export default function Header() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="container mx-auto px-6 py-6 sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between">
        {/* Logo Space - User will add logo */}
        <Link href="/" className="flex items-center">
          <p className="text-2xl font-bold" style={{ color: BRAND_COLOR }}>Clentro</p>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#capabilities" 
            onClick={(e) => handleSmoothScroll(e, 'capabilities')}
            className="text-sm font-medium text-gray-900 hover:text-[#FF5F00] transition-colors cursor-pointer"
          >
            CAPABILITIES
          </a>
          <a 
            href="#process"
            onClick={(e) => handleSmoothScroll(e, 'process')}
            className="text-sm font-medium text-gray-900 hover:text-[#FF5F00] transition-colors cursor-pointer"
          >
            PROCESS
          </a>
          <a 
            href="#work" 
            onClick={(e) => handleSmoothScroll(e, 'work')}
            className="text-sm font-medium text-gray-900 hover:text-[#FF5F00] transition-colors cursor-pointer"
          >
            WORK
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="text-sm font-medium text-gray-900 hover:text-[#FF5F00] transition-colors cursor-pointer"
          >
            ABOUT
          </a>
        </nav>

        {/* CTA Button */}
        <Link href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>
          <Button 
            className="rounded-full px-8 font-semibold text-sm"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            START PROJECT
          </Button>
        </Link>
      </div>
    </header>
  );
}
