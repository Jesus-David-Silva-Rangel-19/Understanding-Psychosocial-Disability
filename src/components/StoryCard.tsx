
import React from 'react';
import { cn } from '@/lib/utils';

interface StoryCardProps {
  title: string;
  excerpt: string;
  author: string;
  imagePath?: string;
  className?: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ 
  title, 
  excerpt, 
  author,
  imagePath,
  className 
}) => {
  return (
    <div className={cn("card-highlight overflow-hidden", className)}>
      {imagePath && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imagePath} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-alegreya font-black mb-2 text-theme-purple-dark">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <p className="text-sm text-theme-gray font-medium">
          By {author}
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
