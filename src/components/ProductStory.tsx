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
      accent: 'bg-black text-white',
      subtext: 'text-neutral-500',
      badge: 'bg-neutral-100 text-neutral-800'
    },
    noir: {
      name: 'Midnight Luxury',
      bg: 'bg-[#121318]',
      text: 'text-white',
      accent: 'bg-[#00f0b5] text-black',
      subtext: 'text-white/60',
      badge: 'bg-white/10 text-white'
    },
    sage: {
      name: 'Botanical Warmth',
      bg: 'bg-[#f4efe8]',
      text: 'text-[#2b3a32]',
      accent: 'bg-[#2b3a32] text-white',
      subtext: 'text-[#5d6e64]',
      badge: 'bg-[#e5dcd1] text-[#2b3a32]'
    }
  };

  const currentTheme = brandThemes[selectedBrandTheme];

  return (
    <section id="brand-story" className="relative py-24 md:py-36 bg-[#080a0f] text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead-in */}
        <div className="mb-20 md:mb-28 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#00f0b5] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00f0b5]" />
            <span>THE POST-PURCHASE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight font-display mb-6">
            The standard post-purchase journey is broken. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0b5] to-[#5de2e7]">
              We engineered the antidote.
            </span>
          </h2>
          <p className="text-base sm:text-xl text-white/70 leading-relaxed">
            Traditional carriers send customers to sterile, cryptic tracking portals cluttered with carrier ads. Route turns the post-purchase window into your highest-converting brand stage.
          </p>
        </div>

        {/* ============================================================ */}
        {/* MOMENT 01: KEEP CUSTOMERS INFORMED (Split-screen Composition) */}
        {/* ============================================================ */}
        <div className="mb-32 md:mb-40 pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold text-[#00f0b5] tracking-widest uppercase block mb-3">
                01 — TOTAL RADICAL CLARITY
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display mb-6">
                Keep customers informed without carrier friction.
              </h3>
              <p className="text-base text-white/70 leading-relaxed mb-6">
                Uncertainty breeds anxiety. When a buyer can't see exactly where their package is, they flood customer support with "WISMO" inquiries or assume the worst.
              </p>
              <p className="text-base text-white/70 leading-relaxed mb-8">
                Route provides dynamic, real-time visual tracking across every carrier worldwide. Live map views, proactive delay notifications, and clear arrival windows keep shoppers confident from the moment they buy.
              </p>

              <div className="space-y-3.5">
                {[
                  'Live real-time courier geolocation tracking',
                  'Proactive SMS and Push status notifications',
                  'Single unified tracking interface for multi-package orders',
                  'Instant carbon footprint offset metrics'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-white/85">
                    <div className="w-5 h-5 rounded-full bg-[#00f0b5]/15 border border-[#00f0b5]/40 flex items-center justify-center text-[#00f0b5] shrink-0">
                      <CheckCircle className="w-3 h-3" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Split Visual: Mobile App & Push Alert Mockup */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-[36px] bg-[#0e121a]/90 border border-white/15 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
                
                {/* Header inside mockup */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-xs font-mono text-white/40">app.route.com/track</span>
                  <div className="text-xs font-semibold text-[#00f0b5]">LIVE SYNC</div>
                </div>

                {/* Simulated Delivery Push Stack */}
                <div className="mt-6 space-y-4">
                  {/* Push Notification 1 */}
                  <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/12 backdrop-blur-md flex items-start gap-3.5 shadow-lg">
                    <div className="w-9 h-9 rounded-xl bg-[#00f0b5] text-black flex items-center justify-center shrink-0">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">Route Live Notification</span>
                        <span className="text-[10px] text-white/40">Just now</span>
                      </div>
                      <p className="text-xs text-white/80 mt-1">
                        Driver is 2 stops away! Estimated delivery at front gate in 12 minutes.
                      </p>
                    </div>
                  </div>

                  {/* Push Notification 2: Route Protection Active */}
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/8 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">Route Package Protection</span>
                        <span className="text-[10px] text-white/40">Protected</span>
                      </div>
                      <p className="text-xs text-white/70 mt-1">
                        Your package is insured against loss, theft, or transit damage with 1-click replacement.
                      </p>
                    </div>
                  </div>

                  {/* Interactive Visual Map Card inside */}
                  <div className="p-4 rounded-2xl bg-[#080a0f] border border-white/10 mt-4 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="text-white/60">Carrier Status</span>
                      <span className="text-emerald-400 font-medium font-mono">ON SCHEDULE</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#00f0b5] to-[#5de2e7] w-4/5 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center mt-3 text-[11px] text-white/50">
                      <span>Departed Brooklyn Hub</span>
                      <span className="text-white font-medium">Delivering Today</span>
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
        <div className="mb-32 md:mb-40 pt-10 border-t border-white/10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold text-[#00f0b5] tracking-widest uppercase block mb-3">
              02 — BESPOKE BRAND IDENTITY
            </span>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display mb-5">
              Turn delivery waiting into an editorial brand stage.
            </h3>
            <p className="text-base sm:text-lg text-white/70">
              Customers check tracking notifications an average of 4 to 8 times per order. Instead of sending them to third-party shipping websites, immerse them in your customized branded universe.
            </p>

            {/* Interactive Theme Switcher */}
            <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mt-6">
              <span className="text-xs text-white/60 px-2.5">Live Style Preview:</span>
              {(['minimal', 'noir', 'sage'] as const).map((themeKey) => (
                <button
                  key={themeKey}
                  onClick={() => setSelectedBrandTheme(themeKey)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedBrandTheme === themeKey
                      ? 'bg-white text-black shadow-md'
                      : 'text-white/70 hover:text-white'
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
            <div className="lg:col-span-5 relative rounded-[36px] overflow-hidden border border-white/15 min-h-[420px] shadow-2xl group">
              <img
                src="/assets/luxury-unboxing.jpg"
                alt="Luxury e-commerce parcel unboxing experience"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#00f0b5] block mb-1">
                  TACTILE CRAFTSMANSHIP
                </span>
                <p className="text-lg font-semibold text-white">
                  "Every physical touchpoint should match the digital precision."
                </p>
              </div>
            </div>

            {/* Right: Dynamic Branded Tracking Page Mockup that reacts to theme selection */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className={`p-6 sm:p-8 rounded-[36px] transition-all duration-500 shadow-2xl border border-white/15 ${currentTheme.bg}`}>
                
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
                    <span className="text-xs font-mono text-emerald-500 font-semibold">Priority Air</span>
                  </div>
                  <div className="h-1.5 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-3/4 rounded-full" />
                  </div>
                </div>

                {/* Curated In-Transit Product Recommendations */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${currentTheme.subtext}`}>
                      Curated For Your Order
                    </span>
                    <span className={`text-xs font-medium cursor-pointer ${currentTheme.text} hover:underline`}>
                      Shop Collection →
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-neutral-300 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                        <ShoppingBag className={`w-5 h-5 ${currentTheme.text}`} />
                      </div>
                      <div>
                        <div className={`text-xs font-semibold ${currentTheme.text}`}>Silk Twill Scarf</div>
                        <div className={`text-xs ${currentTheme.subtext}`}>$95 • 1-Click Add</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-neutral-300 dark:bg-neutral-800 flex items-center justify-center shrink-0">
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
        <div className="pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual: Post-Delivery Engagement Flywheel */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Retention Card 1 */}
                <div className="p-6 rounded-3xl bg-[#0f141f]/80 border border-white/12 shadow-xl hover:border-[#00f0b5]/40 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-2xl bg-[#00f0b5]/15 border border-[#00f0b5]/30 flex items-center justify-center text-[#00f0b5] mb-4">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2 font-display">
                    Effortless 1-Click Reorders
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Allow shoppers to effortlessly replenish recurring purchases right from their delivered package confirmation.
                  </p>
                </div>

                {/* Retention Card 2 */}
                <div className="p-6 rounded-3xl bg-[#0f141f]/80 border border-white/12 shadow-xl hover:border-[#00f0b5]/40 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-400 mb-4">
                    <Gift className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2 font-display">
                    Immediate Post-Delivery Perks
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Surprise delighted customers when their package touches their doorstep with unlocked loyalty perks and VIP early drops.
                  </p>
                </div>

                {/* Retention Card 3 */}
                <div className="p-6 rounded-3xl bg-[#0f141f]/80 border border-white/12 shadow-xl hover:border-[#00f0b5]/40 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2 font-display">
                    Personalized Product Drops
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Smart recommendation engine shows related accessories and essentials calibrated to what they just received.
                  </p>
                </div>

                {/* Retention Card 4 */}
                <div className="p-6 rounded-3xl bg-[#0f141f]/80 border border-white/12 shadow-xl hover:border-[#00f0b5]/40 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2 font-display">
                    Frictionless Returns Portal
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    If an item needs an exchange, make it seamless with QR drop-offs, converting potential churn into retained loyalty.
                  </p>
                </div>

              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="text-xs font-mono font-bold text-[#00f0b5] tracking-widest uppercase block mb-3">
                03 — SUSTAINED RE-ENGAGEMENT
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display mb-6">
                Create meaningful reasons to return.
              </h3>
              <p className="text-base text-white/70 leading-relaxed mb-6">
                Most customer relationships go silent the second an order is shipped. Route ensures delivery is not the end of the conversation, but the launchpad for the next order.
              </p>
              <p className="text-base text-white/70 leading-relaxed mb-8">
                By maintaining continuous engagement throughout the anticipation phase and celebrating arrival, brands see measurable increases in customer repeat purchase rates.
              </p>

              <a
                href="#journey"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00f0b5] hover:text-[#5de2e7] transition-colors group"
              >
                <span>Experience the interactive delivery journey</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
