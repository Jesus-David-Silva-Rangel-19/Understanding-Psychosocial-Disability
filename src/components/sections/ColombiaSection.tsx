
import React from 'react';
import Section from '@/components/Section';
import Quote from '@/components/Quote';

const ColombiaSection: React.FC = () => {
  return (
    <Section id="colombia" title="Recursos en Colombia">
      <p className="text-center max-w-3xl mx-auto mb-10">
        Colombia ofrece diversos recursos para personas con discapacidades psicosociales. Aquí hay algunos recursos específicos disponibles en el país.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Entidades Gubernamentales</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Ministerio de Salud y Protección Social - Programa de Atención Psicosocial</li>
            <li>Instituto Colombiano de Bienestar Familiar (ICBF)</li>
            <li>Secretarías de Salud Departamentales y Municipales</li>
            <li>Registro para la Localización y Caracterización de Personas con Discapacidad (RLCPD)</li>
          </ul>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Fundaciones y ONGs</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Fundación Saldarriaga Concha</li>
            <li>Red Colombiana de Organizaciones de Personas con Discapacidad</li>
            <li>Asociación Colombiana de Personas con Esquizofrenia y sus Familias</li>
            <li>Fundación País Posible - Programas de salud mental</li>
            <li>Corporación Síndrome de Down</li>
          </ul>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Servicios de Salud Mental</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Línea de Atención Psicológica: 106</li>
            <li>Centro de Atención Psicosocial (CAP) - varias ciudades</li>
            <li>EPS/IPS con servicios especializados en salud mental</li>
            <li>Hospital Mental de Antioquia</li>
            <li>Clínica Montserrat (Bogotá)</li>
            <li>Hospital Psiquiátrico Universitario del Valle</li>
          </ul>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Derechos y Marco Legal</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Ley 1616 de 2013 - Ley de Salud Mental</li>
            <li>Ley 1618 de 2013 - Derechos de las personas con discapacidad</li>
            <li>Política Nacional de Salud Mental (Resolución 4886 de 2018)</li>
            <li>Defensoría del Pueblo - Defensoría Delegada para la Salud</li>
            <li>Superintendencia Nacional de Salud - para quejas del sistema de salud</li>
          </ul>
        </div>
      </div>
      
      <Quote 
        text="En Colombia, estamos avanzando en el reconocimiento de los derechos de las personas con discapacidades psicosociales, pero aún queda mucho camino por recorrer en términos de acceso a servicios, inclusión social y eliminación del estigma."
        author="Asociación Colombiana de Psiquiatría"
        className="my-12"
      />
    </Section>
  );
};

export default ColombiaSection;
