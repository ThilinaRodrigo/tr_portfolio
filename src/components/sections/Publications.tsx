import { useState } from "react";
import { publications } from "../../data/publications";
import { projects } from "../../data/projects";
import ProjectModal from "../models/ProjectModal";
import { type Project } from "../../types/project.type";
import { BookOpen, GraduationCap, Calendar, Building2, ExternalLink, ArrowUpRight, Award, FileText } from "lucide-react";

export default function Publications() {
  const [selectedProject, setSelectedProject] = useState<Project | null | undefined>();
  const [open, setOpen] = useState(false);

  return (
    <section
      id="publications"
      className="min-h-[70vh] bg-gray-950/60 backdrop-blur-3xl text-white px-6 lg:px-8 py-24 relative overflow-hidden border-t border-gray-900"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Academic & Industrial Research</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Publications & Conference Papers
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Peer-reviewed conference proceedings and research contributions in Artificial Intelligence, Deep Transfer Learning, and Agricultural Computer Vision.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid gap-8 max-w-5xl mx-auto">
          {publications.map((pub) => {
            const relatedProj = projects.find((p) => p.id === pub.relatedProjectId);

            return (
              <div
                key={pub.id}
                className="group relative bg-gradient-to-br from-gray-900/90 via-gray-900/60 to-slate-950/90
                           backdrop-blur-xl border border-gray-800/80 rounded-2xl p-6 sm:p-8
                           hover:border-blue-500/50 transition-all duration-500
                           hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)] hover:-translate-y-1 space-y-6"
              >
                {/* Top Badges & Title */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-3 max-w-3xl">
                    {/* Venue & Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                        <GraduationCap className="w-3.5 h-3.5" />
                        {pub.conference}
                      </span>

                      {pub.issn && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                          <Award className="w-3.5 h-3.5 text-indigo-400" />
                          {pub.issn}
                        </span>
                      )}

                      <span className="inline-flex items-center gap-1 text-gray-400 px-2 py-0.5">
                        <Building2 className="w-3.5 h-3.5 text-gray-500" />
                        {pub.institution}
                      </span>

                      <span className="inline-flex items-center gap-1 text-gray-400 px-2 py-0.5">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                        {pub.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {pub.title}
                    </h3>

                    {/* Authors List */}
                    {pub.authors && pub.authors.length > 0 && (
                      <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
                        <span className="text-gray-500 font-semibold">Authors: </span>
                        {pub.authors.map((author, index) => (
                          <span
                            key={author}
                            className={author.includes("Rodrigo") ? "text-blue-400 font-bold underline decoration-blue-500/40 underline-offset-4" : "text-gray-300"}
                          >
                            {author}
                            {index < pub.authors!.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>

                  {/* Show Publication PDF Action Button */}
                  {pub.publicationUrl && (
                    <div className="shrink-0">
                      <a
                        href={pub.publicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold
                                   bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white
                                   border border-blue-400/30 shadow-lg shadow-blue-600/25 hover:scale-105
                                   transition-all duration-300 cursor-pointer"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Show publication</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Abstract Description */}
                <div className="p-4 rounded-xl bg-gray-950/60 border border-gray-800/80">
                  <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    Abstract Summary
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {pub.description}
                  </p>
                </div>

                {/* Tags & Related Project link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {relatedProj && (
                    <button
                      onClick={() => {
                        setSelectedProject(relatedProj);
                        setOpen(true);
                      }}
                      className="text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 cursor-pointer bg-blue-500/5 px-3 py-1.5 rounded-lg border border-blue-500/20 hover:bg-blue-500/10"
                    >
                      <span>Explore System ({relatedProj.title})</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL FOR RELATED PROJECT */}
      {open && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
