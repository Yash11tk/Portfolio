import Sidebar from "./components/Sidebar"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Training from "./components/Training";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex bg-[#020c1b] text-white min-h-screen">

      <Sidebar />

      <div className="ml-60 w-full">

        <section id="home" className="py-20 px-6">
          <Hero />
        </section>

        <section id="about" className="py-20 px-6">
          <About />
        </section>

        <section id="skills" className="py-20 px-6">
          <Skills />
        </section>

        <section id="internship" className="py-20 px-6">
          <Internship />
        </section>

        <section id="projects" className="py-20 px-6">
          <Projects />
        </section>

        <section id="training" className="py-20 px-6">
          <Training />
        </section>

        <section id="certificates" className="py-20 px-6">
          <Certificates />
        </section>

        {/* ✅ Added Achievements here */}
        <section id="achievements" className="py-20 px-6">
          <Achievements />
        </section>

        <section id="education" className="py-20 px-6">
          <Education />
        </section>
        
        <section id="contact" className="py-20 px-6">
          <Contact />
        </section>

      </div>

    </div>
  );
}

export default App;