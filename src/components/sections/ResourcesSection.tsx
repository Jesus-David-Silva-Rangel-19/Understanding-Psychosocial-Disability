
import React from 'react';
import Section from '@/components/Section';

const ResourcesSection: React.FC = () => {
  return (
    <Section id="resources" title="Recursos" color="light">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Líneas de Ayuda de Crisis</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Línea Nacional de Prevención del Suicidio: 106</li>
            <li>Línea de Crisis por Texto: Envía AYUDA al 741741</li>
            <li>Línea de Ayuda Nacional: 01-8000-113113</li>
          </ul>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Organizaciones</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Asociación Colombiana de Psiquiatría</li>
            <li>Liga Colombiana Contra la Epilepsia</li>
            <li>Fundación CEPYTIN</li>
            <li>Asociación Colombiana de Bienestar Mental</li>
          </ul>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Recursos Digitales</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>MinSalud.gov.co</li>
            <li>Directorio de Terapeutas de Psicología Hoy</li>
            <li>Aplicaciones de mindfulness (Headspace, Calm)</li>
            <li>Plataformas de terapia en línea (TherapyRoute, Doctoralia)</li>
          </ul>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Libros</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>"El cuerpo lleva la cuenta" de Bessel van der Kolk</li>
            <li>"Sentirse bien" de David D. Burns</li>
            <li>"Cerebro bajo control" de Jeffrey M. Schwartz (para TOC)</li>
            <li>"Una mente inquieta" de Kay Redfield Jamison</li>
          </ul>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Defensa</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Federación Mundial para la Salud Mental</li>
            <li>Disability Rights International</li>
            <li>Human Rights Watch - Derechos de Discapacidad</li>
            <li>Grupos locales de defensa de la salud mental</li>
          </ul>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Educación</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Cursos de Primeros Auxilios en Salud Mental</li>
            <li>Recursos del Instituto Nacional de Salud Mental</li>
            <li>Publicaciones de la Organización Mundial de la Salud</li>
            <li>Programas de extensión universitaria sobre salud mental</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default ResourcesSection;
