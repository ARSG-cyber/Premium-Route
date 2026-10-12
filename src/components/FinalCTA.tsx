import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Mail } from 'lucide-react';

interface FinalCTAProps {
  onOpenDemo: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative py-28 md:py-36 bg-[#f8fafc] text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* Background soft ambient pastel lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-100/60 to-teal-100/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-200 text-xs font-mono text-emerald-700 mb-6 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>START YOUR REIMAGINED JOURNEY</span>
        </div>

        {/* Closing Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 font-display leading-[1.08] mb-6">
          Make every order the beginning <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-slate-900">
            of something better.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Create a post-purchase experience your customers remember. Build unbreakable trust, turn deliveries into brand milestones, and keep shoppers coming back.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#00d49f] hover:bg-[#00e3aa] text-black font-bold text-base transition-all duration-200 shadow-[0_4px_20px_rgba(0,212,159,0.35)] hover:scale-105 active:scale-95 group"
          >
            <span>Let’s Talk</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#tracking-experience"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all duration-200"
          >
            <span>Explore the Platform</span>
          </a>
        </div>

        {/* Assurance badges */}
        <div className="mt-12 flex items-center justify-center gap-6 sm:gap-10 text-xs text-slate-500 flex-wrap">
          <div className="flex items-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero-Risk Integration</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Certified Green Shipping</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <Mail className="w-4 h-4 text-emerald-600" />
            <span>Dedicated Onboarding Support</span>
          </div>
        </div>

      </div>

    </section>
  );
};
