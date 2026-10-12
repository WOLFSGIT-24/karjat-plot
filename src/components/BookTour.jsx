import React, { useState } from 'react';

export default function BookTour({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  // Real-time name handler: block any numbers from being typed
  const handleNameChange = (e) => {
    const val = e.target.value;
    // Allow only alphabets, spaces, dots, hyphens, and apostrophes
    const filtered = val.replace(/[0-9]/g, '');
    setFormData((prev) => ({ ...prev, name: filtered }));
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: '' }));
    }
  };

  // Real-time phone handler: block any alphabets/letters from being typed
  const handlePhoneChange = (e) => {
    const val = e.target.value;
    // Allow only numbers, plus sign, spaces, and hyphens
    const filtered = val.replace(/[^0-9+\s-]/g, '');
    setFormData((prev) => ({ ...prev, phone: filtered }));
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

    // Name validation
    const cleanName = formData.name.trim();
    if (!cleanName) {
      newErrors.name = 'Full name is required.';
    } else if (cleanName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    } else if (/\d/.test(cleanName)) {
      newErrors.name = 'Name cannot contain numbers.';
    }

    // Email validation
    const cleanEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(cleanEmail)) {
      newErrors.email = 'Please enter a valid email address (e.g. user@domain.com).';
    }

    // Phone validation
    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (digitsOnly.length < 10) {
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

    onShowToast(`Thank you ${formData.name.trim()}! Your site inspection request has been scheduled. Confirmation sent to ${formData.email}.`, 'success');
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
  };

  return (
    <section className="relative w-full py-space-xl bg-primary text-on-primary overflow-hidden min-h-[600px] flex items-center" id="book-tour">
      {/* Background Image with Light/Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Karjat Foothills Estate"
          className="w-full h-full object-cover scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsygrpDg0lQxAx4gBxSEInzZNlAPmZNzz9s12Hkl2jeWSTA3P8STRBr-nyFtU-iTjwDbKpne-tcpHZXA3Nsu4WfHSK0JhimpRumQSeo5gt5cWjKJy1HwNawX0JG1LQyVPaEf3wZIOEtxNcOLK5gnrfGH8PeRt-EQpTIaQECZGMEanGck_0eIIHbfDBznLR2V7rmcoXzyF_ucPWfSECdeI1zRP4xp_rTVCMV2a1Z_z0-XNGnbKoezG9"
        />
        {/* Subtle, reduced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30"></div>
      </div>

      <div className="relative z-10 max-w-[1380px] w-full mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          
          {/* Left Column: Heading, Context, Badges */}
          <div className="lg:col-span-6 space-y-space-md text-left">
            <span className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest font-semibold border border-white/20">
              Private Client Desk & Site Visits
            </span>
            <h2 className="font-display-md text-display-md-mobile lg:text-display-md text-surface-container-lowest tracking-tight font-semibold leading-tight">
              Ready to Experience Your Future Estate?
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-highest/90 max-w-xl font-light">
              Complimentary chauffeur-driven SUV site inspections departing daily from South Mumbai, BKC, Navi Mumbai, and Pune.
            </p>

            {/* Trust Badges */}
            <div className="pt-space-sm flex flex-wrap items-center gap-space-md text-surface-bright font-medium">
              <div className="flex items-center gap-space-xs bg-surface-container-lowest/15 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="material-symbols-outlined text-secondary-fixed text-title-md">verified</span>
                <span className="font-label-md text-label-md">Zero Brokerage</span>
              </div>
              <div className="flex items-center gap-space-xs bg-surface-container-lowest/15 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="material-symbols-outlined text-secondary-fixed text-title-md">gavel</span>
                <span className="font-label-md text-label-md">Collector NA Title</span>
              </div>
              <div className="flex items-center gap-space-xs bg-surface-container-lowest/15 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="material-symbols-outlined text-secondary-fixed text-title-md">key</span>
                <span className="font-label-md text-label-md">Immediate Possession</span>
              </div>
            </div>

            <div className="pt-space-xs flex items-center gap-space-md text-surface-variant/90 font-medium text-body-sm">
              <a
                className="inline-flex items-center gap-space-xs text-secondary-fixed hover:text-surface-bright transition-colors uppercase tracking-wider font-semibold"
                href="https://wa.me/912248901200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-title-md">chat</span>
                WhatsApp Dispatch
              </a>
              <span className="text-surface-variant/40">|</span>
              <span>Advisory Desk: +91 22 4890 1200</span>
            </div>
          </div>

          {/* Right Column: Clean Form Container */}
          <div className="lg:col-span-6 flex justify-end">
            <div className="w-full max-w-lg bg-surface-container-lowest/90 backdrop-blur-xl p-space-lg lg:p-space-xl rounded-2xl shadow-2xl border border-white/40 text-on-surface">
              <div className="mb-space-md text-left">
                <h3 className="font-title-lg text-title-lg text-primary font-bold">
                  Schedule Private Site Inspection
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Fill in your details below and our client desk will coordinate your pick-up.
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
                    placeholder="e.g. Vikramaditya Shah"
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
                    placeholder="vikram@example.com"
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
                    className={`w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 border transition-all ${
                      errors.phone ? 'border-error ring-1 ring-error bg-error-container/20' : 'border-surface-container-high focus:ring-primary'
                    }`}
                    placeholder="+91 98200 00000"
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
                  className="w-full bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-lg text-label-lg py-space-md rounded-lg font-bold shadow-lg transition-all duration-300 cursor-pointer text-center"
                  type="submit"
                >
                  Reserve Site Visit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
