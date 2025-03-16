
import React from 'react';
import Section from '@/components/Section';
import Quote from '@/components/Quote';

const OcdSection: React.FC = () => {
  return (
    <Section id="ocd" title="El Papel del TOC en la Discapacidad Psicosocial">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-alegreya font-black mb-4 text-theme-purple-dark">
            Entendiendo el TOC
          </h3>
          <p className="mb-4">
            El Trastorno Obsesivo-Compulsivo (TOC) se caracteriza por pensamientos no deseados e intrusivos (obsesiones) y comportamientos repetitivos o actos mentales (compulsiones) que las personas sienten la necesidad de realizar para reducir la ansiedad o prevenir un evento temido.
          </p>
          <p className="mb-4">
            El TOC puede interferir significativamente con las actividades diarias y las interacciones sociales. El tiempo consumido por las obsesiones y compulsiones, junto con el malestar que causan, puede conducir a una discapacidad sustancial.
          </p>
          <p>
            Las obsesiones comunes incluyen miedo a la contaminación, necesidad de simetría o exactitud, miedo al daño y pensamientos agresivos o tabú no deseados. Las compulsiones comunes incluyen limpieza excesiva, verificación, conteo, organización y búsqueda de reaseguramiento.
          </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-alegreya font-black mb-4 text-theme-purple-dark">
            Impacto en el Funcionamiento
          </h3>
          <div className="space-y-4">
            <div className="card-highlight p-4">
              <h4 className="text-lg font-bold mb-2 text-theme-blue">Funcionamiento Social</h4>
              <p>El TOC puede llevar al aislamiento social, relaciones tensas y reducción de la participación en actividades sociales debido al tiempo dedicado a rituales o miedo a desencadenar obsesiones.</p>
            </div>
            
            <div className="card-highlight p-4">
              <h4 className="text-lg font-bold mb-2 text-theme-blue">Funcionamiento Ocupacional</h4>
              <p>El TOC puede afectar el desempeño laboral, la asistencia y las oportunidades de avance. Algunas personas pueden evitar ciertos trabajos o responsabilidades que desencadenan su TOC.</p>
            </div>
            
            <div className="card-highlight p-4">
              <h4 className="text-lg font-bold mb-2 text-theme-blue">Vida Diaria</h4>
              <p>Actividades básicas como comer, aseo personal y tareas domésticas pueden volverse consumidoras de tiempo y complicadas debido a rituales y obsesiones.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Quote 
        text="El TOC no se trata solo de ser ordenado o particular. Es una condición seria donde pensamientos no deseados y rituales pueden tomar el control de la vida de una persona y conducir a una discapacidad significativa."
        author="Fundación Internacional de TOC"
        className="my-12"
      />
      
      <div>
        <h3 className="text-2xl font-alegreya font-black mb-6 text-theme-purple-dark text-center">
          Tratamientos Efectivos para el TOC
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-highlight p-6">
            <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Exposición y Prevención de Respuesta (EPR)</h4>
            <p>Un tipo de terapia cognitivo-conductual que implica enfrentar gradualmente los miedos sin realizar rituales, permitiendo que la ansiedad disminuya naturalmente con el tiempo.</p>
          </div>
          
          <div className="card-highlight p-6">
            <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Medicación</h4>
            <p>Los inhibidores selectivos de la recaptación de serotonina (ISRS) se recetan comúnmente y pueden ser efectivos para reducir los síntomas del TOC, especialmente cuando se combinan con terapia.</p>
          </div>
          
          <div className="card-highlight p-6">
            <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Grupos de Apoyo</h4>
            <p>Conectarse con otros que entienden los desafíos del TOC puede proporcionar un valioso apoyo emocional y consejos prácticos para manejar la condición.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OcdSection;
