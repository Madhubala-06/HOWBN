'use client';

import { useState, useEffect } from 'react';

type TestimonialProps = {
  quote: string;
  name: string;
  location: string;
  isActive: boolean;
}

function Testimonial({ quote, name, location, isActive }: TestimonialProps) {
  return (
    <div 
      className={`bg-white p-6 sm:p-8 rounded-2xl shadow-md transition-all duration-500 ${
        isActive 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95 hidden'
      }`}
    >
      {/* Quote Icon */}
      <div className="text-primary-green mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24">
          <path fill="#2E4E3E" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C10.024 11.645 12 13.39 12 15.545c0 2.3-1.867 4.122-4.255 4.122-1.255 0-2.349-.468-3.162-1.354a3.75 3.75 0 0 1 0-.992zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 2.419.134 4.395 1.879 4.395 4.034 0 2.3-1.867 4.122-4.255 4.122-1.255 0-2.349-.468-3.162-1.354a3.75 3.75 0 0 1 0-.992z"/>
        </svg>
      </div>

      {/* Testimonial Content */}
      <p className="text-dark-text italic mb-6 text-sm sm:text-base">"{quote}"</p>
      
      {/* Client Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-primary-green/10 flex items-center justify-center text-primary-green">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div>
          <p className="font-semibold text-primary-green">{name}</p>
          <p className="text-muted-grey text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const goToPrevious = () => {
    setActiveTestimonial(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const goToNext = () => {
    setActiveTestimonial(prev => 
      (prev + 1) % testimonials.length
    );
  };

  const testimonials = [
    {
      quote: "I've always loved fitness, but after an injury, I gained weight and lost motivation. Joining Nageshwari's 30-Day Challenge helped me lose 10 kgs, rebuild my confidence, and fall in love with fitness again. Her coaching is truly a complete lifestyle transformation!",
      name: "Apoorva Parab",
      location: "Mumbai"
    },
    {
      quote: "Nageshwari and I were childhood friends, but after moving to different city, we lost touch. Postpartum, I reached out to her for help and, with her guidance, I lost 6 kgs and feel healthy, fit, and confident again!",
      name: "Shraddha Gaikwad",
      location: "Ahmedabad"
    },
    {
      quote: "During the lockdown, I had lost a lot of weight due to COVID. I joined Nageshwari's program to gain weight with the right nutrition and supplements. With her guidance, I've regained 8 kgs and feel healthier and stronger than ever!",
      name: "Varsha Nair",
      location: "Trivandrum"
    },
    {
      quote: "I joined Nageshwari's 21-day program at 64, and with her customized workouts and nutrition plans, I feel young, energetic, and strong again!",
      name: "Meena Iyer",
      location: "Mumbai"
    },
    {
      quote: "I had thyroid for more than a decade, and losing weight always felt impossible. When I had almost given up on the idea of getting fit, I met Nageshwari. Her guidance, simple workout routines tailored to my schedule, and practical lifestyle changes helped me lose 12 kgs in just 3 months. I’m truly grateful for her support and motivation.",
      name: "Swapna Shetty",
      location: "Mumbai"
    }
  ];

  // Toggle navigation visibility on small screens
  const [_showNavigation, setShowNavigation] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(window.innerWidth > 640);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section id="testimonials" className="py-28 bg-warm-sand/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-green mb-4">
            💬 What My Clients Say
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto relative h-auto px-10 sm:px-0">
          {/* Previous Button */}
          <button 
            onClick={goToPrevious}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-6 md:-translate-x-16 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md z-10 flex items-center justify-center text-primary-green hover:bg-soft-beige hover:text-primary-green transition-colors focus:outline-none focus:ring-none focus:ring-transparent focus:ring-offset-"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <div className="relative h-full mx-1 sm:mx-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={index === activeTestimonial ? 'block' : 'hidden'}
              >
                <Testimonial
                  {...testimonial}
                  isActive={index === activeTestimonial}
                />
              </div>
            ))}
          </div>
          
          {/* Next Button */}
          <button 
            onClick={goToNext}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-6 md:translate-x-16 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md z-10 flex items-center justify-center text-primary-green hover:bg-soft-beige hover:text-primary-green transition-colors focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className=" justify-center mt-12 space-x-3 hidden sm:flex">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? ' bg-green-950/50 scale-110 shadow-md' 
                    : 'bg-green-950'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Text indicator */}
          <div className="text-center mt-4 text-muted-grey text-sm hidden sm:block">
            <p>{activeTestimonial + 1} of {testimonials.length} stories</p>
          </div>

          {/* Mobile indicators */}
          <div className="text-center mt-4 flex justify-center items-center sm:hidden">
            <p className="text-xs text-muted-grey">{activeTestimonial + 1}/{testimonials.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
