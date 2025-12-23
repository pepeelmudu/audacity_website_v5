"use client";

import { useMode } from "@/contexts/ModeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";

export function ModeTransition() {
  const { mode, accentColor } = useMode();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionColor, setTransitionColor] = useState(accentColor);
  const [triggerKey, setTriggerKey] = useState(0);
  const prevModeRef = useRef<string>(mode);
  const isFirstRender = useRef(true);
  const [blockSize, setBlockSize] = useState(60);

  // Calculate grid based on square blocks
  const [gridConfig, setGridConfig] = useState({ columns: 12, rows: 8, totalBlocks: 96 });

  useEffect(() => {
    const calculateGrid = () => {
      const size = 120; // Tamaño fijo del cuadrado en píxeles
      const cols = Math.ceil(window.innerWidth / size);
      const rws = Math.ceil(window.innerHeight / size);
      setBlockSize(size);
      setGridConfig({ columns: cols, rows: rws, totalBlocks: cols * rws });
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  const { columns, rows, totalBlocks } = gridConfig;

  // Generate random order for stagger effect
  const randomOrder = useMemo(() => {
    const indices = Array.from({ length: totalBlocks }, (_, i) => i);
    // Shuffle array (Fisher-Yates)
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }, [triggerKey, totalBlocks]);

  useEffect(() => {
    // Skip first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (mode !== prevModeRef.current) {
      setTransitionColor(accentColor);
      setTriggerKey(prev => prev + 1);
      setIsTransitioning(true);
      prevModeRef.current = mode;
      
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [mode, accentColor]);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key={triggerKey}
          className="fixed inset-0 z-[9999] pointer-events-none grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, ${blockSize}px)`,
            gridTemplateRows: `repeat(${rows}, ${blockSize}px)`,
            mixBlendMode: "exclusion",
          }}
        >
          {Array.from({ length: totalBlocks }).map((_, index) => (
            <motion.div
              key={index}
              style={{ 
                backgroundColor: transitionColor,
                boxShadow: `0 0 10px ${transitionColor}, 0 0 20px ${transitionColor}, 0 0 30px ${transitionColor}`,
              }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 0.06,
                delay: randomOrder.indexOf(index) * 0.008,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

