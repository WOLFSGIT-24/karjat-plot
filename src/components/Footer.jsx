import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e2f1b] text-on-primary border-t border-white/10">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl lg:gap-20 pb-space-xl border-b border-white/10">
          
          {/* Column 1: Brand & Overview */}
          <div className="flex flex-col gap-space-md">
            <a className="flex items-center gap-space-sm" href="#hero">
              <img
                src="/logo.svg"
                alt="Prinalto Estates Logo"
                className="h-10 sm:h-11 w-auto object-contain filter brightness-0 invert"
              />
            </a>
            <p className="font-body-sm text-body-sm text-surface-variant/80 max-w-sm leading-relaxed">
              Premium plot opportunities in Karjat from 1,500 sq. ft. to 1 acre. Ideal for private weekend homes, villa living, or long-term land investment.
            </p>
            <div className="pt-1">
              <span className="font-label-sm text-xs text-white/50 block uppercase tracking-wider mb-1">
                MahaRERA Registration Number
              </span>
              <span className="font-label-lg text-sm text-secondary-fixed font-mono font-semibold">
                P52000049812 | Prinalto Estates Phase I &amp; II
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-white font-semibold mb-1">
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

          {/* Column 3: Karjat Site Office */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-white font-semibold mb-1">
              Karjat Site Office
            </span>
            <p className="font-body-sm text-body-sm text-surface-variant/80 leading-relaxed">
              Prinalto Foothill Estates,<br />
              Off Karjat-Murbad Highway,<br />
              Village Posari, Karjat, Raigad,<br />
              Maharashtra - 410201
            </p>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-white/50 font-body-sm text-xs">
          <p className="text-center sm:text-left">
            © 2026 Prinalto Estates. All rights reserved. RERA Registered Project.
          </p>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-white transition-colors" href="#hero">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#hero">
              Legal Disclaimer
            </a>
            <a className="hover:text-white transition-colors" href="#hero">
              RERA Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


