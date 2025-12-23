"use client";

import Image from "next/image";
import { useState } from "react";
import { useMode } from "@/contexts/ModeContext";
import { motion } from "framer-motion";

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
  const { mode, accentColor } = useMode();

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
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl text-[#a8d5c2] mb-12"
          style={{ fontFamily: 'var(--font-beltram-regular)' }}
        >
          Frequently asked Questions
        </h2>

        {/* FAQ and 3D Asset Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* FAQ Accordion */}
          <div className="flex-1 space-y-3 max-w-md">
            {faqs.map((faq, index) => (
              <div
                key={index}
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
                  className="w-full flex items-center justify-between pl-3 pr-5 py-3 text-left transition-all duration-300 relative z-10"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-white/70 text-sm">◇</span>
                    <span className="text-white text-sm font-medium">{faq.question}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-white/70 transition-transform duration-300 ${
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
                  <p className="pl-3 pr-5 pb-4 pt-1 text-white/80 text-xs leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 3D Asset */}
          <div className="flex-shrink-0 lg:w-[350px] flex items-center justify-center relative lg:ml-12">
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
          </div>
        </div>

        {/* CTA Section - Fixed position */}
        <div className="text-center absolute -bottom-4 left-0 right-0">
          <p className="text-[#a8d5c2] text-lg md:text-xl mb-4">
            You still have a question? No problem.
          </p>
          <button
            className="px-8 pt-2.5 pb-3.5 rounded-full backdrop-blur-xl border border-white/20 text-white font-medium hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            style={{
              background: 'linear-gradient(315deg, rgba(5,16,37,0.5) 0%, rgba(5,16,37,0) 100%)',
              boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 10px 20px -5px rgba(0,0,0,0.3)',
            }}
          >
            {/* Animated noise glow - masked inside button */}
            <motion.div
              className="absolute inset-[-100%] w-[300%] h-[300%] opacity-50 pointer-events-none"
              style={{
                background: `
                  radial-gradient(circle at 20% 50%, ${accentColor} 0%, transparent 25%),
                  radial-gradient(circle at 80% 50%, ${accentColor} 0%, transparent 25%),
                  radial-gradient(circle at 50% 10%, ${accentColor} 0%, transparent 25%),
                  radial-gradient(circle at 50% 90%, ${accentColor} 0%, transparent 25%)
                `,
                filter: "blur(8px)",
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="absolute inset-0 bg-white opacity-10 pointer-events-none"></div>
            <span className="relative z-10">Contact Audacity</span>
          </button>
        </div>
      </div>
    </section>
  );
}

