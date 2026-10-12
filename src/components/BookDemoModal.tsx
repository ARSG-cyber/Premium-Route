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
      colors: ['#00d49f', '#0284c7', '#0f172a']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={handleReset} />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)] p-6 sm:p-8 text-slate-900 z-10 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 mb-4 font-semibold">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>CUSTOM ARCHITECTURE DEMO</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-slate-900 font-display mb-2">
              Transform Your Post-Purchase Experience.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Connect with a Route Enterprise Architect to see your brand custom-rendered in the Route tracking ecosystem.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Brand or Store Website
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. aeternaparis.com"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="founder@brand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Monthly Shipment Volume
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 transition-colors"
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
                  className="w-full py-3.5 rounded-full bg-[#00d49f] hover:bg-[#00e3aa] text-black font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Request Custom VIP Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-2 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero obligations • Instant integration analysis</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-emerald-600">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-slate-900 font-display mb-2">
              VIP Request Received
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
              Our enterprise solution architect is tailoring a demo for <span className="text-emerald-700 font-bold">{storeName || 'your brand'}</span>. We have dispatched a priority calendar link to <span className="text-slate-900 font-semibold">{email}</span>.
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-all"
            >
              Back to Experience
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
