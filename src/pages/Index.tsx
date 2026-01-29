import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { PolemarchWelcome } from '@/components/PolemarchWelcome';
import { AboutSection } from '@/components/AboutSection';
import { FoundersSection } from '@/components/FoundersSection';
import { JournalSection } from '@/components/JournalSection';
import { BrothersSection } from '@/components/BrothersSection';
import { LineageSection } from '@/components/LineageSection';
import { ServiceSection } from '@/components/ServiceSection';
import { GallerySection } from '@/components/GallerySection';
import { ContactSection } from '@/components/ContactSection';
import { AntiHazingSection } from '@/components/AntiHazingSection';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const Index = () => {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <PolemarchWelcome />
      <AboutSection />
      <FoundersSection />
      <JournalSection />
      <BrothersSection />
      <LineageSection />
      <ServiceSection />
      <GallerySection />
      <ContactSection />
      <AntiHazingSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
