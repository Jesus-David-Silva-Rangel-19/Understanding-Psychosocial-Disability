
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full bg-theme-purple text-white py-3 text-center", className)}>
      <p className="font-labrada text-sm md:text-base italic">
        Este sitio fue creado por un paciente con discapacidad psicosocial.
      </p>
    </header>
  );
};

export default Header;
