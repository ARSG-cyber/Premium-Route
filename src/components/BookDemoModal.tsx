import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [storeName, setStoreName] = useState('');
  const [email, setEmail] = useState('');
  const [volume, setVolume] = useState('10k-50k');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#00f0b5', '#5de2e7', '#ffffff']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={handleReset} />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0d1017] border border-white/20 shadow-[0_35px_80px_rgba(0,0,0,0.9)] p-6 sm:p-8 text-white z-10 overflow-hidden">
        
        {/* Top ambient glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-40 bg-[#00f0b5]/20 blur-3xl pointer-events-none rounded-full" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f0b5]/15 border border-[#00f0b5]/30 text-xs font-mono text-[#00f0b5] mb-4">
              <Sparkles className="w-3 h-3 text-[#00f0b5]" />
              <span>BESPOKE ARCHITECTURE DEMO</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white font-display mb-2">
              Transform Your Post-Purchase Experience.
            </h3>
            <p className="text-xs sm:text-sm text-white/60 mb-6">
              Connect with a Route Enterprise Architect to see your brand custom-rendered in the Route tracking ecosystem.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5">
                  Brand or Store Website
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. aeternaparis.com"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00f0b5] focus:ring-1 focus:ring-[#00f0b5] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="founder@brand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00f0b5] focus:ring-1 focus:ring-[#00f0b5] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5">
                  Monthly Shipment Volume
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#111520] border border-white/15 text-sm text-white focus:outline-none focus:border-[#00f0b5] transition-colors"
                >
                  <option value="under-5k">Under 5,000 orders / mo</option>
                  <option value="5k-25k">5,000 – 25,000 orders / mo</option>
                  <option value="25k-100k">25,000 – 100,000 orders / mo</option>
                  <option value="100k+">100,000+ orders / mo (Enterprise)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#00f0b5] hover:bg-[#34f8c4] text-black font-semibold text-sm transition-all shadow-[0_0_20px_rgba(0,240,181,0.4)] flex items-center justify-center gap-2"
                >
                  <span>Request Custom VIP Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-white/40 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00f0b5]" />
                <span>Zero obligations • Instant integration analysis</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#00f0b5]/20 border border-[#00f0b5]/40 flex items-center justify-center mx-auto mb-4 text-[#00f0b5]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white font-display mb-2">
              VIP Request Received
            </h3>
            <p className="text-sm text-white/70 max-w-sm mx-auto mb-6">
              Our enterprise solution architect is tailoring a demo for <span className="text-[#00f0b5] font-semibold">{storeName || 'your brand'}</span>. We have dispatched a priority calendar link to <span className="text-white font-medium">{email}</span>.
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
            >
              Back to Experience
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
