"use client";

import { useMode } from "@/contexts/ModeContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Header() {
  const { mode, setMode, accentColor } = useMode();
  const [companyHover, setCompanyHover] = useState(false);
  const [candidateHover, setCandidateHover] = useState(false);
  const isMobile = useIsMobile();

  // En móvil, el header se renderiza dentro del Hero
  if (isMobile) {
    return null;
  }

  return (
    <header className="absolute top-6 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex items-end justify-between px-6 md:px-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-end"
          >
            <Image
              src="/logos/audacity_text.svg"
              alt="Audacity"
              width={156}
              height={36}
              className="h-9 brightness-0 invert"
              priority
            />
          </motion.div>

        {/* Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1 bg-slate-800/80 backdrop-blur-sm p-1 rounded-full border border-white/10"
        >
          {/* Company Button */}
          <div className="relative">
            {/* Animated Glow for Company */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: "#ee722f",
                filter: 'blur(12px)',
              }}
              animate={{
                opacity: mode === "company" ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <button
              onClick={() => setMode("company")}
              onMouseEnter={() => setCompanyHover(true)}
              onMouseLeave={() => setCompanyHover(false)}
              className="transition-all rounded-full px-4 pt-1.5 pb-2.5 text-sm leading-tight flex items-center relative overflow-hidden border border-white/20 hover:scale-105"
              style={{
                backgroundColor: mode === "company" ? "#ee722f" : "transparent",
                color: mode === "company" ? "white" : "rgba(255, 255, 255, 0.6)",
                boxShadow: mode === "company" ? 'inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 10px 20px -5px rgba(0,0,0,0.3)' : 'none',
              }}
            >
              {/* Noise glow effect when inactive */}
              {mode !== "company" && (
                <motion.div
                  className="absolute inset-[-100%] w-[300%] h-[300%] pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(circle at 20% 50%, #ee722f 0%, transparent 25%),
                      radial-gradient(circle at 80% 50%, #ee722f 0%, transparent 25%),
                      radial-gradient(circle at 50% 10%, #ee722f 0%, transparent 25%),
                      radial-gradient(circle at 50% 90%, #ee722f 0%, transparent 25%)
                    `,
                    filter: "blur(8px)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: companyHover ? 1 : 0,
                    rotate: [0, 360],
                  }}
                  transition={{
                    opacity: { duration: 0.5, ease: "easeOut", from: companyHover ? 0.2 : 0 },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  }}
                />
              )}
              {mode === "company" && (
                <>
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(315deg, rgba(5,16,37,0.7) 0%, rgba(5,16,37,0) 100%)',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-white opacity-10 pointer-events-none"></div>
                </>
              )}
              <span className="relative z-10">Company</span>
            </button>
          </div>

          {/* Candidate Button */}
          <div className="relative">
            {/* Animated Glow for Candidate */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: "#b5ea4e",
                filter: 'blur(12px)',
              }}
              animate={{
                opacity: mode === "candidate" ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <button
              onClick={() => setMode("candidate")}
              onMouseEnter={() => setCandidateHover(true)}
              onMouseLeave={() => setCandidateHover(false)}
              className="transition-all rounded-full px-4 pt-1.5 pb-2.5 text-sm leading-tight flex items-center relative overflow-hidden border border-white/20 hover:scale-105"
              style={{
                backgroundColor: mode === "candidate" ? "#b5ea4e" : "transparent",
                color: mode === "candidate" ? "white" : "rgba(255, 255, 255, 0.6)",
                boxShadow: mode === "candidate" ? 'inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 10px 20px -5px rgba(0,0,0,0.3)' : 'none',
              }}
            >
              {/* Noise glow effect when inactive */}
              {mode !== "candidate" && (
                <motion.div
                  className="absolute inset-[-100%] w-[300%] h-[300%] pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(circle at 20% 50%, #b5ea4e 0%, transparent 25%),
                      radial-gradient(circle at 80% 50%, #b5ea4e 0%, transparent 25%),
                      radial-gradient(circle at 50% 10%, #b5ea4e 0%, transparent 25%),
                      radial-gradient(circle at 50% 90%, #b5ea4e 0%, transparent 25%)
                    `,
                    filter: "blur(8px)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: candidateHover ? 1 : 0,
                    rotate: [0, 360],
                  }}
                  transition={{
                    opacity: { duration: 0.5, ease: "easeOut", from: candidateHover ? 0.2 : 0 },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  }}
                />
              )}
              {mode === "candidate" && (
                <>
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(315deg, rgba(5,16,37,0.7) 0%, rgba(5,16,37,0) 100%)',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-white opacity-10 pointer-events-none"></div>
                </>
              )}
              <span className="relative z-10">Candidate</span>
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

