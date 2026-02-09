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
      className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white px-8 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Features Bar */}
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 mb-16 pb-8 border-b border-gray-800">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500">
                {feature.icon}
              </div>
              <span className="text-sm lg:text-base">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* What I Do Section */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">What I Do</h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            I help businesses grow by crafting high-quality software solutions
            tailored to their needs.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -top-20 right-0 items-center gap-4 hidden lg:flex">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-700 hover:border-blue-500 flex items-center justify-center transition-all duration-300 hover:bg-blue-500/10"
            >
              <span className="text-xl text-gray-400 hover:text-blue-500" >
                <FiChevronLeft size={24} />
              </span>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-700 hover:border-blue-500 flex items-center justify-center transition-all duration-300 hover:bg-blue-500/10"
            >
              <span className="text-xl text-gray-400 hover:text-blue-500" >
                <FiChevronRight size={24} />
              </span>
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleServices.map((service, index) => (
              <div
                key={currentIndex + index}
                className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 text-4xl">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
