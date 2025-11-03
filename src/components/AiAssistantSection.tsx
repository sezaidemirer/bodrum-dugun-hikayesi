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
  const youtubePlaylistId = 'PLrAXtmRdnEQy6nuLMljL5Z8KjZ4zX5KjX'; // Örnek ID

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

          {/* Sağ Sütun - YouTube Video Playlist */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              Düğün Videolarımız
            </h3>
            
            <div className="bg-white border-2 border-bodrum-200 rounded-2xl shadow-lg overflow-hidden">
              {/* YouTube Playlist Embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                  src={`https://www.youtube.com/embed/videoseries?list=${youtubePlaylistId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Playlist Info */}
              <div className="p-6 bg-gradient-to-b from-white to-bodrum-50">
                <p className="text-sm text-gray-600 mb-2">
                  Bodrum'da gerçekleştirdiğimiz düğünlerden özel videolar
                </p>
                <p className="text-xs text-gray-500">
                  Playlist'teki tüm videoları izleyebilir, düğün planlamanız için ilham alabilirsiniz.
                </p>
              </div>
            </div>

            {/* Alternative: Single Video Embed */}
            <div className="bg-bodrum-50 p-4 rounded-lg border border-bodrum-200">
              <p className="text-sm text-gray-700 mb-2 font-medium">
                💡 İpucu
              </p>
              <p className="text-xs text-gray-600">
                Kendi YouTube playlist ID'nizi eklemek için component içindeki <code className="bg-white px-2 py-1 rounded">youtubePlaylistId</code> değişkenini güncelleyin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistantSection;
