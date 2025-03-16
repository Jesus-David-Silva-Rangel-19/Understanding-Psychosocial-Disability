
import React from 'react';
import { Heart, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("w-full bg-theme-purple-dark text-white py-6 text-center", className)}>
      <div className="flex items-center justify-center gap-2 font-labrada">
        <span>Created with</span>
        <Heart className="h-5 w-5 text-red-400 fill-red-400" />
        <span>by Jesús David Silva Rangel</span>
        <Rocket className="h-5 w-5 text-theme-blue" />
      </div>
    </footer>
  );
};

export default Footer;
