import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-slate-200">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 pr-0 md:pr-6">
            <a href="#" className="flex items-center gap-2.5 mb-4 group inline-flex" aria-label="Route Home">
              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center transition-all group-hover:scale-105 shadow-xs">
                <svg className="w-4 h-4 text-[#00d49f]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5L3.5 19.5h6.5L12 14.5l2 5h6.5L12 2.5z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                Route<span className="text-[#00d49f]">.</span>
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 max-w-sm">
              The premier post-purchase experience platform connecting millions of shoppers with the brands they cherish. Turning every delivery into lasting brand equity.
            </p>

            {/* System Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#00d49f] animate-pulse" />
              <span>All Systems Operational • 99.99%</span>
            </div>
          </div>

          {/* Product Column */}
          <div className="col-span-1 md:col-span-2">
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-4">
              Platform
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#tracking-experience" className="hover:text-slate-900 transition-colors">Visual Tracking</a></li>
              <li><a href="#brand-story" className="hover:text-slate-900 transition-colors">Route Protect</a></li>
              <li><a href="#brand-story" className="hover:text-slate-900 transition-colors">Branded Tracking</a></li>
              <li><a href="#benefits" className="hover:text-slate-900 transition-colors">Carbon Neutrality</a></li>
              <li><a href="#benefits" className="hover:text-slate-900 transition-colors">Claims Automation</a></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="col-span-1 md:col-span-2">
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-4">
              Solutions
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#proof" className="hover:text-slate-900 transition-colors">Luxury & Apparel</a></li>
              <li><a href="#proof" className="hover:text-slate-900 transition-colors">High-Growth DTC</a></li>
              <li><a href="#proof" className="hover:text-slate-900 transition-colors">Enterprise Commerce</a></li>
              <li><a href="#proof" className="hover:text-slate-900 transition-colors">Shopify Plus Brands</a></li>
              <li><a href="#proof" className="hover:text-slate-900 transition-colors">International Delivery</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1 md:col-span-2">
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-4">
              Resources
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#journey" className="hover:text-slate-900 transition-colors">Interactive Map</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors flex items-center gap-1">Developer API <ArrowUpRight className="w-3 h-3 text-emerald-600" /></a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Merchant Help Center</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Customer Claims</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Security & Trust</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1 md:col-span-2">
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About Route</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Row: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Route App, Inc. All rights reserved. Designed to perform.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Merchant Agreement</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
