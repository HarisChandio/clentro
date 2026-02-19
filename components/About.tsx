"use client";

import { motion } from "framer-motion";

const BRAND_COLOR = "#FF5F00";

export default function About() {
  const stats = [
    {
      value: "5+",
      label: "Products Shipped in < 100 Days",
      description: "Rapid delivery without compromising quality",
    },
    {
      value: "15+",
      label: "Team Members",
      description: "Senior engineers and design experts",
    },
    {
      value: "5/5",
      label: "Client Rating",
      description: "Consistently exceeding expectations",
    },
    {
      value: "100%",
      label: "Remote Team",
      description: "Distributed globally, united by mission",
    },
  ];

  return (
    <section id="about" className="bg-white py-24 relative overflow-hidden">
      {/* Background decorations */}

      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50" />

      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Text */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pr-8"
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 inline-block bg-orange-50 text-orange-600 border border-orange-100">
              About Clentro
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Engineers who{" "}
              <span style={{ color: BRAND_COLOR }}>ship fast,</span> without
              compromise.
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're a distributed team of senior engineers, product designers,
              and AI specialists who've shipped products that scaled to 100K+
              users. We leverage AI-powered tools like Cursor and Claude to 10x
              our development speed.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our Ship Fast methodology combines battle-tested engineering
              practices with cutting-edge AI acceleration. Speed and quality
              aren't mutually exclusive—they're requirements for modern product
              development.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block p-4 bg-gray-50 rounded-xl border-l-4 border-orange-500"
            >
              <p className="text-gray-900 font-medium italic">
                "We don't just build software; we build businesses."
              </p>
            </motion.div>
          </motion.div>
          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {stats.map((stat, index) => {
              // Extract numbers and symbols
              const match = stat.value.match(/^(\d+(?:\.\d+)?)(.*)/);
              const number = match ? match[1] : stat.value;
              const symbol = match ? match[2] : "";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="text-5xl font-extrabold mb-2 text-gray-900 tracking-tight">
                    {number}
                    <span className="text-3xl text-orange-500 ml-1">
                      {symbol}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {stat.label}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
