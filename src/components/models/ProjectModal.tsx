// ProjectModal.tsx
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type Project } from "../../types/project.type";

interface ProjectModalProps {
  project: Project | null | undefined;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null; // prevent rendering if no project is selected

  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="relative z-20 w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto
                     bg-linear-to-br from-slate-900 via-slate-800 to-slate-900
                     border border-white/10 rounded-2xl shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full
                       bg-white/10 hover:bg-white/20 flex items-center justify-center z-30"
          >
            <X className="text-white" />
          </button>

          {/* Image Header */}
          <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="flex flex-wrap gap-3 items-center">
              <h2 className="text-3xl font-bold text-white flex-1">
                {project.title}
              </h2>

              {project.frontendUrl && (
                <a
                  href={project.frontendUrl}
                  target="_blank"
                  className="px-5 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 transition"
                >
                  Frontend
                </a>
              )}

              {project.backendUrl && (
                <a
                  href={project.backendUrl}
                  target="_blank"
                  className="px-5 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 transition"
                >
                  Backend
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  className="px-5 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>
              )}
            </div>

            <p className="text-blue-400 font-medium">{project.category}</p>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                About the Project
              </h3>
              <p className="text-gray-400 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1 text-sm rounded-full
                               bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
