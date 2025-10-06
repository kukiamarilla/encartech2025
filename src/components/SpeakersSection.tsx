import { useState, useEffect } from "react";
import speaker1 from "../assets/speaker-1.jpg";
import speaker2 from "../assets/speaker-2.jpg";
import speaker3 from "../assets/speaker-3.jpg";
import speaker4 from "../assets/speaker-4.jpg";
import speaker5 from "../assets/speaker-5.jpg";
import speaker6 from "../assets/speaker-6.jpg";
import speaker7 from "../assets/speaker-7.jpg";
import speaker8 from "../assets/speaker-8.jpg";
import speaker9 from "../assets/speaker-9.jpg";
import speaker10 from "../assets/speaker-10.jpg";
import speaker11 from "../assets/speaker-11.jpg";
import speaker12 from "../assets/speaker-12.jpg";
import speaker13 from "../assets/speaker-13.jpg";
import speaker14 from "../assets/speaker-14.jpg";
import speaker15 from "../assets/speaker-15.jpg";
import speaker16 from "../assets/speaker-16.jpg";
import speaker17 from "../assets/speaker-17.jpg";
import speaker18 from "../assets/speaker-18.jpg";


const SpeakersSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const allSpeakers = [
    
    
    {
      name: "Juan Manuel Alonso",
      topic: "+25 años en la industria Tech, Mentor de Startups - Reva",
      image: speaker5
    },
    {
      name: "Luciano Boggiano",
      topic: "Investment Analyst - IThinkVC",
      image: speaker8
    },
    {
      name: "Hector Aguirre", 
      topic: "+35 años como Especialista en Ciberseguridad - LNX NETWORK",
      image: speaker4
    },
    {
      name: "Marcelo Elizeche Lando",
      topic: "Senior Software Engineer - Authentik Security",
      image: speaker16
    },
    {
      name: "Astrid Sanz",
      topic: "Directora de Innovando Paraguay - MITIC",
      image: speaker7
    },
    {
      name: "Rocio Vazquez",
      topic: "Especialista en Neuromarketing e Inteligencia Artificial - Publia",
      image: speaker11
    },
    {
      name: "Fernanda Carles",
      topic: "Especialista en ciencias de datos, MLOps, Machine Learning - Girls Code",
      image: speaker6
    },
    {
      name: "Abel Ledezma",
      topic: "Especialista en Sistemas Escalables y Growth Tech Mindset - Mas Money",
      image: speaker13
    },
    
    {
      name: "Linda Riquelme",
      topic: "Coordinadora Académica - Programando+",
      image: speaker1
    },
     
    
    
    {
      name: "Kuki Amarilla",
      topic: "Software Developer, Project Manager, CTO y CEO de WebParaguay - Plub",
      image: speaker10
    },
     {
      name: "Giselle Ramirez",
      topic: "MSc en Innovación, creatividad y Liderezgo, - Fintech, Más Money",
      image: speaker17
    },
    {
      name: "Lucas Fronciani",
      topic: "Desarrollador Web y Mobil - EIEN",
      image: speaker12
    },
    
    {
      name: "Alejandro Nuñez",
      topic: "Master en ciencias de Ingenieria - CEO Smartsoil",
      image: speaker14
    },
    {
      name: "Analia Britez",
      topic: "Head of Learning Resources - Penguin Academy",
      image: speaker2
    },
     {
      name: "Katya Vazquez",
      topic: " Desarrolladora de Software - ITTI",
      image: speaker3
    },
    {
      name: "Milena Isasi",
      topic: "Desarrolladora Web, Mkt Digital  - Founder Agendapp",
      image: speaker15
    },
    
   
    {
      name: "Alberto Samaniego",
      topic: "Design Manager & Product Strategist -  55 Design",
     
    },
    
  ];

  const speakersPerPage = 6; // 2 rows x 3 columns
  const totalPages = Math.ceil(allSpeakers.length / speakersPerPage);

  // Create pages array for carousel
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    const startIndex = i * speakersPerPage;
    pages.push(allSpeakers.slice(startIndex, startIndex + speakersPerPage));
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevPage();
      } else if (event.key === 'ArrowRight') {
        nextPage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Enhanced Touch/Mouse Drag support
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragEnd, setDragEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const minSwipeDistance = 30; // Reduced for better responsiveness

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    setDragEnd(null);
    setDragStart(e.targetTouches[0].clientX);
    setIsDragging(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setDragEnd(e.targetTouches[0].clientX);
    if (dragStart) {
      const distance = Math.abs(dragStart - e.targetTouches[0].clientX);
      if (distance > 10) {
        setIsDragging(true);
      }
    }
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragEnd(null);
    setDragStart(e.clientX);
    setIsMouseDown(true);
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    
    setDragEnd(e.clientX);
    if (dragStart) {
      const distance = Math.abs(dragStart - e.clientX);
      if (distance > 10) {
        setIsDragging(true);
      }
    }
  };

  const onMouseUp = () => {
    if (isMouseDown) {
      handleDragEnd();
      setIsMouseDown(false);
    }
  };

  const onMouseLeave = () => {
    if (isMouseDown) {
      setIsMouseDown(false);
      setIsDragging(false);
    }
  };

  // Common drag end handler
  const handleDragEnd = () => {
    if (!dragStart || !dragEnd) {
      setIsDragging(false);
      return;
    }
    
    const distance = dragStart - dragEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextPage();
    } else if (isRightSwipe) {
      prevPage();
    }
    
    setIsDragging(false);
  };

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

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevPage}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center hover:bg-encar-orange hover:text-white transition-all duration-300 group"
            aria-label="Previous page"
          >
            <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextPage}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-12 h-12 bg-white shadow-lg rounded-full items-center justify-center hover:bg-encar-orange hover:text-white transition-all duration-300 group"
            aria-label="Next page"
          >
            <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Viewport */}
          <div 
            className={`overflow-hidden py-8 cursor-grab active:cursor-grabbing ${isDragging ? 'select-none' : ''}`}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((pageData, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-16 py-4">
                    {pageData.map((speaker, speakerIndex) => (
                      <div key={`${pageIndex}-${speakerIndex}`} className="group relative">
                        {/* Blue Background Frame */}
                        <div className="absolute bg-encar-blue z-0" style={{
                          top: '-5%',
                          height: '110%',
                          left: '20%',
                          width: '75%'
                        }}></div>
                        
                        <div className="relative z-10 shadow-card hover:shadow-hero transition-all duration-300 group-hover:scale-105 max-w-[240px] mx-auto">
                          {/* Speaker Image Container */}
                          <div className="aspect-[4/5] overflow-hidden bg-white">
                            <img 
                              src={speaker.image}
                              alt={`Speaker ${speaker.name} en ENCARTECH 2025`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          
                          {/* Speaker Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                            <div className="text-white">
                              <p className="text-sm font-semibold mb-1 tracking-wider opacity-90">
                                {speaker.topic}
                              </p>
                              <h3 className="text-lg font-black tracking-wide leading-tight">
                                {speaker.name}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                currentPage === index 
                  ? 'bg-encar-orange' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        
        
        {/* Mobile Swipe Hint */}
        <div className="md:hidden text-center mt-2 text-xs text-gray-500">
          👆 Desliza para navegar
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;