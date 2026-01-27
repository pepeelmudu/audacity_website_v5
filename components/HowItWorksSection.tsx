"use client";

import Image from "next/image";
import { FadeInView, StaggerContainer, StaggerItem } from "./animations";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useMode } from "@/contexts/ModeContext";
import { ExpertMatchingSection } from "./ExpertMatchingSection";

const steps = [
  {
    number: "Step 1",
    title: "Prompt the Audacity Engine",
    description: "Tell us about your ideal candidate, their skills, their culture, and their vibes.",
    iconOrange: "/3d_assets/how_to/orange/1.png",
    iconGreen: "/3d_assets/how_to/orange/how_1_green.png",
  },
  {
    number: "Step 2",
    title: "Get Talent Profiles",
    description: "Our algorithm chooses from a network of top performers and guarantees your requirements are met.",
    iconOrange: "/3d_assets/how_to/orange/2.png",
    iconGreen: "/3d_assets/how_to/orange/how_2_green.png",
  },
  {
    number: "Step 3",
    title: "Meet Your Picks",
    description: "Get a list of candidates within 48h. If Audacity finds more matches, we update your candidate list.",
    iconOrange: "/3d_assets/how_to/orange/3.png",
    iconGreen: "/3d_assets/how_to/orange/how_3_green.png",
  },
  {
    number: "Step 4",
    title: "Build Your Team",
    description: "Hire your exceptional human.",
    iconOrange: "/3d_assets/how_to/orange/4.png",
    iconGreen: "/3d_assets/how_to/orange/how_4_green.png",
  },
];

const testimonials = [
  {
    image: "/images/what_c_say/1.jpg",
    quote: "Audacity didn't just find us a developer, they found us the perfect team member. The quality of candidates is unmatched.",
    name: "Sarah Chen",
    role: "CTO, TechVision AI",
  },
  {
    image: "/images/what_c_say/2.jpg",
    quote: "We've tried every recruiting platform out there. Audacity is the only one that actually understands what we're looking for.",
    name: "Marcus Rodriguez",
    role: "Head of Talent, StreamFlow",
  },
  {
    image: "/images/what_c_say/3.jpg",
    quote: "The talent engine is incredible. We filled three senior positions in two weeks. That's unheard of in our industry.",
    name: "Emily Watson",
    role: "VP of Engineering, CloudScale",
  },
];

export function HowItWorksSection() {
  const isMobile = useIsMobile();
  const { mode } = useMode();

  return (
    <section className="w-full py-12 md:py-20" style={{ backgroundColor: '#ECECEC' }}>
      <div className={`mx-auto px-6 md:px-10 ${isMobile ? 'max-w-[280px]' : 'max-w-4xl'}`}>
        {/* How Audacity Works */}
        <FadeInView direction="up">
          <h2 
            className={`text-black text-center mb-2 ${isMobile ? 'text-xl' : 'text-2xl md:text-3xl lg:text-4xl'}`}
            style={{ fontFamily: 'var(--font-aeonik-bold)' }}
          >
            How Audacity Works
          </h2>
        </FadeInView>

        {/* Expert Matching Interactive Section */}
        <ExpertMatchingSection />

        <StaggerContainer className={`grid gap-6 mb-20 mt-24 ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-4'}`} staggerDelay={0.12}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className={`flex flex-col group h-full ${isMobile ? 'items-center text-center' : ''}`}>
                {/* Icon Box */}
                <div className="border border-gray-300 p-3 mb-3 aspect-square flex items-center justify-center bg-white overflow-hidden w-full rounded-lg">
                  <Image
                    src={mode === "company" ? step.iconOrange : step.iconGreen}
                    alt={step.title}
                    width={120}
                    height={120}
                    className="object-contain w-full h-full saturate-[0.8] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg text-black" style={{ fontFamily: 'var(--font-aeonik-bold)' }}>{step.number}</h3>
                <h4 className="text-xs text-black mb-1" style={{ fontFamily: 'var(--font-aeonik-semibold)' }}>{step.title}</h4>
                <p className="text-xs text-gray-600 leading-tight" style={{ fontFamily: 'var(--font-aeonik-regular)' }}>{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* What Companies Say */}
        <FadeInView direction="up">
          <h2 
            className={`text-black mb-6 ${isMobile ? 'text-xl text-center' : 'text-2xl md:text-3xl lg:text-4xl'}`}
            style={{ fontFamily: 'var(--font-aeonik-bold)' }}
          >
            What Companies Say
          </h2>
        </FadeInView>

        <StaggerContainer className={`grid gap-4 mb-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`} staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className={`border border-gray-200 overflow-hidden bg-white h-full rounded-lg ${isMobile ? 'max-w-[240px] mx-auto' : ''}`}>
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                {/* Content */}
                <div className="p-3">
                  {/* Chat icon */}
                  <svg className="w-5 h-5 text-gray-400 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 8h10M7 12h6m-3 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className={`text-gray-600 mb-3 leading-relaxed ${isMobile ? 'text-[10px]' : 'text-xs'}`} style={{ fontFamily: 'var(--font-aeonik-regular)' }}>&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className={`text-black ${isMobile ? 'text-xs' : 'text-sm'}`} style={{ fontFamily: 'var(--font-aeonik-semibold)' }}>{testimonial.name}</p>
                  <p className={`text-gray-500 ${isMobile ? 'text-[10px]' : 'text-xs'}`} style={{ fontFamily: 'var(--font-aeonik-regular)' }}>{testimonial.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trustpilot */}
        <FadeInView direction="up" delay={0.2}>
          <div className={`flex items-center gap-2 flex-wrap ${isMobile ? 'justify-center' : ''}`}>
            <span className={`text-black ${isMobile ? 'text-xs' : 'text-sm'}`} style={{ fontFamily: 'var(--font-aeonik-semibold)' }}>Excellent</span>
            {/* Stars */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`text-black ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className={`text-gray-500 ${isMobile ? 'text-[10px]' : 'text-xs'}`} style={{ fontFamily: 'var(--font-aeonik-regular)' }}>45 reviews on <strong>Trustpilot</strong></span>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
