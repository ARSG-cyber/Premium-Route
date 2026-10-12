import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="relative py-28 md:py-40 bg-[#f1f5f9] text-slate-900 overflow-hidden border-y border-slate-200">
      
      {/* Dynamic Animated Vector Route Line cutting across the screen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
          <path
            d="M -100 350 C 300 380, 500 50, 900 120 S 1300 20, 1400 80"
            fill="none"
            stroke="url(#statementGradientClean)"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <defs>
            <linearGradient id="statementGradientClean" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d49f" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00d49f" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-between border-b border-slate-300/80 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 tracking-widest uppercase font-bold">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>EDITORIAL MANIFESTO</span>
          </div>
          <span className="text-xs font-mono text-slate-400 font-semibold">
            ARTICLE // 04 — POST-PURCHASE REVOLUTION
          </span>
        </div>

        {/* Dramatic Oversized Editorial Statement */}
        <div className="max-w-5xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold tracking-tight text-slate-900 leading-[1.02] font-display">
            The experience <br className="hidden sm:inline" />
            doesn’t end at{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-900 transition-all duration-300">
              checkout.
              {/* Mint underline indicator */}
              <span className="absolute bottom-1 left-0 right-0 h-1 sm:h-2 bg-[#00d49f] rounded-full shadow-sm" />
            </span>
          </h2>
        </div>

        {/* Bottom Supporting Editorial Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-14 sm:mt-20 pt-8 border-t border-slate-300/80 items-end">
          
          <div className="md:col-span-6">
            <p className="text-lg sm:text-2xl text-slate-700 font-normal leading-relaxed">
              Every package is an emotional contract. When you deliver reassurance, beauty, and transparency, customers don’t just return—they champion your brand.
            </p>
          </div>

          <div className="md:col-span-3 text-sm text-slate-600 space-y-1.5">
            <div className="text-slate-900 font-mono text-xs uppercase tracking-wider font-bold">THE SHIFT</div>
            <p>From fragmented freight tracking to high-converting branded storytelling.</p>
          </div>

          <div className="md:col-span-3 flex md:justify-end">
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-semibold text-xs shadow-sm transition-all duration-200 group"
            >
              <span>Explore The Value Impact</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
