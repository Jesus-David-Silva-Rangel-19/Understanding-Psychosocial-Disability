
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface DisorderCardProps {
  title: string;
  description: string;
  prevalence: string;
  className?: string;
}

const DisorderCard: React.FC<DisorderCardProps> = ({ 
  title, 
  description, 
  prevalence,
  className 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "card-interactive cursor-pointer",
        isExpanded && "bg-gradient-to-br from-theme-purple-light to-theme-blue-light",
        className
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h3 className="text-xl font-alegreya font-black mb-2 text-theme-purple-dark">
        {title}
      </h3>
      
      {isExpanded ? (
        <div className="animate-fade-in">
          <p className="mb-4 text-gray-700">{description}</p>
          <p className="text-sm font-medium text-theme-purple">
            Prevalence: {prevalence}
          </p>
        </div>
      ) : (
        <p className="text-gray-500 text-sm">Click to learn more...</p>
      )}
    </div>
  );
};

export default DisorderCard;
