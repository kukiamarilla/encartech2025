import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-black text-foreground">
            ENCAR
          </div>
          <div className="w-6 h-6 bg-encar-orange rounded"></div>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-foreground hover:text-encar-orange transition-colors font-medium">
            INICIO
          </a>
          <a href="#evento" className="text-foreground hover:text-encar-orange transition-colors font-medium">
            SOBRE EL EVENTO
          </a>
          <a href="#agenda" className="text-foreground hover:text-encar-orange transition-colors font-medium">
            AGENDA
          </a>
          <a href="#speakers" className="text-foreground hover:text-encar-orange transition-colors font-medium">
            SPEAKERS
          </a>
          <a href="#sponsors" className="text-foreground hover:text-encar-orange transition-colors font-medium">
            SPONSORS
          </a>
        </div>

        {/* CTA Button */}
        <Button 
          variant="encar" 
          size="lg"
          className="hidden sm:inline-flex"
        >
          REGISTRARSE
        </Button>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </nav>
    </header>
  );
};

export default Header;