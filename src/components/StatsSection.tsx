const StatsSection = () => {
  const stats = [
    {
      number: "+300",
      label: "PARTICIPANTES"
    },
    {
      number: "+22", 
      label: "SPEAKERS"
    },
    {
      number: "+15",
      label: "CHARLAS Y TALLERES"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-4">
              <div className="text-6xl lg:text-7xl font-black text-encar-orange stats-text">
                {stat.number}
              </div>
              <div className="text-sm font-semibold tracking-wider text-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;