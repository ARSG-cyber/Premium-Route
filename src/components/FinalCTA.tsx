import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Mail } from 'lucide-react';

interface FinalCTAProps {
  onOpenDemo: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative py-28 md:py-40 bg-[#06080b] text-white overflow-hidden">
      
      {/* Background glow and gradient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#00f0b5]/15 to-[#5de2e7]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#00f0b5] mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#00f0b5]" />
          <span>START YOUR REIMAGINED JOURNEY</span>
        </div>

        {/* Closing Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display leading-[1.08] mb-6">
          Make every order the beginning <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
            of something better.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Create a post-purchase experience your customers remember. Build unbreakable trust, turn deliveries into brand milestones, and keep shoppers coming back.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#00f0b5] text-black font-semibold text-base transition-all duration-300 hover:bg-[#34f8c4] shadow-[0_0_35px_rgba(0,240,181,0.5)] hover:shadow-[0_0_45px_rgba(0,240,181,0.8)] hover:scale-105 active:scale-95 group"
          >
            <span>Let’s Talk</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#tracking-experience"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/18 text-white font-medium text-base border border-white/20 transition-all duration-200 backdrop-blur-md"
          >
            <span>Explore the Platform</span>
          </a>
        </div>

        {/* Assurance badges */}
        <div className="mt-12 flex items-center justify-center gap-6 sm:gap-10 text-xs text-white/50 flex-wrap">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00f0b5]" />
            <span>Zero-Risk Integration</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#00f0b5]" />
            <span>Certified Green Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#00f0b5]" />
            <span>Dedicated Onboarding Support</span>
          </div>
        </div>

      </div>

    </section>
  );
};
