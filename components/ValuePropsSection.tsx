"use client";

import Image from "next/image";
import { useMode } from "@/contexts/ModeContext";
import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, StaggerItem } from "./animations";
import { useIsMobile } from "@/hooks/useIsMobile";

const valuePropsData = [
  {
    iconOrange: "/3d_assets/1_orange.png",
    iconGreen: "/3d_assets/1_green.png",
    description: "The best people aren't looking—they're busy crushing it at their current job. That's exactly who you want.",
  },
  {
    iconOrange: "/3d_assets/2_orange.png",
    iconGreen: "/3d_assets/2_green.png",
    description: "If your hiring process involves praying someone good applies, you're not recruiting. You're gambling.",
  },
  {
    iconOrange: "/3d_assets/3_orange.png",
    iconGreen: "/3d_assets/3_green.png",
    description: "If you're working with several recruiters and 2 months are not enough time to find your person.. maybe it's time to change things up.",
  },
];

// Company mode content
const opportunitiesCompany = [
  "Post job to gather CVs",
  "Search resumes by keywords",
  "Mass email campaigns",
  "Work with several recruiters",
];

const aCallingCompany = [
  "Connecting you to vetted top performers",
  "Your requirements matched perfectly",
  "We do the hunting, you do the choosing",
  "Relationships that last",
];

// Candidate mode content
const opportunitiesCandidate = [
  "Apply, apply, apply some more",
  "Wait weeks for a reply",
  "Compete against thousands",
  "Feel like just another number",
];

const aCallingCandidate = [
  "Matched to roles that look for exactly YOU",
  "Partners who understand your potential",
  "Strategic interviews, not wasted time",
  "A move that just clicks",
];

export function ValuePropsSection() {
  const { mode } = useMode();
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full" style={{ backgroundColor: 'transparent' }}>
      {/* Content */}
      <div className="relative z-10">
        {/* Top Section - Value Props */}
        <div className="pt-16 pb-8 md:pt-24 md:pb-12">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            {/* Top Text Content */}
            <div className="text-center">
              <FadeInView direction="up" delay={0}>
                <h2 
                  className="text-xl md:text-2xl lg:text-3xl text-black mb-4 leading-tight max-w-2xl mx-auto"
                  style={{ fontFamily: 'var(--font-aeonik-semibold)' }}
                >
                  Audacity's talent engine identifies top performers before they've thought about leaving their current company.
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p 
                  className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-8"
                  style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                >
                  Your competition is posting jobs.<br />
                  You're talking to people who aren't even looking.
                </p>
              </FadeInView>

            </div>

            {/* Feature Cards Grid */}
            <StaggerContainer className={`grid gap-5 md:gap-6 mx-auto ${isMobile ? 'grid-cols-1 max-w-[280px]' : 'grid-cols-3 max-w-[52rem]'}`} staggerDelay={0.15}>
              {valuePropsData.map((prop, index) => (
                <StaggerItem key={index}>
                  <div
                    className={`bg-gray-50 border border-gray-200 rounded-2xl pt-6 pb-3 px-4 md:pt-8 md:pb-4 md:px-5 hover:-translate-y-1 hover:shadow-lg transition-transform transition-shadow duration-300 h-full ${isMobile ? 'aspect-[1/1.3] flex flex-col justify-center' : ''}`}
                  >
                  {/* Icon */}
                  <div className="mb-5 relative">
                    {/* Animated glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full blur-2xl"
                      style={{
                        background: mode === "company" 
                          ? "radial-gradient(circle, rgba(238,114,47,0.2) 0%, transparent 70%)"
                          : "radial-gradient(circle, rgba(181,234,78,0.2) 0%, transparent 70%)",
                      }}
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                        scale: [0.9, 1.1, 0.9],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <Image
                      src={mode === "company" ? prop.iconOrange : prop.iconGreen}
                      alt=""
                      width={200}
                      height={200}
                      className="w-[200px] h-[200px] mx-auto object-contain saturate-[0.8] relative z-10"
                      priority={false}
                    />
                  </div>

                    {/* Content */}
                    <p 
                      className="text-[0.65rem] md:text-xs text-gray-600 leading-relaxed text-center"
                      style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                    >
                      {prop.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Middle Section - Image with Quote */}
        <div className="pt-2 pb-12 md:pt-4 md:pb-20">
          <div className={`mx-auto px-6 md:px-10 ${isMobile ? 'max-w-[280px]' : 'max-w-3xl'}`}>
            <FadeInView direction="up" duration={0.8}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <video
                  src="/video/4.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
                {/* Quote Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center p-8">
                  <p 
                    className={`text-white text-center font-medium leading-relaxed ${isMobile ? 'text-xs' : 'text-base md:text-lg lg:text-xl'}`}
                    style={{ fontFamily: 'var(--font-aeonik-medium)' }}
                  >
                    "Tap into a carefully selected network of top performers who understand the tech of today."
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>

        {/* Bottom Section - Bold Matchmaking */}
        <div className="-mt-[50px] pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            {/* Title */}
            <FadeInView direction="up" delay={0.1}>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-black text-center mb-4"
                style={{ fontFamily: 'var(--font-aeonik-bold)' }}
              >
                Bold Matchmaking
              </h2>
            </FadeInView>

            {/* Subtitle */}
            <FadeInView direction="up" delay={0.2}>
              <p 
                className="text-sm md:text-base text-gray-600 text-center max-w-xl mx-auto mb-10"
                style={{ fontFamily: 'var(--font-aeonik-regular)' }}
              >
                Audacity is driven by the belief that exceptional talent deserves to live exceptionally.
              </p>
            </FadeInView>

            {/* Comparison Cards */}
            <StaggerContainer className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mx-auto mb-10 ${isMobile ? 'max-w-[280px]' : 'max-w-xl'}`} staggerDelay={0.2}>
              {/* Opportunities VS Card */}
              <StaggerItem>
                <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-transform transition-shadow duration-300 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    {/* Clock icon placeholder */}
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="text-black" style={{ fontFamily: 'var(--font-aeonik-semibold)' }}>Opportunities</span>
                  </div>
                  <ul className="space-y-2">
                    {(mode === "company" ? opportunitiesCompany : opportunitiesCandidate).map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-gray-500" style={{ fontFamily: 'var(--font-aeonik-regular)' }}>
                        <span className="text-gray-400">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>

              {/* A Calling Card */}
              <StaggerItem>
                <div className="bg-black border border-black rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-transform transition-shadow duration-300 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    {/* Check icon placeholder */}
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white" style={{ fontFamily: 'var(--font-aeonik-semibold)' }}>A Calling</span>
                  </div>
                  <ul className="space-y-2">
                    {(mode === "company" ? aCallingCompany : aCallingCandidate).map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-white" style={{ fontFamily: 'var(--font-aeonik-regular)' }}>
                        <span className="text-white">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Choose Audacious */}
            <FadeInView direction="up" delay={0.3}>
              <div className="text-center">
                <p 
                  className="text-black text-base md:text-lg mb-2"
                  style={{ fontFamily: 'var(--font-aeonik-medium)' }}
                >
                  Choose audacious.
                </p>
                <div className="flex justify-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
