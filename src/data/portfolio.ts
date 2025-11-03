export interface PortfolioItem {
  id: number;
  title: string;
  couple: string;
  location: string;
  category: string;
  description: string;
  image: string;
  story: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Bodrum Koyu Düğünü",
    couple: "Ece & Mert",
    location: "Bodrum Koyu, Yalıkavak",
    category: "Bodrum Koyu",
    description: "Gün batımında eşsiz bir açık hava düğünü. Sinematik video prodüksiyon ve drone çekimi ile ölümsüzleştirilen unutulmaz anlar.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    story: "Ece ve Mert'in Bodrum koyunda gerçekleşen düğünü, doğal ışığın ve Ege'nin büyülü atmosferinin bir araya geldiği unutulmaz bir hikayeydi. Gün batımı çekimlerimiz, çiftin sevgi dolu anlarını sinematik bir dille yansıttı."
  },
  {
    id: 2,
    title: "Villa Düğünü",
    couple: "Ayşe & Can",
    location: "Bodrum Merkez",
    category: "Villa Düğünleri",
    description: "Özel bir villada lüks ve samimi bir atmosferde geçen düğün. Gelin hazırlık odasından son dansa kadar tüm detaylar.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
    story: "Ayşe ve Can'ın villa düğünü, samimiyet ve lüksün mükemmel birleşimiydi. Geleneksel Ege mimarisinin zarif detayları arasında, çiftin özel anlarını yakaladık."
  },
  {
    id: 3,
    title: "Sahil Düğünü",
    couple: "Zeynep & Emre",
    location: "Bodrum Sahil",
    category: "Sahil Düğünleri",
    description: "Ege Denizi'nin eşsiz manzarası eşliğinde gerçekleşen romantik bir sahil düğünü. Drone çekimi ile havadan görüntülenen muhteşem anlar.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop",
    story: "Zeynep ve Emre'nin sahil düğününde, denizin sesi ve gün batımının renkleri eşsiz bir atmosfer yarattı. Drone çekimlerimiz bu muhteşem manzarayı ölümsüzleştirdi."
  },
  {
    id: 4,
    title: "Kır Düğünü",
    couple: "Selin & Burak",
    location: "Bodrum Kırsal",
    category: "Kır Düğünleri",
    description: "Doğanın içinde, organik dekorasyon ve samimi atmosferle geçen bir kır düğünü. Doğal ışık kullanımı ile öne çıkan fotoğraflar.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
    story: "Selin ve Burak'ın kır düğünü, doğanın en güzel renklerini yansıtan bir hikayeydi. Organik detaylar ve doğal ışık kullanımı ile samimi anları yakaladık."
  },
  {
    id: 5,
    title: "After Party",
    couple: "Deniz & Kaan",
    location: "Bodrum Marina",
    category: "After Party",
    description: "Gece yarısı başlayan ve sabaha kadar süren enerjik bir after party. Renkli ışıklandırma ve dinamik çekimler.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    story: "Deniz ve Kaan'ın after party'si, gece eğlencesinin ve coşkunun en üst seviyede olduğu bir hikayeydi. Dinamik çekim tekniklerimiz ile partinin enerjisini yakaladık."
  },
  {
    id: 6,
    title: "Bodrum Koyu Düğünü",
    couple: "Elif & Arda",
    location: "Yalıkavak",
    category: "Bodrum Koyu",
    description: "Minimalist dekorasyon ve lüks detayların bir araya geldiği modern bir düğün. Sinematik açılar ve duygusal anlar.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    story: "Elif ve Arda'nın düğünü, modern estetik ve geleneksel değerlerin harmanlandığı bir hikayeydi. Minimalist yaklaşımımız ile çiftin özel anlarını vurguladık."
  }
];

export const portfolioCategories = [
  "Tümü",
  "Bodrum Koyu",
  "Villa Düğünleri",
  "Sahil Düğünleri",
  "Kır Düğünleri",
  "After Party"
];

