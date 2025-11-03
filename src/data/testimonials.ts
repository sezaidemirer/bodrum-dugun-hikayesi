export interface Testimonial {
  id: number;
  couple: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    couple: "Ece & Mert",
    location: "Bodrum Koyu, Yalıkavak",
    date: "Eylül 2024",
    rating: 5,
    comment: "Düğünümüzün her anını sinematik bir masala dönüştürdüler. Fotoğraflar ve videolar o kadar profesyonel ve duygusal ki, her izlediğimizde o günü tekrar yaşıyoruz. Özellikle drone çekimleri muhteşem oldu!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    couple: "Ayşe & Can",
    location: "Bodrum Villa",
    date: "Ağustos 2024",
    rating: 5,
    comment: "Sadece fotoğrafçı değil, gerçek bir hikaye anlatıcısıydılar. Gelin hazırlık odasından son dansa kadar her detayı yakaladılar. Albumlerimiz de çok kaliteli, ailemiz çok beğendi.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    couple: "Zeynep & Emre",
    location: "Bodrum Sahil",
    date: "Temmuz 2024",
    rating: 5,
    comment: "Dijital asistan özelliği sayesinde tüm planlamamızı kolaylaştırdık. Çekim saatleri, mekan önerileri, her şey için destek aldık. Ekip çok profesyonel ve samimi, kesinlikle tavsiye ederiz.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    id: 4,
    couple: "Selin & Burak",
    location: "Bodrum Kırsal",
    date: "Haziran 2024",
    rating: 5,
    comment: "Bodrum'un doğal güzelliğini ve düğünümüzün samimi atmosferini mükemmel bir şekilde yansıttılar. Video prodüksiyon kalitesi çok yüksek, highlight klibimiz herkesi çok etkiledi.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  }
];

