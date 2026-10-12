import React, { useState } from 'react';

export default function NearbyPlaces() {
  const [activeTab, setActiveTab] = useState('picnic');

  const categories = {
    picnic: {
      title: 'Picnic Hotspots',
      icon: 'waterfall_chart',
      places: [
        { name: 'Palasdari Waterfalls', detail: 'Scenic cascading monsoon fall' },
        { name: 'Bhilvale Dam', detail: 'Serene reservoir & sunset point' },
        { name: 'Morbe Dam', detail: 'Expansive water basin & photography' },
        { name: 'Kalote Waterfalls', detail: 'Lush green valley cascade' },
        { name: 'Ulhas River', detail: 'Riverfront promenade & kayaking' },
        { name: 'Bhivpuri Waterfall', detail: 'Popular monsoon trekking spot' },
        { name: 'Matheran Hill Station', detail: 'Vehicle-free eco hill retreat' },
      ],
    },
    leisure: {
      title: 'Leisure & Dining',
      icon: 'restaurant',
      places: [
        { name: 'Saltt Restaurant & Bar', detail: 'Gourmet al-fresco dining' },
        { name: 'Coco Café', detail: 'Artisanal coffee & bakery' },
        { name: 'Namak Restaurant', detail: 'Authentic Indian regional cuisine' },
        { name: 'Q Lounge', detail: 'Elegantly styled cocktail lounge' },
        { name: 'Palms at Radisson Blu', detail: '5-Star luxury resort dining' },
      ],
    },
    adventure: {
      title: 'Adventure & Trekking',
      icon: 'hiking',
      places: [
        { name: 'Songiri Fort', detail: 'Historic ridge trek with valley views' },
        { name: 'Bekare Waterfall Rappelling', detail: 'Thrill-seeking waterfall rappelling' },
        { name: 'Sondai Fort', detail: 'Panoramic hilltop fortress' },
        { name: 'Kalote-Mokashi Hill Range', detail: 'Endless hiking trails' },
        { name: 'Imagicaa Theme Park', detail: 'World-class amusement & water park' },
        { name: 'River Rafting on Pej', detail: 'Whitewater river adventure' },
        { name: 'Garbett Plateau', detail: 'Famous green plateau monsoon trail' },
        { name: 'Peb Fort (Vikatgad)', detail: 'Ancient cave & ridge trek' },
        { name: 'Karnala Bird Sanctuary', detail: 'Protected forest reserve & sanctuary' },
      ],
    },
    wonders: {
      title: 'One-of-a-Kind Wonders',
      icon: 'explore',
      places: [
        { name: 'N.D. Film Studios', detail: 'Iconic Bollywood film sets & tours' },
        { name: 'Monteria Village', detail: 'Cultural agro-tourism heritage village' },
        { name: 'Bhairoba Caves', detail: 'Ancient rock-cut shrine caves' },
        { name: 'Kondana Buddhist Caves', detail: '1st century BC rock architecture' },
      ],
    },
    essentials: {
      title: 'Essentials & Healthcare',
      icon: 'local_hospital',
      places: [
        { name: 'Sukham Hospital', detail: 'Multi-specialty healthcare center' },
        { name: 'Phadke Hospital', detail: 'Emergency medical care facility' },
        { name: 'Rushabh Supermarket', detail: 'Daily provisions & grocery hub' },
        { name: 'D-Mart Karjat', detail: 'Hypermarket for household essentials' },
      ],
    },
  };

  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="nearby-places">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              Curated Neighborhood
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              Nearby Attractions & Destinations
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Surrounded by waterfalls, fort treks, fine dining lounges, theme parks, and essential medical care.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-space-xs p-1.5 bg-surface-container-lowest rounded-xl shadow-sm mb-space-lg overflow-x-auto max-w-full">
          {Object.keys(categories).map((key) => {
            const cat = categories[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 font-label-md text-label-md px-space-md py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
                type="button"
              >
                <span className="material-symbols-outlined text-title-md">{cat.icon}</span>
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {categories[activeTab].places.map((place, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-sm hover:shadow-md transition-all flex items-start gap-space-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-title-md">place</span>
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-primary font-semibold">
                  {place.name}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {place.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
