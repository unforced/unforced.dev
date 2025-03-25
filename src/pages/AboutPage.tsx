import React from 'react';
import Button from '@/components/Button';
import SectionDivider from '@/components/SectionDivider';
import CallToAction from '@/components/CallToAction';
import { ArrowRight, Book, Code, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
const AboutPage = () => {
  return <main className="overflow-hidden pt-16">
      {/* Hero Section */}
      <section className="min-h-[60vh] pt-16 relative flex items-center">
        <div className="container mx-auto px-4 pt-8 pb-24 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold tracking-tight text-sage-900 mb-6">
                Who I Am
              </h1>
              
              <p className="text-lg text-sage-600 mb-8">I'm Aaron Gabriel, a Boulder based builder with a background in Ecopsychology, creative technology, and somatic practice. As a life long learner, I am currently pursuing a second masters degree, studying Creative Technology &amp; Design at the ATLAS Institute at CU Boulder. Aside from Unforced Development, I also express my passion through my leadership in Woven Web, a 501c3 organization focused on supporting open source &amp; collaborative software and developing better systems for helping networks to effectively coordinate.</p>
              
              <p className="text-lg text-sage-600 mb-8">
            </p>
              
              <Link to="/contact">
                <Button className="group">
                  Let's Connect
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-300/40 to-water-300/40 rounded-3xl transform rotate-3 scale-105"></div>
                <img alt="Aaron Gabriel doing Tai Chi in Boulder" className="rounded-3xl shadow-xl relative z-10 object-cover w-full h-full aspect-[3/4]" src="/lovable-uploads/a6756fe0-2941-47f1-975e-7bafdcdcc688.jpg" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-radial from-sage-50 to-transparent opacity-70 -z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent -z-10"></div>
      </section>
      
      <SectionDivider />
      
      {/* Personal Story Section */}
      <section className="py-20 bg-water-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-sage-800 mb-8 flowing-border pb-2 inline-block">
              My Personal Journey
            </h2>
            
            <div className="prose prose-lg prose-sage max-w-none">
              <p>I'm the son of a carpenter in a long line of builders—my dad, Joe, taught me 'unforced' through his craft and Tai Chi. Growing up, I watched him work with wood, his movements flowing and purposeful, never rushed or forced. He showed me that the most beautiful creations come from respecting the material and working with its natural qualities.</p>
              
              <p>Joe introduced me to Tai Chi, through which I began to understand even more deeply the philosophy of Wu Wei—effortless action—that would later become the foundation of my work. The idea that water doesn't struggle to flow around obstacles but simply finds its natural path resonates deeply with me.</p>
              
              <p>I carry that legacy into everything I do, shaping tools and spaces for your growth. My formal education spans computer science, ecopsychology, and now creative technology—but my most profound education came from watching my dad embody these principles.</p>
              
              <p>A Tai Chi practitioner and tech lover myself, I am constantly exploring new ways to stay balanced and connected in an increasingly tech-centric world. My dad passed in 2015, but his spirit is in this work. Every time I help someone bring more their gifts into the world without struggle, I feel connected to his wisdom.</p>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
            <path fill="#6495ED" d="M42.9,-76.4C55.5,-69.2,65.9,-57.7,74.1,-44.7C82.3,-31.6,88.4,-16.9,89.2,-1.8C90,13.2,85.6,28.5,77.4,41.3C69.2,54.1,57.1,64.5,43.6,71.8C30.1,79.1,15.1,83.3,-0.2,83.7C-15.5,84,-31,80.5,-44.1,73C-57.1,65.4,-67.8,53.7,-75.7,40.1C-83.5,26.5,-88.6,11.1,-87.8,-4.1C-87,-19.2,-80.3,-34.4,-70.6,-47.2C-60.8,-60,-48,-70.5,-34.1,-76.9C-20.2,-83.3,-5.1,-85.7,9.2,-82.2C23.6,-78.7,47.1,-69.3,42.9,-76.4Z" transform="translate(100 350)" />
          </svg>
        </div>
      </section>
      
      <SectionDivider flip={true} />
      
      {/* My Approach Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-sage-800 mb-6 flowing-border pb-2 inline-block">
              My Approach
            </h2>
            <p className="text-lg text-sage-600">Blending heart, nature, and technology</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-sage-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-sage-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-sage-800 mb-3">Somatic Practice</h3>
              <p className="text-sage-600">My Tai Chi training and my study of the Hakomi method have both taught me to listen deeply—not just to words, but to the wisdom of the body. I bring this presence to our work together, creating space for what truly wants to emerge.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center mb-6">
                <Book className="h-6 w-6 text-earth-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-sage-800 mb-3">Ecological Wisdom</h3>
              <p className="text-sage-600">
                My Ecopsychology background grounds my work in natural processes. Like water finding its way downhill, we find the path of least resistance for your offerings to flow into the world.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-water-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-water-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-sage-800 mb-3">Creative Technology</h3>
              <p className="text-sage-600">
                My technical skills and creative education let me translate your essence into digital form seamlessly. I use technology as a tool for expression, not as an end in itself.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-20 bg-sage-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-sage-300 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-handwritten text-sage-800 mb-6">
              The supreme good is like water, which nourishes all things without trying to.
            </blockquote>
            <cite className="text-sage-600 block">- Lao Tzu, Tao Te Ching</cite>
          </div>
        </div>
      </section>
      
      {/* Education & Experience Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-sage-800 mb-12 text-center flowing-border pb-2 inline-block">
              Education & Experience
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-soft border-l-4 border-l-sage-500">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-display font-semibold text-sage-800">MS in Creative Technology & Design</h3>
                  <span className="text-sage-500">Graduating May 2026</span>
                </div>
                <p className="text-sage-600">
                  University of Colorado, Boulder
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border-l-4 border-l-sage-500">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-display font-semibold text-sage-800">MA in Ecopsychology</h3>
                  <span className="text-sage-500">May 2022</span>
                </div>
                <p className="text-sage-600">
                  Naropa University, Boulder
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border-l-4 border-l-sage-500">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-display font-semibold text-sage-800">BS in Computer Science</h3>
                  <span className="text-sage-500">May 2015</span>
                </div>
                <p className="text-sage-600">Case Western Reserve University, Cleveland</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border-l-4 border-l-earth-500">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-display font-semibold text-sage-800">Hakomi Level 1 Comprehensive</h3>
                  <span className="text-sage-500">March 2025</span>
                </div>
                <p className="text-sage-600">Hakomi Institute</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border-l-4 border-l-water-500">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-display font-semibold text-sage-800">Mindfulness in Nature Teacher Training</h3>
                  <span className="text-sage-500">July 2023</span>
                </div>
                <p className="text-sage-600">Awake in The Wild</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction />
    </main>;
};
export default AboutPage;