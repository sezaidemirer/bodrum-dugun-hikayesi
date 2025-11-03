const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Bodrum Düğün Hikayesi
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Bodrum ve Ege kıyılarında lüks destinasyon düğünleri için
              sinematik fotoğraf, video prodüksiyon ve drone çekimi hizmetleri
              sunuyoruz. Her düğünün benzersiz bir hikayesi vardır, bizim
              görevimiz bu hikayeyi ölümsüzleştirmektir.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm hover:text-bodrum-400 transition-colors"
                >
                  Düğün Hikayesi
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-sm hover:text-bodrum-400 transition-colors"
                >
                  Hizmetler
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-sm hover:text-bodrum-400 transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-sm hover:text-bodrum-400 transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm hover:text-bodrum-400 transition-colors"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-bodrum-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+90 555 123 45 67</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-bodrum-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@bodrumdugunhikayesi.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-bodrum-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Bodrum Merkez, Muğla
                  <br />
                  Türkiye
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © {currentYear} Bodrum Düğün Hikayesi. Tüm hakları saklıdır.
            </p>
            <p className="text-gray-500">
              Site tasarımı & geliştirme:{' '}
              <span className="text-bodrum-400">Raw Ajans</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

