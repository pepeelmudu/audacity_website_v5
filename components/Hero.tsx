"use client";

import { useMode } from "@/contexts/ModeContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  const { mode } = useMode();

  const subtitleText =
    mode === "company"
      ? "Elite Talent Doesn't Apply. They Get Invited."
      : "Elite Opportunities Don't Wait. They Find You.";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/company_bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>
      
      {/* Dark Gradient Overlay - darker top, slightly lighter bottom */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/25" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Eye Logo */}
        <div className="mb-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30000 10600"
            className="w-[134px] h-[48px] sm:w-[168px] sm:h-[60px] lg:w-[202px] lg:h-[71px] xl:w-[224px] xl:h-[79px]"
          >
            <defs>
              <style>{`
                .fil0 { fill: white; }
                .fil1 { fill: #0f172a; }
              `}</style>
            </defs>
            <g>
              <path
                className="fil0"
                d="M2600 5994l1194 449c3445,1294 6891,2589 10336,3883 561,211 1179,211 1740,0 3445,-1294 6891,-2588 10337,-3883 397,-150 795,-299 1193,-449 616,-231 1233,-462 1849,-694l-1849 -694 -1193 -449c-3446,-1294 -6892,-2589 -10337,-3883 -561,-211 -1179,-211 -1740,0 -3445,1294 -6891,2589 -10336,3883 -398,150 -796,299 -1194,449 -616,231 -1232,463 -1849,694l1849 694zm12355 -4700l-426 1985 -1985 426 1985 427 426 1985 426 -1985 1985 -427 -1988 -439 -423 -1972zm-3008 2405c-2,667 216,1339 667,1898 1044,1291 2941,1492 4232,449 746,-603 1128,-1490 1117,-2381l4352 1635 -7054 2650 -261 98 -261 -98 -7054 -2650 4262 -1601z"
              />
              <polygon
                className="fil1"
                points="14955,1294 15378,3266 17366,3705 15381,4132 14955,6117 14529,4132 12544,3705 14529,3279"
              />
            </g>
          </svg>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-4 leading-[1.1]">
          Talent Engine for
          <br />
          Exceptional Humans
        </h1>

        {/* Subtitle */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-lg sm:text-xl lg:text-2xl text-white leading-tight">
            {subtitleText.split(". ")[0]}.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-white leading-tight">
            {subtitleText.split(". ")[1]}
          </p>
        </div>

        {/* Form Title - Outside the panel */}
        <div className="w-full max-w-2xl mb-4 ml-[100px] mr-[30px]">
          <h2 className="text-sm sm:text-base font-semibold text-white mb-1">
            Who are you looking for?
          </h2>
          <p className="text-xs text-white">
            Describe your ideal candidate, experience, culture, and anything
            else you consider important:
          </p>
        </div>

        {/* Glassmorphism Form Panel */}
        <div className="w-full max-w-2xl backdrop-blur-2xl bg-white/10 rounded-3xl border border-white/30 shadow-lg p-4 sm:p-5 lg:p-6">
          {/* Large Textarea */}
          <textarea
            placeholder="e.g., We're looking for a senior frontend engineer with 5+ years of React experience, strong TypeScript skills, and a passion for building elegant user interfaces. Bonus points for design system experience..."
            className="w-full h-32 sm:h-36 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none mb-3 sm:mb-4"
          />

          {/* Input Grid - 2x2 on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5">
            <div>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm"
                placeholder="Company Name*"
              />
            </div>
            <div>
              <input
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm"
                placeholder="Contact Email*"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm"
                placeholder="Contact Linkedin"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm"
                placeholder="Contact Telegram"
              />
            </div>
          </div>

          {/* File Upload Option */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-green-400"
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
            <span className="text-white/70 text-sm sm:text-base">
              Attach Job Description (optional)
            </span>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto px-10 py-5 sm:px-12 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all hover:scale-105 text-white border-0 bg-green-500 hover:bg-green-600"
            >
              Activate Talent Engine
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
