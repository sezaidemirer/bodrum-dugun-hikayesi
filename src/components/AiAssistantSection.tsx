import { useState } from 'react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const AiAssistantSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '💬 Merhaba!\n\nBen Dijital Düğün Planlama Asistanın Hera.\n\nMitolojik bir hikayenin sıcaklığında, sana özel bir düğün çekimi planlamak için buradayım.\n\nLütfen aklındaki tüm detayları bana sor — birlikte büyülü bir hikaye yazalım. 💍✨',
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  // Mock responses - İleride gerçek API endpoint'ine bağlanacak: /api/chat
  const getMockResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('saat') || lowerMessage.includes('zaman')) {
      return 'Bodrum\'da düğün çekimi için en ideal saatler gün batımı öncesi 2-3 saat içindedir (golden hour). Bu saatlerde doğal ışık en yumuşak ve romantik tonları verir. Sabah çekimleri için ise 08:00-10:00 arası önerilir.';
    }
    
    if (lowerMessage.includes('drone')) {
      return 'Drone çekimi için genellikle ekstra 1-2 saat ayırmak yeterlidir. En iyi sonuçlar için hava koşullarının uygun olduğu saatlerde (güneşli ve rüzgarsız) çekim yapılır. Bodrum\'un koyları ve açık hava mekanları drone çekimi için mükemmel lokasyonlardır.';
    }
    
    if (lowerMessage.includes('mekan') || lowerMessage.includes('yer')) {
      return 'Bodrum\'da önerdiğimiz düğün mekanları arasında Yalıkavak, Bitez ve Göltürkbükü\'ndeki koylar öne çıkıyor. Ayrıca özel villalar ve butik oteller de çekim için harika atmosferler sunuyor. Mekan seçiminde ışık, çekim açıları ve misafir kapasitesi gibi faktörleri değerlendirmek önemli.';
    }
    
    if (lowerMessage.includes('paket') || lowerMessage.includes('fiyat')) {
      return 'Hizmet paketlerimiz çiftlerin ihtiyaçlarına göre özelleştirilebilir. Temel paketler fotoğraf, video, drone çekimi ve albüm seçeneklerini içerir. Detaylı teklif almak için iletişim formunu doldurabilir veya doğrudan bizimle iletişime geçebilirsiniz.';
    }
    
    return 'Bodrum\'da düğün planlamanız için size yardımcı olmaktan mutluluk duyarım. Daha spesifik sorularınız varsa (tarih, mekan, çekim programı vb.) sorabilirsiniz.';
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: getMockResponse(inputValue),
      isUser: false,
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputValue('');
  };

  // Ana video ID - Playlist yoksa gösterilecek örnek video
  const defaultVideoId = 'BTVLwbKpn70'; // Ana video ID

  return (
    <section id="assistant" className="py-12 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-3 md:mb-4">
            Dijital Düğün Planlama Asistanınız
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Düğün planlamanızda size yardımcı olmak için buradayız. Tarih ve
            mekan planlama önerileri, çekim programı taslağı, fotoğraf & video
            paketleri önerileri ve blog yazılarımızdan akıllı öneriler alabilirsiniz.
          </p>
        </div>

          {/* Reklam Alanı - Erken Rezervasyon */}
          <div className="mb-8 md:mb-12">
            <div className="bg-gradient-to-r from-bodrum-600 to-bodrum-700 rounded-xl p-4 md:p-6 lg:p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-serif font-bold text-white mb-1 md:mb-2">
                    2026 Erken Rezervasyon Dönemi Başladı
                  </h3>
                  <p className="text-sm md:text-lg text-white/90">
                    %50 indirim fırsatlarını kaçırma! Sınırlı kontenjan için hemen rezervasyon yap.
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-bodrum-600 text-sm md:text-base font-bold rounded-lg hover:bg-bodrum-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Hemen Rezervasyon Yap
                </button>
              </div>
            </div>
          </div>

        {/* 2 Column Layout - Mobilde tek sütun, desktop'ta 2 sütun */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Sol Sütun - Dijital Asistan */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
              Düğün Planlama Asistanı: Hera!
            </h3>
            
            {/* Chat Interface - Mobilde sabit yükseklik, desktop'ta video ile eşit */}
            <div className="bg-white border-2 border-bodrum-200 rounded-2xl shadow-lg overflow-hidden flex flex-col" style={{ height: 'clamp(400px, 60vh, calc((50vw - 4rem) * 0.5625))' }}>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3 md:space-y-4 bg-gradient-to-b from-white to-bodrum-50 min-h-0">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isUser ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] md:max-w-[80%] rounded-lg p-3 md:p-4 ${
                        message.isUser
                          ? 'bg-bodrum-600 text-white'
                          : 'bg-white text-gray-800 border border-bodrum-200'
                      }`}
                    >
                      <p className="text-xs md:text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>


              {/* Input */}
              <div className="p-4 md:p-6 bg-white border-t border-bodrum-200">
                <div className="flex gap-2 md:gap-4">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Sorunuzu yazın..."
                    className="flex-1 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-bodrum-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bodrum-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSend}
                    className="px-4 md:px-6 py-2 md:py-3 bg-bodrum-600 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-bodrum-700 transition-colors"
                  >
                    Gönder
                  </button>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="text-xs text-gray-500 italic px-1">
              * Bu asistan şu anda demo modunda çalışmaktadır. Gerçek API
              entegrasyonu için /api/chat endpoint'i kullanılacaktır.
            </p>
          </div>

          {/* Sağ Sütun - Ana Video + Playlist */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
              Rehber Video İçerikleri
            </h3>
            
            <div className="bg-white border-2 border-bodrum-200 rounded-2xl shadow-lg overflow-hidden">
              {/* Ana Video Player - Üstte */}
              <div className="relative w-full rounded-t-2xl overflow-hidden bg-gray-900" style={{ paddingBottom: '56.25%' }} id="video-player">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                  src={`https://www.youtube.com/embed/${defaultVideoId}?rel=0&modestbranding=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistantSection;
