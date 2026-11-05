import React from 'react';

export default function PaymentOptions({ onOpenBookModal }) {
  const options = [
    {
      title: 'Construction Linked Plan (CLP)',
      tag: 'Milestone Flexibility',
      desc: 'Pay in structured installments tied directly to site infrastructure, road tarmac, and demarcation milestones.',
      perks: ['Low upfront commitment', 'Milestone-verified payments', 'Complete transparency'],
      icon: 'account_balance',
    },
    {
      title: 'Subvention Scheme',
      tag: 'No EMI Till Possession',
      desc: 'Bank-subsidized payment plan where developer covers interest until plot demarcation and possession handover.',
      perks: ['Zero EMI burden during construction', 'Bank approved projects', 'Maximum financial leverage'],
      icon: 'savings',
    },
    {
      title: 'On-Spot Booking Offer',
      tag: 'Attractive Pricing Perks',
      desc: 'Exclusive price advantages, registry fee waivers, and complimentary private pool upgrades for spot site visit bookings.',
      perks: ['Up to 5% instant price waiver', 'Free private pool customization', 'Priority plot selection'],
      icon: 'local_offer',
    },
  ];

  return (
    <section className="w-full py-space-xl bg-surface" id="payment-options">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs font-semibold">
              Flexible Investment Options
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-primary tracking-tight">
              Payment Options & Attractive Offers
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Select from custom financial plans starting from ₹75 lacs for 1,500 sq. ft. to 1 acre villa plot parcels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="bg-surface-container-low hover:bg-surface-container-lowest p-space-lg rounded-2xl border border-surface-container-high shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-headline-sm">{opt.icon}</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold block mb-1">
                  {opt.tag}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                  {opt.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  {opt.desc}
                </p>

                <ul className="space-y-2 border-t border-surface-container-high pt-space-sm mb-space-md">
                  {opt.perks.map((perk, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-title-md">check_circle</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenBookModal}
                className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-space-sm rounded-lg font-semibold transition-colors cursor-pointer"
                type="button"
              >
                Get Festive Offer Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
