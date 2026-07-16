import { useEffect, useRef, useState } from "react";
import { config } from "./data/config";

export default function LoadingScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);
  const [expanding, setExpanding] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    let n = 0;
    intervalRef.current = setInterval(() => {
      if (n <= 60) {
        n += Math.round(4 * Math.random() + 1);
        setPercent(Math.min(n, 100));
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
          n += 1;
          setPercent(Math.min(n, 100));
          if (n >= 100) {
            clearInterval(intervalRef.current);
            setComplete(true);
            // ✅ Auto-open after 0.6s — no click needed
            setTimeout(() => {
              setExpanding(true);
              setTimeout(() => onComplete(), 900);
            }, 600);
          }
        }, 30);
      }
    }, 60);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const marqueeItems = Array(4)
    .fill(["Full Stack Developer", "React Enthusiast", "Problem Solver"])
    .flat();

  return (
    <div className="loading-screen">
      <div className="loading-header">
        <span className="loader-title">{config.developer.fullName}</span>
      </div>

      <div className="loading-marquee-wrap">
        <div className="loading-marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i}>&nbsp; {item} &nbsp;</span>
          ))}
        </div>
      </div>

      <div
        className={`loading-button-wrap ${expanding ? "expanding" : ""}`}
        onMouseMove={handleMouseMove}
      >
        <div className="loading-hover-glow" />
        <div className="loading-btn">
          Loading <span className="loading-pct">{percent}%</span>
        </div>
        <div className="loading-complete-label">Welcome</div>
      </div>
    </div>
  );
}