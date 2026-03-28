"use client";
import { useState } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sunny Singh",
    role: "ADS Founder & CEO, Canada",
    rating: 5,
    text: "Amazing working with Haris with 0 regrets. He was on top of the project the whole time, clear with his communication and open to all feedback provided. I have worked with him twice so far and it is far from the last time. Great person with an amazing head on his shoulders!",
  },
  {
    id: 5,
    name: "Samson Babajide",
    role: "Devops Engineer, CEO of Inknaija",
    rating: 5,
    text: "Exceptional developers to work with on the INKNAIJA project. Highly skilled, reliable, and communicates clearly. They delivered quality code, solved problems quickly, and stayed committed to the project's success. I'd gladly work with them again!",
  },
  
  {
    id: 3,
    name: "Tuoyo Omare",
    role: "Founder & CEO, RevvAuto",
    image: "/assets/client-profiles/Tuoyo_revvauto.png",
    rating: 5,
    text: "Haris and his team have been excellent every step of the way. From early planning and technical scoping to day-to-day communication and final execution, the process has been smooth, organized and transparent. Haris consistently demonstrates strong ability to translate complex ideas into clear technical solutions, while keeping timelines and priorities aligned. His team is responsive, detail-oriented, and proactive in raising questions or suggesting improvements rather than simply following instructions. Haris and his team are a great choice, I would highly recommend and look forward to continuing our work together.",
  },
  {
    id: 4,
    name: "John",
    role: "Startup Founder",
    rating: 5,
    text: "Haris was fantastic to work with. He has a calm, confident demeanor and it's immediately clear that he knows his craft. He stepped in seamlessly, took ownership, and made an immediate impact. His contributions genuinely moved the project forward, and I wouldn't hesitate to work with him again.",
  },
  {
    id: 2,
    name: "Jimnet",
    role: "Regional Manager at Silverstone Car Racing, UK",
    image: "/assets/client-profiles/Jim_pitboard.png",
    rating: 5,
    text: "Excellent work! Delivered clean, efficient code and showed deep knowledge of agents. Easy to communicate with and reliable. Would definitely hire again.",
  },
  
];

const BRAND_COLOR = "#FF5F00";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-gray-900 mb-6"
          >
            Loved by <span style={{ color: BRAND_COLOR }}>Founders</span> &
            Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-medium"
          >
            We don't just build software; we build long-term partnerships. Here
            is what our clients have to say about our velocity and quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 max-w-6xl mx-auto">
          {/* Left Column Group */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-7">
            {/* First Sub-column (Stacked) */}
            <div className="flex flex-col gap-4">
              <FeaturedTestimonialCard item={testimonials[0]} />
              <TestimonialCardVariant2 item={testimonials[1]} />
            </div>

            {/* Second Sub-column (Tall/Single) */}
            <div className="h-full">
              <TestimonialCardVariant3
                item={testimonials[2]}
                className="h-full"
              />
            </div>
          </div>

          {/* Right Column Group (Stacked) */}
          <div className="flex flex-col gap-4">
            <TestimonialCardVariant4 item={testimonials[3]} />
            <TestimonialCardVariant5 item={testimonials[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedTestimonialCard({ item }: { item: any }) {
  const [expanded, setExpanded] = useState(false);
  const truncateLength = 180;
  const shouldTruncate = item.text.length > truncateLength;
  const displayText = expanded || !shouldTruncate 
    ? item.text 
    : item.text.substring(0, truncateLength) + "...";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.12)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white py-4 px-6 rounded-sm shadow-sm relative flex flex-col"
    >
      <div className="relative z-10 flex h-full">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-between pr-16">
          {/* Quote */}
          <Quote className="w-10 h-10 text-[#38393b] -top-10 -left-4 absolute fill-current mb-2" />

          {/* Text */}
          <p className="text-[#475569] text-xs leading-tight mb-6 min-h-0">
            &quot;{displayText}&quot;
            {shouldTruncate && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="ml-2 text-[#FF5F00] font-semibold hover:underline inline-block"
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </p>

          <h4 className="font-bold text-[#0f172a] text-sm mb-1">{item.name}</h4>

          <p className="text-[#94a3b8] text-xs">{item.role}</p>
        </div>

        {/* Floating Image */}
        {item.image && (
          <div className="absolute -right-12 top-1/2 -translate-y-1/2">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white bg-white">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function TestimonialCardVariant2({ item }: { item: any }) {
  const [expanded, setExpanded] = useState(false);
  const truncateLength = 120;
  const shouldTruncate = item.text.length > truncateLength;
  const displayText = expanded || !shouldTruncate 
    ? item.text 
    : item.text.substring(0, truncateLength) + "...";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20, y: 12 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      whileHover={{ y: -4, scale: 1.02, boxShadow: "0 12px 28px -8px rgba(0,0,0,0.14)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-between h-full"
    >
      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium min-h-0">
        &quot;{displayText}&quot;
        {shouldTruncate && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-2 text-[#FF5F00] font-semibold hover:underline inline-block"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>

      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-gray-900 text-sm leading-tight">
            {item.name}
          </h4>
          <p className="text-xs text-gray-400 font-medium">{item.role}</p>
        </div>
        {item.image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-200 shadow-sm shrink-0">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

function TestimonialCardVariant3({
  item,
  className = "",
}: {
  item: any;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const truncateLength = 200;
  const shouldTruncate = item.text.length > truncateLength;
  const displayText = expanded || !shouldTruncate 
    ? item.text 
    : item.text.substring(0, truncateLength) + "...";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02, boxShadow: "0 16px 32px -10px rgba(0,0,0,0.15)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-white p-6 mt-4 pt-12 rounded-xl shadow-sm relative flex flex-col items-center text-center group ${className}`}
    >
      {/* Top Centered Image */}
      {item.image && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Stars */}
      <div className="flex gap-1 mb-4 mt-6 justify-center">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#eab308] text-[#eab308]" />
        ))}
      </div>

      {/* Heading */}
      <h3 className="font-bold text-md text-gray-900 mb-4 leading-tight">
        I really appreciate!!
      </h3>

      {/* Text */}
      <div className="text-gray-600 text-xs leading-relaxed mb-8 grow min-h-0">
        {displayText}
        {shouldTruncate && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-2 text-[#FF5F00] font-semibold hover:underline inline-block"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="self-start text-left w-full relative flex justify-between items-end">
        <div>
          <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
          <p className="text-xs text-gray-400 font-medium">{item.role}</p>
        </div>

        {/* Quote Icon Bottom Right */}
        <Quote className="w-10 h-10 text-gray-800 fill-current opacity-80" />
      </div>
    </motion.div>
  );
}

function TestimonialCardVariant4({ item }: { item: any }) {
  const [expanded, setExpanded] = useState(false);
  const truncateLength = 150;
  const shouldTruncate = item.text.length > truncateLength;
  const displayText = expanded || !shouldTruncate 
    ? item.text 
    : item.text.substring(0, truncateLength) + "...";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      whileHover={{ y: -4, x: 2, boxShadow: "0 12px 28px -8px rgba(0,0,0,0.14)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white p-4 rounded-xl shadow-sm flex items-start flex-col sm:flex-row gap-4"
    >
      {/* Left Image */}
      {item.image && (
        <div className="relative w-full sm:w-28 h-48 sm:h-auto sm:self-stretch rounded-lg overflow-hidden shrink-0 bg-gray-100 mb-4 sm:mb-0">
          <Image src={item.image} alt={item.name} fill className="object-cover" />
        </div>
      )}

      {/* Right Content */}
      <div className="flex flex-col grow py-2">
        {/* Quote Header */}
        <div className="mb-3">
          <p className="font-bold text-gray-900 text-sm leading-tight">
            <Quote className="w-3 h-3 inline-block align-top mr-1 fill-current transform scale-x-[-1] text-gray-400" />
            {item.text.split(". ")[0]}...
            <Quote className="w-3 h-3 inline-block align-top ml-1 fill-current text-gray-400" />
          </p>
        </div>

        {/* Main Text */}
        <p className="text-gray-500 text-xs leading-relaxed mb-4 min-h-0">
          {displayText}
          {shouldTruncate && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-2 text-[#FF5F00] font-semibold hover:underline inline-block"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </p>

        {/* Footer */}
        <div className="mt-auto">
          <h4 className="font-bold text-gray-900 text-xs">{item.name}</h4>
          <p className="text-[10px] text-gray-400 font-medium">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

function TestimonialCardVariant5({ item }: { item: any }) {
  const [expanded, setExpanded] = useState(false);
  const truncateLength = 120;
  const shouldTruncate = item.text.length > truncateLength;
  const displayText = expanded || !shouldTruncate 
    ? item.text 
    : item.text.substring(0, truncateLength) + "...";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4, scale: 1.01, boxShadow: "0 12px 28px -8px rgba(0,0,0,0.14)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white p-6 rounded-3xl shadow-sm flex flex-row items-center gap-6"
    >
      {/* Left Content */}
      <div className="flex-1">
        <p className="text-gray-600 text-xs leading-relaxed mb-4 min-h-0">
          &quot;{displayText}&quot;
          {shouldTruncate && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-2 text-[#FF5F00] font-semibold hover:underline inline-block"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </p>

        {/* Footer */}
        <div>
          {/* Stars */}
          <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#eab308] text-[#eab308]" />
            ))}
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col items-center shrink-0 w-24 text-center border-l border-gray-100 pl-4">
        {item.image && (
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 mb-2 border-2 border-gray-50">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <h4 className="font-bold text-gray-900 text-[10px] leading-tight">
          {item.name}
        </h4>
        <p className="text-[9px] text-gray-400 font-medium">{item.role}</p>
      </div>
    </motion.div>
  );
}
