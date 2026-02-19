"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Clentro from "@/public/assets/logo/clentro png-15.png"
import { usePathname, useRouter } from "next/navigation";

const BRAND_COLOR = "#FF5F00";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleSmoothScroll = (
  //   e: React.MouseEvent<HTMLAnchorElement>,
  //   targetId: string
  // ) => {
  //   e.preventDefault();
  //   setIsMenuOpen(false); // close mobile menu
  //   const element = document.getElementById(targetId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  
const router = useRouter();
const pathname = usePathname();

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
) => {
  e.preventDefault();

  // If already on home page
  if (pathname === "/") {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    // Navigate to home with hash
    router.push(`/#${id}`);
  }
};
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Background */}
      <div className="backdrop-blur-xl drop-shadow-lg drop-shadow-[#FF5F00]/30 bg-white border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className=" w-32 h-auto ">

            <Image src={Clentro} alt="Clentro logo – Build. Ship. Fast. SaaS and AI development services for startups" />
            </div>
          </Link>

          {/* Desktop Nav */}
   <nav className="hidden md:flex items-center gap-8">
  {["capabilities", "process", "work","blogs", "about"].map((item) => (
    <a
      key={item}
      href={`/#${item}`}
      onClick={(e) => handleSmoothScroll(e, item)}
      className="text-sm font-medium text-gray-900 hover:text-[#FF5F00] transition-colors"
    >
      {item.toUpperCase()}
    </a>
  ))}
</nav>


          {/* Desktop CTA */}
     <Link
  href="/#contact"
  onClick={(e) => handleSmoothScroll(e, "contact")}
  className="hidden md:block"
>
  <Button
    className="rounded-full px-8 font-semibold text-sm cursor-pointer hover:scale-105 transition-transform"
    style={{ backgroundColor: BRAND_COLOR }}
  >
    SHIP
  </Button>
</Link>


          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
   {isMenuOpen && (
  <div className="md:hidden bg-white border-t border-black/5 shadow-lg">
    <div className="flex flex-col px-6 py-6 space-y-5">
      {["capabilities", "process", "work", "blogs", "about", "contact"].map((item) => (
        <a
          key={item}
          href={`/#${item}`}
          onClick={(e) => {
            handleSmoothScroll(e, item);
            setIsMenuOpen(false); // close menu after click
          }}
          className="text-base font-medium text-gray-900 hover:text-[#FF5F00]"
        >
          {item.toUpperCase()}
        </a>
      ))}

      {/* SHIP button */}
      <Link
        href="/#contact"
        onClick={(e) => {
          handleSmoothScroll(e, "contact");
          setIsMenuOpen(false);
        }}
      >
        <Button
          className="mt-2 rounded-full w-full font-semibold cursor-pointer"
          style={{ backgroundColor: BRAND_COLOR }}
        >
          SHIP
        </Button>
      </Link>
    </div>
  </div>
)}

    </header>
  );
}
