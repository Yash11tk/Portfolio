import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let curX = 0, curY = 0;
    let rafId;

    const onMove = (e) => { curX = e.clientX; curY = e.clientY; };

    const render = () => {
      cursor.style.left = `${curX - 25}px`;
      cursor.style.top = `${curY - 25}px`;
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="cursor-dot" ref={cursorRef} />;
}