import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Menu, X, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState<'merchants' | 'shoppers'>('merchants');
  const [platformDropdown, setPlatformDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 md:py-5 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#00f0b5] rounded-full p-1"
          aria-label="Route Home"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#00f0b5]/60 group-hover:shadow-[0_0_15px_rgba(0,240,181,0.4)]">
            {/* Route Signature Arrowhead Icon */}
            <svg 
              className="w-4 h-4 text-[#00f0b5] transition-transform duration-300 group-hover:rotate-12" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2.5L3.5 19.5h6.5L12 14.5l2 5h6.5L12 2.5z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-display">
            Route<span className="text-[#00f0b5]">.</span>
          </span>
        </a>

        {/* Center: Floating Capsule Navigation (Desktop) */}
        <nav 
          className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-500 ${
            scrolled 
              ? 'bg-[#0f131a]/85 border border-white/15 shadow-2xl backdrop-blur-xl' 
              : 'bg-black/35 border border-white/12 shadow-lg backdrop-blur-md'
          }`}
          aria-label="Main Navigation"
        >
          {/* Platform with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPlatformDropdown(!platformDropdown)}
              onMouseEnter={() => setPlatformDropdown(true)}
              className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-expanded={platformDropdown}
            >
              Platform
              <ChevronDown className={`w-3 h-3 text-white/50 transition-transform duration-200 ${platformDropdown ? 'rotate-180' : ''}`} />
            </button>

            {platformDropdown && (
              <div 
                onMouseLeave={() => setPlatformDropdown(false)}
                className="absolute top-full left-0 mt-2 w-72 p-3 rounded-2xl bg-[#0f141d]/95 backdrop-blur-2xl border border-white/15 shadow-2xl grid gap-2 animate-in fade-in zoom-in-95 duration-150"
              >
                <a href="#tracking-experience" className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#00f0b5]/10 border border-[#00f0b5]/30 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#00f0b5]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-[#00f0b5] transition-colors">Visual Tracking</div>
                    <div className="text-[11px] text-white/60">Live interactive order maps & status alerts</div>
                  </div>
                </a>
                <a href="#brand-story" className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-[#00f0b5] transition-colors">Package Protection</div>
                    <div className="text-[11px] text-white/60">100% green delivery & instant claim resolution</div>
                  </div>
                </a>
              </div>
            )}
          </div>

          <a href="#solutions" className="px-3.5 py-1.5 text-xs font-medium text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10">
            Solutions
          </a>
          <a href="#journey" className="px-3.5 py-1.5 text-xs font-medium text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10">
            Live Journey
          </a>
          <a href="#proof" className="px-3.5 py-1.5 text-xs font-medium text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10">
            Enterprise
          </a>

          {/* Quick Demo CTA inside capsule */}
          <button
            onClick={onOpenDemo}
            className="ml-2 flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-[#00f0b5] hover:bg-[#34f8c4] transition-all rounded-full shadow-[0_0_15px_rgba(0,240,181,0.4)] hover:shadow-[0_0_22px_rgba(0,240,181,0.6)] hover:scale-[1.03]"
          >
            Book a Demo
          </button>
        </nav>

        {/* Right: Audience Selector & Sign In & Main CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Audience Segment Pill */}
          <div className="flex items-center p-1 rounded-full bg-black/40 border border-white/12 backdrop-blur-md text-xs">
            <button
              onClick={() => setActiveAudience('merchants')}
              className={`px-3 py-1 rounded-full transition-all duration-300 font-medium ${
                activeAudience === 'merchants'
                  ? 'bg-white/20 text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Merchants
            </button>
            <button
              onClick={() => setActiveAudience('shoppers')}
              className={`px-3 py-1 rounded-full transition-all duration-300 font-medium ${
                activeAudience === 'shoppers'
                  ? 'bg-white/20 text-white shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Shoppers
            </button>
          </div>

          <button
            onClick={onOpenDemo}
            className="px-3.5 py-1.5 text-xs font-medium text-white/90 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            Sign In
          </button>

          <button
            onClick={onOpenDemo}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-gradient-to-r from-[#00f0b5] to-[#40ebd0] hover:from-[#34f8c4] hover:to-[#5ef3db] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,240,181,0.35)] hover:shadow-[0_0_28px_rgba(0,240,181,0.6)] hover:scale-105 active:scale-95"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-lg mx-auto p-5 rounded-3xl bg-[#0d1017]/95 backdrop-blur-2xl border border-white/15 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <span className="text-xs uppercase tracking-wider text-white/50 font-medium">Navigation</span>
            <div className="flex gap-1 p-0.5 rounded-full bg-black/50 border border-white/10 text-xs">
              <button
                onClick={() => setActiveAudience('merchants')}
                className={`px-2.5 py-0.5 rounded-full ${activeAudience === 'merchants' ? 'bg-white/20 text-white' : 'text-white/60'}`}
              >
                Merchants
              </button>
              <button
                onClick={() => setActiveAudience('shoppers')}
                className={`px-2.5 py-0.5 rounded-full ${activeAudience === 'shoppers' ? 'bg-white/20 text-white' : 'text-white/60'}`}
              >
                Shoppers
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 py-4">
            <a 
              href="#tracking-experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-[#00f0b5] transition-colors py-1"
            >
              Platform Overview
            </a>
            <a 
              href="#brand-story" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-[#00f0b5] transition-colors py-1"
            >
              Post-Purchase Experience
            </a>
            <a 
              href="#journey" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-[#00f0b5] transition-colors py-1"
            >
              Interactive Journey
            </a>
            <a 
              href="#proof" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-[#00f0b5] transition-colors py-1"
            >
              Merchant Success
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-full bg-[#00f0b5] text-black font-semibold text-sm shadow-[0_0_15px_rgba(0,240,181,0.4)] flex items-center justify-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 rounded-full bg-white/10 text-white font-medium text-xs hover:bg-white/15"
            >
              Merchant Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
