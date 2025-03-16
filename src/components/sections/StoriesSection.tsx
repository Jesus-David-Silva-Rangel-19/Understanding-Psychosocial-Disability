
import React from 'react';
import Section from '@/components/Section';
import StoryCard from '@/components/StoryCard';
import { Info } from 'lucide-react';

const StoriesSection: React.FC = () => {
  return (
    <Section id="stories" title="Experiencias Personales">
      <p className="text-center max-w-3xl mx-auto mb-10">
        Las narrativas personales pueden proporcionar información, esperanza y un sentido de conexión. Aquí hay algunas historias de personas que viven con discapacidades psicosociales.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <StoryCard
          title="Encontrando Mi Voz"
          excerpt="Después de años de silencio, finalmente encontré el valor para hablar sobre mis experiencias con el trastorno bipolar. Lo que comenzó como un diario personal se convirtió en una plataforma para la defensa y la conexión con otros que estaban luchando de manera similar."
          author="María T."
        />
        
        <StoryCard
          title="Trabajando a Través de Ello"
          excerpt="Navegar por el lugar de trabajo con ansiedad severa no fue fácil. Pero con las adaptaciones adecuadas y un gerente comprensivo, he podido prosperar en mi carrera a pesar de los desafíos."
          author="Jaime L."
        />
        
        <StoryCard
          title="El Poder de la Comunidad"
          excerpt="Cuando me diagnosticaron TOC y Trastorno Bipolar, me sentí aislado y asustado. Encontrar una comunidad de personas que entendían por lo que estaba pasando lo cambió todo. Ahora ayudo a otros a encontrar sus propias comunidades de apoyo."
          author="David R."
        />
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg text-theme-purple-dark mb-6">
          Tu historia importa. Compartir experiencias puede ayudar a reducir el estigma e inspirar a otros.
        </p>
        
        <a 
          href="#" 
          className="bg-theme-purple hover:bg-theme-purple-dark text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 inline-flex items-center"
        >
          <Info className="mr-2 h-5 w-5" />
          Comparte Tu Historia
        </a>
      </div>
    </Section>
  );
};

export default StoriesSection;
