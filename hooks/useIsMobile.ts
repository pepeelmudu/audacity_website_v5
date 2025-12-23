"use client";

import { useState, useEffect } from "react";

/**
 * Hook para detectar si el usuario está en un dispositivo móvil
 * @param breakpoint - Ancho máximo en píxeles para considerar móvil (default: 768)
 * @returns true si es móvil, false si no
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    
    // Check inicial
    checkMobile();
    
    // Escuchar cambios de tamaño
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}



