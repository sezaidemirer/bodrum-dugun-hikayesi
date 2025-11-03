export interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  image: string;
  date: string;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Bodrum'da Gün Batımı Düğün Çekimi İçin En İyi Saatler",
    category: "Fotoğraf İpuçları",
    excerpt: "Bodrum'un eşsiz gün batımı manzarasını düğün fotoğraflarınızda yakalamak için en uygun saatleri ve ışık koşullarını keşfedin. Golden hour ve blue hour'un sırlarını öğrenin.",
    slug: "bodrum-gun-batimi-cekim-saatleri",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Drone Çekimi ile Düğün Filminizi Farklı Kılan 5 Detay",
    category: "Drone",
    excerpt: "Havadan çekilen görüntüler düğün filminize sinematik bir derinlik katar. Bodrum'un koyları, villaları ve açık hava mekanlarını drone ile nasıl çekebileceğinizi öğrenin.",
    slug: "drone-cekim-detaylari",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    date: "2024-03-10"
  },
  {
    id: 3,
    title: "Gelin Hazırlık Odasında Fotoğraf Çekimi İçin 7 İpucu",
    category: "Fotoğraf İpuçları",
    excerpt: "Gelin hazırlık anları, düğün hikayenizin en özel bölümlerinden biridir. Bu anları mükemmel şekilde yakalamak için pratik ipuçları ve teknik öneriler.",
    slug: "gelin-hazirlik-odasi-fotograf",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop",
    date: "2024-03-05"
  },
  {
    id: 4,
    title: "Bodrum'da Düğün Mekanı Seçerken Dikkat Edilmesi Gerekenler",
    category: "Planlama",
    excerpt: "Bodrum'un en güzel düğün mekanlarını seçerken nelere dikkat etmelisiniz? Işık, dekorasyon, misafir kapasitesi ve çekim açıları için rehber.",
    slug: "bodrum-dugun-mekani-secimi",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
    date: "2024-02-28"
  },
  {
    id: 5,
    title: "Sinematik Düğün Filmi İçin En İyi Kamera Açıları",
    category: "Video Prodüksiyon",
    excerpt: "Profesyonel bir düğün filmi için hangi kamera açıları ve çekim teknikleri kullanılmalı? Nikah, yemek, dans gibi farklı bölümler için öneriler.",
    slug: "sinematik-dugun-filmi-kamera-acilari",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    date: "2024-02-20"
  },
  {
    id: 6,
    title: "Ege Bölgesi'nde Destinasyon Düğün Planlama Rehberi",
    category: "Planlama",
    excerpt: "Bodrum ve çevresinde destinasyon düğünü planlarken izlemeniz gereken adımlar. Konaklama, ulaşım, mekan seçimi ve zamanlama önerileri.",
    slug: "ege-destinasyon-dugun-planlama",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
    date: "2024-02-15"
  }
];

