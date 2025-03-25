
import React from 'react';
import Button from '@/components/Button';
import { Calendar, Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-20 bg-sage-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-sage-600 px-6 py-12 text-center">
              <h2 className="text-3xl font-display font-semibold text-white mb-4">The Jumpstart Package</h2>
              <p className="text-sage-100 text-lg max-w-xl mx-auto">
                Everything you need to get started with confidence
              </p>
            </div>
            
            <div className="px-6 py-12 md:flex justify-between items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-display font-semibold text-sage-800 mb-6">What You Get:</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sage-500 mr-3 mt-0.5" />
                    <div>
                      <span className="font-semibold text-sage-800">A website you love</span>
                      <p className="text-sage-600 mt-1">Professional, beautiful, and authentically you</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sage-500 mr-3 mt-0.5" />
                    <div>
                      <span className="font-semibold text-sage-800">Rich text document</span>
                      <p className="text-sage-600 mt-1">Your voice captured for future content creation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sage-500 mr-3 mt-0.5" />
                    <div>
                      <span className="font-semibold text-sage-800">Custom guide</span>
                      <p className="text-sage-600 mt-1">Tailored instructions for your specific site</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sage-500 mr-3 mt-0.5" />
                    <div>
                      <span className="font-semibold text-sage-800">Call transcripts</span>
                      <p className="text-sage-600 mt-1">Reference both sessions whenever needed</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sage-500 mr-3 mt-0.5" />
                    <div>
                      <span className="font-semibold text-sage-800">Technical setup</span>
                      <p className="text-sage-600 mt-1">Help you set up free website hosting & configure your domain</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/3 text-center">
                <div className="bg-sage-50 rounded-xl p-6 border border-sage-100">
                  <span className="text-3xl font-display font-bold text-sage-800">$500</span>
                  <p className="text-sage-600 mb-4">for the complete package</p>
                  <p className="text-sm text-sage-500 mb-6">2 sessions + build time</p>
                  <Button variant="primary" size="lg" className="w-full group" onClick={() => window.open('https://cal.com/unforced/jumpstart-1st-session', '_blank')}>
                    <Calendar className="mr-2 h-5 w-5 group-hover:animate-flow" />
                    Book Your Jumpstart
                  </Button>
                  <p className="text-sm text-sage-500 mt-4">
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
