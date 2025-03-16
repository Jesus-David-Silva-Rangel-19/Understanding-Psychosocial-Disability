
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: string;
  className?: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ 
  question, 
  answer,
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("border-b border-gray-200 py-4", className)}>
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-alegreya font-black text-theme-purple-dark">
          {question}
        </h3>
        {isOpen ? 
          <ChevronUp className="flex-shrink-0 ml-2 h-5 w-5 text-theme-purple" /> : 
          <ChevronDown className="flex-shrink-0 ml-2 h-5 w-5 text-theme-purple" />
        }
      </button>
      
      {isOpen && (
        <div className="mt-2 pr-8 animate-fade-in">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
