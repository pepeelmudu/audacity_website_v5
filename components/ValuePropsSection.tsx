"use client";

import Image from "next/image";

const valueProps = [
  {
    icon: "/3d_assets/1_orange.png",
    description: "The best people aren't looking—they're busy crushing it at their current job. That's exactly who you want.",
  },
  {
    icon: "/3d_assets/2_orange.png",
    description: "If your hiring process involves praying someone good applies, you're not recruiting. You're gambling.",
  },
  {
    icon: "/3d_assets/3_orange.png",
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
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 leading-tight max-w-2xl mx-auto">
                Audacity's talent engine identifies top performers before they've thought about leaving their current company.
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-8">
                Your competition is posting jobs.<br />
                You're talking to people who aren't even looking.
              </p>

              {/* Eye Icon */}
              <div className="flex items-center justify-center mb-10">
                <Image
                  src="/logos/little_icons/eye.svg"
                  alt="Eye icon"
                  width={48}
                  height={20}
                  className="w-10 h-4 md:w-12 md:h-5"
                />
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
              {valueProps.map((prop, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl pt-6 pb-3 px-6 md:pt-8 md:pb-4 md:px-8 hover:-translate-y-1 hover:shadow-2xl transition-transform transition-shadow duration-300"
                  style={{
                    background: 'linear-gradient(315deg, rgba(5,16,37,0.5) 0%, rgba(5,16,37,0) 100%)',
                    boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.1), 0 20px 40px -10px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Icon */}
                  <div className="mb-5">
                    <Image
                      src={prop.icon}
                      alt=""
                      width={200}
                      height={200}
                      className="w-[200px] h-[200px] mx-auto object-contain"
                      priority={false}
                    />
                  </div>

                  {/* Content */}
                  <p className="text-[0.65rem] md:text-xs text-white/90 leading-relaxed text-center">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Image with Quote */}
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/human_resources_placeholder_verde.jpg"
                alt="Top performers network"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority={false}
              />
              {/* Quote Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center p-8">
                <p className="text-white text-center text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                  "Tap into a carefully selected network of top performers who understand the tech of today."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Bold Matchmaking */}
        <div className="-mt-[50px] pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            {/* Users Group Icon */}
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

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white text-center mb-4">
              <span style={{ fontFamily: 'var(--font-beltram-black)' }}>Bold</span>{' '}
              <span style={{ fontFamily: 'var(--font-beltram-regular)' }}>Matchmaking</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-white/90 text-center max-w-xl mx-auto mb-10">
              Audacity is driven by the belief that exceptional talent deserves to live exceptionally.
            </p>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-xl mx-auto mb-10">
              {/* Opportunities VS Card */}
              <div
                className="backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-transform transition-shadow duration-300"
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

              {/* A Calling Card */}
              <div
                className="backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-transform transition-shadow duration-300"
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
            </div>

            {/* Choose Audacious */}
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
          </div>
        </div>
      </div>
    </section>
  );
}

