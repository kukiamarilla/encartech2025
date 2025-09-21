import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vr-person.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-encar-light-gray to-white">
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple Star Shape - Top Right */}
        <div className="absolute top-20 right-10 w-64 h-64 transform rotate-12">
          <div className="w-full h-full bg-gradient-to-br from-encar-purple to-purple-400 opacity-80" 
               style={{
                 clipPath: 'polygon(50% 0%, 67% 33%, 100% 33%, 78% 58%, 89% 91%, 50% 75%, 11% 91%, 22% 58%, 0% 33%, 33% 33%)'
               }}>
          </div>
        </div>

        {/* Blue Organic Shapes - Bottom Right */}
        <div className="absolute bottom-20 right-0 w-96 h-48">
          <div className="absolute bottom-0 right-0 w-32 h-24 bg-encar-blue rounded-full opacity-80"></div>
          <div className="absolute bottom-8 right-16 w-24 h-16 bg-encar-blue rounded-full opacity-60"></div>
          <div className="absolute bottom-16 right-32 w-16 h-12 bg-encar-blue rounded-full opacity-40"></div>
        </div>

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
              className="w-full max-w-md mx-auto rounded-2xl shadow-hero"
            />
          </div>
          
          {/* Decorative elements around image */}
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-encar-yellow rounded-full opacity-60"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-encar-purple rounded-full opacity-80"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;