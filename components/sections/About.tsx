import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Before & After Images */}
          <div className="relative h-[450px] md:h-[800px]">
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex">
              
                

                <div className="w-full h-full relative">
                  <Image 
                    src="/images/N-2.jpeg"
                    alt="After Transformation"
                    fill
                    className="object-contain"
                  />
                  
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-green">
                About Me
              </h2>
            </div>
            
            <div className="space-y-4 text-dark-text">
              <p>
                I wasn't always into fitness. Growing up, I struggled with obesity and believed 
                wellness wasn't meant for someone like me.
              </p>
              <p>
                At 19, persistent knee pain and a thyroid diagnosis made me realize I needed real 
                change. That's when I began my journey toward mindful nutrition and an active 
                lifestyle — one that transformed not just my body but also my confidence and mindset.
              </p>
              <p>
                Today, as a Wellness Coach and certified yoga teacher with expertise in 
                 Nutrition Essentials from the American Society for Nutrition (ASN), 
                I help individuals discover balance and confidence through personalized coaching 
                that blends movement, mindfulness, and sustainable nutrition.
              </p>
              <p className="font-semibold text-primary-green">
                My mission is simple — to help you feel empowered, balanced, and confident 
                in your own skin.
              </p>
              <p className="font-semibold">
               Your journey to wellness starts here — let's transform together.
              </p>
            </div>
            
            <div className="mt-8">
              <Link href="#programs" className="btn btn-primary">
                Join My 30-Day Transformation Program
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
