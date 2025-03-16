
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section id="top" className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-theme-purple to-theme-blue opacity-10 z-0"></div>
      
      <div className="relative section-container flex flex-col items-center justify-center min-h-[70vh] z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center max-w-4xl mb-6 text-theme-purple-dark">
          Entendiendo la Discapacidad Psicosocial
        </h1>
        
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-10 text-gray-600">
          Una perspectiva sobre las condiciones de salud mental y su impacto en el funcionamiento diario
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#what-is" 
            className="bg-theme-purple hover:bg-theme-purple-dark text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
          >
            Aprender Más
          </a>
          <a 
            href="#support" 
            className="bg-white text-theme-purple border border-theme-purple hover:bg-theme-purple-light font-medium py-3 px-6 rounded-full transition-colors duration-300"
          >
            Encontrar Apoyo
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
