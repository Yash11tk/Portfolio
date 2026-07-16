import { useEffect, useRef } from "react";
import { config } from "./data/config";

export default function Certificates() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll(".cert-reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    section.querySelectorAll(".cert-reveal").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="certificates" ref={sectionRef}>
      <p className="section-label cert-reveal">Certificates</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "2px",
          marginTop: "40px",
        }}
      >
        {config.certificates.map((cert, i) => (
          <a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-reveal"
            style={{
              display: "block",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.015)",
              transition: "border-color 0.3s, background 0.3s",
              textDecoration: "none",
              color: "inherit",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(194,164,255,0.3)";
              e.currentTarget.style.background = "rgba(194,164,255,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              e.currentTarget.style.background = "rgba(255,255,255,0.015)";
            }}
          >
            {cert.image && (
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) => {
                    e.currentTarget.parentElement.style.display = "none";
                  }}
                />
              </div>
            )}
            <div style={{ padding: "32px 28px" }}>
              <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--accent)", marginBottom: "12px", opacity: 0.8 }}>
                {cert.issuer}
              </div>
              <div style={{ fontSize: "16px", fontWeight: 500, lineHeight: "1.4", marginBottom: "16px" }}>
                {cert.title}
              </div>
              <div style={{ fontSize: "12px", color: "var(--accent)", opacity: 0.7 }}>
                View Certificate ↗
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}