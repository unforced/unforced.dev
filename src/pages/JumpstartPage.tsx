import React from 'react';
import Button from '@/components/Button';
import SectionDivider from '@/components/SectionDivider';
import CallToAction from '@/components/CallToAction';
import { Calendar, Check, ChevronRight, MessageCircle, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
const JumpstartPage = () => {
  return <main className="overflow-hidden pt-16">
      {/* Hero Section */}
      <section className="min-h-[70vh] pt-16 relative flex items-center">
        <div className="container mx-auto px-4 pt-8 pb-24 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold tracking-tight text-sage-900 mb-6 animate-fade-in">
              The Jumpstart
            </h1>
            <p className="text-xl md:text-2xl text-sage-700 mb-8 max-w-3xl mx-auto animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              From You to the World in Two Sessions
            </p>
            <p className="text-lg text-sage-600 mb-10 max-w-3xl mx-auto animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              This is how we begin. In two sessions, I'll listen deeply, build you a website that feels like you, and set you up with tools to keep going. It's about getting you—your heart, your work—and helping it flow out naturally.
            </p>
            <div className="animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <Button variant="primary" size="lg" className="group" onClick={() => window.open('https://calendly.com/aaron-gabriel/jumpstart', '_blank')}>
                <Calendar className="mr-2 h-5 w-5 group-hover:animate-flow" />
                Book Your Jumpstart
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-radial from-water-50 to-transparent opacity-60 -z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent -z-10"></div>
      </section>
      
      <SectionDivider />
      
      {/* How It Works Section */}
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
      
      {/* Pricing Section */}
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
                    <Button variant="primary" size="lg" className="w-full group" onClick={() => window.open('https://calendly.com/aaron-gabriel/jumpstart', '_blank')}>
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
      
      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-sage-800 mb-12 text-center flowing-border pb-2 inline-block">
              Common Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-sage-100">
                <h3 className="text-xl font-display font-semibold text-sage-800 mb-2">How quickly will my website be ready?</h3>
                <p className="text-sage-600">
                  After our first session, I typically have your site ready within 3-5 days. The entire process, from first call to completion, usually takes 1-2 weeks, depending on our scheduling.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-sage-100">
                <h3 className="text-xl font-display font-semibold text-sage-800 mb-2">What if I need changes after our second session?</h3>
                <p className="text-sage-600">
                  You'll have the skills to make many changes yourself! For more complex updates or if you need support, we can schedule additional 1:1 sessions at my hourly rate, or you can use the guide I provide to make changes on your own.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-sage-100">
                <h3 className="text-xl font-display font-semibold text-sage-800 mb-2">Do I need any technical skills for this to work?</h3>
                <p className="text-sage-600">
                  Not at all! The process is designed for non-technical folks. I create tools and guides specific to your needs, and our second session is hands-on so you gain confidence. Many clients are surprised by how comfortable they feel making updates.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-sage-100">
                <h3 className="text-xl font-display font-semibold text-sage-800 mb-2">What about hosting costs and domain names?</h3>
                <p className="text-sage-600">The $500 package includes my time and expertise. You'll need to bring your own domain name, but I will teach you how to set up your own hosting for free. I'll guide you through all of this during our process, keeping costs minimal while ensuring quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction />
    </main>;
};
export default JumpstartPage;