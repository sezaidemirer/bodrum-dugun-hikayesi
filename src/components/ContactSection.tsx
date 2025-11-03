import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  weddingDate: string;
  location: string;
  guestCount: string;
  services: string[];
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    location: '',
    guestCount: '',
    services: [],
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    'Düğün Hikayesi',
    'Fotoğraf',
    'Video',
    'Drone',
    'Albüm',
    'Diğer',
  ];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad gereklidir';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon gereklidir';
    }
    if (!formData.weddingDate) {
      newErrors.weddingDate = 'Düğün tarihi gereklidir';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form submission - İleride API endpoint'ine gönderilecek
    console.log('Form Data:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        weddingDate: '',
        location: '',
        guestCount: '',
        services: [],
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-bodrum-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Düğün Hikayenizi Konuşalım
            </h2>
            <p className="text-lg text-gray-600">
              Tarih, mekan ve beklentilerinizi yazın, size 24 saat içinde dönüş
              yapalım.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
              <svg
                className="w-16 h-16 text-green-600 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                Talebiniz Alındı!
              </h3>
              <p className="text-gray-700">
                En kısa sürede sizinle iletişime geçeceğiz.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-bodrum-100">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Ad Soyad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bodrum-500 ${
                      errors.name ? 'border-red-500' : 'border-bodrum-200'
                    }`}
                    placeholder="Adınız Soyadınız"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    E-posta <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bodrum-500 ${
                      errors.email ? 'border-red-500' : 'border-bodrum-200'
                    }`}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bodrum-500 ${
                      errors.phone ? 'border-red-500' : 'border-bodrum-200'
                    }`}
                    placeholder="0555 123 45 67"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="weddingDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Düğün Tarihi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    value={formData.weddingDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bodrum-500 ${
                      errors.weddingDate
                        ? 'border-red-500'
                        : 'border-bodrum-200'
                    }`}
                  />
                  {errors.weddingDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.weddingDate}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Düğün Mekanı
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bodrum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bodrum-500"
                    placeholder="Mekan adı veya bölge"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guestCount"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Misafir Sayısı
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bodrum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bodrum-500"
                  >
                    <option value="">Seçiniz</option>
                    <option value="0-50">0-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-150">101-150</option>
                    <option value="151-200">151-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Talep Edilen Hizmetler
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-2 cursor-pointer p-3 rounded-lg border border-bodrum-200 hover:bg-bodrum-50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-4 h-4 text-bodrum-600 border-bodrum-300 rounded focus:ring-bodrum-500"
                      />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mesaj / Detaylar
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-bodrum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bodrum-500 resize-none"
                  placeholder="Düğününüz hakkında ek bilgiler, özel istekler..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-bodrum-600 text-white font-semibold rounded-lg shadow-lg hover:bg-bodrum-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                Teklif İste
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

