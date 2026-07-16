import { useEffect, useRef } from "react";
import { config } from "./data/config";

export default function Internship() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll(".int-reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 120);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    section.querySelectorAll(".int-reveal").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const { company, role, period, certificate, image, points } = config.internship;

  return (
    <section className="section" id="internship" ref={sectionRef}>
      <p className="section-label int-reveal">Internship</p>
      <div
        className="int-reveal"
        style={{
          border: "1px solid rgba(194,164,255,0.15)",
          borderRadius: "16px",
          padding: "48px 40px",
          background: "rgba(194,164,255,0.03)",
          marginTop: "40px",
          position: "relative",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: image ? "1.3fr 1fr" : "1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "2px",
            background: "linear-gradient(90deg, var(--accent), transparent)",
          }}
        />
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "24px" }}>
            <div>
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 600, marginBottom: "6px" }}>
                {company}
              </h3>
              <span style={{ fontSize: "14px", color: "var(--accent)", fontWeight: 400, letterSpacing: "0.5px" }}>
                {role} &middot; {period}
              </span>
            </div>
            <a
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 24px",
                borderRadius: "100px",
                border: "1px solid rgba(194,164,255,0.3)",
                fontSize: "13px",
                color: "var(--accent)",
                fontWeight: 500,
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              View Certificate ↗
            </a>
          </div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {points.map((pt, i) => (
              <li key={i} style={{ display: "flex", gap: "12px", fontSize: "14px", lineHeight: "1.7", opacity: 0.7, fontWeight: 300 }}>
                <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}>→</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
        {image && (
          <a href={certificate} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={`${company} certificate`}
              loading="lazy"
              style={{
                width: "100%",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "block",
              }}
              onError={(e) => {
                e.currentTarget.parentElement.style.display = "none";
              }}
            />
          </a>
        )}
      </div>
    </section>
  );
}