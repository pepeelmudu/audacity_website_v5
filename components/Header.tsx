"use client";

import { useMode } from "@/contexts/ModeContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function Header() {
  const { mode, setMode, accentColor } = useMode();

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
          <button
            onClick={() => setMode("company")}
            className="transition-all rounded-full px-4 pt-1.5 pb-2.5 text-sm leading-tight flex items-center relative overflow-hidden border border-white/20 hover:scale-105"
            style={{
              backgroundColor: mode === "company" ? "#ee722f" : "transparent",
              color: mode === "company" ? "white" : "rgba(255, 255, 255, 0.6)",
              boxShadow: mode === "company" ? 'inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 10px 20px -5px rgba(0,0,0,0.3)' : 'none',
            }}
          >
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
          <button
            onClick={() => setMode("candidate")}
            className="transition-all rounded-full px-4 pt-1.5 pb-2.5 text-sm leading-tight flex items-center relative overflow-hidden border border-white/20 hover:scale-105"
            style={{
              backgroundColor: mode === "candidate" ? "#b5ea4e" : "transparent",
              color: mode === "candidate" ? "white" : "rgba(255, 255, 255, 0.6)",
              boxShadow: mode === "candidate" ? 'inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 10px 20px -5px rgba(0,0,0,0.3)' : 'none',
            }}
          >
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
        </motion.div>
      </div>
    </header>
  );
}

