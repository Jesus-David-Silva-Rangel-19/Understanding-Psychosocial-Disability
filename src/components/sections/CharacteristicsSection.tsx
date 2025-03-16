
import React from 'react';
import Section from '@/components/Section';

const CharacteristicsSection: React.FC = () => {
  return (
    <Section id="characteristics" title="Características de la Discapacidad Psicosocial" color="light">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Naturaleza Fluctuante</h3>
          <p>Las discapacidades psicosociales a menudo tienen una naturaleza episódica. Los síntomas y el funcionamiento pueden variar con el tiempo, con períodos de mayor dificultad y períodos de bienestar.</p>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Discapacidad Invisible</h3>
          <p>A menudo no es inmediatamente aparente para los demás, lo que lleva a malentendidos sobre la validez y la gravedad de la discapacidad.</p>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Barreras Sociales</h3>
          <p>Las barreras ambientales y actitudinales pueden empeorar significativamente la discapacidad. El estigma y la discriminación son barreras sociales particularmente comunes.</p>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Impacto Funcional</h3>
          <p>Puede afectar varios dominios de funcionamiento, incluido el autocuidado, las interacciones sociales, la concentración, la adaptabilidad y la capacidad para mantener un empleo.</p>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Orientado a la Recuperación</h3>
          <p>La recuperación es posible y común. La recuperación puede no significar ausencia de síntomas, sino más bien un mejor manejo y calidad de vida.</p>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Experiencias Diversas</h3>
          <p>La experiencia de cada persona es única, moldeada por su condición específica, atributos personales y entorno social.</p>
        </div>
      </div>
    </Section>
  );
};

export default CharacteristicsSection;
