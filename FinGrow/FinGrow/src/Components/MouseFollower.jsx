import React, { useEffect, useState, useRef } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringHeading, setHoveringHeading] = useState(false);
  const [activeElement, setActiveElement] = useState(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const updateMouse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);

      const letterElement = el?.closest('span[data-letter]');
      const isHeading = el && (
        /^H[1-6]$/.test(el.tagName) || 
        el.closest('h1[data-animated-text]') || 
        letterElement
      );

      if (isHeading) {
        setHoveringHeading(true);
        const target = letterElement || el;
        if (target !== activeElement) {
          if (activeElement) {
            activeElement.style.transform = "scale(1)";
          }
          target.style.transform = "scale(1.2)";
          target.style.transition = "transform 0.2s ease-in-out";
          setActiveElement(target);
        }
      } else {
        setHoveringHeading(false);
        if (activeElement) {
          activeElement.style.transform = "scale(1)";
          setActiveElement(null);
        }
      }
    };

    window.addEventListener("mousemove", updateMouse);
    return () => {
      window.removeEventListener("mousemove", updateMouse);
      if (activeElement) {
        activeElement.style.transform = "scale(1)";
      }
    };
  }, [activeElement]);

  return (
    <div
      ref={followerRef}
      className={`fixed top-0 left-0 pointer-events-none z-[999] rounded-full transition-all duration-200 ease-in-out ${
        hoveringHeading ? "w-20 h-20" : "w-4 h-4"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        background: hoveringHeading
          ? "radial-gradient(circle, transparent 30%, #ffdab9 70%)"
          : "radial-gradient(circle, #22c55e 0%, #16a34a 100%)",
      }}
    />
  );
};

export default MouseFollower;