'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/carousel.css';



type TransformationCardProps = {
  beforeAfterImage: string;
  story?: string;
  name?: string;
  onClick: () => void;
}

function TransformationCard({ beforeAfterImage, onClick, story: _story = '', name: _name = '' }: TransformationCardProps) {
  return (
    <div 
      className="cursor-pointer relative overflow-hidden rounded-lg group hover:transition duration-500 hover:scale-105"
      onClick={onClick}
    >
      <div className="flex h-[300px]">
       
        
        {/* After Image - Right half */}
        <div className="w-full relative overflow-hidden bg-primary-green/20">
          <div className="flex h-full items-center justify-center">

            <Image 
              src={beforeAfterImage}
              alt="Before and After Transformation"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      {/* <div className="absolute inset-0 bg-primary-green/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white text-center p-6">
          <p className="font-heading text-xl mb-2">Read {name}'s Story</p>
          <p className="text-soft-beige/90">Click to view details</p>
        </div>
      </div> */}
    </div>
  );
}




export default function Transformations() {
  const [_selectedTransformation, setSelectedTransformation] = useState<null | number>(null);
  const [isMobile, setIsMobile] = useState(false);
  
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
  
  // Settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 900,
    pauseOnHover: true,
    arrows: !isMobile,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const transformationsData = [
    {
      beforeAfterImage: "/transformation/one.jpeg",
    },
    {
        beforeAfterImage: "/transformation/two.jpeg",
    },
    {
        beforeAfterImage: "/transformation/three.jpeg",
    },
    {
      beforeAfterImage: "/transformation/four.jpeg",
    },
    {
      beforeAfterImage: "/transformation/five.jpeg",
    },
    {
      beforeAfterImage: "/transformation/six.jpeg",
    },
    {
      beforeAfterImage: "/transformation/seven.jpeg",
    },

    {
      beforeAfterImage: "/transformation/nine.jpeg",
    },
    {
      beforeAfterImage: "/transformation/eight.jpeg",
    },
   
    
  ];

  return (
    <section id="transformations" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-green mb-4">
            Real Transformations, Real Stories
          </h2>
          <p className="text-lg text-dark-text">
            Over 200+ individuals have transformed their bodies, energy, and mindset.
          </p>
        </div>

        {
          <div className={`carousel-container ${isMobile ? 'mobile-carousel' : ''}`}>
            <Slider {...sliderSettings}>
              {transformationsData.map((transformation, index) => (
                <div key={index}>
                  <TransformationCard
                    {...transformation}
                    onClick={() => setSelectedTransformation(index)}
                  />
                </div>
              ))}
            </Slider>
          </div>
        }

        {/* Quote Banner */}
        <div className="mt-16 text-center bg-warm-sand/30 py-8 px-4 rounded-lg">
          <p className="text-xl md:text-2xl font-heading text-primary-green italic">
          Disclaimer : “Results are not typical; individual results may vary from person to person.”
          </p>
        </div>

        {/* Transformation Story Modal */}
        {/* {selectedTransformation !== null && (
          <StoryModal
            isOpen={selectedTransformation !== null}
            onClose={() => setSelectedTransformation(null)}
            {...transformationsData[selectedTransformation]}
          />
        )} */}
      </div>
    </section>
  );
}
