import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

interface HoverBorderGradientProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  clockwise?: boolean;
}

export function HoverBorderGradient({
  children,
  className = "",
  duration = 2,
  clockwise = true,
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "RIGHT", "BOTTOM", "LEFT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex + 1) % directions.length
      : (currentIndex - 1 + directions.length) % directions.length;
    return directions[nextIndex];
  };

  const gradientMap: Record<Direction, string> = {
    TOP: "radial-gradient(20% 50% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT: "radial-gradient(20% 50% at 100% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM: "radial-gradient(20% 50% at 50% 100%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(20% 50% at 0% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlightGradient = "radial-gradient(70% 100% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute -inset-[2px] rounded-3xl overflow-hidden"
        initial={{ background: gradientMap[direction] }}
        animate={{
          background: hovered ? highlightGradient : gradientMap[direction],
        }}
        transition={{ duration: duration / 2, ease: "linear" }}
        style={{ filter: "blur(8px)" }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}