import { sendToWebhook } from '../utils/webhook';
import React, { useState } from 'react';

export function EnquiryModal({ isOpen, onClose, onShowToast, onFormSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleNameChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData((prev) => ({ ...prev, name: val }));
    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: val }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleEmailChange = (e) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
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

    const leadInfo = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
    };
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
    onClose();

    if (onFormSubmitSuccess) {
      onFormSubmitSuccess(leadInfo);
    } else {
      sendToWebhook(leadInfo);
      if (onShowToast) {
        onShowToast(`Thank you ${leadInfo.name}! Your site visit reservation request for Karjat plots has been booked. Confirmation sent to ${leadInfo.email}.`, 'success');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface-container-lowest/95 backdrop-blur-xl rounded-2xl max-w-lg w-full p-space-lg lg:p-space-xl shadow-2xl relative border border-surface-container-high text-on-surface">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-title-lg">close</span>
        </button>

        <div className="mb-space-md text-left">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
            Enquire Now
          </span>
          <h3 className="font-title-lg text-title-lg text-primary font-bold mt-1">
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
  );
}

export function ImageLightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95 backdrop-blur-md">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-surface-bright hover:text-secondary-fixed transition-colors cursor-pointer z-10"
      >
        <span className="material-symbols-outlined text-headline-lg">close</span>
      </button>

      <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
        <img
          alt={item.title}
          className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
          src={item.image}
        />
        <div className="mt-4 text-center text-surface-bright">
          <span className="px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-semibold">
            {item.tag}
          </span>
          <h3 className="font-headline-md text-headline-md text-surface-container-lowest mt-2">
            {item.title}
          </h3>
          <p className="font-body-sm text-body-sm text-surface-variant/80 max-w-xl mx-auto mt-1">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ToastNotification({ toast }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-primary text-on-primary px-5 py-4 rounded-xl shadow-2xl border border-secondary-fixed/30 flex items-start gap-3 animate-slide-up">
      <span className={`material-symbols-outlined text-title-lg ${toast.type === 'error' ? 'text-error-container' : 'text-secondary-fixed'}`}>
        {toast.type === 'error' ? 'error' : 'check_circle'}
      </span>
      <p className="font-body-sm text-body-sm text-surface-container-lowest leading-relaxed">
        {toast.message}
      </p>
    </div>
  );
}
