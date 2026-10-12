import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Compass, Package, Sparkles } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('manifesto-section');
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
      setScrollYProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Position of moving package along the path
  const packageOffsetPercent = Math.min(Math.max(scrollYProgress * 100, 10), 92);
  const secondSentenceRevealed = scrollYProgress > 0.35;

  return (
    <section 
      id="manifesto-section"
      className="relative py-32 md:py-48 bg-[#f8fafc] text-slate-900 overflow-hidden border-y border-slate-200 transition-colors duration-700"
    >
      
      {/* Dynamic Animated Vector Route Line cutting across the screen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
          <path
            d="M -100 350 C 300 380, 500 80, 850 140 S 1200 60, 1400 90"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="3"
            strokeDasharray="6 6"
          />
          <path
            d="M -100 350 C 300 380, 500 80, 850 140 S 1200 60, 1400 90"
            fill="none"
            stroke="#00d49f"
            strokeWidth="4"
            strokeDasharray="12 12"
            className="animate-pulse"
          />
        </svg>

        {/* Small package icon gliding dynamically along the path as page scrolls */}
        <div 
          className="absolute transition-all duration-300 ease-out flex items-center justify-center shadow-lg"
          style={{
            left: `${packageOffsetPercent}%`,
            top: `${30 + Math.sin(scrollYProgress * Math.PI) * 20}%`
          }}
        >
          <div className="w-9 h-9 rounded-full bg-[#00d49f] border-2 border-white shadow-md flex items-center justify-center text-slate-950">
            <Package className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 tracking-widest uppercase font-bold">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>EDITORIAL MANIFESTO</span>
          </div>
          <span className="text-xs font-mono text-slate-400 font-semibold">
            ARTICLE // 04 — POST-PURCHASE TRANSFORMATION
          </span>
        </div>

        {/* Dramatic Screen-Filling Typography with Smooth Reveal */}
        <div className="max-w-5xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold tracking-tight text-slate-900 leading-[1.03] font-display">
            THE CHECKOUT <br />
            ISN’T THE END. <br />
            <span 
              className={`inline-block transition-all duration-700 ${
                secondSentenceRevealed
                  ? 'opacity-100 translate-y-0 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-900'
                  : 'opacity-25 translate-y-4 text-slate-300'
              }`}
            >
              IT’S THE BEGINNING.
            </span>
          </h2>
        </div>

        {/* Bottom Supporting Editorial Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 sm:mt-24 pt-8 border-t border-slate-200 items-end">
          
          <div className="md:col-span-6">
            <p className="text-lg sm:text-2xl text-slate-700 font-normal leading-relaxed">
              Every delivery is an emotional contract. When you deliver radical reassurance, visual elegance, and transparency, customers don’t just return—they champion your brand.
            </p>
          </div>

          <div className="md:col-span-3 text-sm text-slate-600 space-y-1.5">
            <div className="text-slate-900 font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>THE SHIFT</span>
            </div>
            <p>From silent courier delays to high-converting branded storytelling.</p>
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
