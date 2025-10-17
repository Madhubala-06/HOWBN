'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/carousel.css';

export default function Hero() {
  // State for mobile detection
  const [isMobile, setIsMobile] = useState(false);
  
  // Settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    rows: 2,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Check if we're on mobile when component mounts
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  return (
    <section id="hero" className="pt-32 pb-20 bg-soft-beige relative overflow-hidden">
      {/* Background Pattern - Diagonal Lines */}
      <div className="absolute inset-0 bg-[url('/images/diagonal-pattern.svg')] bg-no-repeat bg-cover opacity-5"></div>
      
      {/* Green gradient at top right */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-br from-primary-green/30 to-transparent z-0"></div>
      
      {/* Main Content */}
      <div className="container mx-auto relative z-10 ">
        {/* Hero Heading */}
        <div className="text-center md:max-w-full mx-auto mb-6    md:mt-[10%] " style={{fontFamily: 'Unbounded, sans-serif'}}>
          <h2 className="text-3xl md:text-6xl lg:text-6xl leading-tight mb-4 font-unbounded">
            <span className="text-dark-text">Transforming Lives Through Wellness, </span>
            <span className="text-primary-green italic">  & Mindful Living</span>
          </h2>
        </div>
        <div className="pb-12 text-center text-muted-grey ">
          <p>7+ years of experience | 200+ transformations and counting</p>
        </div>
        {/* Program Badges */}
        <div className="flex flex-wrap justify-center md:gap-3 gap-1 mb-10 ">
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">HIIT</span>
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">Yoga</span>
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">Meditation</span>
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">Zumba</span>
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">Customized Meal Plans</span>
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">Supplement Guidance</span>
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">Wellness Education</span>
        </div>

        
        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <a 
            href="#contact" 
            className="relative btn-primary text-dark-text py-4 px-10 rounded-xl flex items-center gap-2 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('contact');
              if (section) {
                window.scrollTo({
                  top: section.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <span className="text-lg font-medium">Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        
        {/* Image Section - Grid for Desktop, Carousel for Mobile */}
        {isMobile ? (
          <div className="mb-8 px-2">
            <Slider {...sliderSettings} className="carousel-container">
              {/* Row 1, Slide 1 */}
              <div className="px-1">
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image 
                    src="/Hero_Section/one.jpg" 
                    alt="Workout Image"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Row 1, Slide 2 */}
              <div className="px-1">
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image 
                    src="/Hero_Section/three.jpg" 
                    alt="Yoga Image"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Row 1, Slide 3 */}
              <div className="px-1">
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image 
                    src="/Hero_Section/five.jpg" 
                    alt="Zumba Image"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Row 1, Slide 4 */}
              <div className="px-1">
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image 
                    src="/Hero_Section/seven.jpg" 
                    alt="Workout Image"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Row 2, Slide 1 */}
              <div className="px-1">
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image 
                    src="/Hero_Section/two.jpeg" 
                    alt="Kickboxing Image"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Row 2, Slide 2 */}
              <div className="px-1">
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image 
                    src="/Hero_Section/four.jpg" 
                    alt="Weights Image"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Row 2, Slide 3 */}
              <div className="px-1">
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image 
                    src="/Hero_Section/six.jpg" 
                    alt="Pilates Image"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Row 2, Slide 4 */}
              <div className="px-1">
                <div className="h-48 rounded-lg overflow-hidden">
                  <Image 
                    src="/Hero_Section/eight.jpg" 
                    alt="CrossFit Image"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Slider>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden rounded-xl">
            {/* First Column */}
            <div className="flex flex-col gap-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <Image 
                  src="/Hero_Section/one.jpg" 
                  alt="Workout Image"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-44 rounded-lg overflow-hidden">
                <Image 
                  src="/Hero_Section/two.jpeg" 
                  alt="Kickboxing Image"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Second Column */}
            <div className="flex flex-col gap-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <Image 
                  src="/Hero_Section/three.jpg" 
                  alt="Yoga Image"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-44 rounded-lg overflow-hidden">
                <Image 
                  src="/Hero_Section/four.jpg" 
                  alt="Weights Image"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Third Column */}
            <div className="flex flex-col gap-4">
              <div className="h-44 rounded-lg overflow-hidden">
                <Image 
                  src="/Hero_Section/five.jpg" 
                  alt="Zumba Image"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <Image 
                  src="/Hero_Section/six.jpg" 
                  alt="Pilates Image"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Fourth Column */}
            <div className="flex flex-col gap-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <Image 
                  src="/Hero_Section/seven.jpg" 
                  alt="Workout Image"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-44 rounded-lg overflow-hidden">
                <Image 
                  src="/Hero_Section/eight.jpg" 
                  alt="CrossFit Image"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
        
       
       
      </div>
    </section>
  );
}
