import React, { useState } from 'react';

export default function EstateGallery({ onSelectImage }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'landscape',
      tag: 'Panoramic Sanctuary',
      title: 'General Hillside Ridge View',
      subtitle: 'Perpetual morning mist roll over terraced 2,000 sq ft - 1 Acre estate topography',
      image: '/hero.jpg',
      span: 'md:col-span-8',
      minHeight: 'min-h-[420px] lg:min-h-[500px]',
    },
    {
      id: 2,
      category: 'masterplan',
      tag: 'Master Layout',
      title: 'Collector NA & Agro Enclaves',
      subtitle: 'Pre-certified 2,000 sq.ft to 1 Acre Plot Sectoring',
      image: '/grand_manor.jpg',
      span: 'md:col-span-4',
      minHeight: 'min-h-[300px] lg:min-h-[500px]',
    },
    {
      id: 3,
      category: 'clubhouse',
      tag: 'Private Villa Pool',
      title: 'Private Pool for Every Villa',
      subtitle: 'Exclusive lap & infinity pools integrated with each General villa plot parcel',
      image: '/pool_villa.jpg',
      span: 'md:col-span-6',
      minHeight: 'min-h-[360px]',
    },
    {
      id: 4,
      category: 'orchards',
      tag: 'Agro Sanctuary',
      title: 'The Mango Grove Living Deck',
      subtitle: 'Private sundeck overlooking organic Alphonso plantations & waterfall streams',
      image: '/agro_estate.jpg',
      span: 'md:col-span-6',
      minHeight: 'min-h-[360px]',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const categories = [
    { key: 'all', label: 'All Vignettes' },
    { key: 'landscape', label: 'Landscape' },
    { key: 'masterplan', label: 'Masterplan' },
    { key: 'clubhouse', label: 'Private Pool' },
    { key: 'orchards', label: 'Orchards' },
  ];

  return (
    <section className="w-full py-space-xl bg-surface" id="estate-gallery">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              Visual Archives
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              The General Estate in Pictures
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-space-xs p-1 bg-surface-container-low rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`font-label-md text-label-md px-space-md py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.key
                    ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Visual Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className={`group relative rounded-xl overflow-hidden shadow-sm bg-surface-container cursor-pointer ${item.span} ${item.minHeight}`}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute top-space-md left-space-md">
                <span className="px-space-md py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-space-md left-space-md right-space-md flex justify-between items-end">
                <div>
                  <p className="font-headline-sm text-headline-sm text-surface-container-lowest">
                    {item.title}
                  </p>
                  <p className="font-body-sm text-body-sm text-surface-variant/80">
                    {item.subtitle}
                  </p>
                </div>
                <span className="material-symbols-outlined text-surface-container-lowest opacity-0 group-hover:opacity-100 transition-opacity">
                  fullscreen
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-space-lg">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Showing {filteredItems.length} verified photographic surveys · General Karjat Foothill Ridge
          </p>
          <button
            onClick={() => onSelectImage(galleryItems[0])}
            className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-secondary font-semibold transition-colors cursor-pointer"
            type="button"
          >
            View Complete Lookbook
            <span className="material-symbols-outlined text-title-md">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
