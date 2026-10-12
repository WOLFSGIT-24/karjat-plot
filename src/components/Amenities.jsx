import React from 'react';

export default function Amenities() {
  const amenitiesList = [
    {
      icon: 'pool',
      title: 'Private Pool for Every Villa',
      description: 'Custom temperature-balanced private lap & infinity pools included with every villa plot parcel.',
      status: 'Villa Standard',
    },
    {
      icon: 'shield',
      title: 'Gated Community Security',
      description: '24/7 multi-tiered perimeter security, biometric entry points, smart surveillance & CCTV coverage.',
      status: 'Fully Secured',
    },
    {
      icon: 'payments',
      title: 'Assured Rental Program',
      description: 'Turnkey luxury holiday rental management generating assured annual yields for plot owners.',
      status: 'High Yield ROI',
    },
    {
      icon: 'concierge',
      title: 'Lifetime Hospitality',
      description: 'Dedicated 5-star concierge, housekeeping, landscape upkeep, and private chef on demand.',
      status: 'Turnkey Leisure',
    },
    {
      icon: 'agriculture',
      title: 'Organic Agro & Orchards',
      description: 'Fully tended Ratnagiri Alphonso groves, spice gardens, and farm-to-table vegetable plots.',
      status: 'Active Harvest',
    },
    {
      icon: 'self_improvement',
      title: 'Forest Yoga & Observatory',
      description: 'Teakwood bamboo decks for sunrise mindfulness paired with a dark-sky stargazing telescope dome.',
      status: 'Open Air Wellness',
    },
  ];

  return (
    <section className="w-full py-space-xl bg-surface" id="amenities">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        {/* Headline & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              Bespoke Facilities
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              Resort Living & Lifetime Hospitality
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Gated community lifestyle featuring private pools for every villa, assured rental programs, and zero-maintenance luxury hospitality.
          </p>
        </div>

        {/* Spotlight Feature Card */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg mb-gutter bg-primary min-h-[380px] lg:min-h-[460px] flex items-end">
          <img
            alt="General Villa Plot with Private Pool"
            className="absolute inset-0 w-full h-full object-cover"
            src="/pool_villa.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
          <div className="relative z-10 p-space-md lg:p-space-xl max-w-3xl">
            <span className="px-space-md py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider mb-space-sm inline-block font-semibold">
              Signature Feature
            </span>
            <h3 className="font-display-md text-display-md-mobile lg:text-display-md text-surface-container-lowest font-semibold">
              Private Pool for Every Villa
            </h3>
            <p className="font-body-lg text-body-lg text-surface-container-highest/90 mt-space-xs">
              Every General villa plot includes a pre-sanctioned private swimming pool designed to seamlessly merge with the mist-clad Karjat hillside panorama.
            </p>
          </div>
        </div>

        {/* 6-Part Clean Amenity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {amenitiesList.map((amenity, idx) => (
            <div
              key={idx}
              className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-space-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-headline-sm">{amenity.icon}</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary">{amenity.title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {amenity.description}
                </p>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary pt-space-md font-semibold">
                {amenity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
