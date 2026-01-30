"use client";

import { useMode } from "@/contexts/ModeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

// Mini toggle para el header
function HeaderToggle() {
  const { mode, setMode } = useMode();
  const isCompany = mode === "company";
  const [isFlashing, setIsFlashing] = useState(false);
  const [flashColor, setFlashColor] = useState(isCompany ? "#ee722f" : "#b5ea4e");

  // Escala más pequeña para el header (10% menos que antes)
  const scale = 0.252;
  const borderWidth = 16.676 * scale;
  const circleSize = 22.5;

  const handleClick = () => {
    const newMode = isCompany ? "candidate" : "company";
    const newColor = newMode === "company" ? "#ee722f" : "#8fcb17";
    setFlashColor(newColor);
    setIsFlashing(true);
    setMode(newMode);
  };

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
                  `inset ${1.668 * scale}px ${1.668 * scale}px ${6.67 * scale}px ${6 * scale}px rgba(0, 0, 0, 0.26), 0 0 0px 0px ${flashColor}00`,
                  `inset ${1.668 * scale}px ${1.668 * scale}px ${6.67 * scale}px ${6 * scale}px rgba(0, 0, 0, 0.1), 0 0 12px 3px ${flashColor}60`,
                  `inset ${1.668 * scale}px ${1.668 * scale}px ${6.67 * scale}px ${6 * scale}px rgba(0, 0, 0, 0.26), 0 0 0px 0px ${flashColor}00`,
                ]
              : `inset ${1.668 * scale}px ${1.668 * scale}px ${6.67 * scale}px ${6 * scale}px rgba(0, 0, 0, 0.26)`,
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
          left: isCompany ? 6 : 300 * scale - circleSize - 6,
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
            boxShadow: '1px 3px 6px rgba(0,0,0,0.4), 1px 1px 3px rgba(0,0,0,0.3)',
          }}
        />
        
        {/* Borde interior del círculo */}
        <div 
          className="absolute rounded-full"
          style={{
            top: 2,
            left: 2,
            right: 2,
            bottom: 2,
            background: 'linear-gradient(160deg, #a7a7a7 0%, #ffffff 100%)',
          }}
        />
      </motion.div>
    </div>
  );
}

export function Header() {
  const { mode, setMode, accentColor } = useMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Detectar scroll para efecto cristal
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // En móvil, el header se renderiza dentro del Hero
  if (isMobile) {
    return null;
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-sm border-b border-gray-300/50 shadow-sm' 
          : 'border-b border-gray-300/30'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(236, 236, 236, 0.7)' : '#ECECEC',
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center flex-1"
        >
          <Image
            src={mode === "company" ? "/logos/v2/A_mas_texto_v4_orange.svg" : "/logos/v2/A_mas_texto_v4_green.svg"}
            alt="Audacity"
            width={199}
            height={46}
            className="h-[46px]"
            style={{ marginTop: '-4px' }}
            priority
          />
        </motion.div>

        {/* Center Navigation - Toggle Switch with Labels */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3"
        >
          {/* Company label - efecto grabado con iluminación */}
          <motion.span 
            className="text-xs uppercase tracking-wide select-none transition-all duration-300"
            animate={{
              color: mode === "company" ? "rgba(238,114,47,0.8)" : "rgba(82,82,82,0.8)",
              textShadow: mode === "company" 
                ? "0 0 8px rgba(238,114,47,0.48), 1px 1px 1px rgba(255,255,255,0.4)"
                : "1px 1px 1px rgba(255,255,255,0.64), -0.5px -0.5px 0.5px rgba(0,0,0,0.12)",
            }}
            transition={{ duration: 0.3 }}
            style={{ 
              fontFamily: 'var(--font-aeonik-medium)',
            }}
          >
            Company
          </motion.span>
          
          <HeaderToggle />
          
          {/* Candidate label - efecto grabado con iluminación */}
          <motion.span 
            className="text-xs uppercase tracking-wide select-none transition-all duration-300"
            animate={{
              color: mode === "candidate" ? "rgba(143,203,23,0.8)" : "rgba(82,82,82,0.8)",
              textShadow: mode === "candidate" 
                ? "0 0 8px rgba(143,203,23,0.48), 1px 1px 1px rgba(255,255,255,0.4)"
                : "1px 1px 1px rgba(255,255,255,0.64), -0.5px -0.5px 0.5px rgba(0,0,0,0.12)",
            }}
            transition={{ duration: 0.3 }}
            style={{ 
              fontFamily: 'var(--font-aeonik-medium)',
            }}
          >
            Candidate
          </motion.span>
        </motion.div>

        {/* Right Side - CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 flex-1 justify-end"
        >
          <button
            className="cursor-pointer px-4 py-2 text-sm text-black hover:text-gray-600 transition-colors rounded-full border border-gray-200 hover:border-gray-300"
            style={{ fontFamily: 'var(--font-aeonik-medium)' }}
          >
            Sign in
          </button>
          <button
            className="cursor-pointer px-4 py-2 text-sm text-white transition-colors rounded-full"
            style={{ backgroundColor: '#000000', fontFamily: 'var(--font-aeonik-medium)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333333'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000000'}
          >
            Get a demo
          </button>
        </motion.div>
      </div>
    </header>
  );
}
