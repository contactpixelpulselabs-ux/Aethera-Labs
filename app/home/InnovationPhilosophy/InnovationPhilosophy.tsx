import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const InnovationPhilosophy: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Image */}
          <div className="relative aspect-[4/3] md:aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/philosophy.jpg"
              alt="Advanced CPU engineering"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col space-y-6">
            {/* Blue accent line */}
            <div className="w-12 h-1 bg-blue-600 mb-2" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
              Innovation Philosophy
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-zinc-700 leading-tight">
              Where hardware meets soul. We fuse advanced engineering with organic design.
            </h3>
            
            <div className="space-y-4">
              <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                At Aethera, we believe that the most advanced technology is 
                indistinguishable from magic. Our approach combines rigorous 
                scientific methodology with an artist&apos;s intuition, creating 
                devices that don&apos;t just function—they feel.
              </p>
              <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                Every circuit is placed with intention, every line drawn with purpose.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="/story" 
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all duration-300 group"
              >
                Read Our Story
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InnovationPhilosophy;