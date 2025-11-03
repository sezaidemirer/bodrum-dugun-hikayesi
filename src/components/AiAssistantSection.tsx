import { useState } from 'react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const AiAssistantSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Merhaba! Size nasıl yardımcı olabilirim? Düğün planlamanız hakkında sorularınızı sorabilirsiniz.',
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

  const handleExampleClick = (example: string) => {
    setInputValue(example);
  };

  const exampleQuestions = [
    "Bodrum'da Eylül ayında açık hava düğünü planlıyorum, çekim için en iyi saat nedir?",
    "Drone çekimi için ekstra kaç saat ayırmalıyız?",
    "Bodrum'da hangi mekanlar düğün çekimi için önerilir?",
  ];

  // YouTube Playlist ID - Buraya kendi playlist ID'nizi ekleyebilirsiniz
  const youtubePlaylistId = 'PLrAXtmRdnEQy6nuLMljL5Z8KjZ4zX5KjX'; // Örnek ID - Kendi playlist ID'nizi ekleyin

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

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            'Tarih ve mekan planlama önerileri',
            'Çekim programı taslağı',
            'Paket önerileri ve blog içerikleri',
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-bodrum-50 p-6 rounded-lg border border-bodrum-100"
            >
              <p className="text-gray-700 font-medium">{feature}</p>
            </div>
          ))}
        </div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sol Sütun - Dijital Asistan */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              Düğün Planlama Asistanı
            </h3>
            
            {/* Chat Interface */}
            <div className="bg-white border-2 border-bodrum-200 rounded-2xl shadow-lg overflow-hidden">
              {/* Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-bodrum-50">
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
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Example Questions */}
              {messages.length === 1 && (
                <div className="px-6 py-4 bg-bodrum-50 border-t border-bodrum-200">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Örnek sorular:
                  </p>
                  <div className="space-y-2">
                    {exampleQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleExampleClick(question)}
                        className="block w-full text-left text-sm text-bodrum-700 hover:text-bodrum-800 hover:bg-white p-2 rounded transition-colors"
                      >
                        "{question}"
                      </button>
                    ))}
                  </div>
                </div>
              )}

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

          {/* Sağ Sütun - YouTube Video Listesi */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              Düğün Videolarımız
            </h3>
            
            <div className="bg-white border-2 border-bodrum-200 rounded-2xl shadow-lg overflow-hidden">
              {/* Video Listesi */}
              <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-bodrum-50">
                {/* Örnek video listesi - YouTube playlist ID'nizi kullanarak videoları buraya ekleyebilirsiniz */}
                {[
                  {
                    id: 'dQw4w9WgXcQ', // Örnek video ID - değiştirin
                    title: 'Bodrum Koyu Düğünü - Ece & Mert',
                    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg`,
                    duration: '5:23',
                  },
                  {
                    id: 'dQw4w9WgXcQ', // Örnek video ID - değiştirin
                    title: 'Villa Düğünü - Ayşe & Can',
                    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg`,
                    duration: '4:15',
                  },
                  {
                    id: 'dQw4w9WgXcQ', // Örnek video ID - değiştirin
                    title: 'Sahil Düğünü - Zeynep & Emre',
                    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg`,
                    duration: '6:42',
                  },
                  {
                    id: 'dQw4w9WgXcQ', // Örnek video ID - değiştirin
                    title: 'Kır Düğünü - Selin & Burak',
                    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg`,
                    duration: '5:08',
                  },
                  {
                    id: 'dQw4w9WgXcQ', // Örnek video ID - değiştirin
                    title: 'After Party - Deniz & Kaan',
                    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg`,
                    duration: '3:55',
                  },
                ].map((video, index) => (
                  <a
                    key={index}
                    href={`https://www.youtube.com/watch?v=${video.id}&list=${youtubePlaylistId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 p-3 rounded-lg hover:bg-bodrum-50 transition-colors border border-transparent hover:border-bodrum-200 group"
                  >
                    <div className="relative flex-shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-32 h-20 object-cover rounded-lg"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                        {video.duration}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-bodrum-600 transition-colors line-clamp-2">
                        {video.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        YouTube'da izle
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Playlist Link */}
              <div className="p-4 bg-bodrum-50 border-t border-bodrum-200">
                <a
                  href={`https://www.youtube.com/playlist?list=${youtubePlaylistId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-bodrum-600 hover:text-bodrum-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Tüm Videoları İzle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistantSection;
