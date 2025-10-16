'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend/API
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        program: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Leaf Pattern */}
    
      
      <div className="container mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-green mb-4">
            🌿 Start Your Wellness Journey Today
          </h2>
          <p className="text-lg text-dark-text">
            Let's take the first step toward a healthier, balanced, and confident you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-dark-text font-semibold mb-2">
                    Name
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-warm-sand/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green/30"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-dark-text font-semibold mb-2">
                    Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-warm-sand/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green/30"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-dark-text font-semibold mb-2">
                    Phone
                  </label>
                  <input 
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-warm-sand/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green/30"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Program Selection */}
                <div>
                  <label htmlFor="program" className="block text-dark-text font-semibold mb-2">
                    Select Program
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-warm-sand/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green/30 bg-white"
                  >
                    <option value="" disabled>Choose a program</option>
                    <option value="30-day-transformation">30-Day Transformation Program</option>
                    <option value="nutrition-coaching">Mindful Nutrition Coaching</option>
                    <option value="wellness-coaching">1:1 Wellness Coaching</option>
                    <option value="yoga">Yoga with N</option>
                    <option value="other">Other/Not Sure Yet</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-dark-text font-semibold mb-2">
                    Message / Fitness Goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-warm-sand/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green/30 resize-none"
                    placeholder="Tell me about your goals or any questions you have..."
                  />
                </div>

                {/* Form Status Message */}
                {formStatus === 'success' && (
                  <div className="bg-primary-green/10 text-primary-green px-4 py-3 rounded-lg">
                    Thank you for reaching out! I'll get back to you soon.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg">
                    There was an error submitting your form. Please try again.
                  </div>
                )}

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="btn btn-primary flex-1"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Join My Program'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary flex-1"
                    onClick={() => window.open('https://calendly.com/houseofwellnessbyn', '_blank')}
                  >
                    Book a Free Consultation
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-primary-green text-soft-beige p-8 rounded-2xl mb-8">
              <h3 className="font-heading text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-warm-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>houseofwellnessbyn@gmail.com</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-warm-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Based in Mumbai</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-warm-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                  </svg>
                  <a 
                    href="https://www.instagram.com/houseofwellnessbyn/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-warm-sand transition-colors"
                  >
                    @houseofwellnessbyn
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="font-heading text-xl text-primary-green mb-4">Online Programs Available</h3>
              <p className="text-dark-text mb-4">
                All programs can be conducted virtually, so you can transform from anywhere in the world!
              </p>
              <p className="text-dark-text">
                In-person sessions are available in Mumbai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
