"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeInView } from "./animations";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useMode } from "@/contexts/ModeContext";

// Categorías superiores
const categories = [
  {
    id: "gtm",
    title: "GTM & Revenue Teams",
    description: "SDR, BDR, Marketing, AE, RevOps, CSM, and more",
    expertsActive: 3,
  },
  {
    id: "engineering",
    title: "Engineering & AI",
    description: "AI/ML, Full-Stack, Backend, Applied Research, and more",
    expertsActive: 4,
  },
  {
    id: "product",
    title: "Product, Ops & Talent",
    description: "BizOps, Strategy, Designers, PMs, Recruiters, and more",
    expertsActive: 3,
  },
];

// Expertos (perfiles de abajo)
const experts = [
  { name: "Maya S.", role: "SALES", image: "/images/experts/1.jpg" },
  { name: "Aris T.", role: "AI/ML", image: "/images/experts/2.jpg" },
  { name: "Nina B.", role: "GROWTH", image: "/images/experts/3.jpg" },
  { name: "Jasper K.", role: "BACKEND", image: "/images/experts/4.jpg" },
  { name: "Ethan G.", role: "OPERATIONS", image: "/images/experts/5.jpg" },
  { name: "Lina M.", role: "PRODUCT", image: "/images/experts/6.jpg" },
  { name: "Zara J.", role: "GTM", image: "/images/experts/7.jpg" },
  { name: "Theo R.", role: "FULL-STACK", image: "/images/experts/8.jpg" },
];

export function ExpertMatchingSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const { accentColor } = useMode();

  // Color contrario: verde en company, naranja en candidate
  const contrastColor = accentColor === '#ee722f' ? '#b5ea4e' : '#ee722f';

  if (isMobile) {
    return null; // No mostrar en móvil por complejidad
  }

  return (
    <div className="w-full py-8 mb-12 -mt-[30px]">
      <FadeInView direction="up">
        <p 
          className="text-center text-gray-600 mb-10 text-sm md:text-base"
          style={{ fontFamily: 'var(--font-aeonik-regular)' }}
        >
          We match you with experts who&apos;ve filled your exact role 50+ times.
        </p>
      </FadeInView>

      {/* Container principal */}
      <div className="relative max-w-5xl mx-auto">
        {/* Categorías superiores */}
        <div className="grid grid-cols-3 gap-4 mb-0 relative z-10">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`relative bg-white border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                hoveredCategory === category.id 
                  ? 'shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              style={{
                borderColor: hoveredCategory === category.id ? '#8aade5' : undefined,
              }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Indicador de estado */}
              <div 
                className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: hoveredCategory === category.id ? '#8aade5' : '#d1d5db',
                }}
              />
              
              <h3 
                className="text-lg text-black mb-2 pr-6"
                style={{ fontFamily: 'var(--font-aeonik-bold)' }}
              >
                {category.title}
              </h3>
              <p 
                className="text-xs text-gray-500 mb-3"
                style={{ fontFamily: 'var(--font-aeonik-regular)' }}
              >
                {category.description}
              </p>
              <div className="flex items-center gap-1.5">
                <span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                <span 
                  className="text-xs font-semibold"
                  style={{ color: accentColor, fontFamily: 'var(--font-aeonik-semibold)' }}
                >
                  {category.expertsActive} EXPERTS ACTIVE
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* SVG Lines Container */}
        <div className="relative h-[168px] w-full overflow-visible">
          {/* Línea izquierda (GTM) */}
          <div 
            className={`absolute left-0 top-0 w-full h-full transition-opacity duration-500 ${
              hoveredCategory === 'gtm' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ pointerEvents: 'none' }}
          >
            <img 
              src={accentColor === '#ee722f' ? '/vectores/fixed/linea_izq_v2_orange.svg' : '/vectores/fixed/linea_izq_v2_green.svg'}
              alt=""
              className="w-[110%] h-[110%] object-contain"
              style={{ 
                marginLeft: 'calc(-7% + 20px)',
              }}
            />
          </div>

          {/* Línea central (Engineering) */}
          <div 
            className={`absolute left-0 top-0 w-full h-full transition-opacity duration-500 ${
              hoveredCategory === 'engineering' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ pointerEvents: 'none' }}
          >
            <img 
              src={accentColor === '#ee722f' ? '/vectores/fixed/linea_mid_v2_orange.svg' : '/vectores/fixed/linea_mid_v2_green.svg'}
              alt=""
              className="w-[110%] h-[110%] object-contain"
              style={{ 
                marginLeft: 'calc(-7% + 100px)',
              }}
            />
          </div>

          {/* Línea derecha (Product) */}
          <div 
            className={`absolute left-0 top-0 w-full h-full transition-opacity duration-500 ${
              hoveredCategory === 'product' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ pointerEvents: 'none' }}
          >
            <img 
              src={accentColor === '#ee722f' ? '/vectores/fixed/linea_der_v2_orange.svg' : '/vectores/fixed/linea_der_v2_green.svg'}
              alt=""
              className="w-[110%] h-[110%] object-contain"
              style={{ 
                marginLeft: 'calc(-7% + 120px)',
                marginTop: '-4px',
              }}
            />
          </div>
        </div>

        {/* Expertos (cards de abajo) - escalonados */}
        <div className="grid grid-cols-8 gap-3 relative z-10">
          {experts.map((expert, index) => {
            // Determinar si este experto está conectado a la categoría activa
            // GTM (izq): cajas 1, 3, 7 → índices 0, 2, 6
            // Engineering (mid): cajas 2, 4, 6, 8 → índices 1, 3, 5, 7
            // Product (der): cajas 3, 5, 7 → índices 2, 4, 6
            const isConnected = 
              (hoveredCategory === 'gtm' && [0, 2, 6].includes(index)) ||
              (hoveredCategory === 'engineering' && [1, 3, 5, 7].includes(index)) ||
              (hoveredCategory === 'product' && [2, 4, 6].includes(index));

            // Escalonado: posiciones alternas tienen offset vertical
            // Patrón: 0=bajo, 1=alto, 2=bajo, 3=alto, 4=muy alto, 5=alto, 6=bajo, 7=alto
            const verticalOffsets = [0, -20, -10, -30, -50, -35, -15, -25];
            const offset = verticalOffsets[index] || 0;

            return (
              <div
                key={index}
                className={`bg-white border-2 rounded-xl p-3 text-center transition-all duration-300 ${
                  isConnected 
                    ? 'shadow-lg scale-105' 
                    : 'border-gray-200'
                }`}
                style={{ 
                  transform: `translateY(${offset}px)`,
                  borderColor: isConnected ? '#8aade5' : undefined,
                }}
              >
                {/* Avatar placeholder */}
                <div 
                  className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-200 overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                </div>
                <p 
                  className="text-xs text-black font-semibold"
                  style={{ fontFamily: 'var(--font-aeonik-semibold)' }}
                >
                  {expert.name}
                </p>
                <p 
                  className="text-[10px] text-gray-400 uppercase"
                  style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                >
                  {expert.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
