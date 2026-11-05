import React from 'react';

export default function PlotOptions({ onOpenBookModal }) {
  const options = [
    {
      size: '1,500 sq. ft.',
      desc: 'Ideal for a private weekend home',
      price: 'From ₹75 lacs',
      image: '/pool_villa.jpg',
      tag: 'Compact Retreat',
    },
    {
      size: '5,000+ sq. ft.',
      desc: 'More space for premium villa living',
      price: 'Starting ₹1.8 Cr+',
      image: '/hero.jpg',
      tag: 'Villa Parcel',
    },
    {
      size: '10,000+ sq. ft.',
      desc: 'Designed for a larger private retreat',
      price: 'Starting ₹2.8 Cr+',
      image: '/grand_manor.jpg',
      tag: 'Grand Manor',
    },
    {
      size: 'Up to 1 Acre',
      desc: 'For those looking for expansive private spaces',
      price: 'Custom Pricing',
      image: '/agro_estate.jpg',
      tag: 'Agro Estate',
    },
  ];

  return (
    <section className="w-full py-space-xl bg-surface" id="plot-options">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              Plot Options
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              Choose the Plot That Fits Your Vision
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-xs">
              From a compact weekend retreat to a larger private estate, explore plot options based on your space and lifestyle requirements.
            </p>
          </div>

          <div className="bg-surface-container-low px-space-md py-space-sm rounded-lg border border-surface-container-high">
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Starting Price</span>
            <span className="font-title-lg text-title-lg text-secondary font-bold">From ₹75 lacs</span>
          </div>
        </div>

        {/* 4 Plot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-lg">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-surface-container-high flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={opt.size}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={opt.image}
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-primary/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm rounded-full font-semibold">
                  {opt.tag}
                </span>
              </div>

              <div className="p-space-md flex flex-col flex-grow justify-between space-y-space-sm">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {opt.size}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {opt.desc}
                  </p>
                </div>

                <div className="pt-space-xs border-t border-surface-container-high flex justify-between items-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Price Guide</span>
                  <span className="font-title-md text-title-md text-secondary font-bold">{opt.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-space-xs">
          <button
            onClick={onOpenBookModal}
            className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-xl py-space-md rounded-lg shadow-md transition-colors cursor-pointer font-semibold"
            type="button"
          >
            Check Available Plots
            <span className="material-symbols-outlined text-title-md">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
