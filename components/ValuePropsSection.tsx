"use client";

import { useMode } from "@/contexts/ModeContext";
import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, StaggerItem } from "./animations";
import { useIsMobile } from "@/hooks/useIsMobile";

// Datos para las nuevas feature cards
const featureCardsData = [
  {
    number: "01",
    title: "Top performing candidates",
    description: "People busy <strong>crushing</strong> it at their current job. AI-native, using the latest tools, the ones shipping 10x faster.",
    buttonText: "Engage with bold humans",
    imagePosition: "right",
  },
  {
    number: "02",
    title: "Fast hires",
    description: "When it's the right person - you just <strong>know</strong>. Get candidates in 48h and get a taste of their skills.",
    buttonText: "90% hired within 2 weeks",
    imagePosition: "left",
  },
  {
    number: "03",
    title: "Consultants who get it",
    description: "Hiring for top tier talent has become exponentially harder and more important. Our recruiters understand <strong>high-growth</strong> markets.",
    buttonText: "90% hired within 2 weeks",
    imagePosition: "right",
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
                  className="text-xl md:text-2xl lg:text-3xl text-black mb-4 leading-tight max-w-lg mx-auto"
                  style={{ fontFamily: 'var(--font-aeonik-bold)' }}
                >
                  Audacity is driven by the belief that exceptional talent deserves to live & work exceptionally.
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
              
              {/* Find Talent Button */}
              <FadeInView direction="up" delay={0.15}>
                <button
                  className="px-8 py-3 text-white text-sm rounded-full cursor-pointer"
                  style={{ 
                    backgroundColor: '#000000', 
                    fontFamily: 'var(--font-aeonik-medium)' 
                  }}
                >
                  Find Talent
                </button>
              </FadeInView>

            </div>

            {/* New Feature Cards - Alternating Layout */}
            <div className="space-y-12 md:space-y-16 mt-20 md:mt-28">
              {featureCardsData.map((card, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col ${card.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 justify-center`}
                  initial={{ opacity: 0, x: card.imagePosition === 'right' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Text Content */}
                  <div className="w-full md:w-[380px] md:max-w-[380px]">
                    <div className="flex items-start gap-3 mb-2">
                      <span 
                        className="text-gray-400 text-sm"
                        style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                      >
                        {card.number}
                      </span>
                      <h3 
                        className="text-2xl md:text-3xl text-black leading-tight"
                        style={{ fontFamily: 'var(--font-aeonik-bold)' }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <p 
                      className="text-sm md:text-base text-gray-600 mb-4 ml-8"
                      style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    />
                    <button
                      className="ml-8 px-5 py-2 text-black text-sm rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
                      style={{ fontFamily: 'var(--font-aeonik-medium)' }}
                    >
                      {card.buttonText}
                    </button>
                  </div>

                  {/* Visual Placeholder */}
                  <motion.div
                    className="w-full md:w-[380px] md:max-w-[380px]"
                    initial={{ opacity: 0, x: card.imagePosition === 'right' ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div 
                      className="aspect-square rounded-3xl flex items-center justify-center"
                      style={{
                        background: mode === "company" 
                          ? 'linear-gradient(135deg, #ee722f 0%, #f5a67a 50%, #fce4d6 100%)'
                          : 'linear-gradient(135deg, #8fcb17 0%, #b8e06a 50%, #e8f5d6 100%)',
                      }}
                    >
                      <span 
                        className="text-white/60 text-lg"
                        style={{ fontFamily: 'var(--font-aeonik-medium)' }}
                      >
                        visual
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Image with Quote */}
        <div className="pt-16 pb-20 md:pt-24 md:pb-32">
          <div className={`mx-auto px-6 md:px-10 ${isMobile ? 'max-w-[280px]' : 'max-w-3xl'}`}>
            <FadeInView direction="up" duration={0.8}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <video
                  src="/video/6.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
                {/* Quote Overlay - con capa oscura al 20% */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8">
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
        <div className="mt-3 pb-16 md:mt-2 md:pb-24">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            {/* Title */}
            <FadeInView direction="up" delay={0.1}>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-black text-center mb-4"
                style={{ fontFamily: 'var(--font-aeonik-regular)' }}
              >
                <span style={{ fontFamily: 'var(--font-aeonik-black)', fontWeight: 900 }}>Bold</span> Matchmaking
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
            <StaggerContainer className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mx-auto mb-10 ${isMobile ? 'max-w-[280px]' : 'max-w-[38rem]'}`} staggerDelay={0.2}>
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
                <div className="rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-transform transition-shadow duration-300 h-full" style={{ backgroundColor: '#1c232c', borderColor: '#1c232c' }}>
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
            <motion.div 
              className="text-center mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
            >
              <p 
                className="text-black text-base md:text-lg mb-4"
                style={{ fontFamily: 'var(--font-aeonik-medium)' }}
              >
                Choose{" "}
                <span className="relative inline-block">
                  <motion.span
                    className="absolute inset-0"
                    style={{ 
                      originX: 0,
                      zIndex: -1,
                      top: '10%',
                      bottom: '10%',
                      left: '-4px',
                      right: '-4px',
                      backgroundColor: 'rgba(138, 173, 229, 0.5)',
                    }}
                    initial={{ scaleX: 0 }}
                    variants={{
                      hidden: { scaleX: 0 },
                      visible: { scaleX: 1 }
                    }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  />
                  <span className="relative z-10">audacious.</span>
                </span>
              </p>
              <div className="flex justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1c232c' }}></span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1c232c' }}></span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1c232c' }}></span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
