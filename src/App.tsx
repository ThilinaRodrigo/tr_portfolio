import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Publications from "./components/sections/Publications";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contacts";
import Services from './components/sections/Services'

function App() {
  return (
    <div className='relative w-full min-h-screen bg-gray-950 text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden'>
      {/* Global Animated Background */}
      <AnimatedBackground />

      {/* Navbar fixed at top */}
      <Navbar />

      {/* Main page sections */}
      <Hero />
      <Services />
      <About />
      <Projects />
      <Publications />
      <Certificates />
      <Contact />

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}

export default App;
