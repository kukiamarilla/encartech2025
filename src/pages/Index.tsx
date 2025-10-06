import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection"; 
import EventInfoSection from "@/components/EventInfoSection";
import AgendaSection from "@/components/AgendaSection";
import SpeakersSection from "@/components/SpeakersSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <EventInfoSection />
      <AgendaSection />
      <SpeakersSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
};

export default Index;
