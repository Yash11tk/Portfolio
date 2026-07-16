import { config } from "./data/config";

const row1 = [...config.skills.languages, ...config.skills.frameworks,
              ...config.skills.languages, ...config.skills.frameworks];

const row2 = [...config.skills.tools, ...config.skills.soft,
              ...config.skills.tools, ...config.skills.soft, ...config.skills.tools];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-title-wrap">
        <p className="section-label" style={{ textAlign: "center", marginBottom: "16px" }}>
          Tech Stack
        </p>
        <h2 className="skills-heading">Technologies I Work With</h2>
      </div>
      <div className="skills-marquee" style={{ marginBottom: "16px" }}>
        <div className="skills-marquee-track">
          {row1.map((skill, i) => (
            <span key={i} className={i % 3 === 0 ? "accent" : ""}>{skill}</span>
          ))}
        </div>
      </div>
      <div className="skills-marquee">
        <div className="skills-marquee-track reverse">
          {row2.map((skill, i) => (
            <span key={i} className={i % 4 === 1 ? "accent" : ""}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}