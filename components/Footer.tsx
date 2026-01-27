"use client";

import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

const helpSupport = [
  { label: "FAQs", href: "#" },
  { label: "Blog", href: "#" },
];

const company = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
];

const legal = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
];

export function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer className="w-full py-12 md:py-16 border-t border-gray-300/50" style={{ backgroundColor: '#ECECEC' }}>
      <div className={`mx-auto px-6 md:px-10 ${isMobile ? 'max-w-[280px]' : 'max-w-5xl'}`}>
        {/* Main Footer Content */}
        {isMobile ? (
          // Móvil: 3 columnas horizontales pequeñas
          <div className="flex justify-between items-start gap-4 mb-6">
            {/* Help & Support */}
            <div className="text-center flex-1">
              <h4 className="text-black mb-1 text-[9px]" style={{ fontFamily: 'var(--font-aeonik-semibold)' }}>Help</h4>
              <ul className="space-y-0.5">
                {helpSupport.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-500 text-[8px] hover:text-black transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="text-center flex-1">
              <h4 className="text-black mb-1 text-[9px]" style={{ fontFamily: 'var(--font-aeonik-semibold)' }}>Company</h4>
              <ul className="space-y-0.5">
                {company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-500 text-[8px] hover:text-black transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="text-center flex-1">
              <h4 className="text-black mb-1 text-[9px]" style={{ fontFamily: 'var(--font-aeonik-semibold)' }}>Legal</h4>
              <ul className="space-y-0.5">
                {legal.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-500 text-[8px] hover:text-black transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          // Desktop: Logo + 3 secciones
          <div className="flex justify-between mb-12">
            {/* Logo and Tagline */}
            <div>
              <Image
                src="/logos/audacity_text.svg"
                alt="Audacity"
                width={120}
                height={28}
                className="h-6 mb-2"
              />
              <p className="text-gray-500 text-[10px] leading-relaxed" style={{ fontFamily: 'var(--font-aeonik-regular)' }}>
                Find AI-native talent and<br />
                fill open roles faster.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-24 md:gap-32">
              {/* Help & Support */}
              <div>
                <h4 className="text-black mb-3 text-sm" style={{ fontFamily: 'var(--font-aeonik-semibold)' }}>Help & Support</h4>
                <ul className="space-y-2">
                  {helpSupport.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-gray-500 text-xs hover:text-black transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-black mb-3 text-sm" style={{ fontFamily: 'var(--font-aeonik-semibold)' }}>Company</h4>
                <ul className="space-y-2">
                  {company.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-gray-500 text-xs hover:text-black transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-black mb-3 text-sm" style={{ fontFamily: 'var(--font-aeonik-semibold)' }}>Legal</h4>
                <ul className="space-y-2">
                  {legal.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-gray-500 text-xs hover:text-black transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-aeonik-regular)' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-gray-200 mb-6"></div>

        {/* Bottom Section */}
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isMobile ? 'text-center' : ''}`}>
          {/* Copyright */}
          <p className={`text-gray-400 ${isMobile ? 'text-[8px]' : 'text-[10px]'}`} style={{ fontFamily: 'var(--font-aeonik-regular)' }}>
            © 2025 Audacity. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className={`flex items-center ${isMobile ? 'gap-4' : 'gap-3'}`}>
            {/* LinkedIn */}
            <Link href="#" className="text-gray-400 hover:text-black transition-colors duration-200">
              <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>

            {/* GitHub */}
            <Link href="#" className="text-gray-400 hover:text-black transition-colors duration-200">
              <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>

            {/* X (Twitter) */}
            <Link href="#" className="text-gray-400 hover:text-black transition-colors duration-200">
              <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>

            {/* Twitch */}
            <Link href="#" className="text-gray-400 hover:text-black transition-colors duration-200">
              <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
