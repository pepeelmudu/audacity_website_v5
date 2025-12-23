"use client";

import { useMode } from "@/contexts/ModeContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CompaniesBar } from "@/components/CompaniesBar";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { AnimatedEye } from "./AnimatedEye";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Hero() {
  const { mode, setMode, accentColor } = useMode();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();

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
    <section className={`relative min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 overflow-hidden ${isMobile ? 'pt-4 pb-[212px]' : 'pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-28 sm:pb-32 md:pb-36 lg:pb-40'}`}>
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
        
        {/* Mobile Header - Logo y botones centrados */}
        {isMobile && (
          <>
            {/* Logo pequeño centrado */}
            <div className="mb-3">
              <Image
                src="/logos/audacity_text.svg"
                alt="Audacity"
                width={100}
                height={24}
                className="h-5 brightness-0 invert"
                priority
              />
            </div>

            {/* Mode Toggle Buttons */}
            <div className="flex items-center gap-1 bg-slate-800/80 backdrop-blur-sm p-1 rounded-full border border-white/10 mb-8">
              <button
                onClick={() => setMode("company")}
                className="transition-all rounded-full px-3 py-1.5 text-xs leading-tight flex items-center relative overflow-hidden border border-white/20"
                style={{
                  backgroundColor: mode === "company" ? "#ee722f" : "transparent",
                  color: mode === "company" ? "white" : "rgba(255, 255, 255, 0.6)",
                }}
              >
                {mode === "company" && (
                  <>
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(315deg, rgba(5,16,37,0.7) 0%, rgba(5,16,37,0) 100%)' }}></div>
                    <div className="absolute inset-0 bg-white opacity-10 pointer-events-none"></div>
                  </>
                )}
                <span className="relative z-10">Company</span>
              </button>
              <button
                onClick={() => setMode("candidate")}
                className="transition-all rounded-full px-3 py-1.5 text-xs leading-tight flex items-center relative overflow-hidden border border-white/20"
                style={{
                  backgroundColor: mode === "candidate" ? "#b5ea4e" : "transparent",
                  color: mode === "candidate" ? "white" : "rgba(255, 255, 255, 0.6)",
                }}
              >
                {mode === "candidate" && (
                  <>
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(315deg, rgba(5,16,37,0.7) 0%, rgba(5,16,37,0) 100%)' }}></div>
                    <div className="absolute inset-0 bg-white opacity-10 pointer-events-none"></div>
                  </>
                )}
                <span className="relative z-10">Candidate</span>
              </button>
            </div>
          </>
        )}

        {/* Animated Eye Logo - Static en móvil, animado en desktop */}
        <div className={`flex items-center justify-center ${isMobile ? 'mb-2' : 'mb-1 sm:mb-2 md:mb-3 lg:mb-4'}`}>
          {isMobile ? (
            <div className="relative">
              <Image
                src="/logos/audacity_eye_v3.svg"
                alt="Audacity Eye"
                width={52}
                height={52}
                className="h-[52px] w-auto brightness-0 invert"
              />
              {/* Brillo en azul oscuro */}
              <Image
                src="/logos/ojo_anim/brillo_v1.svg"
                alt="Brillo"
                width={47}
                height={47}
                className="absolute top-[-5px] left-1/2 -translate-x-1/2 h-[47px] w-auto"
                style={{
                  filter: "brightness(0) saturate(100%) invert(8%) sepia(50%) saturate(1000%) hue-rotate(200deg) brightness(30%) contrast(100%)",
                }}
              />
            </div>
          ) : (
            <AnimatedEye 
              size="25px"
              maxMovement={6}
              transitionSpeed="0.12s"
              className="sm:!h-[32px] md:!h-[43px] lg:!h-[57px] xl:!h-[71px] [&_img]:!h-[25px] sm:[&_img]:!h-[32px] md:[&_img]:!h-[43px] lg:[&_img]:!h-[57px] xl:[&_img]:!h-[71px]"
            />
          )}
        </div>

        {/* Main Title */}
        <h1 className={`font-normal text-white text-center leading-[1.1] ${isMobile ? 'text-3xl mb-1' : 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-1 sm:mb-2 md:mb-3 lg:mb-4'}`} style={{ fontFamily: 'var(--font-beltram-medium)' }}>
          Talent Engine for
          <br />
          Exceptional Humans
        </h1>

        {/* Subtitle */}
        <div className={`text-center ${isMobile ? 'mb-8' : 'mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10'}`}>
          <p className={`text-white leading-tight ${isMobile ? 'text-base' : 'text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'}`}>
            {subtitleText.split(". ")[0]}.
          </p>
          <p className={`text-white leading-tight ${isMobile ? 'text-base' : 'text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'}`}>
            {subtitleText.split(". ")[1]}
          </p>
        </div>

        {/* Glassmorphism Form Panel */}
        <div className={`w-full backdrop-blur-[32px] bg-white/20 border border-white/30 shadow-lg ${isMobile ? 'max-w-[280px] rounded-2xl p-3' : 'max-w-[85%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-[1rem] sm:rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[1.8rem] pt-2 pb-2 px-2.5 sm:pt-3 sm:pb-3 sm:px-4 md:pt-4 md:pb-4 md:px-5 lg:pt-5 lg:pb-5 lg:px-6'}`}>
          {/* Form Title - Inside the panel */}
          <div className={isMobile ? 'mb-2 text-center' : 'mb-1.5 sm:mb-2 md:mb-3 lg:mb-4'}>
            <h2 className={`font-semibold text-white ${isMobile ? 'text-[10px] mb-1' : 'text-[0.65rem] sm:text-xs md:text-sm lg:text-base mb-0.5 sm:mb-1'}`} style={{ textShadow: '0 2px 8px rgba(15, 23, 42, 0.5)' }}>
              Who are you looking for?
            </h2>
            <p className={`text-white leading-tight ${isMobile ? 'text-[8px]' : 'text-[0.55rem] sm:text-[0.6rem] md:text-[0.65rem] lg:text-xs'}`} style={{ textShadow: '0 2px 8px rgba(15, 23, 42, 0.5)' }}>
              Describe your ideal candidate, experience, culture, and anything
              else you consider important:
            </p>
          </div>

          {/* Large Textarea */}
          <textarea
            placeholder="e.g., We're looking for a senior frontend engineer with 5+ years of React experience, strong TypeScript skills, and a passion for building elegant user interfaces. Bonus points for design system experience..."
            className={`w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none ${isMobile ? 'h-24 px-3 py-2 rounded-lg text-[10px]' : 'h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 rounded-md sm:rounded-lg md:rounded-xl text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-[0.825rem]'}`}
          />

          {/* Input Grid - Vertical en móvil, 2x2 en desktop */}
          <div className={`mt-2 ${isMobile ? 'flex flex-col gap-2' : 'grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5'}`}>
            <input
              type="text"
              required
              className={`w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all ${isMobile ? 'px-3 py-2 rounded-full text-[10px]' : 'px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.825rem]'}`}
              placeholder="Company Name*"
            />
            <input
              type="email"
              required
              className={`w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all ${isMobile ? 'px-3 py-2 rounded-full text-[10px]' : 'px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.825rem]'}`}
              placeholder="Contact Email*"
            />
            <input
              type="text"
              className={`w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all ${isMobile ? 'px-3 py-2 rounded-full text-[10px]' : 'px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.825rem]'}`}
              placeholder="Contact Linkedin"
            />
            <input
              type="text"
              className={`w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all ${isMobile ? 'px-3 py-2 rounded-full text-[10px]' : 'px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[0.6rem] sm:text-[0.65rem] md:text-[0.75rem] lg:text-[0.825rem]'}`}
              placeholder="Contact Telegram"
            />
          </div>

          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
            className="hidden"
          />

          {/* Bottom Section - Vertical en móvil, horizontal en desktop */}
          {isMobile ? (
            <div className="flex flex-col items-center mt-3">
              {/* File Upload Option */}
              <button
                type="button"
                onClick={handleAttachClick}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity mb-4"
              >
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${accentColor}33`,
                    borderColor: `${accentColor}4d`,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                  }}
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" style={{ color: accentColor }}>
                    <path d="M12 16V8M8 12L12 8L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-white/70 text-[10px] leading-tight text-left">
                  {selectedFile ? (
                    <>
                      <span className="text-white">{selectedFile.name.length > 20 ? selectedFile.name.slice(0, 17) + '...' : selectedFile.name}</span>
                      <br />
                      <span className="text-green-400">(attached ✓)</span>
                    </>
                  ) : (
                    <>Attach Job Description (optional)</>
                  )}
                </span>
              </button>

              {/* CTA Button */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: accentColor, filter: 'blur(15px)' }}
                  animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <button
                  className="px-5 py-2 rounded-full backdrop-blur-xl border border-white/20 text-white text-[10px] font-medium relative overflow-hidden"
                  style={{ backgroundColor: accentColor, boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 10px 20px -5px rgba(0,0,0,0.3)' }}
                >
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(315deg, rgba(5,16,37,0.7) 0%, rgba(5,16,37,0) 100%)' }}></div>
                  <div className="absolute inset-0 bg-white opacity-20 pointer-events-none"></div>
                  <span className="relative z-10">Activate Talent Engine</span>
                </button>
              </motion.div>
            </div>
          ) : (
            <div className="flex items-center justify-between mt-3 sm:mt-4 md:mt-5 relative">
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
          )}
        </div>
      </div>
      
      {/* Companies Bar - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <CompaniesBar />
      </div>
    </section>
  );
}
