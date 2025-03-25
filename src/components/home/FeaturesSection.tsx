import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles, Calendar } from 'lucide-react';
import Button from '@/components/Button';
const FeaturesSection = () => {
  return <section className="py-24 relative">
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
            <p className="text-sage-600">A 1-hour call where I ask, you share, and we uncover what you're here to give. You'll walk away from this with fresh clarity and a deep feeling of being understood.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
            <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-earth-600" />
            </div>
            <h3 className="text-xl font-display font-semibold text-sage-800 mb-3">I Build</h3>
            <p className="text-sage-600">Between sessions, I create a website that fits you, a detailed doc of our talk, and a custom how-to guide—using AI and my tech skills to make it happen fast.</p>
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
    </section>;
};
export default FeaturesSection;