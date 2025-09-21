const AgendaSection = () => {
  const scheduleData = [
    {
      time: "9:00 AM - 9:30 AM",
      charla: {
        title: "CHARLA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam consectetur."
      },
      taller1: {
        title: "TALLER",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam."
      },
      taller2: {
        title: "TALLER", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam."
      }
    },
    {
      time: "10:00 AM - 10:30 AM",
      charla: {
        title: "CHARLA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam consectetur."
      },
      taller1: {
        title: "TALLER",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam."
      },
      taller2: {
        title: "TALLER",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam."
      }
    }
  ];

  const breakTime = {
    time: "11:00 AM - 11:30 AM",
    title: "BREAK"
  };

  const afternoonData = [
    {
      time: "12:00 PM - 12:30 PM", 
      charla: {
        title: "CHARLA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam consectetur."
      },
      taller1: {
        title: "TALLER",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam."
      },
      taller2: {
        title: "TALLER",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam."
      }
    },
    {
      time: "1:00 PM - 1:30 PM",
      charla: {
        title: "CHARLA", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam consectetur."
      },
      taller1: {
        title: "TALLER",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam."
      },
      taller2: {
        title: "TALLER",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam."
      }
    }
  ];

  const afterParty = {
    time: "3:00 PM - 5:00 PM",
    title: "AFTER"
  };

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-encar-orange font-semibold text-lg mb-4">
            18 OCT, 2025
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground">
            AGENDA
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-0">
          {/* Schedule Rows */}
          {scheduleData.map((row, index) => (
            <div key={index} className="grid grid-cols-4 border-t border-gray-200">
              {/* Time */}
              <div className="p-6 bg-gray-50 border-r border-gray-200 flex items-center">
                <span className="font-semibold text-sm text-foreground transform -rotate-90 whitespace-nowrap">
                  {row.time}
                </span>
              </div>

              {/* Charla */}
              <div className="p-6 border-r border-gray-200">
                <h4 className="font-bold text-foreground mb-2">{row.charla.title}</h4>
                <p className="text-sm text-muted-foreground">{row.charla.description}</p>
              </div>

              {/* Taller 1 */}
              <div className="p-6 border-r border-gray-200">
                <h4 className="font-bold text-foreground mb-2">{row.taller1.title}</h4>
                <p className="text-sm text-muted-foreground">{row.taller1.description}</p>
              </div>

              {/* Taller 2 */}
              <div className="p-6">
                <h4 className="font-bold text-foreground mb-2">{row.taller2.title}</h4>
                <p className="text-sm text-muted-foreground">{row.taller2.description}</p>
              </div>
            </div>
          ))}

          {/* Break Row */}
          <div className="grid grid-cols-4 border-t border-gray-200">
            <div className="p-6 bg-gray-50 border-r border-gray-200 flex items-center">
              <span className="font-semibold text-sm text-foreground transform -rotate-90 whitespace-nowrap">
                {breakTime.time}
              </span>
            </div>
            <div className="col-span-3 p-6 bg-gray-200 flex items-center justify-center">
              <span className="font-bold text-lg text-foreground">{breakTime.title}</span>
            </div>
          </div>

          {/* Afternoon Schedule */}
          {afternoonData.map((row, index) => (
            <div key={index} className="grid grid-cols-4 border-t border-gray-200">
              <div className="p-6 bg-gray-50 border-r border-gray-200 flex items-center">
                <span className="font-semibold text-sm text-foreground transform -rotate-90 whitespace-nowrap">
                  {row.time}
                </span>
              </div>
              <div className="p-6 border-r border-gray-200">
                <h4 className="font-bold text-foreground mb-2">{row.charla.title}</h4>
                <p className="text-sm text-muted-foreground">{row.charla.description}</p>
              </div>
              <div className="p-6 border-r border-gray-200">
                <h4 className="font-bold text-foreground mb-2">{row.taller1.title}</h4>
                <p className="text-sm text-muted-foreground">{row.taller1.description}</p>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-foreground mb-2">{row.taller2.title}</h4>
                <p className="text-sm text-muted-foreground">{row.taller2.description}</p>
              </div>
            </div>
          ))}

          {/* After Party Row */}
          <div className="grid grid-cols-4 border-t border-gray-200">
            <div className="p-6 bg-gray-50 border-r border-gray-200 flex items-center">
              <span className="font-semibold text-sm text-foreground transform -rotate-90 whitespace-nowrap">
                {afterParty.time}
              </span>
            </div>
            <div className="col-span-3 p-6 bg-gray-200 flex items-center justify-center">
              <span className="font-bold text-lg text-foreground">{afterParty.title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;