
import React from 'react';
import Section from '@/components/Section';
import Quote from '@/components/Quote';

const WhatIsSection: React.FC = () => {
  return (
    <Section id="what-is" title="¿Qué es la Discapacidad Psicosocial?">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p>
            Una discapacidad psicosocial se refiere a una discapacidad que surge cuando las condiciones de salud mental interactúan con barreras sociales. A diferencia de una visión puramente médica de la enfermedad mental, la discapacidad psicosocial reconoce las importantes dimensiones sociales de la discapacidad y el impacto de los obstáculos sociales que enfrentan las personas con condiciones de salud mental.
          </p>
          <p>
            Estas discapacidades surgen de la interacción entre las condiciones de salud mental y diversos factores sociales, creando barreras para la participación en la sociedad en igualdad de condiciones con los demás.
          </p>
        </div>
        <div className="space-y-4">
          <p>
            La Convención sobre los Derechos de las Personas con Discapacidad (CDPD) reconoce que la discapacidad es un concepto en evolución que resulta de la interacción entre las personas con deficiencias y las barreras actitudinales y ambientales que impiden su participación plena y efectiva en la sociedad.
          </p>
          <p>
            Las discapacidades psicosociales pueden ser temporales o permanentes, episódicas o continuas, y pueden variar en gravedad. Pueden afectar el pensamiento, la percepción, el estado de ánimo, la personalidad y las relaciones de una persona.
          </p>
        </div>
      </div>
      
      <Quote 
        text="La discapacidad psicosocial va más allá del modelo médico para considerar cómo la sociedad crea barreras para las personas con condiciones de salud mental."
        author="Organización Mundial de la Salud"
        className="my-12"
      />
      
      <div className="mt-8">
        <h3 className="text-2xl font-alegreya font-black mb-4 text-theme-purple-dark">
          Relación con la Salud Mental
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-highlight p-6">
            <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Superposición</h4>
            <p>Las condiciones de salud mental pueden conducir a discapacidades psicosociales cuando interactúan con barreras sociales, pero no todas las condiciones de salud mental resultan en discapacidad. La gravedad, la duración y el contexto social juegan roles importantes.</p>
          </div>
          <div className="card-highlight p-6">
            <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Distinción</h4>
            <p>Mientras que la salud mental se centra en los aspectos médicos y psicológicos de una condición, la discapacidad psicosocial enfatiza los impactos sociales y funcionales, incluidas las experiencias de discriminación, exclusión y barreras para la participación.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhatIsSection;
