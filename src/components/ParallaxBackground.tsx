import React, { useState, useEffect } from "react";

const ParallaxBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculatePosition = (baseX: number, baseY: number, depth: number) => {
    const x = baseX - (mousePosition.x / window.innerWidth - 0.5) * 50 * depth;
    const y = baseY - (mousePosition.y / window.innerHeight - 0.5) * 50 * depth;
    return { transform: `translate(${x}px, ${y}px)` };
  };

  return (
    <div className="parallax-background">
      <div
        className="shape shape-1"
        style={calculatePosition(100, 200, 1)}
      ></div>
      <div
        className="shape shape-2"
        style={calculatePosition(window.innerWidth - 200, 150, 2)}
      ></div>
      <div
        className="shape shape-3"
        style={calculatePosition(200, window.innerHeight - 200, 1.5)}
      ></div>
      <div
        className="shape shape-4"
        style={calculatePosition(
          window.innerWidth - 300,
          window.innerHeight - 150,
          1
        )}
      ></div>
    </div>
  );
};

export default ParallaxBackground;
