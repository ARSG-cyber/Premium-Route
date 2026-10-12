import React from 'react';
import { ShieldCheck, Sparkles, TrendingUp, HeartHandshake } from 'lucide-react';

export const TrustSection: React.FC = () => {
  // Brand partners inspired directly by the reference image
  const brands = [
    { name: 'alice + olivia', font: 'font-serif tracking-wider text-sm sm:text-base' },
    { name: 'DAILY DRILLS', font: 'font-black tracking-widest text-sm sm:text-base' },
    { name: 'J.CREW', font: 'font-serif tracking-widest text-base sm:text-lg italic' },
    { name: 'Hyperice', font: 'font-sans font-bold italic tracking-wide text-sm sm:text-base' },
    { name: 'TOM FORD', font: 'font-sans tracking-[0.25em] text-sm sm:text-base font-semibold' },
    { name: 'Champion', font: 'font-serif italic font-bold tracking-tight text-base sm:text-lg' },
    { name: 'RETROFÊTE', font: 'font-sans tracking-[0.2em] text-xs sm:text-sm font-medium' },
    { name: 'ALO YOGA', font: 'font-sans tracking-widest text-sm sm:text-base font-bold' },
    { name: 'ANINE BING', font: 'font-serif tracking-widest text-sm sm:text-base font-light' },
  ];

  const pillars = [
    {
      icon: TrendingUp,
      title: 'Reduced WISMO Inquiries',
      description: 'Transparent visual tracking eliminates anxiety and drastically cuts "Where Is My Order?" customer service tickets.'
    },
    {
      icon: HeartHandshake,
      title: 'Higher Lifetime Retention',
      description: 'Transform delivery waiting periods into high-engagement branded touchpoints that encourage repeat orders.'
    },
    {
      icon: ShieldCheck,
      title: '1-Click Protection Resolution',
      description: 'Automated claim handling and instant customer refunds without draining your internal operations.'
    }
  ];

  return (
    <section id="proof" className="relative py-20 md:py-28 bg-[#090b10] border-b border-white/8 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00f0b5]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00f0b5] mb-3">
            <Sparkles className="w-3 h-3 text-[#00f0b5]" />
            <span>ESTABLISHED TRUST</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display mb-4">
            Built for brands that refuse to stand still.
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Leading consumer innovators, luxury fashion houses, and high-growth DTC brands trust Route to protect every shipment and elevate their customer relationships.
          </p>
        </div>

        {/* Elegant Marquee Brand Logo Ribbon */}
        <div className="relative py-8 my-6 border-y border-white/10 overflow-hidden">
          {/* Gradient fade masks on left and right */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#090b10] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#090b10] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex animate-marquee gap-14 sm:gap-20 items-center">
            {/* Duplicated for seamless loop */}
            {[...brands, ...brands].map((brand, i) => (
              <div 
                key={`${brand.name}-${i}`} 
                className="flex items-center shrink-0 opacity-55 hover:opacity-100 transition-opacity duration-300 cursor-default"
              >
                <span className={`text-white uppercase ${brand.font}`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Qualitative Trust Pillars (No fabricated numerical metrics, authentic qualitative value) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 sm:p-7 rounded-3xl bg-[#0f131c]/60 border border-white/10 hover:border-[#00f0b5]/30 hover:bg-[#0f131c]/90 transition-all duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#00f0b5]/40 group-hover:bg-[#00f0b5]/10 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-white/80 group-hover:text-[#00f0b5] transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-display">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
