import { useEffect, useRef, useState } from "react";
import { config } from "./data/config";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Dev",
  "Problem Solver",
  "React Engineer",
];

export default function Landing() {
  const sectionRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Cycle through role titles
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Fade-up entrance animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.querySelectorAll(".la").forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 120 + i * 110);
    });
  }, []);

  return (
    <section className="hero" ref={sectionRef} id="home">

      {/* ── Left sidebar: social icons ── */}
      <aside className="hero-sidebar">
        <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="hero-sidebar-icon la" title="GitHub">
          <svg viewBox="0 0 496 512" fill="currentColor" width="18" height="18">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
          </svg>
        </a>
        <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="hero-sidebar-icon la" title="LinkedIn">
          <svg viewBox="0 0 448 512" fill="currentColor" width="17" height="17">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
          </svg>
        </a>
        <a href={config.social.leetcode} target="_blank" rel="noopener noreferrer" className="hero-sidebar-icon la" title="LeetCode">
          <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
          </svg>
        </a>
        <a href={`mailto:${config.social.email}`} className="hero-sidebar-icon la" title="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </aside>

      {/* ── Left: Name block ── */}
      <div className="hero-left">
        <div className="hero-available la">
          <span className="hero-dot" /> Available for Work
        </div>
        <p className="hero-greeting la">Hello! I'm</p>
        <h1 className="hero-name la">
          <span className="hero-name-first">{config.developer.name.toUpperCase()}</span>
          <span className="hero-name-last">
            {config.developer.fullName.split(" ").slice(1).join(" ").toUpperCase()}
          </span>
        </h1>
        <p className="hero-location la">{config.social.location}</p>
        <div className="hero-cta la">
          <a href="#projects" className="hero-btn hero-btn-primary">View My Work</a>
          <a href="#contact" className="hero-btn hero-btn-outline">Get In Touch</a>
        </div>
      </div>

      {/* ── Center: Avatar / glow ── */}
      <div className="hero-center">
        <div className="hero-glow" />
        <div className="hero-avatar la">
          <div className="hero-avatar-inner">
            <span className="hero-avatar-initials">YT</span>
          </div>
        </div>
      </div>

      {/* ── Right: Animated role text ── */}
      <div className="hero-right la">
        <p className="hero-role-pre">An</p>
        <div className="hero-role-wrap">
          <h2
            className="hero-role-text"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)" }}
          >
            {ROLES[roleIndex].toUpperCase()}
          </h2>
        </div>
      </div>

      {/* ── Bottom-right: Resume link ── */}
      <a
        href={config.social.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-resume la"
      >
        RESUME ↗
      </a>

      {/* ── Bottom-left: Scroll hint ── */}
      <div className="hero-scroll la">
        <span className="hero-scroll-line" />
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}