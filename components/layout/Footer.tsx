import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary-green text-black pt-12 pb-6">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-3">
                <Image 
                  src="/images/Logo-2.png" 
                  alt="House of Wellness by N Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <span className="text-primary-green text-xl font-semibold font-heading">
                House of Wellness
              by N
              </span>
            </div>
            <p className="text-soft-beige/80 max-w-xs">
              Transform your life through wellness, HIIT, yoga, and mindful nutrition. 
              Join our community of over 200+ transformations and counting.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-warm-sand font-heading text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-soft-beige/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-soft-beige/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-soft-beige/80 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#transformations" className="text-soft-beige/80 hover:text-white transition-colors">
                  Transformations
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-soft-beige/80 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-soft-beige/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-warm-sand font-heading text-xl mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-warm-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:houseofwellnessbyn@gmail.com" className="text-soft-beige/80 hover:text-white transition-colors">
                  houseofwellnessbyn@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-warm-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-soft-beige/80">Based in Bangalore & Mumbai</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-warm-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                </svg>
                <a href="https://www.instagram.com/houseofwellnessbyn/" target="_blank" rel="noopener noreferrer" className="text-soft-beige/80 hover:text-white transition-colors">
                  @houseofwellnessbyn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-soft-beige/20 my-6" />

        {/* Copyright */}
        <div className="text-center text-soft-beige/60 text-sm">
          <p>&copy; {new Date().getFullYear()} House of Wellness by N | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
