import { useState } from 'react';
import { portfolioData, portfolioCategories } from '../data/portfolio';
import type { PortfolioItem } from '../data/portfolio';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredPortfolio =
    selectedCategory === 'Tümü'
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <>
      <section id="portfolio" className="py-20 lg:py-32 bg-gradient-to-b from-bodrum-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bodrum'da gerçekleştirdiğimiz unutulmaz düğün hikayelerinden bir seçki
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-bodrum-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-bodrum-200 hover:border-bodrum-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-bodrum-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold text-lg">{item.couple}</p>
                    <p className="text-sm">{item.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {item.couple} – {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                aria-label="Kapat"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                {selectedItem.couple}
              </h3>
              <p className="text-bodrum-600 font-medium mb-4">
                {selectedItem.location}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedItem.story}
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-bodrum-600 text-white font-semibold rounded-lg hover:bg-bodrum-700 transition-colors">
                  Fotoğraf Galerisi
                </button>
                <button className="px-6 py-3 bg-white text-bodrum-600 font-semibold rounded-lg border-2 border-bodrum-600 hover:bg-bodrum-50 transition-colors">
                  Sinematik Klip
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;

