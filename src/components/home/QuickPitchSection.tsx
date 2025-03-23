
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';
import SectionDivider from '@/components/SectionDivider';

const QuickPitchSection = () => {
  return (
    <>
      <SectionDivider />
      
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
    </>
  );
};

export default QuickPitchSection;
