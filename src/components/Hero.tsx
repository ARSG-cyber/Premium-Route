import React from 'react';
import { ArrowRight, Play, Sparkles, Shield } from 'lucide-react';
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
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.02] scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Soft, clean, luminous frosted gradient overlays for maximum editorial elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/40 to-white/30" />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Layout: Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Clean Signature Frosted Capsule inspired directly by Route design */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="w-full p-6 sm:p-9 md:p-11 rounded-[32px] sm:rounded-[40px] bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_30px_70px_rgba(15,23,42,0.1)] relative overflow-hidden transition-all duration-300">
              
              {/* Subtle top reflection */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00d49f]/40 to-transparent" />
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-200/80 text-xs font-mono tracking-wider text-emerald-700 mb-5 sm:mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span className="uppercase font-bold text-[11px]">POST-PURCHASE, REIMAGINED</span>
              </div>

              {/* Bold Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 leading-[1.08] mb-5 font-display">
                Every delivery. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700">
                  An experience worth remembering.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-700 max-w-xl font-normal leading-relaxed mb-8">
                Turn every order into an opportunity to build trust, deepen customer relationships, and drive lasting growth. Route helps you reduce costs, eliminate support friction, and retain customers effortlessly.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={onOpenDemo}
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#00d49f] hover:bg-[#00e3aa] text-black font-semibold text-sm sm:text-base transition-all duration-200 shadow-[0_4px_20px_rgba(0,212,159,0.35)] hover:scale-[1.02] active:scale-95 group"
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
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base border border-slate-200 shadow-sm transition-all duration-200"
                >
                  <Play className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
                  <span>See How It Works</span>
                </a>
              </div>

              {/* Trust Subtext Indicator */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center gap-4 text-xs text-slate-500 flex-wrap">
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>Verified Carbon-Neutral Tracking</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <div className="flex items-center gap-1 text-slate-600">
                  <span>Seamless Integration with Shopify Plus, BigCommerce & Custom Stacks</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Live Product Tracking Experience Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <ProductShowcase />
          </div>

        </div>

      </div>

      {/* Bottom subtle clean line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />
    </section>
  );
};
