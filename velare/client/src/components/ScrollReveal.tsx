/*
 * ScrollReveal — Cinematic fade-in-up animation on scroll
 * Staggered delays for child elements create editorial reveal effect.
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const directionMap = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    none: { y: 0, x: 0 },
  };

  const offset = directionMap[direction];

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: offset.y, x: offset.x }}
        animate={
          isVisible
            ? { opacity: 1, y: 0, x: 0 }
            : { opacity: 0, y: offset.y, x: offset.x }
        }
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
