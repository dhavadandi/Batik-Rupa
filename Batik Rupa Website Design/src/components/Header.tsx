import { Menu } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F2E8D5]/95 backdrop-blur-sm border-b border-[#D4A056]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <h1 
            className="text-[#D4A056] tracking-wider transition-all"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700 }}
          >
            BATIK RUPA
          </h1>
        </button>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <button 
            onClick={() => onNavigate('gallery')}
            className="text-[#0A1A2F] hover:text-[#8B5A2B] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Galeri Motif Nusantara
          </button>
          <button 
            onClick={() => onNavigate('ai')}
            className="text-[#0A1A2F] hover:text-[#8B5A2B] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            AI Penata Batik
          </button>
          <button 
            onClick={() => onNavigate('create')}
            className="text-[#0A1A2F] hover:text-[#8B5A2B] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Kreasi Batikmu
          </button>
          <button 
            onClick={() => onNavigate('marketplace')}
            className="text-[#0A1A2F] hover:text-[#8B5A2B] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Marketplace Karya
          </button>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button 
            onClick={() => onNavigate('gallery')}
            className="hidden lg:inline-flex bg-[#8B5A2B] hover:bg-[#6B4521] text-white px-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Mulai Jelajah
          </Button>
          
          {/* Mobile Menu */}
          <button className="lg:hidden p-2 text-[#0A1A2F]">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
