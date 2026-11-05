import React from 'react';

export default function KeyHighlights({ onOpenBookModal }) {
  const highlights = [
    'Plots from 1,500 sq. ft. to 1 acre',
    'Pricing from ₹75 lacs',
    'Agricultural & Non-Agricultural land options',
    'Secure gated community living options',
    'Private villa swimming pool options',
    'Multiple luxury lifestyle club amenities',
    'Assured rental yields on select projects',
    'Lifetime hospitality on select projects',
    'Strong weekend home investment appeal',
    'Surrounded by nature, leisure & adventure',
  ];

  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="key-highlights">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-space-lg mb-space-lg">
          <div className="max-w-3xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              Key Highlights
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              Why Consider a Plot in Karjat?
            </h2>
          </div>

          <button
            onClick={onOpenBookModal}
            className="bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-lg py-space-md rounded-lg shadow-md transition-colors cursor-pointer font-semibold whitespace-nowrap"
            type="button"
          >
            Get Pricing & Payment Details
          </button>
        </div>

        {/* 10 Highlights List - Uniform Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md mb-space-xl items-stretch">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-sm flex items-start gap-space-xs min-h-[90px] h-full"
            >
              <span className="material-symbols-outlined text-secondary text-title-md mt-0.5 flex-shrink-0">check_circle</span>
              <span className="font-title-md text-title-md text-primary font-semibold leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Flexible Payment Options Sub-block */}
        <div className="bg-primary text-on-primary rounded-2xl p-space-lg lg:p-space-xl shadow-lg border border-primary-container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-space-md">
            <div>
              <span className="px-3 py-1 rounded-full bg-secondary-fixed/20 text-secondary-fixed border border-secondary-fixed/30 font-label-sm text-label-sm uppercase tracking-widest font-semibold inline-block mb-space-xs">
                Flexible Payment Options
              </span>
              <h3 className="font-headline-lg text-headline-lg text-surface-container-lowest font-bold">
                CLP &nbsp;|&nbsp; Subvention &nbsp;|&nbsp; On-Spot Payment with Attractive Offers
              </h3>
              <p className="font-body-md text-body-md text-surface-container-highest/80 mt-1 font-light">
                Tailored financial plans and spot booking perks designed for high-yielding equity investments.
              </p>
            </div>

            <button
              onClick={onOpenBookModal}
              className="bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed font-label-lg text-label-lg px-space-lg py-space-md rounded-lg font-bold shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
              type="button"
            >
              Get Festive Offer Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
