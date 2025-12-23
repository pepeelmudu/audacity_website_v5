"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface FadeInViewProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeInView({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.6,
  className = "" 
}: FadeInViewProps) {
  const isMobile = useIsMobile();

  // En móvil, renderizar sin animación
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

