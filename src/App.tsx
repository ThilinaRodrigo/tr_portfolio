import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contacts";
import Services from './components/sections/Services'

function App() {
  return (
    <div>
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Main page sections */}
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}

export default App;
