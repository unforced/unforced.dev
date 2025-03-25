
import React from 'react';
import SectionDivider from '@/components/SectionDivider';
import CallToAction from '@/components/CallToAction';
import JumpstartHero from '@/components/jumpstart/JumpstartHero';
import HowItWorksSection from '@/components/jumpstart/HowItWorksSection';
import PricingSection from '@/components/jumpstart/PricingSection';
import FaqSection from '@/components/jumpstart/FaqSection';

const JumpstartPage = () => {
  return (
    <main className="overflow-hidden pt-16">
      {/* Hero Section */}
      <JumpstartHero />
      
      <SectionDivider />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* FAQ Section */}
      <FaqSection />
      
      {/* CTA Section */}
      <CallToAction />
    </main>
  );
};

export default JumpstartPage;
