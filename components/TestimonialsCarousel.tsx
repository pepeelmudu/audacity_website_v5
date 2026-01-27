"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, PanInfo } from "framer-motion";

// Datos de testimonios
const testimonials = [
  {
    id: 1,
    quote: "Every candidate Audacity sends us ranks in the top 5% compared to anyone else we work with.",
    author: "Selin Kocalar",
    role: "Chief Operating Officer, Delve",
    company: "Delve",
    companyLogo: "/logos/companies/delve.svg",
    image: "/images/testimonials/1.jpg",
  },
  {
    id: 2,
    quote: "We've tested 50+ recruiting channels and only hired from 2. Audacity was one of them.",
    author: "Tanay Kothari",
    role: "Chief Executive Officer, Flow",
    company: "Flow",
    companyLogo: "/logos/companies/flow.svg",
    image: "/images/testimonials/2.jpg",
  },
  {
    id: 3,
    quote: "Audacity are the only good recruiters I know. They find high-signal candidates 3x faster than anyone.",
    author: "Phoebe Gates",
    role: "Founder, Phia",
    company: "phia",
    companyLogo: "/logos/companies/phia.svg",
    image: "/images/testimonials/3.jpg",
  },
  {
    id: 4,
    quote: "The AI-native talent Audacity brought us transformed how we build products. Incredible quality.",
    author: "Marcus Chen",
    role: "VP of Engineering, Stripe",
    company: "Stripe",
    companyLogo: "/logos/companies/stripe.svg",
    image: "/images/testimonials/4.jpg",
  },
  {
    id: 5,
    quote: "Audacity understood exactly what we needed. They filled 12 senior roles in just 6 weeks.",
    author: "Sarah Mitchell",
    role: "Head of Talent, Notion",
    company: "Notion",
    companyLogo: "/logos/companies/notion.svg",
    image: "/images/testimonials/5.jpg",
  },
];

const CARD_WIDTH = 400;
const CARD_GAP = 32;
const CARD_TOTAL_WIDTH = CARD_WIDTH + CARD_GAP;

export function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  // Duplicar testimonios para efecto infinito
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const totalWidth = extendedTestimonials.length * CARD_TOTAL_WIDTH;
  const singleSetWidth = testimonials.length * CARD_TOTAL_WIDTH;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Centrar inicialmente
  useEffect(() => {
    const centerOffset = (containerWidth - CARD_WIDTH) / 2 - singleSetWidth;
    x.set(centerOffset);
  }, [containerWidth, singleSetWidth, x]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Loop infinito
    const currentX = x.get();
    const centerOffset = (containerWidth - CARD_WIDTH) / 2;
    
    if (currentX > centerOffset) {
      x.set(currentX - singleSetWidth);
    } else if (currentX < centerOffset - singleSetWidth * 2) {
      x.set(currentX + singleSetWidth);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    
    // Snap to nearest card
    const currentX = x.get();
    const centerOffset = (containerWidth - CARD_WIDTH) / 2;
    const relativeX = currentX - centerOffset;
    const nearestCardIndex = Math.round(-relativeX / CARD_TOTAL_WIDTH);
    const snappedX = centerOffset - nearestCardIndex * CARD_TOTAL_WIDTH;
    
    x.set(snappedX);
  };

  return (
    <section className="w-full py-16 overflow-hidden">
      {/* Título */}
      <div className="text-center mb-12 px-4">
        <h2 
          className="text-3xl md:text-4xl text-black mb-8"
          style={{ fontFamily: 'var(--font-aeonik-bold)' }}
        >
          Don&apos;t just take our word for it
        </h2>
        <div className="relative inline-block">
          <button
            className="relative px-6 py-2.5 text-black text-sm rounded-full cursor-pointer overflow-hidden"
            style={{ fontFamily: 'var(--font-aeonik-medium)', backgroundColor: '#d4d4d4' }}
          >
            {/* Esfera animada con blur */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#8aade5',
                filter: 'blur(35px)',
                opacity: 0.5,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              animate={{
                left: ['-30%', '100%', '-30%'],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Texto del botón */}
            <span className="relative z-10">See all customer stories →</span>
          </button>
        </div>
      </div>

      {/* Carrusel */}
      <div 
        ref={containerRef}
        className="relative w-full cursor-grab active:cursor-grabbing"
        style={{ height: '480px' }}
      >
        <motion.div
          className="flex absolute"
          style={{ 
            x: springX,
            gap: `${CARD_GAP}px`,
          }}
          drag="x"
          dragConstraints={{ left: -totalWidth, right: totalWidth }}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
        >
          {extendedTestimonials.map((testimonial, index) => {
            return (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 select-none"
                style={{ width: CARD_WIDTH }}
              >
                {/* Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
                  {/* Imagen */}
                  <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />
                    {/* Placeholder de imagen */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gray-300/50" />
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="p-5 flex flex-col flex-grow">
                    {/* Quote */}
                    <p 
                      className="text-sm text-gray-700 mb-4 flex-grow leading-relaxed"
                      style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    
                    {/* Author info */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                        </div>
                        <div>
                          <p 
                            className="text-sm text-black font-semibold"
                            style={{ fontFamily: 'var(--font-aeonik-semibold)' }}
                          >
                            {testimonial.author}
                          </p>
                          <p 
                            className="text-xs text-gray-500"
                            style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                          >
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      
                      {/* Company logo placeholder */}
                      <div 
                        className="text-sm text-gray-400 font-semibold"
                        style={{ fontFamily: 'var(--font-aeonik-bold)' }}
                      >
                        {testimonial.company === "Delve" && "⊠ Delve"}
                        {testimonial.company === "Flow" && "॥॥ Flow"}
                        {testimonial.company === "phia" && "phia"}
                        {testimonial.company === "Stripe" && "stripe"}
                        {testimonial.company === "Notion" && "notion"}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Gradientes laterales para fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#ECECEC] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#ECECEC] to-transparent pointer-events-none z-10" />
      </div>

      {/* Texto inferior */}
      <p 
        className="text-center text-gray-400 text-sm -mt-4"
        style={{ fontFamily: 'var(--font-aeonik-regular)' }}
      >
        and 100+ others
      </p>
    </section>
  );
}
