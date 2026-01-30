"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const steps = [
  {
    number: "Step 1",
    title: "Prompt the Audacity Engine",
    description: "Tell us about your ideal candidate, their skills, their culture, and their vibes.",
  },
  {
    number: "Step 2",
    title: "Get Talent Profiles",
    description: "Our algorithm chooses from a network of top performers and guarantees your requirements are met.",
  },
  {
    number: "Step 3",
    title: "Meet Your Picks",
    description: "Get a list of candidates within 48h. If Audacity finds more matches, we update your candidate list.",
  },
  {
    number: "Step 4",
    title: "Build Your Team",
    description: "Hire your exceptional human.",
  },
];

export function ScrollStepsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const start = rect.top;
      const scrollableDistance = sectionHeight - viewportHeight;
      
      if (start > 0) {
        setScrollProgress(0);
      } else if (start < -scrollableDistance) {
        setScrollProgress(1);
      } else {
        const progress = Math.abs(start) / scrollableDistance;
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Progreso continuo de 0 a 4 (un valor por cada step)
  const continuousProgress = scrollProgress * 4;

  return (
    <section 
      ref={sectionRef}
      className="relative -mt-96 -mb-72"
      style={{ height: '280vh' }}
    >
      {/* Contenedor sticky que se queda fijo mientras scrolleamos */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-5xl w-full mx-auto px-6 md:px-10">
          <div className="flex gap-16 items-center justify-center" style={{ marginLeft: '-30px' }}>
            
            {/* Columna izquierda - Textos con degradado */}
            <div 
              className="relative text-right"
              style={{ width: '320px', height: '250px' }}
            >
              {steps.map((step, index) => {
                const stepCenter = index + 0.5;
                const distance = continuousProgress - stepCenter;
                
                // Más separación entre steps
                let translateY = distance * -320;
                
                // Opacidad más suave
                let opacity = 1 - Math.abs(distance) * 1.2;
                opacity = Math.max(0, Math.min(1, opacity));
                
                // Step 1: visible desde el inicio
                if (index === 0 && continuousProgress < 0.5) {
                  opacity = 1;
                  translateY = 0;
                }
                
                // Step 4: se queda fijo al final
                if (index === 3 && continuousProgress > 3.5) {
                  opacity = 1;
                  translateY = 0;
                }
                
                return (
                  <div
                    key={index}
                    className="absolute inset-0 flex flex-col justify-center items-end"
                    style={{
                      opacity,
                      transform: `translateY(${translateY}px)`,
                      transition: 'opacity 0.1s ease-out',
                      maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
                    }}
                  >
                    <p
                      className="text-4xl text-gray-400 mb-4"
                      style={{ fontFamily: 'var(--font-aeonik-medium)' }}
                    >
                      {step.number}
                    </p>
                    
                    <h2
                      className="text-2xl md:text-3xl text-black mb-3"
                      style={{ fontFamily: 'var(--font-aeonik-bold)' }}
                    >
                      {step.title}
                    </h2>
                    
                    <p
                      className="text-base text-gray-600"
                      style={{ fontFamily: 'var(--font-aeonik-regular)', maxWidth: '320px' }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Columna derecha - Imagen en caja neumórfica con efecto lupa */}
            <div 
              ref={imageContainerRef}
              className="hidden md:block p-3 relative overflow-hidden cursor-none"
              style={{ 
                width: '480px',
                borderRadius: '23px',
                background: '#ECECEC',
                boxShadow: '1px 1px 2px 0 rgba(255, 255, 255, 0.30) inset, -1px -1px 2px 0 rgba(174, 174, 174, 0.50) inset, -8px -8px 16px 0 rgba(255, 255, 255, 0.90), 8px 8px 20px 0 rgba(174, 174, 174, 0.90)',
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Imagen base */}
              <Image
                src="/images/v1/5_3_compress.jpg"
                alt="Feature illustration"
                width={480}
                height={480}
                className="w-full h-auto object-contain rounded-xl"
              />
              
              {/* Efecto lupa */}
              {isHovering && (
                <div
                  className="absolute pointer-events-none rounded-full overflow-hidden"
                  style={{
                    width: '120px',
                    height: '120px',
                    left: mousePos.x - 60,
                    top: mousePos.y - 60,
                    maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                  }}
                >
                  <div
                    style={{
                      width: '480px',
                      height: '480px',
                      transform: `translate(${-mousePos.x * 1.5 + 60}px, ${-mousePos.y * 1.5 + 60}px) scale(1.5)`,
                      transformOrigin: 'top left',
                    }}
                  >
                    <Image
                      src="/images/v1/5_3_compress.jpg"
                      alt="Feature illustration zoomed"
                      width={480}
                      height={480}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
