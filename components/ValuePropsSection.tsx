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

const opportunitiesVS = [
  "Post job to gather CVs",
  "Search resumes by keywords",
  "Mass email campaigns",
  "Work with several recruiters",
];

const aCalling = [
  "Connecting you to vetted top performers",
  "Your requirements matched perfectly",
  "We do the hunting, you do the choosing",
  "Relationships that last",
];

export function ValuePropsSection() {
  const { mode } = useMode();
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/bg/blur_6.jpg"
          alt="Background"
          fill
          className="object-cover object-top"
          priority={false}
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top Section - Value Props */}
        <div className="pt-16 pb-8 md:pt-24 md:pb-12">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            {/* Top Text Content */}
            <div className="text-center">
              <FadeInView direction="up" delay={0}>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 leading-tight max-w-2xl mx-auto">
                  Audacity's talent engine identifies top performers before they've thought about leaving their current company.
                </h2>
              </FadeInView>
              <FadeInView direction="up" delay={0.1}>
                <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-8">
                  Your competition is posting jobs.<br />
                  You're talking to people who aren't even looking.
                </p>
              </FadeInView>

              {/* Eye Icon */}
              <FadeInView direction="up" delay={0.2}>
                <div className="flex items-center justify-center mb-10">
                  <Image
                    src="/logos/little_icons/eye.svg"
                    alt="Eye icon"
                    width={48}
                    height={20}
                    className="w-10 h-4 md:w-12 md:h-5"
                  />
                </div>
              </FadeInView>
            </div>

            {/* Feature Cards Grid */}
            <StaggerContainer className={`grid gap-5 md:gap-6 mx-auto ${isMobile ? 'grid-cols-1 max-w-[280px]' : 'grid-cols-3 max-w-[52rem]'}`} staggerDelay={0.15}>
              {valuePropsData.map((prop, index) => (
                <StaggerItem key={index}>
                  <div
                    className={`backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl pt-6 pb-3 px-4 md:pt-8 md:pb-4 md:px-5 hover:-translate-y-1 hover:shadow-2xl transition-transform transition-shadow duration-300 h-full ${isMobile ? 'aspect-[1/1.3] flex flex-col justify-center' : ''}`}
                    style={{
                      background: 'linear-gradient(315deg, rgba(5,16,37,0.5) 0%, rgba(5,16,37,0) 100%)',
                      boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 20px 40px -10px rgba(0,0,0,0.3)',
                    }}
                  >
                  {/* Icon */}
                  <div className="mb-5 relative">
                    {/* Animated glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full blur-2xl"
                      style={{
                        background: mode === "company" 
                          ? "radial-gradient(circle, rgba(238,114,47,0.4) 0%, transparent 70%)"
                          : "radial-gradient(circle, rgba(181,234,78,0.4) 0%, transparent 70%)",
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
                    <p className="text-[0.65rem] md:text-xs text-white/90 leading-relaxed text-center">
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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
                  <p className={`text-white text-center font-medium leading-relaxed ${isMobile ? 'text-xs' : 'text-base md:text-lg lg:text-xl'}`}>
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
            {/* Users Group Icon */}
            <FadeInView direction="up" delay={0}>
              <div className="flex items-center justify-center mt-4 mb-4">
                <Image
                  src="/logos/little_icons/Users_Group.svg"
                  alt="Users group icon"
                  width={32}
                  height={32}
                  className="w-8 h-8 invert brightness-0"
                  style={{ filter: 'invert(1) brightness(100)' }}
                />
              </div>
            </FadeInView>

            {/* Title */}
            <FadeInView direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white text-center mb-4">
                <span style={{ fontFamily: 'var(--font-beltram-black)' }}>Bold</span>{' '}
                <span style={{ fontFamily: 'var(--font-beltram-regular)' }}>Matchmaking</span>
              </h2>
            </FadeInView>

            {/* Subtitle */}
            <FadeInView direction="up" delay={0.2}>
              <p className="text-sm md:text-base text-white/90 text-center max-w-xl mx-auto mb-10">
                Audacity is driven by the belief that exceptional talent deserves to live exceptionally.
              </p>
            </FadeInView>

            {/* Comparison Cards */}
            <StaggerContainer className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mx-auto mb-10 ${isMobile ? 'max-w-[280px]' : 'max-w-xl'}`} staggerDelay={0.2}>
              {/* Opportunities VS Card */}
              <StaggerItem>
                <div
                  className="backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-transform transition-shadow duration-300 h-full"
                  style={{
                    background: 'linear-gradient(315deg, rgba(1,66,74,0.5) 0%, rgba(1,66,74,0.5) 100%)',
                    boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 20px 40px -10px rgba(0,0,0,0.3)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {/* Clock icon placeholder */}
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="text-white font-semibold">Opportunities VS</span>
                  </div>
                  <ul className="space-y-2">
                    {opportunitiesVS.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-white/70">
                        <span className="text-white/50">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>

              {/* A Calling Card */}
              <StaggerItem>
                <div
                  className="backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-transform transition-shadow duration-300 h-full"
                  style={{
                    background: 'linear-gradient(315deg, rgba(168,213,194,0.6) 0%, rgba(168,213,194,0.2) 100%)',
                    boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.2), 0 20px 40px -10px rgba(0,0,0,0.3)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {/* Check icon placeholder */}
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-black font-semibold">A calling</span>
                  </div>
                  <ul className="space-y-2">
                    {aCalling.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-black">
                        <span className="text-black">›</span>
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
                <p className="text-white text-base md:text-lg font-medium mb-2">
                  Choose audacious.
                </p>
                <div className="flex justify-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}

