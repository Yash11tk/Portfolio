import { useEffect, useRef } from "react";
import { config } from "./data/config";

const ICONS = ["🎓", "🏫", "📚"];

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".edu-reveal");
    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((el, i) => {
              setTimeout(() => {
                el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 130);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="education" ref={sectionRef}>
      {/* Section label */}
      <p
        className="edu-reveal"
        style={{
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "16px",
          opacity: 0.7,
        }}
      >
        Education
      </p>

      {/* Subtitle */}
      <p
        className="edu-reveal"
        style={{
          fontSize: "14px",
          opacity: 0.45,
          marginBottom: "40px",
          fontWeight: 300,
        }}
      >
        Academic journey and qualifications
      </p>

      {/* Education cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {config.education.map((item, i) => (
          <div
            key={i}
            className="edu-reveal"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(194,164,255,0.25)";
              e.currentTarget.style.background = "rgba(194,164,255,0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              e.currentTarget.style.background = "rgba(255,255,255,0.015)";
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              padding: "32px",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.015)",
              transition: "border-color 0.3s, background 0.3s",
            }}
          >
            {/* Icon box */}
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "12px",
                fontSize: "22px",
                background: "rgba(194,164,255,0.1)",
                border: "1px solid rgba(194,164,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {ICONS[i]}
            </div>

            {/* Degree & Institution */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "clamp(15px, 1.5vw, 18px)",
                  fontWeight: 600,
                  marginBottom: "4px",
                  color: "var(--fg)",
                  lineHeight: "1.3",
                }}
              >
                {item.degree}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "var(--accent)",
                  fontWeight: 400,
                  opacity: 0.85,
                }}
              >
                {item.institution}
              </div>
            </div>

            {/* Grade & Period */}
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  borderRadius: "100px",
                  border: "1px solid rgba(194,164,255,0.25)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--accent)",
                  marginBottom: "8px",
                }}
              >
                {item.grade}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  opacity: 0.4,
                  fontWeight: 300,
                }}
              >
                {item.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}