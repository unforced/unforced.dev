import React from 'react';
const TestimonialsSection = () => {
  return <section className="py-20 bg-sage-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-sage-800 mb-6 flowing-border pb-2 inline-block">
            What People Are Saying
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-soft relative">
            <div className="mb-6 text-4xl text-sage-300">"</div>
            <p className="text-sage-700 mb-6">Testimonial Coming Soon</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center">
                <span className="text-sage-700 font-semibold">JK</span>
              </div>
              <div className="ml-4">
                <p className="font-semibold text-sage-800">Person</p>
                <p className="text-sage-500 text-sm">Therapist, Boulder</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-soft relative">
            <div className="mb-6 text-4xl text-sage-300">"</div>
            <p className="text-sage-700 mb-6">Testimonial Coming Soon</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-earth-200 rounded-full flex items-center justify-center">
                <span className="text-earth-700 font-semibold">ML</span>
              </div>
              <div className="ml-4">
                <p className="font-semibold text-sage-800">Person</p>
                <p className="text-sage-500 text-sm">Small Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;