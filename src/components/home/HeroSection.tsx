
import React from 'react';
import Button from '@/components/Button';
import { MessageCircle, Calendar } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="min-h-screen pt-16 relative flex items-center">
      <div className="container mx-auto px-4 pt-16 pb-24 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${isMobile ? 'order-1' : 'order-2 md:order-1'} animate-fade-in`}>
            <span className="px-3 py-1 text-sm bg-sage-100 text-sage-800 rounded-full inline-block mb-6 animate-slide-in opacity-0" style={{
              animationDelay: '0.3s',
              animationFillMode: 'forwards'
            }}>
              Unforced Development
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold tracking-tight text-sage-900 mb-6 flowing-border pb-2">
              Where Your Offerings Find Their Way
            </h1>
            
            <p className="text-lg md:text-xl text-sage-700 mb-8 max-w-xl animate-slide-in opacity-0" style={{
              animationDelay: '0.6s',
              animationFillMode: 'forwards'
            }}>
              Simple steps to share what you're here to give.
            </p>
            
            <p className="text-lg text-sage-600 mb-8 max-w-xl animate-slide-in opacity-0" style={{
              animationDelay: '0.9s',
              animationFillMode: 'forwards'
            }}>
              Hey, I'm Aaron Gabriel. I work with folks like you—builders, dreamers, helpers—to share what you're here to give. Through understanding, a little tech magic, and a process that flows, we'll get your ideas out there.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in opacity-0" style={{
              animationDelay: '1.2s',
              animationFillMode: 'forwards'
            }}>
              <Button variant="primary" size="lg" className="group" onClick={() => window.open('https://calendly.com/aaron-gabriel/chat', '_blank')}>
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-flow" />
                Chat With Me (Free)
              </Button>
              
              <Button variant="secondary" size="lg" className="group" onClick={() => window.open('https://calendly.com/aaron-gabriel/jumpstart', '_blank')}>
                <Calendar className="mr-2 h-5 w-5 group-hover:animate-flow" />
                Book a Session
              </Button>
            </div>
          </div>
          
          <div className={`${isMobile ? 'order-1' : 'order-1 md:order-2'} flex flex-col items-center`}>
            <div className="relative w-full max-w-md animate-float mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-300/40 to-water-300/40 rounded-3xl transform rotate-3 scale-105 opacity-70"></div>
              <img alt="Aaron Gabriel in Boulder nature setting" className="rounded-3xl shadow-xl relative z-10 object-cover w-full h-full aspect-[3/4]" loading="lazy" src="/lovable-uploads/f6272d22-3f74-4937-bf1c-34c3fecf294b.jpg" />
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-sage-100 transform rotate-2 max-w-[200px]">
                <p className="text-sm text-sage-800 font-handwritten">
                  "No rush, just flow—let's make it yours."
                </p>
              </div>
            </div>
            
            {isMobile && (
              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-medium text-sage-800 bg-sage-50/70 backdrop-blur-sm py-2 px-4 rounded-lg inline-block shadow-sm border border-sage-200/50">
                  Aaron Gabriel — <span className="text-earth-600">Builder</span>
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-radial from-sage-50 to-transparent opacity-70 -z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent -z-10"></div>
    </section>
  );
};

export default HeroSection;
