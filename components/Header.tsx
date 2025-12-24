import { Button } from "@/components/ui/button";

const BRAND_COLOR = "#FF5F00";

export default function Header() {
  return (
    <header className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        {/* Logo Space - User will add logo */}
        <div className="flex items-center">
          <div className="w-40 h-12 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 text-sm">
            Logo Here
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#capabilities" className="text-sm font-medium text-gray-900 hover:text-[#FF5F00] transition-colors">
            CAPABILITIES
          </a>
          <a href="#process" className="text-sm font-medium text-gray-900 hover:text-[#FF5F00] transition-colors">
            PROCESS
          </a>
          <a href="#work" className="text-sm font-medium text-gray-900 hover:text-[#FF5F00] transition-colors">
            WORK
          </a>
          <a href="#about" className="text-sm font-medium text-gray-900 hover:text-[#FF5F00] transition-colors">
            ABOUT
          </a>
        </nav>

        {/* CTA Button */}
        <Button 
          className="rounded-full px-8 font-semibold text-sm"
          style={{ backgroundColor: BRAND_COLOR }}
        >
          START PROJECT
        </Button>
      </div>
    </header>
  );
}
