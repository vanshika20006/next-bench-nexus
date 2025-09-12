import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import EventsSection from "@/components/sections/EventsSection";
import OutreachSection from "@/components/sections/OutreachSection";
import AgencySection from "@/components/sections/AgencySection";
import Footer from "@/components/sections/Footer";
import JoinModal from "@/components/sections/JoinModal";

const Index = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <Navbar onJoinClick={() => setIsJoinModalOpen(true)} />
      <HeroSection onJoinClick={() => setIsJoinModalOpen(true)} />
      <AboutSection />
      <TeamSection />
      <EventsSection />
      <OutreachSection />
      <AgencySection />
      <Footer />
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </div>
  );
};

export default Index;
