"use client";

import { useMode } from "@/contexts/ModeContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Header() {
  const { mode, setMode } = useMode();

  return (
    <header className="absolute top-6 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-2xl font-bold text-white">Audacity</span>
        </motion.div>

        {/* Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1 bg-slate-800/80 backdrop-blur-sm p-1 rounded-full border border-white/10"
        >
          <Button
            variant="ghost"
            onClick={() => setMode("company")}
            className={`transition-all rounded-full px-4 py-1.5 text-sm ${
              mode === "company"
                ? "bg-green-500 hover:bg-green-600 text-slate-900 font-semibold shadow-sm"
                : "text-white/60 hover:text-white/80 bg-transparent"
            }`}
          >
            Company
          </Button>
          <Button
            variant="ghost"
            onClick={() => setMode("candidate")}
            className={`transition-all rounded-full px-4 py-1.5 text-sm ${
              mode === "candidate"
                ? "bg-green-500 hover:bg-green-600 text-slate-900 font-semibold shadow-sm"
                : "text-white/60 hover:text-white/80 bg-transparent"
            }`}
          >
            Candidate
          </Button>
        </motion.div>
      </div>
    </header>
  );
}

