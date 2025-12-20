"use client";

import { useMode } from "@/contexts/ModeContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CompaniesBar } from "@/components/CompaniesBar";

export function Hero() {
  const { mode, accentColor } = useMode();

  const subtitleText =
    mode === "company"
      ? "Elite Talent Doesn't Apply. They Get Invited."
      : "Elite Opportunities Don't Wait. They Find You.";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden pb-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/company_bg_v5.jpg"
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
        {/* Eye Logo */}
        <div className="mb-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30000 12500"
            className="w-[134px] h-[48px] sm:w-[168px] sm:h-[60px] lg:w-[202px] lg:h-[71px] xl:w-[224px] xl:h-[79px]"
          >
            <defs>
              <style>{`
                .str0 {stroke:white;stroke-width:7.62}
                .fil2 {fill:white;fill-rule:nonzero}
                .fil1 {fill:white;fill-rule:nonzero}
                .fil0 {fill:#0f172a;fill-rule:nonzero}
              `}</style>
            </defs>
            <g>
              <polygon className="fil0" points="15000,2306 14561,4352 12514,4792 14561,5231 15000,7278 15439,5231 17486,4792 15439,4352" />
              <path className="fil1" d="M2525 55622c-2,667 216,1339 667,1898 1044,1291 2941,1492 4232,449 746,-603 1128,-1490 1117,-2381l4352 1635 -7054 2650 -261 98 -261 -98 -7054 -2650 4262 -1601z" />
              <polygon className="fil1" points="5533,53217 5107,55202 3122,55628 5107,56055 5533,58040 5959,56055 7944,55628 5959,55202" />
              <g>
                <path className="fil2 str0" d="M2571 6946l1197 450 10360 3892c562,211 1182,211 1744,0l10360 -3892 1197 -450 1852 -696 -1852 -696 -1197 -450 -10360 -3892c-562,-211 -1182,-211 -1744,0l-10360 3892 -1197 450 -1852 696 1852 696zm14324 49c844,-682 1223,-1726 1096,-2729l403 152 4877 1832 -7976 2997 -295 110 -295 -110 -7976 -2997 4877 -1832 403 -152c-100,788 108,1613 645,2278 1046,1295 2947,1497 4241,451z" />
                <polygon className="fil0 str0" points="15000,2232 14573,4222 12583,4649 14573,5076 15000,7066 15427,5076 17417,4649 15427,4222" />
              </g>
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

        {/* Glassmorphism Form Panel */}
        <div className="w-full max-w-2xl backdrop-blur-[32px] bg-white/20 rounded-[1.8rem] border border-white/30 shadow-lg pt-3 pb-3 px-4 sm:pt-4 sm:pb-4 sm:px-5 lg:pt-5 lg:pb-5 lg:px-6">
          {/* Form Title - Inside the panel */}
          <div className="mb-4">
            <h2 className="text-sm sm:text-base font-semibold text-white mb-1" style={{ textShadow: '0 2px 8px rgba(15, 23, 42, 0.5)' }}>
              Who are you looking for?
            </h2>
            <p className="text-xs text-white" style={{ textShadow: '0 2px 8px rgba(15, 23, 42, 0.5)' }}>
              Describe your ideal candidate, experience, culture, and anything
              else you consider important:
            </p>
          </div>

          {/* Large Textarea */}
          <textarea
            placeholder="e.g., We're looking for a senior frontend engineer with 5+ years of React experience, strong TypeScript skills, and a passion for building elegant user interfaces. Bonus points for design system experience..."
            className="w-full h-32 sm:h-36 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none mb-3 sm:mb-4 text-[0.825rem]"
          />

          {/* Input Grid - 2x2 on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5">
            <div>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[0.825rem]"
                placeholder="Company Name*"
              />
            </div>
            <div>
              <input
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[0.825rem]"
                placeholder="Contact Email*"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[0.825rem]"
                placeholder="Contact Linkedin"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[0.825rem]"
                placeholder="Contact Telegram"
              />
            </div>
          </div>

          {/* File Upload Option */}
          <div className="flex items-center gap-3 mb-6">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: `${accentColor}33`,
                borderColor: `${accentColor}4d`,
                borderWidth: '1px',
                borderStyle: 'solid',
              }}
            >
              <svg
                width="20"
                height="20"
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
            <span className="text-white/70 text-[0.7rem]">
              Attach Job Description (optional)
            </span>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center -mt-5">
            <Button
              size="lg"
              className="px-4 pt-4 pb-5 sm:px-5 sm:pt-5 sm:pb-6 text-sm sm:text-base font-semibold rounded-full transition-all hover:scale-105 text-black border-0"
              style={{
                backgroundColor: accentColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = mode === "company" ? "#44e690" : "#f2376c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = accentColor;
              }}
            >
              Activate Talent Engine
            </Button>
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
