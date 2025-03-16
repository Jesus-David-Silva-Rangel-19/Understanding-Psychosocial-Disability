
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  color?: 'default' | 'light' | 'dark';
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children, 
  className,
  color = 'default'
}) => {
  const bgColorClass = 
    color === 'light' ? 'bg-theme-gray-light' : 
    color === 'dark' ? 'bg-theme-purple-dark text-white' : 
    'bg-white';

  return (
    <section id={id} className={cn(bgColorClass, className)}>
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl mb-8 text-center">
          {title}
        </h2>
        <div className="animate-fade-in">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
