'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type TestimonialProps = {
  quote: string;
  name: string;
  location: string;
  image?: string;
  isActive: boolean;
}

function Testimonial({ quote, name, location, image, isActive }: TestimonialProps) {
  return (
    <div 
      className={`bg-white p-8 rounded-2xl shadow-md transition-all duration-500 ${
        isActive 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95 absolute'
      }`}
    >
      {/* Quote Icon */}
      <div className="text-primary-green mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24">
          <path fill="#2E4E3E" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C10.024 11.645 12 13.39 12 15.545c0 2.3-1.867 4.122-4.255 4.122-1.255 0-2.349-.468-3.162-1.354a3.75 3.75 0 0 1 0-.992zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 2.419.134 4.395 1.879 4.395 4.034 0 2.3-1.867 4.122-4.255 4.122-1.255 0-2.349-.468-3.162-1.354a3.75 3.75 0 0 1 0-.992z"/>
        </svg>
      </div>

      {/* Testimonial Content */}
      <p className="text-dark-text italic mb-6">"{quote}"</p>
      
      {/* Client Info */}
      <div className="flex items-center">
        {image && (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-primary-green/20 flex items-center justify-center">
            <span className="text-primary-green text-xs">Photo</span>
          </div>
        )}
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

  const testimonials = [
    {
      quote: "I joined Nageshwari's 30-day program thinking I'd just lose weight — but I found discipline, energy, and happiness. She truly cares about your journey.",
      name: "Aishwarya",
      location: "Mumbai",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "The yoga sessions helped me reconnect with my body. I've never felt so light and confident.",
      name: "Sneha",
      location: "Bangalore",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "Following the nutrition plan was easier than I expected. The meals were delicious, and I never felt deprived. I've lost 12kg and gained so much energy!",
      name: "Rahul",
      location: "Delhi",
      image: "/images/testimonial-3.jpg"
    },
    {
      quote: "As a busy mom of two, finding time for fitness seemed impossible. The customized home workout plan fit perfectly into my schedule. I've transformed both physically and mentally.",
      name: "Priya",
      location: "Hyderabad",
      image: "/images/testimonial-4.jpg"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-warm-sand/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-green mb-4">
            💬 What My Clients Say
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto relative h-[300px]">
          <div className="relative h-full">
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

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeTestimonial 
                    ? 'bg-primary-green' 
                    : 'bg-warm-sand'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
