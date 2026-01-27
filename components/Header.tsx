"use client";

import { useMode } from "@/contexts/ModeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

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
            src={mode === "company" ? "/logos/v2/A_mas_texto_v3_orange.svg" : "/logos/v2/A_mas_texto_v3_green.svg"}
            alt="Audacity"
            width={173}
            height={40}
            className="h-[40px]"
            priority
          />
        </motion.div>

        {/* Center Navigation - Mode Toggle (centrado absolutamente) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 bg-gray-100 p-1 rounded-full"
        >
          <button
            onClick={() => setMode("company")}
            className="cursor-pointer transition-all rounded-full px-4 py-1.5 text-sm leading-tight flex items-center relative overflow-hidden"
            style={{
              backgroundColor: mode === "company" ? "#ee722f" : "transparent",
              color: mode === "company" ? "white" : "rgba(0, 0, 0, 0.6)",
              fontFamily: 'var(--font-aeonik-medium)',
            }}
          >
            <span className="relative z-10">Company</span>
          </button>
          <button
            onClick={() => setMode("candidate")}
            className="cursor-pointer transition-all rounded-full px-4 py-1.5 text-sm leading-tight flex items-center relative overflow-hidden"
            style={{
              backgroundColor: mode === "candidate" ? "#b5ea4e" : "transparent",
              color: mode === "candidate" ? "white" : "rgba(0, 0, 0, 0.6)",
              fontFamily: 'var(--font-aeonik-medium)',
            }}
          >
            <span className="relative z-10">Candidate</span>
          </button>
        </motion.div>

        {/* Right Side - CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 flex-1 justify-end"
        >
          <button
            className="cursor-pointer px-4 py-2 text-sm text-gray-600 hover:text-black transition-colors rounded-full border border-gray-200 hover:border-gray-300"
            style={{ fontFamily: 'var(--font-aeonik-medium)' }}
          >
            Sign in
          </button>
          <button
            className="cursor-pointer px-4 py-2 text-sm text-white bg-black hover:bg-gray-800 transition-colors rounded-full"
            style={{ fontFamily: 'var(--font-aeonik-medium)' }}
          >
            Get a demo
          </button>
        </motion.div>
      </div>
    </header>
  );
}
