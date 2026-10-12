import React, { useState } from 'react';
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
import { BrochureModal, DossierModal, EnquiryModal, ImageLightboxModal, ToastNotification } from './components/Modals';

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedDossierPlan, setSelectedDossierPlan] = useState(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleOpenBookModal = () => {
    setIsEnquiryModalOpen(true);
  };

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
          <FinalCTA onShowToast={showToast} />
        </div>
      </main>

      <Footer />

      {/* Mobile Only Fixed Bottom Action Bar */}
      <MobileFixedCTA onOpenBookModal={handleOpenBookModal} />

      {/* Interactive Overlay Dialogs */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        onShowToast={showToast}
      />
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onShowToast={showToast}
      />
      <DossierModal
        isOpen={!!selectedDossierPlan}
        plan={selectedDossierPlan}
        onClose={() => setSelectedDossierPlan(null)}
        onShowToast={showToast}
      />
      <ImageLightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
      <ToastNotification toast={toast} />
    </div>
  );
}


