"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface AnimatedEyeProps {
  size?: string;
  maxMovement?: number;
  transitionSpeed?: string;
  className?: string;
}

/**
 * Componente de ojo animado que sigue el movimiento del mouse
 * La pupila se mueve dentro de los límites del rombo del ojo
 */
export function AnimatedEye({ 
  size = "2rem",
  maxMovement = 10,
  transitionSpeed = "0.1s",
  className = ""
}: AnimatedEyeProps) {
  const [pupilX, setPupilX] = useState(0);
  const [pupilY, setPupilY] = useState(0);
  const [brilloX, setBrilloX] = useState(0);
  const [brilloY, setBrilloY] = useState(0);
  const ojoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ojoRef.current) return;
      
      const ojoRect = ojoRef.current.getBoundingClientRect();
      const ojoCenterX = ojoRect.left + ojoRect.width / 2;
      const ojoCenterY = ojoRect.top + ojoRect.height / 2;
      
      // Vector desde el centro del ojo hacia el cursor
      const deltaX = e.clientX - ojoCenterX;
      const deltaY = e.clientY - ojoCenterY;
      
      // Calcular la distancia y el ángulo
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const angle = Math.atan2(deltaY, deltaX);
      
      // Normalizar la distancia (máximo cuando está lejos)
      const maxDistance = Math.max(window.innerWidth, window.innerHeight) / 2;
      const normalizedDistance = Math.min(distance / maxDistance, 1);
      
      // Aplicar una curva suave para que el movimiento sea más natural
      const easedDistance = Math.pow(normalizedDistance, 0.6);
      
      // Factor de escala para respetar la forma del rombo
      const diagonalFactor = 1 - Math.abs(Math.sin(2 * angle)) * 0.3;
      const effectiveMaxMovement = maxMovement * diagonalFactor;
      
      // Calcular posición de la pupila
      const movementX = Math.cos(angle) * easedDistance * effectiveMaxMovement * 2;
      const movementY = Math.sin(angle) * easedDistance * effectiveMaxMovement * 0.5 * 1.8;
      
      setPupilX(movementX);
      setPupilY(movementY);
      
      // Calcular posición del brillo - independiente, con más parallax y puede mirar arriba
      const brilloParallax = 1.8; // Factor de parallax aumentado
      const brilloMovX = Math.cos(angle) * easedDistance * effectiveMaxMovement * brilloParallax * 2;
      const brilloMovY = Math.sin(angle) * easedDistance * effectiveMaxMovement * brilloParallax * 0.4; // Menos movimiento vertical
      
      setBrilloX(brilloMovX);
      setBrilloY(brilloMovY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [maxMovement]);

  return (
    <div ref={ojoRef} className={`relative inline-block ${className}`} style={{ height: size }}>
      {/* Capa base: ojo_v2 */}
      <img 
        src="/logos/ojo_anim/ojo_v2.svg"
        alt="Ojo" 
        style={{ 
          height: size,
          width: "auto",
          filter: "brightness(0) saturate(100%) invert(100%)",
          position: "relative",
          zIndex: 1,
          display: "block"
        }}
      />
      
      {/* Capa intermedia: pupila_v2 */}
      <img 
        src="/logos/ojo_anim/pupila_v2.svg"
        alt="Pupila" 
        style={{ 
          height: `calc(${size} * 0.9)`,
          width: "auto",
          filter: "brightness(0) saturate(100%) invert(100%)",
          position: "absolute",
          top: -3,
          left: "50%",
          transform: `translate(calc(-50% + ${pupilX}px), ${pupilY * 0.5}px)`,
          zIndex: 2,
          display: "block",
        }}
      />
      
      {/* Capa superior: brillo_v1 - movimiento independiente con parallax */}
      <img 
        src="/logos/ojo_anim/brillo_v1.svg"
        alt="Brillo" 
        style={{ 
          height: `calc(${size} * 0.9)`,
          width: "auto",
          filter: "brightness(0) saturate(100%) invert(8%) sepia(4%) saturate(200%) hue-rotate(200deg) brightness(95%) contrast(95%)",
          position: "absolute",
          top: -3,
          left: "50%",
          transform: `translate(calc(-50% + ${brilloX}px), ${brilloY}px)`,
          zIndex: 3,
          display: "block",
        }}
      />
    </div>
  );
}

