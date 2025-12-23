"use client";

import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useEffect, useState } from "react";

const companies = [
  { name: "Sony", logo: "/logos/companies/sony_ok_v2.svg" },
  { name: "Uber", logo: "/logos/companies/uber_ok.svg" },
  { name: "FedEx", logo: "/logos/companies/fedex_ok.svg" },
  { name: "Oracle", logo: "/logos/companies/oracle_ok.svg" },
  { name: "Botto", logo: "/logos/companies/botto_ok.svg" },
  { name: "Trustpilot", logo: "/logos/companies/trustpilot_ok.svg" },
];

// Agrupar logos de 2 en 2 para el carrusel móvil
const logoPairs = [
  [companies[0], companies[1]],
  [companies[2], companies[3]],
  [companies[4], companies[5]],
];

export function CompaniesBar() {
  const isMobile = useIsMobile();
  const [currentPair, setCurrentPair] = useState(0);

  // Carrusel automático en móvil
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % logoPairs.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  const getLogoHeight = (company: typeof companies[0]) => {
    const isSmaller = company.name === "FedEx" || company.name === "Uber" || company.name === "Botto";
    const isSony = company.name === "Sony";
    const isOracle = company.name === "Oracle";
    
    if (isSony) return "h-[28px] md:h-[42.24px]";
    if (isOracle) return "h-[34px] md:h-[50.688px]";
    if (isSmaller) return "h-[22px] md:h-[33.792px]";
    return "h-[28px] md:h-[42.24px]";
  };

  return (
    <div className="w-full bg-[#030c2f] min-h-[67px] md:min-h-[84px] flex flex-col items-center justify-center py-2 relative">
      {/* Frase fuera del contenedor, justo encima */}
      <p 
        className="text-center text-[0.56rem] md:text-[0.7rem] font-light mb-2 md:mb-3 absolute -top-6 md:-top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-75"
        style={{ 
          color: '#aac2ba',
        }}
      >
        Trusted by companies shaping the future of technology.
      </p>
      
      <div className="max-w-6xl mx-auto w-full px-6 md:px-10">
        {/* Logos - Carrusel en móvil, todos visibles en desktop */}
        {isMobile ? (
          <div className="flex justify-center items-center gap-12 h-[40px] overflow-hidden relative">
            {logoPairs.map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className={`flex justify-center items-center gap-12 absolute inset-0 transition-opacity duration-700 ease-in-out ${pairIndex === currentPair ? 'opacity-100' : 'opacity-0'}`}
              >
                {pair.map((company) => (
                  <div
                    key={company.name}
                    className="flex items-center justify-center opacity-80"
                  >
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={120}
                      height={48}
                      className={`${getLogoHeight(company)} w-auto object-contain`}
                      priority={false}
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(85%) sepia(12%) saturate(400%) hue-rotate(100deg) brightness(95%) contrast(90%)',
                        display: 'block',
                        transform: company.name === "Trustpilot" ? 'translateY(4px)' : 'none',
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center gap-16">
            {companies.map((company) => {
              const needsOffset = company.name === "Trustpilot";
              
              return (
                <div
                  key={company.name}
                  className="flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 h-full"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={120}
                    height={48}
                    className={`${getLogoHeight(company)} w-auto object-contain`}
                    priority={false}
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(85%) sepia(12%) saturate(400%) hue-rotate(100deg) brightness(95%) contrast(90%)',
                      display: 'block',
                      transform: needsOffset ? 'translateY(4px)' : 'none',
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

