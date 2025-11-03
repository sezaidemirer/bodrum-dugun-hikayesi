import { blogData } from '../data/blog';

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-gradient-to-b from-white to-bodrum-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Düğün planlama, fotoğraf ve video çekimi hakkında ipuçları ve
            rehberler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-bodrum-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-bodrum-700">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <time className="text-xs text-gray-500 mb-2 block">
                  {new Date(post.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-bodrum-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-bodrum-600 font-medium text-sm hover:text-bodrum-700 transition-colors flex items-center gap-2">
                  Devamını Oku
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

