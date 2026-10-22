import React from 'react';

export default function ThankYouPage({ leadData, onBackToHome }) {
  const referenceId = React.useMemo(() => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    return `PRN-KRJ-${randomNum}`;
  }, []);

  const currentDate = React.useMemo(() => {
    return new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#141b12] text-white flex flex-col justify-between selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Top Header */}
      <header className="w-full bg-black/60 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 py-4 px-margin-mobile lg:px-margin">
        <div className="max-w-[1380px] mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-3 cursor-pointer group bg-transparent border-none p-0"
            type="button"
          >
            <img
              src="/logo.svg"
              alt="Prinalto Estates Logo"
              className="h-9 sm:h-10 w-auto object-contain filter brightness-0 invert transition-opacity group-hover:opacity-90"
            />
          </button>

          <button
            onClick={onBackToHome}
            type="button"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm sm:text-base">arrow_back</span>
            <span>Back to Homepage</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-12 sm:py-16 px-4">
        {/* Subtle Ambient Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="/hero.jpg"
            alt="Karjat Landscape"
            className="w-full h-full object-cover scale-105 filter blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#141b12] via-[#141b12]/80 to-[#141b12]"></div>
        </div>

        <div className="relative z-10 max-w-3xl w-full mx-auto text-center space-y-8">
          
          {/* Animated Success Badge */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#557A46]/20 border border-[#7aa066]/40 flex items-center justify-center animate-pulse">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#557A46] text-white flex items-center justify-center shadow-[0_0_35px_rgba(122,160,102,0.6)]">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl">check</span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[#a0c49d] text-xs font-semibold uppercase tracking-widest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#7aa066] animate-ping"></span>
              <span>Site Visit Request Registered</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
              Thank You for Your Interest
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed font-light">
              Your request for <strong className="text-white font-medium">Prinalto Estates — Karjat Villa Plots</strong> has been successfully received.
            </p>
          </div>

          {/* Lead Summary Card (if provided) */}
          {leadData && (leadData.name || leadData.phone || leadData.email) && (
            <div className="bg-[#1e271a]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-6 text-left shadow-2xl max-w-xl mx-auto">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                  Inquiry Summary
                </span>
                <span className="text-xs font-mono text-[#a0c49d] bg-[#557A46]/20 px-2.5 py-1 rounded-md border border-[#7aa066]/30">
                  Ref: {referenceId}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {leadData.name && (
                  <div>
                    <span className="text-xs text-neutral-400 block">Full Name</span>
                    <span className="font-medium text-white text-base">{leadData.name}</span>
                  </div>
                )}
                {leadData.phone && (
                  <div>
                    <span className="text-xs text-neutral-400 block">Phone Number</span>
                    <span className="font-medium text-white text-base">+91 {leadData.phone}</span>
                  </div>
                )}
                {leadData.email && (
                  <div className="sm:col-span-2">
                    <span className="text-xs text-neutral-400 block">Email Address</span>
                    <span className="font-medium text-white text-base break-all">{leadData.email}</span>
                  </div>
                )}
                <div>
                  <span className="text-xs text-neutral-400 block">Date Registered</span>
                  <span className="font-medium text-white">{currentDate}</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">Current Status</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Dispatched to Senior Advisory Desk
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 3 Step What Happens Next */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-left shadow-xl max-w-2xl mx-auto">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7aa066]">schedule</span>
              <span>What Happens Next?</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#557A46] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Executive Consultation</h3>
                  <p className="text-neutral-300 text-sm mt-0.5 leading-relaxed">
                    Our dedicated Karjat land specialist will connect with you via call / WhatsApp within 2 business hours to share tailored plot maps and pricing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#557A46] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Title &amp; Sanction Documentation</h3>
                  <p className="text-neutral-300 text-sm mt-0.5 leading-relaxed">
                    We will furnish complete RERA-sanctioned layout plans, 7/12 extract verification, and villa architectural guidelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#557A46] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Chauffeured Site Tour Scheduling</h3>
                  <p className="text-neutral-300 text-sm mt-0.5 leading-relaxed">
                    Choose your preferred weekend slot for a private site tour of the foothill estate with on-site hospitality and scenic viewing points.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onBackToHome}
              type="button"
              className="inline-flex items-center justify-center gap-2 bg-[#557A46] hover:bg-[#3b5730] text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-lg">home</span>
              <span>Return to Homepage</span>
            </button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black/60 border-t border-white/10 py-6 text-center text-neutral-400 text-xs px-4">
        <div className="max-w-[1380px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2026 Prinalto Estates. All rights reserved. MahaRERA: P52000049812</span>
          <button
            onClick={onBackToHome}
            className="text-[#a0c49d] hover:text-white transition-colors cursor-pointer bg-transparent border-none"
          >
            Explore Karjat Plots
          </button>
        </div>
      </footer>
    </div>
  );
}
