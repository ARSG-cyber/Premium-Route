import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Truck, 
  CheckCircle2, 
  MapPin, 
  Camera, 
  Leaf, 
  Navigation, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Smartphone 
} from 'lucide-react';
import confetti from 'canvas-confetti';


interface JourneyStage {
  id: number;
  stageName: string;
  timestamp: string;
  location: string;
  statusHeadline: string;
  statusDescription: string;
  customerNote: string;
  progressPercent: number;
  vanX: number;
  vanY: number;
}

export const DeliveryJourney: React.FC = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(3);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stages: JourneyStage[] = [
    {
      id: 0,
      stageName: 'Order Confirmed',
      timestamp: 'Today, 09:30 AM',
      location: 'SoHo Atelier • New York, NY',
      statusHeadline: 'Order Packed with Route Protection',
      statusDescription: 'Your item has been carefully wrapped in 100% recyclable, tamper-evident packaging. Route 1-Click Protection active.',
      customerNote: 'Order #RT-892401 confirmed. Packaging complete.',
      progressPercent: 12,
      vanX: 14,
      vanY: 72
    },
    {
      id: 1,
      stageName: 'Dispatched & Transit',
      timestamp: 'Today, 11:15 AM',
      location: 'Metro Distribution Center • Jersey City, NJ',
      statusHeadline: 'Loaded on Sustainable Fleet',
      statusDescription: 'En route via electric freight transport. Carbon offsets calculated and certified in real time.',
      customerNote: 'Package cleared sorting hub on green fleet.',
      progressPercent: 38,
      vanX: 35,
      vanY: 52
    },
    {
      id: 2,
      stageName: 'Local Distribution',
      timestamp: 'Today, 01:10 PM',
      location: 'Williamsburg Sort Facility • Brooklyn, NY',
      statusHeadline: 'Sorted to Neighborhood Courier',
      statusDescription: 'Assigned to your local dedicated driver. Optical parcel inspection verified intact.',
      customerNote: 'Arrived at your neighborhood facility.',
      progressPercent: 64,
      vanX: 58,
      vanY: 40
    },
    {
      id: 3,
      stageName: 'Out for Delivery',
      timestamp: 'Today, 02:05 PM',
      location: 'Bedford Avenue • 4 Stops Away (0.6 mi)',
      statusHeadline: 'Courier Approaching Your Address',
      statusDescription: 'Your driver is en route. Live proximity updates and accurate arrival estimates are refreshed every 30 seconds.',
      customerNote: 'Driver is 4 stops away. Arriving in ~15 mins.',
      progressPercent: 88,
      vanX: 78,
      vanY: 34
    },
    {
      id: 4,
      stageName: 'Delivered With Proof',
      timestamp: 'Today, 02:22 PM',
      location: 'Front Porch / Concierge • Brooklyn, NY',
      statusHeadline: 'Safely Delivered & Photo Verified',
      statusDescription: 'Package handed over or placed at secure front entry. High-resolution delivery photo synced instantly to your phone.',
      customerNote: 'Delivered to front door. Enjoy your order! ✨',
      progressPercent: 100,
      vanX: 92,
      vanY: 22
    }
  ];

  const currentStage = stages[currentStageIndex];

  // Auto-play simulation loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStageIndex((prev) => {
          if (prev >= stages.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          const next = prev + 1;
          if (next === stages.length - 1) {
            triggerDeliveryConfetti();
          }
          return next;
        });
      }, 2600);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const triggerDeliveryConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#00d49f', '#0284c7', '#0f172a', '#fbbf24']
    });
  };

  const handleSelectStage = (index: number) => {
    setIsPlaying(false);
    setCurrentStageIndex(index);
    if (index === stages.length - 1) {
      triggerDeliveryConfetti();
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStageIndex(0);
  };

  const handleTogglePlay = () => {
    if (currentStageIndex >= stages.length - 1) {
      setCurrentStageIndex(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="journey" className="relative py-24 md:py-36 bg-[#f8fafc] text-slate-900 overflow-hidden border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Concept Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-200 text-xs font-mono text-emerald-700 mb-4 font-semibold">
              <Navigation className="w-3.5 h-3.5 text-emerald-600" />
              <span>LIVE INTERACTIVE GPS EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display">
              The Interactive Delivery Map.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3">
              An experience designed to be remembered. Replace mysterious carrier delay codes with a transparent, live visual GPS map that reassures your customers every mile of the way.
            </p>
          </div>

          {/* Interactive Play / Scrub Simulation Controls */}
          <div className="flex items-center gap-3 bg-white border border-slate-200 p-2 rounded-full shadow-sm shrink-0">
            <button
              onClick={handleTogglePlay}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d49f] hover:bg-[#00e3aa] text-black font-semibold text-xs transition-all shadow-[0_2px_12px_rgba(0,212,159,0.3)] hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause Map</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>{currentStageIndex === stages.length - 1 ? 'Replay Map' : 'Simulate Live Map'}</span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              title="Reset map simulation"
              aria-label="Reset map simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MAIN VISUAL MAP & POST-PURCHASE REASSURANCE CARD */}
        {/* ============================================================ */}
        <div className="rounded-[36px] bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-6 sm:p-9 md:p-10 relative overflow-hidden">
          
          {/* Top Progress Milestone Tabs */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">LIVE VISUAL TRACKING</span>
                <div className="text-lg font-bold text-slate-900 flex items-center gap-2 mt-0.5 font-display">
                  <span>Order #RT-892401-NY</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Route Protection 100% Guaranteed
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#00d49f] animate-ping" />
                  <span>Live GPS Tracking Active</span>
                </div>
                <div className="hidden sm:block text-slate-300">|</div>
                <div className="hidden sm:block text-slate-500 font-mono">{currentStage.timestamp}</div>
              </div>
            </div>

            {/* Glowing Horizontal Progress Bar */}
            <div className="relative h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 via-[#00d49f] to-teal-400 transition-all duration-700 ease-out"
                style={{ width: `${currentStage.progressPercent}%` }}
              />
            </div>

            {/* Step Selection Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mt-4">
              {stages.map((stage, idx) => {
                const isCurrent = idx === currentStageIndex;
                const isDone = idx < currentStageIndex;
                return (
                  <button
                    key={stage.id}
                    onClick={() => handleSelectStage(idx)}
                    className={`p-3 rounded-2xl text-left transition-all duration-200 border focus:outline-none ${
                      isCurrent
                        ? 'bg-emerald-50/80 border-emerald-300 shadow-sm'
                        : isDone
                          ? 'bg-slate-50 border-slate-200 hover:bg-slate-100/70'
                          : 'bg-white border-slate-100 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-slate-400 font-semibold">0{idx + 1}</span>
                      {isDone ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      ) : isCurrent ? (
                        <span className="w-2 h-2 rounded-full bg-[#00d49f] ring-2 ring-emerald-200" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      )}
                    </div>
                    <div className={`text-xs font-bold truncate ${isCurrent ? 'text-slate-900' : 'text-slate-600'}`}>
                      {stage.stageName}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ============================================================ */}
          {/* THE BIG INTERACTIVE MAP VISUALIZATION (Replacing any terminal) */}
          {/* ============================================================ */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-[#f1f5f9] h-80 sm:h-96 w-full mb-8 shadow-inner">
            
            {/* Rich Detailed City Map Canvas */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Street Block Pattern */}
                <pattern id="streetMap" width="80" height="80" patternUnits="userSpaceOnUse">
                  <rect width="80" height="80" fill="#f8fafc" />
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#e2e8f0" strokeWidth="6"/>
                  <path d="M 40 0 L 40 80" fill="none" stroke="#e2e8f0" strokeWidth="3"/>
                  <path d="M 0 40 L 80 40" fill="none" stroke="#e2e8f0" strokeWidth="3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#streetMap)" />

              {/* Natural geography: River / Waterfront */}
              <path 
                d="M -50 350 C 200 320, 350 120, 700 180 S 1000 80, 1400 120" 
                fill="none" 
                stroke="#dbeafe" 
                strokeWidth="70" 
                strokeLinecap="round" 
              />
              {/* Park green zone */}
              <circle cx="280" cy="110" r="50" fill="#dcfce7" />
              <rect x="750" y="40" width="120" height="80" rx="20" fill="#dcfce7" />

              {/* Full Transit Route Path (Dashed background) */}
              <path
                d="M 120 270 C 260 250, 360 160, 540 170 S 820 140, 1050 90"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="5"
                strokeDasharray="8 8"
              />

              {/* Dynamic Active Traveled Route with Glowing Teal Gradient */}
              <path
                d="M 120 270 C 260 250, 360 160, 540 170 S 820 140, 1050 90"
                fill="none"
                stroke="#00d49f"
                strokeWidth="5"
                strokeDasharray="12 12"
                className="animate-pulse"
              />
            </svg>

            {/* Checkpoint 1: SoHo Origin */}
            <div className="absolute left-[12%] bottom-[20%] flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-700 shadow-md flex items-center justify-center text-xs font-bold text-slate-800">
                A
              </div>
              <span className="text-[11px] font-bold text-slate-700 bg-white/90 px-2 py-0.5 rounded-md shadow-xs mt-1 border border-slate-200">
                SoHo Flagship
              </span>
            </div>

            {/* Checkpoint 2: Distribution Center */}
            <div className="absolute left-[35%] top-[45%] flex flex-col items-center hidden sm:flex">
              <div className="w-7 h-7 rounded-full bg-white border-2 border-slate-400 shadow-sm flex items-center justify-center text-[11px] text-slate-600 font-semibold">
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <span className="text-[10px] font-semibold text-slate-500 bg-white/80 px-1.5 py-0.5 rounded shadow-xs mt-0.5">
                Green Hub
              </span>
            </div>

            {/* Checkpoint 3: Destination Address Pin */}
            <div className="absolute right-[10%] top-[18%] flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-rose-50 border-2 border-rose-500 shadow-lg flex items-center justify-center text-rose-600">
                <MapPin className="w-5 h-5 fill-rose-500 text-white" />
              </div>
              <span className="text-[11px] font-bold text-slate-800 bg-white px-2 py-0.5 rounded-md shadow-sm mt-1 border border-slate-200">
                Your Delivery Address
              </span>
            </div>

            {/* Moving Courier Van Marker */}
            <div 
              className="absolute transition-all duration-700 ease-out flex flex-col items-center z-20"
              style={{
                left: `${currentStage.vanX}%`,
                top: `${currentStage.vanY}%`
              }}
            >
              <div className="relative group cursor-pointer">
                <div className="w-11 h-11 rounded-full bg-[#00d49f] border-2 border-white shadow-xl flex items-center justify-center text-slate-950">
                  <Truck className="w-5 h-5" />
                </div>
                {/* Real-time label above courier */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-semibold whitespace-nowrap shadow-xl flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d49f] animate-ping" />
                  <span>{currentStageIndex === 4 ? 'Arrived at Front Porch!' : 'Courier On Route'}</span>
                </div>
              </div>
            </div>

            {/* In-Map Telemetry Card (Clean HUD) */}
            <div className="absolute top-4 left-4 p-3.5 rounded-2xl bg-white/95 border border-slate-200 shadow-lg backdrop-blur-md max-w-xs z-10">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-900">Estimated Delivery: 2:45 PM</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Green electric courier • 4 stops remaining before your address
              </p>
            </div>

            {/* In-Map Protection Badge */}
            <div className="absolute bottom-4 right-4 p-2.5 px-3 rounded-full bg-white/95 border border-slate-200 shadow-md backdrop-blur-md flex items-center gap-2 z-10">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-slate-800">100% Carbon Neutral Transit</span>
            </div>

          </div>

          {/* ============================================================ */}
          {/* USER REMEMBER DESIGN: POST-PURCHASE DELIGHT & DETAILS */}
          {/* ============================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Left: Reassurance Headline & Story */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{currentStage.location}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
                {currentStage.statusHeadline}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentStage.statusDescription}
              </p>

              {/* The "Experience Worth Remembering" reassurance pill */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100/70 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Customer Reassurance Note</div>
                  <div className="text-xs text-slate-600 mt-0.5">"{currentStage.customerNote}"</div>
                </div>
              </div>

              {/* Delivered Celebration Card */}
              {currentStageIndex === 4 && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between flex-wrap gap-3 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00d49f] text-slate-900 flex items-center justify-center font-bold shadow-sm">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Visual Delivery Proof Verified</div>
                      <div className="text-[11px] text-slate-600">Front Porch • 2:22 PM • Delivered safely</div>
                    </div>
                  </div>
                  <button 
                    onClick={triggerDeliveryConfetti}
                    className="px-4 py-2 rounded-full bg-[#00d49f] hover:bg-[#00e3aa] text-black text-xs font-bold shadow-sm transition-all"
                  >
                    Celebrate Arrival 🎉
                  </button>
                </div>
              )}

            </div>

            {/* Right: Delivered Verification Proof / Package Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-3xl bg-[#f8fafc] border border-slate-200 shadow-sm">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-900 font-display">Unboxing Memory</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Verified
                  </span>
                </div>

                <div className="mt-4 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
                  <img
                    src="/assets/luxury-unboxing.jpg"
                    alt="Luxury delivery package proof"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3.5">
                    <div className="text-white">
                      <div className="text-xs font-bold">Aeterna Paris Crossbody</div>
                      <div className="text-[10px] text-white/80">Received in pristine condition</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Carrier Service:</span>
                    <span className="font-semibold text-slate-900">Route Green Express</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>1-Click Claims:</span>
                    <span className="font-bold text-emerald-700">Pre-Approved</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Customer Happiness:</span>
                    <span className="font-semibold text-slate-900">100% Satisfaction</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
