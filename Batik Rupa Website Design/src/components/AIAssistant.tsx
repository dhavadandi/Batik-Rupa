import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIAssistant() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Halo! Saya AI Penata Batik, asisten pribadi Anda untuk menemukan batik yang sempurna. Ceritakan kebutuhan Anda, dan saya akan merekomendasikan motif, warna, dan filosofi yang cocok untuk Anda.'
    }
  ]);

  const suggestedPrompts = [
    "Aku mau batik warna merah, desain simple, buat acara formal",
    "Cari batik untuk pernikahan tradisional Jawa",
    "Batik yang cocok untuk acara kantor tapi tetap modern",
    "Rekomendasi batik dengan makna keberuntungan"
  ];

  const handleSend = () => {
    if (!prompt.trim()) return;

    // Add user message
    const userMessage: Message = { role: 'user', content: prompt };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(prompt);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 1000);

    setPrompt('');
  };

  const generateResponse = (userPrompt: string) => {
    const lowerPrompt = userPrompt.toLowerCase();
    
    if (lowerPrompt.includes('merah') || lowerPrompt.includes('formal')) {
      return `Berdasarkan permintaan Anda, saya merekomendasikan:

🎨 **Warna**: Merah marun dengan aksen emas
📐 **Motif**: Batik Parang atau Truntum - keduanya memiliki pola yang elegan namun tidak terlalu ramai
🎭 **Gaya Pakaian**: Kemeja batik slim fit atau blus batik dengan potongan modern
💫 **Filosofi**: Motif Parang melambangkan kekuatan dan kepemimpinan, cocok untuk kesan authoritative di acara formal
✨ **Tips**: Pilih batik dengan background warna gelap untuk kesan lebih formal dan premium`;
    }
    
    if (lowerPrompt.includes('pernikahan') || lowerPrompt.includes('wedding')) {
      return `Untuk acara pernikahan tradisional, saya sarankan:

🎨 **Warna**: Kombinasi emas, cokelat sogan, atau krem dengan aksen burgundy
📐 **Motif**: Batik Truntum (melambangkan cinta yang tumbuh kembali) atau Kawung (simbol kesucian)
🎭 **Gaya Pakaian**: Kebaya batik untuk wanita, jas batik atau beskap untuk pria
💫 **Filosofi**: Truntum adalah pilihan tradisional untuk pernikahan karena maknanya tentang cinta yang kekal
✨ **Tips**: Sesuaikan dengan dress code keluarga dan adat istiadat yang berlaku`;
    }

    if (lowerPrompt.includes('kantor') || lowerPrompt.includes('office') || lowerPrompt.includes('modern')) {
      return `Untuk lingkungan kantor dengan sentuhan modern:

🎨 **Warna**: Navy blue, abu-abu, atau earth tone dengan motif tidak terlalu kontras
📐 **Motif**: Batik Parang Rusak kecil, Kawung modern, atau motif geometris kontemporer
🎭 **Gaya Pakaian**: Kemeja batik slim fit, blazer batik, atau dress batik A-line
💫 **Filosofi**: Motif sederhana namun tetap bermakna - menunjukkan profesionalisme tanpa kehilangan identitas budaya
✨ **Tips**: Padukan dengan celana formal polos untuk tampilan yang balanced`;
    }

    // Default response
    return `Terima kasih atas pertanyaan Anda! Saya akan memberikan rekomendasi batik terbaik:

🎨 **Warna**: Sesuaikan dengan occasion - formal (gelap), casual (cerah), tradisional (sogan/emas)
📐 **Motif**: Pilih antara klasik (Parang, Kawung) atau modern (geometris kontemporer)
🎭 **Gaya Pakaian**: Sesuaikan dengan body type dan preferensi Anda
💫 **Filosofi**: Setiap motif memiliki makna - pilih yang resonan dengan nilai Anda
✨ **Tips**: Jangan ragu untuk mix & match batik dengan pakaian modern!

Bisa ceritakan lebih detail tentang acara atau kebutuhan Anda?`;
  };

  const handleSuggestedPrompt = (suggestion: string) => {
    setPrompt(suggestion);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F2E8D5] to-[#E5D5C0] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#D4A056]/20 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-[#D4A056]" />
            <span 
              className="text-[#8B5A2B]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              AI-Powered
            </span>
          </div>
          <h2 
            className="text-[#0A1A2F] mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700
            }}
          >
            AI Penata Batik
          </h2>
          <p 
            className="text-[#8B5A2B] max-w-2xl mx-auto"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem'
            }}
          >
            Stylist Pribadi Anda — Dapatkan Rekomendasi Batik yang Sempurna
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.role === 'user'
                      ? 'bg-[#8B5A2B] text-white'
                      : 'bg-[#F2E8D5] text-[#0A1A2F]'
                  }`}
                >
                  <p 
                    style={{ 
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Prompts */}
          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p 
                className="text-[#8B5A2B] mb-3"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}
              >
                Coba pertanyaan ini:
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedPrompt(suggestion)}
                    className="px-4 py-2 bg-[#F2E8D5] hover:bg-[#E5D5C0] text-[#8B5A2B] rounded-full transition-colors text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-[#E5D5C0] p-6">
            <div className="flex gap-3">
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ceritakan kebutuhan batik Anda..."
                className="flex-1 resize-none bg-[#F2E8D5] border-[#D4A056]/30 focus:border-[#D4A056]"
                style={{ fontFamily: "'Inter', sans-serif" }}
                rows={2}
              />
              <Button
                onClick={handleSend}
                className="bg-[#8B5A2B] hover:bg-[#6B4521] text-white px-6"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: '🎨', title: 'Rekomendasi Warna', desc: 'Palet warna yang cocok untuk acara Anda' },
            { icon: '📐', title: 'Pilihan Motif', desc: 'Motif batik berdasarkan makna & kebutuhan' },
            { icon: '💫', title: 'Makna Filosofi', desc: 'Penjelasan mendalam tentang setiap motif' }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 
                className="text-[#0A1A2F] mb-2"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 600 }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-[#8B5A2B]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
