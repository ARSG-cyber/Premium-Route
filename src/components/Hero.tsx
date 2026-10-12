import React from 'react';
import { ArrowRight, Play, Sparkles, ShieldCheck } from 'lucide-react';
import { ProductShowcase } from './ProductShowcase';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden flex flex-col justify-center bg-[#f8fafc]">
      
      {/* Background Editorial Image Layer with warm golden hour sunlight */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-lifestyle.jpg"
          alt="Editorial luxury post-purchase lifestyle"
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.02] scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Clean, luminous frosted gradient overlays for maximum editorial elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/55 to-white/40" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Center-Focused Editorial Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 text-xs font-mono tracking-wider text-emerald-800 mb-6 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="uppercase font-bold text-[11px]">POST-PURCHASE, REIMAGINED</span>
          </div>

          {/* Bold Centered Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-slate-900 leading-[1.06] mb-6 font-display">
            Turn every post-purchase <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700">
              moment into loyalty.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-slate-700 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Route helps you reduce costs, increase revenue, and retain customers. Turn every delivery into an opportunity to build unbreakable trust.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00d49f] hover:bg-[#00e3aa] text-black font-bold text-sm sm:text-base transition-all duration-200 shadow-[0_4px_20px_rgba(0,212,159,0.35)] hover:scale-105 active:scale-95 group"
            >
              <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5L3.5 19.5h6.5L12 14.5l2 5h6.5L12 2.5z" />
                </svg>
              </div>
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="#journey"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base border border-slate-200 shadow-sm transition-all duration-200"
            >
              <Play className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
              <span>See How It Works</span>
            </a>
          </div>

          {/* Quick trust metrics */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Carbon-Neutral Certified</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Used by 15,000+ Leading Retailers</span>
          </div>

        </div>

        {/* Centerpiece: The Convincing Package-Tracking Product Experience */}
        <div id="tracking-experience" className="max-w-2xl mx-auto">
          <ProductShowcase />
        </div>

      </div>

      {/* Bottom subtle clean hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />
    </section>
  );
};
