import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Training from "./components/Training";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
          <Cursor />
          <Navbar />
          <main>
            <Landing />
            <div className="divider" />
            <About />
            <div className="divider" />
            <WhatIDo />
            <Skills />
            <div className="divider" style={{ marginTop: "0" }} />
            <Internship />
            <div className="divider" />
            <Projects />
            <div className="divider" />
            <Training />
            <div className="divider" />
            <Certificates />
            <div className="divider" />
            <Achievements />
            <div className="divider" />
            <Education />
            <div className="divider" />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}