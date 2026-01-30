"use client";

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
    <section className="relative w-full py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#ECECEC', marginTop: '-180px' }}>
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 min-h-[500px]">
        {/* Title */}
        <FadeInView direction="up">
          <h2 
            className="text-3xl md:text-4xl text-black mb-12 text-center"
            style={{ fontFamily: 'var(--font-aeonik-bold)' }}
          >
            Frequently Asked Questions
          </h2>
        </FadeInView>

        {/* FAQ Accordion - Centrado */}
        <StaggerContainer className={`space-y-3 mx-auto ${isMobile ? 'w-full max-w-[280px]' : 'max-w-lg'}`} staggerDelay={0.1}>
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <div className="overflow-hidden border border-gray-200 rounded-lg bg-gray-50">
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between pl-3 pr-5 py-3 text-left transition-all duration-300 relative z-10`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-gray-400 ${isMobile ? 'text-xs' : 'text-sm'}`}>◇</span>
                    <span 
                      className={`text-black ${isMobile ? 'text-xs' : 'text-sm'}`}
                      style={{ fontFamily: 'var(--font-aeonik-medium)' }}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    className={`text-gray-400 transition-transform duration-300 ${isMobile ? 'w-4 h-4' : 'w-5 h-5'} ${
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
                  <p 
                    className={`pl-3 pr-5 pb-4 pt-1 text-gray-600 leading-relaxed ${isMobile ? 'text-[10px]' : 'text-xs'}`}
                    style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Section */}
        <FadeInView direction="up" delay={0.1} className={`text-center ${isMobile ? 'mt-8' : 'mt-20'}`}>
          <p 
            className={`text-gray-600 mb-4 ${isMobile ? 'text-base' : 'text-lg md:text-xl'}`}
            style={{ fontFamily: 'var(--font-aeonik-regular)' }}
          >
            You still have a question? No problem.
          </p>
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
              <span className="relative z-10">Contact Audacity →</span>
            </button>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
