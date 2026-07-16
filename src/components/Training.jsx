import { useEffect, useRef } from "react";
import { config } from "./data/config";

export default function Training() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll(".train-reveal").forEach((el, i) => {
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
    section.querySelectorAll(".train-reveal").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const { title, provider, certificate, image, points } = config.training;

  return (
    <section className="section" id="training" ref={sectionRef}>
      <p className="section-label train-reveal">Training</p>
      <div
        className="train-reveal"
        style={{
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "16px",
          padding: "48px 40px",
          background: "rgba(255,255,255,0.015)",
          marginTop: "40px",
          position: "relative",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: image ? "1.3fr 1fr" : "1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "24px" }}>
            <div>
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, marginBottom: "6px" }}>
                {title}
              </h3>
              <span style={{ fontSize: "14px", color: "var(--accent)", fontWeight: 400 }}>{provider}</span>
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
              alt={`${title} certificate`}
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