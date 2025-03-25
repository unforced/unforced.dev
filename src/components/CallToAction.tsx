
import React from 'react';
import Button from './Button';
import { Calendar, MessageCircle } from 'lucide-react';
import SectionDivider from './SectionDivider';

const CallToAction = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <SectionDivider className="-top-1" />
      
      <div className="relative z-10 container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-sage-800 mb-4 text-center">
            Ready to share what you're here to give?
          </h2>
          
          <p className="text-lg text-sage-700 mb-8 text-center max-w-2xl mx-auto">
            Start with a free chat or dive into a session. I'll confirm, and we'll roll.
            Payment is easy via Venmo or Paypal.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto group"
              onClick={() => window.open('https://cal.com/unforced/30min', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-flow" />
              Chat With Me (Free)
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto group"
              onClick={() => window.open('https://cal.com/unforced/jumpstart-1st-session', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:animate-flow" />
              Book a Session
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-sage-100 to-water-100 opacity-50 -z-10"></div>
    </section>
  );
};

export default CallToAction;
