import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectModal from "../models/ProjectModal";
import { type Project } from "../../types/project.type";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null | undefined>();
  const [open, setOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const filters = ["All", "Web Applications", "Mobile App"];

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  } 
  const loadLess = () => {
    setVisibleProjects((prev) => Math.max(prev - 3, 3));
  }

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

        {/* Category Filters */}
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
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="group relative bg-linear-to-br from-gray-800/30 to-gray-900/30
                         backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden
                         hover:border-blue-500/50 transition-all duration-500
                         hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <button
                  onClick={() => { setSelectedProject(project); setOpen(true); }}
                  className="absolute inset-0 bg-black/60 opacity-0
                             group-hover:opacity-100 flex items-center justify-center
                             text-white text-lg font-semibold transition-opacity"
                >
                  View Details
                </button>

                {/* Category Badge */}
                <span className="absolute top-4 right-4 px-4 py-1
                                 bg-blue-600/90 rounded-full text-[12px] font-medium">
                  {project.category}
                </span>

                {/* Status Badge */}
                {project.status && (
                  <span className="absolute top-4 left-4 px-4 py-1
                                   bg-green-600/90 rounded-full text-[12px] font-medium">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full
                                 bg-blue-500/10 text-blue-400
                                 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-transparent border border-blue-600 rounded-lg font-semibold hover:border-blue-500 transition"
            >
              Load More
            </button>
          </div>
        )}

        {/* Load Less Button */}
        {visibleProjects > 3 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadLess}
              className="px-8 py-3 bg-transparent border border-blue-600 rounded-lg font-semibold hover:border-blue-500 transition"
            >
              Load Less
            </button>
          </div>
        )}
        
      </div>

      {/* SINGLE MODAL */}
      {open && (
        <ProjectModal
          project={selectedProject}
          onClose={() => { setOpen(false); }}
        />
      )}
    </section>
  );
}
