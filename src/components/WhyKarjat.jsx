import React from 'react';

export default function WhyKarjat() {
  const highlights = [
    {
      stat: '45 Min',
      label: 'Navi Mumbai International Airport (NMIA)',
      desc: 'Seamless transit via the upcoming multi-modal corridor and extended suburban express highways.',
    },
    {
      stat: '18-22%',
      label: 'Annual Land Appreciation CAGR',
      desc: 'Institutional infrastructure capital inflows propelling Karjat into Mumbai premier second-home luxury corridor.',
    },
    {
      stat: '3.5x',
      label: 'Air Quality Index Advantage',
      desc: 'Pristine AQI under 35 with year-round mountain air currents and surrounding bio-diverse evergreen reserve forests.',
    },
    {
      stat: '100%',
      label: 'Collector NA Land Guarantee',
      desc: 'Clear legal title certificates, individual 7/12 extract documentation, and immediate possession handover.',
    },
  ];

  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="why-karjat">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-space-lg mb-space-lg">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              Strategic Growth Corridor
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              Why Invest in Karjat Foothills?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Positioned at the golden intersection of Mumbai-Pune growth hubs and major infrastructure megapoprojects like MTHL Trans-Harbour Link & Navi Mumbai Airport.
            </p>
          </div>
          <div className="bg-primary text-on-primary p-space-md rounded-xl max-w-sm">
            <div className="flex items-center gap-space-xs text-secondary-fixed mb-1">
              <span className="material-symbols-outlined">trending_up</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Investor Brief</span>
            </div>
            <p className="font-headline-sm text-headline-sm text-surface-container-lowest">
              Generational Equity Asset
            </p>
            <p className="font-body-sm text-body-sm text-surface-variant/80 mt-1">
              Land ownership in sanctioned eco-sensitive corridors provides scarcity-driven capital protection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter" id="investment-and-roi">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all border border-surface-container-high/60 flex flex-col justify-between"
            >
              <div>
                <span className="text-[38px] lg:text-[44px] font-bold text-secondary block mb-2 leading-none font-sans">
                  {item.stat}
                </span>
                <h3 className="font-title-md text-title-md text-primary mb-2 font-semibold">
                  {item.label}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
