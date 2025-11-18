import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GallerySection } from './components/GallerySection';
import { MotifDetail } from './components/MotifDetail';
import { AIAssistant } from './components/AIAssistant';
import { CreateSection } from './components/CreateSection';
import { Marketplace } from './components/Marketplace';
import { Footer } from './components/Footer';

interface Motif {
  id: string;
  name: string;
  region: string;
  image: string;
}

type Section = 'home' | 'gallery' | 'ai' | 'create' | 'marketplace';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [selectedMotif, setSelectedMotif] = useState<Motif | null>(null);

  const handleNavigate = (section: string) => {
    setCurrentSection(section as Section);
    setSelectedMotif(null);
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMotif = (motif: Motif) => {
    setSelectedMotif(motif);
  };

  const handleCloseMotif = () => {
    setSelectedMotif(null);
  };

  // Scroll to section when currentSection changes
  useEffect(() => {
    const sectionId = `section-${currentSection}`;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-[#F2E8D5]">
      <Header onNavigate={handleNavigate} />
      
      {/* Hero Section - Always visible on home */}
      {currentSection === 'home' && (
        <div id="section-home">
          <Hero onNavigate={handleNavigate} />
        </div>
      )}
      
      {/* Gallery Section */}
      {(currentSection === 'home' || currentSection === 'gallery') && (
        <div id="section-gallery">
          <GallerySection onSelectMotif={handleSelectMotif} />
        </div>
      )}
      
      {/* AI Assistant Section */}
      {(currentSection === 'home' || currentSection === 'ai') && (
        <div id="section-ai">
          <AIAssistant />
        </div>
      )}
      
      {/* Create Section */}
      {(currentSection === 'home' || currentSection === 'create') && (
        <div id="section-create">
          <CreateSection />
        </div>
      )}
      
      {/* Marketplace Section */}
      {(currentSection === 'home' || currentSection === 'marketplace') && (
        <div id="section-marketplace">
          <Marketplace />
        </div>
      )}
      
      {/* Footer - Always visible */}
      <Footer onNavigate={handleNavigate} />
      
      {/* Motif Detail Modal */}
      {selectedMotif && (
        <MotifDetail motif={selectedMotif} onClose={handleCloseMotif} />
      )}
    </div>
  );
}
