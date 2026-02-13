import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { profiles } from "../data/profiles";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", to: "hero" },
    { name: "Portfolio", to: "projects" },
    { name: "Services", to: "services" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "Backend Systems",
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: profiles.github, label: "GitHub" },
    { icon: <FaLinkedin />, url: profiles.linkedin, label: "LinkedIn" },
    { icon: <FaFacebook />, url: profiles.facebook, label: "Facebook" },
    { icon: <FaInstagram />, url: profiles.instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 via-[#0a0e27] to-black text-white border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Thilina Rodrigo
            </h3>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Building robust, scalable, and aesthetic digital solutions.
              Expertise in full-stack development.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 hover:scale-110 transition-all duration-300"
                >
                  <span className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer inline-block hover:translate-x-1 duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Thilina Rodrigo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
