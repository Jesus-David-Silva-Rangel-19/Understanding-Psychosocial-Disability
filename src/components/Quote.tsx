
import React from 'react';
import { cn } from '@/lib/utils';

interface QuoteProps {
  text: string;
  author?: string;
  className?: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author, className }) => {
  return (
    <blockquote className={cn(
      "bg-gradient-to-r from-theme-purple-light to-theme-blue-light p-6 md:p-8 rounded-xl shadow-md my-12", 
      className
    )}>
      <div className="text-xl md:text-2xl italic text-gray-700 font-labrada before:content-['"'] after:content-['"']">
        {text}
      </div>
      {author && (
        <footer className="mt-4 text-right text-theme-purple-dark font-medium">
          — {author}
        </footer>
      )}
    </blockquote>
  );
};

export default Quote;
