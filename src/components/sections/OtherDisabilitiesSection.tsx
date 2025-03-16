
import React from 'react';
import Section from '@/components/Section';

const OtherDisabilitiesSection: React.FC = () => {
  return (
    <Section id="other-disabilities" title="Otras Discapacidades" color="light">
      <p className="text-center max-w-3xl mx-auto mb-10">
        Es importante entender que la discapacidad psicosocial es solo un tipo entre diversos tipos de discapacidades. A continuación se presentan otros tipos de discapacidades y sus características distintivas.
      </p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Discapacidad Física</h3>
          <p className="mb-4">Afecta la movilidad o capacidad física de la persona. Puede incluir parálisis, amputaciones, enfermedades como esclerosis múltiple, distrofia muscular, entre otras.</p>
          <p>Características: Limitaciones en movimiento, coordinación o destreza, posible necesidad de dispositivos de asistencia como sillas de ruedas, bastones o prótesis.</p>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Discapacidad Sensorial</h3>
          <p className="mb-4">Involucra los sentidos. Incluye discapacidad visual (ceguera total o parcial) y auditiva (sordera total o parcial).</p>
          <p>Características: Uso de sistemas alternativos de comunicación como braille o lengua de señas, posible necesidad de intérpretes o tecnología asistiva.</p>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Discapacidad Intelectual</h3>
          <p className="mb-4">Limitaciones significativas en el funcionamiento intelectual y en conducta adaptativa. Incluye condiciones como síndrome de Down y otras variaciones genéticas o del desarrollo.</p>
          <p>Características: Desarrollo más lento de habilidades cognitivas y sociales, posibles dificultades con aprendizaje abstracto o complejo, necesidad de apoyos para vida independiente.</p>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Trastornos del Espectro Autista</h3>
          <p className="mb-4">Grupo de trastornos del desarrollo que afectan la comunicación social y comportamiento. Varía en severidad y presentación.</p>
          <p>Características: Diferencias en comunicación social, patrones de comportamiento repetitivos o restringidos, posible hipersensibilidad o hiposensibilidad sensorial, preferencia por rutinas.</p>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Discapacidades del Aprendizaje</h3>
          <p className="mb-4">Trastornos neurológicos que afectan la capacidad de procesar información. Incluye dislexia, discalculia, trastorno por déficit de atención, entre otros.</p>
          <p>Características: Dificultades específicas con lectura, escritura, matemáticas o atención, a menudo con inteligencia promedio o superior en otras áreas.</p>
        </div>
        
        <div className="card-highlight p-6">
          <h3 className="text-xl font-alegreya font-black mb-3 text-theme-purple-dark">Discapacidades Múltiples</h3>
          <p className="mb-4">Combinación de dos o más tipos de discapacidades que interactúan de manera que requieren apoyos complejos e individualizados.</p>
          <p>Características: Necesidades de apoyo únicas basadas en la combinación específica de discapacidades, generalmente requieren enfoques interdisciplinarios.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-2xl font-alegreya font-black mb-4 text-theme-purple-dark text-center">
          Diferencias con la Discapacidad Psicosocial
        </h3>
        
        <p className="mb-6 text-center">
          Mientras que todas las discapacidades pueden enfrentar barreras sociales y estigma, la discapacidad psicosocial se distingue por:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-highlight p-4">
            <h4 className="text-lg font-bold mb-2 text-theme-blue">Naturaleza Invisible</h4>
            <p>Es particularmente invisible, lo que puede llevar a mayor escepticismo y estigma por parte de los demás.</p>
          </div>
          
          <div className="card-highlight p-4">
            <h4 className="text-lg font-bold mb-2 text-theme-blue">Fluctuación</h4>
            <p>Tiende a ser más fluctuante que muchas otras discapacidades, con períodos de funcionamiento completo y períodos de discapacidad significativa.</p>
          </div>
          
          <div className="card-highlight p-4">
            <h4 className="text-lg font-bold mb-2 text-theme-blue">Estigma Particular</h4>
            <p>Enfrenta un tipo particular de estigma relacionado con mitos sobre peligrosidad, debilidad de carácter o falta de voluntad.</p>
          </div>
          
          <div className="card-highlight p-4">
            <h4 className="text-lg font-bold mb-2 text-theme-blue">Interacción Social-Médica</h4>
            <p>Se encuentra en la intersección del modelo médico y social de discapacidad, con factores biológicos, psicológicos y sociales que interactúan complejamente.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OtherDisabilitiesSection;
