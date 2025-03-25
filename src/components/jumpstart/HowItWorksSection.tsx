
import React from 'react';
import { Check } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-sage-800 mb-12 text-center flowing-border pb-2 inline-block">
            How It Works
          </h2>
          
          <div className="space-y-16 relative">
            {/* Progress Line */}
            <div className="absolute left-[39px] top-[60px] bottom-[60px] w-0.5 bg-sage-200 hidden md:block"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center z-10">
                <span className="text-2xl font-display font-semibold text-sage-700">01</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-display font-semibold text-sage-800 mb-4">We Talk</h3>
                <p className="text-lg text-sage-600 mb-6">A 1-hour call where I ask, you share, and we uncover what you're here to give. You'll walk away with fresh clarity and a deep feeling of being understood.</p>
                <div className="bg-white rounded-xl p-6 shadow-soft border border-sage-100">
                  <h4 className="text-lg font-semibold text-sage-800 mb-3">What to expect:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sage-500 mr-2 mt-0.5" />
                      <span>Guided conversation about your work and vision</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sage-500 mr-2 mt-0.5" />
                      <span>Exploration of your audience and what they need</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sage-500 mr-2 mt-0.5" />
                      <span>Discussion about aesthetic preferences and examples</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-sage-500 mr-2 mt-0.5" />
                      <span>Full transcript of our talk for your reference</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center z-10">
                <span className="text-2xl font-display font-semibold text-earth-700">02</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-display font-semibold text-sage-800 mb-4">I Build</h3>
                <p className="text-lg text-sage-600 mb-6">Between sessions, I create a website that fits you, a detailed doc of our talk, and a custom how-to guide—using AI and my tech skills to make it happen fast.</p>
                <div className="bg-white rounded-xl p-6 shadow-soft border border-earth-100">
                  <h4 className="text-lg font-semibold text-sage-800 mb-3">What I'll create:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-500 mr-2 mt-0.5" />
                      <span>A complete website that feels like you</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-500 mr-2 mt-0.5" />
                      <span>A document capturing your voice and vision</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-500 mr-2 mt-0.5" />
                      <span>Custom tutorial guide for your specific site</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-earth-500 mr-2 mt-0.5" />
                      <span>Sorted out technical details (hosting, etc...)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-20 h-20 bg-water-100 rounded-full flex items-center justify-center z-10">
                <span className="text-2xl font-display font-semibold text-water-700">03</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-display font-semibold text-sage-800 mb-4">You Learn</h3>
                <p className="text-lg text-sage-600 mb-6">
                  In our second 1-hour call, we refine the site together, and I show you how to tweak it—or anything else—yourself. You'll walk away ready to roll.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-soft border border-water-100">
                  <h4 className="text-lg font-semibold text-sage-800 mb-3">What you'll gain:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-water-500 mr-2 mt-0.5" />
                      <span>Confidence in making your own updates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-water-500 mr-2 mt-0.5" />
                      <span>Hands-on practice with your actual site</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-water-500 mr-2 mt-0.5" />
                      <span>Resource materials to reference later</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-water-500 mr-2 mt-0.5" />
                      <span>Complete recording of our tutorial session</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
