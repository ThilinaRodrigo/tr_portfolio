import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { HiMenu, HiX, HiDownload } from "react-icons/hi";
import resume from "../data/cv/ThilinaRodrigo_cv_v2.pdf";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Services", to: "services" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Publications", to: "publications" },
    { name: "Certificates", to: "certificates" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-950/60 backdrop-blur-xl text-white px-6 lg:px-8 py-3.5 z-50 border-b border-gray-800/60 shadow-xl shadow-black/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={500}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img
            src={logo}
            alt="Thilina Rodrigo"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/40 group-hover:ring-blue-500/80 transition-all duration-300 group-hover:scale-105"
          />
          <span className="text-lg lg:text-xl font-extrabold bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            Thilina Rodrigo
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={500}
              offset={-80}
              onSetActive={() => setActiveSection(link.to)}
              className={`cursor-pointer px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300
                ${
                  activeSection === link.to
                    ? "text-blue-400 bg-blue-500/15 border border-blue-500/30 shadow-md shadow-blue-500/10"
                    : "text-gray-300 hover:text-blue-300 hover:bg-blue-500/10 border border-transparent"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Download CV Button */}
          <a
            href={resume}
            download
            className="group ml-3 flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/45 hover:scale-105"
          >
            <span className="w-4 h-4 group-hover:animate-bounce flex items-center">
              <HiDownload />
            </span>
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-gray-900/80 border border-gray-800 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiX size={22} color="#60a5fa" />
          ) : (
            <HiMenu size={22} color="#60a5fa" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-2xl border-b border-gray-800/80 shadow-2xl transition-all duration-300 ease-in-out origin-top
          ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
      >
        <div className="px-6 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={500}
              offset={-80}
              onSetActive={() => setActiveSection(link.to)}
              onClick={() => setIsOpen(false)}
              className={`block cursor-pointer px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                ${
                  activeSection === link.to
                    ? "text-blue-400 bg-blue-500/15 border border-blue-500/30 shadow-md shadow-blue-500/10"
                    : "text-gray-300 hover:text-blue-300 hover:bg-blue-500/5 border border-transparent"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Download CV */}
          <a
            href={resume}
            download
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 mt-4 text-sm"
          >
            <span className="w-4 h-4 flex items-center">
              <HiDownload />
            </span>
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
