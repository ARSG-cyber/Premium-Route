import React from 'react';
import { ArrowRight, Play, Sparkles, Shield } from 'lucide-react';
import { ProductShowcase } from './ProductShowcase';


interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden flex flex-col justify-center">
      
      {/* Background Editorial Image Layer with warm golden hour cinematic glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-lifestyle.jpg"
          alt="Editorial luxury post-purchase lifestyle"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Soft Vignette and dark gradient overlays to ensure razor-sharp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/50 to-black/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#080a0f]/40 to-[#080a0f]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Layout: Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Signature Frosted Capsule inspired directly by the Route reference design */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* The iconic large frosted glass container from the Dribbble inspiration */}
            <div className="w-full p-6 sm:p-9 md:p-11 rounded-[32px] sm:rounded-[40px] bg-black/40 backdrop-blur-2xl border border-white/20 shadow-[0_35px_80px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all duration-300 hover:border-white/30">
              
              {/* Subtle inner top glow reflection */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/18 text-xs font-mono tracking-wider text-[#00f0b5] mb-5 sm:mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#00f0b5]" />
                <span className="uppercase font-semibold text-[11px]">POST-PURCHASE, REIMAGINED</span>
              </div>

              {/* Dramatic Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.08] mb-5 font-display">
                Every delivery. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                  An experience worth remembering.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-white/80 max-w-xl font-normal leading-relaxed mb-8">
                Turn every order into an opportunity to build trust, deepen customer relationships, and drive lasting growth. Route helps you reduce costs, eliminate support friction, and turn shoppers into lifetime brand advocates.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={onOpenDemo}
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#00f0b5] text-black font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-[#3bf8c7] shadow-[0_0_25px_rgba(0,240,181,0.45)] hover:shadow-[0_0_35px_rgba(0,240,181,0.7)] hover:scale-[1.02] active:scale-95 group"
                >
                  <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.5L3.5 19.5h6.5L12 14.5l2 5h6.5L12 2.5z" />
                    </svg>
                  </div>
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <a
                  href="#journey"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/18 text-white font-medium text-sm sm:text-base border border-white/20 transition-all duration-200 backdrop-blur-md group"
                >
                  <Play className="w-4 h-4 text-[#00f0b5] fill-[#00f0b5]/20" />
                  <span>See How It Works</span>
                </a>
              </div>

              {/* Trust Subtext Indicator */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 text-xs text-white/60 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#00f0b5]" />
                  <span>Verified Carbon-Neutral Tracking</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <div className="flex items-center gap-1 text-white/80">
                  <span>Seamless Integration with Shopify Plus, Salesforce & Custom Stacks</span>
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

      {/* Bottom subtle neon cyan glow line inspired by the reference design */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0b5] to-transparent opacity-80" />
    </section>
  );
};
