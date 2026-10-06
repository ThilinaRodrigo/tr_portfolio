import { useState } from "react";
import { FiCheck, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    { icon: <FiCheck />, text: "Clean Code Architecture" },
    { icon: <FiCheck />, text: "Pixel Perfect Design" },
    { icon: <FiCheck />, text: "Fast Performance" },
    { icon: <FiCheck />, text: "24/7 Support" },
  ];

  const services = [
    {
      icon: <FaServer />,
      title: "Backend & API Development",
      description:
        "Secure and scalable REST APIs using Spring Boot, JWT authentication, and relational databases.",
    },
    {
      icon: <FaCode />,
      title: "Web Applications",
      description:
        "Modern, responsive, and fast React applications with SEO optimization.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description:
        "Cross-platform mobile applications using React Native / Flutter for Android & iOS.",
    },
  ];

  const visibleCount = 3; // number of cards visible at once

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= services.length ? 0 : prev + visibleCount
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - visibleCount < 0
        ? Math.max(services.length - visibleCount, 0)
        : prev - visibleCount
    );
  };

  const visibleServices = services.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section
      id="services"
      className="min-h-screen bg-transparent text-white px-8 py-20 border-t border-gray-800/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Features Bar */}
        <div className="bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-slate-950/80 border border-gray-800/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-xl mb-16 flex flex-wrap justify-around items-center gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-gray-200 hover:text-white hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 shadow-sm cursor-default"
            >
              <div className="p-1 rounded-md bg-blue-500/20 text-blue-400 shrink-0">
                {feature.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* What I Do Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Services & Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              What I Do
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              I help businesses and teams grow by crafting high-quality, scalable software solutions tailored to their technical needs.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-2xl border border-gray-800 bg-gray-900/60 hover:bg-blue-600/20 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-md cursor-pointer group"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-2xl border border-gray-800 bg-gray-900/60 hover:bg-blue-600/20 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-md cursor-pointer group"
              aria-label="Next slide"
            >
              <FiChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => (
            <div
              key={currentIndex + index}
              className="group relative bg-gradient-to-br from-gray-900/80 via-gray-900/50 to-slate-950/80
                         backdrop-blur-xl border border-gray-800/80 rounded-2xl p-8
                         hover:border-blue-500/50 transition-all duration-500
                         hover:shadow-[0_12px_40px_rgba(37,99,235,0.18)] hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Background Glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/15 via-blue-500/10 to-indigo-500/5 border border-blue-500/25 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 transition-all duration-500 shadow-md shadow-blue-500/10 text-3xl sm:text-4xl">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Bottom decorative accent */}
              <div className="mt-8 pt-4 border-t border-gray-800/60 flex items-center justify-between text-xs font-semibold text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Tailored Engineering</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
