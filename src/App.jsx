import { sendToWebhook } from './utils/webhook';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyInvest from './components/WhyInvest';
import PlotOptions from './components/PlotOptions';
import KarjatLifestyle from './components/KarjatLifestyle';
import LocationAdvantage from './components/LocationAdvantage';
import KeyHighlights from './components/KeyHighlights';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileFixedCTA from './components/MobileFixedCTA';
import ThankYouPage from './components/ThankYouPage';
import { EnquiryModal, ImageLightboxModal, ToastNotification } from './components/Modals';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined' && window.location.pathname.replace(/\/+$/, '') === '/thank-you') {
      return 'thank-you';
    }
    return 'home';
  });

  const [submittedLead, setSubmittedLead] = useState(() => {
    try {
      const saved = sessionStorage.getItem('prinalto_last_lead');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/+$/, '');
      if (path === '/thank-you') {
        setCurrentPage('thank-you');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleOpenBookModal = () => {
    setIsEnquiryModalOpen(true);
  };

  const handleFormSubmitSuccess = (leadData) => {
    sendToWebhook(leadData);
    setSubmittedLead(leadData);
    try {
      sessionStorage.setItem('prinalto_last_lead', JSON.stringify(leadData));
    } catch (e) {
      // ignore storage errors
    }
    setCurrentPage('thank-you');
    window.history.pushState({ page: 'thank-you' }, '', '/thank-you');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.history.pushState({ page: 'home' }, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'thank-you') {
    return (
      <>
        <ThankYouPage
          leadData={submittedLead}
          onBackToHome={handleBackToHome}
        />
        <ToastNotification toast={toast} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed pb-20 md:pb-0">
      <Header onOpenBookModal={handleOpenBookModal} />

      <main className="w-full bg-surface">
        <div className="flex flex-col w-full">
          {/* Section 1 — Hero Banner */}
          <Hero onOpenBookModal={handleOpenBookModal} />

          {/* Section 2 — Why Invest in Karjat? */}
          <WhyInvest onOpenBookModal={handleOpenBookModal} />

          {/* Section 3 — Plot Options */}
          <PlotOptions onOpenBookModal={handleOpenBookModal} />

          {/* Section 4 — The Karjat Lifestyle */}
          <KarjatLifestyle onOpenBookModal={handleOpenBookModal} />

          {/* Section 5 — Location Advantage */}
          <LocationAdvantage onOpenBookModal={handleOpenBookModal} />

          {/* Section 6 — Key Highlights */}
          <KeyHighlights onOpenBookModal={handleOpenBookModal} />

          {/* Section 7 — Final CTA */}
          <FinalCTA
            onShowToast={showToast}
            onFormSubmitSuccess={handleFormSubmitSuccess}
          />
        </div>
      </main>

      <Footer />

      {/* Mobile Only Fixed Bottom Action Bar */}
      <MobileFixedCTA onOpenBookModal={handleOpenBookModal} />

            {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${(import.meta.env.VITE_WHATSAPP_NUMBER || "").replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I am interested in Prinalto Estates Karjat Plots. Please share details.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[84px] md:bottom-8 right-4 md:right-8 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 md:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 z-40 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="transition-transform group-hover:rotate-12 duration-300"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* Interactive Overlay Dialogs */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        onShowToast={showToast}
        onFormSubmitSuccess={handleFormSubmitSuccess}
      />
      <ImageLightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
      <ToastNotification toast={toast} />
    </div>
  );
}
