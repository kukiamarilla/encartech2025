import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vr-person.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-encar-light-gray to-white">
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Yellow Half Circles - Left Side */}
        <div className="absolute bottom-40 -left-20 w-40 h-80 bg-encar-yellow rounded-r-full opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-encar-orange font-semibold text-lg tracking-wide">
              18 OCT, 2025
            </p>
            <h1 className="text-5xl lg:text-6xl font-black text-foreground leading-tight">
              EL EVENTO TECH
              <br />
              <span className="text-encar-orange">MÁS GRANDE</span>
              <br />
              DEL SUR DEL
              <br />
              PAÍS.
            </h1>
          </div>
          
          <Button 
            variant="encar" 
            size="hero"
            className="shadow-hero"
            onClick={() => {
              window.open("https://gdg.community.dev/events/details/google-gdg-encarnacion-presents-encartech/", "_blank");
            }}
          >
            REGISTRARSE
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative z-10">
            <img 
              src={heroImage} 
              alt="Persona usando realidad virtual en ENCARTECH 2025" 
              className="w-full mx-auto"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;