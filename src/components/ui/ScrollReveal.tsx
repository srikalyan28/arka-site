"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimationType = "slideUp" | "slideLeft" | "slideRight" | "zoomIn" | "bounceDrop";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

const variants = {
  slideUp: {
    hidden: { opacity: 0, y: 120, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -150, rotate: -5 },
    visible: { opacity: 1, x: 0, rotate: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: 150, rotate: 5 },
    visible: { opacity: 1, x: 0, rotate: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.3, rotate: 15 },
    visible: { opacity: 1, scale: 1, rotate: 0 }
  },
  bounceDrop: {
    hidden: { opacity: 0, y: -200, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 }
  }
};

export default function ScrollReveal({
  children,
  animation = "slideUp",
  delay = 0,
  duration = 0.8,
  className = ""
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={variants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 1.2,
        delay,
        duration
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
