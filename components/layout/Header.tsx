'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
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
            <span className="text-sm block -mt-1">by N</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-dark-text hover:text-primary-green transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-dark-text hover:text-primary-green transition-colors">
            About
          </Link>
          <Link href="#programs" className="text-dark-text hover:text-primary-green transition-colors">
            Programs
          </Link>
          <Link href="#transformations" className="text-dark-text hover:text-primary-green transition-colors">
            Transformations
          </Link>
          <Link href="#testimonials" className="text-dark-text hover:text-primary-green transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="btn btn-primary">
            Join Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary-green"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="container mx-auto flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-dark-text hover:text-primary-green transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-dark-text hover:text-primary-green transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#programs" 
              className="text-dark-text hover:text-primary-green transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programs
            </Link>
            <Link 
              href="#transformations" 
              className="text-dark-text hover:text-primary-green transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Transformations
            </Link>
            <Link 
              href="#testimonials" 
              className="text-dark-text hover:text-primary-green transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#contact" 
              className="btn btn-primary mx-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
