'use client';

import { useState } from 'react';

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

  const formatProgramName = (programValue: string) => {
    switch(programValue) {
      case '30-day-transformation': return '30-Day Transformation Program';
      case 'nutrition-coaching': return 'Mindful Nutrition Coaching';
      case 'wellness-coaching': return '1:1 Wellness Coaching';
      case 'other': return 'Not Sure Yet';
      default: return programValue;
    }
  };

  // Send form data to your email using a form submission service
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // This would typically use a form submission service like Formspree, EmailJS, or your own backend
      // For now, we're using a fake submission that always succeeds
      
      // Example with EmailJS (you would need to set this up):
      // await emailjs.sendForm('your_service_id', 'your_template_id', e.target as HTMLFormElement, 'your_user_id');
      
      // Example with Formspree:
      // const response = await fetch('https://formspree.io/f/your_form_id', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: { 'Content-Type': 'application/json' }
      // });
      // if (!response.ok) throw new Error('Form submission failed');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted to owner:', {
        ...formData,
        program: formatProgramName(formData.program)
      });
      
      // Set success status and reset form
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
  
  const openWhatsApp = () => {
    const whatsappNumber = '8169692148'; 
    const programSelection = formatProgramName(formData.program);
    
    // Create the message 
    const message = `*New Inquiry from Website*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Program:* ${programSelection}\n*Message:* ${formData.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset the form fields
    setFormStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Leaf Pattern */}
    
      
      <div className="container mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-green mb-4">
             Start Your Wellness Journey Today
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
                    <option value="other">Other/Not Sure Yet</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-dark-text font-semibold mb-2">
                    Message / Health Goals
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
                    <p className="font-semibold">Thank you for your message!</p>
                    <p>Your inquiry has been received. I'll get back to you as soon as possible.</p>
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
                    type="button"
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={openWhatsApp}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
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

            <div className="bg-white p-8 rounded-2xl ">
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
