"use client";

import Image from "next/image";
import { useState } from "react";
import { useMode } from "@/contexts/ModeContext";
import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, StaggerItem } from "./animations";
import { useIsMobile } from "@/hooks/useIsMobile";

const faqs = [
  {
    question: "What is Audacity?",
    answer: "Audacity is a revolutionary recruitment platform that transforms how companies and candidates connect. We use advanced matchmaking technology to create perfect pairings based on skills, culture fit, and career aspirations.",
  },
  {
    question: "How does matchmaking work?",
    answer: "Our proprietary algorithm analyzes multiple data points including technical skills, soft skills, company culture, growth opportunities, and personal preferences. We then create intelligent matches that benefit both candidates and companies.",
  },
  {
    question: "How is Audacity different?",
    answer: "Unlike traditional job boards, we actively matchmake rather than passively list positions. We focus on quality over quantity, cultural alignment over just skills, and long-term success over quick placements.",
  },
  {
    question: "How does the legal agreement look like for Audacity's engine?",
    answer: "Our legal framework is transparent and straightforward. We operate on a success-based model with clear terms for both parties. All agreements include protection clauses, confidentiality provisions, and clearly defined responsibilities.",
  },
  {
    question: "What industries does Audacity cover?",
    answer: "We cover a wide range of industries including Technology, Finance, Healthcare, Marketing, Engineering, Design, and more. Our platform is designed to adapt to various sectors while maintaining the same high-quality matchmaking standards.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contactHover, setContactHover] = useState(false);
  const { mode, accentColor } = useMode();
  const isMobile = useIsMobile();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Image - Fixed position within section */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg/BG_BOTTON_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'scroll',
        }}
      >
        {/* Dark brown overlay */}
        <div className="absolute inset-0 bg-[#3d2b1f] opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 min-h-[600px]">
        {/* Title */}
        <FadeInView direction="up">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-[#a8d5c2] mb-12"
            style={{ fontFamily: 'var(--font-beltram-regular)' }}
          >
            Frequently asked Questions
          </h2>
        </FadeInView>

        {/* FAQ and 3D Asset Container */}
        <div className={`flex gap-8 lg:gap-12 items-start ${isMobile ? 'flex-col' : 'flex-col lg:flex-row'}`}>
          {/* FAQ Accordion */}
          <StaggerContainer className={`flex-1 space-y-3 ${isMobile ? 'w-full max-w-[280px] mx-auto' : 'max-w-md'}`} staggerDelay={0.1}>
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <div
                  className="overflow-hidden backdrop-blur-xl border border-white/20 relative"
                  style={{
                    background: 'linear-gradient(315deg, rgba(5,16,37,0.5) 0%, rgba(5,16,37,0) 100%)',
                    boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 10px 20px -5px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* White overlay */}
                  <div className="absolute inset-0 bg-white opacity-10 pointer-events-none"></div>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full flex items-center justify-between pl-3 pr-5 py-3 text-left transition-all duration-300 relative z-10`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-white/70 ${isMobile ? 'text-xs' : 'text-sm'}`}>◇</span>
                      <span className={`text-white font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>{faq.question}</span>
                    </div>
                    <svg
                      className={`text-white/70 transition-transform duration-300 ${isMobile ? 'w-4 h-4' : 'w-5 h-5'} ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out relative z-10 ${
                      openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className={`pl-3 pr-5 pb-4 pt-1 text-white/80 leading-relaxed ${isMobile ? 'text-[10px]' : 'text-xs'}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 3D Asset - En móvil va entre las FAQs y el botón, centrado y más pequeño */}
          {isMobile ? (
            <div className="w-full flex justify-center my-4">
              <Image
                src={mode === "company" ? "/3d_assets/A/A_low.png" : "/3d_assets/A/A_low_green.png"}
                alt="Audacity 3D A"
                width={120}
                height={160}
                className="object-contain"
                style={{
                  filter: 'drop-shadow(0 15px 25px rgba(30, 20, 10, 0.9)) saturate(0.8)',
                }}
              />
            </div>
          ) : (
            <FadeInView direction="right" delay={0.3} className="flex-shrink-0 lg:w-[350px] flex items-center justify-center relative lg:ml-12">
              <Image
                src={mode === "company" ? "/3d_assets/A/A_low.png" : "/3d_assets/A/A_low_green.png"}
                alt="Audacity 3D A"
                width={300}
                height={400}
                className="object-contain"
                style={{
                  filter: 'drop-shadow(0 25px 35px rgba(30, 20, 10, 0.9)) saturate(0.8)',
                }}
              />
            </FadeInView>
          )}
        </div>

        {/* CTA Section - Fixed position en desktop, relativo en móvil */}
        <FadeInView direction="up" delay={0.1} className={`text-center ${isMobile ? 'mt-4' : 'absolute -bottom-4 left-0 right-0'}`}>
          <p className={`text-[#a8d5c2] mb-4 ${isMobile ? 'text-base' : 'text-lg md:text-xl'}`}>
            You still have a question? No problem.
          </p>
          <div 
            className="relative inline-block"
            onMouseEnter={() => setContactHover(true)}
            onMouseLeave={() => setContactHover(false)}
          >
            {/* Animated Glow exterior */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: accentColor,
                filter: 'blur(12px)',
              }}
              animate={{
                opacity: contactHover ? 0.5 : 0,
                scale: contactHover ? 1.1 : 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            />
            <button
              className="px-8 pt-2.5 pb-3.5 rounded-full backdrop-blur-xl border border-white/20 text-white font-medium hover:scale-105 transition-transform duration-300 relative overflow-hidden"
              style={{
                background: 'linear-gradient(315deg, rgba(5,16,37,0.5) 0%, rgba(5,16,37,0) 100%)',
                boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 10px 20px -5px rgba(0,0,0,0.3)',
              }}
            >
              <div className="absolute inset-0 bg-white opacity-10 pointer-events-none"></div>
              <span className="relative z-10">Contact Audacity</span>
            </button>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

