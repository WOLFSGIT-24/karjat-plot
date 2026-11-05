import React from "react";

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

      {/* Main Content Container */}
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
          <p className="font-body-lg text-body-lg text-white font-medium leading-relaxed drop-shadow-sm">
            This festive season, find your plot at Prinalto in Karjat.
          </p>
        </div>

        {/* Centered Pill Action Buttons */}
        <div className="flex flex-col items-center gap-4 pt-space-md">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBookModal}
              className="inline-flex items-center justify-center bg-white hover:bg-surface-bright text-[#3b5730] font-label-lg text-label-lg px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer font-bold"
              type="button"
            >
              View Plot Options
            </button>
            <button
              onClick={onOpenBookModal}
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 text-white backdrop-blur-md font-label-lg text-label-lg px-8 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer font-semibold"
              type="button"
            >
              <span className="material-symbols-outlined text-title-md">calendar_month</span>
              Book a Site Visit
            </button>
          </div>

          {/* Golden Festive Offers Available Pill */}
          <button
            onClick={onOpenBookModal}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#e5a83b] via-[#f5bf53] to-[#e5a83b] hover:from-[#d99a2c] hover:to-[#d99a2c] text-[#1c1404] font-bold text-sm sm:text-base tracking-wide shadow-[0_4px_25px_rgba(245,191,83,0.45)] hover:shadow-[0_6px_30px_rgba(245,191,83,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            type="button"
          >
            <span className="text-lg">🎁</span>
            <span>Festive Offers Available</span>
          </button>
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
