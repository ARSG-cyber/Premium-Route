import React, { useState } from 'react';
import { 
  Bell, 
  Sparkles, 
  RotateCcw, 
  Gift, 
  ShoppingBag,
  Heart,
  ChevronRight,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

export const ProductStory: React.FC = () => {
  // Interactive Brand Theme customizer for Moment 02
  const [selectedBrandTheme, setSelectedBrandTheme] = useState<'minimal' | 'noir' | 'sage'>('minimal');

  const brandThemes = {
    minimal: {
      name: 'Monochrome Minimal',
      bg: 'bg-white',
      text: 'text-neutral-900',
      accent: 'bg-black text-white hover:bg-neutral-800',
      subtext: 'text-neutral-500',
      badge: 'bg-neutral-100 text-neutral-800 border border-neutral-200'
    },
    noir: {
      name: 'Midnight Luxury',
      bg: 'bg-[#0f172a]',
      text: 'text-white',
      accent: 'bg-[#00d49f] text-black hover:bg-[#00e3aa]',
      subtext: 'text-slate-300',
      badge: 'bg-white/10 text-white border border-white/20'
    },
    sage: {
      name: 'Botanical Warmth',
      bg: 'bg-[#f4efe8]',
      text: 'text-[#2b3a32]',
      accent: 'bg-[#2b3a32] text-white hover:bg-[#1f2a24]',
      subtext: 'text-[#5d6e64]',
      badge: 'bg-[#e5dcd1] text-[#2b3a32] border border-[#d6c9bc]'
    }
  };

  const currentTheme = brandThemes[selectedBrandTheme];

  return (
    <section id="brand-story" className="relative py-24 md:py-36 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead-in */}
        <div className="mb-20 md:mb-28 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-emerald-700 mb-4 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>THE POST-PURCHASE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight font-display mb-6">
            The standard post-purchase journey is broken. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              We engineered the antidote.
            </span>
          </h2>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
            Traditional carriers send customers to sterile, cryptic tracking portals cluttered with carrier ads. Route turns the post-purchase window into your highest-converting brand stage.
          </p>
        </div>

        {/* ============================================================ */}
        {/* MOMENT 01: KEEP CUSTOMERS INFORMED (Split-screen Composition) */}
        {/* ============================================================ */}
        <div className="mb-32 md:mb-40 pt-10 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase block mb-3">
                01 — TOTAL RADICAL CLARITY
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display mb-6">
                Keep customers informed without carrier friction.
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Uncertainty breeds anxiety. When a buyer can't see exactly where their package is, they flood customer support with "WISMO" inquiries or assume the worst.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Route provides dynamic, real-time visual tracking across every carrier worldwide. Live map views, proactive delay notifications, and clear arrival windows keep shoppers confident from the moment they buy.
              </p>

              <div className="space-y-3.5">
                {[
                  'Live real-time courier geolocation tracking',
                  'Proactive SMS and Push status notifications',
                  'Single unified tracking interface for multi-package orders',
                  'Instant carbon footprint offset metrics'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                      <CheckCircle className="w-3 h-3" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Split Visual: Clean Mobile App & Push Alert Mockup */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-[36px] bg-[#f8fafc] border border-slate-200 shadow-xl">
                
                {/* Header inside mockup */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">route.com/track/live</span>
                  <div className="text-xs font-bold text-emerald-600">LIVE SYNC</div>
                </div>

                {/* Simulated Delivery Push Stack */}
                <div className="mt-6 space-y-4">
                  {/* Push Notification 1 */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#00d49f] text-black flex items-center justify-center shrink-0 shadow-sm">
                      <Bell className="w-4 h-4 text-slate-900" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">Route Live Notification</span>
                        <span className="text-[10px] text-slate-400 font-medium">Just now</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Driver is 2 stops away! Estimated delivery at front gate in 12 minutes.
                      </p>
                    </div>
                  </div>

                  {/* Push Notification 2: Route Protection Active */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">Route Package Protection</span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">Active</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Your package is insured against loss, theft, or transit damage with 1-click replacement.
                      </p>
                    </div>
                  </div>

                  {/* Clean Visual Map Card inside */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 mt-4 relative overflow-hidden shadow-sm">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="text-slate-500 font-medium">Carrier Status</span>
                      <span className="text-emerald-700 font-bold font-mono">ON SCHEDULE</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00d49f] w-4/5 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center mt-3 text-[11px] text-slate-500">
                      <span>Departed Brooklyn Sorting Hub</span>
                      <span className="text-slate-900 font-semibold">Delivering Today</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* MOMENT 02: TURN DELIVERY INTO BRAND EXPERIENCE (Full-Width Editorial) */}
        {/* ============================================================ */}
        <div className="mb-32 md:mb-40 pt-10 border-t border-slate-200">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase block mb-3">
              02 — BESPOKE BRAND IDENTITY
            </span>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display mb-5">
              Turn delivery waiting into an editorial brand stage.
            </h3>
            <p className="text-base sm:text-lg text-slate-600">
              Customers check tracking notifications an average of 4 to 8 times per order. Instead of sending them to third-party shipping websites, immerse them in your customized branded universe.
            </p>

            {/* Interactive Theme Switcher */}
            <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-slate-100 border border-slate-200 mt-6">
              <span className="text-xs text-slate-500 font-medium px-2.5">Live Style Preview:</span>
              {(['minimal', 'noir', 'sage'] as const).map((themeKey) => (
                <button
                  key={themeKey}
                  onClick={() => setSelectedBrandTheme(themeKey)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    selectedBrandTheme === themeKey
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {brandThemes[themeKey].name}
                </button>
              ))}
            </div>
          </div>

          {/* Full-width Split Art Direction with Luxury Unboxing Image & Interactive Branded Tracking Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Luxury Editorial Photography Asset */}
            <div className="lg:col-span-5 relative rounded-[36px] overflow-hidden border border-slate-200 min-h-[420px] shadow-lg group">
              <img
                src="/assets/luxury-unboxing.jpg"
                alt="Luxury e-commerce parcel unboxing experience"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#00d49f] block mb-1 font-bold">
                  TACTILE CRAFTSMANSHIP
                </span>
                <p className="text-lg font-semibold">
                  "Every physical touchpoint should match the digital precision."
                </p>
              </div>
            </div>

            {/* Right: Dynamic Branded Tracking Page Mockup that reacts to theme selection */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className={`p-6 sm:p-8 rounded-[36px] transition-all duration-300 shadow-xl border border-slate-200/90 ${currentTheme.bg}`}>
                
                {/* Brand Header */}
                <div className="flex items-center justify-between pb-6 border-b border-black/10 dark:border-white/10">
                  <div>
                    <h4 className={`text-xl font-bold tracking-tight ${currentTheme.text} font-display`}>
                      MAISON ÉTOILE
                    </h4>
                    <p className={`text-xs ${currentTheme.subtext}`}>Order #ME-49019 • Confirmed</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${currentTheme.badge}`}>
                    VIP Member Delivery
                  </div>
                </div>

                {/* Tracking Visual Component */}
                <div className="my-6 p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs font-semibold ${currentTheme.text}`}>Arriving Tomorrow</span>
                    <span className="text-xs font-mono text-emerald-600 font-semibold">Priority Air</span>
                  </div>
                  <div className="h-1.5 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 w-3/4 rounded-full" />
                  </div>
                </div>

                {/* Curated In-Transit Product Recommendations */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${currentTheme.subtext}`}>
                      Curated For Your Order
                    </span>
                    <span className={`text-xs font-semibold cursor-pointer ${currentTheme.text} hover:underline`}>
                      Shop Collection →
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                        <ShoppingBag className={`w-5 h-5 ${currentTheme.text}`} />
                      </div>
                      <div>
                        <div className={`text-xs font-semibold ${currentTheme.text}`}>Silk Twill Scarf</div>
                        <div className={`text-xs ${currentTheme.subtext}`}>$95 • 1-Click Add</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                        <Heart className={`w-5 h-5 ${currentTheme.text}`} />
                      </div>
                      <div>
                        <div className={`text-xs font-semibold ${currentTheme.text}`}>Leather Care Kit</div>
                        <div className={`text-xs ${currentTheme.subtext}`}>$45 • Free Shipping</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action button styled by theme */}
                <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <span className={`text-xs ${currentTheme.subtext}`}>Powered by Route Experience Suite</span>
                  <button className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${currentTheme.accent}`}>
                    Explore More
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* MOMENT 03: CREATE REASONS TO RETURN (Engagement Architecture) */}
        {/* ============================================================ */}
        <div className="pt-10 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual: Clean Engagement Cards */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Retention Card 1 */}
                <div className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 font-display">
                    Effortless 1-Click Reorders
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Allow shoppers to effortlessly replenish recurring purchases right from their delivered package confirmation.
                  </p>
                </div>

                {/* Retention Card 2 */}
                <div className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-4">
                    <Gift className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 font-display">
                    Immediate Post-Delivery Perks
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Surprise delighted customers when their package touches their doorstep with unlocked loyalty perks and VIP early drops.
                  </p>
                </div>

                {/* Retention Card 3 */}
                <div className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200 shadow-sm hover:border-sky-300 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 font-display">
                    Personalized Product Drops
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Smart recommendation engine shows related accessories and essentials calibrated to what they just received.
                  </p>
                </div>

                {/* Retention Card 4 */}
                <div className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 font-display">
                    Frictionless Returns Portal
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an item needs an exchange, make it seamless with QR drop-offs, converting potential churn into retained loyalty.
                  </p>
                </div>

              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase block mb-3">
                03 — SUSTAINED RE-ENGAGEMENT
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display mb-6">
                Create meaningful reasons to return.
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Most customer relationships go silent the second an order is shipped. Route ensures delivery is not the end of the conversation, but the launchpad for the next order.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                By maintaining continuous engagement throughout the anticipation phase and celebrating arrival, brands see measurable increases in customer repeat purchase rates.
              </p>

              <a
                href="#journey"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors group"
              >
                <span>Experience the interactive delivery map</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
