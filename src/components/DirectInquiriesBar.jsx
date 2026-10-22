import { sendToWebhook } from '../utils/webhook';
import React, { useState } from 'react';

export default function DirectInquiriesBar({ onShowToast }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      onShowToast('Please enter your name and phone number for callback.', 'error');
      return;
    }
    onShowToast(`Thank you ${name}! Callback request submitted. Our investment specialist will connect shortly.`, 'success');
    setName('');
    setPhone('');
  };

  return (
    <section className="w-full bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-t border-surface-container-high">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin py-space-lg flex flex-col lg:flex-row items-center justify-between gap-space-md">
        <div className="flex flex-col sm:flex-row sm:items-center gap-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-headline-sm">nest_cam_outdoor</span>
            <div>
              <span className="font-title-md text-title-md text-on-surface block font-semibold">
                Direct Villa Plot Inquiries
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Immediate topographic appraisal and custom investment schedules
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-wrap sm:flex-nowrap items-center gap-space-sm w-full lg:w-auto">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-surface-container-lowest text-on-surface font-body-sm text-body-sm px-space-md py-space-sm rounded-lg w-full sm:w-56 focus:outline-none focus:ring-1 focus:ring-primary border border-surface-container-high"
            placeholder="Investor Full Name"
            type="text"
            required
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-surface-container-lowest text-on-surface font-body-sm text-body-sm px-space-md py-space-sm rounded-lg w-full sm:w-48 focus:outline-none focus:ring-1 focus:ring-primary border border-surface-container-high"
            placeholder="+91 Phone Number"
            type="tel"
            required
          />
          <button
            className="bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg transition-colors whitespace-nowrap w-full sm:w-auto cursor-pointer"
            type="submit"
          >
            Request Callback
          </button>
        </form>
      </div>
    </section>
  );
}
