import { Link } from "react-scroll";
import my1 from "../../assets/main/my1.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-linear-to-br from-gray-900 via-[#0a0e27] to-black text-white flex items-center px-6 py-28 lg:px-12 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          {/* Status Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
            </span>
            <span className="text-blue-400 text-sm font-medium">
              Available for Freelance
            </span>
          </div> */}

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-5xl lg:text-6xl font-bold">Hi, I'm</h1>
            <h1 className="inline-block text-5xl lg:text-7xl font-extrabold bg-linear-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient py-1 leading-tight">
              Thilina Rodrigo
            </h1>
          </div>

          {/* Role */}
          <div className="flex items-center gap-3">
            <div className="h-1 w-1 bg-blue-500 rounded-full animate-pulse" />
            <p className="text-xl lg:text-2xl text-gray-300 font-semibold">
              Full Stack Developer | CS Undergraduate 
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-400 max-w-xl leading-relaxed text-base lg:text-lg">
            Building scalable applications and intuitive user experiences with
            modern technologies. Turning complex problems into elegant solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group flex items-center gap-2 px-8 py-3.5 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              View Portfolio
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              to="contact"
              smooth
              duration={500}
              className="px-8 py-3.5 border-2 border-gray-700 hover:border-blue-500 rounded-xl font-semibold hover:bg-blue-500/10 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Hire Me
            </Link>

            <a
              href="/cv.pdf"
              download
              title="Download CV"
              className="group flex items-center justify-center p-3.5 border-2 border-green-500/40 hover:border-green-500 rounded-xl hover:bg-green-500/10 hover:scale-105 transition-all duration-300"
            >
              <div className="text-green-500 w-5 h-5 group-hover:animate-bounce items-center flex">
                <HiDownload size={24}/>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3.5 bg-gray-800/50 border border-gray-700 hover:border-gray-500 rounded-xl hover:scale-110 hover:-rotate-6 transition-all duration-300"
            >
              <div className="text-gray-400 group-hover:text-white w-6 h-6">
                <FaGithub size={24} />
              </div>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3.5 bg-gray-800/50 border border-gray-700 hover:border-blue-500 rounded-xl hover:scale-110 hover:rotate-6 transition-all duration-300"
            >
              <div className="text-gray-400 group-hover:text-blue-500 w-6 h-6">
                <FaLinkedin size={24} />
              </div>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3.5 bg-gray-800/50 border border-gray-700 hover:border-blue-400 rounded-xl hover:scale-110 hover:-rotate-6 transition-all duration-300"
            >
              <div className="text-gray-400 group-hover:text-blue-400 w-6 h-6">
                <FaTwitter size={24} />
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 lg:w-112.5 lg:h-112.5 bg-linear-to-r from-blue-600/25 to-purple-600/25 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="relative group">
              <img
                src={my1}
                alt="Thilina Rodrigo"
                className="w-80 lg:w-112.5 object-contain drop-shadow-[0_35px_70px_rgba(59,130,246,0.3)] transition-all duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-72 h-72 lg:w-96 lg:h-96 border-2 border-blue-500/20 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Open to Work */}
            <div className="mt-8">
              <div className="flex items-center gap-2 px-6 py-2.5 bg-gray-900/90 border border-green-500/40 rounded-full backdrop-blur-md shadow-xl shadow-green-500/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-white font-semibold text-sm">
                  Open to Work
                </span>
              </div>
            </div>
          </div>

          {/* Floating Icon */}
          {/* <div className="absolute -top-6 -right-6 lg:top-0 lg:right-0 w-16 h-16 border-2 border-blue-500/40 rounded-2xl bg-gray-900/90 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:rotate-12 hover:border-blue-500/70 hover:shadow-xl hover:shadow-blue-500/30 group">
            <svg
              className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div> */}

          <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-purple-500/20 rounded-full animate-pulse hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
