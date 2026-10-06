// ProjectModal.tsx
import { X, ExternalLink, Github, Code2, Sparkles, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type Project } from "../../types/project.type";

interface ProjectModalProps {
  project: Project | null | undefined;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-20 w-full max-w-4xl max-h-[90vh] overflow-y-auto
                     bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950
                     border border-gray-700/60 rounded-2xl shadow-2xl shadow-blue-500/10 custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full
                       bg-black/50 hover:bg-blue-600/80 text-gray-300 hover:text-white
                       border border-gray-700 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Header */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl bg-gray-950 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            {/* Category badge */}
            <span className="absolute bottom-4 left-6 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-600/90 text-white backdrop-blur-md border border-blue-400/30">
              {project.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap gap-4 items-start justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="text-blue-400 text-sm font-medium mt-1">
                    {project.subtitle}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2.5">
                {project.frontendUrl && (
                  <a
                    href={project.frontendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600/50 rounded-xl text-white font-medium text-xs sm:text-sm transition-all shadow-md"
                  >
                    <Github className="w-4 h-4" />
                    <span>Frontend</span>
                  </a>
                )}

                {project.backendUrl && (
                  <a
                    href={project.backendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600/50 rounded-xl text-white font-medium text-xs sm:text-sm transition-all shadow-md"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Backend</span>
                  </a>
                )}

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="pt-2 border-t border-gray-800/80">
              <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>About the Project</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Publication Banner if applicable */}
            {project.publication && (
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Associated Research Publication</h4>
                  <p className="text-sm font-medium text-white mt-0.5">{project.publication}</p>
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="pt-2 border-t border-gray-800/80">
              <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Technologies & Architecture</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs sm:text-sm rounded-full
                               bg-blue-500/10 text-blue-300
                               border border-blue-500/20 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 flex justify-end border-t border-gray-800">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 font-medium transition text-sm cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

