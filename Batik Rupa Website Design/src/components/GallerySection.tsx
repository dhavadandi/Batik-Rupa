import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface Motif {
  id: string;
  name: string;
  region: string;
  image: string;
}

interface GallerySectionProps {
  onSelectMotif: (motif: Motif) => void;
}

const motifs: Motif[] = [
  {
    id: 'parang',
    name: 'Batik Parang',
    region: 'Yogyakarta',
    image: 'https://images.unsplash.com/photo-1761516659539-20ec6f407ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMHBhdHRlcm4lMjBpbmRvbmVzaWFufGVufDF8fHx8MTc2MzQ2OTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'kawung',
    name: 'Batik Kawung',
    region: 'Solo',
    image: 'https://images.unsplash.com/photo-1761516659497-8478e39d2b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMGZhYnJpYyUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc2MzQ2OTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'megamendung',
    name: 'Batik Megamendung',
    region: 'Cirebon',
    image: 'https://images.unsplash.com/photo-1666587128445-4623f8f8f033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBwYXR0ZXJufGVufDF8fHx8MTc2MzQ2OTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'tujuhrupa',
    name: 'Batik Tujuh Rupa',
    region: 'Pekalongan',
    image: 'https://images.unsplash.com/photo-1762111067760-1f0fc2aa2866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMGRlc2lnbiUyMG9ybmFtZW50fGVufDF8fHx8MTc2MzQ2OTIyNXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'buketan',
    name: 'Batik Buketan',
    region: 'Jawa Tengah',
    image: 'https://images.unsplash.com/photo-1761516659902-2994696b362e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMG1vdGlmJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjM0NjkyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'lasem',
    name: 'Batik Lasem Merah',
    region: 'Lasem',
    image: 'https://images.unsplash.com/photo-1761516659766-c092d4b1209d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhdGlrJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYzNDY5MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'sogan',
    name: 'Batik Sogan',
    region: 'Jawa Tengah',
    image: 'https://images.unsplash.com/photo-1760457356908-807c70c1ebd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMHNoaXJ0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjM0NjkyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'truntum',
    name: 'Batik Truntum',
    region: 'Solo',
    image: 'https://images.unsplash.com/photo-1761516659539-20ec6f407ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMHBhdHRlcm4lMjBpbmRvbmVzaWFufGVufDF8fHx8MTc2MzQ2OTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
];

export function GallerySection({ onSelectMotif }: GallerySectionProps) {
  return (
    <section className="min-h-screen bg-[#F2E8D5] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 
            className="text-[#0A1A2F] mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700
            }}
          >
            Galeri Motif Nusantara
          </h2>
          <p 
            className="text-[#8B5A2B] max-w-2xl mx-auto"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem'
            }}
          >
            Museum Batik Digital — Jelajahi Keindahan dan Makna di Balik Setiap Motif
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {motifs.map((motif, index) => (
            <div
              key={motif.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onSelectMotif(motif)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={motif.image}
                    alt={motif.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 
                    className="text-[#0A1A2F] mb-2"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.25rem',
                      fontWeight: 600
                    }}
                  >
                    {motif.name}
                  </h3>
                  <p 
                    className="text-[#8B5A2B] mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {motif.region}
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-[#D4A056] text-[#8B5A2B] hover:bg-[#D4A056] hover:text-white"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Lihat Makna
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
