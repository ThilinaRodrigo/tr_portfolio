import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { HiMenu, HiX, HiDownload } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Services", to: "services" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md text-white px-6 lg:px-8 py-4 z-50 border-b border-gray-800/50 shadow-lg shadow-black/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Thilina Rodrigo"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/40 hover:ring-blue-500/60 transition-all duration-300"
          />
          <span className="text-lg lg:text-xl font-bold bg-linear-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
            Thilina Rodrigo
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={500}
              offset={-80}
              onSetActive={() => setActiveSection(link.to)}
              className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300
                ${
                  activeSection === link.to
                    ? "text-blue-400 bg-blue-500/10 shadow-lg shadow-blue-500/20"
                    : "text-gray-300 hover:text-blue-400 hover:bg-blue-500/5"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Download CV */}
          <a
            href="/cv.pdf"
            download
            className="group ml-2 flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105"
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
          className="lg:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiX size={24} color="#60a5fa" />
          ) : (
            <HiMenu size={24} color="#60a5fa" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-900/98 backdrop-blur-md border-b border-gray-800/50 shadow-2xl transition-all duration-300 ease-in-out origin-top
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
              className={`block cursor-pointer px-4 py-3 rounded-lg font-medium transition-all duration-300
                ${
                  activeSection === link.to
                    ? "text-blue-400 bg-blue-500/15 border border-blue-500/30 shadow-lg shadow-blue-500/20"
                    : "text-gray-300 hover:text-blue-400 hover:bg-blue-500/5 border border-transparent"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Download CV */}
          <a
            href="/cv.pdf"
            download
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 mt-4"
          >
            <span className="w-5 h-5 flex items-center">
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
