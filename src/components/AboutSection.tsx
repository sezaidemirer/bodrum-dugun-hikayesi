const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Biz Kimiz & Düğün Hikayesi
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Bodrum Düğün Hikayesi olarak, her düğünün benzersiz bir
                hikayesi olduğuna inanıyoruz. Bizim görevimiz, bu özel gününüzü
                sinematik bir dille anlatmak ve yaşadığınız her anı ölümsüzleştirmek.
              </p>
              <p>
                Bodrum'un eşsiz atmosferi, Ege'nin büyülü ışığı ve doğal
                güzellikleri, düğün fotoğraflarınız ve videolarınız için
                mükemmel bir arka plan oluşturur. Biz, bu atmosferi en iyi
                şekilde yakalayarak, çiftlerin sevgi hikayelerini görsel bir
                şölene dönüştürüyoruz.
              </p>
              <p>
                Gelin hazırlık odasından ilk dansa, nikah töreninden after
                party'ye kadar tüm gün boyunca yanınızdayız. Her detayı
                yakalıyor, her duyguyu görüntülüyoruz.
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ),
                  title: 'Kişiye özel hikaye kurgusu',
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  title: 'Sinematik video prodüksiyon',
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  title: 'Tam gün düğün belgeseli',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-bodrum-50 border border-bodrum-100"
                >
                  <div className="text-bodrum-600 mb-3">{feature.icon}</div>
                  <p className="text-sm font-medium text-gray-700">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=800&fit=crop"
                  alt="Düğün fotoğrafı"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop"
                  alt="Düğün fotoğrafı"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop"
                  alt="Düğün fotoğrafı"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=800&fit=crop"
                  alt="Düğün fotoğrafı"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

