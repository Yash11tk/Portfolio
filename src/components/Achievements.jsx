import { useEffect, useRef } from "react";
import { config } from "./data/config";

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll(".ach-reveal");
    items.forEach((el) => { el.style.opacity = "0"; el.style.transform = "translateY(40px)"; });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => {
              el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
              el.style.opacity = "1"; el.style.transform = "translateY(0)";
            }, i * 130);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.15 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="achievements" ref={sectionRef}>
      <p className="section-label ach-reveal">Achievements</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "40px" }}>
        {config.achievements.map((item, i) => (
          <div key={i} className="ach-reveal"
               style={{ display: "flex", alignItems: "center", gap: "24px", padding: "28px 32px",
                 border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)",
                 transition: "border-color 0.3s" }}
               onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(194,164,255,0.25)"}
               onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}>
            <div style={{ fontSize: "36px", flexShrink: 0 }}>{item.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "18px", fontWeight: 600, marginBottom: "6px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", lineHeight: "1.6", opacity: 0.6, fontWeight: 300 }}>
                {item.description}
              </div>
            </div>
            <div style={{ fontSize: "24px", fontWeight: 700, color: "var(--accent)",
                opacity: 0.4, flexShrink: 0 }}>
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}