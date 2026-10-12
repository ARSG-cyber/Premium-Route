import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Eye,
  RefreshCw
} from 'lucide-react';


interface BenefitsSectionProps {
  onOpenDemo: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'route' | 'traditional'>('route');

  const outcomes = [
    {
      icon: Eye,
      title: 'Radical Post-Checkout Visibility',
      description: 'Replace fragmented, carrier-hosted tracking pages with a direct window into shipment milestones, keeping buyers connected to your brand.'
    },
    {
      icon: RefreshCw,
      title: 'High-Velocity Repeat Purchases',
      description: 'Engage customers during peak excitement with personalized accessory recommendations and one-tap reorders embedded in their tracking feed.'
    },
    {
      icon: ShieldCheck,
      title: 'Autonomous Claims Resolution',
      description: 'Free up customer service bandwidth. Package loss, damage, or porch piracy issues are resolved in moments without cumbersome carrier filings.'
    },
    {
      icon: TrendingUp,
      title: 'Protection of Brand Reputation',
      description: 'Never lose a customer to shipping carrier mistakes. Reassure buyers that your brand stands behind every single order all the way to their hands.'
    }
  ];

  return (
    <section id="benefits" className="relative py-24 md:py-36 bg-[#090b10] text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#00f0b5] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00f0b5]" />
            <span>BUSINESS OUTCOMES & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display mb-4">
            Engineered to perform where it matters most.
          </h2>
          <p className="text-base sm:text-lg text-white/60">
            A superior delivery experience isn’t just good customer service—it is a proven lever for customer retention, operational cost reduction, and organic brand loyalty.
          </p>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE COMPARISON: TRADITIONAL VS ROUTE */}
        {/* ============================================================ */}
        <div className="mb-20 max-w-4xl mx-auto">
          {/* Comparison Toggle Pill */}
          <div className="flex justify-center mb-8">
            <div className="p-1 rounded-full bg-black/50 border border-white/15 backdrop-blur-md inline-flex">
              <button
                onClick={() => setActiveTab('route')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'route'
                    ? 'bg-[#00f0b5] text-black shadow-[0_0_20px_rgba(0,240,181,0.4)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Route Experience (Reimagined)</span>
              </button>
              <button
                onClick={() => setActiveTab('traditional')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'traditional'
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <span>Traditional Carrier Links</span>
              </button>
            </div>
          </div>

          {/* Interactive Comparison Card */}
          <div className="rounded-3xl bg-[#0e121b]/90 border border-white/15 p-6 sm:p-9 shadow-2xl backdrop-blur-xl">
            {activeTab === 'route' ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#00f0b5]/20 border border-[#00f0b5]/40 flex items-center justify-center text-[#00f0b5]">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-display">The Modern Route Standard</h4>
                      <p className="text-xs text-white/60">Fully branded, automated reassurance</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#00f0b5] bg-[#00f0b5]/10 px-3 py-1 rounded-full border border-[#00f0b5]/30">
                    ELEVATED EXPERIENCE
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Shoppers stay within your branded web ecosystem throughout transit',
                    'Interactive live map with clear estimated delivery arrival times',
                    'One-click instant claim resolution for lost, stolen, or broken items',
                    'High-engagement cross-sell recommendations during waiting phase',
                    'Automated SMS, push, and email status updates eliminate WISMO tickets',
                    '100% certified carbon-neutral shipping offsets verified on every order'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/8">
                      <div className="w-5 h-5 rounded-full bg-[#00f0b5]/20 text-[#00f0b5] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
                      <X className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-display">Traditional Shipping Friction</h4>
                      <p className="text-xs text-white/60">Legacy carrier portals & lost touchpoints</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">
                    DISCONNECTED EXPERIENCE
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Shoppers sent away to ugly carrier sites covered in third-party ads',
                    'Vague cryptic statuses ("In transit to next facility") creating anxiety',
                    'Weeks of bureaucratic paperwork when a package goes missing',
                    'Zero brand engagement or revenue opportunities after checkout',
                    'Customer support inbox overwhelmed with "Where Is My Order?" tickets',
                    'No environmental transparency or customer carbon consciousness'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 opacity-75">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4 Outcome Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-3xl bg-[#0c0f16] border border-white/10 hover:border-[#00f0b5]/30 hover:bg-[#111622] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#00f0b5]/40 group-hover:bg-[#00f0b5]/10 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-5 h-5 text-white/80 group-hover:text-[#00f0b5] transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Merchant Integration Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#00f0b5]/10 via-transparent to-white/[0.02] border border-white/12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white font-display">Ready to integrate with your existing commerce tech stack?</h4>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              Plug and play with Shopify Plus, BigCommerce, Magento, Salesforce Commerce Cloud, and custom APIs in under 15 minutes.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-100 font-semibold text-xs transition-all shadow-md shrink-0"
          >
            <span>Talk to an Architect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
};
