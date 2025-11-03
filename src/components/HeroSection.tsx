const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row md:items-center md:justify-center overflow-hidden bg-gradient-to-br from-white via-bodrum-50 to-amber-100"
    >
      {/* Animated Background Image - Ken Burns Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 animate-[kenBurns_20s_ease-in-out_infinite]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop')",
          }}
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70" />

      {/* Mobil Görsel - Üstte, Sadece mobilde görünür */}
      <div className="relative w-full h-64 md:hidden">
        <img
          src={`${import.meta.env.BASE_URL || '/'}images/gelin_banner.jpg`}
          alt="Gelin"
          className="w-full h-full object-cover object-center"
          loading="eager"
          onError={(e) => {
            console.error('Gelin görseli yüklenemedi:', e);
            e.currentTarget.src = 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=1200&fit=crop';
          }}
        />
      </div>

      {/* Desktop Görsel - Sağda, Sadece desktop'ta görünür */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-2/5">
        <div className="relative h-full w-full">
          <img
            src={`${import.meta.env.BASE_URL || '/'}images/gelin_banner.jpg`}
            alt="Gelin"
            className="absolute inset-0 w-full h-full object-cover object-center animate-float z-10"
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
            loading="eager"
            onError={(e) => {
              console.error('Gelin görseli yüklenemedi:', e);
              e.currentTarget.src = 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=1200&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/40 to-transparent z-20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-4 lg:px-8 flex-1 flex items-center md:items-center py-8 md:py-0">
        <div className="max-w-full md:max-w-2xl text-left">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Bodrum'da Düğün Hikayenizi
            <br />
            <span className="text-bodrum-600">Sinematik Bir Masala</span>
            <br />
            Dönüştürün
          </h1>

          {/* Description */}
          <p className="text-sm md:text-lg text-gray-700 mb-6 md:mb-10 max-w-2xl leading-relaxed">
            Fotoğraf, video, drone çekimi ve dijital düğün planlama asistanı ile
            tüm süreci tek çatı altında topluyoruz. Bodrum ve Ege kıyılarında
            unutulmaz düğün hikayenizi oluşturun.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 md:gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 md:px-8 md:py-4 bg-bodrum-600 text-white text-sm md:text-base font-semibold rounded-lg shadow-lg hover:bg-bodrum-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              Düğün Hikayenizi Planlayın
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-6 py-3 md:px-8 md:py-4 bg-white text-bodrum-700 text-sm md:text-base font-semibold rounded-lg border-2 border-bodrum-600 hover:bg-bodrum-50 transition-all duration-300"
            >
              Portfolyoyu Gör
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 animate-bounce z-20">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
