
import React from 'react';

const FaqSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-sage-800 mb-12 text-center flowing-border pb-2 inline-block">
            Common Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-soft border border-sage-100">
              <h3 className="text-xl font-display font-semibold text-sage-800 mb-2">How quickly will my website be ready?</h3>
              <p className="text-sage-600">For this Jumpstart package, you are limited to a static website with a one way flow of information. This won't include accepting payments, recording user information, or dynamically updating website content; although in certain cases it may be possible to embed forms from other websites and link to separate booking platforms. This website you are browsing is one example of what is possible.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft border border-sage-100">
              <h3 className="text-xl font-display font-semibold text-sage-800 mb-2">How long will it take?</h3>
              <p className="text-sage-600">I will typically have your initial build completed 1-2 days after our first call. Before we schedule the second call, I will share with you the first draft and ask for you to take some time to reflect on any major changes. Once you feel ready, we can schedule the second call and we'll have it all published during the session. The whole process can take as little as 2-3 days.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft border border-sage-100">
              <h3 className="text-xl font-display font-semibold text-sage-800 mb-2">What if I need changes after our second session?</h3>
              <p className="text-sage-600">
                You'll have the skills to make many changes yourself! For more complex updates or if you need support, we can schedule additional 1:1 sessions at my hourly rate, or you can use the guide I provide to make changes on your own.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft border border-sage-100">
              <h3 className="text-xl font-display font-semibold text-sage-800 mb-2">Do I need any technical skills for this to work?</h3>
              <p className="text-sage-600">
                Not at all! The process is designed for non-technical folks. I create tools and guides specific to your needs, and our second session is hands-on so you gain confidence. Many clients are surprised by how comfortable they feel making updates.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-soft border border-sage-100">
              <h3 className="text-xl font-display font-semibold text-sage-800 mb-2">What about hosting costs and domain names?</h3>
              <p className="text-sage-600">The $500 package includes my time and expertise. You'll need to bring your own domain name, but I will teach you how to set up your own hosting for free. I'll guide you through all of this during our process, keeping costs minimal while ensuring quality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
