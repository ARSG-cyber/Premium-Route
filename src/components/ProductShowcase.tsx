import React, { useState } from 'react';
import { 
  Package, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Truck, 
  ChevronRight,
  Bell,
  Leaf
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ProductShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // 0: Order Placed, 1: Processed, 2: In Transit, 3: Out for Delivery, 4: Delivered
  const [hasInteracted, setHasInteracted] = useState(false);

  const steps = [
    { label: 'Confirmed', time: 'Oct 11, 09:14 AM', location: 'SoHo Flagship Store' },
    { label: 'Protected', time: 'Oct 11, 10:30 AM', location: 'Carbon Offset Verified' },
    { label: 'In Transit', time: 'Oct 12, 06:45 AM', location: 'Metro Distribution Hub' },
    { label: 'Out for Delivery', time: 'Today, 01:15 PM', location: 'Courier En Route (1.2 mi away)' },
    { label: 'Delivered', time: 'Estimated 2:45 PM', location: 'Front Door / Secure Porch' },
  ];

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setHasInteracted(true);
    if (index === 4) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00d49f', '#0f172a', '#38bdf8']
      });
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Decorative ambient subtle glow */}
      <div className="absolute -inset-1.5 rounded-[36px] bg-gradient-to-r from-[#00d49f]/20 via-sky-200/30 to-[#00d49f]/15 blur-xl opacity-70" />

      {/* Main Clean Hardware / App Container */}
      <div className="relative rounded-[32px] bg-white border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] overflow-hidden text-slate-800 transition-all duration-300">
        
        {/* Top App Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shadow-sm">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-medium text-slate-400">#RT-99420-US</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3 h-3" />
                  Route Protected
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                Aeterna Leather Crossbody & Silk Scarf
              </h3>
            </div>
          </div>

          <div className="text-right hidden sm:block">
            <div className="text-[11px] text-slate-400 font-medium">Merchant</div>
            <div className="text-xs font-semibold text-slate-800">AETERNA PARIS</div>
          </div>
        </div>

        {/* Live Status Banner with ETA */}
        <div className="px-5 py-3.5 bg-gradient-to-r from-emerald-50/80 via-white to-sky-50/50 border-b border-slate-100 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00d49f] animate-ping absolute opacity-75" />
              <span className="w-2 h-2 rounded-full bg-[#00d49f]" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                {steps[activeStep].label}
              </span>
              <p className="text-xs text-slate-600">
                {activeStep === 4 ? 'Package safely delivered with photo' : 'Courier arriving in ~25 mins'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold">ETA: 2:45 PM</span>
          </div>
        </div>

        {/* Clean Light-Mode GPS Route Map Visualizer */}
        <div className="relative h-44 sm:h-52 w-full bg-[#f8fafc] overflow-hidden border-b border-slate-100">
          {/* Subtle stylized vector city street grid */}
          <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cleanGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cleanGrid)" />
            {/* Soft river / park geometry */}
            <path d="M -20 180 Q 150 120 300 160 T 600 100" fill="none" stroke="#e0f2fe" strokeWidth="44" strokeLinecap="round" />
            <circle cx="100" cy="50" r="35" fill="#f0fdf4" />
          </svg>

          {/* Dynamic route path line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 50 140 C 130 130, 180 70, 290 85 S 420 110, 490 60"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="4"
              strokeDasharray="6 6"
            />
            {/* Animated active path line */}
            <path
              d="M 50 140 C 130 130, 180 70, 290 85 S 420 110, 490 60"
              fill="none"
              stroke="#00d49f"
              strokeWidth="4"
              strokeDasharray="10 10"
              className="animate-pulse"
            />
          </svg>

          {/* Origin Marker */}
          <div className="absolute left-8 bottom-7 flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-white border-2 border-slate-400 flex items-center justify-center text-[10px] font-bold text-slate-700 shadow-sm">
              A
            </div>
            <span className="text-[10px] font-mono text-slate-500 mt-1 font-semibold">SoHo Hub</span>
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
              <div className="w-9 h-9 rounded-full bg-[#00d49f] text-black flex items-center justify-center shadow-lg border-2 border-white">
                <Truck className="w-4 h-4 text-slate-900" />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2.5 py-1 rounded-md bg-slate-900 text-[10px] font-semibold text-white whitespace-nowrap shadow-lg">
                {activeStep === 4 ? 'Arrived!' : 'Live Courier • 4 stops away'}
              </div>
            </div>
          </div>

          {/* Destination Marker */}
          <div className="absolute right-7 top-6 flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-rose-50 border-2 border-rose-500 flex items-center justify-center text-rose-600 shadow-sm">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold text-slate-700 mt-1">Williamsburg, NY</span>
          </div>

          {/* Floating real-time notification alert */}
          <div className="absolute bottom-3 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-xs p-2.5 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-md flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <Bell className="w-3.5 h-3.5" />
            </div>
            <div className="text-[11px] leading-tight text-slate-700">
              <span className="font-bold text-slate-900">Route Live:</span>
              <span className="text-slate-600 ml-1">Driver verified 100% carbon-neutral offset</span>
            </div>
          </div>
        </div>

        {/* Interactive Progress Timeline Controls */}
        <div className="p-4 sm:p-5 bg-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Interactive Tracking Timeline
            </span>
            {!hasInteracted && (
              <span className="text-[11px] text-emerald-600 animate-pulse flex items-center gap-1 font-semibold">
                Click any milestone <ChevronRight className="w-3 h-3" />
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
                      ? 'bg-emerald-50 border border-emerald-300 shadow-sm' 
                      : 'hover:bg-slate-50 border border-transparent'
                  }`}
                  aria-label={`Milestone: ${s.label}`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <div 
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all ${
                        isCurrent 
                          ? 'bg-[#00d49f] text-black ring-4 ring-emerald-100' 
                          : isPastOrCurrent 
                            ? 'bg-slate-300 text-slate-700' 
                            : 'bg-slate-100 text-slate-300'
                      }`}
                    >
                      {isPastOrCurrent ? (
                        <CheckCircle2 className="w-2.5 h-2.5" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 hidden md:inline">0{idx + 1}</span>
                  </div>
                  <div className={`text-[11px] font-semibold leading-tight truncate transition-colors ${
                    isCurrent ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'
                  }`}>
                    {s.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Card Footer Details */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-2">
            <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
              <Leaf className="w-3.5 h-3.5" />
              <span className="text-[11px]">100% Certified Carbon Neutral</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">USPS Priority Express</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <button 
                onClick={() => handleStepClick(4)}
                className="text-[11px] text-emerald-600 hover:text-emerald-700 hover:underline font-bold"
              >
                Simulate Delivery
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Accent Badge 1: Instant Claims */}
      <div className="hidden sm:flex absolute -left-6 -bottom-5 p-3 rounded-2xl bg-white border border-slate-200 shadow-xl items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">1-Click Resolution</div>
          <div className="text-[10px] text-slate-500">Automated instant refund or reorder</div>
        </div>
      </div>

      {/* Floating Accent Badge 2: User Trust */}
      <div className="hidden sm:flex absolute -right-6 top-8 p-3 rounded-2xl bg-white border border-slate-200 shadow-xl items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
          <Package className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Live Visual Telemetry</div>
          <div className="text-[10px] text-slate-500">No cryptic tracking codes</div>
        </div>
      </div>
    </div>
  );
};
