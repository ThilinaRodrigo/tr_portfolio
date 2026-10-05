import { Link } from "react-scroll";
import { motion } from "framer-motion";
import my1 from "../../assets/main/my1.png";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { ArrowRight, Code2, Terminal, CheckCircle2 } from "lucide-react";
import { profiles } from "../../data/profiles";
import resume from "../../data/cv/ThilinaRodrigo_cv_v2.pdf";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-transparent text-white flex items-center px-6 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-20 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* LEFT CONTENT (Cols 1-7) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 lg:col-span-7 order-2 lg:order-1"
        >
          {/* Status pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for New Opportunities</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Hi, I’m <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-600 bg-clip-text text-transparent">
                Thilina Rodrigo
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-200 flex flex-wrap items-center gap-2 pt-1">
              <span>Full-Stack Developer</span>
              <span className="text-blue-500">•</span>
              <span className="text-gray-400 font-normal">CS Undergraduate</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
            I architect and build high-performance web applications, microservices, and mobile solutions with clean code, modern UI/UX, and robust cloud infrastructure.
          </p>

          {/* Key highlights strip */}
          <div className="flex flex-wrap gap-4 pt-1 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>Clean Architecture</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>Microservices & REST APIs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>Modern Frontend Design</span>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group cursor-pointer px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={resume}
              download
              title="Download CV"
              className="flex items-center gap-2 px-6 py-3.5 bg-gray-900/90 hover:bg-gray-800 text-gray-200 hover:text-white border border-gray-700/80 hover:border-gray-600 rounded-xl font-medium text-sm transition-all shadow-md hover:scale-[1.02]"
            >
              <HiDownload className="w-5 h-5 text-emerald-400" />
              <span>Download CV</span>
            </a>

            <Link
              to="contact"
              smooth
              duration={500}
              className="cursor-pointer px-6 py-3.5 bg-transparent border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white rounded-xl font-medium text-sm transition"
            >
              Contact Me
            </Link>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-800/60 max-w-lg">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2">
              Connect:
            </span>

            <a
              href={profiles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/80 hover:bg-gray-800 border border-gray-800 hover:border-gray-600 text-gray-300 hover:text-white rounded-xl transition-all shadow-sm hover:scale-105"
              title="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href={profiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/80 hover:bg-gray-800 border border-gray-800 hover:border-blue-500/50 text-gray-300 hover:text-blue-400 rounded-xl transition-all shadow-sm hover:scale-105"
              title="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <a
              href={profiles.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/80 hover:bg-gray-800 border border-gray-800 hover:border-blue-400/50 text-gray-300 hover:text-blue-400 rounded-xl transition-all shadow-sm hover:scale-105"
              title="Facebook"
            >
              <FaFacebook className="w-4 h-4" />
            </a>

            <a
              href={profiles.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/80 hover:bg-gray-800 border border-gray-800 hover:border-pink-500/50 text-gray-300 hover:text-pink-400 rounded-xl transition-all shadow-sm hover:scale-105"
              title="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE WITH FLOATING BADGES (Cols 8-12) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative"
        >
          {/* Main Avatar Card Frame */}
          <div className="relative group max-w-sm sm:max-w-md w-full">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-gray-800/80 via-gray-900/90 to-gray-950 border border-gray-700/60 shadow-2xl backdrop-blur-xl">
              <img
                src={my1}
                alt="Thilina Rodrigo"
                className="w-full h-[420px] sm:h-[480px] object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating Glass Badge 1 - Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-4 left-2 sm:-left-4 px-4 py-2.5 rounded-2xl bg-gray-900/90 border border-gray-700/80 backdrop-blur-xl shadow-xl flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-medium leading-none">Specialization</p>
                <p className="text-xs font-bold text-white mt-1">Full-Stack & Cloud</p>
              </div>
            </motion.div>

            {/* Floating Glass Badge 2 - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-5 right-2 sm:-right-4 px-4 py-2.5 rounded-2xl bg-gray-900/90 border border-gray-700/80 backdrop-blur-xl shadow-xl flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-medium leading-none">Architecture</p>
                <p className="text-xs font-bold text-white mt-1">Scalable Microservices</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

