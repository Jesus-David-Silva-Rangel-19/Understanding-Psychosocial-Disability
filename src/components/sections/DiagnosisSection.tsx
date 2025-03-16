
import React from 'react';
import Section from '@/components/Section';
import Quote from '@/components/Quote';

const DiagnosisSection: React.FC = () => {
  return (
    <Section id="diagnosis" title="Identificación y Diagnóstico">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-alegreya font-black mb-4 text-theme-purple-dark">
            Cómo se Identifica una Discapacidad Psicosocial
          </h3>
          <p className="mb-4">
            La identificación de una discapacidad psicosocial implica reconocer cuándo una condición de salud mental interactúa con barreras sociales para limitar significativamente la participación de una persona en la sociedad.
          </p>
          <p className="mb-4">
            A diferencia de un diagnóstico puramente médico, evaluar una discapacidad psicosocial requiere considerar:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>El impacto funcional en la vida diaria, trabajo, educación y relaciones</li>
            <li>La duración y severidad de las limitaciones</li>
            <li>Las barreras ambientales y actitudinales que enfrenta la persona</li>
            <li>Las necesidades de apoyo y adaptaciones</li>
          </ul>
          <p>
            La evaluación generalmente es realizada por un equipo interdisciplinario que puede incluir psiquiatras, psicólogos, trabajadores sociales y especialistas en rehabilitación.
          </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-alegreya font-black mb-4 text-theme-purple-dark">
            Proceso de Diagnóstico
          </h3>
          <div className="space-y-4">
            <div className="card-highlight p-4">
              <h4 className="text-lg font-bold mb-2 text-theme-blue">Evaluación Clínica</h4>
              <p>Un profesional de salud mental realiza una evaluación exhaustiva que incluye historia clínica, síntomas actuales, historial familiar y examen del estado mental.</p>
            </div>
            
            <div className="card-highlight p-4">
              <h4 className="text-lg font-bold mb-2 text-theme-blue">Evaluación Funcional</h4>
              <p>Evalúa cómo la condición afecta la capacidad de la persona para realizar actividades diarias, trabajar, estudiar y mantener relaciones.</p>
            </div>
            
            <div className="card-highlight p-4">
              <h4 className="text-lg font-bold mb-2 text-theme-blue">Herramientas Diagnósticas</h4>
              <p>Se utilizan manuales como el DSM-5 o CIE-11 para diagnosticar condiciones específicas, junto con escalas de evaluación funcional para medir el impacto en la vida diaria.</p>
            </div>
            
            <div className="card-highlight p-4">
              <h4 className="text-lg font-bold mb-2 text-theme-blue">Evaluación Contextual</h4>
              <p>Identifica las barreras sociales, actitudinales y ambientales que interactúan con la condición y contribuyen a la discapacidad.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-2xl font-alegreya font-black mb-6 text-theme-purple-dark text-center">
          Lo Que NO Es una Discapacidad Psicosocial
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-highlight p-6">
            <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Estrés Temporal</h4>
            <p>Experimentar estrés por eventos de la vida como períodos de duelo, conflictos laborales o problemas de relación no constituye una discapacidad psicosocial a menos que sea prolongado, severo y cause impedimentos funcionales significativos.</p>
          </div>
          
          <div className="card-highlight p-6">
            <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Diferencias de Personalidad</h4>
            <p>Rasgos de personalidad como introversión, sensibilidad emocional o pensamiento analítico no son discapacidades, sino variaciones normales del carácter humano.</p>
          </div>
          
          <div className="card-highlight p-6">
            <h4 className="text-xl font-alegreya font-black mb-3 text-theme-blue">Desacuerdo con Normas Sociales</h4>
            <p>Comportamientos que simplemente difieren de las normas culturales pero no causan malestar ni impedimento funcional a la persona no constituyen una discapacidad psicosocial.</p>
          </div>
        </div>
      </div>
      
      <Quote 
        text="El diagnóstico es importante, pero más importante aún es entender cómo la condición afecta la vida única de cada persona y qué apoyos específicos necesitan para participar plenamente en la sociedad."
        author="Organización Mundial de la Salud"
        className="my-12"
      />
    </Section>
  );
};

export default DiagnosisSection;
