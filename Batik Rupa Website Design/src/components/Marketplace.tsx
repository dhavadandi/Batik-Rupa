import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Heart, ShoppingBag } from 'lucide-react';

interface MarketplaceItem {
  id: string;
  image: string;
  title: string;
  creator: string;
  price: number | null;
  likes: number;
}

const marketplaceItems: MarketplaceItem[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1761516659539-20ec6f407ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMHBhdHRlcm4lMjBpbmRvbmVzaWFufGVufDF8fHx8MTc2MzQ2OTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Batik Modern Geometris',
    creator: 'Rina Wijaya',
    price: null,
    likes: 124
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1761516659497-8478e39d2b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMGZhYnJpYyUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc2MzQ2OTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Kawung Kontemporer',
    creator: 'Budi Santoso',
    price: 250000,
    likes: 89
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1666587128445-4623f8f8f033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBwYXR0ZXJufGVufDF8fHx8MTc2MzQ2OTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mega Mendung Fusion',
    creator: 'Siti Nurhaliza',
    price: 180000,
    likes: 156
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1762111067760-1f0fc2aa2866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMGRlc2lnbiUyMG9ybmFtZW50fGVufDF8fHx8MTc2MzQ2OTIyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Batik Minimalis Urban',
    creator: 'Ahmad Fauzi',
    price: null,
    likes: 203
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1761516659902-2994696b362e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMG1vdGlmJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjM0NjkyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Floral Heritage',
    creator: 'Dewi Kusuma',
    price: 320000,
    likes: 167
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1761516659766-c092d4b1209d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhdGlrJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYzNDY5MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Traditional Reborn',
    creator: 'Yanto Prasetyo',
    price: 195000,
    likes: 98
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1760457356908-807c70c1ebd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMHNoaXJ0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjM0NjkyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Parang Street Style',
    creator: 'Lisa Permata',
    price: null,
    likes: 276
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1761516659539-20ec6f407ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMHBhdHRlcm4lMjBpbmRvbmVzaWFufGVufDF8fHx8MTc2MzQ2OTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Nusantara Symphony',
    creator: 'Rudi Hermawan',
    price: 420000,
    likes: 189
  },
];

export function Marketplace() {
  const formatPrice = (price: number | null) => {
    if (price === null) return 'GRATIS';
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  const handleUseMotif = (item: MarketplaceItem) => {
    alert(`Motif "${item.title}" oleh ${item.creator} siap digunakan!`);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F2E8D5] to-white py-24 px-6">
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
            Marketplace Karya
          </h2>
          <p 
            className="text-[#8B5A2B] max-w-2xl mx-auto"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem'
            }}
          >
            Jelajahi dan gunakan desain batik dari kreator di seluruh Nusantara
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap animate-fade-in-up">
          {['Semua Karya', 'Gratis', 'Premium', 'Terpopuler'].map((tab) => (
            <button
              key={tab}
              className="px-6 py-2 rounded-full bg-white border-2 border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {marketplaceItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    className={`${
                      item.price === null 
                        ? 'bg-[#D4A056] text-[#0A1A2F]' 
                        : 'bg-[#8B5A2B] text-white'
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                  >
                    {formatPrice(item.price)}
                  </Badge>
                </div>

                {/* Like Button */}
                <button className="absolute top-4 left-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors group/like">
                  <Heart className="w-5 h-5 text-[#8B5A2B] group-hover/like:fill-[#8B5A2B]" />
                </button>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 
                  className="text-[#0A1A2F] mb-2 line-clamp-1"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.15rem',
                    fontWeight: 600
                  }}
                >
                  {item.title}
                </h3>
                
                <p 
                  className="text-[#8B5A2B] text-sm mb-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  oleh {item.creator}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4A056]">
                    <Heart className="w-4 h-4 fill-current" />
                    <span 
                      className="text-sm"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                    >
                      {item.likes}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => handleUseMotif(item)}
                  className="w-full bg-[#8B5A2B] hover:bg-[#6B4521] text-white"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Gunakan Motif Ini
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 animate-fade-in">
          <Button
            variant="outline"
            className="border-2 border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white px-8 py-6"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', fontWeight: 600 }}
          >
            Muat Lebih Banyak
          </Button>
        </div>
      </div>
    </section>
  );
}
