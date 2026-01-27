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
    <section className="relative w-full py-16 md:py-24 overflow-hidden border-t border-gray-300/50" style={{ backgroundColor: '#ECECEC' }}>
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 min-h-[600px]">
        {/* Title */}
        <FadeInView direction="up">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-black mb-12"
            style={{ fontFamily: 'var(--font-aeonik-bold)' }}
          >
            Frequently Asked Questions
          </h2>
        </FadeInView>

        {/* FAQ and 3D Asset Container */}
        <div className={`flex gap-8 lg:gap-12 items-start ${isMobile ? 'flex-col' : 'flex-col lg:flex-row'}`}>
          {/* FAQ Accordion */}
          <StaggerContainer className={`flex-1 space-y-3 ${isMobile ? 'w-full max-w-[280px] mx-auto' : 'max-w-md'}`} staggerDelay={0.1}>
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

          {/* 3D Asset - En móvil va entre las FAQs y el botón, centrado y más pequeño */}
          {isMobile ? (
            <div className="w-full flex justify-center my-4">
              <Image
                src={mode === "company" ? "/3d_assets/A/A_low.png" : "/3d_assets/A/A_low_green.png"}
                alt="Audacity 3D A"
                width={120}
                height={160}
                className="object-contain"
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
              />
            </FadeInView>
          )}
        </div>

        {/* CTA Section */}
        <FadeInView direction="up" delay={0.1} className={`text-center ${isMobile ? 'mt-4' : 'mt-16'}`}>
          <p 
            className={`text-gray-600 mb-4 ${isMobile ? 'text-base' : 'text-lg md:text-xl'}`}
            style={{ fontFamily: 'var(--font-aeonik-regular)' }}
          >
            You still have a question? No problem.
          </p>
          <div 
            className="relative inline-block"
            onMouseEnter={() => setContactHover(true)}
            onMouseLeave={() => setContactHover(false)}
          >
            <button
              className="px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              style={{ fontFamily: 'var(--font-aeonik-medium)' }}
            >
              Contact Audacity
            </button>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
