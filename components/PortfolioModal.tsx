"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X, Calendar, User, Code2, ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  skills: string[];
  image: string;
}

interface PortfolioModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export default function PortfolioModal({
  project,
  isOpen,
  onClose,
}: PortfolioModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className="
          !max-w-none
          w-[95vw]
          md:w-[75vw]
          max-w-7xl
          h-[90vh]
          md:h-auto
          md:max-h-[85vh]
          p-0
          overflow-hidden
          bg-white/95
          backdrop-blur-xl
          rounded-3xl
          shadow-2xl
          flex flex-col md:flex-row
        "
      >
        {/* LEFT IMAGE SECTION */}
        <div className="relative w-full md:w-[40%] h-64 md:h-auto bg-gray-100 overflow-hidden group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />

          {/* Mobile Close */}
          <DialogClose className="absolute top-4 right-4 md:hidden p-2 bg-black/40 text-white rounded-full">
            <X className="w-5 h-5" />
          </DialogClose>

          {/* Category Badge */}
          <span className="absolute top-5 left-5 px-3 py-1 bg-white text-orange-500 text-xs font-semibold uppercase rounded-full shadow">
            {project.category}
          </span>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="flex-1 flex flex-col relative">
          {/* Desktop Close */}
          <DialogClose className="hidden md:flex absolute top-5 right-5 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <X className="w-5 h-5" />
          </DialogClose>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8 md:p-10 no-scrollbar">
            <div className="w-full max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-500 mb-8">{project.subtitle}</p>
              </motion.div>

              {/* Stats */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <Stat label="Role" value={project.role} icon={<User />} />
                <Stat label="Timeline" value="4-8 Weeks" icon={<Calendar />} />
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <SectionTitle title="About Project" />
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <SectionTitle
                  title="Tech Stack"
                  icon={<Code2 className="w-4 h-4 text-orange-500" />}
                />

                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm border rounded-md text-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t">
            <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition">
              View Live Project
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ---------- Reusable Components ---------- */

function Stat({ label, value, icon }: any) {
  return (
    <div className="p-4 border rounded-xl bg-gray-50">
      <div className="flex items-center gap-2 text-gray-400 text-xs uppercase mb-2">
        {icon}
        {label}
      </div>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  );
}

function SectionTitle({ title, icon }: any) {
  return (
    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase text-gray-900 mb-3">
      <span className="w-1 h-4 bg-orange-500 rounded-full" />
      {icon}
      {title}
    </h3>
  );
}
