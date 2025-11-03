# Bodrum Düğün Hikayesi

Lüks destinasyon düğünleri için sinematik fotoğraf, video prodüksiyon ve drone çekimi hizmetleri sunan bir web sitesi.

## Teknolojiler

- **React 19** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Playfair Display & Inter fontları

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production preview
npm run preview
```

## Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── AiAssistantSection.tsx
│   ├── PortfolioSection.tsx
│   ├── AlbumsSection.tsx
│   ├── BlogSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── data/               # Veri dosyaları
│   ├── portfolio.ts
│   ├── blog.ts
│   └── testimonials.ts
├── App.tsx             # Ana uygulama bileşeni
├── main.tsx            # Uygulama giriş noktası
└── index.css           # Global stiller
```

## Özellikler

- ✅ Tamamen responsive tasarım (mobile-first)
- ✅ SEO uyumlu meta tag'ler
- ✅ Smooth scroll navigasyon
- ✅ Sticky header
- ✅ Portfolio filtreleme
- ✅ Modal galeri
- ✅ İletişim formu validasyonu
- ✅ Dijital asistan mock arayüzü
- ✅ Modern ve şık UI/UX

## Renkler ve Tipografi

- **Renkler**: Soft altın (champagne), hafif pastel nude/pembe tonları
- **Başlıklar**: Playfair Display (serif)
- **Metinler**: Inter (sans-serif)

## Geliştirme Notları

- Dijital asistan şu anda mock modda çalışmaktadır. Gerçek API entegrasyonu için `/api/chat` endpoint'i kullanılacaktır.
- Portfolio ve blog verileri `src/data/` klasöründe tutulmaktadır.
- Tüm placeholder görseller Unsplash'ten alınmıştır. Production'da gerçek görseller kullanılmalıdır.
