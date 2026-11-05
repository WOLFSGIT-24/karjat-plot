import React from 'react';

export default function WhyInvest({ onOpenBookModal }) {
  const points = [
    { text: 'Plot sizes from 1,500 sq. ft. to 1 acre', icon: 'square_foot' },
    { text: 'Agricultural & Non-Agricultural land options', icon: 'gavel' },
    { text: 'Secure gated community living options', icon: 'shield' },
    { text: 'Private villa & swimming pool options', icon: 'pool' },
    { text: 'Multiple luxury lifestyle club amenities', icon: 'sports_tennis' },
    { text: 'Assured rental yields on select projects', icon: 'payments' },
    { text: 'Lifetime hospitality on select projects', icon: 'concierge' },
    { text: 'Surrounded by nature & weekend attractions', icon: 'nature_people' },
  ];

  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="why-invest">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-space-lg mb-space-lg">
          <div className="max-w-3xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              Why Invest in Karjat?
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              A Destination for Weekend Living & Investment
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs font-light">
              Karjat offers the perfect combination of nature, connectivity and lifestyle, making it an attractive destination for owning a plot away from the city.
            </p>
          </div>

          <button
            onClick={onOpenBookModal}
            className="bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-lg py-space-md rounded-lg shadow-md transition-colors cursor-pointer font-semibold whitespace-nowrap"
            type="button"
          >
            Get Plot Details
          </button>
        </div>

        {/* 8 Highlights Grid - Uniform Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter items-stretch">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all border border-surface-container-high/60 flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-headline-sm">{pt.icon}</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary font-semibold leading-snug">
                  {pt.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
