import React from "react";

const AgendaSection = () => {
  const scheduleData = [
    {
      time: "9:00 AM - 10 AM",
      charla: {
        title: "PANEL: Cómo los Bootcamps Impulsan el Talento Digital",
        description:
          "Este panel se sumerge en la Revolución del Talento, explorando cómo el nuevo estándar de formación intensiva está redefiniendo las carreras y cerrando la brecha de habilidades en Latam. Analizaremos la eficacia, el rigor y las proyecciones futuras de un modelo educativo que construye el profesional digital del mañana, hoy.",
      },
      taller1: {
        title:
          "TALLER: Hacker's Playground: Laboratorio de Ataques y Contramedidas",
        description:
          "Laboratorio de Ataques y Contramedidas. Vea el hacking en vivo. Aprenda la mentalidad del atacante para blindar y defender su infraestructura.",
      },
    },
    {
      time: "10:00 AM - 11:00 AM",
      charla: {
        title:
          "CHARLA: Evolución del LowCode: del prototipo rápido al VibeCoding con IA",
        description:
          "Automatice el Desarrollo: LowCode y desarrollo con IA son la clave para acelerar sus prototipos, reducir riesgos y democratizar la creación de software",
      },
      taller1: {
        title:
          "CHARLA: IA para Predicción en Tiempo Real: Lecciones del Proyecto Respira",
        description:
          "Una inmersión en la aplicación práctica de la Inteligencia Artificial para resolver problemas de impacto social en Paraguay. Fernanda Carlés, líder de Proyecto Respira, compartirá cómo su equipo utilizó algoritmos de machine learning y datos abiertos para crear una plataforma que predice la calidad del aire. Es un caso de estudio sobre innovación open source, gestión de datos complejos y la capacidad de la IA para generar alertas accionables que protegen la salud pública.",
      },
    },
  ];

  const afternoonData = [
    {
      time: "13:30 PM - 14:20 PM",
      charla: {
        title: "PANEL: Oportunidades en LATAM",
        description:
          "Una oportunidad para conocer cómo identificar oportunidades, adaptarse a diferentes mercados y generar impacto en América Latina desde una perspectiva práctica y real.",
      },
      taller1: {
        title: "CHARLA: Crowdllama: LLMs y P2P",
        description:
          "Descubrí cómo los modelos de lenguaje (LLMs) y las redes P2P se unen para crear apps innovadoras, descentralizadas y colaborativas. En 'Crowdllama: LLMs y P2P' vas a conocer casos reales y oportunidades para llevar tus proyectos al próximo nivel.",
      },
    },
    {
      time: "14:20 PM - 15:20 PM",
      charla: {
        title: "PANEL: Conversando sobre IA en Paraguay: Ética, leyes e impacto",
        description:
          "Reúne a expertos para analizar cómo la inteligencia artificial está transformando la sociedad y los negocios en Paraguay. Se discutirán aspectos éticos, marcos legales y el impacto real de la IA, buscando generar un diálogo sobre su uso responsable y beneficioso para la región.",
      },
      taller1: {
        title:
          "TALLER: Inteligencia Artificial: El presente de la productividad en tu negocio",
        description:
          "Muestra cómo la IA puede potenciar la eficiencia y el rendimiento en las empresas, explorando herramientas, casos prácticos y estrategias para aprovechar al máximo su impacto en la productividad.",
      },
    },
  ];

  const breakTime = {
    time: "15:20 PM - 15:50 PM",
    title: "BREAK",
  };

  // 👇 Aquí agregás la info nueva que quieras mostrar después del break
  const afternoonExtraData = [
    {
      time: "15:50 PM - 16:50 PM",
      charla: {
        title: "Panel: Startup Stories: El Lado Humano de la Innovación Paraguaya: ",
        description: "Reúne a emprendedores locales y nacionales para compartir sus historias, aprendizajes y desafíos detrás de la creación de startups en Paraguay. Una mirada cercana al esfuerzo, la creatividad y la pasión que impulsan la innovación en el país.",
      },
      taller1: {
        title: "Charla: Ciberseguridad 101: Principios, Modelado de Amenazas y Buenas Prácticas",
        description: "Es una introducción práctica al mundo de la seguridad digital. Los participantes aprenderán conceptos clave, cómo identificar y modelar amenazas, y estrategias efectivas para proteger sistemas, datos y operaciones en entornos digitales.",
      },
    },
    {
      time: "16:50 PM - 17:30 PM",
      charla: {
        title: "Panel de la empresa ITTI ",
        description: "Una de las empresas más innovadoras y en auge del sector tecnológico en Paraguay, compartirá su visión sobre el futuro de la tecnología, sus proyectos más destacados y cómo impulsa la innovación en el país. Una oportunidad para conocer de primera mano las estrategias y aprendizajes que los posicionan como referentes en el ecosistema tech local",
      },
      taller1: {
        title: "Taller: De la idea a la validación de negocio",
        description: "Es un taller práctico diseñado para guiar a emprendedores y profesionales en el proceso de transformar una idea en un negocio viable. Se explorarán metodologías de validación, herramientas para testear el mercado y estrategias para asegurar que tu proyecto tenga un impacto real y sostenible.",
      },
    },
    {
      time: "17:50 PM - 18:50 PM",
      charla: {
        title: "Panel La Estrategia del Capital: Claves para Escalar tu Startup",
        description: "Es un panel donde expertos compartirán estrategias para obtener financiamiento, gestionar recursos y tomar decisiones clave que permitan escalar una startup. Una oportunidad para aprender cómo estructurar el crecimiento y potenciar el impacto de tu emprendimiento.",
      },
      taller1: {
        title: "Charla Diseñar para Adoptar: Usabilidad y Crecimiento en Productos Digitales",
        description: "es una charla que explora cómo el diseño centrado en el usuario impulsa la adopción y el crecimiento de productos digitales. Se abordarán principios de usabilidad, estrategias de experiencia de usuario y tácticas para maximizar la retención y satisfacción de los clientes.",
    },
    }
  ];

  const afterParty = {
    time: "19:00 PM - 20:30 PM",
    title: "CIERRE Y AFTER PARTY",
  };

  const renderRow = (row: any) => (
    <div className="border-t border-gray-200">
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <span className="font-semibold text-sm text-foreground">{row.time}</span>
        </div>
        <div className="space-y-4 p-4">
          <div className="border-l-4 border-encar-orange pl-4">
            <h4 className="font-bold text-foreground mb-2">{row.charla.title}</h4>
            <p className="text-sm text-muted-foreground">{row.charla.description}</p>
          </div>
          <div className="border-l-4 border-encar-blue pl-4">
            <h4 className="font-bold text-foreground mb-2">{row.taller1.title}</h4>
            <p className="text-sm text-muted-foreground">{row.taller1.description}</p>
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-3">
        <div className="p-6 bg-gray-50 border-r border-gray-200 flex items-center">
          <span className="font-semibold text-sm text-foreground transform -rotate-90 whitespace-nowrap">{row.time}</span>
        </div>
        <div className="p-6 border-r border-gray-200">
          <h4 className="font-bold text-foreground mb-2">{row.charla.title}</h4>
          <p className="text-sm text-muted-foreground">{row.charla.description}</p>
        </div>
        <div className="p-6">
          <h4 className="font-bold text-foreground mb-2">{row.taller1.title}</h4>
          <p className="text-sm text-muted-foreground">{row.taller1.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-encar-orange font-semibold text-lg mb-4">18 OCT, 2025</p>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground">AGENDA</h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-0">
          {/* Morning Schedule */}
          {scheduleData.map((row, index) => renderRow(row))}

          {/* Afternoon Schedule (antes del break) */}
          {afternoonData.map((row, index) => renderRow(row))}

          {/* Break */}
          <div className="border-t border-gray-200">
            <div className="lg:hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <span className="font-semibold text-sm text-foreground">{breakTime.time}</span>
              </div>
              <div className="p-6 bg-gray-200 text-center">
                <span className="font-bold text-lg text-foreground">{breakTime.title}</span>
              </div>
            </div>
            <div className="hidden lg:grid lg:grid-cols-4">
              <div className="p-6 bg-gray-50 border-r border-gray-200 flex items-center">
                <span className="font-semibold text-sm text-foreground whitespace-nowrap">{breakTime.time}</span>
              </div>
              <div className="col-span-3 p-6 bg-gray-200 flex items-center justify-center">
                <span className="font-bold text-lg text-foreground">{breakTime.title}</span>
              </div>
            </div>
          </div>

          {/* Afternoon Extra Schedule (después del break) */}
          {afternoonExtraData.map((row, index) => renderRow(row))}

          {/* After Party */}
          <div className="border-t border-gray-200">
            <div className="lg:hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <span className="font-semibold text-sm text-foreground">{afterParty.time}</span>
              </div>
              <div className="p-6 bg-gray-200 text-center">
                <span className="font-bold text-lg text-foreground">{afterParty.title}</span>
              </div>
            </div>
            <div className="hidden lg:grid lg:grid-cols-4">
              <div className="p-6 bg-gray-50 border-r border-gray-200 flex items-center">
                <span className="font-semibold text-sm text-foreground whitespace-nowrap">{afterParty.time}</span>
              </div>
              <div className="col-span-3 p-6 bg-gray-200 flex items-center justify-center">
                <span className="font-bold text-lg text-foreground">{afterParty.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
