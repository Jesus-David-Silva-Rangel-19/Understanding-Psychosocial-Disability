
import React from 'react';
import Section from '@/components/Section';
import SupportMethod from '@/components/SupportMethod';
import FaqItem from '@/components/FaqItem';
import { Brain, Heart, Users, Book, MessageSquare, Search } from 'lucide-react';

const SupportSection: React.FC = () => {
  return (
    <Section id="support" title="Apoyo y Ayuda" color="light">
      <p className="text-center max-w-3xl mx-auto mb-10">
        Existen varios enfoques y recursos disponibles para apoyar a personas con discapacidades psicosociales. Un enfoque integrado y centrado en la persona a menudo produce los mejores resultados.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <SupportMethod
          icon={<Brain className="h-6 w-6" />}
          title="Terapia y Consejería"
          description="Varios enfoques terapéuticos como la Terapia Cognitivo-Conductual (TCC), la Terapia Dialéctica Conductual (TDC) y la psicoterapia pueden ayudar a manejar los síntomas y mejorar las habilidades de afrontamiento."
        />
        
        <SupportMethod
          icon={<Heart className="h-6 w-6" />}
          title="Medicación"
          description="Cuando es prescrita y monitoreada por proveedores de atención médica calificados, la medicación puede ser efectiva para manejar los síntomas de muchas condiciones de salud mental."
        />
        
        <SupportMethod
          icon={<Users className="h-6 w-6" />}
          title="Apoyo entre Pares"
          description="Conectarse con otros que tienen experiencias similares puede proporcionar validación, esperanza, consejos prácticos y reducir los sentimientos de aislamiento."
        />
        
        <SupportMethod
          icon={<Book className="h-6 w-6" />}
          title="Educación"
          description="Aprender sobre la propia condición, desencadenantes y estrategias de manejo empodera a las personas para tomar un papel activo en su recuperación."
        />
        
        <SupportMethod
          icon={<MessageSquare className="h-6 w-6" />}
          title="Apoyo Comunitario"
          description="Grupos de apoyo, centros comunitarios de salud mental y organizaciones de defensa pueden proporcionar recursos valiosos y conexiones."
        />
        
        <SupportMethod
          icon={<Search className="h-6 w-6" />}
          title="Adaptaciones Razonables"
          description="Las adaptaciones en el lugar de trabajo y educativas pueden ayudar a eliminar barreras para la participación y el éxito en estos entornos."
        />
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-2xl font-alegreya font-black mb-4 text-theme-purple-dark text-center">
          Preguntas Frecuentes
        </h3>
        
        <div className="max-w-3xl mx-auto">
          <FaqItem
            question="¿Cómo sé si necesito ayuda profesional?"
            answer="Si tus síntomas de salud mental están causando un malestar significativo o interfiriendo con tu vida diaria, relaciones o trabajo durante más de dos semanas, es una buena idea consultar a un profesional de salud mental. Confía en tus instintos: si sientes que algo anda mal, busca ayuda."
          />
          
          <FaqItem
            question="¿Cuál es la diferencia entre un psiquiatra y un psicólogo?"
            answer="Los psiquiatras son médicos que pueden recetar medicamentos y diagnosticar condiciones de salud mental. Los psicólogos típicamente tienen doctorados en psicología y proporcionan terapia y consejería pero generalmente no pueden recetar medicamentos (con algunas excepciones)."
          />
          
          <FaqItem
            question="¿Siempre es necesaria la medicación?"
            answer="No, la medicación no siempre es necesaria. Los planes de tratamiento deben ser individualizados basados en la condición específica, su gravedad y las preferencias de la persona. Muchas personas se benefician solo de la terapia o de una combinación de terapia y cambios en el estilo de vida."
          />
          
          <FaqItem
            question="¿Cómo puedo apoyar a un ser querido con una discapacidad psicosocial?"
            answer="Escucha sin juzgar, edúcate sobre su condición, fomenta el tratamiento, sé paciente y consistente, respeta su autonomía, cuídate a ti mismo y ofrece ayuda práctica. Recuerda que la recuperación no es lineal y los retrocesos son parte del proceso."
          />
        </div>
      </div>
    </Section>
  );
};

export default SupportSection;
