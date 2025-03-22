import React from 'react';
import Button from '@/components/Button';
import SectionDivider from '@/components/SectionDivider';
import CallToAction from '@/components/CallToAction';
import { ArrowRight, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen pt-16 relative flex items-center">
        <div className="container mx-auto px-4 pt-16 pb-24 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
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
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-300/40 to-water-300/40 rounded-3xl transform rotate-3 scale-105 opacity-70"></div>
                <img alt="Aaron Gabriel in Boulder nature setting" className="rounded-3xl shadow-xl relative z-10 object-cover w-full h-full aspect-[3/4]" loading="lazy" src="/lovable-uploads/f6272d22-3f74-4937-bf1c-34c3fecf294b.jpg" />
                <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-sage-100 transform rotate-2 max-w-[200px]">
                  <p className="text-sm text-sage-800 font-handwritten">
                    "No rush, just flow—let's make it yours."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-radial from-sage-50 to-transparent opacity-70 -z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent -z-10"></div>
      </section>
      
      <SectionDivider />
      
      {/* Quick Pitch Section */}
      <section className="py-20 bg-water-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-sage-800 mb-8 flowing-border pb-2 inline-block">
              The Jumpstart: From You to the World
            </h2>
            
            <p className="text-xl text-sage-700 mb-8">
              In two sessions, I'll get to know you, build you a website, and give you tools to keep creating—leaving you with visibility, confidence, and the power to share on your own.
            </p>
            
            <Link to="/jumpstart">
              <Button className="group">
                Learn More About The Jumpstart
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 -z-10">
          <svg viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
            <path fill="#6495ED" d="M42.9,-76.4C55.5,-69.2,65.9,-57.7,74.1,-44.7C82.3,-31.6,88.4,-16.9,89.2,-1.8C90,13.2,85.6,28.5,77.4,41.3C69.2,54.1,57.1,64.5,43.6,71.8C30.1,79.1,15.1,83.3,-0.2,83.7C-15.5,84,-31,80.5,-44.1,73C-57.1,65.4,-67.8,53.7,-75.7,40.1C-83.5,26.5,-88.6,11.1,-87.8,-4.1C-87,-19.2,-80.3,-34.4,-70.6,-47.2C-60.8,-60,-48,-70.5,-34.1,-76.9C-20.2,-83.3,-5.1,-85.7,9.2,-82.2C23.6,-78.7,47.1,-69.3,42.9,-76.4Z" transform="translate(100 350)" />
          </svg>
        </div>
        
        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-10 -z-10">
          <svg viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
            <path fill="#6b8e23" d="M39.3,-68.2C50.9,-61.6,60.2,-50.1,67.1,-37.3C74,-24.5,78.5,-10.5,78.7,3.9C78.9,18.3,74.8,32.9,67.2,45.6C59.5,58.2,48.3,68.7,35.1,73.8C21.9,78.9,6.6,78.6,-8.3,76.6C-23.3,74.5,-37.9,70.8,-50.6,63C-63.2,55.2,-73.8,43.4,-77.8,29.9C-81.7,16.4,-79,1.2,-76.2,-13.9C-73.5,-29,-70.7,-44,-62.2,-53.4C-53.7,-62.8,-39.5,-66.6,-26.5,-71C-13.5,-75.4,-1.7,-80.4,9.2,-79C20.1,-77.6,40.3,-69.8,39.3,-68.2Z" transform="translate(100 450)" />
          </svg>
        </div>
      </section>
      
      <SectionDivider flip={true} />
      
      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-sage-800 mb-6 flowing-border pb-2 inline-block">
              How We Work Together
            </h2>
            <p className="text-lg text-sage-600">
              A simple, flowing process that puts the power in your hands
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="h-6 w-6 text-sage-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-sage-800 mb-3">We Talk</h3>
              <p className="text-sage-600">
                A 1-hour call where I ask, you share, and we uncover what you're here to give. My Hakomi background keeps it real and present—you'll feel heard.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-earth-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-sage-800 mb-3">I Build</h3>
              <p className="text-sage-600">
                Between sessions, I create a website that fits you, a detailed doc of our talk, and a custom how-to guide—using AI and my tech skills to make it happen fast.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-water-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-water-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-sage-800 mb-3">You Learn</h3>
              <p className="text-sage-600">
                In our second 1-hour call, we refine the site together, and I show you how to tweak it—or anything else—yourself. You'll walk away ready to roll.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/about">
              <Button variant="outline" className="group">
                Learn More About Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-sage-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-sage-800 mb-6 flowing-border pb-2 inline-block">
              What People Are Saying
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-soft relative">
              <div className="mb-6 text-4xl text-sage-300">"</div>
              <p className="text-sage-700 mb-6">
                Aaron made the process so natural. I've been trying to launch my therapy practice website for months, but everything felt forced. In just two sessions, he helped me find my voice and gave me a beautiful site I can actually update myself.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center">
                  <span className="text-sage-700 font-semibold">JK</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-sage-800">Jamie K.</p>
                  <p className="text-sage-500 text-sm">Therapist, Boulder</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-soft relative">
              <div className="mb-6 text-4xl text-sage-300">"</div>
              <p className="text-sage-700 mb-6">
                As someone who's technically challenged but knows what I want, Aaron was the perfect guide. His background in both tech and therapy meant he truly got me and my work. The website he built feels like me, and I actually understand how to use it!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-earth-200 rounded-full flex items-center justify-center">
                  <span className="text-earth-700 font-semibold">ML</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-sage-800">Mike L.</p>
                  <p className="text-sage-500 text-sm">Small Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction />
    </main>;
};
export default HomePage;