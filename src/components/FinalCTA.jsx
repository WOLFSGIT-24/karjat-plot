import React, { useState } from 'react';

export default function FinalCTA({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  // Real-time name handler: allow ONLY letters and spaces
  const handleNameChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData((prev) => ({ ...prev, name: val }));
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: '' }));
    }
  };

  // Real-time phone handler: allow ONLY digits 0-9 up to 10 digits max
  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: val }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleEmailChange = (e) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    const cleanName = formData.name.trim();
    if (!cleanName) {
      newErrors.name = 'Full name is required.';
    } else if (cleanName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const cleanEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(cleanEmail)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (digitsOnly.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      onShowToast('Please fix the validation errors before submitting.', 'error');
      return;
    }

    onShowToast(`Thank you ${formData.name.trim()}! Your site visit reservation request for Karjat plots has been booked. Confirmation sent to ${formData.email}.`, 'success');
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
  };

  return (
    <section className="relative w-full py-space-xl text-on-primary overflow-hidden min-h-[600px] flex items-center" id="book-tour">
      {/* Background Image without heavy green overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Find the Right Plot in Karjat"
          className="w-full h-full object-cover scale-105"
          src="/agro_estate.jpg"
        />
        {/* Soft vignette gradient for text contrast only */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1380px] w-full mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          
          {/* Left Column: Heading, Copy, Badges */}
          <div className="lg:col-span-6 space-y-space-md text-left bg-black/30 p-space-lg rounded-2xl backdrop-blur-md border border-white/10">
            <span className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-white/20 backdrop-blur-md text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest font-semibold border border-white/20">
              Final CTA
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-white tracking-tight font-semibold leading-tight drop-shadow-md">
              Find the Right Plot in Karjat
            </h2>
            <p className="font-body-lg text-body-lg text-white/90 max-w-xl font-light leading-relaxed">
              Explore multiple plot opportunities in Karjat and find an option that matches your investment, weekend-home or private-villa requirements.
            </p>
            <p className="font-body-md text-body-md text-white/80 max-w-xl leading-relaxed">
              Schedule a site visit to explore available options, understand pricing and compare suitable plot opportunities.
            </p>

            {/* Key badges */}
            <div className="pt-space-sm flex flex-wrap items-center gap-space-md text-white font-medium">
              <div className="flex items-center gap-space-xs bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                <span className="material-symbols-outlined text-secondary-fixed text-title-md">place</span>
                <span className="font-label-md text-label-md">Karjat</span>
              </div>
              <div className="flex items-center gap-space-xs bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                <span className="material-symbols-outlined text-secondary-fixed text-title-md">square_foot</span>
                <span className="font-label-md text-label-md">Plot sizes from 2,000 sq. ft. to 1 Acre</span>
              </div>
              <div className="flex items-center gap-space-xs bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                <span className="material-symbols-outlined text-secondary-fixed text-title-md">payments</span>
                <span className="font-label-md text-label-md">Starting from ₹1 Cr+</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Site Visit Form */}
          <div className="lg:col-span-6 flex justify-end">
            <div className="w-full max-w-lg bg-surface-container-lowest/95 backdrop-blur-xl p-space-lg lg:p-space-xl rounded-2xl shadow-2xl border border-white/40 text-on-surface">
              <div className="mb-space-md text-left">
                <h3 className="font-title-lg text-title-lg text-primary font-bold">
                  Book Your Site Visit
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Schedule a private visit to explore available plot options and understand pricing.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-space-md text-left" noValidate>
                {/* Name Field */}
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
                    Full Name
                  </label>
                  <input
                    value={formData.name}
                    onChange={handleNameChange}
                    className={`w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 border transition-all ${
                      errors.name ? 'border-error ring-1 ring-error bg-error-container/20' : 'border-surface-container-high focus:ring-primary'
                    }`}
                    placeholder="Enter your full name"
                    type="text"
                    required
                  />
                  {errors.name && (
                    <span className="text-xs text-error mt-1 font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">error</span>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
                    Email Address
                  </label>
                  <input
                    value={formData.email}
                    onChange={handleEmailChange}
                    className={`w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 border transition-all ${
                      errors.email ? 'border-error ring-1 ring-error bg-error-container/20' : 'border-surface-container-high focus:ring-primary'
                    }`}
                    placeholder="Enter your email address"
                    type="email"
                    required
                  />
                  {errors.email && (
                    <span className="text-xs text-error mt-1 font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">error</span>
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone Number Field */}
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-1 font-semibold">
                    Phone Number
                  </label>
                  <input
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    maxLength={10}
                    className={`w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 border transition-all ${
                      errors.phone ? 'border-error ring-1 ring-error bg-error-container/20' : 'border-surface-container-high focus:ring-primary'
                    }`}
                    placeholder="Enter 10-digit phone number"
                    type="tel"
                    required
                  />
                  {errors.phone && (
                    <span className="text-xs text-error mt-1 font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">error</span>
                      {errors.phone}
                    </span>
                  )}
                </div>

                <button
                  className="w-full bg-[#557A46] hover:bg-[#3b5730] text-white font-label-lg text-label-lg py-space-md rounded-lg font-bold shadow-lg transition-all duration-300 cursor-pointer text-center"
                  type="submit"
                >
                  Book Your Site Visit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
