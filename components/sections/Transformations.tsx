'use client';

import { useState } from 'react';
import Image from 'next/image';

type TransformationCardProps = {
  beforeAfterImage: string;
  story: string;
  name: string;
  onClick: () => void;
}

function TransformationCard({ beforeAfterImage, story, name, onClick }: TransformationCardProps) {
  return (
    <div 
      className="cursor-pointer relative overflow-hidden rounded-lg group"
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

type StoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  beforeAfterImage: string;
  story: string;
  name: string;
}

function StoryModal({ isOpen, onClose, beforeAfterImage, story, name }: StoryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-text/50">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-muted-grey hover:text-dark-text transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <h3 className="font-heading text-2xl text-primary-green font-semibold mb-6">{name}'s Transformation</h3>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Before/After Images */}
          <div className="md:w-1/2 flex flex-col">
            <div className="relative h-[250px] mb-2">
              <div className="absolute inset-0 bg-warm-sand/30 rounded-lg flex items-center justify-center">
                <p className="text-primary-green font-medium">Before Image</p>
              </div>
              <div className="absolute bottom-3 left-3 bg-white/80 px-3 py-1 rounded-full">
                <span className="text-primary-green font-semibold">Before</span>
              </div>
            </div>
            <div className="relative h-[250px]">
              <div className="absolute inset-0 bg-primary-green/20 rounded-lg flex items-center justify-center">
                <p className="text-primary-green font-medium">After Image</p>
              </div>
              <div className="absolute bottom-3 left-3 bg-white/80 px-3 py-1 rounded-full">
                <span className="text-primary-green font-semibold">After</span>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="md:w-1/2">
            <h4 className="text-xl font-semibold text-primary-green mb-4">My Journey</h4>
            <p className="text-dark-text whitespace-pre-line">{story}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Transformations() {
  const [selectedTransformation, setSelectedTransformation] = useState<null | number>(null);

  const transformationsData = [
    {
      beforeAfterImage: "/transformation/one.jpeg",
      name: "Aishwarya",
      story: "I never thought I could achieve this transformation. After struggling with my weight for years, I joined House of Wellness's 30-day program.\n\nThe personalized approach to nutrition and exercise made all the difference. It wasn't just about losing weight — I gained energy, confidence, and a whole new outlook on life.\n\nNageshwari provided constant support and motivation, making the journey enjoyable despite the challenges. I've not only transformed physically but mentally as well."
    },
    {
        beforeAfterImage: "/transformation/two.jpeg",
      name: "Sneha",
      story: "As a busy professional, I always struggled to find time for fitness. The yoga sessions with N helped me reconnect with my body and find balance in my hectic schedule.\n\nI've lost 15kg in 3 months following the nutrition plan, but more importantly, I've gained incredible mental clarity and emotional balance.\n\nThe holistic approach to wellness taught me that true transformation involves mind, body, and spirit. I'm forever grateful for this journey."
    },
    {
        beforeAfterImage: "/transformation/three.jpeg",
      name: "Priya",
      story: "After my pregnancy, I struggled to lose the weight I had gained. Traditional diets weren't working, and I felt constantly tired and unmotivated.\n\nThe Mindful Nutrition program changed everything. The customized meal plans were actually enjoyable to follow, and the HIIT workouts were challenging but effective.\n\nIn just 8 weeks, I lost 10kg and regained my confidence. The best part was learning sustainable habits that I could maintain long-term."
    },
    
  ];

  return (
    <section id="transformations" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-green mb-4">
            🌟 Real Transformations, Real Stories
          </h2>
          <p className="text-lg text-dark-text">
            Over 200+ individuals have transformed their bodies, energy, and mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformationsData.map((transformation, index) => (
            <TransformationCard
              key={index}
              {...transformation}
              onClick={() => setSelectedTransformation(index)}
            />
          ))}
        </div>

        {/* Quote Banner */}
        <div className="mt-16 text-center bg-warm-sand/30 py-8 px-4 rounded-lg">
          <p className="text-xl md:text-2xl font-heading text-primary-green italic">
            "It's not just about losing weight or gaining weight — it's about gaining strength, confidence, and balance."
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
