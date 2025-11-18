import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A1A2F] to-[#1a2f4a] pt-20">
      {/* Floating Batik Shapes Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#D4A056] blur-3xl animate-float"
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#8B5A2B] blur-3xl animate-float-slow"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <h1 
            className="text-[#F2E8D5] mb-6"
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            Temukan Makna,<br />Ciptakan Batikmu.
          </h1>
          
          <p 
            className="text-[#F2E8D5]/90 max-w-3xl mx-auto mb-12"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.25rem',
              lineHeight: 1.8
            }}
          >
            Platform kreatif untuk memahami filosofi batik, menjelajah motif Nusantara, 
            hingga merancang karya batik versimu sendiri.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => onNavigate('gallery')}
              size="lg"
              className="bg-[#D4A056] hover:bg-[#c49046] text-[#0A1A2F] px-8 py-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', fontWeight: 600 }}
            >
              Jelajahi Motif Nusantara
            </Button>
            <Button 
              onClick={() => onNavigate('ai')}
              size="lg"
              variant="outline"
              className="border-2 border-[#D4A056] text-[#F2E8D5] hover:bg-[#D4A056]/20 px-8 py-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', fontWeight: 600 }}
            >
              Desain Dengan AI
            </Button>
          </div>
        </div>

        {/* Decorative Pattern Elements */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-4xl mx-auto opacity-30">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-24 bg-[#D4A056]/30 rounded-lg backdrop-blur-sm animate-fade-in-up"
              style={{
                animationDelay: `${i * 0.2}s`,
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212, 160, 86, 0.1) 10px, rgba(212, 160, 86, 0.1) 20px)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-[#D4A056] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#D4A056] rounded-full" />
        </div>
      </div>
    </section>
  );
}
