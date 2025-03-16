
import React from 'react';
import { cn } from '@/lib/utils';

interface SupportMethodProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const SupportMethod: React.FC<SupportMethodProps> = ({ 
  title, 
  description, 
  icon,
  className 
}) => {
  return (
    <div className={cn("flex gap-4 items-start p-6 bg-white rounded-lg shadow-md", className)}>
      <div className="text-theme-purple bg-theme-purple-light p-3 rounded-full">
        {icon}
      </div>
      
      <div>
        <h3 className="text-xl font-alegreya font-black mb-2 text-theme-purple-dark">
          {title}
        </h3>
        
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SupportMethod;
