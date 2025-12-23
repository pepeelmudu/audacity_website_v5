"use client";

import { useMode } from "@/contexts/ModeContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CompaniesBar } from "@/components/CompaniesBar";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { AnimatedEye } from "./AnimatedEye";

export function Hero() {
  const { mode, accentColor } = useMode();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const subtitleText =
    mode === "company"
      ? "Elite Talent Doesn't Apply. They Get Invited."
      : "Elite Opportunities Don't Wait. They Find You.";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-12 sm:pt-14 md:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden pb-28 sm:pb-32 md:pb-36 lg:pb-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/company_bg_v6_COMP_2.webp"
          alt="Background"
          fill
          className="object-cover rotate-180"
          priority
          unoptimized
        />
      </div>
      
      {/* Dark Gradient Overlay - darker top, slightly lighter bottom */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/20 via-slate-900/20 to-slate-900/20" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Animated Eye Logo */}
        <div className="mb-1 sm:mb-2 md:mb-3 lg:mb-4 flex items-center justify-center">
          <AnimatedEye 
            size="25px"
            maxMovement={6}
            transitionSpeed="0.12s"
            className="sm:!h-[32px] md:!h-[43px] lg:!h-[57px] xl:!h-[71px] [&_img]:!h-[25px] sm:[&_img]:!h-[32px] md:[&_img]:!h-[43px] lg:[&_img]:!h-[57px] xl:[&_img]:!h-[71px]"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-white text-center mb-1 sm:mb-2 md:mb-3 lg:mb-4 leading-[1.1]" style={{ fontFamily: 'var(--font-beltram-medium)' }}>
          Talent Engine for
          <br />
          Exceptional Humans
        </h1>

        {/* Subtitle */}
        <div className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white leading-tight">
            {subtitleText.split(". ")[0]}.
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white leading-tight">
            {subtitleText.split(". ")[1]}
          </p>
        </div>

        {/* Glassmorphism Form Panel */}
        <div className="w-full max-w-[85%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl backdrop-blur-[32px] bg-white/20 rounded-[1rem] sm:rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[1.8rem] border border-white/30 shadow-lg pt-2 pb-2 px-2.5 sm:pt-3 sm:pb-3 sm:px-4 md:pt-4 md:pb-4 md:px-5 lg:pt-5 lg:pb-5 lg:px-6">
          {/* Form Title - Inside the panel */}
          <div className="mb-1.5 sm:mb-2 md:mb-3 lg:mb-4">
            <h2 className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base font-semibold text-white mb-0.5 sm:mb-1" style={{ textShadow: '0 2px 8px rgba(15, 23, 42, 0.5)' }}>
              Who are you looking for?
            </h2>
            <p className="text-[0.55rem] sm:text-[0.6rem] md:text-[0.65rem] lg:text-xs text-white leading-tight" style={{ textShadow: '0 2px 8px rgba(15, 23, 42, 0.5)' }}>
              Describe your ideal candidate, experience, culture, and anything
              else you consider important:
            </p>
          </div>

          {/* Large Textarea */}
          <textarea
            placeholder="e.g., We're looking for a senior frontend engineer with 5+ years of React experience, strong TypeScript skills, and a passion for building elegant user interfaces. Bonus points for design system experience..."
            className="w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-md sm:rounded-lg md:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-[0.825rem]"
          />

          {/* Input Grid - 2x2 on desktop, stacked on mobile */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5">
            <div>
              <input
                type="text"
                required
                className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.825rem]"
                placeholder="Company Name*"
              />
            </div>
            <div>
              <input
                type="email"
                required
                className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.825rem]"
                placeholder="Contact Email*"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.825rem]"
                placeholder="Contact Linkedin"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.825rem]"
                placeholder="Contact Telegram"
              />
            </div>
          </div>

          {/* Bottom Row - File Upload and CTA Button */}
          <div className="flex items-center justify-between mt-3 sm:mt-4 md:mt-5 relative">
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
              className="hidden"
            />
            
            {/* File Upload Option */}
            <button
              type="button"
              onClick={handleAttachClick}
              className="flex items-center gap-1.5 sm:gap-2 md:gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div 
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${accentColor}33`,
                  borderColor: `${accentColor}4d`,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                }}
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: accentColor }}
                >
                  <path
                    d="M12 16V8M8 12L12 8L16 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white/70 text-[0.55rem] sm:text-[0.6rem] md:text-[0.65rem] lg:text-[0.7rem] leading-tight text-left">
                {selectedFile ? (
                  <>
                    <span className="text-white">{selectedFile.name.length > 20 ? selectedFile.name.slice(0, 17) + '...' : selectedFile.name}</span>
                    <br />
                    <span className="text-green-400">(attached ✓)</span>
                  </>
                ) : (
                  <>
                    Attach Job Description<br />(optional)
                  </>
                )}
              </span>
            </button>

            {/* CTA Button - Centered */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Animated Glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundColor: accentColor,
                    filter: 'blur(20px)',
                  }}
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <button
                  className="px-4 sm:px-5 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 rounded-full backdrop-blur-xl border border-white/20 text-white text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.825rem] font-medium relative overflow-hidden"
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 10px 20px -5px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Gradiente azul oscuro */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(315deg, rgba(5,16,37,0.7) 0%, rgba(5,16,37,0) 100%)',
                    }}
                  ></div>
                  {/* Capa blanca */}
                  <div className="absolute inset-0 bg-white opacity-20 pointer-events-none"></div>
                  <span className="relative z-10">Activate Talent Engine</span>
                </button>
              </motion.div>
            </div>

            {/* Spacer para equilibrar */}
            <div className="invisible flex items-center gap-1.5 sm:gap-2 md:gap-3">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"></div>
              <span className="text-[0.55rem] sm:text-[0.6rem] md:text-[0.65rem] lg:text-[0.7rem] leading-tight">
                Attach Job Description<br />(optional)
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Companies Bar - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CompaniesBar />
      </div>
    </section>
  );
}
