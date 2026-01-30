"use client";

import { useMode } from "@/contexts/ModeContext";
import { motion } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

interface AnimatedGlowBoxProps {
  children: ReactNode;
}

interface Dot {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function AnimatedGlowBox({ children }: AnimatedGlowBoxProps) {
  const { accentColor } = useMode();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | undefined>(undefined);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Configuración de los puntos
  const DOT_SPACING = 20;
  const DOT_RADIUS = 1.5;
  const REPEL_RADIUS = 240;
  const REPEL_STRENGTH = 15;

  // Inicializar puntos
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Crear grid de puntos cuando cambian las dimensiones
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    const dots: Dot[] = [];
    for (let x = DOT_SPACING; x < dimensions.width; x += DOT_SPACING) {
      for (let y = DOT_SPACING; y < dimensions.height; y += DOT_SPACING) {
        dots.push({
          baseX: x,
          baseY: y,
          x: x,
          y: y,
          vx: 0,
          vy: 0,
        });
      }
    }
    dotsRef.current = dots;
  }, [dimensions]);

  // Manejar movimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Animación
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      const mouse = mouseRef.current;
      const dots = dotsRef.current;

      dots.forEach(dot => {
        // Calcular distancia al mouse desde la posición base
        const dx = mouse.x - dot.baseX;
        const dy = mouse.y - dot.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let drawX = dot.baseX;
        let drawY = dot.baseY;

        // Desplazar si está cerca del mouse
        if (distance < REPEL_RADIUS && distance > 0) {
          const force = (REPEL_RADIUS - distance) / REPEL_RADIUS;
          const angle = Math.atan2(dy, dx);
          // Desplazamiento directo, sin física
          drawX = dot.baseX - Math.cos(angle) * force * REPEL_STRENGTH;
          drawY = dot.baseY - Math.sin(angle) * force * REPEL_STRENGTH;
        }

        // Dibujar punto
        ctx.beginPath();
        ctx.arc(drawX, drawY, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(153, 153, 153, 0.3)';
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div 
      ref={containerRef}
      className="max-w-6xl mx-auto mt-20 mb-24 overflow-hidden relative px-4"
      style={{ 
        borderRadius: '50px',
        backgroundColor: '#ECECEC',
        boxShadow: '1px 1px 2px 0 rgba(255, 255, 255, 0.15), -1px -1px 2px 0 rgba(156, 156, 156, 0.25), -12px 12px 24px 0 rgba(156, 156, 156, 0.10) inset, 12px -12px 24px 0 rgba(156, 156, 156, 0.10) inset, -12px -12px 24px 0 rgba(255, 255, 255, 0.45) inset, 12px 12px 30px 0 rgba(156, 156, 156, 0.45) inset',
      }}
    >
      {/* Círculo animado 1 con blur - empieza arriba izquierda */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          backgroundColor: '#c5dbff',
          filter: 'blur(150px)',
          opacity: 0.35,
          left: '-100px',
          top: '-100px',
        }}
        animate={{
          x: ['0%', '60%', '20%', '70%', '10%', '40%', '0%'],
          y: ['0%', '30%', '60%', '10%', '50%', '20%', '0%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Círculo animado 2 con blur - empieza abajo derecha */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          backgroundColor: '#c5dbff',
          filter: 'blur(150px)',
          opacity: 0.35,
          right: '-100px',
          bottom: '-100px',
        }}
        animate={{
          x: ['0%', '-50%', '-20%', '-60%', '-10%', '-40%', '0%'],
          y: ['0%', '-40%', '-70%', '-20%', '-50%', '-30%', '0%'],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Canvas para trama de puntos interactiva */}
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 pointer-events-none"
        style={{ borderRadius: '50px' }}
      />
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
