const AgendaSection = () => {
  const scheduleData = [
    {
      time: "8:00 AM",
      charla: {
        title: "Acreditaciones",
        description:
          "Acreditaciones de los participantes",
      },
      taller1: {
        title:
          "Acreditaciones",
        description:
          "Acreditaciones de los participantes",
      },
    },
    {
      time: "8:30 AM",
      charla: {
        title: "Key Note",
        description:
          "Apertura del evento",
      },
      taller1: {
        title:
          "Palabras de Bienvenida",
        description:
          "Apertura del Evento",
      },
    },
    {
      time: "9:00 AM - 10 AM",
      charla: {
        title: "PANEL: Cómo los Bootcamps Impulsan el Talento Digital. Penguin Academy - Programando+ - ProgramandoPy",
        description:
          "Este panel se sumerge en la Revolución del Talento, explorando cómo el nuevo estándar de formación intensiva está redefiniendo las carreras y cerrando la brecha de habilidades en Latam. Analizaremos la eficacia, el rigor y las proyecciones futuras de un modelo educativo que construye el profesional digital del mañana, hoy.",
      },
      taller1: {
        title:
          "TALLER: Hacker's Playground: Laboratorio de Ataques y Contramedidas - Hector Aguirre",
        description:
          "Laboratorio de Ataques y Contramedidas. Vea el hacking en vivo. Aprenda la mentalidad del atacante para blindar y defender su infraestructura.",
      },
    },
    {
      time: "10:00 AM - 11:00 AM",
      charla: {
        title:
          "CHARLA: Evolución del LowCode: del prototipo rápido al VibeCoding con IA - Juan Manuel Alonso",
        description:
          "Automatice el Desarrollo: LowCode y desarrollo con IA son la clave para acelerar sus prototipos, reducir riesgos y democratizar la creación de software",
      },
      taller1: {
        title:
          "CHARLA: Innovar con propósito: diseñando soluciones tecnológicas para problemas reales - Analia Arguello",
        description:
          "En esta charla descubriremos cómo la tecnología puede transformar ideas en soluciones que mejoran la vida de las personas...",
      },
    },
  ];

  const morningBreak = { time: "11:00 a 13:00", title: "Break" };

  const afternoonData = [
    {
      time: "13:00 APM",
      charla: {
        title: "Acreditaciones",
        description:
          "Acreditaciones de los participantes",
      },
      taller1: {
        title:
          "Acreditaciones",
        description:
          "Acreditaciones de los participantes",
      },
    },
    {
      time: "13:30 PM - 14:20 PM",
      charla: {
        title: "PANEL: Oportunidades en LATAM",
        description:
          "Una oportunidad para conocer cómo identificar oportunidades, adaptarse a diferentes mercados y generar impacto en América Latina desde una perspectiva práctica y real.",
      },
      taller1: {
        title: "OWASP para la era de la Inteligencia Artificial: nuevas amenazas, nuevos desafíos - Koki Dure",
        description: "Esta charla explora cómo la evolución de la Inteligencia Artificial está generando nuevas vulnerabilidades y desafíos en seguridad digital. Se analizarán riesgos emergentes, buenas prácticas para mitigarlos y cómo la comunidad OWASP adapta sus estándares y frameworks para proteger sistemas inteligentes en entornos actuales.",
      },
    },
    {
      time: "14:20 PM - 15:20 PM",
      charla: {
        title: "PANEL: Conversando sobre IA en Paraguay: Ética, leyes e impacto",
        description:
          "Reúne a expertos para analizar cómo la inteligencia artificial está transformando la sociedad y los negocios en Paraguay...",
      },
      taller1: {
        title:
          "TALLER: Inteligencia Artificial: El presente de la productividad en tu negocio - Rocío Janette Vázquez González ",
        description:
          "Muestra cómo la IA puede potenciar la eficiencia y el rendimiento en las empresas...",
      },
    },
  ];

  const coffeeBreak = { time: "15:20 a 15:50", title: "Coffee Break" };

  const afternoonExtraData = [
    {
      time: "15:50 PM - 16:50 PM",
      charla: {
        title:
          "Panel: Startup Stories: El Lado Humano de la Innovación Paraguaya",
        description:
          "Reúne a emprendedores locales y nacionales para compartir sus historias, aprendizajes y desafíos detrás de la creación de startups en Paraguay...",
      },
      taller1: {
        title: "Charla: Ciberseguridad 101: Principios, Modelado de Amenazas y Buenas Prácticas -  Marcelo Elizeche Lando",
        description:
          "Es una introducción práctica al mundo de la seguridad digital...",
      },
    },
    {
      time: "16:50 PM - 17:30 PM",
      charla: {
        title: "Inteligencia artificial y transformación tecnológica - Sergio Pulido",
        description:
          "Esta charla aborda cómo la Inteligencia Artificial está revolucionando industrias, procesos y servicios, impulsando la transformación tecnológica en empresas y organizaciones. Se explorarán casos de uso, tendencias actuales y cómo las tecnologías inteligentes pueden optimizar operaciones, potenciar la innovación y generar ventajas competitivas.",
      },
      taller1: {
        title: "Taller: De la idea a la validación de negocio - Giselle Ramirez",
        description:
          "Es un taller práctico diseñado para guiar a emprendedores y profesionales en el proceso de transformar una idea en un negocio viable...",
      },
    },
    {
      time: "17:50 PM - 18:50 PM",
      charla: {
        title: "Panel La Estrategia del Capital: Claves para Escalar tu Startup",
        description:
          "Es un panel donde expertos compartirán estrategias para obtener financiamiento, gestionar recursos y tomar decisiones clave...",
      },
      taller1: {
        title: "Charla Diseñar para Adoptar: Usabilidad y Crecimiento en Productos Digitales - Alberto Samaniego",
        description:
          "Es una charla que explora cómo el diseño centrado en el usuario impulsa la adopción y el crecimiento de productos digitales...",
      },
    },
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

  const renderBreak = (breakObj: { time: string; title: string }) => (
    <div className="border-t border-gray-200">
      <div className="lg:hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <span className="font-semibold text-sm text-foreground">{breakObj.time}</span>
        </div>
        <div className="p-6 bg-gray-200 text-center">
          <span className="font-bold text-lg text-foreground">{breakObj.title}</span>
        </div>
      </div>
      <div className="hidden lg:grid lg:grid-cols-4">
        <div className="p-6 bg-gray-50 border-r border-gray-200 flex items-center">
          <span className="font-semibold text-sm text-foreground whitespace-nowrap">{breakObj.time}</span>
        </div>
        <div className="col-span-3 p-6 bg-gray-200 flex items-center justify-center">
          <span className="font-bold text-lg text-foreground">{breakObj.title}</span>
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
          {scheduleData.map((row) => renderRow(row))}

          {/* Morning Break */}
          {renderBreak(morningBreak)}

          {/* Afternoon Schedule */}
          {afternoonData.map((row) => renderRow(row))}

          {/* Coffee Break */}
          {renderBreak(coffeeBreak)}

          {/* Afternoon Extra Schedule */}
          {afternoonExtraData.map((row) => renderRow(row))}

          {/* After Party */}
          {renderBreak(afterParty)}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
