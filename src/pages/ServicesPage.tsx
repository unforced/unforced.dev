
import React from 'react';
import Button from '@/components/Button';
import SectionDivider from '@/components/SectionDivider';
import CallToAction from '@/components/CallToAction';
import { ArrowRight, Brain, Calendar, Code, LayoutGrid, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <main className="overflow-hidden pt-16">
      {/* Hero Section */}
      <section className="min-h-[60vh] pt-16 relative flex items-center">
        <div className="container mx-auto px-4 pt-8 pb-24 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold tracking-tight text-sage-900 mb-6 animate-fade-in">
              Beyond the Jumpstart
            </h1>
            <p className="text-xl md:text-2xl text-sage-700 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              1:1 Support For Whatever You Need
            </p>
            <p className="text-lg text-sage-600 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Want more? I offer 1:1 sessions—online or in-person in Boulder—for whatever you need. Personal growth, tech help, or bigger builds. We can talk it out or dig in with screens and laptops—your call.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button
                variant="primary"
                size="lg"
                className="group"
                onClick={() => window.open('https://cal.com/unforced/60min', '_blank')}
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:animate-flow" />
                Schedule a 1:1 Session
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-radial from-earth-50 to-transparent opacity-60 -z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent -z-10"></div>
      </section>
      
      <SectionDivider />
      
      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-sage-800 mb-6 flowing-border pb-2 inline-block">
              How I Can Support You
            </h2>
            <p className="text-lg text-sage-600">
              Tailored to your unique needs and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] group">
              <div className="h-3 bg-sage-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                  <Brain className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-sage-800 mb-4">Personal Growth</h3>
                <p className="text-sage-600 mb-6">
                  One-on-one sessions focused on your personal and professional development. Think therapy with a tech twist, blending somatic awareness with practical tools.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    <span>Clarity on your purpose and offerings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    <span>Strategies for authentic engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    <span>Navigating creative or business challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    <span>Finding flow in your work and life</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] group">
              <div className="h-3 bg-earth-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-earth-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-earth-200 transition-colors">
                  <Code className="h-8 w-8 text-earth-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-sage-800 mb-4">Tech Help</h3>
                <p className="text-sage-600 mb-6">
                  Hands-on technical assistance and learning sessions. We can work together on your computer, solving problems and building your confidence with technology.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-earth-500 mr-2">•</span>
                    <span>Website updates and improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-500 mr-2">•</span>
                    <span>Setting up AI tools for your work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-500 mr-2">•</span>
                    <span>Creating systems and automations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-500 mr-2">•</span>
                    <span>Learning specific tech skills</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] group">
              <div className="h-3 bg-water-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-water-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-water-200 transition-colors">
                  <LayoutGrid className="h-8 w-8 text-water-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-sage-800 mb-4">Bigger Builds</h3>
                <p className="text-sage-600 mb-6">
                  Extended projects for more complex needs. When your vision requires more than the Jumpstart package, we can create a custom plan for something bigger.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-water-500 mr-2">•</span>
                    <span>Custom web applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-water-500 mr-2">•</span>
                    <span>Complex website features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-water-500 mr-2">•</span>
                    <span>Digital systems for your organization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-water-500 mr-2">•</span>
                    <span>Community platforms and tools</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] group">
              <div className="h-3 bg-sage-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                  <Sparkles className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-sage-800 mb-4">Custom Packages</h3>
                <p className="text-sage-600 mb-6">
                  Don't see exactly what you need? Let's talk about creating a custom package that addresses your unique situation and goals.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    <span>Blend of personal growth and tech support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    <span>Ongoing retainer for regular assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    <span>Group workshops for your team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-2">•</span>
                    <span>Specialized training programs</span>
                  </li>
                </ul>
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
                <h2 className="text-3xl font-display font-semibold text-white mb-4">1:1 Session Pricing</h2>
                <p className="text-sage-100 text-lg max-w-xl mx-auto">
                  Straightforward pricing for personalized support
                </p>
              </div>
              
              <div className="px-6 py-12 md:flex justify-between items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-display font-semibold text-sage-800 mb-6">What You Get:</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-sage-500 mr-3">•</span>
                      <div>
                        <span className="font-semibold text-sage-800">Full hour of dedicated support</span>
                        <p className="text-sage-600 mt-1">Focused on your specific needs and goals</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sage-500 mr-3">•</span>
                      <div>
                        <span className="font-semibold text-sage-800">In-person or online</span>
                        <p className="text-sage-600 mt-1">Meet in Boulder or via video call</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sage-500 mr-3">•</span>
                      <div>
                        <span className="font-semibold text-sage-800">Session recording</span>
                        <p className="text-sage-600 mt-1">Reference our conversation anytime</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sage-500 mr-3">•</span>
                      <div>
                        <span className="font-semibold text-sage-800">Follow-up notes</span>
                        <p className="text-sage-600 mt-1">Key points and next steps after our session</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-1/3 text-center">
                  <div className="bg-sage-50 rounded-xl p-6 border border-sage-100">
                    <span className="text-3xl font-display font-bold text-sage-800">$150</span>
                    <p className="text-sage-600 mb-4">per hour</p>
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full group"
                      onClick={() => window.open('https://cal.com/unforced/60min', '_blank')}
                    >
                      <Calendar className="mr-2 h-5 w-5 group-hover:animate-flow" />
                      Book a Session
                    </Button>
                    <p className="text-sm text-sage-500 mt-4">
                      Pay via Venmo or Paypal
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg text-sage-600 italic mb-4">
                "The Jumpstart often leads here—I'll know you, and we'll have tools to jump right in."
              </p>
              <Link to="/jumpstart">
                <Button variant="outline" className="group">
                  Learn About The Jumpstart
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction />
    </main>
  );
};

export default ServicesPage;
