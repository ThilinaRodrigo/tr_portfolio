import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { ArrowUp, Code2 } from "lucide-react";
import { profiles } from "../data/profiles";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", to: "hero" },
    { name: "Services", to: "services" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Publications", to: "publications" },
    { name: "Certificates", to: "certificates" },
    { name: "Contact", to: "contact" },
  ];

  const services = [
    "Full-Stack Web Apps",
    "Microservices Architecture",
    "Mobile App Development",
    "Deep Learning & AI Research",
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: profiles.github, label: "GitHub" },
    { icon: <FaLinkedin />, url: profiles.linkedin, label: "LinkedIn" },
    { icon: <FaFacebook />, url: profiles.facebook, label: "Facebook" },
    { icon: <FaInstagram />, url: profiles.instagram, label: "Instagram" },
  ];

  return (
    <footer className="relative bg-transparent text-white border-t border-gray-800/40 overflow-hidden backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand & Bio */}
          <div className="space-y-5 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Thilina Rodrigo"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/40"
              />
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Thilina Rodrigo
              </h3>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm max-w-md">
              Software Engineer & CS Undergraduate building robust, scalable web applications, microservices, and deep transfer learning research tools.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-gray-900/80 hover:bg-gray-800 border border-gray-800/80 hover:border-blue-500/50 rounded-xl text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105 shadow-sm"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer inline-block hover:translate-x-1 duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Expertise
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 font-medium">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© {currentYear} Thilina Rodrigo. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-gray-400">
              <Code2 className="w-4 h-4 text-blue-400" />
              <span>Engineered with React & TypeScript</span>
            </div>

            {/* Back to top button */}
            <Link
              to="hero"
              smooth
              duration={500}
              className="p-2.5 rounded-xl bg-blue-600/15 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-400 text-blue-300 hover:text-white transition-all duration-300 cursor-pointer shadow-sm hover:scale-110"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
