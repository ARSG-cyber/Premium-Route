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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#00d49f] rounded-full p-1"
          aria-label="Route Home"
        >
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm">
            {/* Route Signature Arrowhead Icon */}
            <svg 
              className="w-4 h-4 text-[#00d49f] transition-transform duration-300 group-hover:rotate-12" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2.5L3.5 19.5h6.5L12 14.5l2 5h6.5L12 2.5z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
            Route<span className="text-[#00d49f]">.</span>
          </span>
        </a>

        {/* Center: Clean Floating Capsule Navigation (Desktop) */}
        <nav 
          className={`hidden lg:flex items-center gap-1 px-3.5 py-1.5 rounded-full transition-all duration-300 ${
            scrolled 
              ? 'bg-white/90 border border-slate-200 shadow-md backdrop-blur-xl' 
              : 'bg-white/75 border border-white/60 shadow-sm backdrop-blur-lg'
          }`}
          aria-label="Main Navigation"
        >
          {/* Platform with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPlatformDropdown(!platformDropdown)}
              onMouseEnter={() => setPlatformDropdown(true)}
              className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors rounded-full hover:bg-slate-100/80"
              aria-expanded={platformDropdown}
            >
              Platform
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${platformDropdown ? 'rotate-180' : ''}`} />
            </button>

            {platformDropdown && (
              <div 
                onMouseLeave={() => setPlatformDropdown(false)}
                className="absolute top-full left-0 mt-2 w-72 p-3 rounded-2xl bg-white border border-slate-150 shadow-xl grid gap-2 animate-in fade-in zoom-in-95 duration-150"
              >
                <a href="#tracking-experience" className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">Visual Tracking</div>
                    <div className="text-[11px] text-slate-500">Live interactive order maps & status alerts</div>
                  </div>
                </a>
                <a href="#brand-story" className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-slate-700" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">Package Protection</div>
                    <div className="text-[11px] text-slate-500">100% green delivery & instant claim resolution</div>
                  </div>
                </a>
              </div>
            )}
          </div>

          <a href="#solutions" className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors rounded-full hover:bg-slate-100/80">
            Solutions
          </a>
          <a href="#journey" className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors rounded-full hover:bg-slate-100/80">
            Live Map Journey
          </a>
          <a href="#proof" className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors rounded-full hover:bg-slate-100/80">
            Enterprise
          </a>

          {/* Quick Demo CTA inside capsule */}
          <button
            onClick={onOpenDemo}
            className="ml-2 flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-black bg-[#00d49f] hover:bg-[#00e3aa] transition-all rounded-full shadow-[0_2px_10px_rgba(0,212,159,0.3)] hover:scale-[1.02]"
          >
            Book a Demo
          </button>
        </nav>

        {/* Right: Audience Selector & Sign In & Main CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Audience Segment Pill */}
          <div className="flex items-center p-1 rounded-full bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md text-xs">
            <button
              onClick={() => setActiveAudience('merchants')}
              className={`px-3 py-1 rounded-full transition-all duration-200 font-semibold ${
                activeAudience === 'merchants'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Merchants
            </button>
            <button
              onClick={() => setActiveAudience('shoppers')}
              className={`px-3 py-1 rounded-full transition-all duration-200 font-semibold ${
                activeAudience === 'shoppers'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Shoppers
            </button>
          </div>

          <button
            onClick={onOpenDemo}
            className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors rounded-full hover:bg-white/80"
          >
            Sign In
          </button>

          <button
            onClick={onOpenDemo}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-black rounded-full transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full bg-white border border-slate-200 text-slate-800 shadow-sm hover:bg-slate-50 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-lg mx-auto p-5 rounded-3xl bg-white border border-slate-200 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Navigation</span>
            <div className="flex gap-1 p-0.5 rounded-full bg-slate-100 text-xs">
              <button
                onClick={() => setActiveAudience('merchants')}
                className={`px-2.5 py-0.5 rounded-full ${activeAudience === 'merchants' ? 'bg-white shadow text-slate-900 font-semibold' : 'text-slate-500'}`}
              >
                Merchants
              </button>
              <button
                onClick={() => setActiveAudience('shoppers')}
                className={`px-2.5 py-0.5 rounded-full ${activeAudience === 'shoppers' ? 'bg-white shadow text-slate-900 font-semibold' : 'text-slate-500'}`}
              >
                Shoppers
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 py-4">
            <a 
              href="#tracking-experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 transition-colors py-1"
            >
              Platform Overview
            </a>
            <a 
              href="#brand-story" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 transition-colors py-1"
            >
              Post-Purchase Experience
            </a>
            <a 
              href="#journey" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 transition-colors py-1"
            >
              Live Map Journey
            </a>
            <a 
              href="#proof" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 transition-colors py-1"
            >
              Merchant Success
            </a>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-full bg-[#00d49f] text-black font-semibold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 rounded-full bg-slate-100 text-slate-700 font-medium text-xs hover:bg-slate-200"
            >
              Merchant Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
