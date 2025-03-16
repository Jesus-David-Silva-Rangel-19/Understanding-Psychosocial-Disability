import React from 'react';
import { Brain, Heart, Users, Book, MessageSquare, Search, Info, HandHeart, FileCheck } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import DisorderCard from '@/components/DisorderCard';
import FaqItem from '@/components/FaqItem';
import Quote from '@/components/Quote';
import StoryCard from '@/components/StoryCard';
import SupportMethod from '@/components/SupportMethod';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <Hero />
        
        {/* ¿Qué es la Discapacidad Psicosocial? */}
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
        
        {/* Características */}
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
        
        {/* Trastornos Comunes */}
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
        
        {/* Apoyo y Ayuda */}
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
        
        {/* TOC y Discapacidad Psicosocial */}
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
        
        {/* Recursos Generales */}
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

        {/* Recursos en Colombia */}
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
        
        {/* Otras Discapacidades */}
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
        
        {/* Diagnóstico */}
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
        
        {/* Experiencias Personales */}
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;

