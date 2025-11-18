import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1A2F] text-[#F2E8D5] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 
              className="text-[#D4A056] mb-4"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.75rem',
                fontWeight: 700
              }}
            >
              BATIK RUPA
            </h3>
            <p 
              className="text-[#F2E8D5]/80 mb-6"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.7
              }}
            >
              Platform kreatif untuk memahami, menjelajah, dan menciptakan batik Nusantara dengan teknologi AI.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8B5A2B] hover:bg-[#D4A056] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8B5A2B] hover:bg-[#D4A056] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8B5A2B] hover:bg-[#D4A056] rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8B5A2B] hover:bg-[#D4A056] rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Jelajahi */}
          <div>
            <h4 
              className="text-[#D4A056] mb-4"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.25rem',
                fontWeight: 600
              }}
            >
              Jelajahi
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Galeri Motif', section: 'gallery' },
                { label: 'AI Penata Batik', section: 'ai' },
                { label: 'Kreasi Batikmu', section: 'create' },
                { label: 'Marketplace', section: 'marketplace' }
              ].map((item) => (
                <li key={item.section}>
                  <button
                    onClick={() => onNavigate(item.section)}
                    className="text-[#F2E8D5]/80 hover:text-[#D4A056] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tentang */}
          <div>
            <h4 
              className="text-[#D4A056] mb-4"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.25rem',
                fontWeight: 600
              }}
            >
              Tentang
            </h4>
            <ul className="space-y-3">
              {['Tentang Kami', 'Misi Kami', 'Tim Kreatif', 'Kontak'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#F2E8D5]/80 hover:text-[#D4A056] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h4 
              className="text-[#D4A056] mb-4"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.25rem',
                fontWeight: 600
              }}
            >
              Bantuan
            </h4>
            <ul className="space-y-3">
              {['Pusat Bantuan', 'FAQ', 'Kebijakan Privasi', 'Syarat & Ketentuan'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#F2E8D5]/80 hover:text-[#D4A056] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#8B5A2B]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              className="text-[#F2E8D5]/60 text-sm text-center md:text-left"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              © {currentYear} Batik Rupa. Seluruh hak cipta dilindungi.
            </p>
            <p 
              className="text-[#D4A056] text-sm"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Powered by Batik Rupa AI Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
