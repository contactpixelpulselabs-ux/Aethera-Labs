// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg" // Ensure your image is in /public/hero-bg.jpg
          alt="Circuit board background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Engineering <br className="hidden md:block" /> 
            Tomorrow&apos;s Realities.
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light">
            We sculpt the invisible forces of technology into tangible experiences.
          </p>

          <div className="pt-4">
            <button className="group flex items-center gap-2 mx-auto bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white px-8 py-3 rounded-full transition-all duration-300 ease-in-out">
              <span className="text-sm font-medium">Explore the Labs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Label (Bottom Left) */}
      <div className="absolute bottom-10 left-6 md:left-12 z-10 text-left">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">
          Precision Engineering
        </p>
        <p className="text-xs md:text-sm text-white/80 font-medium">
          The Core of Innovation
        </p>
      </div>

      {/* Scroll Indicator (Center Bottom) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;