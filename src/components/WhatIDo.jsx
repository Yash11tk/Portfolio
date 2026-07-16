import { useEffect, useRef } from "react";

const SERVICES = [
  { num: "01", title: "Frontend Development",
    desc: "Building pixel-perfect, responsive UIs with React and modern CSS. Focused on performance and delightful user experiences." },
  { num: "02", title: "Backend Development",
    desc: "Designing scalable REST APIs with Node.js and Express. Database design with MongoDB, MySQL, and PostgreSQL." },
  { num: "03", title: "Problem Solving",
    desc: "Competitive programmer with 200+ LeetCode problems solved. Strong foundation in DSA. Earned 50 Days Badge 2026." },
];

export default function WhatIDo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll(".what-reveal");
    items.forEach((el) => { el.style.opacity = "0"; el.style.transform = "translateY(40px)"; });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => {
              el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 120);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.15 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="what-section" ref={sectionRef} id="services">
      <p className="section-label what-reveal">What I Do</p>
      <div className="what-grid">
        {SERVICES.map((s) => (
          <div className="what-card what-reveal" key={s.num}>
            <div className="what-card-num">{s.num}</div>
            <div className="what-card-title">{s.title}</div>
            <div className="what-card-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}