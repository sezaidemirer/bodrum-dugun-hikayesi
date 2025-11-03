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

  const [videoLoaded, setVideoLoaded] = useState(false);

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


  // YouTube Playlist ID - Buraya kendi playlist ID'nizi ekleyebilirsiniz
  const youtubePlaylistId = 'PLrAXtmRdnEQy6nuLMljL5Z8KjZ4zX5KjX'; // Örnek ID - Kendi playlist ID'nizi ekleyin
  
  // Ana video ID - Playlist yoksa gösterilecek örnek video
  const defaultVideoId = 'BTVLwbKpn70'; // Ana video ID

  return (
    <section id="assistant" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Dijital Düğün Planlama Asistanınız
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Düğün planlamanızda size yardımcı olmak için buradayız. Tarih ve
            mekan planlama önerileri, çekim programı taslağı, fotoğraf & video
            paketleri önerileri ve blog yazılarımızdan akıllı öneriler alabilirsiniz.
          </p>
        </div>

          {/* Reklam Alanı - Erken Rezervasyon */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-bodrum-600 to-bodrum-700 rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                    2026 Erken Rezervasyon Dönemi Başladı
                  </h3>
                  <p className="text-lg text-white/90">
                    %50 indirim fırsatlarını kaçırma! Sınırlı kontenjan için hemen rezervasyon yap.
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-white text-bodrum-600 font-bold rounded-lg hover:bg-bodrum-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
                >
                  Hemen Rezervasyon Yap
                </button>
              </div>
            </div>
          </div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Sol Sütun - Dijital Asistan */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              Düğün Planlama Asistanı: Hera!
            </h3>
            
            {/* Chat Interface */}
            <div className="bg-white border-2 border-bodrum-200 rounded-2xl shadow-lg overflow-hidden flex flex-col" style={{ height: 'calc((50vw - 4rem) * 0.5625)' }}>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-bodrum-50 min-h-0">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isUser ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.isUser
                          ? 'bg-bodrum-600 text-white'
                          : 'bg-white text-gray-800 border border-bodrum-200'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>


              {/* Input */}
              <div className="p-6 bg-white border-t border-bodrum-200">
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Sorunuzu yazın..."
                    className="flex-1 px-4 py-3 border border-bodrum-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bodrum-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSend}
                    className="px-6 py-3 bg-bodrum-600 text-white font-semibold rounded-lg hover:bg-bodrum-700 transition-colors"
                  >
                    Gönder
                  </button>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="text-xs text-gray-500 italic">
              * Bu asistan şu anda demo modunda çalışmaktadır. Gerçek API
              entegrasyonu için /api/chat endpoint'i kullanılacaktır.
            </p>
          </div>

          {/* Sağ Sütun - Ana Video + Playlist */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900">
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
