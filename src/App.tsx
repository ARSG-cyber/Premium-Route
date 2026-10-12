import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ProductStory } from './components/ProductStory';
import { DeliveryJourney } from './components/DeliveryJourney';
import { BrandStatement } from './components/BrandStatement';
import { BenefitsSection } from './components/BenefitsSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';

export const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col selection:bg-[#00d49f] selection:text-black">
      
      {/* Clean Frosted Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Experience Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* Trust & Brand Social Proof */}
        <TrustSection />

        {/* 3 Editorial Product Storytelling Moments */}
        <ProductStory />

        {/* Signature Interactive Package Journey & Visual Map Experience (NO Terminal) */}
        <DeliveryJourney />

        {/* Bold Editorial Manifesto Section */}
        <BrandStatement />

        {/* Business Results & Interactive Carrier Comparison */}
        <BenefitsSection onOpenDemo={handleOpenDemo} />

        {/* Final Conversion Call to Action */}
        <FinalCTA onOpenDemo={handleOpenDemo} />
      </main>

      {/* Architectural Editorial Footer */}
      <Footer />

      {/* Interactive VIP Demo Modal */}
      <BookDemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />

    </div>
  );
};

export default App;
