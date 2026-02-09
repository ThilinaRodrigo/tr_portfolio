import { FaGraduationCap } from "react-icons/fa";

export default function About() {
  const education = [
    {
      degree: "BTEC HND in Computing (Software Engineering)",
      institution: "ESOFT Metro Campus",
      period: "2023 - 2025",
      description:
        "Graduated with a specialization in Software Engineering, with strong foundations in application development and system design.",
    },
    {
      degree: "BEng (Hons) in Software Engineering",
      institution: "London Metropolitan University (UK)",
      period: "2025 - 2026",
      description:
        "I have a strong expertise in the field of software engineering and a focus on industry-relevant skills and practices.",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "React Native",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Java", "C#", ".NET", "Php"],
    },
    {
      category: "Database",
      items: ["SQL", "MySQL", "Firebase"],
    },
    {
      category: "Tools",
      items: ["Git", "Github", "Expo", "Figma", "VS Code", "Visual Studio"],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white px-8 py-20"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* About Me Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hello! I'm Jeyaprashandh, a passionate Software Engineer and Full
                Stack Developer based in Sri Lanka.
              </p>
              
              <p>
                I design and develop services for customers specializing in creating
                stylish, modern websites, web services, and online stores. My
                passion is to craft digital user experiences that are intuitive,
                engaging, and visually appealing.
              </p>
              
              <p>
                In addition to web development, I also build mobile applications for
                both Android platforms. I focus on creating apps that are fast, user-
                friendly, and seamlessly integrated with web services, providing a
                complete digital experience across devices.
              </p>
            </div>
          </div>

          {/* Right - Placeholder for Image */}
          <div className="relative h-96 lg:h-full min-h-100">
            <div className="absolute inset-0 bg-linear-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-800"></div>
          </div>
        </div>

        {/* Experience & Education Section */}
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">
            Experience & Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaGraduationCap size={24} color="#22c55e" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <h3 className="text-xl lg:text-2xl font-bold">
                        {edu.degree}
                      </h3>
                      <span className="text-sm px-4 py-1 border border-gray-700 rounded-full text-gray-400 w-fit">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-blue-400 font-medium">
                      • {edu.institution}
                    </p>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">
            Technical Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Category Title */}
                <h3 className="text-xl font-bold mb-4 pb-3 border-b border-gray-700">
                  {skillGroup.category}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}