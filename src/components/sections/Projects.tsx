import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectModal from "../models/ProjectModal";
import ProjectSkeleton from "../skeletons/ProjectSkeleton";
import { type Project } from "../../types/project.type";
import { Eye, ExternalLink, Github, Code2, Sparkles, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null | undefined>();
  const [open, setOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const filters = ["All", "Web Applications", "Mobile App"];

  const handleFilterChange = (filter: string) => {
    if (filter === activeFilter) return;
    setIsLoading(true);
    setActiveFilter(filter);
    setVisibleProjects(3);
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  };

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };
  const loadLess = () => {
    setVisibleProjects((prev) => Math.max(prev - 3, 3));
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent text-white px-6 lg:px-8 py-24 relative overflow-hidden border-t border-gray-800/40"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Crafted Projects & Architecture
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of full-stack web applications, microservices, and mobile solutions engineered for performance and user experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105 border border-blue-400/30"
                  : "bg-gray-900/80 text-gray-400 border border-gray-800 hover:bg-gray-800 hover:text-white hover:border-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array.from({ length: Math.min(visibleProjects, 3) }).map((_, idx) => (
                <ProjectSkeleton key={idx} />
              ))
            : filteredProjects.slice(0, visibleProjects).map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-gradient-to-b from-gray-900/90 via-gray-900/50 to-gray-950/90
                             backdrop-blur-xl border border-gray-800/80 rounded-2xl overflow-hidden
                             hover:border-blue-500/40 transition-all duration-500
                             hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)] hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    {/* Image & Badges Container */}
                    <div className="relative h-56 overflow-hidden bg-gray-950">
                      {/* Image Loading Skeleton */}
                      {!loadedImages[project.id] && (
                        <div className="absolute inset-0 bg-gray-800/80 animate-pulse z-10" />
                      )}

                      <img
                        src={project.image}
                        alt={project.title}
                        onLoad={() =>
                          setLoadedImages((prev) => ({ ...prev, [project.id]: true }))
                        }
                        className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out ${
                          loadedImages[project.id] ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none z-10">
                        {/* Status Badge */}
                        {project.status ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-sm capitalize">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {project.status}
                          </span>
                        ) : (
                          <div />
                        )}

                        {/* Category Badge */}
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-gray-900/80 text-gray-300 border border-gray-700/60 backdrop-blur-md shadow-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover Quick Action overlay */}
                      <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 p-4 z-20">
                        <button
                          onClick={() => {
                            setSelectedProject(project);
                            setOpen(true);
                          }}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30 hover:scale-105 cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                          Quick View
                        </button>

                        {(project.frontendUrl || project.backendUrl) && (
                          <a
                            href={project.frontendUrl || project.backendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-gray-900/90 hover:bg-gray-800 text-gray-200 hover:text-white transition-all shadow-md border border-gray-700/70 hover:scale-105"
                            title="View Code on GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-gray-900/90 hover:bg-gray-800 text-gray-200 hover:text-white transition-all shadow-md border border-gray-700/70 hover:scale-105"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Info Container */}
                    <div className="p-6 space-y-3">
                      <h3
                        onClick={() => {
                          setSelectedProject(project);
                          setOpen(true);
                        }}
                        className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 cursor-pointer line-clamp-1"
                      >
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 font-normal">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[11px] rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-2.5 py-1 text-[11px] rounded-md bg-gray-800/80 text-gray-400 border border-gray-700/60 font-medium">
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Bar */}
                  <div className="px-6 py-4 border-t border-gray-800/60 bg-gray-950/40 flex items-center justify-between mt-4">
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setOpen(true);
                      }}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3 text-gray-400">
                      {(project.frontendUrl || project.backendUrl) && (
                        <a
                          href={project.frontendUrl || project.backendUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors"
                          title="Source Code"
                        >
                          <Code2 className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors"
                          title="Live Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-14">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/40 rounded-xl font-semibold text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/10 cursor-pointer"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* Load Less Button */}
        {visibleProjects > 3 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadLess}
              className="px-8 py-3 bg-blue-600/15 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 hover:border-blue-400 rounded-xl font-semibold text-sm shadow-md shadow-blue-600/15 hover:shadow-blue-600/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      {/* SINGLE MODAL */}
      {open && (
        <ProjectModal
          project={selectedProject}
          onClose={() => {
            setOpen(false);
          }}
        />
      )}
    </section>
  );
}
