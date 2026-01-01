const BRAND_COLOR = "#FF5F00";

export default function About() {
  const stats = [
    {
      value: "50+",
      label: "Products"
    },
    {
      value: "15+",
      label: "Team Members"
    },
    {
      value: "4.9/5",
      label: "Client Rating"
    },
    {
      value: "100%",
      label: "Remote Team"
    }
  ];

  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span 
              className="text-xs font-bold tracking-wider px-4 py-2 rounded-full inline-block mb-6"
              style={{ backgroundColor: BRAND_COLOR, color: 'white' }}
            >
              ABOUT CLENTRO
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-6">
                Engineers who <span style={{ color: BRAND_COLOR }}> ship fast,</span> without compromise.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're a distributed team of senior engineers, product designers, and AI specialists who've shipped products that scaled to 100K+ users. We leverage AI-powered tools like Cursor and Claude to 10x our development speed.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Our Ship Fast methodology combines battle-tested engineering practices with cutting-edge AI acceleration. Speed and quality aren't mutually exclusive—they're requirements for modern product development.
            </p>

            {/* Stats Grid */}
           <div className="grid grid-cols-2 gap-2 mt-12 max-w-md">
              {stats.map((stat, index) => {
                // Extract numbers and symbols
                const match = stat.value.match(/^(\d+(?:\.\d+)?)(.*)/);
                const number = match ? match[1] : stat.value;
                const symbol = match ? match[2] : '';
                
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                  >
                    <div className="text-3xl md:text-4xl font-extrabold mb-1">
                      <span style={{ color: BRAND_COLOR }}>{number}</span>
                      <span className="text-2xl md:text-3xl font-semibold text-black">{symbol}</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          {/* Right Content - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden flex items-center justify-center">
                <svg className="w-16 h-16 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl overflow-hidden flex items-center justify-center">
                <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden flex items-center justify-center">
                <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
