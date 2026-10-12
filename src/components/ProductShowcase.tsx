import React, { useState } from 'react';
import { 
  Package, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Truck, 
  Sparkles, 
  ChevronRight,
  Bell,
  Leaf
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ProductShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // 0: Order Placed, 1: Processed, 2: In Transit, 3: Out for Delivery, 4: Delivered
  const [hasInteracted, setHasInteracted] = useState(false);

  const steps = [
    { label: 'Order Confirmed', time: 'Oct 11, 09:14 AM', location: 'SoHo Flagship Store' },
    { label: 'Route Protected', time: 'Oct 11, 10:30 AM', location: 'Carbon Offset Verified' },
    { label: 'In Transit', time: 'Oct 12, 06:45 AM', location: 'Metro Distribution Hub' },
    { label: 'Out for Delivery', time: 'Today, 01:15 PM', location: 'Courier En Route (2.4 mi away)' },
    { label: 'Delivered', time: 'Estimated 2:45 PM', location: 'Front Porch / Concierge' },
  ];

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setHasInteracted(true);
    if (index === 4) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00f0b5', '#ffffff', '#60a5fa']
      });
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00f0b5]/25 via-white/10 to-[#5de2e7]/20 blur-xl opacity-80" />

      {/* Main Glassmorphic Hardware / App Container */}
      <div className="relative rounded-3xl bg-[#0d1118]/85 border border-white/18 shadow-[0_30px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl overflow-hidden text-white transition-all duration-300">
        
        {/* Top App Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.03]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#00f0b5]/20 to-white/10 border border-[#00f0b5]/40 flex items-center justify-center">
              <Package className="w-5 h-5 text-[#00f0b5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tracking-wider text-white/50">TRACKING #RT-99420</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#00f0b5]/15 text-[#00f0b5] border border-[#00f0b5]/30">
                  <ShieldCheck className="w-3 h-3" />
                  Protected
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                Aeterna Leather Crossbody & Silk Scarf
              </h3>
            </div>
          </div>

          <div className="text-right hidden sm:block">
            <div className="text-[11px] text-white/50">Merchant</div>
            <div className="text-xs font-medium text-white/90">AETERNA PARIS</div>
          </div>
        </div>

        {/* Live Status Banner with ETA */}
        <div className="px-5 py-4 bg-gradient-to-r from-[#00f0b5]/10 via-transparent to-emerald-500/5 border-b border-white/8 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-[#00f0b5] animate-ping absolute opacity-75" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#00f0b5]" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#00f0b5] uppercase tracking-wide">
                {steps[activeStep].label}
              </span>
              <p className="text-xs text-white/80">
                {activeStep === 4 ? 'Package successfully received' : 'Courier arriving in ~35 mins'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-white/90">
            <Clock className="w-3.5 h-3.5 text-[#00f0b5]" />
            <span>ETA: 2:45 PM</span>
          </div>
        </div>

        {/* Interactive GPS Route Map Visualizer */}
        <div className="relative h-44 sm:h-52 w-full bg-[#07090e] overflow-hidden border-b border-white/10">
          {/* Subtle stylized vector street grid */}
          <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Soft water / district shapes */}
            <path d="M -20 180 Q 150 120 300 160 T 600 100" fill="none" stroke="rgba(93, 226, 231, 0.2)" strokeWidth="40" strokeLinecap="round" />
          </svg>

          {/* Dynamic route path line with glow */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 50 140 C 130 130, 180 70, 290 85 S 420 110, 490 60"
              fill="none"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="4"
              strokeDasharray="6 6"
            />
            {/* Animated active path line */}
            <path
              d="M 50 140 C 130 130, 180 70, 290 85 S 420 110, 490 60"
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="4"
              strokeDasharray="12 12"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f0b5" />
                <stop offset="100%" stopColor="#5de2e7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Origin Marker */}
          <div className="absolute left-8 bottom-7 flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-[10px] font-bold">
              A
            </div>
            <span className="text-[10px] font-mono text-white/50 mt-1">SoHo</span>
          </div>

          {/* Courier Van moving marker */}
          <div 
            className="absolute transition-all duration-700 ease-out flex flex-col items-center"
            style={{
              left: activeStep === 0 ? '12%' : activeStep === 1 ? '30%' : activeStep === 2 ? '52%' : activeStep === 3 ? '72%' : '88%',
              top: activeStep === 0 ? '60%' : activeStep === 1 ? '45%' : activeStep === 2 ? '38%' : activeStep === 3 ? '42%' : '26%'
            }}
          >
            <div className="relative group cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-[#00f0b5] text-black flex items-center justify-center shadow-[0_0_20px_rgba(0,240,181,0.8)] border-2 border-white">
                <Truck className="w-4 h-4" />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2.5 py-1 rounded-md bg-black/90 text-[10px] font-medium text-white whitespace-nowrap border border-white/20 shadow-xl">
                {activeStep === 4 ? 'Arrived!' : 'In Transit • 8 stops away'}
              </div>
            </div>
          </div>

          {/* Destination Marker */}
          <div className="absolute right-7 top-6 flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-medium text-white/80 mt-1">Williamsburg, NY</span>
          </div>

          {/* Floating real-time notification alert */}
          <div className="absolute bottom-3 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-xs p-2.5 rounded-xl bg-[#0f141f]/90 border border-white/15 backdrop-blur-md shadow-lg flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#00f0b5]/20 flex items-center justify-center shrink-0">
              <Bell className="w-3.5 h-3.5 text-[#00f0b5]" />
            </div>
            <div className="text-[11px] leading-tight">
              <span className="font-semibold text-white">Route Live Alert:</span>
              <span className="text-white/70 ml-1">Driver verified 100% green delivery offset</span>
            </div>
          </div>
        </div>

        {/* Interactive Progress Timeline Controls */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
              Interactive Milestone Simulator
            </span>
            {!hasInteracted && (
              <span className="text-[11px] text-[#00f0b5] animate-pulse flex items-center gap-1 font-medium">
                Click any step to test <ChevronRight className="w-3 h-3" />
              </span>
            )}
          </div>

          {/* Step Timeline Indicator */}
          <div className="grid grid-cols-5 gap-1 sm:gap-2 mb-4">
            {steps.map((s, idx) => {
              const isPastOrCurrent = idx <= activeStep;
              const isCurrent = idx === activeStep;
              return (
                <button
                  key={s.label}
                  onClick={() => handleStepClick(idx)}
                  className={`text-left p-1.5 sm:p-2 rounded-xl transition-all duration-200 group focus:outline-none ${
                    isCurrent 
                      ? 'bg-white/12 border border-[#00f0b5]/60 shadow-[0_0_12px_rgba(0,240,181,0.2)]' 
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                  aria-label={`Milestone: ${s.label}`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <div 
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all ${
                        isCurrent 
                          ? 'bg-[#00f0b5] text-black ring-4 ring-[#00f0b5]/20' 
                          : isPastOrCurrent 
                            ? 'bg-white/40 text-black' 
                            : 'bg-white/10 text-white/30'
                      }`}
                    >
                      {isPastOrCurrent ? (
                        <CheckCircle2 className="w-2.5 h-2.5" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-white/50 hidden md:inline">0{idx + 1}</span>
                  </div>
                  <div className={`text-[11px] font-medium leading-tight truncate transition-colors ${
                    isCurrent ? 'text-white font-semibold' : 'text-white/60 group-hover:text-white/90'
                  }`}>
                    {s.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Card Footer Details */}
          <div className="pt-3 border-t border-white/8 flex items-center justify-between text-xs text-white/60 flex-wrap gap-2">
            <div className="flex items-center gap-1.5 text-[#00f0b5]">
              <Leaf className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">100% Carbon Neutral Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-white/40">USPS Priority Express</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <button 
                onClick={() => handleStepClick(4)}
                className="text-[11px] text-[#00f0b5] hover:underline font-medium"
              >
                Simulate Delivery
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Accent Badge 1: Instant Claims */}
      <div className="hidden sm:flex absolute -left-8 -bottom-5 p-3 rounded-2xl bg-[#111622]/95 border border-white/18 shadow-2xl backdrop-blur-xl items-center gap-3 animate-bounce [animation-duration:5s]">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-semibold text-white">1-Click Resolution</div>
          <div className="text-[10px] text-white/60">No endless carrier claim forms</div>
        </div>
      </div>

      {/* Floating Accent Badge 2: 99.8% CSAT */}
      <div className="hidden sm:flex absolute -right-6 top-8 p-3 rounded-2xl bg-[#111622]/95 border border-white/18 shadow-2xl backdrop-blur-xl items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#00f0b5]/20 border border-[#00f0b5]/40 flex items-center justify-center text-[#00f0b5]">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-white">Full Post-Purchase Trust</div>
          <div className="text-[10px] text-white/60">Guaranteed order protection</div>
        </div>
      </div>
    </div>
  );
};
