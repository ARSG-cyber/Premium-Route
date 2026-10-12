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
    <section id="benefits" className="relative py-24 md:py-36 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-emerald-700 mb-4 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>BUSINESS OUTCOMES & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display mb-4">
            Engineered to perform where it matters most.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A superior delivery experience isn’t just good customer service—it is a proven lever for customer retention, operational cost reduction, and organic brand loyalty.
          </p>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE COMPARISON: TRADITIONAL VS ROUTE */}
        {/* ============================================================ */}
        <div className="mb-20 max-w-4xl mx-auto">
          {/* Comparison Toggle Pill */}
          <div className="flex justify-center mb-8">
            <div className="p-1.5 rounded-full bg-slate-100 border border-slate-200 inline-flex shadow-sm">
              <button
                onClick={() => setActiveTab('route')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === 'route'
                    ? 'bg-[#00d49f] text-black shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Route Experience (Reimagined)</span>
              </button>
              <button
                onClick={() => setActiveTab('traditional')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === 'traditional'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Traditional Carrier Links</span>
              </button>
            </div>
          </div>

          {/* Interactive Comparison Card */}
          <div className="rounded-3xl bg-[#f8fafc] border border-slate-200 p-6 sm:p-9 shadow-md">
            {activeTab === 'route' ? (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 font-display">The Modern Route Standard</h4>
                      <p className="text-xs text-slate-500">Fully branded, automated reassurance</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
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
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500">
                      <X className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 font-display">Traditional Shipping Friction</h4>
                      <p className="text-xs text-slate-500">Legacy carrier portals & lost touchpoints</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                    DISCONNECTED EXPERIENCE
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Shoppers sent away to third-party shipping sites cluttered with ads',
                    'Vague cryptic statuses ("In transit to next facility") creating anxiety',
                    'Weeks of bureaucratic paperwork when a package goes missing',
                    'Zero brand engagement or revenue opportunities after checkout',
                    'Customer support inbox overwhelmed with "Where Is My Order?" tickets',
                    'No environmental transparency or customer carbon consciousness'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-slate-200 opacity-80">
                      <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-600">{item}</span>
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
                className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 group-hover:border-emerald-300 group-hover:bg-emerald-50 flex items-center justify-center mb-5 transition-colors shadow-xs">
                    <Icon className="w-5 h-5 text-slate-700 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Merchant Integration Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-slate-900 font-display">Ready to integrate with your existing commerce tech stack?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Plug and play with Shopify Plus, BigCommerce, Magento, Salesforce Commerce Cloud, and custom APIs in under 15 minutes.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-black font-semibold text-xs transition-all shadow-sm shrink-0"
          >
            <span>Talk to an Architect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
};
