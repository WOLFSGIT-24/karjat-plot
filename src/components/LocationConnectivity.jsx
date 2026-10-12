import React from 'react';

export default function LocationConnectivity() {
  const routes = [
    { destination: 'Navi Mumbai Intl. Airport (NMIA)', distance: '42 km', duration: '45 mins via Expressway' },
    { destination: 'Atal Setu (MTHL Trans-Harbour Link)', distance: '55 km', duration: '50 mins drive' },
    { destination: 'BKC Business District (Mumbai)', distance: '72 km', duration: '75 mins via MTHL' },
    { destination: 'Karjat Railway Station', distance: '12 km', duration: '15 mins smooth drive' },
    { destination: 'Lonavala Hill Station', distance: '32 km', duration: '40 mins via NH 48' },
    { destination: 'Pune Expressway Toll Plaza', distance: '45 km', duration: '40 mins' },
  ];

  return (
    <section className="w-full py-space-xl bg-surface" id="location-and-connectivity">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              Regional Infrastructure
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              Location & Connectivity
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Situated off the main Karjat-Murbad highway with double-lane tarmac access right up to the Prinalto grand entrance gates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          {/* Map Preview Card */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-xl overflow-hidden relative border border-surface-container-high shadow-sm min-h-[380px] flex flex-col justify-between p-space-lg">
            <div className="relative z-10">
              <span className="px-space-md py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider mb-2 inline-block font-semibold">
                Foothill Coordinates
              </span>
              <h3 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Village Posari, Karjat
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-md">
                Karjat-Murbad State Highway Access · Raigad District, Maharashtra 410201
              </p>
            </div>

            <div className="relative z-10 mt- space-y-2 pt-6">
              <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-semibold">
                <span className="material-symbols-outlined text-secondary">explore</span>
                GPS Coordinates: 18.9102° N, 73.3284° E
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-space-md py-space-sm rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-title-md">near_me</span>
                Open Google Maps Navigation
              </a>
            </div>

            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#012d1d_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
          </div>

          {/* Key Transit Times */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl border border-surface-container-high shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-md">
                Proximity Metrics
              </h3>
              <div className="divide-y divide-surface-container-high">
                {routes.map((route, idx) => (
                  <div key={idx} className="py-space-xs flex justify-between items-center">
                    <div>
                      <span className="font-body-sm text-body-sm text-on-surface font-semibold block">
                        {route.destination}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {route.duration}
                      </span>
                    </div>
                    <span className="font-title-md text-title-md text-secondary font-bold whitespace-nowrap pl-2">
                      {route.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
