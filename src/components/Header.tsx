import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Daha az ve sade menü öğeleri
  const menuItems = [
    { label: 'Hizmetler', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Blog', id: 'blog' },
    { label: 'İletişim', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl lg:text-2xl font-serif font-bold text-gray-900 hover:text-bodrum-600 transition-colors"
          >
            Bodrum Düğün Hikayesi
          </button>

          {/* Desktop Menu - Daha geniş spacing */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-700 hover:text-bodrum-600 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bodrum-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA Button - Sadece desktop'ta */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-bodrum-600 text-white text-sm font-semibold rounded-lg hover:bg-bodrum-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Teklif Al
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-bodrum-600 transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Daha temiz tasarım */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-bodrum-50 hover:text-bodrum-600 transition-colors rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-sm font-semibold text-white bg-bodrum-600 hover:bg-bodrum-700 transition-colors rounded-lg mt-2"
              >
                Teklif Al
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
