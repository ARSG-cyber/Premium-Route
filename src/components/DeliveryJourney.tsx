import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Package, 
  Truck, 
  Home, 
  CheckCircle2, 
  MapPin, 
  Camera,
  Leaf,
  Navigation
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface JourneyStage {
  id: number;
  stageName: string;
  timestamp: string;
  location: string;
  statusHeadline: string;
  statusDescription: string;
  carrierLog: string;
  coords: string;
  progressPercent: number;
}

export const DeliveryJourney: React.FC = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);


  const stages: JourneyStage[] = [
    {
      id: 0,
      stageName: 'Order Confirmed',
      timestamp: 'Today, 10:15 AM',
      location: 'SoHo Design Studio • New York, NY',
      statusHeadline: 'Order Secured & Route Protection Active',
      statusDescription: 'Merchant verified payment and packed goods in 100% recyclable, tamper-evident packaging. Route 1-Click Protection active.',
      carrierLog: 'Fulfillment queue cleared • Barcode scanned & sync established',
      coords: '40.7233° N, 74.0030° W',
      progressPercent: 10
    },
    {
      id: 1,
      stageName: 'Dispatched & Transit',
      timestamp: 'Today, 11:45 AM',
      location: 'Metro Distribution Center • Jersey City, NJ',
      statusHeadline: 'Departed Sustainable Fulfillment Hub',
      statusDescription: 'Loaded onto regional electric freight transport. Carbon offset credits calculated and allocated in real time.',
      carrierLog: 'En route via I-78 Express corridor • Green freight verification: PASS',
      coords: '40.7178° N, 74.0431° W',
      progressPercent: 38
    },
    {
      id: 2,
      stageName: 'Local Distribution',
      timestamp: 'Today, 01:20 PM',
      location: 'Williamsburg Sort Facility • Brooklyn, NY',
      statusHeadline: 'Sorted to Neighborhood Courier Route',
      statusDescription: 'Package passed automated optical inspection. Assigned to dedicated last-mile courier van with real-time GPS telemetry.',
      carrierLog: 'Package sorted to Bin #49 • Final courier route optimized',
      coords: '40.7144° N, 73.9553° W',
      progressPercent: 65
    },
    {
      id: 3,
      stageName: 'Out for Delivery',
      timestamp: 'Today, 02:05 PM',
      location: 'En Route to Delivery Address • 0.8 mi away',
      statusHeadline: 'Courier Approaching Your Address',
      statusDescription: 'Driver is completing stop #14. Your package is scheduled next. Live proximity push alert sent to customer device.',
      carrierLog: 'Estimated 15 minutes remaining • Gate code pre-cleared',
      coords: '40.7190° N, 73.9610° W',
      progressPercent: 88
    },
    {
      id: 4,
      stageName: 'Delivered With Proof',
      timestamp: 'Today, 02:22 PM',
      location: 'Front Porch / Secure Entry • Brooklyn, NY',
      statusHeadline: 'Package Safely Delivered & Verified',
      statusDescription: 'Delivered to resident at front porch. High-resolution delivery proof photo captured and synced instantly to the customer app.',
      carrierLog: 'Delivery photo verified • Customer notified via SMS & Push • Status: COMPLETE',
      coords: '40.7182° N, 73.9585° W',
      progressPercent: 100
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
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#00f0b5', '#ffffff', '#5de2e7', '#ffd166']
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
    <section id="journey" className="relative py-24 md:py-36 bg-[#07090d] text-white overflow-hidden border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#00f0b5]/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#5de2e7]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Concept Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#00f0b5] mb-4">
              <Navigation className="w-3.5 h-3.5 text-[#00f0b5]" />
              <span>SIGNATURE INTERACTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              The Living Package Journey.
            </h2>
            <p className="text-base sm:text-lg text-white/60 mt-3">
              Experience the real-time telemetry, visual milestones, and intelligent reassurance that customers enjoy across every Route-protected shipment.
            </p>
          </div>

          {/* Interactive Play / Scrub Simulation Controls */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/12 p-2 rounded-full backdrop-blur-xl shrink-0">
            <button
              onClick={handleTogglePlay}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f0b5] hover:bg-[#34f8c4] text-black font-semibold text-xs transition-all shadow-[0_0_15px_rgba(0,240,181,0.3)] hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause Journey</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>{currentStageIndex === stages.length - 1 ? 'Replay Journey' : 'Simulate Journey'}</span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              title="Reset simulation"
              aria-label="Reset simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE TRACKING ARCHITECTURE CARD */}
        {/* ============================================================ */}
        <div className="rounded-[36px] bg-[#0c1017]/90 border border-white/15 shadow-[0_35px_90px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-6 sm:p-9 md:p-11 relative overflow-hidden">
          
          {/* Top Progress Track Header */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider">LIVE TELEMETRY STREAM</span>
                <div className="text-lg font-bold text-white flex items-center gap-2 mt-0.5 font-display">
                  <span>Shipment #RT-892401-NY</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-[#00f0b5]/15 text-[#00f0b5] border border-[#00f0b5]/30">
                    CARBON OFFSET: 1.4kg CO₂e
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-white/70">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00f0b5] animate-ping" />
                  <span>GPS: {currentStage.coords}</span>
                </div>
                <div className="hidden sm:block text-white/30">|</div>
                <div className="hidden sm:block">{currentStage.timestamp}</div>
              </div>
            </div>

            {/* Glowing Horizontal Progress Bar */}
            <div className="relative h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#00f0b5] via-[#5de2e7] to-[#00f0b5] transition-all duration-700 ease-out shadow-[0_0_15px_#00f0b5]"
                style={{ width: `${currentStage.progressPercent}%` }}
              />
            </div>

            {/* Step Selection Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 mt-4">
              {stages.map((stage, idx) => {
                const isCurrent = idx === currentStageIndex;
                const isDone = idx < currentStageIndex;
                return (
                  <button
                    key={stage.id}
                    onClick={() => handleSelectStage(idx)}
                    className={`p-3 rounded-2xl text-left transition-all duration-300 border focus:outline-none ${
                      isCurrent
                        ? 'bg-white/15 border-[#00f0b5]/60 shadow-[0_0_20px_rgba(0,240,181,0.25)]'
                        : isDone
                          ? 'bg-white/5 border-white/10 hover:bg-white/10'
                          : 'bg-transparent border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono text-white/50">0{idx + 1}</span>
                      {isDone ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0b5]" />
                      ) : isCurrent ? (
                        <span className="w-2 h-2 rounded-full bg-[#00f0b5] animate-pulse" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      )}
                    </div>
                    <div className={`text-xs font-semibold truncate ${isCurrent ? 'text-white' : 'text-white/70'}`}>
                      {stage.stageName}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ============================================================ */}
          {/* STAGE SPOTLIGHT CONTENT */}
          {/* ============================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-white/10">
            
            {/* Left: Detailed Status Description */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0b5]/10 border border-[#00f0b5]/30 text-xs font-semibold text-[#00f0b5]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentStage.location}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display leading-tight">
                {currentStage.statusHeadline}
              </h3>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                {currentStage.statusDescription}
              </p>

              {/* Verified Carrier Terminal Log */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs text-white/70 space-y-1.5">
                <div className="text-[11px] text-white/40 uppercase tracking-wider font-sans">
                  Carrier Telemetry Log
                </div>
                <div className="text-emerald-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{currentStage.carrierLog}</span>
                </div>
              </div>

              {/* Special Delivered Moment Reveal */}
              {currentStageIndex === 4 && (
                <div className="p-4 rounded-2xl bg-[#00f0b5]/10 border border-[#00f0b5]/30 flex items-center justify-between flex-wrap gap-3 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00f0b5] text-black flex items-center justify-center font-bold">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Visual Proof Photo Captured</div>
                      <div className="text-[11px] text-white/70">Verified at 2:22 PM • Front Porch</div>
                    </div>
                  </div>
                  <button 
                    onClick={triggerDeliveryConfetti}
                    className="px-3 py-1.5 rounded-full bg-[#00f0b5] text-black text-xs font-semibold hover:bg-[#34f8c4] transition-colors"
                  >
                    Celebrate Arrival 🎉
                  </button>
                </div>
              )}

            </div>

            {/* Right: Dynamic Interactive Simulation Device Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm p-6 rounded-3xl bg-[#121621] border border-white/18 shadow-2xl">
                
                {/* Visual Icon animation corresponding to stage */}
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#00f0b5]/20 to-white/10 border border-[#00f0b5]/40 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(0,240,181,0.2)]">
                  {currentStageIndex === 0 && <Package className="w-10 h-10 text-[#00f0b5]" />}
                  {currentStageIndex === 1 && <Leaf className="w-10 h-10 text-emerald-400" />}
                  {currentStageIndex === 2 && <Navigation className="w-10 h-10 text-[#5de2e7]" />}
                  {currentStageIndex === 3 && <Truck className="w-10 h-10 text-[#00f0b5] animate-bounce" />}
                  {currentStageIndex === 4 && <Home className="w-10 h-10 text-[#00f0b5]" />}
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-mono text-white/40 uppercase">LIVE STAGE</span>
                  <h4 className="text-lg font-bold text-white mt-0.5">{currentStage.stageName}</h4>
                  <p className="text-xs text-white/60 mt-1">{currentStage.timestamp}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-white/70">
                    <span>Carrier Service:</span>
                    <span className="text-white font-medium">Route Green Logistics</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Protection Guarantee:</span>
                    <span className="text-[#00f0b5] font-semibold">100% Covered</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Customer Notifications:</span>
                    <span className="text-white font-medium">SMS + Email + App</span>
                  </div>
                </div>

                {/* Simulated delivery photo thumbnail if delivered */}
                {currentStageIndex === 4 && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-white/20 relative group cursor-pointer">
                    <img 
                      src="/assets/luxury-unboxing.jpg" 
                      alt="Delivery verification" 
                      className="w-full h-24 object-cover filter brightness-90 group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-xs font-semibold text-white">
                      <Camera className="w-4 h-4 mr-1.5" />
                      View Delivery Photo
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
