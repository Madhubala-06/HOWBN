import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 bg-soft-beige relative overflow-hidden">
      {/* Background Pattern - Diagonal Lines */}
      <div className="absolute inset-0 bg-[url('/images/diagonal-pattern.svg')] bg-no-repeat bg-cover opacity-5"></div>
      
      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        {/* Hero Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-tight mb-4">
            <span className="text-dark-text">Ignite Your </span>
            <span className="text-primary-green italic">Energy</span>
            <span className="text-dark-text"> And</span><br/>
            <span className="text-primary-green italic">Transform</span>
            <span className="text-dark-text"> Your Body</span>
          </h1>
        </div>
        
        {/* Program Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">Zumba</span>
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">Meditation</span>
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">Yoga</span>
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">Bootcamp</span>
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">Pilates</span>
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">Kickboxing</span>
          <span className="bg-white border border-warm-sand px-6 py-2 rounded-full text-primary-green">CrossFit</span>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Link 
            href="#contact" 
            className="bg-primary-green hover:bg-primary-green/90 text-black py-4 px-10 rounded-lg flex items-center gap-2 transition-transform hover:-translate-y-1"
          >
            <span className="text-lg font-medium">Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
        
        {/* Image Grid */}
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
                src="/Hero_Section/two.jpg" 
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
        
        {/* Credentials Text */}
        <div className="mt-8 text-center text-muted-grey">
          <p>💫 7+ years of experience | 200+ transformations and counting</p>
        </div>
      </div>
    </section>
  );
}
