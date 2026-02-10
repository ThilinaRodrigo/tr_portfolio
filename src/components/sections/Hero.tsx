import { Link } from "react-scroll";
import { motion } from "framer-motion";
import my1 from "../../assets/main/my1.png";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { profiles } from "../../data/profiles";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-linear-to-br from-gray-900 via-[#0a0e27] to-black text-white flex items-center px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 order-2 lg:order-1"
        >
          <span className="inline-block px-4 py-1.5 text-sm border border-blue-500/40 rounded-full text-blue-400">
            Available for Opportunities
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I’m <br />
            <span className="bg-linear-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Thilina Rodrigo
            </span>
          </h1>

          <p className="text-lg text-gray-300 font-medium">
            Full-Stack Developer specializing in modern web applications
          </p>

          <p className="text-gray-400 max-w-xl leading-relaxed">
            I design and develop scalable, high-performance applications with a
            strong focus on clean architecture, usability, and maintainability.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="projects"
              smooth
              duration={500}
              className="cursor-pointer px-8 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Work
            </Link>

            <Link
              to="contact"
              smooth
              duration={500}
              className="cursor-pointer px-8 py-3 border border-gray-600 rounded-lg hover:border-blue-500 transition"
            >
              Contact
            </Link>

            <a
              href="/cv.pdf"
              download
              title="Download CV"
              className="p-3 border border-gray-700 rounded-lg hover:border-green-500 hover:bg-green-500/10 transition"
            >
              <HiDownload className="w-6 h-6 text-green-500" />
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href={profiles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-700 rounded-lg hover:border-gray-500 transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href={profiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-700 rounded-lg hover:border-blue-500 transition"
            >
              <FaLinkedin className="w-5 h-5 text-blue-500" />
            </a>

            <a
              href={profiles.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-700 rounded-lg hover:border-blue-400 transition"
            >
              <FaFacebook className="w-5 h-5 text-blue-400" />
            </a>

            <a
              href={profiles.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-700 rounded-lg hover:border-pink-500 transition"
            >
              <FaInstagram className="w-5 h-5 text-pink-500" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <img
            src={my1}
            alt="Thilina Rodrigo"
            className="w-72 sm:w-80 lg:w-105 rounded-2xl  transition duration-500 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
