import { useEffect, useRef } from "react";
import { config } from "./data/config";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll(".about-reveal");
    items.forEach((el) => { el.style.opacity = "0"; el.style.transform = "translateY(40px)"; });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => {
              el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 150);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about-section" id="about" ref={sectionRef}>
      <p className="section-label about-reveal">About Me</p>
      <p className="about-text about-reveal">
        I'm a <span className="highlight">Computer Science Engineering</span> student at{" "}
        <span className="highlight">Lovely Professional University</span>, Punjab. I have a strong
        interest in <span className="highlight">full-stack web development</span> and{" "}
        <span className="highlight">problem solving</span> using data structures and algorithms.
        I enjoy building scalable web applications and solving challenging coding problems while
        continuously learning new technologies.
      </p>
      <div className="about-meta about-reveal">
        <div className="about-meta-item">
          <span className="about-meta-item-label">Location</span>
          <span className="about-meta-item-value">{config.social.location}</span>
        </div>
        <div className="about-meta-item">
          <span className="about-meta-item-label">Education</span>
          <span className="about-meta-item-value">B.Tech CSE, LPU</span>
        </div>
        <div className="about-meta-item">
          <span className="about-meta-item-label">CGPA</span>
          <span className="about-meta-item-value">7.3</span>
        </div>
        <div className="about-meta-item">
          <span className="about-meta-item-label">Status</span>
          <span className="about-meta-item-value" style={{ color: "var(--accent)" }}>
            Available for Work
          </span>
        </div>
        <div className="about-meta-item">
          <span className="about-meta-item-label">Focus</span>
          <span className="about-meta-item-value">MERN Stack</span>
        </div>
        <div className="about-meta-item">
          <span className="about-meta-item-label">LeetCode</span>
          <span className="about-meta-item-value">200+ Problems</span>
        </div>
      </div>
    </section>
  );
}