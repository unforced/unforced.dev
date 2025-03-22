
import React from 'react';
import Button from '@/components/Button';
import SectionDivider from '@/components/SectionDivider';
import { Calendar, Mail, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <main className="overflow-hidden pt-16">
      {/* Hero Section */}
      <section className="min-h-[40vh] pt-16 relative flex items-center">
        <div className="container mx-auto px-4 pt-8 pb-12 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold tracking-tight text-sage-900 mb-6 animate-fade-in">
              Let's Connect
            </h1>
            <p className="text-xl text-sage-600 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ready to share what you're here to give? Book below—start with a free chat or dive into a session. I'll confirm, and we'll roll.
            </p>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-radial from-sage-50 to-transparent opacity-70 -z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-10"></div>
      </section>
      
      <SectionDivider />
      
      {/* Booking Options Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white rounded-xl p-8 shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border border-sage-100">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6">
                  <MessageCircle className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-sage-800 mb-4">Chat With Me</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-sage-700 font-semibold w-24">Duration:</span>
                    <span className="text-sage-600">30 Minutes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage-700 font-semibold w-24">Price:</span>
                    <span className="text-sage-600">Free</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-sage-700 font-semibold w-24">Description:</span>
                    <span className="text-sage-600">A no-pressure call to meet and explore what's possible. We'll talk about your goals and see if we're a good fit to work together.</span>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full group"
                  onClick={() => window.open('https://calendly.com/aaron-gabriel/chat', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-flow" />
                  Schedule a Free Chat
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border border-sage-100">
                <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="h-8 w-8 text-earth-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-sage-800 mb-4">Book a Session</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="text-sage-700 font-semibold w-24">Options:</span>
                    <span className="text-sage-600">Choose the right fit</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-sage-700 font-semibold w-24">Jumpstart:</span>
                    <span className="text-sage-600">2 sessions + website build ($500)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-sage-700 font-semibold w-24">1:1 Session:</span>
                    <span className="text-sage-600">1 hour of focused support ($150)</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full group"
                    onClick={() => window.open('https://calendly.com/aaron-gabriel/jumpstart', '_blank')}
                  >
                    Book The Jumpstart
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full group"
                    onClick={() => window.open('https://calendly.com/aaron-gabriel/session', '_blank')}
                  >
                    Book a 1:1 Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Payment Info Section */}
      <section className="py-16 bg-sage-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-sage-800 mb-8 text-center flowing-border pb-2 inline-block">
              Payment Information
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <p className="text-lg text-sage-600 mb-6 text-center">
                Payment is due after booking and before our session. I accept:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sage-50 rounded-lg p-6 border border-sage-100 text-center">
                  <h3 className="text-xl font-display font-semibold text-sage-800 mb-2">Venmo</h3>
                  <p className="text-sage-600">@AaronGabriel</p>
                </div>
                
                <div className="bg-sage-50 rounded-lg p-6 border border-sage-100 text-center">
                  <h3 className="text-xl font-display font-semibold text-sage-800 mb-2">PayPal</h3>
                  <p className="text-sage-600">aaron@unforced.dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Direct Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-semibold text-sage-800 mb-8 flowing-border pb-2 inline-block">
              Questions?
            </h2>
            
            <p className="text-lg text-sage-600 mb-8">
              If you have any questions that aren't answered here, feel free to reach out directly.
            </p>
            
            <a 
              href="mailto:aaron@unforced.dev" 
              className="inline-flex items-center text-lg text-sage-800 hover:text-sage-600 transition-colors"
            >
              <Mail className="h-6 w-6 mr-2" />
              aaron@unforced.dev
            </a>
          </div>
        </div>
      </section>
      
      {/* Calendly Embed */}
      <section className="pb-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-sage-800 mb-8 text-center flowing-border pb-2 inline-block">
              My Calendar
            </h2>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-soft h-[650px] border border-sage-100">
              <div className="w-full h-full flex items-center justify-center">
                {/* This is where a Calendly embed would go */}
                <p className="text-sage-600 italic">Calendly embed would appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
