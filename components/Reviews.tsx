"use client";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Sarah Ahmed",
        role: "Product Manager",
        image: "https://i.pravatar.cc/150?img=32",
        rating: 5,
        text: "This platform completely changed how we manage our workflow. Super intuitive and fast!",
        size: "large",
    },
    {
        id: 2,
        name: "James Carter",
        role: "UI Designer",
        image: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        text: "I really appreciate the attention to detail and clean design.",
        size: "small",
    },
    {
        id: 3,
        name: "Ayesha Khan",
        role: "Frontend Developer",
        image: "https://i.pravatar.cc/150?img=47",
        rating: 4,
        text: "The experience has been smooth and reliable so far. I was very impressed with how easy everything was to set up. the attention to detail and clean design.",
        size: "medium",
    },
    {
        id: 4,
        name: "Daniel Moore",
        role: "Startup Founder",
        image: "https://i.pravatar.cc/150?img=18",
        rating: 5,
        text: "I was very impressed with how easy everything was to set up.",
        size: "medium",
    },
    {
        id: 5,
        name: "Fatima Noor",
        role: "Marketing Lead",
        image: "https://i.pravatar.cc/150?img=25",
        rating: 5,
        text: "Absolutely love it. The support team is amazing!",
        size: "small",
    },
];

const BRAND_COLOR = "#FF5F00";

export default function Testimonials() {
    return (
        <section className="p-16 bg-gray-50">
            {/* Header */}
            <div className="mb-12 text-center max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black text-gray-900 mb-6"
                >
                    Loved by <span style={{ color: BRAND_COLOR }}>Founders</span> & Teams
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-600 font-medium"
                >
                    We don't just build software; we build long-term partnerships.
                    Here is what our clients have to say about our velocity and quality.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                {/* Left Column Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {/* First Sub-column (Stacked) */}
                    <div className="flex flex-col gap-4">
                        <FeaturedTestimonialCard item={testimonials[0]} />
                        <TestimonialCardVariant2 item={testimonials[1]} />
                    </div>

                    {/* Second Sub-column (Tall/Single) */}
                    <div className="h-full">
                        <TestimonialCardVariant3 item={testimonials[2]} className="h-full" />
                    </div>
                </div>

                {/* Right Column Group (Stacked) */}
                <div className="flex flex-col gap-4">
                    <TestimonialCardVariant4 item={testimonials[3]} />
                    <TestimonialCardVariant5 item={testimonials[4]} />
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ item, className = "" }: { item: any; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-3 ${className}`}
        >
            <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 shrink-0 ">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                    <h2 className="font-bold text-gray-900 leading-tight">{item.name}</h2>
                    <p className="text-xs text-gray-500 font-medium">{item.role}</p>
                </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">"{item.text}"</p>
        </motion.div>
    );
}


function FeaturedTestimonialCard({ item }: { item: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white py-4 px-6 rounded-sm shadow-sm relative flex flex-col"
        >
            <div className="relative z-10 flex h-full">
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-between pr-16">
                    {/* Quote */}
                    <Quote className="w-10 h-10 text-[#38393b] -top-10 -left-4 absolute fill-current mb-2" />

                    {/* Text */}
                    <p className="text-[#475569] text-xs leading-tight mb-6">
                        "{item.text}"
                    </p>

                    <h4 className="font-bold text-[#0f172a] text-sm mb-1">
                        {item.name}
                    </h4>

                    <p className="text-[#94a3b8] text-xs">
                        {item.role}
                    </p>

                </div>

                {/* Floating Image */}
                <div className="absolute -right-12 top-1/2 -translate-y-1/2">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white  bg-white">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

        </motion.div>
    );
}

function TestimonialCardVariant2({ item }: { item: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full"
        >
            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                "{item.text}"
            </p>

            <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight">{item.name}</h4>
                    <p className="text-xs text-gray-400 font-medium">{item.role}</p>
                </div>
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
            </div>
        </motion.div>
    );
}

function TestimonialCardVariant3({ item, className = "" }: { item: any; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`bg-white p-6 mt-4 pt-12 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col items-center text-center group ${className}`}
        >
            {/* Top Centered Image */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
            </div>

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
            <p className="text-gray-600 text-xs leading-relaxed mb-8 flex-grow">
                {item.text}
            </p>

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
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start flex-col sm:flex-row gap-4"
        >
            {/* Left Image */}
            <div className="relative w-full sm:w-28 h-48 sm:h-auto sm:self-stretch rounded-lg overflow-hidden shrink-0 bg-gray-100 mb-4 sm:mb-0">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>

            {/* Right Content */}
            <div className="flex flex-col flex-grow py-2">
                {/* Quote Header */}
                <div className="mb-3">
                    <p className="font-bold text-gray-900 text-sm leading-tight">
                        <Quote className="w-3 h-3 inline-block align-top mr-1 fill-current transform scale-x-[-1] text-gray-400" />
                        {item.text.split('. ')[0]}...
                        <Quote className="w-3 h-3 inline-block align-top ml-1 fill-current text-gray-400" />
                    </p>
                </div>

                {/* Main Text */}
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-4">
                    {item.text}
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
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-row items-center gap-6"
        >
            {/* Left Content */}
            <div className="flex-1">
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    "{item.text}"
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
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 mb-2 border-2 border-gray-50">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <h4 className="font-bold text-gray-900 text-[10px] leading-tight">{item.name}</h4>
                <p className="text-[9px] text-gray-400 font-medium">{item.role}</p>
            </div>
        </motion.div>
    );
}
