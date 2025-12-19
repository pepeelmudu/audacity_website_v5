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
          <Button
            variant="ghost"
            onClick={() => setMode("company")}
            className="transition-all rounded-full px-4 pt-1 pb-2 text-sm leading-tight flex items-center"
            style={{
              backgroundColor: mode === "company" ? accentColor : "transparent",
              color: mode === "company" ? "#1e293b" : "rgba(255, 255, 255, 0.6)",
            }}
            onMouseEnter={(e) => {
              if (mode === "company") {
                e.currentTarget.style.backgroundColor = mode === "company" ? "#059669" : accentColor;
              } else {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
              }
            }}
            onMouseLeave={(e) => {
              if (mode === "company") {
                e.currentTarget.style.backgroundColor = accentColor;
              } else {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
              }
            }}
          >
            Company
          </Button>
          <Button
            variant="ghost"
            onClick={() => setMode("candidate")}
            className="transition-all rounded-full px-4 pt-1 pb-2 text-sm leading-tight flex items-center"
            style={{
              backgroundColor: mode === "candidate" ? accentColor : "transparent",
              color: mode === "candidate" ? "#1e293b" : "rgba(255, 255, 255, 0.6)",
            }}
            onMouseEnter={(e) => {
              if (mode === "candidate") {
                e.currentTarget.style.backgroundColor = mode === "candidate" ? "#ea580c" : accentColor;
              } else {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
              }
            }}
            onMouseLeave={(e) => {
              if (mode === "candidate") {
                e.currentTarget.style.backgroundColor = accentColor;
              } else {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
              }
            }}
          >
            Candidate
          </Button>
        </motion.div>
      </div>
    </header>
  );
}

