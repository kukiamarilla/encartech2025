import { Button } from "@/components/ui/button";
import eventImage from "@/assets/event-info-image.jpg";

const EventInfoSection = () => {
  return (
    <section id="evento" className="py-20 bg-encar-light-gray relative overflow-hidden">
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Yellow Half Circles - Right Side */}
        <div className="absolute bottom-20 -right-20 w-40 h-80 bg-encar-yellow rounded-l-full opacity-40"></div>
        <div className="absolute bottom-40 -right-10 w-32 h-64 bg-encar-yellow rounded-l-full opacity-30"></div>
        <div className="absolute bottom-60 right-0 w-24 h-48 bg-encar-yellow rounded-l-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-card">
              <img 
                src={eventImage} 
                alt="Profesional de tecnología en ENCARTECH 2025" 
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Gradient Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-encar-orange/20 via-encar-yellow/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-encar-orange font-semibold text-lg">
                18 OCT, 2025
              </p>
              
              <h2 className="text-4xl lg:text-5xl font-black text-foreground">
                SOBRE EL
                <br />
                EVENTO
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam consectetur adipisicing elit. Quisque facilibus est sapien vitae pellentesque enim aliquam.
              </p>
            </div>
            
            <Button 
              variant="encar" 
              size="lg"
              className="shadow-card"
            >
              REGISTRARSE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfoSection;