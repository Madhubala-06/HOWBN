'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Custom scroll handler function
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80, // Adjust for header height
      behavior: 'smooth'
    });
  }
};

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
      className={`fixed font-inter-display top-0 left-0 w-full z-50 transition-all duration-300 font-inter-display ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex  justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12 ">
            <Image 
               src="/images/Logo-2.png" 
              alt="House of Wellness by N Logo" 
              fill 
              className="object-contain" 
            />
          </div>
          <span className="text-dark-text  font-inter-display text-lg font-semibold font-heading">
            House of Wellness by N
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-dark-text hover:text-primary-green transition-colors">
            Home
          </Link>
          <a 
            href="#about" 
            className="text-dark-text hover:text-primary-green transition-colors cursor-pointer"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About
          </a>
          <a 
            href="#programs" 
            className="text-dark-text hover:text-primary-green transition-colors cursor-pointer"
            onClick={(e) => scrollToSection(e, 'programs')}
          >
            Programs
          </a>
          <a 
            href="#transformations" 
            className="text-dark-text hover:text-primary-green transition-colors cursor-pointer"
            onClick={(e) => scrollToSection(e, 'transformations')}
          >
            Transformations
          </a>
          <a 
            href="#testimonials" 
            className="text-dark-text hover:text-primary-green transition-colors cursor-pointer"
            onClick={(e) => scrollToSection(e, 'testimonials')}
          >
            Testimonials
          </a>
          <Link 
            href="/blog" 
            className="text-dark-text hover:text-primary-green transition-colors"
          >
            Blog
          </Link>
          <a 
            href="#contact" 
            className="btn btn-primary cursor-pointer"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Join Now
          </a>
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
            <a 
              href="#about" 
              className="text-dark-text hover:text-primary-green transition-colors px-4 py-2"
              onClick={(e) => {
                scrollToSection(e, 'about');
                setIsMobileMenuOpen(false);
              }}
            >
              About
            </a>
            <a 
              href="#programs" 
              className="text-dark-text hover:text-primary-green transition-colors px-4 py-2"
              onClick={(e) => {
                scrollToSection(e, 'programs');
                setIsMobileMenuOpen(false);
              }}
            >
              Programs
            </a>
            <a 
              href="#transformations" 
              className="text-dark-text hover:text-primary-green transition-colors px-4 py-2"
              onClick={(e) => {
                scrollToSection(e, 'transformations');
                setIsMobileMenuOpen(false);
              }}
            >
              Transformations
            </a>
            <a 
              href="#testimonials" 
              className="text-dark-text hover:text-primary-green transition-colors px-4 py-2"
              onClick={(e) => {
                scrollToSection(e, 'testimonials');
                setIsMobileMenuOpen(false);
              }}
            >
              Testimonials
            </a>
            <Link 
              href="/blog" 
              className="text-dark-text hover:text-primary-green transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <a 
              href="#contact" 
              className="btn btn-primary mx-4"
              onClick={(e) => {
                scrollToSection(e, 'contact');
                setIsMobileMenuOpen(false);
              }}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
