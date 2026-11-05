import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e2f1b] text-on-primary border-t border-white/10">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl lg:gap-20 pb-space-xl border-b border-white/10 items-start">
          
          {/* Column 1: Brand & Overview */}
          <div className="flex flex-col gap-space-md max-w-md">
            <a className="flex items-center gap-space-sm" href="#hero">
              <img
                src="/logo.svg"
                alt="Prinalto Estates Logo"
                className="h-10 sm:h-11 w-auto object-contain filter brightness-0 invert"
              />
            </a>
            <p className="font-body-sm text-body-sm text-surface-variant/80 leading-relaxed">
              Premium plot opportunities in Karjat from 1,500 sq. ft. to 1 acre. Ideal for private weekend homes, villa living, or long-term land investment.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-space-sm md:items-end">
            <div className="text-left md:text-right">
              <span className="font-title-md text-title-md text-white font-semibold mb-2 block">
                Quick Navigation
              </span>
              <div className="flex flex-col gap-2">
                <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-white transition-colors" href="#hero">
                  Overview
                </a>
                <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-white transition-colors" href="#why-invest">
                  Why Karjat
                </a>
                <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-white transition-colors" href="#plot-options">
                  Plot Options
                </a>
                <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-white transition-colors" href="#lifestyle">
                  The Karjat Lifestyle
                </a>
                <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-white transition-colors" href="#location">
                  Location Advantage
                </a>
                <a className="font-body-sm text-body-sm text-surface-variant/80 hover:text-white transition-colors" href="#key-highlights">
                  Key Highlights
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-white/50 font-body-sm text-xs">
          <p className="text-center sm:text-left">
            © 2026 Prinalto Estates. All rights reserved.
          </p>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-white transition-colors" href="#hero">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#hero">
              Legal Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
