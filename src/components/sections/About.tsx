import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { skills } from "../../data/skills";
import { education } from "../../data/education";
import { User, Code2, Cpu, Globe, Award } from "lucide-react";

export default function About() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skills.map((s) => s.category)];

  const allSkills = skills.flatMap((group) =>
    group.items.map((skill) => ({
      name: skill.name,
      category: group.category,
      Icon: skill.icon,
    }))
  );

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="about"
      className="min-h-screen bg-transparent text-white px-6 lg:px-8 py-24 border-t border-gray-800/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-2">
            <User className="w-4 h-4" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            About Me & Technical Skills
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A software engineering undergraduate passionate about building scalable, high-performance web applications and backend microservices.
          </p>
        </div>

        {/* About Me & Quick Stats Card */}
        <div className="bg-gradient-to-b from-gray-900/90 via-gray-900/50 to-gray-950/90 backdrop-blur-xl border border-gray-800/80 rounded-3xl p-8 lg:p-12 shadow-2xl space-y-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span>Who I Am</span>
              </h3>
              <p>
                Hello! I'm{" "}
                <span className="text-blue-400 font-semibold">Thilina Rodrigo</span>, a dedicated Full-Stack Developer and Computer Science undergraduate based in Sri Lanka.
              </p>
              <p>
                I specialize in engineering <span className="text-white font-medium">modern, scalable digital applications</span> — ranging from responsive React & TypeScript frontends to robust Spring Boot & Go backend microservices.
              </p>
              <p>
                I am driven by clean code principles, event-driven architecture, and continuously learning emerging cloud and backend technologies.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gray-950/60 border border-gray-800/80 space-y-2">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 w-fit border border-blue-500/20">
                  <FaGraduationCap className="w-5 h-5" />
                </div>
                <p className="text-xs text-gray-400 font-medium">Education</p>
                <p className="text-sm font-bold text-white">CS Undergraduate</p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-950/60 border border-gray-800/80 space-y-2">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit border border-indigo-500/20">
                  <Code2 className="w-5 h-5" />
                </div>
                <p className="text-xs text-gray-400 font-medium">Role</p>
                <p className="text-sm font-bold text-white">Full-Stack Dev</p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-950/60 border border-gray-800/80 space-y-2">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit border border-emerald-500/20">
                  <Cpu className="w-5 h-5" />
                </div>
                <p className="text-xs text-gray-400 font-medium">Focus</p>
                <p className="text-sm font-bold text-white">Microservices & Web</p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-950/60 border border-gray-800/80 space-y-2">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 w-fit border border-purple-500/20">
                  <Globe className="w-5 h-5" />
                </div>
                <p className="text-xs text-gray-400 font-medium">Location</p>
                <p className="text-sm font-bold text-white">Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-blue-400" />
              <span>Education & Qualification</span>
            </h3>
          </div>

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl border border-gray-800/80 rounded-2xl p-6 sm:p-8
                           hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <FaGraduationCap className="text-2xl" />
                  </div>

                  <div className="space-y-2 flex-1 w-full">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h4 className="text-xl sm:text-2xl font-bold text-white">{edu.degree}</h4>
                      <span className="text-xs px-3.5 py-1.5 border border-blue-500/30 bg-blue-500/10 rounded-full text-blue-300 font-medium">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-blue-400 font-semibold text-sm sm:text-base">• {edu.institution}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-10 pt-6">
          <div className="text-center space-y-3">
            <h3 className="text-3xl lg:text-4xl font-extrabold text-white">Technical Stack & Skills</h3>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Technologies, frameworks, and developer tools I utilize to craft modern applications.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105 border border-blue-400/30"
                    : "bg-gray-900/80 text-gray-400 border border-gray-800 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.Icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-b from-gray-900/80 to-gray-950/80 border border-gray-800/80 rounded-2xl p-5 flex flex-col items-center text-center
                             hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="text-blue-400 group-hover:text-white text-2xl transition-colors" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

