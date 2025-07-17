import React, { useEffect, useState } from "react";

const SimpleMouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full bg-green-500"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        width: "16px",  // 2x scaled from original 8px
        height: "16px", // 2x scaled from original 8px
        transition: "transform 0.05s ease-out", // Smooth following
      }}
    />
  );
};

export default SimpleMouseFollower;