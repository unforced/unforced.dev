
import React from 'react';
import SectionDivider from '@/components/SectionDivider';
import CallToAction from '@/components/CallToAction';
import HeroSection from '@/components/home/HeroSection';
import QuickPitchSection from '@/components/home/QuickPitchSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quick Pitch Section */}
      <QuickPitchSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CallToAction />
    </main>
  );
};

export default HomePage;
