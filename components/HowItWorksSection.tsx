"use client";

import Image from "next/image";
import { FadeInView } from "./animations";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useMode } from "@/contexts/ModeContext";
import { ExpertMatchingSection } from "./ExpertMatchingSection";
import { ScrollStepsSection } from "./ScrollStepsSection";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

export function HowItWorksSection() {
  const isMobile = useIsMobile();
  const { mode } = useMode();

  return (
    <section className="w-full pt-4 pb-12 md:pt-8 md:pb-20" style={{ backgroundColor: '#ECECEC' }}>
      <div className={`mx-auto px-6 md:px-10 ${isMobile ? 'max-w-[280px]' : 'max-w-4xl'}`}>
        {/* 3D Asset */}
        <FadeInView direction="up">
          <div className="flex justify-center mb-5">
            <Image
              src="/images/3dassets_v2/3d_orange_4_COMP.png"
              alt=""
              width={160}
              height={160}
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
              style={{
                filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15)) saturate(1.25)',
              }}
            />
          </div>
        </FadeInView>
        
        {/* How Audacity Works */}
        <FadeInView direction="up">
          <h2 
            className={`text-black text-center mb-2 ${isMobile ? 'text-xl' : 'text-2xl md:text-3xl lg:text-4xl'}`}
            style={{ fontFamily: 'var(--font-aeonik-bold)' }}
          >
            How Audacity Works
          </h2>
        </FadeInView>

        {/* Expert Matching Interactive Section */}
        <ExpertMatchingSection />
      </div>

      {/* Scroll Steps Section - fuera del contenedor para ancho completo */}
      {!isMobile && <ScrollStepsSection />}

      {/* Carrusel de testimonios */}
      <TestimonialsCarousel />
    </section>
  );
}
