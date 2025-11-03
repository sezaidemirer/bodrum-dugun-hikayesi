const AlbumsSection = () => {
  const albums = [
    {
      title: 'Premium Linen Albüm',
      description: 'El yapımı, premium kalitede linen ciltli albüm',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=600&fit=crop',
      features: [
        'Luxury linen cilt',
        'Fine art kağıt',
        '40-60 sayfa',
        '30x30 cm, 25x25 cm',
      ],
    },
    {
      title: 'Deri Kapaklı Fine Art Albüm',
      description: 'İtalyan derisi ile özel tasarım albüm',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=600&fit=crop',
      features: [
        'İtalyan deri cilt',
        'Fine art mat kağıt',
        '50-80 sayfa',
        '35x35 cm, 30x30 cm',
      ],
    },
    {
      title: 'Aile Albümü Seti',
      description: 'Çift albüm + mini aile albümü seti',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=600&fit=crop',
      features: [
        '2 adet ana albüm',
        '1 adet mini albüm',
        'Tüm fotoğraflar',
        'Özel tasarım kutusu',
      ],
    },
    {
      title: 'Masaüstü Mini Albüm',
      description: 'Ofis ve ev için şık mini albüm',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=600&fit=crop',
      features: [
        'Sert kapak',
        'Premium kağıt',
        '20-30 sayfa',
        '15x15 cm, 20x20 cm',
      ],
    },
  ];

  return (
    <section id="albums" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Albüm ve Baskı Modellerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            El yapımı, premium ciltler ve fine art baskı seçenekleri ile
            düğün anılarınızı fiziksel olarak da ölümsüzleştirin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {albums.map((album, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-bodrum-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  {album.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{album.description}</p>
                <ul className="space-y-2 mb-6">
                  {album.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-bodrum-600 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-bodrum-600 text-white font-semibold rounded-lg shadow-lg hover:bg-bodrum-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            Tüm Albüm Seçeneklerini PDF Katalog Olarak İsteyin
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlbumsSection;

