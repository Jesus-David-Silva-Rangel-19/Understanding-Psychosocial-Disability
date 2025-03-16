
import React from 'react';
import Section from '@/components/Section';
import DisorderCard from '@/components/DisorderCard';

const DisordersSection: React.FC = () => {
  return (
    <Section id="disorders" title="Trastornos Más Frecuentes">
      <p className="text-center max-w-3xl mx-auto mb-10">
        Los siguientes están entre las condiciones de salud mental más comunes que pueden conducir a discapacidad psicosocial. Haz clic en cada uno para obtener más información.
      </p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <DisorderCard
          title="Trastorno Depresivo Mayor"
          description="Un trastorno del estado de ánimo caracterizado por sentimientos persistentes de tristeza, desesperanza y pérdida de interés en las actividades. Afecta significativamente el funcionamiento diario y la calidad de vida."
          prevalence="Afecta aproximadamente a 264 millones de personas en todo el mundo."
        />
        
        <DisorderCard
          title="Trastornos de Ansiedad"
          description="Incluyen trastorno de ansiedad generalizada, trastorno de pánico, fobias, trastorno de ansiedad social y otros. Implican miedo o preocupación excesivos que interfieren con las actividades diarias."
          prevalence="Los trastornos mentales más comunes a nivel mundial, afectando a 284 millones de personas."
        />
        
        <DisorderCard
          title="Trastorno Bipolar"
          description="Caracterizado por períodos alternados de depresión y manía o hipomanía. Estos cambios de humor pueden afectar significativamente la energía, la actividad y la capacidad de funcionar."
          prevalence="Afecta aproximadamente a 45 millones de personas en todo el mundo."
        />
        
        <DisorderCard
          title="Esquizofrenia"
          description="Un trastorno mental grave caracterizado por distorsiones en el pensamiento, la percepción, las emociones, el lenguaje, el sentido del yo y el comportamiento. Puede incluir alucinaciones y delirios."
          prevalence="Afecta aproximadamente a 20 millones de personas en todo el mundo."
        />
        
        <DisorderCard
          title="Trastorno de Estrés Postraumático (TEPT)"
          description="Se desarrolla en algunas personas que han experimentado un evento impactante, aterrador o peligroso. Los síntomas pueden incluir flashbacks, pesadillas, ansiedad severa y pensamientos incontrolables sobre el evento."
          prevalence="La prevalencia de vida varía del 1% al 14% dependiendo de los factores sociales."
        />
        
        <DisorderCard
          title="Trastorno Obsesivo-Compulsivo (TOC)"
          description="Caracterizado por pensamientos y miedos irrazonables (obsesiones) que conducen a comportamientos repetitivos (compulsiones). Estas obsesiones y compulsiones interfieren con las actividades diarias y causan un malestar significativo."
          prevalence="Afecta aproximadamente al 1-3% de la población general."
        />
      </div>
    </Section>
  );
};

export default DisordersSection;
