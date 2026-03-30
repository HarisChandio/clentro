import { Linkedin, Github, Twitter, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Clentro from "@/public/assets/logo/clentro png-14.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 text-gray-50 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4 w-36 h-auto ">
              <Image src={Clentro} alt="Clentro – SaaS and AI product development company" />
            </div>
            {/* <h3 className="text-2xl font-bold text-[#FF5F00] mb-4">
              Clentro<span style={{ color: BRAND_COLOR }}>.</span>
            </h3> */}
            <p className="text-sm leading-relaxed">
              We build scalable SaaS platforms, AI-powered products, and
              high-performance digital systems for modern businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className=" font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#FF5F00] transition-colors cursor-default">
                  SaaS Product Development
              </li>
              <li className="hover:text-[#FF5F00] transition-colors cursor-default">
                  Full-Stack Engineering
              </li>
              <li className="hover:text-[#FF5F00] transition-colors cursor-default">
                  AI & Automation
              </li>
              <li className="hover:text-[#FF5F00] transition-colors cursor-default">
                  Mobile Applications
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#about"
                  className="hover:text-[#FF5F00] transition-colors"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/#capabilities"
                  className="hover:text-[#FF5F00] transition-colors"
                >
                  Capabilities
                </a>
              </li>

              <li>
                <a
                  href="/#work"
                  className="hover:text-[#FF5F00] transition-colors"
                >
                  Work
                </a>
              </li>
<li>
                <a
                  href="/#blogs"
                  className="hover:text-[#FF5F00] transition-colors"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:text-[#FF5F00] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className=" font-semibold mb-4">Contact</h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@clentro.io</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Remote • Global</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/clentro/"
                className="hover:text-[#FF5F00] transition"
                target="_blank"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Clentro. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
