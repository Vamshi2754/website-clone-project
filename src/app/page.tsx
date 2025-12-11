"use client";

import { useState } from 'react';
import Navigation from '@/components/sections/navigation';
import SideCtaCard from '@/components/sections/side-cta-card';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProductsSection from '@/components/sections/products-section';
import ScheduleSection from '@/components/sections/schedule-section';
import TestimonialSection from '@/components/sections/testimonial-section';
import CtaSection from '@/components/sections/cta-section';
import FooterSection from '@/components/sections/footer-section';
import FloatingCtaButton from '@/components/ui/floating-cta-button';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile overlay */}
      <div 
        className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile Menu Button - Only visible when sidebar is closed */}
      <button
        onClick={() => setSidebarOpen(true)}
        className={`fixed top-4 left-4 z-50 lg:hidden bg-primary text-primary-foreground p-3 rounded-xl shadow-lg transition-all duration-300 ${
          sidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Open menu"
      >
        <div className="flex flex-col gap-1">
          <span className="h-[2px] w-5 bg-current"></span>
          <span className="h-[2px] w-5 bg-current"></span>
          <span className="h-[2px] w-5 bg-current"></span>
        </div>
      </button>

      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 xl:gap-8 p-0 lg:p-8 overflow-x-hidden">
        {/* Fixed Sidebar */}
        <aside className={`sidebar-container ${sidebarOpen ? 'open' : ''} p-3 sm:p-4 lg:p-0`}>
          <div className="flex flex-col gap-6 md:gap-8">
            <Navigation onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <div className="hidden lg:block">
              <SideCtaCard />
            </div>
          </div>
        </aside>

        {/* Scrollable Content Panel */}
        <main className="content-panel p-3 sm:p-4 lg:p-0">
          <div className="flex flex-col gap-12 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24">
            <HeroSection />
            <AboutSection />
            <ProductsSection />
            <ScheduleSection />
            <TestimonialSection />
            <CtaSection />
            <FooterSection />
          </div>
        </main>
      </div>

      <FloatingCtaButton />
    </div>
  );
}