
import React from 'react';
import { Brain, Heart, Users, Book, MessageSquare, Search, Info, HandHeart, FileCheck } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

// Import section components
import HeroSection from '@/components/sections/HeroSection';
import WhatIsSection from '@/components/sections/WhatIsSection';
import CharacteristicsSection from '@/components/sections/CharacteristicsSection';
import DisordersSection from '@/components/sections/DisordersSection';
import SupportSection from '@/components/sections/SupportSection';
import OcdSection from '@/components/sections/OcdSection';
import ResourcesSection from '@/components/sections/ResourcesSection';
import ColombiaSection from '@/components/sections/ColombiaSection';
import OtherDisabilitiesSection from '@/components/sections/OtherDisabilitiesSection';
import DiagnosisSection from '@/components/sections/DiagnosisSection';
import StoriesSection from '@/components/sections/StoriesSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <WhatIsSection />
        <CharacteristicsSection />
        <DisordersSection />
        <SupportSection />
        <OcdSection />
        <ResourcesSection />
        <ColombiaSection />
        <OtherDisabilitiesSection />
        <DiagnosisSection />
        <StoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
