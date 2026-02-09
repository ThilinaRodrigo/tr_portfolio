import { useState } from "react";
import {
  FaGraduationCap,
} from "react-icons/fa";
import {skills} from "../../data/skills";
import { education } from "../../data/education";

export default function About() {
  

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skills.map((s) => s.category)];

  const allSkills = skills.flatMap((group) =>
    group.items.map((skill) => ({
      name: skill.name,
      category: group.category,
      Icon: skill.icon, // <-- use skill.icon here instead of category icon
    }))
  );

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="about"
      className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white px-8 py-20"
    >
      <div className="max-w-7xl mx-auto space-y-24">

        {/* About Me */}
        <section className="max-w-4xl space-y-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold">About Me</h2>
            <div className="h-1 w-16 bg-linear-to-r from-blue-400 to-blue-700 rounded-full mt-2" />
          </div>

          <div className="text-gray-400 text-lg leading-relaxed space-y-5">
            <p>
              Hello! I'm{" "}
              <span className="text-white font-semibold">Thilina Rodrigo</span>, a passionate Full Stack Developer based in Sri Lanka.
            </p>
            <p>
              I build <span className="text-white/90">modern, scalable digital products</span> — from elegant frontend interfaces to secure backend systems.
            </p>
            <p>
              I also create <span className="text-white/90">cross-platform mobile applications</span> with seamless backend integration and performance in mind.
            </p>
          </div>
        </section>

        {/* Education */}
        <div className="space-y-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">Experience & Education</h2>

          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur border border-slate-800 rounded-2xl p-8
                         hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition"
            >
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <FaGraduationCap className="text-blue-400 text-xl" />
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="text-xl lg:text-2xl font-bold">{edu.degree}</h3>
                    <span className="text-sm px-4 py-1 border border-slate-700 rounded-full text-gray-400">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-blue-400 font-medium">• {edu.institution}</p>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl lg:text-4xl font-bold">Tech Stack</h2>
            <p className="text-gray-400">
              Technologies and tools I use in real-world development.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition
                  ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "bg-slate-800/60 text-gray-300 hover:bg-slate-700/70"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.Icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center
                             hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                    <Icon className="text-blue-400 text-2xl" />
                  </div>
                  <p className="text-sm font-medium text-gray-200">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
