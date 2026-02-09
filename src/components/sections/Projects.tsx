import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Applications", "Mobile App", "UI/UX"];

  const projects = [
    {
      id: 1,
      title: "Photography",
      subtitle: "Photography Agency",
      description:
        "Capturing high-quality, visually compelling photographs that tell stories, highlight details, and create a strong visual impact for personal or professional use.",
      category: "Web Applications",
      image: "/project1.jpg", // Replace with your image
      tags: ["JavaScript", "PHP", "Bootstrap"],
    },
    {
      id: 2,
      title: "BrightHouse (Pvt) Ltd.",
      subtitle: "Modern Aluminum & Interior Solutions",
      description:
        "Brighthouse is a modern aluminum and renovation solutions company specializing in high-quality aluminum renovation, ceiling works, tempered glass fittings, aluminum doors and windows, and glass fitting solutions.",
      category: "Web Applications",
      image: "/project2.jpg", // Replace with your image
      tags: ["React", "Typescript", "Tailwind", "Firebase"],
    },
    {
      id: 3,
      title: "Mentora – AI-Powered Free Live Learning Platform",
      subtitle: "Educational Platform",
      description:
        "Mentora is an AI-powered free live learning platform that connects students and mentors through real-time classes and personalized learning experiences.",
      category: "Mobile App",
      image: "/project3.jpg", // Replace with your image
      tags: ["React Native", "JavaScript", "Firebase", "Nativewind"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white px-8 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">My Portfolio</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A selection of my recent work across different technologies and domains.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-linear-to-br from-gray-700 to-gray-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-1.5 bg-blue-600/90 backdrop-blur-sm rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-gray-500">{project.subtitle}</p>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600/10 border border-blue-500/30 rounded-full text-xs text-blue-400 hover:bg-blue-600/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button (appears on hover) */}
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {filteredProjects.length > 3 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-blue-600 hover:bg-blue-600 text-blue-400 hover:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}