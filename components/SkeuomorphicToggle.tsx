"use client";

import { useMode } from "@/contexts/ModeContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function SkeuomorphicToggle() {
  const { mode, setMode, accentColor } = useMode();
  const isCompany = mode === "company";
  const [isFlashing, setIsFlashing] = useState(false);
  const [flashColor, setFlashColor] = useState(accentColor);

  // Escala 0.4 del original (300x137.41 -> 120x55)
  const scale = 0.4;
  const borderWidth = 16.676 * scale;
  
  // Círculo 15% más pequeño (42 * 0.85 ≈ 36)
  const circleSize = 36;

  const handleClick = () => {
    const newMode = isCompany ? "candidate" : "company";
    const newColor = newMode === "company" ? "#ee722f" : "#b5ea4e";
    setFlashColor(newColor);
    setIsFlashing(true);
    setMode(newMode);
  };

  // Reset flash after animation
  useEffect(() => {
    if (isFlashing) {
      const timer = setTimeout(() => {
        setIsFlashing(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isFlashing]);

  return (
    <div 
      className="relative cursor-pointer select-none"
      onClick={handleClick}
      style={{ 
        width: 300 * scale,
        height: 137.41 * scale,
      }}
    >
      {/* Track con borde gradiente */}
      <div 
        className="absolute inset-0"
        style={{
          borderRadius: 83.38 * scale,
          padding: borderWidth,
          background: `radial-gradient(ellipse at 50% 120%, #EDEDED 0%, #E4E4E4 33%, #D5D5D5 45%, #A2A2A2 56%, #AFAFAF 69%, #686868 100%)`,
        }}
      >
        {/* Interior oscuro con glow animado */}
        <motion.div 
          style={{
            width: '100%',
            height: '100%',
            borderRadius: (83.38 - 16.676) * scale,
            background: '#525252',
          }}
          animate={{
            boxShadow: isFlashing 
              ? [
                  `inset ${1.668 * scale}px ${1.668 * scale}px ${6.67 * scale}px ${9 * scale}px rgba(0, 0, 0, 0.26), inset ${3.335 * scale}px ${3.335 * scale}px ${9.172 * scale}px ${9 * scale}px rgba(0, 0, 0, 0.37), inset ${5.003 * scale}px ${4.002 * scale}px ${15.675 * scale}px ${12 * scale}px rgba(0, 0, 0, 0.25), 0 0 0px 0px ${flashColor}00`,
                  `inset ${1.668 * scale}px ${1.668 * scale}px ${6.67 * scale}px ${9 * scale}px rgba(0, 0, 0, 0.1), inset ${3.335 * scale}px ${3.335 * scale}px ${9.172 * scale}px ${9 * scale}px rgba(0, 0, 0, 0.14), inset ${5.003 * scale}px ${4.002 * scale}px ${15.675 * scale}px ${12 * scale}px rgba(0, 0, 0, 0.1), 0 0 18px 5px ${flashColor}60`,
                  `inset ${1.668 * scale}px ${1.668 * scale}px ${6.67 * scale}px ${9 * scale}px rgba(0, 0, 0, 0.26), inset ${3.335 * scale}px ${3.335 * scale}px ${9.172 * scale}px ${9 * scale}px rgba(0, 0, 0, 0.37), inset ${5.003 * scale}px ${4.002 * scale}px ${15.675 * scale}px ${12 * scale}px rgba(0, 0, 0, 0.25), 0 0 0px 0px ${flashColor}00`,
                ]
              : `inset ${1.668 * scale}px ${1.668 * scale}px ${6.67 * scale}px ${9 * scale}px rgba(0, 0, 0, 0.26), inset ${3.335 * scale}px ${3.335 * scale}px ${9.172 * scale}px ${9 * scale}px rgba(0, 0, 0, 0.37), inset ${5.003 * scale}px ${4.002 * scale}px ${15.675 * scale}px ${12 * scale}px rgba(0, 0, 0, 0.25)`,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            times: [0, 0.3, 1],
          }}
        />
      </div>

      {/* Círculo/Switch */}
      <motion.div
        className="absolute z-20"
        style={{ 
          width: circleSize,
          height: circleSize,
          top: (137.41 * scale - circleSize) / 2,
        }}
        initial={false}
        animate={{ 
          left: isCompany ? 9 : 300 * scale - circleSize - 9,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
      >
        {/* Círculo con efecto 3D */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(160deg, #ffffff 0%, #a5a5a5 100%)',
            boxShadow: '2px 5px 10px rgba(0,0,0,0.45), 1px 2px 5px rgba(0,0,0,0.35)',
          }}
        />
        
        {/* Borde interior del círculo */}
        <div 
          className="absolute rounded-full"
          style={{
            top: 3,
            left: 3,
            right: 3,
            bottom: 3,
            background: 'linear-gradient(160deg, #a7a7a7 0%, #ffffff 100%)',
          }}
        />
      </motion.div>
    </div>
  );
}
