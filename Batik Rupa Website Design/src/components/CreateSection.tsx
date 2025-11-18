import { useState } from 'react';
import { Upload, Image as ImageIcon, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Input } from './ui/input';

export function CreateSection() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [forSale, setForSale] = useState(false);
  const [price, setPrice] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = () => {
    if (!uploadedImage || !description) {
      alert('Mohon upload gambar dan isi makna batik Anda!');
      return;
    }
    
    alert(`Karya Anda berhasil dipublikasikan! ${forSale ? `Harga: Rp ${price}` : 'Gratis untuk publik'}`);
    
    // Reset form
    setUploadedImage(null);
    setDescription('');
    setForSale(false);
    setPrice('');
  };

  return (
    <section className="min-h-screen bg-[#0A1A2F] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 
            className="text-[#D4A056] mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700
            }}
          >
            Kreasi Batikmu
          </h2>
          <p 
            className="text-[#F2E8D5] max-w-2xl mx-auto"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem'
            }}
          >
            Ruang Berkarya Para Perancang — Wujudkan Visi Batik Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Upload Section */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h3 
                className="text-[#D4A056] mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Upload Desain Batik
              </h3>
              
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="batik-upload"
                />
                <label
                  htmlFor="batik-upload"
                  className="block cursor-pointer"
                >
                  {uploadedImage ? (
                    <div className="relative rounded-xl overflow-hidden group">
                      <img
                        src={uploadedImage}
                        alt="Uploaded batik"
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <p 
                          className="text-white"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                        >
                          Klik untuk ganti gambar
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-[#D4A056] rounded-xl p-12 text-center hover:bg-[#D4A056]/5 transition-colors">
                      <Upload className="w-16 h-16 text-[#D4A056] mx-auto mb-4" />
                      <p 
                        className="text-[#F2E8D5] mb-2"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                      >
                        Klik untuk upload gambar
                      </p>
                      <p 
                        className="text-[#F2E8D5]/60 text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        PNG, JPG hingga 10MB
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Preview Card */}
            {uploadedImage && (
              <div className="bg-[#8B5A2B]/20 rounded-xl p-6 border border-[#D4A056]/30">
                <div className="flex items-center gap-3 mb-3">
                  <ImageIcon className="w-5 h-5 text-[#D4A056]" />
                  <h4 
                    className="text-[#D4A056]"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 600 }}
                  >
                    Preview Karya
                  </h4>
                </div>
                <p 
                  className="text-[#F2E8D5]/80"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Desain batik Anda terlihat menakjubkan! Lengkapi dengan cerita dan makna untuk mempublikasikannya.
                </p>
              </div>
            )}
          </div>

          {/* Form Section */}
          <div className="space-y-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div>
              <h3 
                className="text-[#D4A056] mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Cerita & Makna
              </h3>
              
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ceritakan inspirasi dan filosofi di balik desain batik Anda..."
                className="min-h-64 bg-[#F2E8D5]/10 border-[#D4A056]/30 text-[#F2E8D5] placeholder:text-[#F2E8D5]/40 focus:border-[#D4A056]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              
              <p 
                className="text-[#F2E8D5]/60 text-sm mt-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {description.length} / 500 karakter
              </p>
            </div>

            {/* Publishing Options */}
            <div className="bg-[#8B5A2B]/20 rounded-xl p-6 border border-[#D4A056]/30 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label 
                    htmlFor="for-sale"
                    className="text-[#F2E8D5]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 600 }}
                  >
                    Jual di Marketplace
                  </Label>
                  <p 
                    className="text-[#F2E8D5]/60 text-sm mt-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {forSale ? 'Karya akan dijual' : 'Gratis untuk publik'}
                  </p>
                </div>
                <Switch
                  id="for-sale"
                  checked={forSale}
                  onCheckedChange={setForSale}
                />
              </div>

              {forSale && (
                <div className="animate-fade-in">
                  <Label 
                    htmlFor="price"
                    className="text-[#F2E8D5] mb-2 block"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Harga (Rp)
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4A056]" />
                    <Input
                      id="price"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="150000"
                      className="pl-10 bg-[#F2E8D5]/10 border-[#D4A056]/30 text-[#F2E8D5] placeholder:text-[#F2E8D5]/40"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Publish Button */}
            <Button
              onClick={handlePublish}
              disabled={!uploadedImage || !description}
              className="w-full bg-[#D4A056] hover:bg-[#c49046] text-[#0A1A2F] py-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', fontWeight: 600 }}
            >
              Publikasikan Karyamu
            </Button>

            {/* Info */}
            <div className="bg-[#D4A056]/10 rounded-lg p-4 border border-[#D4A056]/30">
              <p 
                className="text-[#F2E8D5]/80 text-sm"
                style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}
              >
                💡 <strong>Tips:</strong> Karya terbaik memiliki cerita yang menarik dan makna filosofis yang mendalam. 
                Bagikan inspirasi Anda untuk menginspirasi orang lain!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
