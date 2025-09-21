import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full backdrop-blur-sm sticky top-0 z-50 bg-[#fbfbfb]">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="ENCARTECH Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Menu */}
        <div className="hidden lg:flex items-center gap-8">
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
          className="hidden lg:inline-flex"
          onClick={() => {
            window.open("https://gdg.community.dev/events/details/google-gdg-encarnacion-presents-encartech/", "_blank");
          }}
        >
          REGISTRARSE
        </Button>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="lg:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#fbfbfb] border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <a 
              href="#inicio" 
              className="block text-foreground hover:text-encar-orange transition-colors font-medium py-2"
              onClick={closeMobileMenu}
            >
              INICIO
            </a>
            <a 
              href="#evento" 
              className="block text-foreground hover:text-encar-orange transition-colors font-medium py-2"
              onClick={closeMobileMenu}
            >
              SOBRE EL EVENTO
            </a>
            <a 
              href="#agenda" 
              className="block text-foreground hover:text-encar-orange transition-colors font-medium py-2"
              onClick={closeMobileMenu}
            >
              AGENDA
            </a>
            <a 
              href="#speakers" 
              className="block text-foreground hover:text-encar-orange transition-colors font-medium py-2"
              onClick={closeMobileMenu}
            >
              SPEAKERS
            </a>
            <a 
              href="#sponsors" 
              className="block text-foreground hover:text-encar-orange transition-colors font-medium py-2"
              onClick={closeMobileMenu}
            >
              SPONSORS
            </a>
            <Button 
              variant="encar" 
              size="lg"
              className="w-full mt-4"
              onClick={() => {
                window.open("https://gdg.community.dev/events/details/google-gdg-encarnacion-presents-encartech/", "_blank");
                closeMobileMenu();
              }}
            >
              REGISTRARSE
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;