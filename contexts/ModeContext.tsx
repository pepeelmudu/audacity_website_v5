"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Mode = "company" | "candidate";

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  accentColor: string;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("company");

  // Colores de acento según el modo
  const accentColor = mode === "company" ? "#ee722f" : "#b5ea4e"; // Naranja para Company, Verde lima para Candidate

  return (
    <ModeContext.Provider value={{ mode, setMode, accentColor }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}

