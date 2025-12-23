"use client";

import Image from "next/image";
import { FadeInView, StaggerContainer, StaggerItem } from "./animations";

const steps = [
  {
    number: "Step 1",
    title: "Prompt the Audacity Engine",
    description: "Tell us about your ideal candidate, their skills, their culture, and their vibes.",
    icon: "/3d_assets/how_to/orange/1.png",
  },
  {
    number: "Step 2",
    title: "Get Talent Profiles",
    description: "Our algorithm chooses from a network of top performers and guarantees your requirements are met.",
    icon: "/3d_assets/how_to/orange/2.png",
  },
  {
    number: "Step 3",
    title: "Meet Your Picks",
    description: "Get a list of candidates within 48h. If Audacity finds more matches, we update your candidate list.",
    icon: "/3d_assets/how_to/orange/3.png",
  },
  {
    number: "Step 4",
    title: "Build Your Team",
    description: "Hire your exceptional human.",
    icon: "/3d_assets/how_to/orange/4.png",
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
  return (
    <section className="w-full bg-[#a8d5c2] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* How It Works */}
        <FadeInView direction="up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2540] mb-8">
            How It Works
          </h2>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20" staggerDelay={0.12}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="flex flex-col group h-full">
                {/* Icon Box */}
                <div className="border border-[#0a2540] p-3 mb-3 aspect-square flex items-center justify-center bg-transparent overflow-hidden">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={120}
                    height={120}
                    className="object-contain w-full h-full saturate-[0.8] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0a2540]">{step.number}</h3>
                <h4 className="text-xs font-bold text-[#0a2540] mb-1">{step.title}</h4>
                <p className="text-xs text-[#0a2540] font-medium leading-tight">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* What Companies Say */}
        <FadeInView direction="up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2540] mb-6">
            What Companies Say
          </h2>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="border border-[#0a2540] overflow-hidden bg-transparent h-full">
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#023329] opacity-20 pointer-events-none"></div>
                </div>
                {/* Content */}
                <div className="p-3">
                  {/* Chat icon */}
                  <svg className="w-5 h-5 text-[#0a2540] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 8h10M7 12h6m-3 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-xs text-[#0a2540] font-medium mb-3 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="text-sm font-bold text-[#0a2540]">{testimonial.name}</p>
                  <p className="text-xs text-[#0a2540] font-medium">{testimonial.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trustpilot */}
        <FadeInView direction="up" delay={0.2}>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#0a2540] font-bold text-sm">Excelent</span>
            {/* Stars */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#0a2540]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-[#0a2540] text-xs font-medium">45 reviews on <strong>Trustpilot</strong></span>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

