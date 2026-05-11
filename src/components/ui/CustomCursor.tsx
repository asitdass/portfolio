"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { damping: 25, stiffness: 250, mass: 0.4 });
  const ringY = useSpring(cursorY, { damping: 25, stiffness: 250, mass: 0.4 });

  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      (window.matchMedia("(hover: none)").matches ||
        "ontouchstart" in window);
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const tag = target.tagName?.toLowerCase();
      const interactive =
        tag === "a" ||
        tag === "button" ||
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        tag === "label" ||
        target.closest("a, button, [role='button'], input, textarea, select, label") !== null ||
        getComputedStyle(target).cursor === "pointer";

      setIsPointer(Boolean(interactive));
    };

    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseenter", handleEnter);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          width: 6,
          height: 6,
          backgroundColor: "#ffffff",
          opacity: isVisible ? 1 : 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          width: isPointer ? 48 : 28,
          height: isPointer ? 48 : 28,
          border: "1.5px solid #ffffff",
          opacity: isVisible ? 0.6 : 0,
          translateX: "-50%",
          translateY: "-50%",
          transition: "width 0.18s ease, height 0.18s ease",
        }}
      />
    </>
  );
}
