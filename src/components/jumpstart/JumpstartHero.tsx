
import React from 'react';
import Button from '@/components/Button';
import { Calendar } from 'lucide-react';

const JumpstartHero = () => {
  return (
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
            <Button variant="primary" size="lg" className="group" onClick={() => window.open('https://cal.com/unforced/jumpstart-1st-session', '_blank')}>
              <Calendar className="mr-2 h-5 w-5 group-hover:animate-flow" />
              Book Your Jumpstart
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-radial from-water-50 to-transparent opacity-60 -z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent -z-10"></div>
    </section>
  );
};

export default JumpstartHero;
