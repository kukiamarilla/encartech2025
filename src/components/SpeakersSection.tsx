import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg"; 
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "GLORIA ORTEGA",
      image: speaker1
    },
    {
      name: "CARLOS MENDEZ", 
      image: speaker2
    },
    {
      name: "ANA RODRIGUEZ",
      image: speaker3
    },
    {
      name: "DAVID SANTOS",
      image: speaker4
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-encar-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-encar-orange font-semibold text-lg mb-4">
            18 OCT, 2025
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground">
            SPEAKERS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-hero transition-all duration-300 group-hover:scale-105">
                {/* Speaker Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={speaker.image}
                    alt={`Speaker ${speaker.name} en ENCARTECH 2025`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Blue Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-encar-blue"></div>
                
                {/* Speaker Name */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-sm tracking-wide">
                    {speaker.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-3">
          <div className="w-3 h-3 bg-encar-orange rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;