import React from 'react';

export default function Hero({ onOpenBookModal }) {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden pt-20 pb-16" id="hero">
      {/* Background Image with Ambient Nature Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Premium Plots in Karjat"
          className="w-full h-full object-cover scale-105"
          src="/hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60"></div>
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
      </div>

      {/* Main Content Container (Centered layout matching Walk in the Clouds) */}
      <div className="relative z-10 max-w-4xl w-full mx-auto px-margin-mobile lg:px-margin flex flex-col items-center justify-center space-y-space-md py-space-xl">
        
        {/* Top Centered Pill Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white/95 text-xs font-semibold uppercase tracking-widest shadow-md">
          <span>Premium Plots in Karjat</span>
        </div>

        {/* Main Title: Own Your Piece of Karjat */}
        <div className="space-y-1 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans leading-none">
            Own Your Piece of
          </h1>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal italic font-serif text-surface-container-lowest leading-tight">
            Karjat
          </h2>
        </div>

        {/* Subtitle & Specs */}
        <div className="space-y-2 max-w-2xl">
          <p className="font-title-lg text-title-lg text-secondary-fixed font-bold tracking-wide">
            Plots from 1,500 sq. ft. to 1 acre | From ₹75 lacs
          </p>
          <p className="font-body-lg text-body-lg text-white/90 font-light leading-relaxed">
            Explore premium plot opportunities in Karjat with options for a private villa, weekend home or long-term investment.
          </p>
        </div>

        {/* Centered Pill Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-space-md">
          <button
            onClick={onOpenBookModal}
            className="inline-flex items-center justify-center bg-white hover:bg-surface-bright text-[#3b5730] font-label-lg text-label-lg px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer font-bold"
            type="button"
          >
            Explore Plot Options
          </button>
          <div className="relative inline-flex">
            <button
              onClick={onOpenBookModal}
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 text-white backdrop-blur-md font-label-lg text-label-lg px-8 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer font-semibold"
              type="button"
            >
              <span className="material-symbols-outlined text-title-md">calendar_month</span>
              Book Site Visit
            </button>
            <span className="absolute -top-3 -right-2 bg-amber-400 text-[#141b12] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md border border-white/50 flex items-center gap-1 animate-pulse">
              ✨ Festive Offers Available
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center text-white/70 space-y-1.5 pointer-events-none">
        <span className="font-label-sm text-[11px] uppercase tracking-widest block font-medium">Scroll to Explore</span>
        <div className="w-px h-6 bg-white/50 mx-auto animate-pulse"></div>
      </div>
    </section>
  );
}
