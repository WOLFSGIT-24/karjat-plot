import React, { useState } from 'react';

export default function BespokePlans({ onOpenDossierModal }) {
  const [activePlanKey, setActivePlanKey] = useState('courtyard');

  const plans = {
    courtyard: {
      tag: 'Sanctioned Concept A',
      name: 'The Compact Luxury Parcel',
      tabLabel: '2,000 sq.ft Villa Plot (₹1 Cr+)',
      cadRef: 'Rev 4.2',
      description: 'Symmetrical 2,000 sq.ft villa plot concept featuring an air-cooled atrium, private lap pool, and open cross-ventilation decks.',
      image: '/pool_villa.jpg',
      metrics: [
        { icon: 'pool', label: 'Private Feature', value: 'Private Pool Included' },
        { icon: 'square_foot', label: 'Plot Size', value: '2,000 sq.ft' },
        { icon: 'gavel', label: 'Land Type', value: 'NA / Agro Title' },
        { icon: 'payments', label: 'Pricing', value: '₹1 Cr+' },
      ],
    },
    hillcrest: {
      tag: 'Sanctioned Concept B',
      name: 'The Estate Horizon Parcel',
      tabLabel: '5,000 sq.ft Villa Plot (₹1.8 Cr+)',
      cadRef: 'Rev 5.0',
      description: 'Elevated 5,000 sq.ft hillside plot engineered for multi-tiered architecture, double-height living areas, and a private horizon infinity edge pool.',
      image: '/hero.jpg',
      metrics: [
        { icon: 'pool', label: 'Private Feature', value: 'Infinity Pool Deck' },
        { icon: 'square_foot', label: 'Plot Size', value: '5,000 sq.ft' },
        { icon: 'gavel', label: 'Land Type', value: 'Collector NA' },
        { icon: 'payments', label: 'Pricing', value: '₹1.8 Cr+' },
      ],
    },
    ranch: {
      tag: 'Sanctioned Concept C',
      name: 'The Full Acre Sanctuary',
      tabLabel: '1 Acre Agro Homestead (₹3.5 Cr+)',
      cadRef: 'Rev 3.8',
      description: 'Sprawling 1-Acre estate parcel integrated into native Alphonso mango orchards, featuring a private natural swimming lagoon, wrap-around loggia, and barbecue firepit.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM8zIVq5TprK9gRm78e3tJpL_TM9CsvIQfh5tT9Bfy2dwaZRM882Xjn12KTUtqfdMJeuBwEPN7OZbglW2ymY8BAsARG_rdDNciMwSP3o2VXbD58Qp-ilIlmMoB41ntM2-grdctHVxsRuu_TtQX9Ge6jQOacsaXDBlks7trCnmub0P68VPYa6rwvxoQmOnY5KTr8DWvTIV43vNr7oVMR3CXhGCfR4xjythZU0psmm8aCJ6HU-5o_8hK',
      metrics: [
        { icon: 'pool', label: 'Private Feature', value: 'Bio Lagoon Pool' },
        { icon: 'landscape', label: 'Plot Size', value: '1 Full Acre' },
        { icon: 'eco', label: 'Land Type', value: 'Agro Sanctuary' },
        { icon: 'payments', label: 'Pricing', value: 'Custom Offer' },
      ],
    },
  };

  const activePlan = plans[activePlanKey];

  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="plot-masterplan">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        {/* Headline & Introduction */}
        <div className="max-w-3xl mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
            Architectural Blueprints & Plot Sizes
          </span>
          <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
            Curated Villa Plot Offerings
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Ranging from <strong>2,000 sq.ft to 1 Acre</strong> starting at <strong>₹1 Cr+</strong>. Every plot comes with a <strong>Private Pool for Every Villa</strong>, Gated Community security, and flexible payment options (CLP, Subvention, On-spot offers).
          </p>
        </div>

        {/* Plan Toggle Tabs */}
        <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
          {Object.keys(plans).map((key) => (
            <button
              key={key}
              onClick={() => setActivePlanKey(key)}
              className={`font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg transition-all cursor-pointer ${
                activePlanKey === key
                  ? 'bg-primary text-on-primary shadow-sm font-semibold'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary'
              }`}
              type="button"
            >
              {plans[key].tabLabel}
            </button>
          ))}
        </div>

        {/* Architectural Plan Showcase Card */}
        <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md lg:p-space-lg grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Floor Plan Image Viewer */}
          <div className="lg:col-span-8 bg-surface-bright rounded-lg p-space-sm relative group overflow-hidden flex items-center justify-center min-h-[350px]">
            <img
              alt={`Architectural Floor Plan ${activePlan.name}`}
              className="w-full h-auto max-h-[560px] object-cover rounded transition-transform duration-500 group-hover:scale-105"
              src={activePlan.image}
            />
            <div className="absolute bottom-space-md right-space-md flex gap-space-xs">
              <span className="px-space-md py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded-full shadow-md">
                Cadastral Ref: {activePlan.cadRef}
              </span>
            </div>
          </div>

          {/* Specifications & Plan Inquiry */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-space-md py-space-sm">
            <div>
              <div className="inline-flex items-center gap-space-xs text-secondary mb-space-xs">
                <span className="material-symbols-outlined text-title-md">architecture</span>
                <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                  {activePlan.tag}
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                {activePlan.name}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                {activePlan.description}
              </p>
            </div>

            {/* Feature Metric Grid */}
            <div className="grid grid-cols-2 gap-space-sm py-space-xs">
              {activePlan.metrics.map((metric, idx) => (
                <div key={idx} className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-title-md mt-0.5">
                    {metric.icon}
                  </span>
                  <div>
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">
                      {metric.label}
                    </span>
                    <span className="font-title-md text-title-md text-primary font-semibold">
                      {metric.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Conversion Area */}
            <div className="pt-space-xs space-y-space-sm">
              <button
                onClick={() => onOpenDossierModal(activePlan)}
                className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-space-md rounded-lg flex items-center justify-center gap-space-sm shadow-md transition-colors cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-title-md">description</span>
                Request Architectural Specifications
              </button>
              <p className="font-label-sm text-label-sm text-center text-on-surface-variant/80">
                Includes structural estimates, elevation renders, and FAR specs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
