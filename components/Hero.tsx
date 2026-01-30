"use client";

import { useMode } from "@/contexts/ModeContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CompaniesBar } from "@/components/CompaniesBar";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
// import { AnimatedEye } from "./AnimatedEye"; // Comentado temporalmente
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

  return (
    <section className={`relative flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 overflow-hidden ${isMobile ? 'pt-4' : 'pt-28 sm:pt-32 md:pt-36 lg:pt-40'}`} style={{ backgroundColor: '#ECECEC' }}>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center">
        
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
                className="h-5"
                priority
              />
            </div>

            {/* Mode Toggle Buttons */}
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-full border border-gray-200 mb-6">
              <button
                onClick={() => setMode("company")}
                className="transition-all rounded-full px-3 py-1.5 text-xs leading-tight flex items-center relative overflow-hidden"
                style={{
                  backgroundColor: mode === "company" ? accentColor : "transparent",
                  color: mode === "company" ? "white" : "rgba(0, 0, 0, 0.6)",
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
                className="transition-all rounded-full px-3 py-1.5 text-xs leading-tight flex items-center relative overflow-hidden"
                style={{
                  backgroundColor: mode === "candidate" ? accentColor : "transparent",
                  color: mode === "candidate" ? "white" : "rgba(0, 0, 0, 0.6)",
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

        {/* Main Title - Tamaño grande como en la referencia */}
        <h1 
          className={`text-black text-center leading-[1.15] tracking-tight ${isMobile ? 'text-3xl mb-4' : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-5'}`} 
          style={{ fontFamily: 'var(--font-aeonik-medium)' }}
        >
          Talent Engine for
          <br />
          exceptional humans
        </h1>

        {/* Subtitle - Una sola línea, más pequeño */}
        <p 
          className={`text-gray-500 text-center mb-6 ${isMobile ? 'text-sm' : 'text-base sm:text-lg'}`}
          style={{ fontFamily: 'var(--font-aeonik-regular)' }}
        >
          Trusted by the hottest companies to build AI-fluent teams
        </p>

      </div>
      
      {/* Companies Bar - Parte del flujo, no absolute */}
      <CompaniesBar />

      {/* Form Panel - Debajo de los logos, más estrecho */}
      <div className={`w-full max-w-3xl mx-auto mt-10 mb-16 ${isMobile ? 'px-4' : 'px-6'}`}>
        <div 
          className={`w-full ${isMobile ? 'p-4' : 'p-6 sm:p-8'}`}
          style={{
            borderRadius: '23px',
            background: '#ECECEC',
            boxShadow: '1px 1px 2px 0 rgba(255, 255, 255, 0.30) inset, -1px -1px 2px 0 rgba(174, 174, 174, 0.50) inset, -8px -8px 16px 0 rgba(255, 255, 255, 0.90), 8px 8px 20px 0 rgba(174, 174, 174, 0.90)',
          }}
        >
          {/* Form Title */}
          <div className={isMobile ? 'mb-3 text-center' : 'mb-4'}>
            <h2 
              className={`text-black ${isMobile ? 'text-sm mb-1' : 'text-lg mb-2'}`}
              style={{ fontFamily: 'var(--font-aeonik-semibold)' }}
            >
              {mode === "company" ? "Who are you looking for?" : "Become an Audacity candidate"}
            </h2>
            <p 
              className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}
              style={{ fontFamily: 'var(--font-aeonik-regular)' }}
            >
              {mode === "company" 
                ? "Describe your ideal candidate, culture at your team and the best fit for your business:" 
                : "Describe your skills, experience, and culture at your dream employer:"}
            </p>
          </div>

          {/* Large Textarea */}
          <textarea
            placeholder={mode === "company" 
              ? "e.g., We're looking for a senior frontend engineer with 5+ years of React experience, strong TypeScript skills, and a passion for building elegant user interfaces..."
              : "e.g., I'm a full-stack developer with 4 years of experience in React and Node.js. I thrive in collaborative environments and I'm looking for a company that values innovation and work-life balance..."}
            className={`w-full text-black placeholder:text-gray-400 focus:outline-none transition-all resize-none ${isMobile ? 'h-24 px-3 py-2 text-xs' : 'h-32 px-5 py-4 text-sm'}`}
            style={{ 
              fontFamily: 'var(--font-aeonik-regular)',
              borderRadius: '24px',
              background: '#F2F2F2',
              border: 'none',
              boxShadow: '1px 1px 2px 0 rgba(255, 255, 255, 0.15), -1px -1px 2px 0 rgba(156, 156, 156, 0.25), -6px 6px 12px 0 rgba(156, 156, 156, 0.10) inset, 6px -6px 12px 0 rgba(156, 156, 156, 0.10) inset, -6px -6px 12px 0 rgba(255, 255, 255, 0.45) inset, 6px 6px 15px 0 rgba(156, 156, 156, 0.45) inset',
            }}
          />

          {/* Input Grid */}
          <div className={`mt-4 ${isMobile ? 'flex flex-col gap-3' : 'grid grid-cols-2 gap-4'}`}>
            <input
              type="text"
              required
              className={`w-full text-black placeholder:text-gray-400 focus:outline-none transition-all ${isMobile ? 'px-4 py-2.5 text-xs' : 'px-5 py-3 text-sm'}`}
              placeholder={mode === "company" ? "Company Name*" : "Full Name*"}
              style={{ 
                fontFamily: 'var(--font-aeonik-regular)',
                borderRadius: '63px',
                background: '#F2F2F2',
                border: 'none',
                boxShadow: '1px 1px 2px 0 rgba(255, 255, 255, 0.15), -1px -1px 2px 0 rgba(156, 156, 156, 0.25), -5px 5px 10px 0 rgba(156, 156, 156, 0.10) inset, 5px -5px 10px 0 rgba(156, 156, 156, 0.10) inset, -5px -5px 10px 0 rgba(255, 255, 255, 0.45) inset, 5px 5px 13px 0 rgba(156, 156, 156, 0.45) inset',
              }}
            />
            <input
              type="email"
              required
              className={`w-full text-black placeholder:text-gray-400 focus:outline-none transition-all ${isMobile ? 'px-4 py-2.5 text-xs' : 'px-5 py-3 text-sm'}`}
              placeholder="Contact Email*"
              style={{ 
                fontFamily: 'var(--font-aeonik-regular)',
                borderRadius: '63px',
                background: '#F2F2F2',
                border: 'none',
                boxShadow: '1px 1px 2px 0 rgba(255, 255, 255, 0.15), -1px -1px 2px 0 rgba(156, 156, 156, 0.25), -5px 5px 10px 0 rgba(156, 156, 156, 0.10) inset, 5px -5px 10px 0 rgba(156, 156, 156, 0.10) inset, -5px -5px 10px 0 rgba(255, 255, 255, 0.45) inset, 5px 5px 13px 0 rgba(156, 156, 156, 0.45) inset',
              }}
            />
            <input
              type="text"
              className={`w-full text-black placeholder:text-gray-400 focus:outline-none transition-all ${isMobile ? 'px-4 py-2.5 text-xs' : 'px-5 py-3 text-sm'}`}
              placeholder="Contact Linkedin"
              style={{ 
                fontFamily: 'var(--font-aeonik-regular)',
                borderRadius: '63px',
                background: '#F2F2F2',
                border: 'none',
                boxShadow: '1px 1px 2px 0 rgba(255, 255, 255, 0.15), -1px -1px 2px 0 rgba(156, 156, 156, 0.25), -5px 5px 10px 0 rgba(156, 156, 156, 0.10) inset, 5px -5px 10px 0 rgba(156, 156, 156, 0.10) inset, -5px -5px 10px 0 rgba(255, 255, 255, 0.45) inset, 5px 5px 13px 0 rgba(156, 156, 156, 0.45) inset',
              }}
            />
            <input
              type="text"
              className={`w-full text-black placeholder:text-gray-400 focus:outline-none transition-all ${isMobile ? 'px-4 py-2.5 text-xs' : 'px-5 py-3 text-sm'}`}
              placeholder="Contact Telegram"
              style={{ 
                fontFamily: 'var(--font-aeonik-regular)',
                borderRadius: '63px',
                background: '#F2F2F2',
                border: 'none',
                boxShadow: '1px 1px 2px 0 rgba(255, 255, 255, 0.15), -1px -1px 2px 0 rgba(156, 156, 156, 0.25), -5px 5px 10px 0 rgba(156, 156, 156, 0.10) inset, 5px -5px 10px 0 rgba(156, 156, 156, 0.10) inset, -5px -5px 10px 0 rgba(255, 255, 255, 0.45) inset, 5px 5px 13px 0 rgba(156, 156, 156, 0.45) inset',
              }}
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

          {/* Bottom Section */}
          <div className={`flex items-center justify-between mt-5 ${isMobile ? 'flex-col gap-4' : ''}`}>
            {/* File Upload Option */}
            <button
              type="button"
              onClick={handleAttachClick}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: `${accentColor}20`,
                  borderColor: `${accentColor}40`,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" style={{ color: accentColor }}>
                  <path d="M12 16V8M8 12L12 8L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span 
                className="text-gray-500 text-xs"
                style={{ fontFamily: 'var(--font-aeonik-regular)' }}
              >
                {selectedFile ? (
                  <span className="text-black">{selectedFile.name}</span>
                ) : (
                  mode === "company" ? "Attach Job Description (optional)" : "Attach CV (optional)"
                )}
              </span>
            </button>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button
                className="cursor-pointer px-6 py-2.5 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: accentColor,
                  fontFamily: 'var(--font-aeonik-medium)',
                }}
              >
                {mode === "company" ? "Activate Talent Engine" : "Shoot Your Shot"}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
