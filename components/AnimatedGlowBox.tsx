"use client";

import { useMode } from "@/contexts/ModeContext";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedGlowBoxProps {
  children: ReactNode;
}

export function AnimatedGlowBox({ children }: AnimatedGlowBoxProps) {
  const { accentColor } = useMode();
  
  // Color contrario
  const contrastColor = accentColor === '#ee722f' ? '#b5ea4e' : '#ee722f';

  return (
    <div 
      className="max-w-5xl mx-auto mt-8 mb-24 overflow-hidden relative"
      style={{ 
        borderRadius: '50px',
        backgroundColor: '#ECECEC',
        boxShadow: 'inset 12px 12px 30px 0 rgba(130, 130, 130, 0.6), inset -12px -12px 30px 0 rgba(255, 255, 255, 0.9)',
      }}
    >
      {/* Círculo animado 1 con blur - empieza arriba izquierda */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          backgroundColor: '#c5dbff',
          filter: 'blur(150px)',
          opacity: 0.35,
          left: '-100px',
          top: '-100px',
        }}
        animate={{
          x: ['0%', '60%', '20%', '70%', '10%', '40%', '0%'],
          y: ['0%', '30%', '60%', '10%', '50%', '20%', '0%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Círculo animado 2 con blur - empieza abajo derecha */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          backgroundColor: '#c5dbff',
          filter: 'blur(150px)',
          opacity: 0.35,
          right: '-100px',
          bottom: '-100px',
        }}
        animate={{
          x: ['0%', '-50%', '-20%', '-60%', '-10%', '-40%', '0%'],
          y: ['0%', '-40%', '-70%', '-20%', '-50%', '-30%', '0%'],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Trama de puntos */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.3,
          backgroundImage: 'radial-gradient(circle, #999 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
          borderRadius: '50px',
        }}
      />
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
