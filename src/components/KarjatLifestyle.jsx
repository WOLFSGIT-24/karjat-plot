import React from 'react';

export default function KarjatLifestyle({ onOpenBookModal }) {
  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="lifestyle">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              The Karjat Lifestyle
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              More Than Just a Plot
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Own a space where weekends can be spent surrounded by nature, adventure and experiences.
          </p>
        </div>

        {/* Feature Spotlight Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg mb-gutter bg-primary min-h-[420px] lg:min-h-[480px] flex items-end">
          <img
            alt="The Karjat Lifestyle"
            className="absolute inset-0 w-full h-full object-cover"
            src="/pool_villa.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>

          <div className="relative z-10 p-space-md lg:p-space-xl max-w-3xl space-y-space-xs">
            <span className="px-space-md py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold inline-block">
              Weekend Getaway Destination
            </span>
            <h3 className="font-headline-lg text-headline-lg text-surface-container-lowest font-bold">
              Surrounded by Nature, Adventure & Experiences
            </h3>
            <p className="font-body-lg text-body-lg text-surface-container-highest/90 font-light">
              From waterfalls and dams to trekking trails, restaurants and unique attractions, Karjat offers something for every kind of getaway.
            </p>
            <div className="pt-space-sm">
              <button
                onClick={onOpenBookModal}
                className="inline-flex items-center gap-space-xs bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg font-bold shadow-md transition-colors cursor-pointer"
                type="button"
              >
                Explore the Karjat Lifestyle
                <span className="material-symbols-outlined text-title-md">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Lifestyle Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-surface-container-high shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-space-sm">
              <span className="material-symbols-outlined text-headline-sm">waterfall_chart</span>
            </div>
            <h4 className="font-title-lg text-title-lg text-primary font-bold mb-1">Monsoon Waterfalls & Rivers</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Refreshing natural streams, Palasdari cascades, Bhilvale reservoir, and riverfront trails right at your doorstep.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-surface-container-high shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-space-sm">
              <span className="material-symbols-outlined text-headline-sm">restaurant</span>
            </div>
            <h4 className="font-title-lg text-title-lg text-primary font-bold mb-1">Fine Dining & Lounges</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Al-fresco dining at Saltt, artisan coffee at Coco Café, authentic regional cuisine at Namak, and Radisson Blu lounge.
            </p>
          </div>

          <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-surface-container-high shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-space-sm">
              <span className="material-symbols-outlined text-headline-sm">hiking</span>
            </div>
            <h4 className="font-title-lg text-title-lg text-primary font-bold mb-1">Fort Treks & Adventure</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Trek Songiri and Sondai forts, Bekare waterfall rappelling, Pej river rafting, and Imagicaa theme park.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
