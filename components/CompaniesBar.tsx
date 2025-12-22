"use client";

import Image from "next/image";

const companies = [
  { name: "Sony", logo: "/logos/companies/sony_ok_v2.svg" },
  { name: "Uber", logo: "/logos/companies/uber_ok.svg" },
  { name: "FedEx", logo: "/logos/companies/fedex_ok.svg" },
  { name: "Oracle", logo: "/logos/companies/oracle_ok.svg" },
  { name: "Botto", logo: "/logos/companies/botto_ok.svg" },
  { name: "Trustpilot", logo: "/logos/companies/trustpilot_ok.svg" },
];

export function CompaniesBar() {
  return (
    <div className="w-full bg-[#051025] min-h-[67px] md:min-h-[84px] flex flex-col items-center justify-center py-2 relative">
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
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 md:flex-nowrap">
          {companies.map((company) => {
            const isSmaller = company.name === "FedEx" || company.name === "Uber" || company.name === "Botto";
            const isSony = company.name === "Sony";
            const isOracle = company.name === "Oracle";
            let heightClass;
            if (isSony) {
              // Sony se mantiene igual: 35.2px, 42.24px
              heightClass = "h-[35.2px] md:h-[42.24px]";
            } else if (isOracle) {
              // Oracle 20% más grande: 35.2px * 1.2 = 42.24px, 42.24px * 1.2 = 50.688px
              heightClass = "h-[42.24px] md:h-[50.688px]";
            } else if (isSmaller) {
              // 10% más grande: 25.6px * 1.1 = 28.16px, 30.72px * 1.1 = 33.792px
              heightClass = "h-[28.16px] md:h-[33.792px]";
            } else {
              // 10% más grande: 32px * 1.1 = 35.2px, 38.4px * 1.1 = 42.24px
              heightClass = "h-[35.2px] md:h-[42.24px]";
            }
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
                  className={`${heightClass} w-auto object-contain`}
                  priority={false}
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(78%) sepia(8%) saturate(600%) hue-rotate(145deg) brightness(98%) contrast(88%)',
                    display: 'block',
                    transform: needsOffset ? 'translateY(4px)' : 'none',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

