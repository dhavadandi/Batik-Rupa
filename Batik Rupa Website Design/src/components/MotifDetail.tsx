import { useState } from 'react';
import { X, ShoppingCart, Palette } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface Motif {
  id: string;
  name: string;
  region: string;
  image: string;
}

interface MotifDetailProps {
  motif: Motif | null;
  onClose: () => void;
}

export function MotifDetail({ motif, onClose }: MotifDetailProps) {
  const [showPurchase, setShowPurchase] = useState(false);
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [size, setSize] = useState('');

  if (!motif) return null;

  const getPhilosophy = (id: string) => {
    const philosophies: Record<string, string> = {
      parang: "Motif Parang melambangkan kekuatan, keberanian, dan perjuangan yang tidak pernah berhenti. Garis-garis diagonal menyerupai ombak laut atau lereng gunung yang curam, menggambarkan tantangan hidup yang harus dihadapi dengan keteguhan.",
      kawung: "Kawung merupakan motif klasik yang terinspirasi dari buah aren atau kolang-kaling. Motif ini melambangkan kesucian, keadilan, dan kebijaksanaan. Pola geometris simetris mencerminkan keseimbangan dan harmoni dalam kehidupan.",
      megamendung: "Motif Megamendung yang khas dengan bentuk awan bergelombang melambangkan ketenangan, kesabaran, dan kebijaksanaan. Gradasi warna mencerminkan perjalanan spiritual menuju kedamaian dan pencerahan.",
      tujuhrupa: "Batik Tujuh Rupa menggambarkan keberagaman dan kekayaan budaya. Perpaduan berbagai motif dalam satu kain melambangkan toleransi, harmoni, dan keindahan perbedaan.",
      buketan: "Motif Buketan terinspirasi dari karangan bunga yang melambangkan keindahan, kemakmuran, dan kehidupan yang berkembang. Motif ini mencerminkan pengaruh budaya Eropa yang berpadu dengan nilai lokal.",
      lasem: "Batik Lasem dengan warna merah khasnya melambangkan keberanian dan semangat hidup. Perpaduan budaya Tionghoa dan Jawa menciptakan motif yang unik dan penuh makna tentang persatuan.",
      sogan: "Batik Sogan dengan warna cokelat alami melambangkan kesederhanaan, kebijaksanaan, dan kedewasaan. Warna tanah ini mencerminkan kedekatan dengan alam dan nilai-nilai tradisional.",
      truntum: "Motif Truntum melambangkan cinta yang tumbuh kembali. Bintang-bintang kecil yang tersebar mencerminkan harapan dan cahaya cinta yang abadi."
    };
    return philosophies[id] || "Setiap motif batik memiliki makna filosofis yang dalam, mencerminkan nilai-nilai dan kearifan lokal masyarakat Indonesia.";
  };

  const getHistory = (id: string) => {
    return "Batik telah menjadi bagian integral dari budaya Indonesia sejak abad ke-12. Motif ini berkembang di keraton dan kemudian menyebar ke masyarakat luas, masing-masing dengan aturan dan filosofi tersendiri.";
  };

  const handleBuy = () => {
    setShowPurchase(true);
  };

  const handleOrder = () => {
    alert(`Pesanan untuk ${motif.name} (${gender === 'male' ? 'Pria' : 'Wanita'}, ukuran ${size}) telah diterima!`);
    setShowPurchase(false);
    setGender(null);
    setSize('');
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 z-50 overflow-y-auto animate-fade-in"
        onClick={onClose}
      >
        <div 
          className="min-h-screen flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-[#F2E8D5] rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl animate-fade-in-up"
          >
            {/* Header */}
            <div className="relative">
              <ImageWithFallback
                src={motif.image}
                alt={motif.name}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-[#0A1A2F]" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A1A2F] to-transparent p-8">
                <h2 
                  className="text-[#F2E8D5] mb-2"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2.5rem',
                    fontWeight: 700
                  }}
                >
                  {motif.name}
                </h2>
                <p 
                  className="text-[#D4A056]"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.25rem'
                  }}
                >
                  {motif.region}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Philosophy */}
              <div>
                <h3 
                  className="text-[#0A1A2F] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.75rem',
                    fontWeight: 600
                  }}
                >
                  Makna Filosofis
                </h3>
                <p 
                  className="text-[#0A1A2F]/80"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.1rem',
                    lineHeight: 1.8
                  }}
                >
                  {getPhilosophy(motif.id)}
                </p>
              </div>

              {/* History */}
              <div>
                <h3 
                  className="text-[#0A1A2F] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.75rem',
                    fontWeight: 600
                  }}
                >
                  Sejarah Singkat
                </h3>
                <p 
                  className="text-[#0A1A2F]/80"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.1rem',
                    lineHeight: 1.8
                  }}
                >
                  {getHistory(motif.id)}
                </p>
              </div>

              {/* Legend */}
              <div className="bg-[#8B5A2B]/10 rounded-lg p-6">
                <h3 
                  className="text-[#8B5A2B] mb-3"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}
                >
                  Cerita & Legenda
                </h3>
                <p 
                  className="text-[#0A1A2F]/70"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    fontStyle: 'italic'
                  }}
                >
                  Motif ini dipercaya memiliki kekuatan spiritual yang melindungi pemakainya dan membawa keberuntungan. 
                  Dalam tradisi Jawa, motif batik tertentu hanya boleh dikenakan oleh keluarga kerajaan pada acara-acara khusus.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={handleBuy}
                  className="flex-1 bg-[#8B5A2B] hover:bg-[#6B4521] text-white py-6"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', fontWeight: 600 }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Beli Batik Ini
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border-2 border-[#D4A056] text-[#8B5A2B] hover:bg-[#D4A056]/20 py-6"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', fontWeight: 600 }}
                >
                  <Palette className="w-5 h-5 mr-2" />
                  Kustom Versi Kamu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Dialog */}
      <Dialog open={showPurchase} onOpenChange={setShowPurchase}>
        <DialogContent className="bg-[#F2E8D5]">
          <DialogHeader>
            <DialogTitle 
              className="text-[#0A1A2F]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem' }}
            >
              Pilih Model Batik
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Gender Selection */}
            {!gender ? (
              <div className="space-y-4">
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#0A1A2F]">
                  Pilih jenis kelamin:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setGender('male')}
                    className="p-6 border-2 border-[#8B5A2B] rounded-lg hover:bg-[#8B5A2B]/10 transition-colors"
                  >
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }} className="text-[#0A1A2F]">
                      Laki-laki
                    </p>
                  </button>
                  <button
                    onClick={() => setGender('female')}
                    className="p-6 border-2 border-[#8B5A2B] rounded-lg hover:bg-[#8B5A2B]/10 transition-colors"
                  >
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }} className="text-[#0A1A2F]">
                      Perempuan
                    </p>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Mockup Preview */}
                <div className="bg-white rounded-lg p-6 text-center">
                  <ImageWithFallback
                    src={gender === 'male' 
                      ? 'https://images.unsplash.com/photo-1760457356908-807c70c1ebd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMHNoaXJ0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjM0NjkyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080'
                      : 'https://images.unsplash.com/photo-1761516659766-c092d4b1209d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhdGlrJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzYzNDY5MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080'
                    }
                    alt="Batik Preview"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#8B5A2B]">
                    Model {gender === 'male' ? 'Pria' : 'Wanita'}
                  </p>
                </div>

                {/* Size Selection */}
                <div>
                  <label 
                    className="block mb-2 text-[#0A1A2F]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                  >
                    Pilih Ukuran:
                  </label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger className="bg-white border-[#8B5A2B]">
                      <SelectValue placeholder="Pilih ukuran" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                      <SelectItem value="XXL">XXL</SelectItem>
                      <SelectItem value="XXXL">XXXL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Order Button */}
                <Button 
                  onClick={handleOrder}
                  disabled={!size}
                  className="w-full bg-[#8B5A2B] hover:bg-[#6B4521] text-white"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', fontWeight: 600 }}
                >
                  Pesan Sekarang
                </Button>

                {/* Back Button */}
                <Button 
                  onClick={() => setGender(null)}
                  variant="outline"
                  className="w-full border-[#8B5A2B] text-[#8B5A2B]"
                >
                  Kembali
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
