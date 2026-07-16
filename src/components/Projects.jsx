import { useEffect, useRef } from "react";
import { config } from "./data/config";

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll(".proj-reveal");
    items.forEach((el) => { el.style.opacity = "0"; el.style.transform = "translateY(40px)"; });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => {
              el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
              el.style.opacity = "1"; el.style.transform = "translateY(0)";
            }, i * 100);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    observer.observe(section);
    section.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
        card.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
      });
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="projects" ref={sectionRef}>
      <p className="section-label proj-reveal">Projects</p>
      <div className="projects-grid proj-reveal">
        {config.projects.map((project) => (
          <div className="project-card" key={project.id}>
            <span className="project-num">0{project.id}</span>
            <div className="project-cat">{project.category}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
                borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "16px" }}>
              <span className="project-tech" style={{ borderTop: "none", paddingTop: 0 }}>
                {project.technologies}
              </span>
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                 style={{ fontSize: "12px", color: "var(--accent)", opacity: 0.8, whiteSpace: "nowrap",
                   flexShrink: 0, marginLeft: "12px" }}>
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}