"use client";

import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useRef, useEffect, useState } from "react";

const companies = [
  { name: "Sony", logo: "/logos/companies/sony_ok_v2.svg" },
  { name: "Uber", logo: "/logos/companies/uber_ok.svg" },
  { name: "FedEx", logo: "/logos/companies/fedex_ok.svg" },
  { name: "Oracle", logo: "/logos/companies/oracle_ok.svg" },
  { name: "Botto", logo: "/logos/companies/botto_ok.svg" },
  { name: "Trustpilot", logo: "/logos/companies/trustpilot_ok.svg" },
];

// Duplicar para loop infinito perfecto
const duplicatedCompanies = [...companies, ...companies];

export function CompaniesBar() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const normalSpeed = 50; // pixels per second
  const slowSpeed = 15; // pixels per second when hovered

  useEffect(() => {
    let animationId: number;
    let lastTime: number | null = null;
    
    const animate = (currentTime: number) => {
      if (lastTime === null) {
        lastTime = currentTime;
      }
      
      const deltaTime = (currentTime - lastTime) / 1000; // convert to seconds
      lastTime = currentTime;
      
      const speed = isHovered ? slowSpeed : normalSpeed;
      positionRef.current += speed * deltaTime;
      
      if (slideRef.current) {
        const slideWidth = slideRef.current.scrollWidth / 2;
        
        // Reset position when we've scrolled half the content (one full set of logos)
        if (positionRef.current >= slideWidth) {
          positionRef.current = positionRef.current - slideWidth;
        }
        
        slideRef.current.style.transform = `translateX(-${positionRef.current}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

  const getLogoHeight = (company: typeof companies[0]) => {
    const isSmaller = company.name === "FedEx" || company.name === "Uber" || company.name === "Botto";
    const isSony = company.name === "Sony";
    const isOracle = company.name === "Oracle";
    
    if (isSony) return "h-[24px] md:h-[32px]";
    if (isOracle) return "h-[28px] md:h-[38px]";
    if (isSmaller) return "h-[20px] md:h-[28px]";
    return "h-[24px] md:h-[32px]";
  };

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-4xl mx-auto py-6 md:py-8 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Degradado izquierdo */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #ECECEC, transparent)' }} />
      
      {/* Degradado derecho */}
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #ECECEC, transparent)' }} />
      
      {/* Contenedor con animación infinita */}
      <div 
        ref={slideRef}
        className="flex w-max"
      >
        {duplicatedCompanies.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex items-center justify-center flex-shrink-0 px-6 md:px-8"
          >
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={120}
              height={50}
              className={`${getLogoHeight(company)} w-auto object-contain opacity-40`}
              priority={false}
              style={{
                filter: 'grayscale(100%) brightness(0.5)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
