import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';

export const BrandStatement: React.FC = () => {


  return (
    <section className="relative py-32 md:py-48 bg-[#050608] text-white overflow-hidden border-y border-white/10">
      
      {/* Background ambient editorial light beam */}
      <div className="absolute inset-0 bg-radial-at-c from-white/[0.04] via-transparent to-transparent pointer-events-none" />
      
      {/* Dynamic Animated Vector Route Line cutting across the screen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1200 400">
          <path
            d="M -100 350 C 300 380, 500 50, 900 120 S 1300 20, 1400 80"
            fill="none"
            stroke="url(#statementGradient)"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
          <defs>
            <linearGradient id="statementGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0b5" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00f0b5" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#5de2e7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-between border-b border-white/15 pb-6 mb-12 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f0b5] tracking-widest uppercase">
            <Compass className="w-4 h-4 text-[#00f0b5]" />
            <span>EDITORIAL MANIFESTO</span>
          </div>
          <span className="text-xs font-mono text-white/40">
            ARTICLE // 04 — POST-PURCHASE REVOLUTION
          </span>
        </div>

        {/* Dramatic Oversized Editorial Statement */}
        <div className="max-w-5xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold tracking-tight text-white leading-[1.02] font-display">
            The experience <br className="hidden sm:inline" />
            doesn’t end at{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00f0b5] via-[#5de2e7] to-white cursor-pointer transition-all duration-300 hover:scale-105">
              checkout.
              {/* Neon underline indicator */}
              <span className="absolute bottom-1 left-0 right-0 h-1 sm:h-2 bg-[#00f0b5] rounded-full shadow-[0_0_20px_#00f0b5]" />
            </span>
          </h2>
        </div>

        {/* Bottom Supporting Editorial Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 sm:mt-24 pt-10 border-t border-white/10 items-end">
          
          <div className="md:col-span-6">
            <p className="text-lg sm:text-2xl text-white/80 font-normal leading-relaxed">
              Every package is an emotional contract. When you deliver reassurance, beauty, and transparency, customers don’t just return—they champion your brand.
            </p>
          </div>

          <div className="md:col-span-3 text-sm text-white/60 space-y-2">
            <div className="text-white font-mono text-xs uppercase tracking-wider">THE SHIFT</div>
            <p>From fragmented freight tracking to high-converting branded storytelling.</p>
          </div>

          <div className="md:col-span-3 flex md:justify-end">
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs transition-all duration-300 group"
            >
              <span>Explore The Value Impact</span>
              <ArrowUpRight className="w-4 h-4 text-[#00f0b5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
